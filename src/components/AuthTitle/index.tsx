import {FC} from "react";

type PropsType = {
  openedForm: string,
}

export const AuthTitle: FC<PropsType> = (
  {
    openedForm = "sign-in",
  }) => {

  return (
    <div className={`greeting-container ${openedForm}`}>
      <div className={`greeting-container__text ${openedForm}`}>
        Welcome to my best pet project you ever seen
      </div>
    </div>
  );
}
