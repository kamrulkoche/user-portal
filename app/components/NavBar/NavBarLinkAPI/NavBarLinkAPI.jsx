import { MdPlayArrow } from "react-icons/md";

const NavBarLinkAPI = ({ route }) => {
  return (
    <div>
      <li className="text-center text-[black] ">
        <button className="text-center p-2 md:ml-2 hover:bg-[#4d27a3] hover:text-white md:border-0 duration-200 rounded-lg px-10 md:p-2">
          <div className="flex items-center">
            {route.name} <MdPlayArrow className="text-xl" />
          </div>
        </button>
      </li>
    </div>
  );
};

export default NavBarLinkAPI;
