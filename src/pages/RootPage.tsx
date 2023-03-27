import { useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";

const RootPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("home");
  }, []);
  return (
    <main>
      <SideBar />
      <Outlet />
    </main>
  );
};
export default RootPage;
