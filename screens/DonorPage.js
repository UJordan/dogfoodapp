import React, { useState, useEffect } from "react";
import { StyleSheet, Modal, TouchableOpacity,Text, View  } from "react-native";
import { Card } from "react-native-elements";
import List from "../Component/List";
import SearchBarComponent from "../Component/Searchbar";
import Loading from '../Component/LoadingComponent';
import { DONORS } from "../shared/donors";
import { HeaderTitle } from "@react-navigation/stack";
import NewModal from "../Component/newModal";
import CustomButton from "../Component/button";


const DonorPage = () => {
    const [searchPhrase, setSearchPhrase] = useState("");
    const [clicked, setClicked] = useState(false);
    const [donors, setDonors] = useState([]);
    const [showDonor, setShowDonor] = useState(false);
    const [donor, setDonor] = useState({});
    const [showNewDonor, setShowNewDonor] = useState(false);

    useEffect(() => {
        setDonors(DONORS);
    }, []);

    const myListEmpty = () => {
        return (
            <View style={{ alignItems:"center" }}>
            <Text style={styles.item}>No data found</Text>
            </View>
        );
    };

    const toggleModal = (donor) => {
        setShowDonor(!showDonor);
        setDonor(donor)
    };

    const handleNewModal = () => {
        setShowNewDonor(!showNewDonor);
        console.log({showNewDonor})
    };

    const addNewDonor = (newDonor) => {
        setDonors([...donors, newDonor]);
        setShowNewDonor(false); // hide the modal
    };

    const renderDonorList = ({ item }) => {
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
            <NewModal 
                setModalState={handleNewModal}
                modalState={showNewDonor}
                setDonors={setDonors}
                donors={donors}
            />
            <View style={{ fontSize: 20, margin: 25 }}>
                <CustomButton 
                    onPress={() => handleNewModal()}
                    title='Add New Donor'
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
            <HeaderTitle style={styles.root}>List of Donors</HeaderTitle>
            {!donors ? (
                <Loading/>
            ) : (
                <List
                    searchPhrase={searchPhrase}
                    data={donors}
                    setClicked={setClicked}
                    renderItem={renderDonorList}
                    keyExtractor={(item) => item.id.toString()}
                />
            )}
            <Modal
                visible={showDonor}
                onRequestClose={toggleModal}
                >
                <View>
                    <Card.Title style={styles.modaltitle}>Donor Information</Card.Title>
                    <Card>
                        <Text style={styles.modaltext}>Name: <Text style={styles.donorId}>{donor.name}</Text></Text>
                    </Card>
                    <Card>
                        <Text style={styles.modaltext}>Phone Number: <Text style={styles.donorId}>{donor.phoneNumber}</Text></Text>
                    </Card>
                    <Card>
                        <Text style={styles.modaltext}>Email: <Text style={styles.donorId}>{donor.email}</Text></Text>
                    </Card>
                    <Card>
                        <Text style={styles.modaltext}>Affiliation: <Text style={styles.donorId}>{donor.withACompany}</Text></Text>
                    </Card>
                    <Card>
                        <Text style={styles.modaltext}>Thanked? <Text style={styles.donorId}>{donor.thanks}</Text></Text>
                    </Card>
                    <Card>
                        <Text style={styles.modaltext}>Donor ID: <Text style={styles.donorId}>{donor.id}</Text></Text>
                    </Card>
                    <Card.Divider />
                    <View>
                        <CustomButton 
                            onPress={() =>setShowDonor(!showDonor)}
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
        padding: 10,
        width: "100%",
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
    donorId: {
        fontSize: 16,
        fontWeight: 'normal',
        color: 'black',
    },
    button: {

    }
});

export default DonorPage;
