import { Calendar, Key, LocateIcon, Phone, User } from "lucide-react-native"
import UserDto from "../../../dtos/UserDto"
import { Image, Text, View } from "react-native"
const personalInformation = require('../../../assets/images/personalInformation.jpg')
import styles from './PersonalInformation.styles';

const PersonalInformation: React.FC<{ user?: UserDto }> = ({ user }) => {
    return (
        <View>
            <View style={styles.container}>
                <Image style={styles.image} source={personalInformation} />
                <Text style={styles.title}>Kişisel Bilgiler</Text>
            </View>
            <View style={styles.infoContainer}>
                <Key color={"#4873FE"} size={20}></Key>
                <View style={styles.textContainer}>
                    <Text style={styles.grayText}>TC Kimlik Numarası</Text>
                    <Text style={[styles.marginTop4]}>{user?.identityNumber}</Text>
                </View>
            </View>
            <View style={styles.infoContainer}>
                <Calendar color={"#4873FE"} size={20}></Calendar>
                <View style={styles.textContainer}>
                    <Text style={styles.grayText}>Doğum Tarihi</Text>
                    <Text style={[styles.marginTop4]}>{user?.birthDate}</Text>
                </View>
            </View>
            <View style={styles.infoContainer}>
                <User color={"#4873FE"} size={20}></User>
                <View style={styles.textContainer}>
                    <Text style={styles.grayText}>Cinsiyet</Text>
                    <Text style={[styles.marginTop4]}>{user?.gender}</Text>
                </View>
            </View>
            <View style={styles.infoContainer}>
                <Phone color={"#4873FE"} size={20}></Phone>
                <View style={styles.textContainer}>
                    <Text style={styles.grayText}>Telefon Numarası</Text>
                    <Text style={[styles.marginTop4]}>{user?.phoneNumber}</Text>
                </View>
            </View>
            <View style={styles.infoContainer}>
                <LocateIcon color={"#4873FE"} size={20}></LocateIcon>
                <View style={styles.textContainer}>
                    <Text style={styles.grayText}>Şehir, Ülke</Text>
                    <Text style={[styles.marginTop4]}>{user?.city + ' ' + user?.country}</Text>
                </View>
            </View>
        </View>
    );
};

export default PersonalInformation;