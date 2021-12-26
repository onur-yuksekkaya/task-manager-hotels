import * as yup from 'yup';

export const loginSchema = yup.object({
  loginEmail: yup
    .string()
    .email('Lutfen gecerli bir email girin')
    .required('Bu alan gereklidir.'),
  loginPassword: yup
    .string()
    .min(5, 'Parola en az 5 karakter')
    .max(10, 'Parola en fazla 10 karakter')
    .required('Bu alan gereklidir.'),
});
