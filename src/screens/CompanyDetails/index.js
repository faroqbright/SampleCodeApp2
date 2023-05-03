import React, { useEffect, useState } from "react";
import { Alert, Dimensions, ScrollView, Text, View, Image, SafeAreaView } from "react-native";
import Toast from 'react-native-simple-toast';

import { applyJobAPI } from "../../api/methods/auth";
import Images from "../../assets/Images";
import CustomButton from "../../components/customButton";
import JobDetailsHeader from "../../components/JobDetailsHeader";
import { Colors } from "../../utils/Colors";
import { Style } from "./Style";
import Loader from '../../components/Loader'
import { TouchableOpacity } from "react-native-gesture-handler";
import VideoModal from '../../components/VideoModal';


export default CompanyDetails = ({ navigation, route }) => {
    const params = route?.params?.itemDetails
    // const screenParams = route?.scrParams?.scscreenName
    const [loading, setLoading] = useState(false)
    const [modalVisible, setModalVisible] = useState(false);
    const [onEditPress, setOnEditPress] = useState(false)

    return (
        <SafeAreaView style={Style.mainContainer}>
            <JobDetailsHeader
                detailParams={params}
                label={"Job Details"}
                headerMainContainer={Style.headerMainContainer}
                onBackButtonPress={() => navigation.goBack()}
                settingIconPress={() => {''}}
                backIcon={Images.whiteBackIcon}
                settingIconSource={Images.threeDotMenu}
                
            />
            <ScrollView style={{ height: '100%', }}>
                <View style={Style.secondContainer}>
                    <Text style={Style.DescriptionHeading}>Job Description</Text>
                    <Text style={Style.description}>
                        {params?.description}
                    </Text>
                    <Text style={Style.VideoHeading}> Video</Text>
                    <View style={Style.videoContainer}>
                        <TouchableOpacity
                            onPress={() => setModalVisible(true)}
                        >
                            <View style={{
                                width: 100,
                                height: 80,
                                backgroundColor: Colors.LightGray,
                                borderRadius: 10
                            }}><Image
                                    source={params?.user?.video_thumbnail?params?.user?.video_thumbnail:Images.videoPlaceHolder}
                                    style={{
                                        width: 100,
                                        height: 80,
                                    }}
                                />
                            </View>
                        </TouchableOpacity>
                        <Text style={Style.videoDescription}> {params?.company_description} </Text>
                    </View>
                    <Text style={Style.QualificationsHeading}>Qualifications</Text>
                    <Text style={Style.description}>
                        {params?.qualifications}
                    </Text>
                    <Text style={Style.SkillsRequiredtionHeading}>Skills Required</Text>
                    <Text style={Style.description}>
                        {params?.skills}
                    </Text>
                    <CustomButton
                        // onPress={()=>navigation.navigate('ConformationScreen')}
                        onPress={() => navigation.navigate('ConformationScreen',
                            {
                                jobId: params.id,
                                companyDetails:params
                            })}
                        label={"Apply Now"}
                        style={Style.applyButton}
                        textStyle={Style.applyButtonText}
                    />

                </View>
                <Loader loading={loading} isShowIndicator={true} />
            </ScrollView>
            {params?.user?.introduction_video.length>0?<VideoModal
                source={{ uri: params?.user?.introduction_video }}
                isVisible={modalVisible}
                onClose={() => setModalVisible(false)}
            />:Toast.show("Video not available!")}
        </SafeAreaView>
    )
}