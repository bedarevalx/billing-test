import React from 'react';

const useForm = (formState) => {
  const [formErrors, setFormErrors] = React.useState(formState);
  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setFormErrors({ ...formErrors, [name]: value });
  };

  const validate = (inputs) => {
    let isValid = true;
    const validations = {};
    Object.keys(inputs).forEach((key) => {
      if (inputs[key].length > 0) {
        validations[key] = false;
      } else {
        validations[key] = true;
        isValid = false;
      }
    });
    setFormErrors(validations);
    return isValid;
  };

  return {
    formErrors,
    onChangeInput,
    validate,
  };
};

export default useForm;
