import { Outlet } from "react-router-dom";
const index = () => {
  return (
    <>
      <main className="py-10">
        <Outlet />
      </main>
    </>
  );
};

export default index;
