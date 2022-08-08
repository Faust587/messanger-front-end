import {errorType} from "../types/validationTypes";
import {fields, errors} from "../const/validation"

export const signUpValidation = (username: string, password: string, repeatedPassword: string): errorType[] => {
  const errors: errorType[] = [];

  const usernameValidationResult = usernameValidation(username);
  const passwordValidationResult = passwordValidation(password);
  const repeatPasswordValidationResult = repeatPasswordValidation(password, repeatedPassword);

  if (usernameValidationResult) errors.push(usernameValidationResult);
  if (passwordValidationResult) errors.push(passwordValidationResult);
  if (repeatPasswordValidationResult) errors.push(repeatPasswordValidationResult);

  return errors;
}

const signInValidation = (username: string, password: string): errorType[] => {
  const errors: errorType[] = [];

  return errors;
}

const usernameValidation = (username: string): errorType | null => {
  const validationRegExp = new RegExp(/^[a-zA-Z].{3,12}$/);
  if (!username.match(validationRegExp) || username.length < 3 || username.length > 16) {
    return {
      field: fields.USERNAME_FIELD,
      value: errors.USERNAME_IS_NOT_VALID
    }
  }
  return null;
}

const passwordValidation = (password: string): errorType | null => {
  const validationRegExp = new RegExp(/^(?=.*\d)(?=.*)(?=.*[a-z])(?=.*[A-Z]).{8,16}$/);
  if (!password.match(validationRegExp)) {
    return {
      field: fields.PASSWORD_FIELD,
      value: errors.PASSWORD_IS_NOT_VALID
    }
  }
  return null;
}

const repeatPasswordValidation = (password: string, repeatPassword: string): errorType | null => {
  if (password !== repeatPassword) {
    return {
      field: fields.REPEAT_PASSWORD_FIELD,
      value: errors.PASSWORDS_ARE_NOT_THE_SAME
    }
  }
  return null;
}
