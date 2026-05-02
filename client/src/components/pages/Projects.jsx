import { useState } from "react";
import { projects } from "../../constants/project";
import { GridViewIcon, LeftToRightListDashIcon } from "../../icons/Icons";
import GridItem from "../subComponents/GridItem";
import Heading from "../subComponents/Heading";
import ListItem from "../subComponents/ListItem";

export default function Projects() {
  const [viewMode, setViewMode] = useState("grid");
  const isGridView = viewMode === "grid";
  const ProjectItem = isGridView ? GridItem : ListItem;

  return (
    <>
      <div className="flex flex-row gap-4 animate-up items-center justify-between">
        <Heading customClass={""}>What I&apos;ve been working on</Heading>
        <div className="flex shrink-0 rounded-lg bg-secondary border-thin p-0.5 sm:p-1">
          <button
            className={`flex h-7 w-7 items-center justify-center rounded-md p-1 transition-colors sm:h-8 sm:w-8 ${
              !isGridView
                ? "bg-tertiary text-primary border-thin"
                : "text-secondary border border-transparent hover:border-thin"
            }`}
            type="button"
            aria-pressed={!isGridView}
            onClick={() => setViewMode("list")}
          >
            <LeftToRightListDashIcon className="h-4 w-4 sm:h-5 sm:w-5" />
          </button>
          <button
            className={`flex h-7 w-7 items-center justify-center rounded-md p-1 transition-colors sm:h-8 sm:w-8 ${
              isGridView
                ? "bg-tertiary text-primary border-thin"
                : "text-secondary border border-transparent hover:border-thin"
            }`}
            type="button"
            aria-pressed={isGridView}
            onClick={() => setViewMode("grid")}
          >
            <GridViewIcon className="h-4 w-4 sm:h-5 sm:w-5" />
          </button>
        </div>
      </div>
      <div
        className={
          isGridView ? "grid grid-cols-1 gap-6 my-8 md:grid-cols-2" : ""
        }
      >
        {projects.map((project, key) => {
          const { title, thumbnail, description, stack, slug } = project;
          return (
            <ProjectItem
              key={slug || key}
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
