"use client";
import { Logo } from "@/app/components/logo/logo";
import { MenusUser } from "@/app/components/cardMenusUser/cardMenus";
import "./page.css";
import { IntroduccionMenus } from "@/app/components/introduccionMenus/introduccionMenus";
import { withRoles } from "@/app/HOC/withRoles";
import NavBar from "@/app/components/navHome/navBar";

const UserMenus = () => {
  return (
    <div className="fondoPagina">
      <Logo />
      <NavBar />
      <IntroduccionMenus />
        <MenusUser />
      
    </div>
  );
};
export default withRoles(UserMenus, [2], "/home");
