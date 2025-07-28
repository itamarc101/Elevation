const tweeter = Tweeter();
const renderer = Renderer();

renderer.renderPosts(tweeter.getPosts());

// Add Post
$("#twit").on("click", function () {
    const text = $("#input").val();
    if (text) {
        tweeter.addPost(text);
        $("#input").val("");
        renderer.renderPosts(tweeter.getPosts());
    }
});

// Delete Post
$("#posts").on("click", ".delete", function () {
    const postID = $(this).closest(".post").data().id;
    tweeter.removePost(postID);
    renderer.renderPosts(tweeter.getPosts());
});

// Add Comment
$("#posts").on("click", ".comment-button", function () {
    const postID = $(this).closest(".post").data().id;
    const text = $(this).siblings(".comment-input").val();
    if (text) {
        tweeter.addComment(postID, text);
        renderer.renderPosts(tweeter.getPosts());
    }
});

// Delete Comment
$("#posts").on("click", ".delete-comment", function () {
    const commentID = $(this).data().id;
    const postID = $(this).closest(".post").data().id;
    tweeter.removeComment(postID, commentID);
    renderer.renderPosts(tweeter.getPosts());
});
