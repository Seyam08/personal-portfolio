import { Link, useParams } from "react-router-dom";
import { projects } from "../../constants/project";
import { techStacks } from "../../constants/techStacks";
import { ArrowUpRightIcon } from "../../icons/Icons";
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
      <div className="flex flex-col gap-4 mt-14 md:flex-row md:gap-9">
        <Title customClass={"md:basis-2/12"}>Live preview</Title>
        <div className="flex flex-row items-center flex-wrap gap-5 md:basis-10/12">
          <CodeBlock>{project.preview}</CodeBlock>
          <span className="text-secondary">or</span>
          <Link
            target={"_blank"}
            to={project.preview}
            className="group bg-tertiary py-2 px-4 rounded-lg transition hover:bg-primary border border-transparent hover:border-thin text-primary"
          >
            <div className="flex items-center gap-3">
              Preview
              <ArrowUpRightIcon
                className={
                  "text-primary h-5 w-5 ml-auto group-hover:rotate-45 transition-transform duration-200"
                }
              />
            </div>
          </Link>
        </div>
      </div>

      {/* Live preview */}
      <div className="flex flex-col gap-4 mt-14 md:flex-row md:gap-9">
        <Title customClass={"md:basis-2/12"}>Repo</Title>
        <div className="flex flex-row items-center flex-wrap gap-5 md:basis-10/12">
          <Link to={project.repo} target="_blank">
            <img
              align="center"
              src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"
              alt="GitHub"
              className="rounded-md hover:scale-105 duration-100"
            />
          </Link>
        </div>
      </div>
      <div className="prose md:prose-sm xl:prose-lg dark:prose-invert">
        {project.content}
      </div>
    </div>
  );
}
