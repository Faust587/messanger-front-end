import jwt_decode from "jwt-decode";

type MessageInfoTypes = {
  userId: string,
  value: string
}

const renderMessage = (messageInfo: MessageInfoTypes) => {
  if (localStorage.getItem("token") !== null) {
    //const userData = jwt_decode(localStorage.getItem("token"));
  }
}

export const useMessage = {
  renderMessage
}
