import React, { useEffect, useState } from 'react';
import { StyleSheet, ScrollView, SafeAreaView, View, Image, Text } from 'react-native';
import { Table, Row } from 'react-native-table-component';
import { Chart } from './Chart';
import styles from './FakeApi.style';
const UsersTable = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetchUsers();
    }, []);
    const fetchUsers = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await response.json();
            setUsers(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    const tableHead = ['ID', 'Ad', 'Kullanıcı Adı', 'Mail'];
    return (
        <SafeAreaView style={styles.container}>
            <SafeAreaView style={styles.blueView}>
                <Text style={styles.titleText}>Tablo ve Grafik</Text>
            </SafeAreaView>
            <View style={styles.whiteView}>
                <ScrollView>
                    <Table borderStyle={styles.tableBorder}>
                        <Row data={tableHead} style={styles.head} textStyle={styles.headText} />
                        {users.map(user => (
                            <Row
                                key={user.id}
                                data={[user.id, user.name, user.username, user.email]}
                                style={styles.row}
                                textStyle={styles.rowText}
                            />
                        ))}
                    </Table>
                    <Chart />
                </ScrollView>
            </View>
        </SafeAreaView>
    );
};



export default UsersTable;
