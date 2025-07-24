document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("container");

  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  for (let i = 0; i < 16; i++) {
    const box = document.createElement("div");
    box.classList.add("box");
    box.onmouseenter = function () {
      box.style.backgroundColor = getRandomColor();
      checkAllColors();
    };
    container.appendChild(box);
  }

  function checkAllColors() {
    const boxes = document.querySelectorAll(".box");
    const firstColor = boxes[0].style.backgroundColor;
    const allSame = [...boxes].every(box => box.style.backgroundColor === firstColor && firstColor !== "");
    document.getElementById("status").textContent = allSame ? "Nice job!" : "";
  }
});
