import { Text, View, Image, ScrollView } from 'react-native';
import { Card, Button } from 'react-native-elements';
import dogpic from '../assets/dogpic.jpeg';


const HomePage = () => {
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
                <Card>
                    <Image source={dogpic} style={{ alignItems: 'center', justifyContent: 'center', maxHeight: 300, maxWidth: 300, alignSelf: 'center', marginTop: 15}}>
                    </Image>
                </Card>
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