import Keycloak from "keycloak-js";
import { useEffect, useState } from "react";
import config from "../config";

const useAuth = () => {
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    const client = new Keycloak({
      clientId: config.keycloak_clientId,
      realm: config.keycloak_realm,
      url: config.keycloak_url,
    });
    client.init({ onLoad: "login-required" }).then((res) => setIsLogged(res));
  }, []);
  return isLogged;
};

export default useAuth;
