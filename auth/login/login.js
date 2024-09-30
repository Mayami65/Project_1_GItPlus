// Login script
document.querySelector('.login-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission

    // Get the input values
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Retrieve users from Local Storage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Check if the user exists and the password matches
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        alert(`Welcome back, ${user.firstName}!`);
        // Redirect to the dashboard or any other page
        window.location.href = '/modules/home/home.html';
    } else {
        alert('Invalid email or password. Please try again.');
    }
});