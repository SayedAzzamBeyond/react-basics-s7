import { Outlet } from "react-router";

export default function Auth() {
  return (
    <>
        <header>
            auth header
        </header>
        <Outlet />
        <footer>
            auth footer
        </footer>
    </>
  )
}
