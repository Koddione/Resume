document.querySelectorAll(".toggle-header").forEach((header) => {
  header.addEventListener("click", () => {
    const content = header.nextElementSibling;
    content.classList.toggle("open");

    const icon = header.querySelector(".icon");
    if (content.classList.contains("open")) {
      icon.textContent = "➖";
    } else {
      icon.textContent = "➕";
    }
  });
});
