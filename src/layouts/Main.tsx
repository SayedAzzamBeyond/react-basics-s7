import { NavLink, Outlet } from "react-router";
import MainStyles from './Main.module.css';
import styles from '../Test.module.css';

export default function Main() {
  const handleActiveLink = ({isActive}: {isActive: boolean})=> isActive ? styles.active: '';
  return (
    <>
        <header>
            <nav className={MainStyles.nav}>
                <NavLink to="/profile">
                  {({ isActive }) => (
                    <span className={handleActiveLink({isActive})}>
                      {isActive ? "👉" : ""} Profile
                    </span>
                  )}
                </NavLink>

                <NavLink to="about">About</NavLink>
                <NavLink to="context">Context</NavLink>
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
