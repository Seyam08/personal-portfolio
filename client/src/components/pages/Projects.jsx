import { projects } from "../../constants/project";
import Heading from "../subComponents/Heading";
import ListItem from "../subComponents/ListItem";

export default function Projects() {
  return (
    <>
      <Heading customClass={"animate-up"}>
        What I&apos;ve been working on
      </Heading>
      <div>
        {projects.map((project, key) => {
          const { title, thumbnail, description, stack, repo } = project;
          return (
            <ListItem
              key={key}
              title={title}
              thumbnail={thumbnail}
              description={description}
              tags={stack}
              link={repo}
            />
          );
        })}
      </div>
    </>
  );
}
