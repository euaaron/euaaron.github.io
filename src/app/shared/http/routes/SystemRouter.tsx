import { Route, Routes } from "react-router-dom";
import { About } from "../../../About/About";
import App from "../../../App";
import { Home } from "../../../Home/Home";
import { NotFound } from "../../../NotFound/NotFound";
import { Projects } from "../../../Projects/Projects";
import { Skills } from "../../../Skills/Skills";

export function SystemRouter() {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="about" element={<About />} />
        <Route path="skills" element={<Skills />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
