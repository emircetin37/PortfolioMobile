import { Dimensions, StyleSheet } from "react-native"
const { width, height } = Dimensions.get('screen')

const styles =  StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#fff'
    },
    image: {
        height: 250,
        width,
        marginTop: height * 0.05
    },
    textView: {
        marginTop: height * 0.05,
        alignItems: 'center'
    },
    bigText: {
        fontSize: 40,
        fontWeight: 'bold'
    },
    smallText: {
        fontSize: 14,
        marginTop: height * 0.01,
        color: '#656565'
    },
    signUpButton: {
        backgroundColor: '#4873FE',
        height: 120,
        width: 180,
        marginTop: height * 0.07,
        borderTopRightRadius: 200,
        borderBottomRightRadius: 200,
        alignItems: 'center',
        justifyContent: 'center'
    },
    signUpText: {
        fontSize: 17,
        color: '#fff',
        fontWeight: '700'
    },
    signInText: {
        fontSize: 17,
        color: '#656565',
        fontWeight: '700'
    },
    signInButton: {
        marginTop: height * 0.07,
        marginRight: width * 0.1,
        alignSelf: 'flex-end'
    }
})

export default styles;