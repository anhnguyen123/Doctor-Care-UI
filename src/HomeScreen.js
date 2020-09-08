import { Image, StyleSheet, Text, View } from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import React from 'react';
const Rating = ({ ratting }) => {
    return (
        <View style={styles.ratting}>
            {
                Array(5).fill().map((_, i) => {
                    if (ratting > i) {
                        return <AntDesign key={i} name='star' color="#fa8d00" style={{ marginRight: 5 }} />
                    }
                    return <AntDesign key={i}  name='staro' style={{ marginRight: 5 }} />
                })
            }

        </View>
    )
}
const Face = ({ icon, title, color, full }) => {
    return (
        <View style={styles.faceGroup}>
            {full ? (
                <View style={{ backgroundColor: color, borderRadius: 40 }}>
                    <Icon name={icon} color={color} size={36} color={'#fff'} />
                </View>
            ) : (
                    <Icon name={icon} color={color} size={36} color={color} />
                )}

            <Text style={[styles.faceText, { color }]}>{title}</Text>
        </View>
    );
};
const CardHome = ({ title, info }) => {
    return (
        <View style={styles.cardContainer}>
            <View style={styles.cardHeaderContainer}>
                <Text style={styles.cardHeading}>{title}</Text>
                <Text style={styles.cardMore}>See All</Text>
            </View>

            <View style={styles.cardBody}>
                <View style={styles.cardBodyTop}>
                    <Image
                        style={styles.cardAvatar}
                        source={{
                            uri:
                                'https://images.theconversation.com/files/304957/original/file-20191203-66986-im7o5.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop',
                        }}
                    />
                    <View style={styles.cardLeftSide}>

                        <Text style={styles.tag}>{info.tag}</Text>
                        <Text style={styles.cardName}>{info.name}</Text>
                        <Text style={styles.cardTime}>{info.name}</Text>
                        <Text style={styles.cardAddress}>{info.address}</Text>
                        <Text style={styles.cardAddress}>{info.detail}</Text>
                        
                            {info.ratting && <Rating ratting={2} />}
                        
                        <View style={styles.iconMore}>
                            <Icon name="angle-right" color="gray" />
                        </View>
                        {info.islike && (<View style={styles.iconLike}>
                            <Icon name="heart" color="#e80080" size={22} />
                        </View>)
                        }
                    </View>
                </View>
                <View style={styles.margin} />
                <View style={styles.cardBodyBottom}>
                    <View style={styles.carrdGroupIcon}>
                        <AntDesign name="checkcircleo" size={32} />
                        <Text style={styles.cardBottomTitle}>Check-in</Text>
                    </View>
                    <View style={styles.carrdGroupIcon}>
                        <AntDesign name="closecircleo" size={32} />
                        <Text style={styles.cardBottomTitle}>Cancle</Text>
                    </View>
                    <View style={styles.carrdGroupIcon}>
                        <AntDesign name="calendar" size={32} />
                        <Text style={styles.cardBottomTitle}>Calendar</Text>
                    </View>
                    <View style={styles.carrdGroupIcon}>
                        <MaterialIcons name="explore" size={32} />
                        <Text style={styles.cardBottomTitle}>Directions</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};
export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.heading}>Hi Carly</Text>
                <Text style={styles.desc}>How are you fealling today ?</Text>
            </View>
            <View style={styles.faceContainer}>
                <Face icon="laughing" title="Great" color="#E23F9C" />
                <Face icon="slightly-smile" title="Good" color="#C55696" />
                <Face icon="neutral" title="Okey" color="#a5008c" full />
                <Face icon="frowning" title="Bad" color="#827791" />
                <Face icon="expressionless" title="Awful" />
            </View>
            <View>
                <CardHome
                    title="Your next Appointment"
                    info={{
                        name: 'Dr T Pay Dhar',
                        time: 'Sunday, May 15th at 8:00 PM',
                        address: '570 Kemmer Shores',
                        detail: 'San Francisco, CA 90923',
                    }}
                />
                <CardHome
                    title="Specialist in your area"
                    info={{
                        name: 'Dr Ayon Das',
                        time: 'Popular Pharma Limited',
                        address: 'Dermatologists',
                        detail: 'San Francisco, CA | 5 min',
                        islike: true,
                        ratting: 4,
                        tag: 'Wellness',
                    }}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    ratting: {
        flexDirection: 'row',
        marginTop: 5
    },
    tag: {
        color: '#b066a4'
    },
    cardContainer: {
        padding: 15,
    },
    margin: {
        height: 1,
        backgroundColor: '#f0f1f2',
        width: '100%',
        marginVertical: 10,
    },
    cardBodyBottom: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    cardBottomTitle: {
        fontSize: 14,
        marginTop: 5,
    },
    carrdGroupIcon: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconMore: {
        position: 'absolute',
        bottom: 0,
        right: 0,
    },
    iconLike: {
        position: 'absolute',
        top: 0,
        right: 0
    },
    cardBody: {
        padding: 15,
        backgroundColor: '#fff',
        marginTop: 15,
        // marginHorizontal: 15,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
    },
    cardBodyTop: {
        flexDirection: 'row',
    },
    cardLeftSide: {
        paddingHorizontal: 10,
        flex: 1,
    },
    cardName: {
        color: '#222',
        fontSize: 18,
        fontWeight: 'bold',
    },
    cardTime: {
        color: '#222',
        fontSize: 16,
        fontWeight: '500',
        marginTop: 5,
    },
    cardAddress: {
        color: 'gray',
        fontSize: 15,
        fontWeight: '500',
        marginTop: 5,
    },
    cardAvatar: {
        height: 60,
        width: 60,
        backgroundColor: 'gray',
        borderRadius: 60, //chỗ này có thể hiểu là 100% vì hình vuông này có chiều rộng, cao là 60, mà border radius = 60 nên = 100%, mà chỉ cần 50% đã tròn rồi, tương ứng = 30
    },
    cardHeaderContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    cardHeading: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    cardMore: {
        fontWeight: 'bold',
        color: '#7b6c95',
    },
    faceGroup: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    faceContainer: {
        backgroundColor: '#fff',
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 20,
        marginHorizontal: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        marginTop: 20,
    },
    faceText: {
        fontSize: 16,
        marginTop: 6,
    },
    container: {
        flex: 1,
    },
    heading: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#fff',
    },
    headerContainer: {
        padding: 20,
        paddingHorizontal: 30,
        marginTop: 52,
    },
    desc: {
        fontSize: 20,
        fontWeight: '400',
        color: '#fff',
        marginTop: 5,
    },
});
