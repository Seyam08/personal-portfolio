import { Link } from "react-router-dom";
import { TrimSentence } from "../../utils/TrimSentence";
import Paragraph from "./Paragraph";
import Title from "./Title";

export default function GridItem({
  title,
  thumbnail,
  description,
  tags,
  link,
}) {
  return (
    <div className="flex h-full flex-col bg-secondary border-thin rounded-lg animate-up overflow-hidden p-2 transition-colors hover:border-teal-400">
      <div className="group overflow-hidden rounded-md bg-primary">
        <Link className="block" to={link} target="_blank">
          <img
            className="aspect-video w-full rounded-md object-cover group-hover:scale-110 transition-all duration-500"
            src={thumbnail}
            alt={title}
          />
        </Link>
      </div>
      <div className="flex flex-1 flex-col justify-between px-2 py-4">
        <div>
          <Link to={link} target="_blank">
            <Title customClass={"mb-4 hover:underline"}>{title}</Title>
          </Link>
          <Paragraph customClass={"mb-3"}>
            <TrimSentence
              sentence={description}
              numberOfWords={15}
              link={link}
            />
          </Paragraph>
        </div>
        <div className="flex flex-row flex-wrap mt-3">
          {tags.map((tag, key) => (
            <span
              key={key}
              className="text-xs px-1 py-0.5 mr-2 mb-1 text-secondary border border-thin rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
