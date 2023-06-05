// // frontend/src/components/LoginFormPage/index.js
// import React, { useState } from "react";
// import * as sessionActions from "../../store/session";
// import { useDispatch, useSelector } from "react-redux";
// import { Redirect } from "react-router-dom";
// import "./LoginForm.css";

// function LoginFormPage() {
//   const dispatch = useDispatch();
//   const sessionUser = useSelector((state) => state.session.user);
//   const [credential, setCredential] = useState("");
//   const [password, setPassword] = useState("");
//   const [errors, setErrors] = useState({});

//   if (sessionUser) return <Redirect to="/" />;

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setErrors({});
//     return dispatch(sessionActions.login({ credential, password })).catch(
//       async (res) => {
//         const data = await res.json();
//         if (data && data.errors) setErrors(data.errors);
//       }
//     );
//   };

//   return (
//     <>
//       <form className="form-container" onSubmit={handleSubmit}>
//       <h1 className="logIn">Log In</h1>
//         <label className="text-input">
//           {/* Username or Email */}
//           <input
//           className="input credentials"
//           placeholder="Username or Email"
//             type="text"
//             value={credential}
//             onChange={(e) => setCredential(e.target.value)}
//             required
//           />
//         </label>
//         <label className="text-input">
//           {/* Password */}
//           <input
//            className="input password"
//            placeholder="Password"
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </label>
//         {errors.credential && <p>{errors.credential}</p>}
//         <button className="submit-button" type="submit">Log In</button>
//       </form>
//     </>
//   );
// }

// export default LoginFormPage;

//   return (
//     <>
//       <h1>Log In</h1>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Username or Email
//           <input
//             type="text"
//             value={credential}
//             onChange={(e) => setCredential(e.target.value)}
//             required
//           />
//         </label>
//         <label>
//           Password
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </label>
//         {errors.credential && (
//           <p>{errors.credential}</p>
//         )}
//         <button type="submit">Log In</button>
//       </form>
//     </>
//   );
// }

// frontend/src/components/LoginFormModal/index.js
import React, { useState, useEffect } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import "./LoginForm.css";

function LoginFormModal() {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const { closeModal } = useModal();
  const [disabled, setDisabled] = useState(true)

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors({});
    return dispatch(sessionActions.login({ credential, password }))
      .then(closeModal)
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) {
          setErrors(data.errors);
        }
      });
  };

  useEffect(() => {
    if (credential.length >= 4 && password.length >= 6) {
      console.log('Enabling button');
      setDisabled(false)
    } else {
      console.log('Disabling button');
      setDisabled(true)}
  }, [credential, password])


  const loginDemo = () => {
    dispatch(sessionActions.login({ credential: "Demo-lition", password: "password" }))
    .then(closeModal)
  }


  return (
    <>
      <form className="form-container" onSubmit={handleSubmit}>
      <h1 className="logIn">Log In</h1>
        <label className="text-input">
          {/* Username or Email */}
          <input
          className="input credentials"
          placeholder="Username or Email"
            type="text"
            value={credential}
            onChange={(e) => setCredential(e.target.value)}
            required
          />
        </label>
        <label className="text-input">
          {/* Password */}
          <input
           className="input password"
           placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        {errors.credential && <p>{errors.credential}</p>}
        <button className="submit-button" type="submit" disabled={disabled}>Log In</button>
        <button className="demo-button" onClick={loginDemo}>DemoUser Login</button>
      </form>
    </>
  );
}

export default LoginFormModal;