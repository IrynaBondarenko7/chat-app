import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { loading, login } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password);
  };
  return (
    <div className="flex flex-col items-center justify-center md:min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400/0 bg-clip-padding backdrop-blur-lg">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Login
          <span className="text-green-600 ml-2">ChatApp</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2 text-white">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              className="w-full input input-bordered h-10 focus:outline-green-700 border-0 transition-all duration-300"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </div>
          <div>
            <label className="label p-2 text-white">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full input input-bordered h-10 focus:outline-green-700 border-0 transition-all duration-300"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <Link
            to="/signup"
            className="text-sm hover:underline hover:text-green-600 focus:underline focus:text-green-600 mt-2 inline-block text-white transition-all duration-300"
          >
            {"Don't"} have an account?
          </Link>

          <button className="btn btn-block btn-sm mt-2" disabled={loading}>
            {loading ? (
              <span className="loading loading-spinner"></span>
            ) : (
              "Login"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
