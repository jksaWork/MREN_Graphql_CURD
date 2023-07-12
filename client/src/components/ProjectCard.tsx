import { ProjectInterface } from "./Projects";
import trashImage from "../assets/icons8-trash-50.png";
import { useMutation } from "@apollo/client";
import { DELETE_PROJECT_MUTATION } from "../graphql/mutation/projectMutation";
import { FETCH_PROJECT_QUERY } from "../graphql/query/ProjectQuery";
import ProjectModal from "./ProjectModal";
// AddProject
function ProjectCard({ project }: { project: ProjectInterface }) {
  const [deleteProject] = useMutation(DELETE_PROJECT_MUTATION, {
    variables: { id: project.id },
    refetchQueries: [{ query: FETCH_PROJECT_QUERY }],
  });
  return (
    <div>
      <a
        href="#"
        className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <div className="flex justify-between">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {project.name}
          </h5>
          <div className="flex gap-1">
            <ProjectModal project={project} type="edit" />
            <span
              onClick={() => deleteProject()}
              className="bg-gray-200 flex items-center justify-center rounded-md py-2 px-3 "
            >
              <img src={trashImage} className="w-[20px]" />
            </span>
          </div>
        </div>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {project.description}
        </p>
      </a>
    </div>
  );
}

export default ProjectCard;
