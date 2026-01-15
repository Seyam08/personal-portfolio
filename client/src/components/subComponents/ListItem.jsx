import { Link } from "react-router-dom";
import { TrimSentence } from "../../utils/TrimSentence";
import Paragraph from "./Paragraph";
import Title from "./Title";

export default function ListItem({
  title,
  thumbnail,
  description,
  tags,
  link,
}) {
  return (
    <div className="flex flex-col bg-secondary md:flex-row my-8 border-thin rounded-lg animate-up space-x-0 md:space-x-5 px-2">
      <div className="md:basis-2/6 flex items-center group overflow-hidden">
        <Link to={link} target="_blank">
          <img
            className="rounded-md group-hover:scale-110 transition-all duration-500"
            src={thumbnail}
            alt={title}
          />
        </Link>
      </div>
      <div className="flex flex-col justify-between py-3 mx-3 md:basis-4/6">
        <div>
          <Link to={link} target="_blank">
            <Title customClass={"mb-5 hover:underline"}>{title}</Title>
          </Link>
          <Paragraph customClass={"mb-3"}>
            <TrimSentence
              sentence={description}
              numberOfWords={15}
              link={link}
            />
            {/* {trimSentence(description, 15)} */}
          </Paragraph>
        </div>
        <div className="flex flex-row flex-wrap md:mb-1 mt-2 md:mt-0">
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
