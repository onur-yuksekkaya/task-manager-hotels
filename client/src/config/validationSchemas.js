import * as yup from 'yup';

export const loginSchema = yup.object({
  email: yup
    .string()
    .email('Lutfen gecerli bir email girin')
    .required('Bu alan gereklidir.'),
  password: yup
    .string()
    .min(5, 'Parola en az 5 karakter')
    .max(10, 'Parola en fazla 10 karakter')
    .required('Bu alan gereklidir.'),
});

export const addTaskSchema = yup.object({
  taskName: yup
    .string()
    .min(3, 'Görev adı 3 karakterden az olamaz')
    .max(30, 'Görev adı 30 karakterden fazla olamaz')
    .required('Görev adı boş olamaz.'),
  taskDesc: yup
    .string()
    .min(10, 'Görev tanımı 10 karakterden az olamaz')
    .max(150, 'Görev tanımı 150 karakterden fazla olamaz')
    .required('Görev tanımı boş olamaz.'),
  taskWorker: yup.string().required('Bir çalışan seçin.'),
});

export const editTaskSchema = yup.object({
  taskName: yup
    .string()
    .min(3, 'Görev adı 3 karakterden az olamaz')
    .max(30, 'Görev adı 30 karakterden fazla olamaz')
    .required('Görev adı boş olamaz.'),
  taskDesc: yup
    .string()
    .min(10, 'Görev tanımı 10 karakterden az olamaz')
    .max(150, 'Görev tanımı 150 karakterden fazla olamaz')
    .required('Görev tanımı boş olamaz.'),
  taskWorker: yup.string().required('Bir çalışan seçin.'),
});

export const registerUserSchema = yup.object({
  name: yup
    .string()
    .min(2, 'Çalışan adı 2 karakterden az olamaz')
    .max(30, 'Çalışan adı 30 karakterden fazla olamaz')
    .required('Çalışan adı boş olamaz.'),
  surname: yup
    .string()
    .min(2, 'Çalışan Soyadı 2 karakterden az olamaz')
    .max(30, 'Çalışan Soyadı 30 karakterden fazla olamaz')
    .required('Çalışan Soyadı boş olamaz.'),
  department: yup
    .string()
    .min(3, 'Departman 3 karakterden az olamaz')
    .max(30, 'Departman 30 karakterden fazla olamaz')
    .required('Departman boş olamaz.'),
  email: yup
    .string()
    .email('Lutfen gecerli bir email girin')
    .required('Email boş olamaz'),
  phone: yup
    .string()
    .min(10, 'Telefon en az 10-11 karakter olmalıdır')
    .max(11, 'Telefon en az 10-11 karakter olmalıdır')
    .required('Telefon boş olamaz gereklidir.'),
});
