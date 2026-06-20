import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

const inputBase =
  "w-full bg-transparent border-b border-slate-300 dark:border-gray-700 pb-2 pt-1 text-primary placeholder:text-tertiary focus:outline-none transition-[border-color,border-bottom-width] duration-200 hover:border-b-2 hover:border-slate-400 dark:hover:border-gray-500 focus:border-b-2 focus:border-teal-500 dark:focus:border-teal-400 text-sm md:text-base";

const inputError =
  "border-red-400 dark:border-red-500 hover:border-red-500 dark:hover:border-red-400 focus:border-red-500 dark:focus:border-red-400";

export default function ContactForm({ customClass }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm({ resolver: zodResolver(schema) });

  const onSubmit = (data) => {
    console.log("Form submitted:", data);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`space-y-8 ${customClass}`}
      noValidate
    >
      {/* Name */}
      <div className="flex flex-col gap-1">
        <label className="text-xs font-semibold uppercase tracking-widest text-secondary select-none">
          Name
        </label>
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
        <label className="text-xs font-semibold uppercase tracking-widest text-secondary select-none">
          Email
        </label>
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
        <label className="text-xs font-semibold uppercase tracking-widest text-secondary select-none">
          Message
        </label>
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
          className="group relative inline-flex items-center gap-2 px-7 py-2.5 rounded-lg font-medium text-sm md:text-base bg-teal-500 hover:bg-teal-600 dark:bg-teal-600 dark:hover:bg-teal-500 text-white transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
          <span className="inline-block transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
            ↗
          </span>
        </button>

        {isSubmitSuccessful && (
          <span className="text-sm text-teal-600 dark:text-teal-400 animate-in">
            Message sent!
          </span>
        )}
      </div>
    </form>
  );
}
