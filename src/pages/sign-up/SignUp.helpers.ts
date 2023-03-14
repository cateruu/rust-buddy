import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, 'Minimum username lenght is 3')
    .max(25, 'Username character limit is 25')
    .required(),
  email: Yup.string().email('Invalid email').required(),
  password: Yup.string().min(6, 'Password too short').required(),
  confirmPassword: Yup.string()
    .test('passwords-match', 'Passwords do not match', function (value) {
      return this.parent.password === value;
    })
    .required(),
});
