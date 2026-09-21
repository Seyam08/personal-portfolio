import { motion, useScroll, useTransform } from "motion/react";
import { useMemo, useRef } from "react";
import { experiences } from "../../constants/experience";
import Title from "./Title";

function isPresentEnd(end) {
  return typeof end === "number";
}

function resolveEndDate(end) {
  // `Date.now()` in constants is evaluated once at module load,
  // so always compare against a fresh `new Date()` for live duration.
  return isPresentEnd(end) ? new Date() : new Date(end);
}

function formatDateLabel(dateInput) {
  const date = new Date(dateInput);
  if (Number.isNaN(date.getTime())) return "";
  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function addMonths(date, months) {
  const result = new Date(date);
  const day = result.getDate();
  result.setDate(1);
  result.setMonth(result.getMonth() + months);
  const daysInMonth = new Date(
    result.getFullYear(),
    result.getMonth() + 1,
    0,
  ).getDate();
  result.setDate(Math.min(day, daysInMonth));
  return result;
}

function formatDuration(startInput, endInput) {
  const start = new Date(startInput);
  const end = resolveEndDate(endInput);
  if (Number.isNaN(start.getTime()) || Number.isNaN(end.getTime())) return "";
  if (end < start) return "";

  const baseMonths =
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth());

  // Full completed months first.
  let totalMonths = baseMonths;
  if (end.getDate() < start.getDate()) totalMonths -= 1;

  // Round up if the leftover partial month is 15+ days.
  const anchor = addMonths(start, totalMonths);
  const leftoverDays = Math.floor((end - anchor) / (1000 * 60 * 60 * 24));
  if (leftoverDays >= 15) totalMonths += 1;

  if (totalMonths < 1) {
    const diffDays = Math.floor((end - start) / (1000 * 60 * 60 * 24));
    if (diffDays < 1) return "Less than a day";
    return `${diffDays} day${diffDays === 1 ? "" : "s"}`;
  }

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  const parts = [];
  if (years > 0) parts.push(`${years} yr${years === 1 ? "" : "s"}`);
  if (months > 0) parts.push(`${months} mo${months === 1 ? "" : "s"}`);
  return parts.join(" ");
}

function ExperienceCardAnimated({ initialX, className, children }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0.7, 1.0], [1, 0]);
  const scale = useTransform(scrollYProgress, [0.7, 1.0], [1, 0.7]);

  return (
    <motion.div ref={ref} style={{ opacity, scale }} className={className}>
      <motion.div
        initial={{ x: initialX, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

function ExperienceCard({ item }) {
  const { dateRangeLabel, durationLabel } = useMemo(() => {
    const isPresent = isPresentEnd(item.end);
    const startLabel = formatDateLabel(item.start);
    const endLabel = isPresent ? "Present" : formatDateLabel(item.end);
    return {
      dateRangeLabel: `${startLabel} → ${endLabel}`,
      durationLabel: formatDuration(item.start, item.end),
    };
  }, [item.start, item.end]);
  return (
    <div className="bg-secondary border-thin rounded-lg flex items-center gap-5 px-5 py-4 w-full">
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className="group shrink-0 w-11 h-11 md:w-17 md:h-17 rounded-full border-2 border-dashed border-teal-400/40 flex items-center justify-center"
      >
        <div className="relative w-8 h-8 md:w-11 md:h-11 rounded-full overflow-hidden transition-transform duration-500 ease-out group-hover:scale-130">
          <img
            src={item.logo}
            alt={item.company}
            className="w-full h-full object-contain"
          />
        </div>
      </a>
      <div className="flex-1 min-w-0">
        <p className="font-semibold text-sm md:text-lg text-primary">
          {item.role}
        </p>
        <motion.span
          initial="rest"
          whileHover="hover"
          animate="rest"
          className="inline-flex overflow-hidden"
        >
          <a
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex text-xs md:text-sm mt-0.5 text-secondary"
          >
            <motion.span
              variants={{ rest: { y: 0 }, hover: { y: "100%" } }}
              transition={{ duration: 0.35, ease: [0.32, 0, 0.18, 1] }}
              className="inline-flex"
            >
              {item.company}
            </motion.span>
            <motion.span
              variants={{ rest: { y: "-100%" }, hover: { y: 0 } }}
              transition={{ duration: 0.35, ease: [0.32, 0, 0.18, 1] }}
              className="absolute inset-0 inline-flex"
            >
              {item.company}
            </motion.span>
          </a>
        </motion.span>
        <div className="flex flex-wrap items-center gap-2 mt-2">
          <span className="text-[10px] md:text-xs px-2 py-0.5 border-thin rounded-full text-tertiary">
            {item.type}
          </span>
        </div>
      </div>
      <div className="shrink-0 flex flex-col items-end gap-1 text-xs md:text-sm font-medium tabular-nums text-tertiary text-right">
        <span>{dateRangeLabel}</span>
        <span className="text-[10px] md:text-xs">{durationLabel}</span>
      </div>
    </div>
  );
}

export default function Experience({ customClass }) {
  return (
    <div className={customClass}>
      <Title customClass={"mb-8 animate-up"}>Experience</Title>

      {/* Timeline */}
      <div className="relative overflow-hidden">
        <div className="absolute left-2 md:left-2.5 inset-y-0 w-px bg-slate-300 dark:bg-gray-800" />

        <div className="flex flex-col gap-4 md:gap-6">
          {experiences.map((item) => (
            <div
              key={`${item.company}-${item.role}`}
              className="flex items-center gap-4 md:gap-6"
            >
              <div className="shrink-0 w-4 md:w-5 flex justify-center z-10">
                <motion.div
                  className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-teal-400"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <ExperienceCardAnimated initialX={24} className="flex-1 min-w-0">
                <ExperienceCard item={item} />
              </ExperienceCardAnimated>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
