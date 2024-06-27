import { Link } from "react-router-dom";

export function TrimSentence({ sentence, numberOfWords, link }) {
  if (typeof numberOfWords !== "number") {
    throw new Error("numberOfWords must be a number");
  }

  const words = sentence.split(" ");

  if (words.length <= numberOfWords) {
    return sentence;
  }

  return (
    <>
      {words.slice(0, numberOfWords).join(" ")}{" "}
      <Link to={link} className="text-teal-500">
        ...more
      </Link>
    </>
  );
}
