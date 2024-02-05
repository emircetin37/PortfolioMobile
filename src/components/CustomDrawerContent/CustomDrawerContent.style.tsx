import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    drawerItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
    iconContainer: {
        marginRight: 16,
    },
    itemText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333', // Adjust color as needed
    },
    logOutText: {
        fontSize: 15,
        color: 'red',
    },
    logOutButton: {
        marginTop: 50,
        alignSelf: 'center'
    }
});

export default styles;