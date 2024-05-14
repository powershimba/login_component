document.addEventListener('DOMContentLoaded', function() {
    displayUserInfo();
});

function updatePassword() {
    const newPassword = document.getElementById('newPassword').value.trim();
    if (!newPassword) {
        alert("Please enter a new password.");
        return;
    }
    const user = JSON.parse(sessionStorage.getItem('user'));
    user.password = newPassword;
    sessionStorage.setItem('user', JSON.stringify(user));
    alert("Password updated successfully.");
}

function displayUserInfo() {
    const userInfo = JSON.parse(sessionStorage.getItem('userInfo') || '{}');
    const userInfoSection = document.getElementById('userInfoSection');
    
    if (userInfo && userInfo.name) {
        userInfoSection.innerHTML = `
            <p>Name: <input type="text" id="name" value="${userInfo.name}"></p>
            <p>Job: <input type="text" id="job" value="${userInfo.job}"></p>
            <p>Salary: <input type="text" id="salary" value="${userInfo.salary}"></p>
            <button onclick="updateUserInfo()">Update Information</button>
        `;
    } else {
        userInfoSection.innerHTML = `
        <p><a href="add_info.html">Add your information</a></p>`;
    }
}

function updateUserInfo() {
    const name = document.getElementById('name').value;
    const job = document.getElementById('job').value;
    const salary = document.getElementById('salary').value;

    const userInfo = { name, job, salary };
    sessionStorage.setItem('userInfo', JSON.stringify(userInfo));
    
    alert("User information updated successfully.");
}
