import { ProjectService } from "./ProjectService";


describe("Project Service", () => {
  it("should get a repository list from GitHub", async () => {
    await ProjectService.getInstance().getProjects().then(projects => {
      expect(projects.length).toBeGreaterThan(0);
    });
  });
});
