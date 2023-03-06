import React, { useState, useEffect } from "react";
import { StyleSheet, FlatList, Button, Modal, ScrollView, TouchableOpacity,Text, View  } from "react-native";
import { Card } from "react-native-elements";
import List from "../Component/List";
import SearchBarComponent from "../Component/Searchbar";
import Loading from '../Component/LoadingComponent';
import { DONORS } from "../shared/donors";
import { HeaderTitle } from "@react-navigation/stack";
import NewModal from "../Component/newModal";

const DonorPage = () => {
    const [searchPhrase, setSearchPhrase] = useState("");
    const [clicked, setClicked] = useState(false);
    const [donors, setDonors] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [donor, setDonor] = useState({});
    const [showNewModal, setShowNewModal] = useState(false);

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
        setShowModal(!showModal);
        setDonor(donor)
    };

    const handleNewModal = () => {
        setShowNewModal(!showNewModal);
        return (
            <NewModal/>
        )
        
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

    const SearchBar = () => {
        console.log({searchPhrase})
        console.log({setSearchPhrase})
        console.log({clicked})
        console.log({setClicked})
        // return (
        //     <View>
        //     {!clicked && 
        //         <SearchBarComponent
        //             searchPhrase={searchPhrase}
        //             setSearchPhrase={setSearchPhrase}
        //             clicked={clicked}
        //             setClicked={setClicked}
        //         />
        //     }
                
        //     {!DONORS ? (
        //         <Loading/>
        //     ) : (
        //         <List
        //             searchPhrase={searchPhrase}
        //             data={DONORS}
        //             setClicked={setClicked}
        //         />
        //     )}
        //     </View>
        // )
    }


    return (
        <View>
            <View style={{ fontSize: 20, margin: 25 }}>
                <Button 
                    onPress={() => handleNewModal()}
                    title='Add New Donor'
                    color='#5637DD'
                    style={{ fontSize: 24, height: 100, borderRadius: 10, padding: 5 }}
                />
            </View>
            <SearchBarComponent/>
            <HeaderTitle style={styles.root}>List of Donors</HeaderTitle>
            <FlatList
                data={donors}
                renderItem={renderDonorList}
                keyExtractor={(item) => item.id.toString()}
            />
            <Modal
                visible={showModal}
                animationType="slide"
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
                    <View style={{ fontSize: 20, margin: 25 }}>
                        <Button 
                            onPress={() =>setShowModal(!showModal)}
                            title='cancel'
                            color='#5637DD'
                            
                        >
                        </Button>
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
    // formRow: {
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     flex: 1,
    //     flexDirection: 'row',
    //     margin: 30,
    //     color:'#5637DD'
    // },
});

export default DonorPage;
