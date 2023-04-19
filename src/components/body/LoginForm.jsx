import { useState } from 'react';
import "./LoginForm.css"

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const credentials = { username, password };
    LoginForm(credentials);
  };

  return (
    <div className="container d-flex justify-content-center align-items-center mt-5">
      <div class="card">
        <div class="card-header">
          <h3 class="card-title text-center">Log in</h3>
        </div>
        <div class="card-body">
          <form onSubmit={handleSubmit} class="form">
            <div className="form-group">
              <label for="username">Username:</label>
              <input type="text" placeholder="Username" value={username} onChange={(event) => setUsername(event.target.value)} class="form-control" />
            </div>
            <div className="form-group">
              <label for="password">Password:</label>
              <input type="password" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)} class="form-control" />
            </div>
            <button type="submit" class="btn btn-dark mt-3">Login</button>
          </form>
        </div>
      </div>
    </div>

  );
}
export default LoginForm;