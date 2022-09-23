export { };

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      API_TOKEN: string;
      REPO: string;
      USER: string;
      USERNAME: string;
      PASSWORD: string;
      SEARCH: string;
      SEARCH_RESULT: string;
      HEALTH_FITNESS: string;
      URL: string;
      URLsingup: string;
      URLLAMBDA: string;
      POM_EMAIL: string;
      POM_PASSWORD: string;
      First_Name: string;
      Last_Name: string;
      TELEPHONE: string;
      WARNING: string; 
    }
  }
}
