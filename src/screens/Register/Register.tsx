import { Button, Image, Modal, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./Register.style";
import { FieldArray, Form, Formik } from "formik";
import validationSchema from "../../schemas/validationSchema";
import { useEffect, useState } from "react";
import { educationLevelOptions, employmentStatusOptions, formatDateString, genderOptions, getCity, getCountry, selectImage, selectPdf } from "./Register.helper";
import RNPickerSelect from "react-native-picker-select";
import DatePicker from "react-native-date-picker";
import CheckBox from '@react-native-community/checkbox';
import { createUser } from "../../services/dbservice";
const pdfIcon = require('../../assets/images/pdfIcon.png');
const removeIcon = require('../../assets/images/removeIcon.png');

const Register = ({ navigation }: any) => {
    const [countries, setContries] = useState<{ label: string; value: string; key: string; }[]>([]);
    const [cities, setCities] = useState<{ label: string; value: string; key: string; }[]>([]);
    const [selectedCountry, setSelectedCountry] = useState<string>()
    const [showBirthDatePicker, setShowBirthDatePicker] = useState<boolean>(false)
    const [showGraduationPicker, setShowGraduationPicker] = useState<boolean>(false)
    const [selectedPdf, setSelectedPdf] = useState<string>('')
    const [selectedPhoto, setSelectedPhoto] = useState<string>('')
    useEffect(() => {
        getCountry().then((res) => setContries(res)).catch((err) => console.log(err))
    }, [])
    useEffect(() => {
        if (selectedCountry)
            getCity(selectedCountry).then((res) => setCities(res)).catch((err) => console.log(err))
    }, [selectedCountry])
    return <>
        <SafeAreaView style={styles.mainContainer}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.header}>
                    <Text onPress={() => navigation.navigate("Intro")} style={styles.backPage}>{"<"}</Text>
                    <Text style={styles.titleText}>Kayıt Ol</Text>
                </View>
                <Formik initialValues={{
                    photo: '',
                    fullName: '',
                    country: '',
                    city: '',
                    identityNumber: '',
                    phoneNumber: '',
                    birthDate: '',
                    gender: '',
                    kvkkApproval: false,
                    employmentStatus: '',
                    occupation: '',
                    pdf: '',
                    educationLevel: '',
                    schoolName: '',
                    department: '',
                    graduationYear: '',
                    competences: [
                    ],
                    projects: []
                }}
                    validationSchema={validationSchema}
                    onSubmit={(values) => {
                        const { kvkkApproval, ...result } = values;
                        createUser(result).then(() => navigation.navigate('Login'))
                    }}>
                    {({ handleChange, handleBlur, handleSubmit, values, errors, setFieldValue }) => (
                        <>
                            <View style={styles.formContainer}>
                                <Text style={styles.personalInformationText}>Kişisel Bilgiler</Text>
                                <Text style={styles.photoText}>Profil Fotoğrafı</Text>
                                <TouchableOpacity disabled={!!selectedPhoto} onPress={() => selectImage().then((res) => {
                                    setFieldValue('photo', res as string);
                                    setSelectedPhoto(res as string);
                                })} style={[styles.inputForm, { alignItems: 'center', justifyContent: 'center' }]}>
                                    {
                                        selectedPhoto ?
                                            <View style={{ alignItems: 'center' }}>
                                                <Image style={styles.selectedPhoto} source={{ uri: 'data:image/png;base64, ' + selectedPhoto }} />
                                                <TouchableOpacity style={{ alignSelf: 'center' }} onPress={() => {
                                                    setFieldValue('photo', '');
                                                    setSelectedPhoto('')
                                                }}>
                                                    <Image style={styles.removeIcon} source={removeIcon} />
                                                </TouchableOpacity>
                                            </View>
                                            :
                                            <Text style={{ color: '#fff' }}>Profil Fotoğraf Yükle 📷</Text>
                                    }
                                </TouchableOpacity>
                                {errors.photo && <Text style={styles.errorText}>{errors.photo}</Text>}
                                <TextInput
                                    placeholderTextColor={"#fff"}
                                    style={styles.inputForm}
                                    onChangeText={handleChange('fullName')}
                                    value={values.fullName}
                                    placeholder="Ad Soyad" />
                                {errors.fullName && <Text style={styles.errorText}>{errors.fullName}</Text>}
                                <RNPickerSelect
                                    style={{
                                        inputIOSContainer: styles.inputForm,
                                        inputIOS: {
                                            color: 'white'
                                        },
                                        placeholder: {
                                            color: 'white'
                                        },
                                    }}
                                    doneText="Seç"
                                    textInputProps={{}}
                                    placeholder={{ label: 'Ülke' }}
                                    itemKey={'key'}
                                    items={countries}
                                    onValueChange={selectedValue => {
                                        setSelectedCountry(selectedValue)
                                        setFieldValue('country', selectedValue);
                                    }}
                                />
                                {errors.country && <Text style={styles.errorText}>{errors.country}</Text>}
                                <RNPickerSelect
                                    style={{
                                        inputIOSContainer: styles.inputForm,
                                        inputIOS: {
                                            color: 'white'
                                        },
                                        placeholder: {
                                            color: 'white'
                                        },
                                    }}
                                    doneText="Seç"
                                    textInputProps={{}}
                                    placeholder={{ label: 'İl' }}
                                    itemKey={'key'}
                                    items={cities}
                                    onValueChange={selectedValue => {
                                        setFieldValue('city', selectedValue);
                                    }}
                                />
                                {errors.city && <Text style={styles.errorText}>{errors.city}</Text>}
                                <TextInput
                                    placeholderTextColor={"#fff"}
                                    style={styles.inputForm}
                                    onChangeText={handleChange('identityNumber')}
                                    value={values.identityNumber}
                                    placeholder="Kimlik No" />
                                {errors.identityNumber && <Text style={styles.errorText}>{errors.identityNumber}</Text>}
                                <TextInput
                                    placeholderTextColor={"#fff"}
                                    style={styles.inputForm}
                                    onChangeText={handleChange('phoneNumber')}
                                    value={values.phoneNumber}
                                    placeholder="Telefon" />
                                {errors.phoneNumber && <Text style={styles.errorText}>{errors.phoneNumber}</Text>}
                                <TextInput
                                    value={values.birthDate ? formatDateString(new Date(values.birthDate)) : ''}
                                    placeholderTextColor="#fff"
                                    placeholder="Doğum Tarihi"
                                    style={styles.inputForm}
                                    editable={false}
                                    selectTextOnFocus={false}
                                    onPressIn={() => setShowBirthDatePicker(true)}
                                />
                                <DatePicker locale="tr" open={showBirthDatePicker} onConfirm={selectedDate => {
                                    setFieldValue('birthDate', (selectedDate));
                                    setShowBirthDatePicker(false);
                                }} onCancel={() => setShowBirthDatePicker(false)} mode="date" modal date={new Date()} />
                                {errors.birthDate && <Text style={styles.errorText}>{errors.birthDate}</Text>}
                                <RNPickerSelect
                                    style={{
                                        inputIOSContainer: styles.inputForm,
                                        inputIOS: {
                                            color: 'white'
                                        },
                                        placeholder: {
                                            color: 'white'
                                        },
                                    }}
                                    doneText="Seç"
                                    textInputProps={{}}
                                    placeholder={{ label: 'Cinsiyet' }}
                                    itemKey={'key'}
                                    items={genderOptions}
                                    onValueChange={selectedValue => {
                                        setFieldValue('gender', selectedValue);
                                    }}
                                />
                                {errors.gender && <Text style={styles.errorText}>{errors.gender}</Text>}
                                <Text style={styles.inputTitle}>Çalışma Durumu ve Mesleki Bilgileri</Text>
                                <RNPickerSelect
                                    style={{
                                        inputIOSContainer: styles.inputForm,
                                        inputIOS: {
                                            color: 'white'
                                        },
                                        placeholder: {
                                            color: 'white'
                                        },
                                    }}
                                    doneText="Seç"
                                    textInputProps={{}}
                                    placeholder={{ label: 'Çalışma Durumu' }}
                                    itemKey={'key'}
                                    items={employmentStatusOptions}
                                    onValueChange={selectedValue => {
                                        setFieldValue('employmentStatus', selectedValue);
                                    }}
                                />
                                {errors.employmentStatus && <Text style={styles.errorText}>{errors.employmentStatus}</Text>}

                                <TextInput
                                    placeholderTextColor={"#fff"}
                                    style={styles.inputForm}
                                    onChangeText={handleChange('occupation')}
                                    value={values.occupation}
                                    placeholder="Meslek" />
                                {errors.occupation && <Text style={styles.errorText}>{errors.occupation}</Text>}
                                <Text style={styles.inputTitle}>Eğitim Seviyesi ve Yetkinlik Bilgileri</Text>
                                <RNPickerSelect
                                    style={{
                                        inputIOSContainer: styles.inputForm,
                                        inputIOS: {
                                            color: 'white'
                                        },
                                        placeholder: {
                                            color: 'white'
                                        },
                                    }}
                                    doneText="Seç"
                                    textInputProps={{}}
                                    placeholder={{ label: 'Eğitim Seviyesi' }}
                                    itemKey={'key'}
                                    items={educationLevelOptions}
                                    onValueChange={selectedValue => {
                                        setFieldValue('educationLevel', selectedValue);
                                    }}
                                />
                                {errors.educationLevel && <Text style={styles.errorText}>{errors.educationLevel}</Text>}
                                <TextInput
                                    placeholderTextColor={"#fff"}
                                    style={styles.inputForm}
                                    onChangeText={handleChange('schoolName')}
                                    value={values.schoolName} placeholder="Okul Adı" />
                                {errors.schoolName && <Text style={styles.errorText}>{errors.schoolName}</Text>}

                                <TextInput
                                    placeholderTextColor={"#fff"}
                                    style={styles.inputForm}
                                    onChangeText={handleChange('department')}
                                    value={values.department}
                                    placeholder="Bölüm" />
                                {errors.department && <Text style={styles.errorText}>{errors.department}</Text>}


                                <TextInput
                                    value={values.graduationYear ? formatDateString(new Date(values.graduationYear)) : ''}
                                    placeholderTextColor="#fff"
                                    placeholder="Mezuniyet Tarihi"
                                    style={styles.inputForm}
                                    editable={false}
                                    selectTextOnFocus={false}
                                    onPressIn={() => setShowGraduationPicker(true)}
                                />
                                <DatePicker locale="tr" open={showGraduationPicker} onConfirm={selectedDate => {
                                    setFieldValue('graduationYear', (selectedDate));
                                    setShowGraduationPicker(false);
                                }} onCancel={() => setShowGraduationPicker(false)} mode="date" modal date={new Date()} />
                                {errors.graduationYear && <Text style={styles.errorText}>{errors.graduationYear}</Text>}
                                <FieldArray
                                    name="competences"
                                    render={({ push, remove }) => (
                                        <>
                                            <View style={styles.competencesContainer}>
                                                <Text style={styles.inputTitle}>Yetenekler</Text>
                                                <TouchableOpacity onPress={() => push({ skill: '', proficiency: '' })}>
                                                    <Text style={styles.plus}>+</Text>
                                                </TouchableOpacity>
                                            </View>
                                            <View>
                                                {values.competences.map((competence, index) => (
                                                    <View key={index}>
                                                        <TextInput
                                                            style={styles.inputForm}
                                                            placeholder="Yetenek"
                                                            onChangeText={(value) => {
                                                                setFieldValue(`competences.${index}.skill`, value);
                                                            }}
                                                            value={competence.skill}
                                                        />
                                                        {errors.competences && errors.competences[index] && errors.competences[index].skill && (<Text style={styles.errorText}>{errors.competences[index].skill}</Text>)}

                                                        <TextInput
                                                            style={styles.inputForm}
                                                            placeholder="Yetenek Seviyesi"
                                                            onChangeText={(value) => setFieldValue(`competences.${index}.proficiency`, value)}
                                                            value={competence.proficiency}
                                                        />
                                                        {errors.competences && errors.competences[index] && errors.competences[index].proficiency && (<Text style={styles.errorText}>{errors.competences[index].proficiency}</Text>)}

                                                        <TouchableOpacity style={{ alignSelf: 'flex-end' }} onPress={() => remove(index)}>
                                                            <Image style={styles.removeIcon} source={removeIcon} />
                                                        </TouchableOpacity>
                                                    </View>
                                                ))}
                                            </View>
                                        </>
                                    )}
                                />
                                <Text style={styles.inputTitle}>CV ve Proje Alanı</Text>
                                <TouchableOpacity disabled={!!selectedPdf} onPress={() => selectPdf().then((res) => {
                                    setSelectedPdf(res ? res : '')
                                    setFieldValue('pdf', res)
                                })} style={[styles.inputForm, {
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }]}>
                                    {
                                        selectedPdf ?
                                            <View style={{ alignItems: 'center' }}>
                                                <Image style={[styles.removeIcon, { marginBottom: 10 }]} source={pdfIcon} />
                                                <Text style={{ color: '#fff' }}>{selectedPdf}</Text>
                                            </View>
                                            :
                                            <Text style={{ color: '#fff' }}>CV Yükle 📑</Text>
                                    }
                                </TouchableOpacity>
                                {selectedPdf &&
                                    <TouchableOpacity onPress={() => {
                                        setSelectedPdf('')
                                        setFieldValue('pdf', '')
                                    }} style={{ marginTop: 10, alignSelf: 'center' }}>
                                        <Image style={styles.removeIcon} source={removeIcon} />
                                    </TouchableOpacity>
                                }
                                {errors.pdf && <Text style={styles.errorText}>{errors.pdf}</Text>}

                                <FieldArray
                                    name="projects"
                                    render={({ push, remove }) => (
                                        <>
                                            <View style={styles.competencesContainer}>
                                                <Text style={styles.inputTitle}>Projeler</Text>
                                                <TouchableOpacity onPress={() => push({ projectName: '', projectDetails: [{ detail: '' }] })}>
                                                    <Text style={styles.plus}>+</Text>
                                                </TouchableOpacity>
                                            </View>

                                            {values.projects?.map((project, projectIndex) => (
                                                <View key={projectIndex}>
                                                    <Text style={styles.inputTitle}>Proje Adı</Text>

                                                    <TextInput
                                                        style={styles.inputForm}
                                                        placeholder="Proje Adı"
                                                        value={project.projectName}
                                                        onChangeText={(value) =>
                                                            setFieldValue(`projects.${projectIndex}.projectName`, value)
                                                        }
                                                    />
                                                    {errors.projects && errors.projects[projectIndex] && errors.projects[projectIndex].projectName && (
                                                        <Text style={{ color: '#dddd' }}>{errors.projects[projectIndex].projectName}</Text>
                                                    )}

                                                    <FieldArray
                                                        name={`projects.${projectIndex}.projectDetails`}
                                                        render={({ push: pushDetails, remove: removeDetails }) => (
                                                            <>
                                                                <View style={styles.projectDetailsContainer}>
                                                                    <Text style={styles.inputTitle}>Proje Detayı</Text>
                                                                    <TouchableOpacity onPress={() => pushDetails({ detail: '' })}>
                                                                        <Text style={styles.plus}>+</Text>
                                                                    </TouchableOpacity>
                                                                </View>

                                                                {project.projectDetails.map((detail, detailIndex) => (
                                                                    <View key={detailIndex}>
                                                                        <View style={styles.projectDetailsInner}>
                                                                            <View style={{ width: '80%' }}>
                                                                                <TextInput
                                                                                    style={styles.inputForm}
                                                                                    placeholder="Proje Detayı"
                                                                                    value={detail.detail}
                                                                                    onChangeText={(value) =>
                                                                                        setFieldValue(
                                                                                            `projects.${projectIndex}.projectDetails.${detailIndex}.detail`,
                                                                                            value
                                                                                        )
                                                                                    }
                                                                                />
                                                                                {errors.projects && errors.projects[projectIndex] && errors.projects[projectIndex].projectDetails && errors.projects[projectIndex].projectDetails[detailIndex] && errors.projects[projectIndex].projectDetails[detailIndex].detail && (
                                                                                    <Text style={{ color: '#dddd' }}>
                                                                                        {errors.projects[projectIndex].projectDetails[detailIndex].detail}
                                                                                    </Text>
                                                                                )}
                                                                            </View>
                                                                            <TouchableOpacity onPress={() => removeDetails(detailIndex)}>
                                                                                <Image style={[styles.removeIcon, { marginBottom: 10 }]} source={removeIcon} />
                                                                            </TouchableOpacity>
                                                                        </View>
                                                                    </View>
                                                                ))}

                                                            </>
                                                        )}
                                                    />
                                                    <TouchableOpacity style={{ alignSelf: 'flex-end' }} onPress={() => remove(projectIndex)}>
                                                        <Image style={[styles.removeIcon, { marginBottom: 10 }]} source={removeIcon} />
                                                    </TouchableOpacity>
                                                </View>
                                            ))}
                                        </>
                                    )}
                                />
                                <View style={styles.checkBoxContainer}>
                                    <Text style={{ color: '#fff' }}>Kvkk metnini okudum onaylıyorum.</Text>
                                    <CheckBox onValueChange={(value) => setFieldValue('kvkkApproval', value)} tintColor="white" onCheckColor="white" onTintColor="white" value={values.kvkkApproval} />
                                </View>
                                {errors.kvkkApproval && <Text style={styles.errorText}>{errors.kvkkApproval}</Text>}
                            </View>
                            <TouchableOpacity onPress={handleSubmit} style={styles.signUpButton}>
                                <Text style={styles.signUpText}>Kayıt Ol</Text>
                            </TouchableOpacity>
                        </>
                    )}
                </Formik>
                <TouchableOpacity onPress={() => navigation.navigate('Login')} style={{ marginVertical: 20, alignSelf: 'center' }}>
                    <Text style={styles.signInText}>Bir hesabınız var mı? Giriş Yap</Text>
                </TouchableOpacity>
            </ScrollView>

        </SafeAreaView>
    </>

}

export default Register;