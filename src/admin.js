document.addEventListener('DOMContentLoaded', function() {
    const userInfoTableBody = document.getElementById('userInfoTable').getElementsByTagName('tbody')[0];

    // Retrieve users from sessionStorage
    const users = JSON.parse(sessionStorage.getItem('userInfo') || '{}');
    console.log(users);

    users.forEach(userInfo => {
        const row = userInfoTableBody.insertRow();
        row.insertCell(0).textContent = userInfo.name;
        row.insertCell(1).textContent = userInfo.job;
        row.insertCell(2).textContent = `$${userInfo.salary.toLocaleString()}`;
    });
});