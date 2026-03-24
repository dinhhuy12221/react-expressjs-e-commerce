const isValidUsername = (input: string): boolean => {
  const value = input.trim();

  if (!value) return false;

  const usernameRegex = /^[a-zA-Z0-9_.]{3,20}$/;
  return usernameRegex.test(value);
};

const isValidPassword = (input: string): boolean => {
  const value = input.trim();

  if (!value) return false;

  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{6,}$/;

  return passwordRegex.test(value);
};

export { isValidUsername, isValidPassword };