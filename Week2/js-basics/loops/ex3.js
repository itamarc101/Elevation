const posts = [
  {id: 1, text: "Love this product"},
  {id: 2, text: "This is the worst. DON'T BUY!"},
  {id: 3, text: "So glad I found this. Bought four already!"}
]

for (let i = 0; i < posts.length; i++) {
    if (posts[i].id === 2) {
        posts.splice(i, 1);
        break;
    }
}

console.log(posts);