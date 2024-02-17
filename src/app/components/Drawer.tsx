import { ICommonParentProps } from "./PropComponents/index";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import { faBox } from "@fortawesome/free-solid-svg-icons/faBox";
import { CustomIcon } from "./CustomIcon";
import { NavBar } from "./NavBar";
import { faMoneyBill } from "@fortawesome/free-solid-svg-icons/faMoneyBill";
import MainContent from "./MainContent";

const Drawer = ({ children }: ICommonParentProps) => {
  const routes = [
    {
      name: "Marcas",
      href: "/brands",
      icon: <CustomIcon icon={faCopyright} />,
    },
    {
      name: "Productos",
      href: "/products",
      icon: <CustomIcon icon={faBox} />,
    },
    {
      name: "Facturas",
      href: "/bills",
      icon: <CustomIcon icon={faMoneyBill} />,
    },
  ];
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col ">
        <NavBar />
        <MainContent>{children}</MainContent>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          <h1 className="menu-title text-lg">Menú</h1>
          {routes.map((route, index) => (
            <li key={index}>
              <a href={route.href} className="flex flex-wrap">
                {route.icon} {route.name}
              </a>
            </li>
          ))}
          <span className="justify-end items-end text-neutral-500 text-opacity-70 text-sm p-5">
            Hecho con mucho amor
          </span>
        </ul>
      </div>
    </div>
  );
};

export default Drawer;
