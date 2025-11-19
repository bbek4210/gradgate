"use client";

import Image from "next/image";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

const formSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email"),
});

type FormValues = z.infer<typeof formSchema>;

export default function Home() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { email: "" },
  });

  const onSubmit = async () => {
    await new Promise((resolve) => setTimeout(resolve, 800));
    reset();
  };

  return (
    <div className="min-h-screen bg-[#1d2e5f] text-[#c0eefc]">
      <main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-10 px-6 py-16 lg:flex-row lg:items-center lg:justify-between lg:gap-14 lg:px-10">
        <section className="relative isolate w-full overflow-hidden rounded-[52px] px-10 py-14 shadow-[0_45px_120px_rgba(0,0,0,0.4)]">
          <Image
            src="/bg.svg"
            alt=""
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="pointer-events-none -z-10 object-cover"
          />
          <div className="pointer-events-none absolute inset-0 -z-10 rounded-[52px]" />
          <div className="flex items-center gap-4 text-2xl font-semibold">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border ">
              <div className="h-5 w-5 rounded-full border border-[#c0eefc]/40" />
            </div>
            GradGate
          </div>
          <div className="mt-10 space-y-4">
            <h1 className="text-7xl font-bold leading-[0.95] tracking-tight text-[#c0eefc]">
              REFER <br /> & <br /> EARN
            </h1>
            <p className="max-w-md text-lg text-white/80">
              Help consultancies connect with students from your network. Earn
              incentives for every referral.
            </p>
          </div>
          <div className="mt-10 flex gap-4">
            {[FaTiktok, FaFacebookF, FaInstagram].map((Icon, idx) => (
              <span
                key={idx}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#c0eefc] text-[#1d2e5f]"
              >
                <Icon />
              </span>
            ))}
          </div>
        </section>

        <section className="relative w-full max-w-md overflow-hidden rounded-[48px] border border-white/10 bg-[#2c467f]/90 px-10 py-12 shadow-[0_35px_100px_rgba(7,9,26,0.6)]">
          <Image
            src="/bg.svg"
            alt=""
            fill
            sizes="(max-width: 1024px) 100vw, 320px"
            className="pointer-events-none -z-10 object-cover opacity-70"
          />
          <div className="pointer-events-none absolute inset-0 -z-10 rounded-[48px] bg-[#c0eefc]/20" />
          <p className="text-right text-sm uppercase tracking-[0.4em] text-[#9ec8ff]">
            Register as
          </p>
          <div className="mt-3 flex justify-end gap-4 text-xs font-semibold uppercase tracking-wide">
            <button className="underline decoration-2 underline-offset-4">
              Edu Consultancy
            </button>
            <button className="underline decoration-transparent hover:decoration-2 hover:underline-offset-4">
              Affiliate
            </button>
          </div>
          <form
            className="mt-10 space-y-6"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
          >
            <label className="block text-left text-sm font-semibold">
              Email
              <input
                type="email"
                placeholder="you@gmail.com"
                className="mt-2 w-full rounded-full border border-transparent bg-[#1b2d59] px-5 py-3 text-base text-white outline-none transition focus:border-[#c0eefc]/50"
                {...register("email")}
              />
              {errors.email && (
                <span className="mt-1 block text-xs text-[#ffb0b0]">
                  {errors.email.message}
                </span>
              )}
            </label>
            <button
              type="submit"
              className="w-full rounded-full bg-[#152147] py-3 text-lg font-semibold text-[#c0eefc] transition hover:bg-[#0f1834]"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Logging in..." : "Log In"}
            </button>
            <div className="flex items-center gap-3 text-sm text-[#c0eefc]/70">
              <span className="h-px flex-1 bg-white/20" />
              OR
              <span className="h-px flex-1 bg-white/20" />
            </div>
            <button
              type="button"
              className="flex w-full items-center justify-center gap-3 rounded-full bg-white py-3 text-base font-semibold text-[#1d2e5f]"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white">
                <svg viewBox="0 0 24 24" className="h-5 w-5">
                  <path
                    fill="#4285F4"
                    d="M21.35 12.2c0-.64-.06-1.27-.17-1.87H12v3.54h5.27c-.23 1.21-.92 2.24-1.95 2.92v2.43h3.16c1.85-1.7 2.87-4.2 2.87-7.02Z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 22c2.6 0 4.79-.86 6.39-2.33l-3.16-2.43c-.88.59-2 .94-3.23.94-2.48 0-4.59-1.68-5.34-3.95H3.35v2.48A10.003 10.003 0 0 0 12 22Z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M6.66 14.23A5.99 5.99 0 0 1 6.35 12c0-.77.14-1.52.31-2.23V7.29H3.35A9.99 9.99 0 0 0 2 12c0 1.59.38 3.08 1.35 4.71l3.31-2.48Z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 6.02c1.4 0 2.63.48 3.6 1.44l2.67-2.68C16.79 2.9 14.6 2 12 2 8.65 2 5.76 3.92 3.35 7.29l3.31 2.48C7.41 7.7 9.52 6.02 12 6.02Z"
                  />
                </svg>
              </span>
              Sign in with Google
            </button>
            {isSubmitSuccessful && (
              <p className="rounded-2xl bg-[#1b2d59] px-4 py-3 text-sm text-[#8afcc7]">
                Thanks! Check your email for the next steps.
              </p>
            )}
          </form>
        </section>
      </main>
    </div>
  );
}
