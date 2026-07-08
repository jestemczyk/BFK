import { Outlet } from "react-router";

export const MainLayout = () => {
  return (
    <>
      <header></header>
      <Outlet />
      <footer></footer>
    </>
  );
};
