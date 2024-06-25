export default function Heading({ children }) {
  return (
    <h1 className="font-black text-xl md:text-2xl lg:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-neutral-700 to-neutral-500 animate_up">
      {children}
    </h1>
  );
}
