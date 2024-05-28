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
