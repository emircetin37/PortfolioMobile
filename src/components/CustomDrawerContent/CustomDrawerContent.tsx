import { DrawerContentScrollView } from "@react-navigation/drawer";
import { LayoutDashboard, Network } from "lucide-react-native";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import styles from "./CustomDrawerContent.style";
import { logout } from "../../services/dbservice";
const CustomDrawerContent = (props) => {
    const { navigation } = props;
    return (
        <DrawerContentScrollView {...props}>
            <SafeAreaView>
                <TouchableOpacity style={styles.drawerItem} onPress={() => navigation.navigate('Dashboard')}>
                    <View style={styles.iconContainer}>
                        <LayoutDashboard size={24} />
                    </View>
                    <Text style={styles.itemText}>Dashboard</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.drawerItem} onPress={() => navigation.navigate('FakeApi')}>
                    <View style={styles.iconContainer}>
                        <Network size={24} />
                    </View>
                    <Text style={styles.itemText}>Fake Api</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.logOutButton} onPress={() => logout(navigation)}>
                    <Text style={styles.logOutText}>Çıkış Yap</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </DrawerContentScrollView>
    );
};

export default CustomDrawerContent;