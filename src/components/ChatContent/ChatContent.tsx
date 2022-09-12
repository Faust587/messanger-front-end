import "./styles.scss";
import {MessageInput} from "../../UI/inputElement/MessageInput";
import stickerButton from "../../assets/images/icons/sticker-button.svg";
import {useState} from "react";
import {Chat} from "./Chat/Chat";

export const ChatContent = () => {

  const [message, setMessage] = useState("");

  return (
    <div className="chat-wrapper">
      <div className="chat-container">
        <Chat />
        <div className="message-input-container">
          <form
            className="input-form-wrapper"
            onSubmit={(e) => {e.preventDefault()}}
          >
            <MessageInput
              placeholder="Enter your message here"
              value={message}
              setValue={setMessage}
            />
            <img
              className="sticker-button"
              src={stickerButton}
              alt="sticker"
            />
            <input
              type="submit"
              className="message-send-button"
              value="Send"
            />
          </form>
        </div>
      </div>
    </div>
  );
}
