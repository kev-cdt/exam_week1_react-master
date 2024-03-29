import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
function Layout() {
    return (
        <div>
            <Link to='/'>HOME</Link>
            <Outlet />
        </div>
    );
}

export default Layout;