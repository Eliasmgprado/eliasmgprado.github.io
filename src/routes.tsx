import Shell from "./components/Layout/Shell";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";

const DEFAULT_ERROR_PAGE = <ErrorPage />;

export const routes = [
  {
    path: "/",
    element: <Shell />,
    errorElement: DEFAULT_ERROR_PAGE,
    children: [
      {
        index: true,
        element: <HomePage />,
        errorElement: DEFAULT_ERROR_PAGE,
      },
    ],
  },
];
