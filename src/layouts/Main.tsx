import { Outlet } from "react-router-dom";

function MainLayout() {

  return (
    <div className="w-full min-h-screen box-border">
      <Outlet />
    </div>
  );
}

export default MainLayout;