export interface IntroduceYourselfFormData {
  profilePicture?: File;
  fullName: string;
  district: string;
  city: string;
  phoneNumber: string;
  personalPanNumber: string;
  whatsAppNumber: string;
  gmail: string;
}

export interface BankAccountDetailsFormData {
  bankName: string;
  bankAccountNumber: string;
  registeredPhoneNumber: string;
}

export interface OnboardingFormData {
  introduceYourself: IntroduceYourselfFormData;
  bankAccountDetails: BankAccountDetailsFormData;
}
