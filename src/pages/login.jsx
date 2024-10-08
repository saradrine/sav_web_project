import { useState, useEffect } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN_MUTATION } from "../queries/auth-queries";
import { Typography } from "@mui/material";
import hide from "../assets/icons/hide.png";
import show from "../assets/icons/show.png";
import user from "../assets/icons/user.png";
import padlock from "../assets/icons/padlock.png";
import "./login.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [login, { data, loading, error }] = useMutation(LOGIN_MUTATION);
  const navigate = useNavigate();
  const { currentUser, setCurrentUser } = useAuth();

  useEffect(() => {
    if (currentUser) {
      navigate("/dashboard");
    }
  }, [currentUser, navigate]);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await login({ variables: { email, password } });
      const token = data.login.accessToken;
      const role = data.login.user.role;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(data.login.user));
      setCurrentUser(data.login.user);
      console.log(
        "Login successful, token stored",
        token,
        "lllll",
        role,
        "lllll",
        data
      );
      if (["Admin", "SuperAdmin"].includes(role)) {
        navigate("/dashboard");
      } else if (role === "User") {
        navigate("/");
      } else {
        setErrorMessage("Veuillez vous connecter en tant qu'administrateur");
      }
    } catch (err) {
      console.error(err.message);
      setErrorMessage(err.message);
    }
  };

  return (
    <div className="login h-screen w-screen bg-white">
      <div>,kk</div>
      <div className="login-container rounded-l-lg bg-[#F0F2F5] py-12 px-16">
        <div className="header w-full max-w-md my-6 mx-auto">
          <p className="title text-5xl font-bold text-[#039388] mb-3">
            Bienvenu!
          </p>
          <p className="subtitle text-lg">
            Connectez-vous pour accéder à votre compte
          </p>
        </div>
        <div className="flex flex-col h-screen">
          <form className="w-full max-w-md mx-auto" onSubmit={handleSubmit}>
            {errorMessage && (
              <div className="error text-red-500">{errorMessage}</div>
            )}
            <div className="input my-8">
              <label
                htmlFor="adreeseMail"
                className="block font-medium text-xl pl-1 pb-4"
              >
                Adresse mail
              </label>
              <div className="flex flex-row  w-full bg-white rounded-[15px] px-5 py-3 ">
                <img src={user} width={23} alt="user" />
                <input
                  id="adreeseMail"
                  name="adreeseMail"
                  placeholder="you@example.com"
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="text-ellipsis w-full text-nowrap overflow-hidden bg-transparent focus:outline-none active:border-none px-4 "
                />
              </div>
            </div>
            <div className="input my-8">
              <label
                htmlFor="password"
                className="block font-medium text-xl pl-1 pb-4"
              >
                Mot de passe
              </label>
              <div className="flex flex-row w-full bg-white rounded-[15px] px-5 py-3 ">
                <div className="flex flex-row w-full">
                  <img src={padlock} width={23} alt="padlock" />
                  <input
                    id="password"
                    name="password"
                    placeholder="***********"
                    required
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="text-ellipsis w-full text-nowrap overflow-hidden bg-transparent focus:outline-none active:border-none px-4 "
                  />
                </div>
                <img
                  onClick={toggleShowPassword}
                  src={showPassword ? show : hide}
                  width={22}
                  alt="show"
                  className="  cursor-pointer"
                />
              </div>
              <div className="flex justify-end mt-2">
                <a
                  href="/forgot-password"
                  className="oublie text-[#039388] text-sm font-medium"
                >
                  Mot de passe oublié?
                </a>
              </div>
            </div>
            <div className="footer flex justify-end mt-12">
              <div className="submit flex flex-col ">
                <button
                  type="submit"
                  style={{
                    boxShadow: "1px 2px 8px rgba(0,0,0,0.25)",
                  }}
                  className="flex items-center justify-center  rounded-[15px] bg-[#039388] hover:shadow-md transition transform hover:-translate-y-0.5 motion-reduce:transition-none motion-reduce:hover:transform-none px-4 py-2 mb-2 "
                >
                  <Typography fontSize={17} color={"white"}>
                    {"Se connecter"}
                  </Typography>
                </button>
                <p>
                  Vous débutez avec XXX?{" "}
                  <a
                    href="/signup"
                    className="text-[#039388] underline underline-offset-2 font-medium"
                  >
                    Inscrivez-vous
                  </a>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
