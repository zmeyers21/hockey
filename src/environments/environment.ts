import domain from '../../auth_config.json';
import clientId from '../../auth_config.json';

export const environment = {
  production: false,
  auth: {
    domain,
    clientId,
    redirectUri: window.location.origin,
  },
};