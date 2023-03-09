import React, { useState, useEffect } from "react";
import { StyleSheet, FlatList, Button, Modal, ScrollView, Switch, TouchableOpacity,Text, View  } from "react-native";
import { Input } from "react-native-elements";
import CustomButton from "./button";

const NewModal = ({setModalState, modalState}) => {

    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const [email, setEmail] = useState("");
    const [affilation, setAffilation] = useState("");
    const [thanks, setThanks] = useState("false");

    const handleSubmit = () => {
        const newDonor = {
            name,
            number,
            email,
            affilation,
            thanks
        }
        setModalState();
    };

    const myItemSeparator = () => {
        return (
            <View style={{ height: 1, backgroundColor: "grey",marginHorizontal:10}} />
        )
    };

    const resetForm = () => {
        setName("");
        setNumber("");
        setEmail("");
        setAffilation("");
        setThanks("false")
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
                        Donor Information
                    </Text>
                    <Text style={styles.modalText}>
                        Donors Name: {name}
                    </Text>
                    <Input
                        placeholder='Donor Name'
                        leftIcon={{ type: 'font-awesome', name: 'user-o' }}
                        leftIconContainerStyle={{paddingRight: 10}}
                        onChangeText={(name)=> setName(name)}
                    />
                    <Text style={styles.modalText}>
                        Donor Phone Number: {number}
                    </Text>
                    <Input
                        placeholder='Donor Phone Number'
                        leftIcon={{ type: 'font-awesome', name: 'phone' }}
                        leftIconContainerStyle={{paddingRight: 10}}
                        onChangeText={(number)=> setNumber(number)}
                    />
                    <Text style={styles.modalText}>
                        Donor Email: {email}
                    </Text>
                    <Input
                        placeholder='Donor Email Address'
                        leftIcon={{ type: 'font-awesome', name: 'envelope-o' }}
                        leftIconContainerStyle={{paddingRight: 10}}
                        onChangeText={(email)=> setEmail(email)}
                    />
                    <Text style={styles.modalText}>
                        Donor Affilation: {affilation}
                    </Text>
                    <Input
                        placeholder='Donor Affilation'
                        leftIcon={{ type: 'font-awesome', name: 'handshake-o' }}
                        leftIconContainerStyle={{paddingRight: 10}}
                        onChangeText={(affiliation)=> setAffilation(affiliation)}
                    />
                    <Text 
                        style={styles.modalText}
                        
                    >
                        Thank you sent?:
                    </Text>
                    <View 
                        rightIcon={{ type: 'font-awesome', name: 'check-square-o' }}
                        rightIconContainerStyle={{paddingRight: 10}}
                    />
                    <Switch
                        style={styles.formItem}
                        value={thanks}
                        trackColor={{ true: '#5637DD', false: null }}
                        onValueChange={(thanks) => setThanks(thanks)}
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
    modalTitle: {
        fontSize: 25,
        marginTop: 20,
        fontWeight: "bold",
        justifyContent: "center",
        alignSelf: "center",
    },
    modalText: {
        fontSize: 15,
        fontWeight: "bold",
    },
    donorId: {
        fontSize: 16,
        fontWeight: 'normal',
        color: 'black',
    },
    // formRow: {
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     flex: 1,
    //     flexDirection: 'row',
    //     margin: 30,
    //     color:'#5637DD'
    // },
});

export default NewModal;