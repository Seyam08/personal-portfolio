import { techStacks } from "../../constants/techStacks";

export default function TechStack({ customClass }) {
  return (
    <div className={`flex flex-row flex-wrap gap-1.5 ${customClass}`}>
      {techStacks.map(({ stack, iconUrl }, key) => (
        <img
          key={key}
          align="center"
          src={iconUrl}
          alt={stack}
          className="rounded-md"
        />
      ))}
    </div>
  );
}
