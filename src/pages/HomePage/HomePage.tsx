import "./styles.scss";
import {NavBar} from "../../components/NavBar";
import {ChatContent} from "../../components/ChatContent/ChatContent";
import {Details} from "../../components/Details";

export const HomePage = () => {

  return (
    <div className="page-layout">
      <NavBar />
      <ChatContent />
      <Details />
    </div>
  );
}
