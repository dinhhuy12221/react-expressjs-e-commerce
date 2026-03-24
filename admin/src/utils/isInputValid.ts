const isValidUsername = (input: string): boolean => {
  if (!input) return false;

  // ❌ reject if it contains ANY whitespace
  if (/\s/.test(input)) return false;

  return /^[a-zA-Z0-9_.]{3,20}$/.test(input);
};

const isValidPassword = (input: string): boolean => {
  const value = input.trim();

  if (!value) return false;

  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{6,}$/;

  return passwordRegex.test(value);
};

export { isValidUsername, isValidPassword };