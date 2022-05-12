import packageJson from '../../package.json';

export const environment = {
  VERSION_APP: packageJson.version,
  production: false,
  API_URL:"http://localhost:5000/api/"
};
