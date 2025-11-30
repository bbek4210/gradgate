"use client";

import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/app/components/ui/Input";
import { Button } from "@/app/components/ui/Button";
import {
  consultancyOnboardingSchema,
  type ConsultancyOnboardingFormData,
} from "@/app/schemas/consultancy-onboarding.schema";

interface ConsultancyOnboardingProps {
  onSubmit?: (data: ConsultancyOnboardingFormData) => void;
  initialData?: Partial<ConsultancyOnboardingFormData>;
}

export const ConsultancyOnboarding: React.FC<ConsultancyOnboardingProps> = ({
  onSubmit: onSubmitProp,
  initialData,
}) => {
  const [logoImage, setLogoImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ConsultancyOnboardingFormData>({
    resolver: zodResolver(consultancyOnboardingSchema),
    defaultValues: initialData,
  });

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogoImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = async (data: ConsultancyOnboardingFormData) => {
    // TODO: Submit to your API
    console.log("Consultancy onboarding data:", data);

    if (onSubmitProp) {
      onSubmitProp(data);
    } else {
      // Default behavior
      alert("Consultancy registration submitted successfully!");
    }
  };

  return (
    <div className="min-h-screen bg-[#1D2E5F] p-6 md:p-12">
      <div className="w-full max-w-5xl">
        <h1 className="text-3xl font-bold text-white mb-8">
          Welcome to GradGate
        </h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column - About & Socials */}
            <div className="space-y-8">
              {/* About Section */}
              <div>
                <h2 className="text-xl font-semibold text-white mb-4">About</h2>

                {/* Logo Upload */}
                <div className="mb-6">
                  <p className="text-white text-sm mb-3">LOGO</p>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden">
                      {logoImage ? (
                        <img
                          src={logoImage}
                          alt="Logo"
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <svg
                          className="w-10 h-10 text-gray-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                    </div>
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="text-[#4A9FD8] hover:text-[#3A8FC8] font-medium text-sm"
                    >
                      Upload LOGO
                    </button>
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept=".jpg,.jpeg,.png"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                  </div>
                  <p className="text-gray-400 text-xs mt-2">
                    (Supported Format JPG, PNG)
                  </p>
                </div>

                {/* Form Fields */}
                <div className="space-y-4">
                  <Input
                    label="Name"
                    placeholder="Enter your consultancy name"
                    {...register("name")}
                    error={errors.name?.message}
                  />

                  <Input
                    label="Email"
                    type="email"
                    placeholder="example@domain.com"
                    {...register("email")}
                    error={errors.email?.message}
                  />

                  <Input
                    label="Location (Full address)"
                    placeholder="Enter full address"
                    {...register("location")}
                    error={errors.location?.message}
                  />

                  <Input
                    label="Phone Number"
                    placeholder="+977"
                    {...register("phoneNumber")}
                    error={errors.phoneNumber?.message}
                  />
                </div>
              </div>

              {/* Socials Section */}
              <div>
                <h2 className="text-xl font-semibold text-white mb-4">
                  Socials
                </h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-white text-sm mb-2">
                      Gmail
                    </label>
                    <div className="flex gap-2">
                      <div className="px-4 py-3 rounded-lg bg-white text-gray-900 flex items-center justify-center text-sm">
                        https://
                      </div>
                      <Input
                        placeholder=""
                        {...register("gmail")}
                        error={errors.gmail?.message}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-white text-sm mb-2">
                      Website
                    </label>
                    <div className="flex gap-2">
                      <div className="px-4 py-3 rounded-lg bg-white text-gray-900 flex items-center justify-center text-sm">
                        https://
                      </div>
                      <Input
                        placeholder=""
                        {...register("website")}
                        error={errors.website?.message}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-white text-sm mb-2">
                      TikTok
                    </label>
                    <div className="flex gap-2">
                      <div className="px-4 py-3 rounded-lg bg-white text-gray-900 flex items-center justify-center text-sm">
                        https://
                      </div>
                      <Input
                        placeholder=""
                        {...register("tikTok")}
                        error={errors.tikTok?.message}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-white text-sm mb-2">
                      Instagram
                    </label>
                    <div className="flex gap-2">
                      <div className="px-4 py-3 rounded-lg bg-white text-gray-900 flex items-center justify-center text-sm">
                        https://
                      </div>
                      <Input
                        placeholder=""
                        {...register("instagram")}
                        error={errors.instagram?.message}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-white text-sm mb-2">
                      Facebook
                    </label>
                    <div className="flex gap-2">
                      <div className="px-4 py-3 rounded-lg bg-white text-gray-900 flex items-center justify-center text-sm">
                        https://
                      </div>
                      <Input
                        placeholder=""
                        {...register("facebook")}
                        error={errors.facebook?.message}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Credibility Video URL */}
              <div>
                <h2 className="text-xl font-semibold text-white mb-2">
                  Credibility Video URL
                </h2>
                <p className="text-gray-300 text-sm mb-4">
                  Please provide us videos from your social accounts that proves
                  your consultancy&apos;s skill and credibility.
                </p>
                <div className="space-y-4">
                  <div>
                    <label className="block text-white text-sm mb-2">
                      Video 1
                    </label>
                    <div className="flex gap-2">
                      <div className="px-4 py-3 rounded-lg bg-white text-gray-900 flex items-center justify-center text-sm">
                        https://
                      </div>
                      <Input
                        placeholder=""
                        {...register("video1")}
                        error={errors.video1?.message}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-white text-sm mb-2">
                      Video 2
                    </label>
                    <div className="flex gap-2">
                      <div className="px-4 py-3 rounded-lg bg-white text-gray-900 flex items-center justify-center text-sm">
                        https://
                      </div>
                      <Input
                        placeholder=""
                        {...register("video2")}
                        error={errors.video2?.message}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-white text-sm mb-2">
                      Video 3
                    </label>
                    <div className="flex gap-2">
                      <div className="px-4 py-3 rounded-lg bg-white text-gray-900 flex items-center justify-center text-sm">
                        https://
                      </div>
                      <Input
                        placeholder=""
                        {...register("video3")}
                        error={errors.video3?.message}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-8">
            <Button type="submit" variant="primary" className="w-auto">
              Register
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
