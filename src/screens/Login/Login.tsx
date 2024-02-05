import { SafeAreaView } from "react-native-safe-area-context";
import * as Yup from 'yup';
import styles from "./Login.style";
import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Formik } from "formik";
import { login } from "../../services/dbservice";
import AsyncStorage from "@react-native-async-storage/async-storage";
const Login = ({ navigation }: any) => {
    return <>
        <SafeAreaView style={styles.mainContainer}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.header}>
                    <Text onPress={() => navigation.navigate("Intro")} style={styles.backPage}>{"<"}</Text>
                    <Text style={styles.titleText}>Giriş Yap</Text>
                </View>
                <Formik
                    initialValues={{ identityNumber: '' }}
                    validationSchema={Yup.object().shape({
                        identityNumber: Yup.string().required('Kimlik numarası zorunlu'),
                    })}
                    onSubmit={(values) => {
                        // AsyncStorage.removeItem('userData')
                        login(values.identityNumber).then((succcess) => {
                            if (succcess)
                                navigation.reset({
                                    index: 0,
                                    routes: [{ name: 'DrawerTabs' }],
                                });;
                        }).catch((err) => console.log(err))
                    }}>
                    {({ handleChange, handleBlur, handleSubmit, values, errors, setFieldValue }) => (
                        <>
                            <View style={styles.formContainer}>
                                <Text style={{ fontSize: 13, color: '#fff', marginVertical: 5 }}>TC Kimlik Numarası</Text>
                                <TextInput
                                    placeholderTextColor={"#fff"}
                                    style={styles.inputForm}
                                    onChangeText={handleChange('identityNumber')}
                                    value={values.identityNumber}
                                    placeholder="Tc No" />
                                {errors.identityNumber && <Text style={{ marginBottom: 10, color: '#dddd' }}>{errors.identityNumber}</Text>}
                            </View>
                            <TouchableOpacity onPress={handleSubmit} style={styles.signInButton}>
                                <Text style={styles.signInText}>Giriş Yap</Text>
                            </TouchableOpacity>
                        </>
                    )}
                </Formik>
            </ScrollView>
        </SafeAreaView>
    </>
}


export default Login;