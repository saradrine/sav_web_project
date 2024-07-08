import { useState } from "react";
import { Typography } from "@mui/material";
import hide from "../assets/icons/hide.png";
import show from "../assets/icons/show.png";
import user from "../assets/icons/user.png";
import suitcase from "../assets/icons/suitcase.png";
import phone from "../assets/icons/mobile-phone.png";
import gps from "../assets/icons/gps-navigation.png";
import cake from "../assets/icons/cake.png";
import mail from "../assets/icons/mail.png";
import down from "../assets/icons/down.png";
import gender from "../assets/icons/gender.png";
import padlock from "../assets/icons/padlock.png";
import "./login.css";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleSubmit = () => {
    console.log("submit");
  };

  return (
    <div className="login h-screen w-screen bg-white">
      <div>,kk</div>
      <div className="login-container rounded-l-lg bg-[#F0F2F5] py-12 px-16">
        <div className="header w-full max-w-md my-6 mx-auto">
          <p className="title text-5xl font-bold text-[#039388] mb-3">
            Bienvenu!
          </p>
          <p className="subtitle text-lg">Créez un compte pour continuer</p>
        </div>
        <div className="flex flex-col h-screen">
          <form className="w-full max-w-md mx-auto">
            <div className="input my-8">
              <label
                htmlFor="nom"
                className="block font-medium text-xl pl-1 pb-4"
              >
                Nom
              </label>
              <div className="flex flex-row  w-full bg-white rounded-[15px] px-5 py-3 ">
                <img src={user} width={23} alt="user" />
                <input
                  id="nom"
                  name="nom"
                  placeholder="ben foulen"
                  required
                  type="text"
                  className="text-ellipsis w-full text-nowrap overflow-hidden bg-transparent focus:outline-none active:border-none px-4 "
                />
              </div>
            </div>

            <div className="input my-8">
              <label
                htmlFor="prenom"
                className="block font-medium text-xl pl-1 pb-4"
              >
                Prénom
              </label>
              <div className="flex flex-row  w-full bg-white rounded-[15px] px-5 py-3 ">
                <img src={user} width={23} alt="user" />
                <input
                  id="prenom"
                  name="prenom"
                  placeholder="foulen"
                  required
                  type="text"
                  className="text-ellipsis w-full text-nowrap overflow-hidden bg-transparent focus:outline-none active:border-none px-4 "
                />
              </div>
            </div>

            <div className="input my-8">
              <label
                htmlFor="adreeseMail"
                className="block font-medium text-xl pl-1 pb-4"
              >
                Adresse mail
              </label>
              <div className="flex flex-row  w-full bg-white rounded-[15px] px-5 py-3 ">
                <img src={mail} width={23} alt="mail" />
                <input
                  id="adreeseMail"
                  name="adreeseMail"
                  placeholder="you@example.com"
                  required
                  type="email"
                  className="text-ellipsis w-full text-nowrap overflow-hidden bg-transparent focus:outline-none active:border-none px-4 "
                />
              </div>
            </div>

            <div className="input my-8">
              <label
                htmlFor="numTel"
                className="block font-medium text-xl pl-1 pb-4"
              >
                Numéro de téléphone
              </label>
              <div className="flex flex-row  w-full bg-white rounded-[15px] px-5 py-3 ">
                <img src={phone} width={23} alt="phone" />
                <input
                  id="numTel"
                  name="numTel"
                  placeholder="+216 55 555 555"
                  required
                  type="text"
                  className="text-ellipsis w-full text-nowrap overflow-hidden bg-transparent focus:outline-none active:border-none px-4 "
                />
              </div>
            </div>

            <div className="input my-8">
              <label
                htmlFor="sexe"
                className="block font-medium text-xl pl-1 pb-4"
              >
                Sexe
              </label>
              <div className="flex flex-row w-full bg-white rounded-[15px] px-5 py-3 ">
                <div className="flex flex-row w-full">
                  <img src={gender} width={23} alt="gender" />
                  <select
                    id="sexe"
                    name="sexe"
                    required
                    className="cursor-pointer text-ellipsis w-full text-nowrap overflow-hidden bg-transparent focus:outline-none active:border-none px-4 border-none appearance-none"
                  >
                    <option value="feminin">Féminin</option>
                    <option value="masculin">Masculin</option>
                  </select>
                </div>
                <img
                  src={down}
                  width={22}
                  alt="arrowdown"
                  //   className="  cursor-pointer"
                />
              </div>
            </div>

            <div className="input my-8">
              <label
                htmlFor="dateNaissance"
                className="block font-medium text-xl pl-1 pb-4"
              >
                Date de naissance
              </label>
              <div className="flex flex-row  w-full bg-white rounded-[15px] px-5 py-3 ">
                <img src={cake} width={23} alt="cake" />
                <input
                  id="dateNaissance"
                  name="dateNaissance"
                  required
                  type="date"
                  className="cursor-pointer text-ellipsis w-full text-nowrap overflow-hidden bg-transparent focus:outline-none active:border-none px-4 "
                />
              </div>
            </div>

            <div className="input my-8">
              <label
                htmlFor="emploi"
                className="block font-medium text-xl pl-1 pb-4"
              >
                Emploi
              </label>
              <div className="flex flex-row  w-full bg-white rounded-[15px] px-5 py-3 ">
                <img src={suitcase} width={23} alt="suitcase" />
                <input
                  id="emploi"
                  name="emploi"
                  placeholder="ingénieur informatique"
                  required
                  type="text"
                  className="text-ellipsis w-full text-nowrap overflow-hidden bg-transparent focus:outline-none active:border-none px-4 "
                />
              </div>
            </div>

            <div className="input my-8">
              <label
                htmlFor="adresse"
                className="block font-medium text-xl pl-1 pb-4"
              >
                Adresse
              </label>
              <div className="flex flex-row  w-full bg-white rounded-[15px] px-5 py-3 ">
                <img src={gps} width={23} alt="gps" />
                <input
                  id="adresse"
                  name="adresse"
                  placeholder="rue ---- ----, Tunisie"
                  required
                  type="text"
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
            </div>

            <div className="input my-8">
              <label
                htmlFor="confirmPassword"
                className="block font-medium text-xl pl-1 pb-4"
              >
                Confirmer le mot de passe
              </label>
              <div className="flex flex-row w-full bg-white rounded-[15px] px-5 py-3 ">
                <div className="flex flex-row w-full">
                  <img src={padlock} width={23} alt="padlock" />
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder="***********"
                    required
                    type={showConfirmPassword ? "text" : "password"}
                    className="text-ellipsis w-full text-nowrap overflow-hidden bg-transparent focus:outline-none active:border-none px-4 "
                  />
                </div>
                <img
                  onClick={toggleShowConfirmPassword}
                  src={showConfirmPassword ? show : hide}
                  width={22}
                  alt="show"
                  className="cursor-pointer"
                />
              </div>
            </div>

            <div className="footer flex justify-end mt-12">
              <div className="submit flex flex-col ">
                <button
                  onClick={handleSubmit}
                  style={{
                    boxShadow: "1px 2px 8px rgba(0,0,0,0.25)",
                  }}
                  className="flex items-center justify-center  rounded-[15px] bg-[#039388] hover:shadow-md transition transform hover:-translate-y-0.5 motion-reduce:transition-none motion-reduce:hover:transform-none px-4 py-2 mb-2 "
                >
                  <Typography fontSize={17} color={"white"}>
                    {"S'inscrire"}
                  </Typography>
                </button>
                <p>
                  Vous avez déjà un compte?{" "}
                  <a
                    href="/login"
                    className="text-[#039388] underline underline-offset-2 font-medium"
                  >
                    Se connecter
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

export default SignUp;
