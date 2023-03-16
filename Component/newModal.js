import React, { useState } from "react";
import { StyleSheet, Modal, Switch, Text, View  } from "react-native";
import { Input, Icon } from "react-native-elements";
import CustomButton from "./button";


const NewModal = ({setModalState, modalState, setDonors, donors}) => {

    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const [email, setEmail] = useState("");
    const [affilation, setAffilation] = useState("");
    const [thanks, setThanks] = useState("false");

    const handleSubmit = () => {
        const newDonor = {
            id:donors[donors.length - 1].id + 1,
            name,
            number,
            email,
            affilation,
            thanks
        }
        setModalState();
        setDonors([...donors,newDonor]);
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
                        Donors Name:
                    </Text>
                    <Input
                        placeholder='Donor Name'
                        leftIcon={{ type: 'font-awesome', name: 'user-o', color: '#5637DD' }}
                        leftIconContainerStyle={{paddingRight: 10}}
                        onChangeText={(name)=> setName(name)}
                    />
                    <Text style={styles.modalText}>
                        Donor Phone Number:
                    </Text>
                    <Input
                        placeholder='Donor Phone Number'
                        leftIcon={{ type: 'font-awesome', name: 'phone', color: '#5637DD' }}
                        leftIconContainerStyle={{paddingRight: 10}}
                        onChangeText={(number)=> setNumber(number)}
                    />
                    <Text style={styles.modalText}>
                        Donor Email:
                    </Text>
                    <Input
                        placeholder='Donor Email Address'
                        leftIcon={{ type: 'font-awesome', name: 'envelope-o', color: '#5637DD' }}
                        leftIconContainerStyle={{paddingRight: 10}}
                        onChangeText={(email)=> setEmail(email)}
                    />
                    <Text style={styles.modalText}>
                        Donor Affilation:
                    </Text>
                    <Input
                        placeholder='Donor Affilation'
                        leftIcon={{ type: 'font-awesome', name: 'handshake-o', color: '#5637DD' }}
                        leftIconContainerStyle={{paddingRight: 10}}
                        onChangeText={(affiliation)=> setAffilation(affiliation)}
                    />
                    <View>
                        <Text style={styles.modalText}>
                            Thank you sent?:
                        </Text>
                        <Icon style={styles.iconContainer}
                            name="check-square-o"
                            type="font-awesome"
                            color="#5637DD"
                        />
                        <Switch
                            style={styles.iconContainer}
                            value={thanks}
                            trackColor={{ true: '#5637DD', false: null }}
                            onValueChange={(thanks) => setThanks(thanks)}
                        />
                    </View>
                    
                    <CustomButton
                        onPress={() => {
                            handleSubmit()
                            resetForm();
                    }}
                        title='Submit'
                        accessibilityLabel="Submit button"
                        accessibilityRole="button"
                        testID="submit-button"
                    />
                    <View style={{margin:10}} />
                    <CustomButton
                        onPress={() => {
                            setModalState();
                            resetForm();
                        }}
                        title='Close'
                        accessibilityLabel="Close button"
                        accessibilityRole="button"
                        testID="close-button"
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
    donorId: {
        fontSize: 16,
        fontWeight: 'normal',
        color: 'black',
    },
    iconContainer: {
        alignSelf: 'flex-end',
        marginRight: 10,
    },
});

export default NewModal;