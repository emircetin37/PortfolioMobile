import AsyncStorage from "@react-native-async-storage/async-storage";
import User from "../dtos/UserDto";
import { Alert } from "react-native";

export const createUser = async (userData: User) => {
    try {
        const jsonUserData = JSON.stringify(userData);
        await AsyncStorage.setItem('userData', jsonUserData);
    } catch (error) {
        Alert.alert(error as string);
    }
}

export const getSessionUser = async () => {
    try {
        const jsonUserData = await AsyncStorage.getItem('sessionUser');
        if (jsonUserData) {
            const userData: User = await JSON.parse(jsonUserData);
            return userData;
        }
    } catch (error) {
        // Alert.alert(error as string);

    }
}

export const login = async (id: string) => {
    try {
        const jsonUserData = await AsyncStorage.getItem('userData')
        if (!jsonUserData) {
            throw new Error("Kullanıcı bulunamadı.");
        }
        const userData: User = await JSON.parse(jsonUserData);
        if (userData.identityNumber !== id) {
            throw new Error("Kayıtlı kullanıcının TC Kimlik numarası eşleşmedi.");
        }
        await addSessionUser(userData);
        return true;
    } catch (error) {
        Alert.alert(error.message as string);
    }
}

const addSessionUser = async (userData: User) => {
    try {
        const jsonUserData = JSON.stringify(userData);
        await AsyncStorage.setItem('sessionUser', jsonUserData);
    } catch (error) {
        Alert.alert(error as string);
    }
}

export const logout = async (navigation: any) => {
    try {
        await AsyncStorage.removeItem('sessionUser')
        navigation.navigate('Intro')
    } catch (error) {
        Alert.alert(error as string);
    }
}