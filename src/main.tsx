import { createRoot } from "react-dom/client";

const el = document.getElementById("root");

if (!el) {
  alert("ROOT NOT FOUND");
} else {
  alert("JS IS RUNNING");
  createRoot(el).render(
    <h1 style={{ color: "white", padding: 20 }}>
      IT WORKS
    </h1>
  );
}
