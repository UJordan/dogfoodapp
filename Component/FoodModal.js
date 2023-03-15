import React, { useState } from "react";
import { StyleSheet, Modal, Text, View  } from "react-native";
import { Input, Icon } from "react-native-elements";
import CustomButton from "./button";
import { Picker } from "@react-native-picker/picker";
import DateTimePicker from '@react-native-community/datetimepicker';


const FoodModal = ({setModalState, modalState, setFoods, foods}) => {
    const [ brand, setBrand] = useState("");
    const [ type, setType] = useState("");
    const [ flavor, setFlavor] = useState("");
    const [ quantity, setQuantity] = useState("");
    const [ aisle, setAisle ] = useState("");
    const [ bin, setBin ] = useState("");
    const [ date, setDate ] = useState(new Date());
    const [showCalendar, setShowCalendar] = useState(false);

    const handleSubmit = () => {
        const newFood = {
            id:foods[foods.length - 1].id + 1,
            brand,
            type,
            flavor,
            quantity,
            aisle,
            bin,
            date,
        }
        setModalState();
        setFoods([...foods,newFood]);
    };

    const onDateChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShowCalendar(Platform.OS === 'ios');
        setDate(currentDate);
    };

    const myItemSeparator = () => {
        return (
            <View style={{ height: 1, backgroundColor: "grey",marginHorizontal:10}} />
        )
    };

    const resetForm = () => {
        setBrand("");
        setType("");
        setFlavor("");
        setQuantity("");
        setAisle("");
        setBin("");
        setDate("")
    }

    return (
        <View>
            <Modal
                transparent={false}
                visible={modalState}
                onRequestClose={() => setModalState()}
            >
                <View style={styles.modal}>
                    <Text style={styles.modalTitle}>
                        Food Information
                    </Text>
                    <Text style={styles.modalText}>
                        Food Brand:
                    </Text>
                    <Input
                        placeholder='Food Brand'
                        leftIcon={{ type: 'font-awesome', name: 'user-o', color: '#5637DD' }}
                        leftIconContainerStyle={{paddingRight: 10}}
                        onChangeText={(brand)=> setBrand(brand)}
                    />
                    <Text style={styles.modalText}>
                        Food Type:
                    </Text>
                    <Input
                        placeholder='Food Type'
                        leftIcon={{ type: 'font-awesome', name: 'address-card-o'
                        , color: '#5637DD' }}
                        leftIconContainerStyle={{paddingRight: 10}}
                        onChangeText={(type)=> setType(type)}
                    />
                    <Text style={styles.modalText}>
                        Flavor:
                    </Text>
                    <Input
                        placeholder='Flavor'
                        leftIcon={{ type: 'font-awesome', name: 'address-card-o'
                        , color: '#5637DD' }}
                        leftIconContainerStyle={{paddingRight: 10}}
                        onChangeText={(flavor)=> setFlavor(flavor)}
                    />
                    <Text style={styles.modalText}>
                        Quantity:
                    </Text>
                    <Picker
                        placeholder='Quantity'
                        selectedValue={quantity}
                        style={{ height: 50, width: 150 }}
                        leftIcon={{ type: 'font-awesome', name: 'shopping-cart', color: '#5637DD' }}
                        leftIconContainerStyle={{paddingRight: 10}}
                        onValueChange={(quantity)=> setQuantity(quantity)}
                    >
                        <Picker.Item label="1" value="1" />
                        <Picker.Item label="2" value="2" />
                        <Picker.Item label="3" value="3" />
                        <Picker.Item label="4" value="4" />
                        <Picker.Item label="5" value="5" />
                    </Picker>
                    <Picker
                        placeholder='Aisle'
                        selectedValue={aisle}
                        style={{ height: 50, width: 150 }}
                        leftIcon={{ type: 'font-awesome', name: 'shopping-cart', color: '#5637DD' }}
                        leftIconContainerStyle={{paddingRight: 10}}
                        onValueChange={(aisle)=> setAisle(aisle)}
                    >
                        <Picker.Item label="Aisle 1" value="1" />
                        <Picker.Item label="Aisle 2" value="2" />
                        <Picker.Item label="Aisle 3" value="3" />
                        <Picker.Item label="Aisle 4" value="4" />
                        <Picker.Item label="Aisle 5" value="5" />
                    </Picker>
                    <Picker
                        placeholder='Bin'
                        selectedValue={bin}
                        style={{ height: 50, width: 150 }}
                        leftIcon={{ type: 'font-awesome', name: 'shopping-cart', color: '#5637DD' }}
                        leftIconContainerStyle={{paddingRight: 10}}
                        onValueChange={(bin)=> setBin(bin)}
                    >
                        <Picker.Item label="Bin 1" value="1" />
                        <Picker.Item label="Bin 2" value="2" />
                        <Picker.Item label="Bin 3" value="3" />
                        <Picker.Item label="Bin 4" value="4" />
                        <Picker.Item label="Bin 5" value="5" />
                    </Picker>
                    <View style={styles.formRow}>
                        <Text style={styles.formLabel}>Date:</Text>
                        <CustomButton
                            onPress={() => setShowCalendar(!showCalendar)}
                            title={date.toLocaleDateString('en-US')}
                            accessibilityLabel='Tap me to select a date'
                        />
                    </View>
                    {showCalendar && (
                        <DateTimePicker
                            style={styles.formItem}
                            value={date}
                            mode='date'
                            display='default'
                            onChange={onDateChange}
                        />
                    )}
                    <CustomButton
                        onPress={() => {
                            handleSubmit()
                            resetForm();
                    }}
                    title='Submit'
                    />
                    <View style={{margin:10}} />
                    <CustomButton
                        onPress={() => {
                            setModalState();
                            resetForm();
                        }}
                        title='Close'
                    />
                </View>
            </Modal>
        </View>
    )
};

const styles = StyleSheet.create({
    root: {
        justifyContent: "center",
        alignSelf: "center",
        alignItems: "center",
        padding: 10
    },
    title: {
        width: "100%",
        marginTop: 20,
        fontSize: 25,
        fontWeight: "bold",
        marginLeft: "10%",
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    modal:{
        justifyContent: 'center',
        margin: 20,
    },
    modalTitle: {
        fontSize: 25,
        margin: 10,
        fontWeight: "bold",
        justifyContent: "center",
        alignSelf: "center",
    },
    modalText: {
        fontSize: 15,
        fontWeight: "bold",
    },
    recipientId: {
        fontSize: 16,
        fontWeight: 'normal',
        color: 'black',
    },
    iconContainer: {
        alignSelf: 'flex-end',
        marginRight: 10,
    },
    formRow: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row',
        margin: 20
    },
    formLabel: {
        fontSize: 18,
        flex: 2
    },
    formItem: {
        flex: 1
    },
});

export default FoodModal;