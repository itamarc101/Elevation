const trie = new AutoCompleteTrie();
const wordInput = document.getElementById('wordInput');
const addBtn = document.getElementById('addWordBtn');
const message = document.getElementById('message');
const dictionaryCount = document.getElementById('dictionaryCount');
const dictNumber = dictionaryCount.querySelector(".dict-number");


const searchInput = document.getElementById("searchInput");
const suggestionsBox = document.getElementById("suggestions");

addBtn.addEventListener('click', () => {
  const word = wordInput.value.trim();
  if (!word) {
    message.textContent = "Cannot add empty word!";
    message.className = "message error";
    return;
  }
  trie.addWord(word);
  message.textContent = `Added '${word}' to dictionary!`;
  message.className = "message success";
  dictNumber.textContent = trie.predictWords("").length;
  wordInput.value = "";
});

searchInput.addEventListener("input", () => {
  const prefix = searchInput.value.trim();
  suggestionsBox.innerHTML = "";

  if (!prefix) return;

  const suggestions = trie.predictWords(prefix);
  
  suggestions.forEach((s) => {
    const rawWord = s.split(" ")[0]; // e.g., "hello (3)" → "hello"
    const div = document.createElement("div");

    // Make prefix bold
    div.innerHTML = `<span class="highlight">${rawWord.substring(0, prefix.length)}</span>${rawWord.substring(prefix.length)} <small>${s.match(/\(\d+\)/)}</small>`;
    
    div.addEventListener("click", () => {
      searchInput.value = rawWord;
      trie.use(rawWord); // Optional: increase usage count on selection
      suggestionsBox.innerHTML = "";
    });

    suggestionsBox.appendChild(div);
  });
});
