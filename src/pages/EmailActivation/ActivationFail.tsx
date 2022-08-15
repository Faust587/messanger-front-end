import {FC} from "react";
import "./styles.scss";
import failIcon from "../../assets/images/icons/activation-error.svg";
import {useNavigate} from "react-router-dom";

export const ActivationFail: FC = () => {

  const navigate = useNavigate();

  return (
    <div className="activation-container">
      <div className="message">
        <div className="title-block">
          <img alt="FAIL" className="title-block__icon" src={failIcon} />
          <span className="title-block__text">
            Oops... Email authorization fail
          </span>
        </div>
        <div onClick={() => navigate("/")} className="message__button">
          Go to home page
        </div>
      </div>
    </div>
  );
}
