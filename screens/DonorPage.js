import React, { useState, useEffect } from "react";
import { StyleSheet, FlatList, Button, Modal, ScrollView, TouchableOpacity,Text, View  } from "react-native";
import { Card } from "react-native-elements";
import List from "../Component/List";
import SearchBarComponent from "../Component/Searchbar";
import Loading from '../Component/LoadingComponent';
import { DONORS } from "../shared/donors";
import { HeaderTitle } from "@react-navigation/stack";
import NewModal from "../Component/newModal";
import allStyles from "../utils/allStyles";
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
            <Text style={allStyles.item}>No data found</Text>
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
            <NewModal 
                setModalState={handleNewModal}
                modalState={showNewDonor}
            />
            <View style={{ fontSize: 20, margin: 25 }}>
                <CustomButton 
                    onPress={() => handleNewModal()}
                    title='Add New Donor'
                />
            </View>
            <SearchBarComponent/>
            <HeaderTitle style={allStyles.root}>List of Donors</HeaderTitle>
            <FlatList
                data={donors}
                renderItem={renderDonorList}
                keyExtractor={(item) => item.id.toString()}
            />
            <Modal
                visible={showDonor}
                animationType="slide"
                onRequestClose={toggleModal}
                >
                <View>
                    <Card.Title style={allStyles.modaltitle}>Donor Information</Card.Title>
                    <Card>
                        <Text style={allStyles.modaltext}>Name: <Text style={allStyles.donorId}>{donor.name}</Text></Text>
                    </Card>
                    <Card>
                        <Text style={allStyles.modaltext}>Phone Number: <Text style={allStyles.donorId}>{donor.phoneNumber}</Text></Text>
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
