import React, { useState } from "react";
import { Text, View, ScrollView } from "react-native";
import useAccessibilityHelper from "../utils/accessibility.js";
import { Card } from "react-native-elements";
import BannerSlider from "../Component/BannerSlider";
import CustomButton from "../Component/button.js";
import Carousel from "../Component/carousel.js";

const HomePage = ({ navigation }) => {
    const [isFocused, setIsFocused] = useState(false);

    useAccessibilityHelper(setIsFocused);

    const renderBanner = ({ item, index }) => {
        return <BannerSlider data={item} />;
    };

    const handlePressDonor = () => {
        navigation.navigate("Donor Page", { screen: "DonorPage" });
    };

    const handlePressRecipient = () => {
        navigation.navigate("Recipient Page", { screen: "RecipientPage" });
    };

    const handlePressWarehouse = () => {
        navigation.navigate("Warehouse Page", { screen: "WarehousePage" });
    };

    return (
        <>
            <ScrollView>
                <Card containerStyle={{ padding: 0 }}>
                    <View style={{ alignItems: "center" }}>
                        <Text style={{ margin: 15 }}>
                            PORTLAND ANIMAL FOODBANK
                        </Text>
                    </View>
                </Card>
                <View style={{ margin: 10 }} />
                <Carousel />
                <View style={{ margin: 10 }} />
                <CustomButton
                    title="Donors"
                    onPress={handlePressDonor}
                />
                <CustomButton
                    title="Recipients"
                    onPress={handlePressRecipient}
                />
                <CustomButton
                    title="Warehouse"
                    onPress={handlePressWarehouse}
                />
            </ScrollView>
        </>
    );
};

export default HomePage;
