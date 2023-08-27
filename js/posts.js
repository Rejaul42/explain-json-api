function PostsComment(){
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => allComments(data))
}

function allComments(posts){
    const main = document.getElementById('comment-container');
    for(const post of posts){
        console.log(post)
        const div = document.createElement('div');
        div.classList.add('post')
        div.innerHTML = `
        <h4>User-${post.userId}</h4>
        <h5>Comment title-${post.title}</h5>
        <p>Comment-${post.body}</p>

        `;
        main.appendChild(div)
    }
}
PostsComment()