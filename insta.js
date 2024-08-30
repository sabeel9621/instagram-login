
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    if (username === '' || password === '') {
        alert('Please fill out all fields.');
            } else if (password.length < 6) {
        alert('Password must be at least 6 characters long.');
            } else {
        // Example of a successful login scenario
        alert('Login successful! Welcome, ' + username + '!');
            }
        });

