import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Success } from "./screens/Success";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Success />
  </StrictMode>,
);
