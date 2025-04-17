import { useRouteError } from "react-router"

export default function ErrorPage() {
    const error = useRouteError() as any;
  return (
    <>
        <h1>Error With Status {error.status}</h1>
        <h3>Error message is: {error?.error?.message}</h3>
    </>
  )
}
