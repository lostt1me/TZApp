export const validate = values => {
    const errors = {}
    if (!values.Email) {
      errors.Email = 'Required'
    }
    if (!values.Password) {
      errors.Password = 'Required'
    }
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.Email)) {
        errors.Email = 'Invalid email address'
    }
    if (!values.Name) {
        errors.Name = 'Required'
    }
    return errors
  }