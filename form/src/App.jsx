import { useState } from "react";

const Login = () => {
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");

const handleChangeUsername = (e) => {
  setUsername (e.target.value);
};

const handleChangePassword = (e) => {
  setPassword (e.target.value);
};

const handleSubmit = () => {
  e.preventDefault();
  console.log(username)
  console.log(password)
}

return (
  <div>
    <form onSubmit={handleSubmit}>
      <label>Username:</label>
      <input type="text" name="username" value={username} onChange={handleChangeUsername}/>
      <label>Password:</label>
      <input type="password" name="paswword" value={password} onChange={handleChangePassword}/>
      <button type="submit">SEND</button>
    </form>
  </div>
)
}

export default Login;