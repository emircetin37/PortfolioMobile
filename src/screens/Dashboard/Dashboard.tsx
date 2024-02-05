import React, { useEffect, useState } from "react";
import { Image, SafeAreaView, ScrollView, StatusBar, Text, View } from "react-native";
import styles from "./Dashboard.style";
import UserDto from "../../dtos/UserDto";
import { getSessionUser } from "../../services/dbservice";
import { PersonalInformation } from "./PersonalInformation";
import { EducationInformation } from "./EducationInformation";
import { Competencies } from "./Competencies";
import { Projects } from "./Projects";

const Dashboard = () => {
    const [user, setUser] = useState<UserDto>()
    useEffect(() => {
        getSessionUser().then((res) => {
            if (res?.identityNumber)
                setUser(res)
        })
    }, [])
    return (
        <View style={styles.mainContainer}>
            <SafeAreaView style={styles.blueView}>
                <View style={styles.blueInnerView}>
                    <Text style={styles.titleText}>Dashboard</Text>
                    <View style={styles.headerContainer}>
                        <Image style={styles.photo} source={{ uri: 'data:image/png;base64, ' + user?.photo }} />
                        <View style={styles.nameContainer}>
                            <Text style={{ color: '#dddd' }}>Ad Soyad</Text>
                            <Text style={styles.fullNameText}>{user?.fullName}</Text>
                            <Text style={{ color: '#fff' }}>{user?.employmentStatus}</Text>
                            <Text style={{ color: '#fff' }}>{user?.occupation}</Text>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
            <View style={styles.whiteView}>
                <ScrollView style={{ marginTop: 10 }} showsVerticalScrollIndicator={false}>
                    <View style={{ marginHorizontal: 20, marginBottom: 50 }}>
                        <PersonalInformation user={user} />
                        <EducationInformation user={user} />
                        <Competencies user={user} />
                        <Projects user={user} />
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}
export default Dashboard;