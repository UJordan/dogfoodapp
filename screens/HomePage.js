import React, { useState } from 'react';
import { Text, View, ScrollView } from 'react-native';
import useAccessibilityHelper from './AccessibilityHelper';
import { Card } from 'react-native-elements';
import Carousel from 'react-native-snap-carousel';
import BannerSlider from '../Component/BannerSlider';
import { windowWidth } from '../utils/Dimensions';
import { sliderData } from '../shared/data';
import CustomButton from '../Component/button.js';


const HomePage = ({ navigation }) => {
    const [isFocused, setIsFocused] = useState(false);

    useAccessibilityHelper(setIsFocused);

    const renderBanner = ({ item, index }) => {
        return (
            <BannerSlider data={item} />
        );
    };

    const handlePressDonor = () => {
        navigation.navigate('Donor Page', { screen: 'DonorPage' })
    };

    const handlePressRecipient = () => {
        navigation.navigate('Recipient Page', { screen: 'RecipientPage' })
    };

    const handlePressWarehouse = () => {
        navigation.navigate('Warehouse Page', { screen: 'WarehousePage' })
    };

    return (
        <>
            <ScrollView>
                <Card containerStyle={{ padding: 0 }}>
                    <View style={{alignItems: 'center'}}>
                        <Text style={{ margin: 15 }}>
                            PORTLAND ANIMAL FOODBANK
                        </Text>
                    </View>
                </Card>
                <Carousel 
                    ref={(c) => { this._carousel = c; }}
                    data={sliderData}
                    renderItem={renderBanner}
                    sliderWidth={windowWidth}
                    itemWidth={300}
                    loop={true}
                />
                <Card>
                    <CustomButton 
                        title='Donors' 
                        onPress={handlePressDonor}
                    />
                </Card>
                <Card>
                    <CustomButton 
                        title='Recipients' 
                        onPress={handlePressRecipient}
                    />
                </Card>
                <Card>
                    <CustomButton 
                        title='Warehouse' 
                        onPress={handlePressWarehouse}
                    />
                </Card>
            </ScrollView>
        </>
        
    );
};

export default HomePage;