import { useState } from 'react';


function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const credentials = { username, password };
    LoginForm(credentials);
  };

  return (
    <div class="container d-flex justify-content-center align-items-center">
      <form onSubmit={handleSubmit} class="form">
        <div class="form-group">
          <input type="text" placeholder="Username" value={username} onChange={(event) => setUsername(event.target.value)} class="form-control" />
        </div>
        <div class="form-group">
          <input type="password" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)} class="form-control" />
        </div>
        <button type="submit" class="btn btn-dark">Login</button>
      </form>
    </div>


  );
}
export default LoginForm;