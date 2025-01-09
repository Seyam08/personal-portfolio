export default function Paragraph({ children, customClass }) {
  return (
    <p
      className={`text-base lg:text-lg 2xl:text-xl font-normal text-tertiary ${customClass}`}
    >
      {children}
    </p>
  );
}
