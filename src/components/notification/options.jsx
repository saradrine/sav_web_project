import "./options.css";
import React from "react";
const Options = ({toggleRead, deleteNotif, isSeen}) => {
  return (
    <div className="options absolute right-3 mt-6 bg-white p-1">
      <ul>
        {!isSeen && (
            <React.Fragment>
              <li onClick={toggleRead} className="li p-2 cursor-pointer">
                Marquer comme lu
              </li>
              <hr/>
            </React.Fragment>
        )}

        <li onClick={deleteNotif} className="li p-2 cursor-pointer">
          Supprimer
        </li>
      </ul>
    </div>
  );
};

export default Options;
