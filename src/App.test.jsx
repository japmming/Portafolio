import { createRoot } from "react-dom/client";
import { act } from "react";
import App from "./App";
import Modal from "./components/Modal";
import { projects } from "./data/data";

test("App renderiza sin romper", () => {
  const container = document.createElement("div");
  document.body.appendChild(container);
  act(() => {
    const root = createRoot(container);
    root.render(<App />);
  });
  expect(container.textContent).toContain("joseperezm");
  expect(container.textContent).toContain("Hablemos");
});

test("Modal renderiza datos del proyecto", () => {
  const container = document.createElement("div");
  document.body.appendChild(container);
  act(() => {
    const root = createRoot(container);
    root.render(<Modal project={projects[0]} onClose={() => {}} />);
  });
  expect(container.textContent).toContain(projects[0].title);
  expect(container.getAttribute("aria-modal")).toBeNull();
  expect(container.querySelector('[role="dialog"]')).not.toBeNull();
});