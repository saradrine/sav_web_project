import { useState } from "react";
import PropTypes from "prop-types";
import Modal from "@mui/material/Modal";
import show from "../assets/icons/show.png";
import hide from "../assets/icons/hide.png";
import { Typography } from "@mui/material";

const ChangePasswordPopup = ({ isPopupOpen, setIsPopupOpen }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showAncien, setShowAncien] = useState(false);
  const handleSubmit = () => {
    console.log("submit");
  };

  const handleClose = () => setIsPopupOpen(false);

  const toggleShowAncien = () => {
    setShowAncien(!showAncien);
  };
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <Modal open={isPopupOpen} onClose={handleClose}>
      {/* <div className="fixed inset-0 flex items-center justify-center z-10"> */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-10 py-7 rounded-2xl shadow-lg max-w-sm w-full">
        <div className="text-2xl text-center font-bold">
          Changer le mot de passe
        </div>
        <div className="px-2">
          <div className="mt-8">
            <label
              htmlFor="oldPassword"
              className="block font-medium pl-1 pb-2"
            >
              Ancien mot de passe
            </label>
            <div className="relative ">
              <img
                onClick={toggleShowAncien}
                src={showAncien ? show : hide}
                width={20}
                alt="show"
                className="absolute right-5 top-2.5  cursor-pointer"
              />
              <input
                placeholder="taper votre mot de passe"
                required
                type={showAncien ? "text" : "password"}
                id="oldPassword"
                className="w-full bg-[#F0F2F5] rounded-[20px] focus:outline-none active:border-none pl-6 pr-12 py-2"
              />
            </div>
          </div>

          <div className="mt-6">
            <label
              htmlFor="newPassword"
              className="block font-medium pl-1 pb-2"
            >
              Nouveau mot de passe
            </label>
            <div className="relative ">
              <img
                onClick={toggleShowPassword}
                src={showPassword ? show : hide}
                width={20}
                alt="show"
                className="absolute right-5 top-2.5 cursor-pointer "
              />
              <input
                placeholder="taper le nouveau mot de passee"
                required
                type={showPassword ? "text" : "password"}
                id="newPassword"
                className="w-full bg-[#F0F2F5] rounded-[20px] focus:outline-none active:border-none pl-6 pr-12 py-2"
              />
            </div>
          </div>
          <div className="mt-6">
            <label
              htmlFor="confirmPassword"
              className="block font-medium pl-1 pb-2"
            >
              Confirmer mot de passe
            </label>
            <div className="relative ">
              <img
                onClick={toggleShowConfirmPassword}
                src={showConfirmPassword ? show : hide}
                width={20}
                alt="show"
                className="absolute right-5 top-2.5 cursor-pointer"
              />
              <input
                placeholder="re-taper le mot de passe"
                required
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                className="w-full bg-[#F0F2F5] rounded-[20px] focus:outline-none active:border-none pl-6 pr-12 py-2"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-end mt-8">
          <button
            onClick={handleSubmit}
            style={{
              boxShadow: "1px 2px 8px rgba(0,0,0,0.25)",
            }}
            className="flex items-center justify-center rounded-[25px] bg-[#039388] hover:shadow-md transition transform hover:-translate-y-0.5 motion-reduce:transition-none motion-reduce:hover:transform-none px-4 py-2 mt-2 mr-4"
          >
            <Typography fontSize={15} color={"white"}>
              {"Sauvegarder"}
            </Typography>
          </button>
          <button
            onClick={() => {
              handleClose();
            }}
            style={{
              boxShadow: "1px 2px 8px rgba(0,0,0,0.25)",
            }}
            className="flex items-center justify-center rounded-[25px] bg-[#F7F7F7] hover:shadow-md transition transform hover:-translate-y-0.5 motion-reduce:transition-none motion-reduce:hover:transform-none px-4 py-2 mt-2"
          >
            <Typography fontSize={15} color={"#039388"}>
              {"Annuler"}
            </Typography>
          </button>
        </div>
      </div>
      {/* </div> */}
    </Modal>
  );
};

ChangePasswordPopup.propTypes = {
  setIsPopupOpen: PropTypes.func.isRequired,
  isPopupOpen: PropTypes.bool.isRequired,
};

export default ChangePasswordPopup;
