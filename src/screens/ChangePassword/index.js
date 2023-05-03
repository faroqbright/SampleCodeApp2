import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    SafeAreaView,
} from "react-native";
import { KeyboardAwareScrollView } from '@codler/react-native-keyboard-aware-scroll-view'

import { Colors } from "../../utils/Colors";
import Header from "../../components/Header";
import Images from "../../assets/Images";
import Toast from 'react-native-simple-toast';

import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/customButton";
import Loader from "../../components/Loader";
import { changePassowrd } from "../../api/methods/auth";

export default ChangePassword = ({ navigation }) => {

    const [hidePassword, setHidePassword] = useState(true)
    const [password, setPassword] = useState('')

    const [hideNewPassword, setHideNewPassword] = useState(true)
    const [newPassword, setNewPassword] = useState('')

    const [hideConfirmPassword, setHideConfrimPassword] = useState(true)
    const [confirmPassword, setConfirmPassword] = useState('')

    const [loading, setLoading] = useState(false)

    const changePasswordApi = async () => {
        try {
            setLoading(true)
            const formData = new FormData()
            formData.append('old_password', password)
            formData.append('password', newPassword)
            formData.append('password_confirmation', confirmPassword)
            const response = await changePassowrd(formData)
            setLoading(false)
            console.log('response', response.status)
            console.log('response', response.data)
            if(response.status==200)
            {
                Toast.show(response.data.message)
                navigation.goBack()
            }
        } catch (error) {
            console.log(error)
            Toast.show(error.data.message)
            setLoading(false)
        }
    }

    return (
        <SafeAreaView style={styles.mainContainer}>
            <Header
                // headerContainer={styles.headerContainer}
                label={"Change Password"}
                // headerTextStyle={{
                //     width: '50%',
                //     height: '100%',
                //     textAlign: 'center',
                //     marginTop: 30
                // }}
                // source={Images.backIcon}
                // backButtonStyle={{
                //     // backgroundColor:'blue',
                //     height: '100%',
                //     alignSelef: 'center',
                //     alignItems: 'center',
                //     justifyContent: 'center'
                // }}
                // iconImageStyle={{
                //     //    marginTop:5
                //     marginRight: 20

                // }}
                onPress={() => navigation.goBack()}
            />
            <KeyboardAwareScrollView
                style={{marginTop:10}}
            >
                <Text style={styles.heading}>Change your password</Text>
                <Text style={styles.subHeading}>Enter the password linked with your account and we will send on resend link. </Text>

                <View style={styles.secondContainer}>
                    <Text style={styles.inputHeading}>Old Password</Text>
                    <CustomInput
                        secureTextEntry={hidePassword}
                        placeholder={"Enter password".trim()}
                        value={password}
                        onChangeText={text => setPassword(text)}
                        innerStyle={{ width: '80%' }}
                        maxLength={20}
                        icon={
                            hidePassword ? Images.invisibleIcon : Images.eyeIcon
                        }
                        onPress={() => {
                            console.log("hello");
                            setHidePassword(!hidePassword)
                        }}
                        iconStyle={{ marginRight: 20, height: 20, width: 20, marginBottom: 20 }}
                        mainStyle={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '90%', marginRight: 5 }}
                    />

                    <Text style={styles.inputHeading}>New Password</Text>

                    <CustomInput
                        secureTextEntry={hideNewPassword}
                        placeholder={"Enter password".trim()}
                        value={newPassword}
                        onChangeText={text => setNewPassword(text)}
                        innerStyle={{ width: '80%' }}
                        maxLength={20}
                        icon={
                            hideNewPassword ? Images.invisibleIcon : Images.eyeIcon
                        }
                        onPress={() => {
                            console.log("hello");
                            setHideNewPassword(!hideNewPassword)
                        }}
                        iconStyle={{ marginRight: 20, height: 20, width: 20, marginBottom: 20 }}
                        mainStyle={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '90%', marginRight: 10 }}
                    />
                    <Text style={styles.inputHeading}>Confirm Passowrd</Text>
                    <CustomInput
                        secureTextEntry={hideConfirmPassword}
                        placeholder={"Enter password".trim()}
                        value={confirmPassword}
                        onChangeText={text => setConfirmPassword(text)}
                        innerStyle={{ width: '80%' }}
                        maxLength={20}
                        icon={
                            hideConfirmPassword ? Images.invisibleIcon : Images.eyeIcon
                        }
                        onPress={() => {
                            console.log("hello");
                            setHideConfrimPassword(!hideConfirmPassword)
                        }}
                        iconStyle={{ marginRight: 20, height: 20, width: 20, marginBottom: 20 }}
                        mainStyle={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '90%', marginRight: 5, marginBottom: 20 }}
                    />
                </View>
                <CustomButton
                    style={{
                        backgroundColor: Colors.LightBlue,
                        alignItems: 'center',
                        marginTop: 100
                    }}
                    onPress={() => changePasswordApi()}
                    label={"Confirm"}
                    textStyle={{
                        color: Colors.White,
                        fontSize: 15,
                        fontFamily: 'Roboto-Bold'
                    }}
                />
                <Loader
                    loading={loading} isShowIndicator={true}
                />
            </KeyboardAwareScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1
    },
    headerContainer: {
        width: '100%',
        height: 60
    },
    heading: {
        marginLeft: 20,
        marginTop: 10,
        fontSize: 20,
        fontFamily: 'Roboto-Bold'
    },
    subHeading: {
        marginLeft: 20,
        marginTop: 10,
        color: Colors.LightGray,
        fontSize: 15,
        marginRight: 10
    },
    secondContainer: {
        marginTop: 30,
        width: '100%',
        height: 'auto',
        // paddingLeft: 20,
        // backgroundColor: 'red'
    },
    inputHeading: {
        fontSize: 18,
        fontFamily: 'Roboto-Regular',
        marginTop: 10,
        marginLeft: 20,
        marginBottom: 5
    }
})