import { useState } from "react";
import { useMutation } from "@apollo/client";
import { Typography } from "@mui/material";
import user from "../assets/icons/user.png";
import "./login.css";
import { FORGOT_PASSWORD_MUTATION } from "../queries/auth-queries";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [forgotPassword, { data, loading, error }] = useMutation(
    FORGOT_PASSWORD_MUTATION
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await forgotPassword({ variables: { email } });
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
            Veuillez saisir votre adresse mail pour réinitialiser votre mot de passe
            <p></p>
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
                    {"Envoi du lien de réinitialisation"}
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

export default ForgotPassword;
