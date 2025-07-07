const posts = [
  {
    id: 1, 
    text: "Love this product",
    comments: []
  },
  { 
    id: 2, 
    text: "This is the worst. DON'T BUY!", 
    comments: [
                {id: 1, text: "Idiot has no idea"}, 
                {id: 2, text:"Fool!"}, 
                {id: 3, text: "I agree!"}
              ]
   },
   {
    id: 3, 
    text: "So glad I found this. Bought four already!",
    comments: []
   }
]


for(let post = 0; post < posts.length; post++ ){
    if (posts[post].id === 2) {
        let comments = posts[post].comments;

        for (let commentId = 0; commentId < comments.length; commentId++) {
            if (commentId === 3) {
                comments.splice(commentId, 1);
                break;
            }
        }
    }
}

console.log(posts);