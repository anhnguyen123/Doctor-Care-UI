import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Fontisto'
export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.heading}>Hi Carly</Text>
                <Text style={styles.desc}>How are you fealling today ?</Text>
            </View>
            <View style={styles.faceContainer}>
                <View style={styles.faceGroup}>
                    <Icon name='laughing' size={36} color={'#E23F9C'} />
                    <Text style={styles.faceText}>Greet</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    faceGroup: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    faceContainer: {
        backgroundColor: '#fff',
        padding: 20
    },
    faceText: {
        fontSize: 16,
        marginTop: 6
    },
    container: {
        flex: 1
    },
    heading: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#fff'
    },
    headerContainer: {
        padding: 20,
        paddingHorizontal: 30,
        marginTop: 52
    },
    desc: {
        fontSize: 20,
        fontWeight: "400",
        color: '#fff',
        marginTop: 5
    }

})
