import { NavLink, Outlet } from "react-router";
import MainStyles from './Main.module.css';
export default function Main() {
  return (
    <>
        <header>
            <nav className={MainStyles.nav}>
                <NavLink to="profile">Profile</NavLink>
                <NavLink to="about">About</NavLink>
                <NavLink to="todo">Todo</NavLink>
                <NavLink to="movie">Movie</NavLink>
            </nav>
        </header>
        <Outlet />
        <footer>
            <h3>footer</h3>
        </footer>
    </>
  )
}
