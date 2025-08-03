const API_KEY = "mKVqvO1aXUhpRJYBNBoY9vXckoUcAKYc"

function getGif(query) {
    // const query = "cats";
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURIComponent(query)}&api_key=${API_KEY}&limit=1`;

    fetch(url)
    .then(response => response.json())
    .then(data => {
        const firstGif = data.data[0];
        const container = document.getElementById("gif-container");

        container.innerHTML = "";

        if (firstGif) {
            const embedUrl = firstGif.embed_url;
            const iframe = document.createElement("iframe");
            iframe.src = embedUrl;
            iframe.width = "600";
            iframe.height = "600";
            iframe.frameBorder = "0";
            iframe.allowFullscreen = "true";
            document.getElementById("gif-container").appendChild(iframe);

        }
        else
        {
            document.getElementById("gif-container").textContent("No GIF Found");
        }
    })
    .catch(error => {
        console.error("ERROR==", error)
        document.getElementById("gif-container").textContent = "Failed to load GIF.";
    });
}

window.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("search-button");
    const input = document.getElementById("search-input");

    button.addEventListener("click", () => {
        const query = input.value.trim();
        if (query) getGif(query);
    });
});

window.addEventListener("DOMContentLoaded", getGif);
