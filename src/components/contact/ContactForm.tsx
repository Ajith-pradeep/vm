"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, type ContactFormValues } from "@/lib/validation";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type Status = "idle" | "submitting" | "success" | "error" | "dev";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [serverMessage, setServerMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
      website: "",
    },
  });

  const onSubmit = handleSubmit(async (values) => {
    setStatus("submitting");
    setServerMessage("");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = (await response.json()) as {
        ok: boolean;
        mode?: string;
        message?: string;
      };

      if (!response.ok || !data.ok) {
        setStatus("error");
        setServerMessage(data.message ?? "Unable to send your message right now.");
        return;
      }

      if (data.mode === "development") {
        setStatus("dev");
        setServerMessage(
          data.message ??
            "Form validated successfully. Email delivery is not configured yet.",
        );
      } else {
        setStatus("success");
        setServerMessage(data.message ?? "Thank you. Your message has been received.");
      }
      reset();
    } catch {
      setStatus("error");
      setServerMessage("A network error occurred. Please try again.");
    }
  });

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="Full name"
          error={errors.name?.message}
          id="name"
        >
          <input
            id="name"
            autoComplete="name"
            className={inputClass(!!errors.name)}
            {...register("name")}
          />
        </Field>
        <Field label="Email" error={errors.email?.message} id="email">
          <input
            id="email"
            type="email"
            autoComplete="email"
            className={inputClass(!!errors.email)}
            {...register("email")}
          />
        </Field>
      </div>

      <Field label="Subject" error={errors.subject?.message} id="subject">
        <input
          id="subject"
          className={inputClass(!!errors.subject)}
          {...register("subject")}
        />
      </Field>

      <Field label="Message" error={errors.message?.message} id="message">
        <textarea
          id="message"
          rows={6}
          className={cn(inputClass(!!errors.message), "resize-y")}
          {...register("message")}
        />
      </Field>

      {/* Honeypot */}
      <div className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden" aria-hidden>
        <label htmlFor="website">Website</label>
        <input id="website" tabIndex={-1} autoComplete="off" {...register("website")} />
      </div>

      <Button type="submit" disabled={status === "submitting"} className="w-full sm:w-auto">
        {status === "submitting" ? "Sending…" : "Send Message"}
      </Button>

      {status === "success" || status === "dev" || status === "error" ? (
        <p
          role="status"
          className={cn(
            "rounded-md border px-4 py-3 text-sm",
            status === "error"
              ? "border-red-200 bg-red-50 text-red-800"
              : status === "dev"
                ? "border-amber-200 bg-amber-50 text-amber-900"
                : "border-emerald-200 bg-emerald-50 text-emerald-900",
          )}
        >
          {serverMessage}
        </p>
      ) : null}
    </form>
  );
}

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="relative">
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-navy">
        {label}
      </label>
      {children}
      {error ? (
        <p className="mt-1.5 text-sm text-red-600" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}

function inputClass(hasError: boolean) {
  return cn(
    "w-full rounded-md border bg-white px-3.5 py-3 text-sm text-navy outline-none transition placeholder:text-muted/70 focus:border-saffron",
    hasError ? "border-red-300" : "border-border",
  );
}
