const loginFormHandler = async (event) => {
    event.preventDefault();
  
    

    const email = document.querySelector('#username').value.trim();
    const password = document.querySelector('#password').value.trim();
  
    if (email && password) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // If successful, redirect the browser to the profile page
        document.location.replace('/profile');
      } else {
        alert(response.statusText);
      }
    }
  };

  
  document
    .querySelector('.login-container')
    .addEventListener('submit', loginFormHandler);
    document.querySelector('#login').addEventListener('click', login);
    document.querySelector('#signup').addEventListener('click', signup);
