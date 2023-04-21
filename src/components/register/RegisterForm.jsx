import React from "react";
import AuthService from "../../service/AuthService";
import { useState } from "react";


function RegisterForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  

  const handleRegister = (event) => {
    event.preventDefault();
    const credentials = { username, password, email };
    AuthService.register(username, password, email);
  };

  return (
    <div className="container d-flex justify-content-center align-items-center mt-5">
      <div class="card">
        <div class="card-header">
          <h3 class="card-title text-center">Register</h3>
        </div>
        <div class="card-body">
          <form onSubmit={handleRegister} class="form">
            <div className="form-group">
              <label for="username">UserName:</label>
              <input type="text" placeholder="Username" value={username} onChange={(event) => setUsername(event.target.value)} class="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" placeholder="Email" value={email} onChange={(event) => setEmail(event.target.value)} className="form-control" />
            </div>
            <div className="form-group">
              <label for="password">Password:</label>
              <input type="password" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)} class="form-control" />
            </div>
            <button type="submit" class="btn btn-dark mt-3">Send</button>
          </form>
        </div>
      </div>
    </div>

  );
}
export default RegisterForm;


// import React, { useState, useRef } from "react";
// import Form from "react-validation/build/form";
// import Input from "react-validation/build/input";
// import CheckButton from "react-validation/build/button";
// import { isEmail } from "validator";
// import AuthService from "../../service/AuthService";

// const required = (value) => {
//   if (!value) {
//     return (
//       <div className="alert alert-danger" role="alert">
//         This field is required!
//       </div>
//     );
//   }
// };

// const emailValidation = (value) => {
//   if (!isEmail(value)) {
//     return (
//       <div className="alert alert-danger" role="alert">
//         This is not a valid email.
//       </div>
//     );
//   }
// };


// const vusername = (value) => {
//   if (value.length < 3 || value.length > 20) {
//     return (
//       <div className="alert alert-danger" role="alert">
//         The username must be between 3 and 20 characters.
//       </div>
//     );
//   }
// };

// const vpassword = (value) => {
//   if (value.length < 6 || value.length > 40) {
//     return (
//       <div className="alert alert-danger" role="alert">
//         The password must be between 6 and 40 characters.
//       </div>
//     );
//   }
// };

// const RegisterForm = () => {
//   const form = useRef();
//   const checkBtn = useRef();

//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [message, setMessage] = useState("");
//   const [successful, setSuccessful] = useState(false);

//   const onChangeUsername = (e) => {
//     const username = e.target.value;
//     setUsername(username);
//   };

//   const onChangeEmail = (e) => {
//     const email = e.target.value;
//     setEmail(email);
//   };

//   const onChangePassword = (e) => {
//     const password = e.target.value;
//     setPassword(password);
//   };

//   const handleRegister = (e) => {
//     e.preventDefault();

//     setMessage("");
//     setSuccessful(false);

//     form.current.validateAll();

//     if (checkBtn.current.context._errors.length === 0) {
//       AuthService.register(username, email, password).then(
//         (response) => {
//           setMessage(response.data.message);
//           setSuccessful(true);
//         },
//         (error) => {
//           const resMessage =
//             (error.response &&
//               error.response.data &&
//               error.response.data.message) ||
//             error.message ||
//             error.toString();

//           setMessage(resMessage);
//           setSuccessful(false);
//         }
//       );
//     }
//   };
// return (
//     <div className="col-md-12">
//       <div className="card card-container">
//         <img
//           src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
//           alt="profile-img"
//           className="profile-img-card"
//         />

//         <Form onSubmit={handleRegister} ref={form}>
//           {!successful && (
//             <div>
//               <div className="form-group">
//                 <label htmlFor="username">Username</label>
//                 <Input
//                   type="text"
//                   className="form-control"
//                   name="username"
//                   value={username}
//                   onChange={onChangeUsername}
//                   validations={[required, vusername]}
//                 />
//               </div>

//               <div className="form-group">
//                 <label htmlFor="email">Email</label>
//                 <Input
//                   type="text"
//                   className="form-control"
//                   name="email"
//                   value={email}
//                   onChange={onChangeEmail}
//                   validations={[required, emailValidation]}
//                 />

//               </div>

//               <div className="form-group">
//                 <label htmlFor="password">Password</label>
//                 <Input
//                   type="password"
//                   className="form-control"
//                   name="password"
//                   value={password}
//                   onChange={onChangePassword}
//                   validations={[required, vpassword]}
//                 />
//               </div>

//               <div className="form-group">
//                 <button className="btn btn-primary btn-block">Sign Up</button>
//               </div>
//             </div>
//           )}

//           {message && (
//             <div className="form-group">
//               <div
//                 className={
//                   successful ? "alert alert-success" : "alert alert-danger"
//                 }
//                 role="alert"
//               >
//                 {message}
//               </div>
//             </div>
//           )}
//           <CheckButton style={{ display: "none" }} ref={checkBtn} />
//         </Form>
//       </div>
//     </div>
//   );


// }
// export default RegisterForm;