export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      USERNAME: string;
      PASSWORD: string;
      SEARCH: string; 
      SEARCH_RESULT: string;
      HEALTH_FITNESS: string;
    }
  }
}
