import { ProjectService } from "./ProjectService";

describe("Project Service", () => {
  jest.setTimeout(300000);
  it("should get a repository list from GitHub", async () => {
    await ProjectService.getInstance().getAll().then(projects => {
      expect(projects.length).toBeGreaterThan(0);
    });
  });
});
