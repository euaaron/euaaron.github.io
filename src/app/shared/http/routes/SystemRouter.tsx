import { Route, Routes } from "react-router-dom";
import App from "../../../App";
import { Home } from "../../../pages/Home/Home";
import { NotFound } from "../../../pages/NotFound/NotFound";
import { Projects } from "../../../pages/Projects/Projects";

export function SystemRouter() {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
