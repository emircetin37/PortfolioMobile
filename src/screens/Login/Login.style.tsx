import { Dimensions, StyleSheet } from "react-native";
const { width, height } = Dimensions.get('screen')

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#4873FE'
    },
    header: {
        paddingHorizontal: width * 0.07,
        marginTop: height * 0.04
    },
    titleText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#fff'
    },
    backPage: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: height * 0.05
    },
    formContainer: {
        paddingHorizontal: width * 0.07,
        paddingVertical: height * 0.04,
        
    },
    inputForm: {
        backgroundColor: '#577EFE',
        paddingVertical: 30,
        paddingHorizontal: 10,
        color: '#fff',
        borderRadius: 20,
        marginTop: 10
    },
    signInText: {
        fontSize: 17,
        color: '#4873FE',
        fontWeight: '700'
    },
    signInButton: {
        backgroundColor: '#fff',
        height: 120,
        width: 180,
        borderTopRightRadius: 200,
        borderBottomRightRadius: 200,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:height * 0.1
    },
})

export default styles;