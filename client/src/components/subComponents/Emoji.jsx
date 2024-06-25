export default function Emoji({ children, customClass }) {
  return (
    <div className={`text-xl md:text-2xl lg:text-4xl ${customClass}`}>
      {children}
    </div>
  );
}
