let wisdom = [];

// Load existing wisdom from Local Storage on page load
window.addEventListener("DOMContentLoaded", () => {
    const saved = localStorage.getItem("wisdom");
    if (saved) {
        wisdom = JSON.parse(saved);
        renderWisdom();
    }
});

document.getElementById("add-btn").addEventListener("click", () => {
    const input = document.getElementById("input");
    const text = input.value.trim();
    if (text === "") return;

    const newItem = {
        id: Date.now(), // unique ID for each wisdom
        text: text
    };

    wisdom.push(newItem);
    input.value = "";
    renderWisdom();

    if (wisdom.length % 2 === 0) {
        localStorage.setItem("wisdom", JSON.stringify(wisdom));
    }
});

document.getElementById("clear-btn").addEventListener("click", () => {
    localStorage.removeItem("wisdom");
    wisdom = [];
    renderWisdom();
});

function removeWisdom(id) {
    wisdom = wisdom.filter(item => item.id !== id);
    localStorage.setItem("wisdom", JSON.stringify(wisdom));
    renderWisdom();
}

function renderWisdom() {
    const container = document.getElementById("wisdom-container");
    container.innerHTML = ""; // Clear old wisdom

    wisdom.forEach(item => {
        const div = document.createElement("div");
        div.classList.add("wisdom");
        div.textContent = item.text;

        const x = document.createElement("span");
        x.textContent = "✖";
        x.classList.add("remove-btn");
        x.addEventListener("click", () => removeWisdom(item.id));

        div.appendChild(x);
        container.appendChild(div);
    });
}
