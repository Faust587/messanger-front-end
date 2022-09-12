import {useState} from "react";
import settingsIcon from "../../../assets/images/icons/settings-icon.svg";

export const UserPanel = () => {

  const [username, setUsername] = useState("Walter");
  const [status, setStatus] = useState("Full stack developer");

  return (
    <div className="user-panel-container">
      <div className="user-panel-container__username">
        {username}
        <img alt="settings" className="user-panel-container__settings" src={settingsIcon} />
      </div>
      <div className="user-panel-container__status">
        {status}
      </div>
    </div>
  );
}
