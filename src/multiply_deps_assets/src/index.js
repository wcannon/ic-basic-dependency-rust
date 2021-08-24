import { multiply_deps } from "../../declarations/multiply_deps";

document.getElementById("clickMeBtn").addEventListener("click", async () => {
  const name = document.getElementById("name").value.toString();
  // Interact with multiply_deps actor, calling the greet method
  const greeting = await multiply_deps.greet(name);

  document.getElementById("greeting").innerText = greeting;
});
