async function logout() {
    // make POST request so backend has access to session variables...ie loggedIn boolean
    const response = await fetch('/api/users/logout', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' }
    });
    // if user is successfully logged out, take them back to homepage
    if (response.ok) {
        document.location.replace('/');
    } else {
        alert(response.statusText);
    }
}

document.querySelector('#logout').addEventListener('click', logout);