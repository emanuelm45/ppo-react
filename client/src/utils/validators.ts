const validateEmail = (email: string) => {
  const EMAIL_REGEX = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/gm
  return email?.match(EMAIL_REGEX) ? true : false
}

const validatePassword = (password: string) => {
  const PWD_REGEX = /^(?=.*\d).{4,8}$/gm
  return password?.match(PWD_REGEX) ? true : false
}

const validateFields = (email: string, password: string) => {
  return validateEmail(email) && validatePassword(password)
}

export { validateFields }
