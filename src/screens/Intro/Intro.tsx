import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
const introImage = require('../../assets/images/introimage.jpg');
import styles from "./Intro.style";
import { useEffect } from "react";
import { getSessionUser } from "../../services/dbservice";
const Intro = ({ navigation }: any) => {
    useEffect(() => {
        getSessionUser().then((res) => {
            if (res)
                navigation.reset({
                    index: 0,
                    routes: [{ name: 'DrawerTabs' }],
                });;
        })
    }, [])
    return (
        <SafeAreaView style={styles.mainContainer}>
            <ScrollView>
                <View>
                    <Image style={styles.image} source={introImage} />
                </View>
                <View style={styles.textView}>
                    <View>
                        <Text style={styles.bigText}>Merhaba!</Text>
                        <Text style={styles.smallText}>Kişisel portfolyonu hazırlamak için hemen başla.</Text>
                    </View>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('Register')} style={styles.signUpButton}>
                    <Text style={styles.signUpText}>Kayıt Ol</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.signInButton}>
                    <Text style={styles.signInText}>Giriş Yap</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Intro;