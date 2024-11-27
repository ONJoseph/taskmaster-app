export async function registerUser(name, email, password) {
  try {
    const response = await fetch('/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: name, email, password }),
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || 'Registration failed');
    }
    alert('Registration successful!');
    window.location.href = '/login.html';
  } catch (error) {
    console.error('Error during registration:', error);
    alert(`Error: ${error.message}`);
  }
}

export async function loginUser(email, password) {
  try {
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || 'Login failed');
    }
    CookieUtil.setCookie('token', data.token, 1);
    window.location.href = '/dashboard.html';
  } catch (error) {
    console.error('Error during login:', error);
    alert(`Error: ${error.message}`);
  }
}
