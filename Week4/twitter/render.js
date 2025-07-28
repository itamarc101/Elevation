const Renderer = function () {
    const renderPosts = function (posts) {
        const $posts = $("#posts");
        $posts.empty();

        for (let post of posts) {
            const $post = $(`
                <div class="post" data-id="${post.id}">
                    <div class="post-text">${post.text}</div>
                    <div class="delete" data-id="${post.id}">Delete Post</div>
                    <div class="comments"></div>
                    <input type="text" placeholder="Got something to say?" class="comment-input">
                    <button class="comment-button">Comment</button>
                </div>
            `);

            for (let comment of post.comments) {
                const $comment = $(`
                    <div class="comment" data-id="${comment.id}">
                        ${comment.text}
                        <span class="delete-comment" data-id="${comment.id}"> X </span>
                    </div>
                `);
                $post.find(".comments").append($comment);
            }

            $posts.append($post);
        }
    };

    return { renderPosts };
};
