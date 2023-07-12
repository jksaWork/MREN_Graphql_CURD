import { useQuery } from "@apollo/client";
import { FETCH_PROJECT_QUERY } from "../graphql/query/ProjectQuery";
import { RevolvingDot } from "react-loader-spinner";
import ProjectCard from "./ProjectCard";
import AddProject from "./ProjectModal";
export interface ProjectInterface {
  id: string;
  name: string;
  description: string;
  status: string;
  clientId: string;
}

function Projects() {
  const { loading, error, data } = useQuery(FETCH_PROJECT_QUERY);
  //   console.log()
  if (loading)
    return (
      <div className="w-full h-screen flex m-auto">
        <RevolvingDot
          height="400"
          width="400"
          radius={5}
          color="#4fa94d"
          secondaryColor=""
          ariaLabel="revolving-dot-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    );

  if (error)
    return <div className="text-5xl">Error Somete Thind Whent Wong</div>;

  //   console.log(data);
  const projects: [ProjectInterface] = data.projects;
  return (
    <>
      <div className="flex justify-between">
        <span className="text-3xl">Projects </span>

        <AddProject />
      </div>
      <div className="w-full grid sm:grid-cols-2  mt-3 gap-3">
        {projects.map((el, index) => (
          <ProjectCard key={index} project={el} />
        ))}
      </div>
    </>
  );
}

export default Projects;
