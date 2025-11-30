"use client";

import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/app/components/ui/Input";
import { Select } from "@/app/components/ui/Select";
import { Button } from "@/app/components/ui/Button";
import {
  introduceYourselfSchema,
  type IntroduceYourselfFormData,
} from "@/app/schemas/onboarding.schema";
import {
  getDistrictOptions,
  getCitiesByDistrict,
} from "@/app/data/nepal-districts";

interface IntroduceYourselfProps {
  onNext: (data: IntroduceYourselfFormData) => void;
  initialData?: Partial<IntroduceYourselfFormData>;
}

export const IntroduceYourself: React.FC<IntroduceYourselfProps> = ({
  onNext,
  initialData,
}) => {
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [selectedDistrict, setSelectedDistrict] = useState<string>(
    initialData?.district || ""
  );
  const fileInputRef = useRef<HTMLInputElement>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm<IntroduceYourselfFormData>({
    resolver: zodResolver(introduceYourselfSchema),
    defaultValues: initialData,
  });

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = (data: IntroduceYourselfFormData) => {
    onNext(data);
  };

  const districts = getDistrictOptions();
  const cities = getCitiesByDistrict(selectedDistrict);

  const handleDistrictChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const district = e.target.value;
    setSelectedDistrict(district);
    setValue("city", ""); // Reset city when district changes
  };

  return (
    <div className="min-h-screen bg-[#1D2E5F] p-6 md:p-12">
      <div className="w-full max-w-4xl">
        <h1 className="text-4xl font-bold text-white mb-8">
          Introduce Yourself
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Profile Picture */}
          <div className="mb-8">
            <p className="text-white text-sm mb-3">Profile Picture</p>
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden">
                {profileImage ? (
                  <img
                    src={profileImage}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <svg
                    className="w-12 h-12 text-gray-400"
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
                className="text-[#4A9FD8] hover:text-[#3A8FC8] font-medium"
              >
                Upload Picture
              </button>
              <input
                ref={fileInputRef}
                type="file"
                accept=".jpg,.jpeg,.png"
                onChange={handleImageUpload}
                className="hidden"
              />
            </div>
            <p className="text-gray-300 text-sm mt-2">
              (Supported Format JPG, PNG)
            </p>
          </div>

          {/* Form Fields Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Column */}
            <div className="space-y-6">
              <Input
                label="Full Name"
                placeholder="Full Name"
                {...register("fullName")}
                error={errors.fullName?.message}
              />

              <Select
                label="District"
                options={districts}
                {...register("district", {
                  onChange: handleDistrictChange,
                })}
                error={errors.district?.message}
              />

              <Select
                label="City"
                options={cities}
                {...register("city")}
                error={errors.city?.message}
              />

              <Input
                label="Phone Number"
                placeholder="+977"
                {...register("phoneNumber")}
                error={errors.phoneNumber?.message}
              />

              <Input
                label="Personal PAN Number"
                placeholder=""
                {...register("personalPanNumber")}
                error={errors.personalPanNumber?.message}
              />
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <div>
                <label className="block text-white text-sm mb-2">
                  What&apos;s App
                </label>
                <div className="flex gap-2">
                  <div className="w-24 px-4 py-3 rounded-lg bg-white text-gray-900 flex items-center justify-center">
                    https://
                  </div>
                  <Input
                    placeholder="Link"
                    {...register("whatsAppNumber")}
                    error={errors.whatsAppNumber?.message}
                  />
                </div>
              </div>

              <div>
                <label className="block text-white text-sm mb-2">Gmail</label>
                <div className="flex gap-2">
                  <div className="w-24 px-4 py-3 rounded-lg bg-white text-gray-900 flex items-center justify-center">
                    https://
                  </div>
                  <Input
                    placeholder="@gmail.com"
                    type="email"
                    {...register("gmail")}
                    error={errors.gmail?.message}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <Button type="submit" variant="primary">
              Save And Continue
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
