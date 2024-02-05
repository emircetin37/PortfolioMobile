import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    photo: Yup.string().required('Fotoğraf zorunlu'),
    fullName: Yup.string().required('Ad ve soyad zorunlu'),
    country: Yup.string().required('Ülke zorunlu'),
    city: Yup.string().required('İl zorunlu'),
    identityNumber: Yup.string().required('Kimlik numarası zorunlu'),
    phoneNumber: Yup.string().required('Telefon numarası zorunlu'),
    birthDate: Yup.date().required('Doğum tarihi zorunlu'),
    gender: Yup.string().required('Cinsiyet zorunlu'),
    kvkkApproval: Yup.bool().oneOf([true], 'KVKK onayı zorunlu'),
    employmentStatus: Yup.string().required('Çalışma durumu zorunlu'),
    occupation: Yup.string().required('Meslek zorunlu'),
    educationLevel: Yup.string().required('Eğitim seviyesi zorunlu'),
    schoolName: Yup.string().required('Okul adı zorunlu'),
    department: Yup.string().required('Bölüm zorunlu'),
    graduationYear: Yup.string().required('Mezuniyet yılı zorunlu'),
    pdf: Yup.string().required("Pdf seçimi zorunlu"),
    competences: Yup.array().of(
        Yup.object().shape({
            skill: Yup.string().required('Yetenek alanı zorunlu'),
            proficiency: Yup.number()
                .typeError('Yeterlilik derecesi sayısal bir değer olmalı')
                .required('Yeterlilik derecesi zorunlu')
                .min(1, 'Yeterlilik derecesi en az 1 olmalı')
                .max(5, 'Yeterlilik derecesi en fazla 5 olmalı')
        })
    ),
    projects: Yup.array().of(
        Yup.object().shape({
            projectName: Yup.string().required('Proje adı zorunlu'),
            projectDetails: Yup.array().of(
                Yup.object().shape({
                    detail: Yup.string().required('Proje detayı zorunlu'),
                })
            ).min(1, 'En az bir proje detayı eklemelisiniz'),
        })
    ),
});

export default validationSchema;
