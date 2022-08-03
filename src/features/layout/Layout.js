import { Link, Outlet } from "react-router-dom";
import "./style.css";
export default function Layout() {
  return (
    <div>
      <h1>Hello</h1>
      <nav>
        <Link className="link" to={"/"}>
          Home
        </Link>
        <Link className="link" to={"/About"}>
          About
        </Link>
        <Link className="link" to={"/DoneList"}>
          Done
        </Link>
      </nav>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
}
