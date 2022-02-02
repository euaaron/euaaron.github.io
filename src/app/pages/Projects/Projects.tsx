import { useEffect, useState } from "react";
import { ProjectDTO } from "./models/ProjectDTO";
import { ProjectService } from "./services/ProjectService";

export function Projects() {
  const [projects, setProjects] = useState<ProjectDTO[]>([]);

  useEffect(() => {
    ProjectService.getInstance()
      .getProjects()
      .then((data) => setProjects(data));
  }, []);

  return (
    <>
      <h1>Projects</h1>

      <ul>
        {projects.map((project) => (
          <li key={project.full_name}>{project.name}</li>
        ))}
      </ul>
    </>
  );
}
