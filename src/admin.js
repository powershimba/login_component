document.addEventListener('DOMContentLoaded', function() {
    const userInfoTableBody = document.getElementById('userInfoTable').getElementsByTagName('tbody')[0];

    // Retrieve users from sessionStorage
    const users = JSON.parse(sessionStorage.getItem('users') || '[]');

    users.forEach(user => {
        const row = userInfoTableBody.insertRow();
        row.insertCell(0).textContent = user.name;
        row.insertCell(1).textContent = user.job;
        row.insertCell(2).textContent = `$${user.salary.toLocaleString()}`;
    });
});