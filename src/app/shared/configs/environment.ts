export const PRODUCTION = process.env.NODE_ENV === "production";
export const LIVE_API = String(process.env.REACT_APP_LIVE_API);
export const PROJECTS_API = String(process.env.REACT_APP_PROJECTS_API);

const environment = {
  PRODUCTION,
  LIVE_API,
  PROJECTS_API,
};

export default environment;
