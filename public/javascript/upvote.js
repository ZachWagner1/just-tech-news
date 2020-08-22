async function upvoteClickHandler(event) {
    event.preventDefault();
    console.log('button clicked');

    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];
    console.log(id);

    // controllers/api/post-routes
    const response = await fetch('/api/posts/upvote', {
        method: 'PUT',
        body: JSON.stringify({
            post_id: id
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        console.log('received response from backend');
        document.location.reload();
    } else {
        alert(response.statusText);
    }
}

document.querySelector('.upvote-btn').addEventListener('click', upvoteClickHandler);