import {errorType, validationResultType} from "../types/validationTypes";
import {fields, errors} from "../const/validation"

export const signUpValidation = (username: string,
                                 email: string,
                                 password: string,
                                 repeatedPassword: string): validationResultType => {
  const result: validationResultType = {
    result: true,
    errors: []
  }

  const usernameValidationResult = usernameValidation(username.trim());
  const passwordValidationResult = passwordValidation(password.trim());
  const repeatPasswordValidationResult = repeatPasswordValidation(password.trim(), repeatedPassword.trim());
  const emailValidationResult = emailValidation(email);

  result.errors.push(usernameValidationResult);
  result.errors.push(passwordValidationResult);
  result.errors.push(repeatPasswordValidationResult);
  result.errors.push(emailValidationResult);

  if (usernameValidationResult.value !== "") result.result = false;
  if (passwordValidationResult.value !== "") result.result = false;
  if (repeatPasswordValidationResult.value !== "") result.result = false;
  if (emailValidationResult.value !== "") result.result = false;

  return result;
}

const usernameValidation = (username: string): errorType => {

  const result: errorType = {
    field: fields.USERNAME_FIELD,
    value: ""
  }

  if (username.length < 3) {
    result.value = errors.USERNAME_LENGTH_SHOULD_BE_MORE;
    return result;
  }

  if (username.length > 15) {
    result.value = errors.USERNAME_LENGTH_SHOULD_BE_LESS;
    return result;
  }

  const validationRegExp = new RegExp(/^[a-zA-Z]/);
  if (!username.match(validationRegExp)) {
    result.value = errors.USERNAME_IS_NOT_VALID;
    return result;
  }

  return result;
}

const passwordValidation = (password: string): errorType => {

  const result: errorType = {
    field: fields.PASSWORD_FIELD,
    value: ""
  }

  if (password.length < 3) {
    result.value = errors.PASSWORD_LENGTH_SHOULD_BE_MORE;
    return result;
  }

  if (password.length > 15) {
    result.value = errors.PASSWORD_LENGTH_SHOULD_BE_LESS;
    return result;
  }

  const validationRegExp = new RegExp(/^(?=.*\d)(?=.*)(?=.*[a-z])(?=.*[A-Z])/);
  if (!password.match(validationRegExp)) {
    result.value = errors.PASSWORD_IS_NOT_VALID;
    return result;
  }

  return result;
}

const repeatPasswordValidation = (password: string, repeatPassword: string): errorType => {

  const result: errorType = {
    field: fields.REPEAT_PASSWORD_FIELD,
    value: ""
  }

  if (password !== repeatPassword) {
    result.value = errors.PASSWORDS_ARE_NOT_THE_SAME;
    return result;
  }
  return result;
}

const emailValidation = (email: string) => {
  const result: errorType = {
    field: fields.EMAIL_FIELD,
    value: ""
  }

  const validationRegexp = new RegExp(/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i);

  if (!email.match(validationRegexp)) {
    result.value = errors.EMAIL_IS_NOT_VALID;
    return result;
  }

  return result;
}
