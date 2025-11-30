"use client";

import React, { useState } from "react";
import { IntroduceYourself } from "./IntroduceYourself";
import { BankAccountDetails } from "./BankAccountDetails";
import type {
  IntroduceYourselfFormData,
  BankAccountDetailsFormData,
} from "@/app/schemas/onboarding.schema";

type OnboardingStep = "introduce-yourself" | "bank-details";

interface OnboardingData {
  introduceYourself?: IntroduceYourselfFormData;
  bankAccountDetails?: BankAccountDetailsFormData;
}

export const AffiliateOnboarding: React.FC = () => {
  const [currentStep, setCurrentStep] =
    useState<OnboardingStep>("introduce-yourself");
  const [formData, setFormData] = useState<OnboardingData>({});

  const handleIntroduceYourselfSubmit = (data: IntroduceYourselfFormData) => {
    setFormData((prev) => ({
      ...prev,
      introduceYourself: data,
    }));
    setCurrentStep("bank-details");
  };

  const handleBankDetailsSubmit = async (data: BankAccountDetailsFormData) => {
    const completeData = {
      ...formData,
      bankAccountDetails: data,
    };

    // TODO: Submit to your API
    console.log("Complete onboarding data:", completeData);

    // You can add API call here
    // await fetch('/api/affiliate/onboarding', {
    //   method: 'POST',
    //   body: JSON.stringify(completeData),
    // });

    // Redirect after successful submission
    // router.push('/affiliate/dashboard');
    alert("Onboarding completed successfully!");
  };

  const handleBack = () => {
    setCurrentStep("introduce-yourself");
  };

  return (
    <>
      {currentStep === "introduce-yourself" && (
        <IntroduceYourself
          onNext={handleIntroduceYourselfSubmit}
          initialData={formData.introduceYourself}
        />
      )}
      {currentStep === "bank-details" && (
        <BankAccountDetails
          onSubmit={handleBankDetailsSubmit}
          onBack={handleBack}
          initialData={formData.bankAccountDetails}
        />
      )}
    </>
  );
};
