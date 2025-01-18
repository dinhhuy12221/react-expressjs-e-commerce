import { Outlet } from "react-router-dom";

function Layout() {
    return ( 
        <div className="App">
            <Outlet />
        </div>
     );
}

export default Layout;