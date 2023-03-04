import React, { useState, useEffect } from "react";
import { StyleSheet, FlatList, showModal, Modal, ScrollView, TouchableOpacity,Text, View  } from "react-native";
import { ListItem, Input, Card } from "react-native-elements";
import List from "../Component/List";
import SearchBarComponent from "../Component/Searchbar";
import Loading from '../Component/LoadingComponent';
import { DONORS } from "../shared/donors";
import { HeaderTitle } from "@react-navigation/stack";

const DonorPage = () => {
    const [searchPhrase, setSearchPhrase] = useState("");
    const [clicked, setClicked] = useState(false);
    const [donors, setDonors] = useState([]);
    const [showModal, setShowModal] = useState(false);

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

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    const renderDonorList = ({ item }) => {
        console.log(item);
        return (
            <Card>
                <View>
                    <TouchableOpacity onPress={toggleModal}>
                        <Text>{item.name}</Text>
                    </TouchableOpacity>
                </View>
            </Card>   
        )
    }

            // <Card>
            //     <View key={item.id}>
            //         <TouchableOpacity onPress={toggleModal() => showDonor(item)}>
            //             <Text>{item.name}</Text>
            //         </TouchableOpacity>
            //     </View>
            // </Card>
            
            // <Card>
            //     <>
            //         <View>
            //             <TouchableOpacity onPress={toggleModal}>
            //                 <Text>{item.name}</Text>
            //             </TouchableOpacity>
            //         </View>
            //         <Card.Divider />
            //         {donors.donorsArray.map((donor) => {
            //             console.log(donor)
            //             return (
            //                 <ListItem key={donor.id}>
            //                     <ListItem.Content>
            //                         <ListItem.Title>{donor.name}</ListItem.Title>
            //                         <ListItem.Subtitle>{donor.phoneNumber}</ListItem.Subtitle>
            //                         <ListItem.Subtitle>{donor.email}</ListItem.Subtitle>
            //                         <ListItem.Subtitle>{donor.withACompany}</ListItem.Subtitle>
            //                         <ListItem.Subtitle>{donor.thanks}</ListItem.Subtitle>
            //                     </ListItem.Content>
            //                 </ListItem>
            //             );
            //         })}
            //     </>
            // </Card>

                
    // const showDonor = (singleDonor) => {
    //     const filteredArray= DONORS.filter((item) => item.id !== singleDonor.id);)
    // }
                // <Text>{item.id}</Text>
                // <Text>{item.phoneNumber}</Text>
                // <Text>{item.email}</Text>
                // <Text>{item.withACompany}</Text>
                // <Text>{item.thanks}</Text>
            

    
    // const SearchBar = () => {
    //     console.log({searchPhrase})
    //     console.log({setSearchPhrase})
    //     return (
    //         <View>
    //         {!clicked && 
    //             <SearchBarComponent
    //                 searchPhrase={searchPhrase}
    //                 setSearchPhrase={setSearchPhrase}
    //                 clicked={clicked}
    //                 setClicked={setClicked}
    //             />
    //         }
                
    //         {!DONORS ? (
    //             <Loading/>
    //         ) : (
    //             <List
    //                 searchPhrase={searchPhrase}
    //                 data={DONORS}
    //                 setClicked={setClicked}
    //             />
    //         )}
    //         </View>
    //     )
    // }


    return (
        <View>
            <SearchBarComponent/>
            <HeaderTitle style={styles.root}>List of Donors</HeaderTitle>
            <FlatList
                data={donors}
                renderItem={renderDonorList}
                keyExtractor={(item) => item.id.toString()}
            />
            {/* <Modal
                visible={showModal}
                animationType="slide"
                onRequestClose={toggleModal}
                >
                <View>
                    <Text>{item.id}</Text>
                    <Text>{item.name}</Text>
                    <Text>{item.phoneNumber}</Text>
                    <Text>{item.email}</Text>
                    <Text>{item.withACompany}</Text>
                    <Text>{item.thanks}</Text>
                    <TouchableOpacity onPress={toggleModal}>
                        <Text>Close</Text>
                    </TouchableOpacity>
                </View>
            </Modal> */}
        </View>
    );
};

export default DonorPage;

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
});