import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../../views/App/App";
import Welcome from "../../views/Welcome/Welcome";

const Router = () => {
  const Router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      errorElement: <>Error</>,
      children: [
        {
          index: true,
          element: <Welcome />
        },
        {
          path:'/about',
          element: <>About</>
        },
        {
          path:'/projects',
          element: <>Projects</>
        },
        {
          path:'/experience',
          element: <>Experience</>
        },
        {
          path:'/contact',
          element: <>Contact</>
        },
      ]
    }
  ])
  return <RouterProvider router={Router} />
}

export default Router
