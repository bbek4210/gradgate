"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/app/components/ui/Input";
import { Select } from "@/app/components/ui/Select";
import { Button } from "@/app/components/ui/Button";
import {
  bankAccountDetailsSchema,
  type BankAccountDetailsFormData,
} from "@/app/schemas/onboarding.schema";

interface BankAccountDetailsProps {
  onSubmit: (data: BankAccountDetailsFormData) => void;
  onBack: () => void;
  initialData?: Partial<BankAccountDetailsFormData>;
}

export const BankAccountDetails: React.FC<BankAccountDetailsProps> = ({
  onSubmit,
  onBack,
  initialData,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BankAccountDetailsFormData>({
    resolver: zodResolver(bankAccountDetailsSchema),
    defaultValues: initialData,
  });

  const handleFormSubmit = (data: BankAccountDetailsFormData) => {
    onSubmit(data);
  };

  return (
    <div className="min-h-screen bg-[#1D2E5F] p-6 md:p-12">
      <div className="w-full max-w-xl">
        <h1 className="text-4xl font-bold text-white mb-8">
          BANK ACCOUNT DETAILS
        </h1>

        <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6">
          <Input
            label="Bank Name"
            placeholder="eg: Nabil Bank"
            {...register("bankName")}
            error={errors.bankName?.message}
          />

          <Input
            label="Bank Account Number"
            placeholder="eg: 00187971234569801"
            {...register("bankAccountNumber")}
            error={errors.bankAccountNumber?.message}
          />

          <Input
            label="Registered Phone Number"
            placeholder="+977 9812345678"
            {...register("registeredPhoneNumber")}
            error={errors.registeredPhoneNumber?.message}
          />

          <div className="flex gap-4 pt-4">
            <Button type="button" variant="secondary" onClick={onBack}>
              Back
            </Button>
            <Button type="submit" variant="primary">
              Update
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
