export function resetFunctionality() {
  const resetbtn = document.getElementById("resetbtn");
  resetbtn.addEventListener("click", (e) => {
    e.preventDefault;
    localStorage.clear();
    location.reload();
  });
}
