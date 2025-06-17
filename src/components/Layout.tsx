import Navbar from "./Navbar.tsx";
import {Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <div className="h-full">
            <Navbar/>
            <Outlet/>
        </div>
    );
};

export default Layout;