const config = {
  api: import.meta.env.VITE_API,
  headers: {
    "X-RapidAPI-Key": import.meta.env["VITE_X-RapidAPI-Key"],
    "X-RapidAPI-Host": import.meta.env["VITE_X-RapidAPI-Host"],
  },
  keycloak_clientId: import.meta.env.VITE_KEYCLOAK_clientId,
  keycloak_realm: import.meta.env.VITE_KEYCLOAK_realm,
  keycloak_url: import.meta.env.VITE_KEYCLOAK_url,
};

export default config;
