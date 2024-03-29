import React, { useState } from "react";
import { StyleSheet, Modal, Text, Platform, Button, View } from "react-native";
import { Input } from "react-native-elements";
import CustomButton from "./button";
import { Picker } from "@react-native-picker/picker";
import DateTimePicker from "@react-native-community/datetimepicker";

const FoodModal = ({ setModalState, modalState, setFoods, foods }) => {
    const [brand, setBrand] = useState("");
    const [type, setType] = useState("");
    const [flavor, setFlavor] = useState("");
    const [quantity, setQuantity] = useState("1");
    const [aisle, setAisle] = useState("1");
    const [bin, setBin] = useState("1");
    const [date, setDate] = useState(new Date());
    const [showCalendar, setShowCalendar] = useState(false);

    const handleSubmit = () => {
        const newFood = {
            id: foods[foods.length - 1].id + 1,
            brand,
            type,
            flavor,
            quantity,
            aisle,
            bin,
            date,
        };
        setModalState();
        setFoods([...foods, newFood]);
    };

    const onDateChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShowCalendar(Platform.OS === "ios");
        setDate(currentDate);
    };

    const myItemSeparator = () => {
        return (
            <View
                style={{
                    height: 1,
                    backgroundColor: "grey",
                    marginHorizontal: 10,
                }}
            />
        );
    };

    const resetForm = () => {
        setBrand("");
        setType("");
        setFlavor("");
        setQuantity("1");
        setAisle("1");
        setBin("1");
        setDate(new Date());
    };

    return (
        <View>
            <Modal
                transparent={false}
                visible={modalState}
                onRequestClose={() => setModalState()}>
                <Text style={styles.modalTitle}>Food Information</Text>
                <View style={styles.formRow}>
                    <Text style={styles.formLabel}>Food Brand:</Text>
                    <Input
                        placeholder="Food Brand"
                        leftIcon={{
                            type: "font-awesome",
                            name: "user-o",
                            color: "#5637DD",
                        }}
                        leftIconContainerStyle={{ paddingRight: 10 }}
                        onChangeText={(brand) => setBrand(brand)}
                    />
                </View>
                <View style={styles.formRow}>
                    <Text style={styles.formLabel}>Food Type:</Text>
                    <Input
                        placeholder="Food Type"
                        leftIcon={{
                            type: "font-awesome",
                            name: "address-card-o",
                            color: "#5637DD",
                        }}
                        leftIconContainerStyle={{ paddingRight: 10 }}
                        onChangeText={(type) => setType(type)}
                    />
                </View>
                <View style={styles.formRow}>
                    <Text style={styles.formLabel}>Flavor:</Text>
                    <Input
                        placeholder="Flavor"
                        leftIcon={{
                            type: "font-awesome",
                            name: "address-card-o",
                            color: "#5637DD",
                        }}
                        leftIconContainerStyle={{ paddingRight: 10 }}
                        onChangeText={(flavor) => setFlavor(flavor)}
                    />
                </View>
                <View style={styles.formRow}>
                    <Text style={styles.formLabel}>Quantity:</Text>
                    <Picker
                        placeholder="Quantity"
                        style={styles.formItem}
                        selectedValue={quantity}
                        leftIcon={{
                            type: "font-awesome",
                            name: "shopping-cart",
                            color: "#5637DD",
                        }}
                        leftIconContainerStyle={{ paddingRight: 10 }}
                        onValueChange={(quantity) => setQuantity(quantity)}>
                        <Picker.Item
                            label="1"
                            value="1"
                        />
                        <Picker.Item
                            label="2"
                            value="2"
                        />
                        <Picker.Item
                            label="3"
                            value="3"
                        />
                        <Picker.Item
                            label="4"
                            value="4"
                        />
                        <Picker.Item
                            label="5"
                            value="5"
                        />
                    </Picker>
                    <Text style={styles.formLabel}>Aisle:</Text>
                    <Picker
                        placeholder="Aisle"
                        style={styles.formItem}
                        selectedValue={aisle}
                        leftIcon={{
                            type: "font-awesome",
                            name: "shopping-cart",
                            color: "#5637DD",
                        }}
                        leftIconContainerStyle={{ paddingRight: 10 }}
                        onValueChange={(aisle) => setAisle(aisle)}>
                        <Picker.Item
                            label="Aisle 1"
                            value="1"
                        />
                        <Picker.Item
                            label="Aisle 2"
                            value="2"
                        />
                        <Picker.Item
                            label="Aisle 3"
                            value="3"
                        />
                        <Picker.Item
                            label="Aisle 4"
                            value="4"
                        />
                        <Picker.Item
                            label="Aisle 5"
                            value="5"
                        />
                    </Picker>
                    <Text style={styles.formLabel}>Bin:</Text>
                    <Picker
                        placeholder="Bin"
                        style={styles.formItem}
                        selectedValue={bin}
                        leftIcon={{
                            type: "font-awesome",
                            name: "shopping-cart",
                            color: "#5637DD",
                        }}
                        leftIconContainerStyle={{ paddingRight: 10 }}
                        onValueChange={(bin) => setBin(bin)}>
                        <Picker.Item
                            label="Bin 1"
                            value="1"
                        />
                        <Picker.Item
                            label="Bin 2"
                            value="2"
                        />
                        <Picker.Item
                            label="Bin 3"
                            value="3"
                        />
                        <Picker.Item
                            label="Bin 4"
                            value="4"
                        />
                        <Picker.Item
                            label="Bin 5"
                            value="5"
                        />
                    </Picker>
                </View>
                <View style={styles.formRow}>
                    <Text style={styles.formLabel}>Date:</Text>
                    <Button
                        onPress={() => setShowCalendar(!showCalendar)}
                        title={date.toLocaleDateString("en-US")}
                        accessibilityLabel="Tap me to select a date"
                    />
                </View>
                {showCalendar && (
                    <DateTimePicker
                        style={styles.formItem}
                        value={date}
                        mode="date"
                        display="default"
                        onChange={onDateChange}
                    />
                )}
                <View>
                    <CustomButton
                        onPress={() => {
                            handleSubmit();
                            resetForm();
                        }}
                        title="Submit"
                    />
                    <View style={{ margin: 10 }} />
                    <CustomButton
                        onPress={() => {
                            setModalState();
                            resetForm();
                        }}
                        title="Close"
                    />
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        justifyContent: "center",
        alignSelf: "center",
        alignItems: "center",
        padding: 10,
    },
    title: {
        width: "100%",
        marginTop: 20,
        fontSize: 25,
        fontWeight: "bold",
        marginLeft: "10%",
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
    },
    modal: {
        justifyContent: "center",
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
        fontWeight: "normal",
        color: "black",
    },
    iconContainer: {
        alignSelf: "flex-end",
        marginRight: 10,
    },
    formRow: {
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        flexDirection: "row",
        margin: 20,
    },
    formLabel: {
        fontSize: 18,
        flex: 2,
    },
    formItem: {
        flex: 1,
    },
});

export default FoodModal;
