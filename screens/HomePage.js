import * as React from 'react';
import { Text, View, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import { Card, Button } from 'react-native-elements';
import Carousel from 'react-native-snap-carousel';
import BannerSlider from '../Component/BannerSlider';
import { windowWidth } from '../utils/Dimensions';
import { sliderData } from '../shared/data';


const HomePage = ({ navigation }) => {
    const renderBanner = ({ item, index }) => {
        return (
            <BannerSlider data={item} />
        );
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
                    <Button title='Donors' onPress={() => navigation.navigate('Donor Page', { screen: 'DonorPage' })}></Button>
                </Card>
                <Card>
                    <Button title='Recipient' onPress={() => navigation.navigate('Reciepient Page', { screen: 'Recipients' })}></Button>
                </Card>
                <Card>
                    <Button title='Warehouse Inventory' onPress={() => navigation.navigate('Warehouse Page', { screen: 'Warehouse' } )}></Button>
                </Card>
            </ScrollView>
        </>
        
    );
};

export default HomePage;