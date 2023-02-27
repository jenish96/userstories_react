import { Outlet } from "react-router-dom";

function Layout() {
    return (
        <>
            <div>hello world</div>
            <Outlet />
        </>
    )
}

export default Layout