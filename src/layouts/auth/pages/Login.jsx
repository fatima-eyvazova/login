import React, { useContext, useState } from "react";
import { AuthContext } from "../../../contexts/authContext";
import { Link } from "react-router-dom";

const Login = () => {
  const { setUser } = useContext(AuthContext);
  const [loginUser, setLoginUser] = useState({});

  const handleFormSubmit = (e) => {
    e.preventDefault();
    login();
  };

  const handleChange = (e) => {
    setLoginUser({ ...loginUser, [e.target.name]: e.target.value });
  };

  const login = () => {
    fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: loginUser.username,
        password: loginUser.password,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res.token);
        if (res.token) {
          console.log("Login successful");
          setUser(res);
        }
      });
  };

  return (
    <div className="bg-indigo-500">
      <div className="flex items-center justify-center h-screen">
        <form
          className="bg-white p-8 rounded-lg shadow-md w-96"
          onSubmit={handleFormSubmit}
        >
          <div className="flex items-baseline justify-between">
            <h2 className="text-2xl font-semibold mb-6">Login</h2>
            <Link className="text-xl" to={"/"}>
              Go Home
            </Link>
          </div>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-gray-700 text-sm font-medium mb-2"
            >
              Username
            </label>
            <input
              name="username"
              id="username"
              className="w-full h-10 px-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              type="text"
              placeholder="Enter your username"
              onChange={handleChange}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-medium mb-2"
            >
              Password
            </label>
            <input
              name="password"
              id="password"
              className="w-full h-10 px-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              type="password"
              placeholder="Enter your password"
              onChange={handleChange}
            />
          </div>
          <button className="w-full h-10 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
