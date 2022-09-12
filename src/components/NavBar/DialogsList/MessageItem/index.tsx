import {FC} from "react";

type PropTypes = {
  senderName: string,
  messageAmount: number,
  active: boolean
}

export const MessageItem: FC<PropTypes> = (
  {
    senderName,
    messageAmount,
    active
  }
) => {

  return (
    <div className={active ? "message-item-container active" : "message-item-container"}>
      <div className="message-item-container__text">
        {senderName}
      </div>
      {(messageAmount > 0) ? <div className="message-item-container__counter">
        {messageAmount}
      </div> : null}
    </div>
  );
}
