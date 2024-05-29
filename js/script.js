document.getElementById('fetchComments').addEventListener('click', function () {
    let commentCountInput = document.getElementById('commentCount');
    let commentCount = parseInt(commentCountInput.value);

    if (!commentCount || commentCount < 1) {
        alert('enter a valid number');
        return;
    }

    fetchComments(commentCount);
});

function fetchComments(count) {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(response => response.json())
        .then(comments => {
            displayComments(comments.slice(0, count));
        })
        .catch(error => console.error(error));
}

function displayComments(comments) {
    let commentContainer = document.getElementById('commentContainer');
    commentContainer.innerHTML = '';

    comments.forEach(function (comment) {
        let commentDiv = document.createElement('div');
        commentDiv.classList.add('comment');
        commentDiv.innerHTML = `
      <h3>${comment.name}</h3>
      <p><strong>Email:</strong> ${comment.email}</p>
      <p>${comment.body}</p>
    `;
        commentContainer.appendChild(commentDiv);
    });
}
