import React, { useState, useEffect } from "react";
import { StyleSheet, SafeAreaView, FlatList, showModal, Modal, Button, Text, View  } from "react-native";
import { ListItem } from "react-native-elements";
import List from "../Component/List";
import SearchBar from "../Component/Searchbar";
import Loading from '../Component/LoadingComponent';
import donors from "../shared/donors.js";

const DonorPage = () => {
    const [searchPhrase, setSearchPhrase] = useState("");
    const [clicked, setClicked] = useState(false);
    const [donors, setdonors] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const [email, setEmail] = useState("");
    const [affilation, setAffilation] = useState("");
    const [thanks, setThanks] = useState("");

    const newDonor = () => {

    }

    const renderDonorList = ({ item: donor }) => {
        return (
            <ListItem
                onPress={() => {
                    <Modal
                        animationType='slide'
                        transparent={false}
                        visible={showModal}
                        onRequestClose={() => setShowModal(!showModal)}
                    >
                        <View style={styles.modal}>
                            <Text style={styles.modalTitle}>
                                Donor Information
                            </Text>
                            <Text style={styles.modalText}>
                                Donors Name: {name}
                            </Text>
                            <Text style={styles.modalText}>
                                Donor Phone Number: {number}
                            </Text>
                            <Text style={styles.modalText}>
                                Donor Email: {email}
                            </Text>

                            <Button
                                onPress={() => {
                                    setShowModal(!showModal);
                                }}
                                color='#5637DD'
                                title='Close'
                            />
                        </View>
                    </Modal>
                }}
            >
                <ListItem.Content>
                    <ListItem.Title>{donor.name}</ListItem.Title>
                </ListItem.Content>
            </ListItem>
        )
    }

    useEffect(() => {
        setdonors(donors);
    }, []);

    const myItemSeparator = () => {
        return <View style={{ height: 1, backgroundColor: "grey",marginHorizontal:10}} />;
        };
    
    const myListEmpty = () => {
        return (
            <View style={{ alignItems:"center" }}>
            <Text style={styles.item}>No data found</Text>
            </View>
        );
    };

    return (
        <SafeAreaView style={styles.root}>
            {!clicked && <Loading/>}
                <SearchBar
                    searchPhrase={searchPhrase}
                    setSearchPhrase={setSearchPhrase}
                    clicked={clicked}
                    setClicked={setClicked}
                />
            {!donors ? (
                <Loading/>
            ) : (
                <List
                    searchPhrase={searchPhrase}
                    data={donors}
                    setClicked={setClicked}
                />
            )}
            <Text>List of Donors:</Text>
            <FlatList
                data={donors}
                renderItem={renderDonorList}
                keyExtractor={(item) => item.id.toString()}
            />
        </SafeAreaView>
        
        
    );
};

export default DonorPage;

const styles = StyleSheet.create({
    root: {
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        width: "100%",
        marginTop: 20,
        fontSize: 25,
        fontWeight: "bold",
        marginLeft: "10%",
    },
});
