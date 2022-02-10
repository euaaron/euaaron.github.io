import { Route, Routes } from "react-router-dom";
import { About } from "../../../About/About";
import App from "../../../App";
import { AcademicExperience } from "../../../Experience/Academic/Academic";
import { Home } from "../../../Home/Home";
import { NotFound } from "../../../NotFound/NotFound";
import { Projects } from "../../../Projects/Projects";
import { Skills } from "../../../Skills/Skills";

export function SystemRouter() {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="experience" element={<AcademicExperience />}>
          <Route path="academic" element={<AcademicExperience />} />
        </Route>
        <Route path="projects" element={<Projects />} />
        <Route path="skills" element={<Skills />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
