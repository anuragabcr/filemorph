import MobileSidebar from "./MobileSidebar";

const Navbar = async () => {
  return (
    <div className="flex items-center p-4">
      <MobileSidebar />
      <div className="flex w-full justify-end"></div>
    </div>
  );
};

export default Navbar;
