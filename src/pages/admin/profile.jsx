// import Header from "../../components/admin/header/header";
import { useState } from "react";
import { Box, Paper, Toolbar, Tooltip, Typography } from "@mui/material";
import pencil from "../../assets/icons/pencil.png";
import TableType from "../../utils/enum/tableType.enum";
import userIMG from "../../assets/icons/user.png";
import suitcase from "../../assets/icons/suitcase.png";
import cake from "../../assets/icons/cake.png";
import mail from "../../assets/icons/mail.png";
import mobilePhone from "../../assets/icons/mobile-phone.png";
import gpsNavigation from "../../assets/icons/gps-navigation.png";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import ChangePasswordPopup from "../../components/changePassword";
import { useQuery } from "@apollo/client";
import { useAuth } from "../../context/authContext";
import { FIND_USER_BY_ID } from "../../queries/users-queries";

const ProfilAdmin = () => {
    const { currentUser } = useAuth();
    const { data, loading, error } = useQuery(FIND_USER_BY_ID, {
      variables: { id: currentUser.id },
    });
  const [isEditMode, setIsEditMode] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const user = data?.user;
  const initialData = {
    nom: user?.nom,
    prenom: user?.prenom,
    adresseMail: user?.email,
    numTel: user?.telephone,
    emploi: user?.emploi,
    adresse: user?.adresse,
    dateNaissance: user?.dateNaissance,
  };
  const [formData, setFormData] = useState(initialData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    console.log("submit");
  };

  return (
    <div>
      {/* <Header /> */}
      <div className="mb-3" />
      <Box sx={{ width: "100%" }}>
        <Paper
          sx={{
            width: "100%",
            mb: 2,
            borderRadius: "15px",
            boxShadow: "1px 2px 5px rgba(0,0,0,0.15)",
            padding: "1rem",
          }}
        >
          <Toolbar
            sx={{
              pl: { sm: 2 },
              pr: { xs: 1, sm: 1 },
            }}
          >
            <div className="flex flex-col sm:flex-row justify-between w-full mt-7">
              <div className="flex items-center">
                <Typography
                  sx={{
                    // flex: "1 1 100%",
                    // paddingLeft: "1rem",
                    // marginTop: "1.8rem",
                    marginBottom: "0.5rem",
                    marginRight: "0.5rem",
                  }}
                  fontSize={35}
                  fontWeight={600}
                  id="tableTitle"
                  component="div"
                  className="overflow-hidden"
                >
                  {TableType.PROFILE}
                </Typography>
                {!isEditMode && (
                  <Tooltip title="Modifier le profil">
                    <div className="flex items-center justify-center rounded-[50%] mb-2 w-14 h-14 hover:bg-[#F0F2F5] hover:rounded-[50%] hover:shadow-md transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">
                      <button onClick={() => setIsEditMode(true)}>
                        <img
                          title="Modifier le profil"
                          alt="modifier profil"
                          src={pencil}
                          width={25}
                          height={25}
                        />
                      </button>
                    </div>
                  </Tooltip>
                )}
              </div>
              {/* <Tooltip title="Changer le mot de passe"> */}
              {!isEditMode && (
                <div className="flex h-full items-center justify-start ">
                  <button
                    onClick={() => setIsPopupOpen(true)}
                    className="flex items-center justify-center rounded-[25px] bg-[#039388] hover:shadow-md transition transform hover:-translate-y-0.5 motion-reduce:transition-none motion-reduce:hover:transform-none px-4 py-2 mt-2"
                  >
                    <Typography fontSize={15} color={"white"}>
                      {"Changer le mot de passe"}
                    </Typography>
                  </button>
                  {isPopupOpen && (
                    <ChangePasswordPopup
                      isPopupOpen={isPopupOpen}
                      setIsPopupOpen={setIsPopupOpen}
                    />
                  )}
                </div>
              )}
              {/* </Tooltip> */}
            </div>
          </Toolbar>
          <div className="flex justify-center items-center">
            <div className="profile flex flex-col sm:flex-row items-center justify-center w-full max-w-4xl mt-5 p-3">
              <div className="avatar flex-1 flex-col justify-center items-center mx-auto bg-white w-full sm:w-auto p-2 m-1">
                <div className="flex items-center justify-center">
                  <img
                    style={{
                      boxShadow: "1px 2px 8px rgba(0,0,0,0.15)",
                    }}
                    src={userIMG}
                    className="w-48 h-48 mx-auto rounded-full"
                    alt="photo de profil"
                  />
                </div>
                <div className="text-center mt-5">
                  <p className="text-2xl sm:text-3xl font-semibold text-gray-900">
                    {user?.prenom}
                  </p>
                  {/* <p
                    title="Admin / software engineering student"
                    className="job overflow-hidden text-ellipsis line-clamp-3 text-base sm:text-md text-gray-800 pt-2 px-5 w-auto "
                  >
                    {"Admin / software engineering student"}
                  </p> */}
                  <hr className="mt-3 mb-1 mx-5 border-t-2" />
                  <div className="flex align-center justify-center mt-2">
                    <a
                      className="text-2xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300"
                      href={"https://github.com/"}
                    >
                      <FaGithub />
                      <span className="sr-only">Github</span>
                    </a>
                    <a
                      className="text-2xl m-1 p-1 sm:m-2 sm:p-2 text-teal-800 hover:bg-teal-800 rounded-full hover:text-white transition-colors duration-300"
                      href={"https://www.linkedin.com/"}
                    >
                      <FaLinkedin />
                      <span className="sr-only">Linkedin</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="information flex-1 flex-col justify-center items-center  bg-white w-full sm:w-auto overflow-auto p-2 m-1">
                <Box className="flex flex-row bg-[#F0F2F5] rounded-xl px-5 py-2 my-3 ">
                  <img src={userIMG} alt="nom" width={25} height={25} />
                  {isEditMode ? (
                    <input
                      name="nom"
                      type="text"
                      className="text-ellipsis w-full text-nowrap overflow-hidden bg-[#F0F2F5] rounded-xl focus:outline-none active:border-none pl-5"
                      value={formData.nom}
                      onChange={handleChange}
                    />
                  ) : (
                    <Typography
                      variant=""
                      className="text-ellipsis text-nowrap overflow-hidden pl-5"
                      title={"ben foulen"}
                    >
                      {user?.nom}
                    </Typography>
                  )}
                </Box>
                {/* <Box className="flex bg-[#F0F2F5] rounded-xl px-5 py-2 my-3 ">
                  <img src={user} alt="prenom" width={25} height={25} />
                  {isEditMode ? (
                    <input
                      name="prenom"
                      type="text"
                      className="text-ellipsis w-full text-nowrap overflow-hidden bg-[#F0F2F5] rounded-xl focus:outline-none active:border-none pl-5"
                      value={formData.prenom}
                      onChange={handleChange}
                    />
                  ) : (
                    <Typography
                      variant=""
                      className="text-ellipsis text-nowrap overflow-hidden pl-5"
                      title={"foulen"}
                    >
                      foulen
                    </Typography>
                  )}
                </Box> */}
                <Box className="flex bg-[#F0F2F5] rounded-xl px-5 py-2 my-3 ">
                  <img src={mail} alt="adresseMail" width={25} height={25} />
                  {isEditMode ? (
                    <input
                      name="adresseMail"
                      type="text"
                      className="text-ellipsis w-full text-nowrap overflow-hidden bg-[#F0F2F5] rounded-xl focus:outline-none active:border-none pl-5"
                      value={formData.adresseMail}
                      onChange={handleChange}
                    />
                  ) : (
                    <Typography
                      variant=""
                      className="text-ellipsis text-nowrap overflow-hidden pl-5"
                      title={"foulenbenfoulen@gmail.com"}
                    >
                      {user?.email}
                    </Typography>
                  )}
                </Box>
                <Box className="flex bg-[#F0F2F5] rounded-xl px-5 py-2 my-3 ">
                  <img src={mobilePhone} alt="numTel" width={25} height={25} />
                  {isEditMode ? (
                    <input
                      name="numTel"
                      type="text"
                      className="text-ellipsis w-full text-nowrap overflow-hidden bg-[#F0F2F5] rounded-xl focus:outline-none active:border-none pl-5"
                      value={formData.numTel}
                      onChange={handleChange}
                    />
                  ) : (
                    <Typography
                      variant=""
                      className="text-ellipsis text-nowrap overflow-hidden pl-5"
                      title={"55555555"}
                    >
                      {user?.telephone}
                    </Typography>
                  )}
                </Box>
                <Box className="flex bg-[#F0F2F5] rounded-xl px-5 py-2 my-3 ">
                  <img src={suitcase} alt="emploi" width={25} height={25} />
                  {isEditMode ? (
                    <input
                      name="emploi"
                      type="text"
                      className="text-ellipsis w-full text-nowrap overflow-hidden bg-[#F0F2F5] rounded-xl focus:outline-none active:border-none pl-5"
                      value={formData.emploi}
                      onChange={handleChange}
                    />
                  ) : (
                    <Typography
                      variant=""
                      className="text-ellipsis text-nowrap overflow-hidden pl-5"
                      title={"architecte"}
                    >
                      {user?.emploi}
                    </Typography>
                  )}
                </Box>
                <Box className="flex bg-[#F0F2F5] rounded-xl px-5 py-2 my-3 ">
                  <img
                    src={gpsNavigation}
                    alt="adresse"
                    width={25}
                    height={25}
                  />
                  {isEditMode ? (
                    <input
                      name="adresse"
                      type="text"
                      className="text-ellipsis w-full text-nowrap overflow-hidden bg-[#F0F2F5] rounded-xl focus:outline-none active:border-none pl-5"
                      value={formData.adresse}
                      onChange={handleChange}
                    />
                  ) : (
                    <Typography
                      variant=""
                      className="text-ellipsis text-nowrap overflow-hidden pl-5"
                      title={"55 rue de la paix, 1000 Tunis"}
                    >
                      {user?.adresse}
                    </Typography>
                  )}
                </Box>
                <Box className="flex bg-[#F0F2F5] rounded-xl px-5 py-2 my-3 ">
                  <img src={cake} alt="dateNaissance" width={25} height={25} />
                  {isEditMode ? (
                    <input
                      name="dateNaissance"
                      type="text"
                      className="text-ellipsis w-full text-nowrap overflow-hidden bg-[#F0F2F5] rounded-xl focus:outline-none active:border-none pl-5"
                      value={formData.dateNaissance}
                      onChange={handleChange}
                    />
                  ) : (
                    <Typography
                      variant=""
                      className="text-ellipsis text-nowrap overflow-hidden pl-5"
                      title={"22/05/2020"}
                    >
                      {user?.dateNaissance}
                    </Typography>
                  )}
                </Box>
                {isEditMode && (
                  <div className="flex justify-end mt-5">
                    <button
                      onClick={handleSubmit}
                      style={{
                        boxShadow: "1px 2px 8px rgba(0,0,0,0.25)",
                      }}
                      className="flex items-center justify-center rounded-[25px] bg-[#039388] hover:shadow-md transition transform hover:-translate-y-0.5 motion-reduce:transition-none motion-reduce:hover:transform-none px-3.5 py-1.5 mt-2 mr-2"
                    >
                      <Typography fontSize={15} color={"white"}>
                        {"Sauvegarder"}
                      </Typography>
                    </button>
                    <button
                      onClick={() => {
                        setFormData(initialData);
                        setIsEditMode(false);
                      }}
                      style={{
                        boxShadow: "1px 2px 8px rgba(0,0,0,0.25)",
                      }}
                      className="flex items-center justify-center rounded-[25px] bg-[#F7F7F7] hover:shadow-md transition transform hover:-translate-y-0.5 motion-reduce:transition-none motion-reduce:hover:transform-none px-3 py-1.5 mt-2"
                    >
                      <Typography fontSize={15} color={"#039388"}>
                        {"Annuler"}
                      </Typography>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Paper>
      </Box>
    </div>
  );
};

export default ProfilAdmin;
