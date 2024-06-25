export default function Paragraph({ children, customClass }) {
  return (
    <p
      className={`text-base lg:text-lg font-normal text-tertiary ${customClass}`}
    >
      {children}
    </p>
  );
}
