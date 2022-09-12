import React, {FC} from "react";
import "./styles.scss";

type propsTypes = {
  placeholder: string,
  value: string,
  setValue: React.Dispatch<React.SetStateAction<string>>
}

export const MessageInput: FC<propsTypes> = (
  {
    placeholder
  }
) => {

  return (
    <div className="message-input-wrapper">
      <input type="text"
             className="message-input"
             placeholder={placeholder}
      />
    </div>
  );
}
