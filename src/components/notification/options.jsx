import "./options.css";

const Options = ({toggleRead, deleteNotif}) => {
  return (
    <div className="options absolute right-12 mt-6 bg-white p-1">
      <ul>
        <li onClick={toggleRead} className="li p-2 cursor-pointer">
          Marquer comme lu
        </li>
        <hr />
        <li onClick={deleteNotif} className="li p-2 cursor-pointer">
          Supprimer
        </li>
      </ul>
    </div>
  );
};

export default Options;
