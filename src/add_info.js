window.onload = function() {
    if (sessionStorage.getItem('auth') !== 'true') {
        window.location.href = 'index.html'; // Redirect if not authenticated
    }
}

function logout() {
    sessionStorage.removeItem('auth');
    window.location.href = 'index.html'; // Redirect to login page on logout
}

function addUserInfo() {
    const name = document.getElementById('name').value;
    const job = document.getElementById('job').value;
    const salary = document.getElementById('salary').value;

    const userInfo = {
        name: name,
        job: job,
        salary: salary
    };

    // Retrieve the existing 'userInfo' from sessionStorage and parse it as JSON
    let users = JSON.parse(sessionStorage.getItem('userInfo') || '[]');
    console.log("Retrieved users:", users);

    // Add the new userInfo to the array
    users.push(userInfo);

    // Save the updated array back to sessionStorage in string format
    sessionStorage.setItem('userInfo', JSON.stringify(users));
    console.log("Updated users:", users);

    // Assuming displayUserInfo is defined elsewhere and handles displaying user info
    displayUserInfo(userInfo);
}

function displayUserInfo(userInfo) {
    const userInfoDisplay = document.getElementById('userInfoDisplay');
    const userInfoHtml = `<p>Name: ${userInfo.name}, Job: ${userInfo.job}, Salary: $${userInfo.salary}</p>`;
    userInfoDisplay.innerHTML += userInfoHtml; // Add new user info to display
}
