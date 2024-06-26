import { useLocation } from "react-router-dom";
import Heading from "../subComponents/Heading";

export default function PageNotFound() {
  const { pathname } = useLocation();
  return (
    <Heading>
      There is no page in <span className="text-cyan-500">{pathname}</span>
    </Heading>
  );
}
