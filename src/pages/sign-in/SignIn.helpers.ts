import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  email: Yup.string().required(),
  password: Yup.string().required(),
});
