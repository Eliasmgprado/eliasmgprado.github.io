import ReactDOM from "react-dom/client";
import "./index.css";
import { createHashRouter, RouterProvider } from "react-router-dom";
import { routes } from "./routes.tsx";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
// import "@mantine/carousel/styles.css";

const router = createHashRouter(routes);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <MantineProvider>
    <RouterProvider router={router} />
  </MantineProvider>
);
