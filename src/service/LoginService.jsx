import axios from 'axios';

function LoginService(credentials) {
  return axios.post('/api/auth/login', credentials)
    .then(response => {
      
    });
}
export default LoginService;