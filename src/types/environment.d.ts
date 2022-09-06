export {};

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
    }
  }
}
