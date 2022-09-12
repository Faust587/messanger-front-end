import "./styles.scss";
import {AppLogo} from "./AppLogo";
import {UserPanel} from "./UserPanel";
import {DialogsList} from "./DialogsList";
import {SearchInput} from "./SearchInput";

export const NavBar = () => {

  return (
    <nav className="navigation-container">
      <AppLogo />
      <UserPanel />
      <SearchInput />
      <DialogsList />
    </nav>
  );
}
