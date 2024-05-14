function signup() {
    const username = document.getElementById('signupUsername').value.trim();
    const password = document.getElementById('signupPassword').value.trim();

    if (!username || !password) {
        alert("Please enter both username and password.");
        return;
    }

    const user = {
        username: username,
        password: password
    };

    sessionStorage.setItem('user', JSON.stringify(user));
    alert("Sign up successful!");
    window.location.href = 'index.html'; // Redirect to login page after successful signup
}
