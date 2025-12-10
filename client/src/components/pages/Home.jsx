import image from "../../assets/image/profile.png";
import { projects } from "../../constants/project";
import Emoji from "../subComponents/Emoji";
import Heading from "../subComponents/Heading";
import ListItem from "../subComponents/ListItem";
import Paragraph from "../subComponents/Paragraph";
import TechStack from "../subComponents/TechStack";
import Title from "../subComponents/Title";

export default function Home() {
  return (
    <>
      {/* Impression  */}
      <div className="w-full flex flex-col-reverse md:flex-row md:justify-between">
        <div className="max-w-xl 2xl:max-w-3xl md:basis-3/4">
          <Emoji customClass={"animate-up"}>👋</Emoji>
          <Heading customClass={"animate-up"}>Hello! Seyam here</Heading>
          <Paragraph customClass={"my-3 animate-up"}>
            I&apos;m a passionate web application developer from Dhaka,
            Bangladesh. Currently immersed in mastering the Full-stack. My true
            passion lies in coding and development. Skilled in JavaScript,
            React.js, NextJS, Redux, TypeScript, Tailwind CSS, Express.js, REST
            APIs, and tools like JWT, RTK Query, Multer, Git/GitHub. Currently
            honing expertise in the Full-stack and eager to contribute to
            innovative projects that solve real-world problems. Committed to
            continuous learning and growth in both frontend and backend
            development.
          </Paragraph>
        </div>
        <div className="md:basis-1/4 flex justify-center md:items-center md:justify-end px-2">
          <div className="w-40 h-40">
            <img
              className="p-1 rounded-full ring-4 ring-teal-400"
              src={image}
              alt="Seyam-Dev"
            />
          </div>
        </div>
      </div>
      {/* Tech Stacks */}
      <div className="flex flex-col gap-4 mt-14 md:flex-row md:gap-9">
        <Title customClass={"animate-up  md:basis-2/12"}>Tech Stack</Title>
        <TechStack customClass={"animate-up md:basis-10/12"} />
      </div>

      {/* Pinned Projecks  */}
      <Title customClass={"mt-14 mb-4 animate-up"}>Pinned Projects</Title>
      <div>
        {projects.map((project, key) => {
          const { title, thumbnail, description, stack, slug } = project;
          return (
            <ListItem
              key={key}
              title={title}
              thumbnail={thumbnail}
              description={description}
              tags={stack}
              link={`/${slug}`}
            />
          );
        })}
      </div>
    </>
  );
}
