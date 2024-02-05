import { Dimensions, StyleSheet } from "react-native";
const { width, height } = Dimensions.get('screen')

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#4873FE',
    },
    header: {
        paddingHorizontal: width * 0.07,
        marginTop: height * 0.04
    },
    formContainer: {
        paddingHorizontal: width * 0.07,
        paddingVertical: height * 0.04
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
    inputForm: {
        backgroundColor: '#577EFE',
        paddingVertical: 30,
        paddingHorizontal: 10,
        color: '#fff',
        borderRadius: 20,
        marginTop: 10
    },
    signUpText: {
        fontSize: 17,
        color: '#4873FE',
        fontWeight: '700'
    },
    signUpButton: {
        backgroundColor: '#fff',
        height: 120,
        width: 180,
        borderTopRightRadius: 200,
        borderBottomRightRadius: 200,
        alignItems: 'center',
        justifyContent: 'center'
    },
    selectedPhoto: {
        height: 200,
        width: 200,
        marginBottom: 10,
        borderRadius: 200
    },
    removeIcon: {
        height: 30,
        width: 30
    },
    errorText: {
        marginBottom: 10,
        color: '#dddd'
    },
    checkBoxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 10
    },
    signInText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 15
    },
    personalInformationText: {
        fontSize: 18, color: '#fff', marginVertical: 10
    },
    photoText: {
        fontSize: 13, color: '#fff', marginVertical: 5
    },
    inputTitle: {
        fontSize: 18, color: '#fff', marginVertical: 10
    },
    competencesContainer: {
        flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'
    },
    plus: {
        fontSize: 30, color: '#fff', fontWeight: 'bold'
    },
    projectDetailsContainer: {
        flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '90%', alignSelf: 'center'
    },
    projectDetailsInner: {
        flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'
    }
})

export default styles;