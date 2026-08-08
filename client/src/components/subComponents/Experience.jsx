import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { experiences } from "../../constants/experience";
import Title from "./Title";

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
        <span>
          {item.start} &#8594; {item.end}
        </span>
        <span className="text-[10px] md:text-xs">{item.duration}</span>
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
