document.addEventListener('DOMContentLoaded', function() {
    updateNavigationVisibility();
});

function updateNavigationVisibility() {
    const navButtons = document.getElementById('navigation');
    if (sessionStorage.getItem('auth') === 'true') {
        navButtons.style.display = 'block';
    } else {
        navButtons.style.display = 'none';
    }
}

function login() {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    if (!username || !password) {
        alert("Please enter both username and password.");
        return;
    }

    const storedUser = JSON.parse(sessionStorage.getItem('user'));

    if (storedUser && username === storedUser.username && password === storedUser.password) {
        sessionStorage.setItem('auth', 'true'); // Set authentication flag
        window.location.href = 'add_info.html'; // Redirect to user_info page
    } else {
        alert('Invalid Credentials');
    }
}

function checkEnter(event) {
    if (event.key === "Enter") {
        login();
    }
}