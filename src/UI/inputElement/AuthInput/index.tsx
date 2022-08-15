import "./styles.scss";
import React, {FC} from "react";

type PropsType = {
  type: string,
  imageURL: string,
  alt: string,
  placeholder: string,
  error: string | null,
  value?: string,
  setValue?: React.Dispatch<React.SetStateAction<string>>
}

export const AuthInputElement: FC<PropsType> = (
  {
    type,
    imageURL,
    alt,
    placeholder,
    error,
    value,
    setValue
  }) => {

  return (
    <div className="auth-input-container">
      <img
        className="auth-input-container__logo"
        alt={alt}
        src={imageURL}
      />
      <input
        className="auth-input-container__input"
        type={type}
        placeholder={placeholder}
        value={value ? value : undefined}
        onChange={(e) => setValue ? setValue(e.target.value) : undefined}
      />
      {error ? <span className="auth-input-container__error-text">
        {error}
      </span> : null}
    </div>
  );
}
