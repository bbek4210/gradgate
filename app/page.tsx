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
    <div className="min-h-screen bg-[#1c2e5e] text-[#b8e8fc]">
      <header className="mx-auto w-full max-w-7xl px-6 pt-12 lg:px-12 lg:pt-16">
        <div className="flex items-center gap-3.5 text-2xl font-semibold tracking-tight">
          <div className="relative flex h-11 w-11 items-center justify-center">
            <div className="absolute h-11 w-11 rounded-full border-2 border-[#b8e8fc]/60" />
            <div className="absolute h-6 w-6 rounded-full border-2 border-[#b8e8fc]/50" />
          </div>
          GradGate
        </div>
      </header>
      <main className="mx-auto flex min-h-[calc(100vh-180px)] w-full max-w-7xl flex-col gap-12 px-6 py-10 lg:flex-row lg:items-center lg:justify-between lg:gap-24 lg:px-12 lg:py-20">
        <section className="relative isolate w-full px-16 py-24">
          <Image
            src="/bg.svg"
            alt=""
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="pointer-events-none -z-10 rounded-[60px] object-cover opacity-60"
          />
          <div className="space-y-8">
            <h1 className="text-[6.5rem] font-bold leading-[0.88] tracking-tighter text-[#b8e8fc]">
              REFER <br /> & <br /> EARN
            </h1>
            <p className="max-w-lg text-lg leading-relaxed text-white/80">
              Help consultancies connect with students from your network. Earn
              incentives for every referral.
            </p>
          </div>
          <div className="mt-20 flex gap-4">
            <a
              href="#"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-black shadow-lg transition-transform hover:scale-110"
            >
              <FaTiktok size={18} />
            </a>
            <a
              href="#"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-[#1877f2] text-white shadow-lg transition-transform hover:scale-110"
            >
              <FaFacebookF size={18} />
            </a>
            <a
              href="#"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-linear-to-br from-[#f58529] via-[#dd2a7b] to-[#8134af] text-white shadow-lg transition-transform hover:scale-110"
            >
              <FaInstagram size={18} />
            </a>
          </div>
        </section>

        <div className="w-full max-w-md">
          <div className="mb-6 text-center">
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-white/90">
              Register as
            </p>
            <div className="mt-3 flex justify-center gap-4 text-sm font-bold uppercase tracking-wide text-white">
              <button className="underline decoration-2 underline-offset-[6px]">
                EDU CONSULTANCY
              </button>
              <span className="text-white/50">|</span>
              <button className="underline decoration-transparent hover:decoration-white/80 hover:underline-offset-[6px]">
                AFFILIATE
              </button>
            </div>
          </div>
          <section className="relative overflow-hidden rounded-[52px] px-11 py-16 shadow-[0_40px_120px_rgba(0,0,0,0.6)] backdrop-blur-md">
            <Image
              src="/bg.svg"
              alt=""
              fill
              sizes="(max-width: 1024px) 100vw, 400px"
              className="pointer-events-none -z-10 rounded-[52px] object-cover opacity-40"
            />
            <form
              className="space-y-8"
              onSubmit={handleSubmit(onSubmit)}
              noValidate
            >
              <label className="block text-left text-base font-semibold text-white">
                Email
                <input
                  type="email"
                  placeholder="you@gmail.com"
                  className="mt-2.5 w-full rounded-full border border-transparent bg-[#2c4575] px-6 py-4 text-base text-white/90 placeholder:text-white/50 outline-none transition focus:border-white/30 focus:bg-[#2a4370]"
                  {...register("email")}
                />
                {errors.email && (
                  <span className="mt-1.5 block text-xs text-[#ffb4b4]">
                    {errors.email.message}
                  </span>
                )}
              </label>
              <button
                type="submit"
                className="w-full rounded-full bg-[#2c4575] py-4 text-lg font-semibold text-white transition hover:bg-[#284166]"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Logging in..." : "Log In"}
              </button>
              <div className="flex items-center gap-4 text-sm font-medium text-white/80">
                <span className="h-px flex-1 bg-white/25" />
                OR
                <span className="h-px flex-1 bg-white/25" />
              </div>
              <button
                type="button"
                className="flex w-full items-center justify-center gap-3 rounded-full bg-white py-4 text-base font-semibold text-[#1e3260] shadow-lg transition hover:bg-gray-50"
              >
                <span className="flex h-6 w-6 items-center justify-center">
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
                <p className="rounded-2xl bg-[#2c4575] px-5 py-3.5 text-sm text-[#8afcc7]">
                  Thanks! Check your email for the next steps.
                </p>
              )}
            </form>
          </section>
        </div>
      </main>
    </div>
  );
}
