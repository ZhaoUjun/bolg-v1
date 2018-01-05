export interface AppConfig {
  BASE_API_URL: string;
  title: string;
}

export const APP_CONFIG: AppConfig = {
  BASE_API_URL: 'http://127.0.0.1:3000',
  title: 'Dependency Injection'
};
