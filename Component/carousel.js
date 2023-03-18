import * as React from 'react';
import { Animated, Dimensions, View, StyleSheet } from 'react-native';
import { sliderData } from '../shared/data';

const { width, height } = Dimensions.get('screen');
const ITEM_WIDTH = width * 0.95;
const ITEM_HEIGHT = ITEM_WIDTH * 1.0;


const data = sliderData.map((image, index) => ({
    key: String(index),
    photo: image.image
}));

const Carousel = () => {
    const scrollX = React.useRef(new Animated.Value(0)).current;

    return (
        <View style={styles.container}>
        <Animated.FlatList 
            data={data}
            keyExtractor={(item) => item.key}
            horizontal
            showsHorizontalScrollIndicator
            pagingEnabled
            onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: {x: scrollX }}}],
            {useNativeDriver: true }
            )}
            renderItem={({item, index}) => {
            const inputRange= [
                (index -1) * width,
                index * width,
                (index + 1) * width
            ];
            const translateX = scrollX.interpolate({
                inputRange,
                outputRange: [-width * .7, 0, width * .7]
            })
            return ( 
                <View 
                    style={{ width, justifyContent: 'center', alignItems: 'center' }}
                >
                    <View 
                        style={{
                            width: ITEM_WIDTH, 
                            height: ITEM_HEIGHT,
                            overflow: 'hidden',
                            alignItems: 'center',
                            borderRadius: 14,
                        }}
                        >
                        <Animated.Image 
                            source={item.photo} 
                            style={{ 
                            width: ITEM_WIDTH * 1, 
                            height: ITEM_HEIGHT, 
                            resizeMode: 'cover',
                            transform: [
                                {
                                translateX,
                                },
                            ]
                            }}
                        />
                    </View>
                </View>
            );
            }}
        />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Carousel;
