import React, { useState } from "react";
import { StyleSheet, Modal, Text, View  } from "react-native";
import { Input, Icon } from "react-native-elements";
import CustomButton from "./button";
import { Picker } from "@react-native-picker/picker";
import StateDropDown from "./statedropdown";


const RecipientModal = ({setModalState, modalState, setRecipients, recipients}) => {
    const [ name, setName] = useState("");
    const [ address, setAddress] = useState("");
    const [ city, setCity] = useState("");
    const [ state, setState] = useState("");
    const [ zipcode, setZipcode] = useState("");


    const handleSubmit = () => {
        const newRecipient = {
            id:recipients[recipients.length - 1].id + 1,
            name,
            address,
            city,
            state,
            zipcode,
        }
        setModalState();
        setRecipients([...recipients,newRecipient]);
    };

    const myItemSeparator = () => {
        return (
            <View style={{ height: 1, backgroundColor: "grey",marginHorizontal:10}} />
        )
    };

    const resetForm = () => {
        setName("");
        setAddress("");
        setCity("");
        setState("");
        setZipcode("false")
    }

    return (
        <View>
            <Modal
                animationType='slide'
                transparent={false}
                visible={modalState}
                onRequestClose={() => setModalState()}
            >
                <View style={styles.modal}>
                    <Text style={styles.modalTitle}>
                        Recipient Information
                    </Text>
                    <Text style={styles.modalText}>
                        Name:
                    </Text>
                    <Input
                        placeholder='Name'
                        leftIcon={{ type: 'font-awesome', name: 'user-o', color: '#5637DD' }}
                        leftIconContainerStyle={{paddingRight: 10}}
                        onChangeText={(name)=> setName(name)}
                    />
                    <Text style={styles.modalText}>
                        Address:
                    </Text>
                    <Input
                        placeholder='Address'
                        leftIcon={{ type: 'font-awesome', name: 'address-card-o'
                        , color: '#5637DD' }}
                        leftIconContainerStyle={{paddingRight: 10}}
                        onChangeText={(address)=> setAddress(address)}
                    />
                    <Text style={styles.modalText}>
                        City:
                    </Text>
                    <Input
                        placeholder='City'
                        leftIcon={{ type: 'font-awesome', name: 'address-card-o'
                        , color: '#5637DD' }}
                        leftIconContainerStyle={{paddingRight: 10}}
                        onChangeText={(city)=> setCity(city)}
                    />
                    <Text style={styles.modalText}>
                        State:
                    </Text>
                    <StateDropDown
                        state={state}
                        setState={setState}
                    />
                    
                    <Text style={styles.modalText}>
                        ZipCode:
                    </Text>
                    <Input
                        placeholder='Zipcode'
                        leftIcon={{ type: 'font-awesome', name: 'address-card-o'
                        , color: '#5637DD' }}
                        leftIconContainerStyle={{paddingRight: 10}}
                        onChangeText={(zipcode)=> setZipcode(zipcode)}
                    />
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
});

export default RecipientModal;