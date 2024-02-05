import { Image, Text, View } from "react-native";
import UserDto from "../../../dtos/UserDto";
import { GraduationCap, School, School2 } from "lucide-react-native";
const education = require('../../../assets/images/education.jpg')
import styles from './EducationInformation.style';


const EducationInformation: React.FC<{ user?: UserDto }> = ({ user }) => {
    return (
        <>
            <View style={styles.container}>
                <Image style={styles.image} source={education} />
                <Text style={styles.title}>Eğitim Bilgileri</Text>
            </View>
            <View style={styles.educationInfoContainer}>
                <School color={"#4873FE"} size={20}></School>
                <View style={styles.textContainer}>
                    <Text style={styles.grayText}>Okul ve Bölüm</Text>
                    <Text style={[styles.schoolText, styles.grayText]}>{user?.schoolName}</Text>
                    <Text style={[styles.schoolText, styles.grayText]}>{user?.department}</Text>
                </View>
            </View>
            <View style={styles.educationInfoContainer}>
                <School2 color={"#4873FE"} size={20}></School2>
                <View style={styles.textContainer}>
                    <Text style={styles.grayText}>Eğitim Seviyesi</Text>
                    <Text style={[styles.schoolText, styles.grayText]}>{user?.educationLevel}</Text>
                </View>
            </View>
            <View style={styles.educationInfoContainer}>
                <GraduationCap color={"#4873FE"} size={20}></GraduationCap>
                <View style={styles.textContainer}>
                    <Text style={styles.grayText}>Mezuniyet Yılı</Text>
                    <Text style={[styles.graduationYearText, styles.grayText]}>
                        {new Date(user?.graduationYear as string).getFullYear()}
                    </Text>
                </View>
            </View>
        </>
    );
};

export default EducationInformation;



