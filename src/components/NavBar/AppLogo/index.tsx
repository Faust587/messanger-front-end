import appLogo from "../../../assets/images/icons/app-logo.svg";

export const AppLogo = () => {

  return (
    <div className="logo-container">
      <img src={appLogo} alt="messenger icon" className="logo-container__logo" />
      <div className="logo-container__title">
        Norse messenger
      </div>
    </div>
  );
}
