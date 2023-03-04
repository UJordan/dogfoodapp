import { View, Image } from 'react-native';

export default function BannerSlider({ data }) {
    return (
        <View>
            <Image source={data.image} style={{ height:340, width: 300, borderRadius: 10, marginTop: 15 }} />
        </View>
    )
}