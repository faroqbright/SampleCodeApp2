import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    SafeAreaView
} from "react-native";

import { Colors } from "../../utils/Colors";
import Header from "../../components/Header";
import Images from "../../assets/Images";

export default AccountSettings = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.mainContainer}>
            <Header
                // headerContainer={styles.headerContainer}
                label={"Account Settings"}
                onPress={() => navigation.goBack()}
            />
            <TouchableOpacity
                onPress={() => navigation.navigate('ChangePassword')}
            >
                <View style={styles.listView}>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',

                            alignItems: 'center'
                        }}
                    >
                        <Text style={{
                            marginLeft: 30,
                            fontFamily: 'Roboto-Regular',
                            fontSize: 15,
                            color: Colors.DarkBlue
                        }}>Change Password</Text>
                    </View>
                    <Image
                        style={{
                            alignSelf: 'center',
                            marginRight: 20,
                            width: 20,
                            height: 20,
                            resizeMode: 'contain',
                            alignSelf: "center",
                            height: '40%',
                            width: '10%',
                            tintColor: Colors.GreenBlue

                        }
                        }
                        source={Images.forwardArrowIcon}
                    />
                </View>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1
    },
    headerContainer: {
        width: '100%',
        height: 60,
        backgroundColor: 'pink',
        justifyContent: 'center',
        alignItems: "center"
    },
    listView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        // backgroundColor:'red',
        width: '100%',
        height: 60,
        marginTop: 5,
    },
})