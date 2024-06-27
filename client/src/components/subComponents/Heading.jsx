export default function Heading({ children, customClass }) {
  return (
    <h1
      className={`font-black text-xl md:text-2xl lg:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-neutral-700 dark:from-slate-100 to-neutral-500 dark:to-slate-300 ${customClass}`}
    >
      {children}
    </h1>
  );
}
