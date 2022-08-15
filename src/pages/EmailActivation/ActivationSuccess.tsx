import {FC} from "react";
import "./styles.scss";
import successIcon from "../../assets/images/icons/activation-success.svg";
import {useNavigate} from "react-router-dom";

export const ActivationSuccess: FC = () => {

  const navigate = useNavigate();

  return (
    <div className="activation-container">
      <div className="message">
        <div className="title-block">
          <img alt="SUCCESS" className="title-block__icon" src={successIcon} />
          <span className="title-block__text">
            Email authorization success
          </span>
        </div>
        <div onClick={() => navigate("/")} className="message__button">
          Go to home page
        </div>
      </div>
    </div>
  );
}
