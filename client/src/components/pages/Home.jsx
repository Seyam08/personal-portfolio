import image from "../../assets/image/profile.png";
import { projects } from "../../constants/project";
import Emoji from "../subComponents/Emoji";
import Heading from "../subComponents/Heading";
import ListItem from "../subComponents/ListItem";
import Paragraph from "../subComponents/Paragraph";
import Title from "../subComponents/Title";

export default function Home() {
  return (
    <>
      <div className="flex flex-row">
        <div className="max-w-xl basis-3/4">
          <Emoji customClass={"animate-up"}>👋</Emoji>
          <Heading>Hello! Seyam here</Heading>
          <Paragraph customClass={"my-3 animate-up"}>
            I&apos;m a passionate web application developer, currently immersed
            in mastering the MERN stack. My expertise spans JavaScript,
            React.js, Redux, Tailwind.css, HTML, CSS, Git, GitHub and
            foundational Express.js and REST APIs.
          </Paragraph>
        </div>
        <div className="basis-1/4 flex items-end justify-end px-2">
          <div className="w-40 h-40">
            <img
              className="p-1 rounded-full ring-4 ring-teal-400"
              src={image}
              alt="Seyam-Dev"
            />
          </div>
        </div>
      </div>

      <Title customClass={"mt-14 mb-4 animate_up"}>Pinned Projects</Title>
      <div>
        {projects.map((project, key) => {
          const { title, thumbnail, description, stack } = project;
          return (
            <ListItem
              key={key}
              title={title}
              thumbnail={thumbnail}
              description={description}
              stack={stack}
            />
          );
        })}
      </div>
    </>
  );
}
