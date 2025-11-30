# Affiliate Onboarding Feature

A multi-step form for affiliate onboarding with React Hook Form and Zod validation.

## Project Structure

```
app/
├── components/
│   └── ui/                      # Reusable UI components
│       ├── Button.tsx
│       ├── Input.tsx
│       ├── Select.tsx
│       └── index.ts
├── features/
│   └── onboarding/              # Onboarding feature
│       ├── AffiliateOnboarding.tsx  # Main container
│       ├── IntroduceYourself.tsx    # Step 1
│       ├── BankAccountDetails.tsx   # Step 2
│       └── index.ts
├── hooks/
│   └── useMultiStepForm.ts      # Multi-step form hook
├── schemas/
│   └── onboarding.schema.ts     # Zod validation schemas
├── types/
│   └── onboarding.ts            # TypeScript types
└── onboarding/
    └── page.tsx                 # Onboarding page route
```

## Features

- **Multi-step form** with state management
- **React Hook Form** for form handling
- **Zod validation** for type-safe form validation
- **Profile picture upload** with preview
- **Responsive design** matching the provided mockups
- **Step navigation** (back/next)
- **Form data persistence** across steps

## Usage

Navigate to `/onboarding` to access the affiliate onboarding flow.

## Form Steps

1. **Introduce Yourself** - Personal information and profile setup
2. **Bank Account Details** - Banking information for affiliate payments

## Customization

- Update `districts`, `cities`, and other dropdown options in the component files
- Modify validation rules in `app/schemas/onboarding.schema.ts`
- Add API integration in `AffiliateOnboarding.tsx` `handleBankDetailsSubmit` function
