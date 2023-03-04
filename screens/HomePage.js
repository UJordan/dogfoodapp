import * as React from 'react';
import { Text, View, ScrollView, SafeAreaView } from 'react-native';
import { Card, Button } from 'react-native-elements';
import Carousel from 'react-native-snap-carousel';
import BannerSlider from '../Component/BannerSlider';
import { windowWidth } from '../utils/Dimensions';
import { sliderData } from '../shared/data';


const HomePage = () => {
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
                    sliderWidth={windowWidth - 40}
                    itemWidth={300}
                    loop={true}
                />
                <Card>
                    <Button title='Donors'></Button>
                </Card>
                <Card>
                    <Button title='Recipient'></Button>
                </Card>
                <Card>
                    <Button title='Warehouse Inventory'></Button>
                </Card>
            </ScrollView>
        </>
        
    );
};

export default HomePage;