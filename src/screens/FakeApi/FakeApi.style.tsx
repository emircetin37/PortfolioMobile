import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    blueView: {
        height: '5%',
    },
    whiteView: {
        flex: 1,
        backgroundColor: '#fff',
    },
    container: {
        flex: 1,
        backgroundColor: '#4873FE'
    },
    titleText:
    {
        color: '#fff',
        fontSize: 20,
        alignSelf: 'center',
        fontWeight: '800'
    },
    tableBorder: { borderWidth: 1, borderColor: '#c8e1ff' },
    head: { height: 40, backgroundColor: '#4873FE' },
    headText: { color: '#fff', margin: 6, textAlign: 'center', fontWeight: 'bold' },
    row: { height: 40, backgroundColor: '#f1f8ff' },
    rowText: { margin: 6, textAlign: 'center' },
});

export default styles;