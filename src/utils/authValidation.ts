export const usernameValidation = (username: string) => {
  const errors:string[] = [];
  const usernameClear = username.trim();
  const validationRegExp = new RegExp(/^[a-zA-Z]+$/);
  if (!usernameClear.match(validationRegExp))
    errors.push("Your first name is not valid. Only characters A-Z, a-z and '-' are  acceptable.");
  if (usernameClear.length < 3)
    errors.push("Username must have more then 3 symbols");
  if (usernameClear.length > 16)
    errors.push("Username must have less then 16 symbols");
  return errors;
}

export const passwordValidation = (password: string) => {
  const passwordClear = password.trim();
  const errors:string[] = [];
  const validationRegExp = new RegExp(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]$/);
  if (!passwordClear.match(validationRegExp))
    errors.push("Your password is not valid");
  if (passwordClear.length < 8)
    errors.push("Your password must have more then 8 symbols");
  if (passwordClear.length > 16)
    errors.push("Your password must have less then 16 symbols");
  return errors;
}
