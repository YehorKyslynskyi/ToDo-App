export const emailValidations = {
  required: '* Required field',
  pattern: {
    value:
      /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/i,
    message: '* Incorrect email',
  },
}

export const passwordValidations = {
  required: '* Required field',
  minLength: {
    value: 6,
    message: '* Too short password',
  },
  pattern: {
    value: /^\S*$/i,
    message: '* Password contains spaces',
  },
}

export const taskFormValidations = {
  required: '* Required field',
}
