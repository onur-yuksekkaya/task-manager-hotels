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

export const addUserSchema = yup.object({
  workerName: yup
    .string()
    .min(2, 'Çalışan adı 2 karakterden az olamaz')
    .max(30, 'Çalışan adı 30 karakterden fazla olamaz')
    .required('Çalışan adı boş olamaz.'),
  email: yup
    .string()
    .email('Lutfen gecerli bir email girin')
    .required('Bu alan gereklidir.'),
  workerTitle: yup
    .string()
    .min(2, 'Çalışan ünvanı 5 karakterden az olamaz')
    .max(30, 'Çalışan ünvanı 30 karakterden fazla olamaz')
    .required('Çalışan ünvanı boş olamaz.'),
});

export const editUserSchema = yup.object({
  workerName: yup
    .string()
    .min(2, 'Çalışan adı 2 karakterden az olamaz')
    .max(30, 'Çalışan adı 30 karakterden fazla olamaz')
    .required('Çalışan adı boş olamaz.'),
  email: yup
    .string()
    .email('Lutfen gecerli bir email girin')
    .required('Bu alan gereklidir.'),
  workerTitle: yup
    .string()
    .min(2, 'Çalışan ünvanı 5 karakterden az olamaz')
    .max(30, 'Çalışan ünvanı 30 karakterden fazla olamaz')
    .required('Çalışan ünvanı boş olamaz.'),
});
