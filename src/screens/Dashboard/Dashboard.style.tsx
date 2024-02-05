import { Dimensions, StyleSheet } from "react-native";
const { width, height } = Dimensions.get('screen')

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#4873FE'
    },
    blueView: {
        height: '25%',
    },
    blueInnerView: {
        paddingHorizontal: width * 0.05
    },
    whiteView: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopEndRadius: 50,
        borderTopStartRadius: 50,
    },
    photo: {
        height: height * 0.1,
        width: height * 0.1,
        borderRadius: 100,
        marginTop: height * 0.02
    },
    nameContainer: {
        marginLeft: width * 0.04
    },
    fullNameText: {
        color: '#fff',
        fontSize: 17,
        fontWeight: '700',
        marginTop: height * 0.004
    },
    titleText:
    {
        color: '#fff',
        fontSize: 20,
        alignSelf: 'center',
        fontWeight: '800'
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    }

})

export default styles;