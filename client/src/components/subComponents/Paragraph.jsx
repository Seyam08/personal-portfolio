export default function Paragraph({ children, customClass }) {
  return (
    <p
      className={`text-sm lg:text-base font-normal text-neutral-500 ${customClass}`}
    >
      {children}
    </p>
  );
}
