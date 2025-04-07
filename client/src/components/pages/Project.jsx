import { Link, useParams } from "react-router-dom";
import { projects } from "../../constants/project";
import { techStacks } from "../../constants/techStacks";
import CodeBlock from "../subComponents/CodeBlock";
import Heading from "../subComponents/Heading";
import Paragraph from "../subComponents/Paragraph";
import Title from "../subComponents/Title";

export default function Project() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) return <Heading>There is no project in this name!!!</Heading>;

  return (
    <div className="space-y-8">
      <Heading>{project.title}</Heading>
      <Paragraph>{project.description}</Paragraph>

      {/* Project Stacks */}
      <div className="flex flex-col gap-4 mt-14 md:flex-row md:gap-9">
        <Title customClass={"md:basis-2/12"}>Stack</Title>
        <div className={`flex flex-row flex-wrap gap-1.5 md:basis-10/12`}>
          {project.stack.map((projectStack, key) => {
            const matchedStack = techStacks.find(
              ({ stack }) => stack === projectStack
            );

            return matchedStack ? (
              <img
                key={key}
                align="center"
                src={matchedStack.iconUrl}
                alt={matchedStack.stack}
                className="rounded-md"
              />
            ) : null;
          })}
        </div>
      </div>

      {/* Live preview */}
      <div className="flex flex-col items-center gap-4 mt-14 md:flex-row md:gap-9">
        <Title customClass={"md:basis-2/12"}>Live preview</Title>
        <div className="flex flex-row items-center flex-wrap gap-5 md:basis-10/12">
          <Link to={project.preview} target="_blank">
            <img
              align="center"
              src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"
              alt="GitHub"
              className="rounded-md hover:scale-105 duration-100"
            />
          </Link>
          <span className="text-base text-tertiary"> or</span>
          <CodeBlock>{project.preview}</CodeBlock>
        </div>
      </div>

      <div className="prose md:prose-sm xl:prose-lg dark:prose-invert">
        {project.content}
      </div>
    </div>
  );
}
