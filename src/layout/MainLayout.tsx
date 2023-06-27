import { MainLayoutRoot } from "./MainLayout.styled";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <MainLayoutRoot>
      <Outlet />
    </MainLayoutRoot>
  );
};

export default MainLayout;
