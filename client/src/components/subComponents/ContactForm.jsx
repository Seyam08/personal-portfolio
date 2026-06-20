import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const CONTACT_FORM_API_ENDPOINT = import.meta.env
  .VITE_CONTACT_FORM_API_ENDPOINT;

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

const inputBase =
  "w-full bg-transparent border-b border-slate-300 dark:border-gray-700 pb-2 pt-1 text-primary placeholder:text-tertiary focus:outline-none transition-[border-color] duration-200 hover:border-slate-400 dark:hover:border-gray-500 focus:border-teal-500 dark:focus:border-teal-400 text-sm md:text-base";

const inputError =
  "border-red-400 dark:border-red-500 hover:border-red-500 dark:hover:border-red-400 focus:border-red-500 dark:focus:border-red-400";

export default function ContactForm({ customClass }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
    setError,
  } = useForm({ resolver: zodResolver(schema) });

  const onSubmit = async (data) => {
    try {
      const res = await fetch(CONTACT_FORM_API_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("Request failed");
      }

      reset();
    } catch (error) {
      setError("root", {
        message: "Failed to send message. Please try again.",
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`space-y-8 ${customClass}`}
      noValidate
    >
      {/* Name */}
      <div className="flex flex-col gap-1">
        <input
          {...register("name")}
          type="text"
          placeholder="Your full name"
          className={`${inputBase} ${errors.name ? inputError : ""}`}
        />
        {errors.name && (
          <span className="text-xs text-red-500 dark:text-red-400 mt-0.5 animate-in">
            {errors.name.message}
          </span>
        )}
      </div>

      {/* Email */}
      <div className="flex flex-col gap-1">
        <input
          {...register("email")}
          type="email"
          placeholder="your@email.com"
          className={`${inputBase} ${errors.email ? inputError : ""}`}
        />
        {errors.email && (
          <span className="text-xs text-red-500 dark:text-red-400 mt-0.5 animate-in">
            {errors.email.message}
          </span>
        )}
      </div>

      {/* Message */}
      <div className="flex flex-col gap-1">
        <textarea
          {...register("message")}
          rows={4}
          placeholder="What's on your mind..."
          className={`${inputBase} resize-none ${errors.message ? inputError : ""}`}
        />
        {errors.message && (
          <span className="text-xs text-red-500 dark:text-red-400 mt-0.5 animate-in">
            {errors.message.message}
          </span>
        )}
      </div>

      {/* Submit */}
      <div className="flex items-center gap-4 flex-wrap">
        <button
          type="submit"
          disabled={isSubmitting}
          className="group inline-flex items-center gap-2 px-7 py-2.5 rounded-lg font-medium text-sm md:text-base bg-tertiary hover:bg-primary text-primary border border-transparent hover:border-thin transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>

        {isSubmitSuccessful && !errors.root && (
          <span className="text-sm text-teal-600 dark:text-teal-400 animate-in">
            Message sent!
          </span>
        )}

        {errors.root && (
          <span className="text-sm text-red-500 dark:text-red-400 animate-in">
            {errors.root.message}
          </span>
        )}
      </div>
    </form>
  );
}
