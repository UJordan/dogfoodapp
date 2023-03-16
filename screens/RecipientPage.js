import React, { useState, useEffect } from "react";
import { StyleSheet, FlatList, Icon, Modal, TouchableOpacity,Text, View  } from "react-native";
import { Card } from "react-native-elements";
import List from "../Component/List";
import SearchBarComponent from "../Component/Searchbar";
import Loading from '../Component/LoadingComponent';
import { RECIPIENTS } from "../shared/recipient";
import { HeaderTitle } from "@react-navigation/stack";
import RecipientModal from "../Component/RecipientModal";
import CustomButton from "../Component/button";


const RecipientPage = () => {
    const [searchPhrase, setSearchPhrase] = useState("");
    const [clicked, setClicked] = useState(false);
    const [recipients, setRecipients] = useState([]);
    const [showRecipient, setShowRecipient] = useState(false);
    const [recipient, setRecipient] = useState({});
    const [showNewRecipient, setShowNewRecipient] = useState(false);

    useEffect(() => {
        setRecipients(RECIPIENTS);
    }, []);

    const myListEmpty = () => {
        return (
            <View style={{ alignItems:"center" }}>
            <Text style={styles.item}>No data found</Text>
            </View>
        );
    };

    const toggleModal = (recipient) => {
        setShowRecipient(!showRecipient);
        setRecipient(recipient)
    };

    const handleRecipientModal = () => {
        setShowNewRecipient(!showNewRecipient);
        console.log({showNewRecipient})
    };

    const renderRecipientList = ({ item }) => {
        return (
            <Card>
                <View>
                    <TouchableOpacity onPress={() => toggleModal(item)}>
                        <Text>{item.name}</Text>
                    </TouchableOpacity>
                </View>
            </Card>   
        )
    };

    return (
        <View>
            <RecipientModal 
                setModalState={handleRecipientModal}
                modalState={showNewRecipient}
                setRecipients={setRecipients}
                recipients={recipients}
            />
            <View style={{ fontSize: 20, margin: 25 }}>
                <CustomButton 
                    onPress={() => handleRecipientModal()}
                    title='Add New Recipient'
                />
            </View>
            <View>
                <SearchBarComponent
                    searchPhrase={searchPhrase}
                    setSearchPhrase={setSearchPhrase}
                    clicked={clicked}
                    setClicked={setClicked}
                />
            </View>
            <HeaderTitle style={styles.root}>List of Recipients</HeaderTitle>
            {!recipients ? (
                <Loading/>
            ) : (
                <List
                    searchPhrase={searchPhrase}
                    data={recipients}
                    setClicked={setClicked}
                    renderItem={renderRecipientList}
                    keyExtractor={(item) => item.id.toString()}
                />
            )}
            <Modal
                visible={showRecipient}
                animationType="slide"
                onRequestClose={toggleModal}
                >
                <View>
                    <Card.Title style={styles.modaltitle}>Recipient Information</Card.Title>
                    <Card>
                        <Text style={styles.modaltext}>Name: <Text style={styles.recipientId}>{recipient.name}</Text></Text>
                    </Card>
                    <Card>
                        <Text style={styles.modaltext}>Address: <Text style={styles.recipientId}>{recipient.address}</Text></Text>
                    </Card>
                    <Card>
                        <Text style={styles.modaltext}>City: <Text style={styles.recipientId}>{recipient.city}</Text></Text>
                    </Card>
                    <Card>
                        <Text style={styles.modaltext}>State: <Text style={styles.recipientId}>{recipient.state}</Text></Text>
                    </Card>
                    <Card>
                        <Text style={styles.modaltext}>ZipCode: <Text style={styles.recipientId}>{recipient.zipcode}</Text></Text>
                    </Card>
                    <Card>
                        <Text style={styles.modaltext}>Donor ID: <Text style={styles.recipientId}>{recipient.id}</Text></Text>
                    </Card>
                    <Card.Divider />
                    <View style={{ fontSize: 20, margin: 25 }}>
                        <CustomButton 
                            onPress={() =>setShowRecipient(!showRecipient)}
                            title='cancel'
                        />
                    </View>
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
    modaltitle: {
        fontSize: 25,
        marginTop: 20,
        fontWeight: "bold",
        justifyContent: "center",
        alignSelf: "center",
    },
    modaltext: {
        fontSize: 15,
        fontWeight: "bold",
    },
    recipientId: {
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

export default RecipientPage;