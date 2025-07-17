class AutoCompleteTrie {
  constructor(value = "") {
    this.value = value;
    this.children = {};
    this.endOfWord = false;
    this.usageCount = 0;
  }

  addWord(word) {
    let node = this;
    for (const char of word.toLowerCase()) {
      if (!node.children[char]) {
        node.children[char] = new AutoCompleteTrie(char);
      }
      node = node.children[char];
    }
    node.endOfWord = true;
    node.usageCount++;
  }

  findWord(word) {
    let node = this;
    for (const char of word.toLowerCase()) {
      if (!node.children[char]) return false;
      node = node.children[char];
    }
    return node.endOfWord;
  }

  _getRemainingTree(prefix) {
    let node = this;
    for (const char of prefix.toLowerCase()) {
      if (!node.children[char]) return null;
      node = node.children[char];
    }
    return node;
  }

  _allWordsHelper(prefix, node, result) {
    if (node.endOfWord) result.push({ word: prefix, usage: node.usageCount });
    for (const char in node.children) {
      this._allWordsHelper(prefix + char, node.children[char], result);
    }
  }

  predictWords(prefix) {
    const node = this._getRemainingTree(prefix);
    const result = [];
    if (node) {
      this._allWordsHelper(prefix, node, result);
    }
    return result
      .sort((a, b) => b.usage - a.usage)
      .map((entry) => `${entry.word} (${entry.usage})`);
  }

  use(word) {
    let node = this;
    for (const char of word.toLowerCase()) {
      if (!node.children[char]) return false;
      node = node.children[char];
    }
    if (node.endOfWord) {
      node.usageCount++;
      return true;
    }
    return false;
  }
}

if (require.main === module) {
  const readline = require("readline");
  const trie = new AutoCompleteTrie();

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  console.log("=== AutoComplete Trie Console ===");
  console.log("Type 'help' for commands");

  rl.on("line", (input) => {
    const [cmd, ...args] = input.trim().split(" ");
    const arg = args.join(" ");

    switch (cmd) {
      case "add":
        trie.addWord(arg);
        console.log(`✓ Added '${arg}' to dictionary`);
        break;
      case "find":
        console.log(
          trie.findWord(arg)
            ? `✓ '${arg}' exists in dictionary`
            : `✗ '${arg}' not found in dictionary`
        );
        break;
      case "complete":
        const suggestions = trie.predictWords(arg);
        console.log(`Suggestions for '${arg}': ${suggestions.join(", ")}`);
        break;
      case "use":
        if (trie.use(arg)) {
          console.log(`✓ Incremented usage for '${arg}'`);
        } else {
          console.log(`✗ '${arg}' not found`);
        }
        break;
      case "help":
        console.log(`Commands:
  add <word>        - Add word to dictionary
  find <word>       - Check if word exists
  complete <prefix> - Get completions
  use <word>        - Increment usage count
  help              - Show this message
  exit              - Quit program`);
        break;
      case "exit":
        console.log("Goodbye!");
        rl.close();
        break;
      default:
        console.log("Unknown command. Type 'help' for options.");
    }
  });
}

module.exports = AutoCompleteTrie;
