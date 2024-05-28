import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../../views/App/App";

const Router = () => {
  const Router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      errorElement: <>Error</>,
      children: [
        {

        }
      ]
    }
  ])
  return <RouterProvider router={Router} />
}

export default Router
