import React, { useState, useEffect } from "react";
import { StyleSheet, SafeAreaView, FlatList, showModal, Modal, Button, Switch, Text, View  } from "react-native";
import { ListItem, Input } from "react-native-elements";
import List from "../Component/List";
import SearchBar from "../Component/Searchbar";
import Loading from '../Component/LoadingComponent';
import DONORS from "../shared/donors";

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

    const handleSubmit = () => {
        const newDonor = {
            name,
            number,
            email,
            affilation,
            thanks
        }
        dispatch(postDonor(newDonor));
        setShowModal(!showModal);
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
                                leftIcon={{ type: 'font-awesome', name: 'user-o' }}
                                leftIconContainerStyle={{paddingRight: 10}}
                                onChangeText={(number)=> setNumber(number)}
                            />
                            <Text style={styles.modalText}>
                                Donor Email: {email}
                            </Text>
                            <Input
                                placeholder='Donor Email Address'
                                leftIcon={{ type: 'font-awesome', name: 'user-o' }}
                                leftIconContainerStyle={{paddingRight: 10}}
                                onChangeText={(email)=> setEmail(email)}
                            />
                            <Text style={styles.modalText}>
                                Donor Affilation: {affilation}
                            </Text>
                            <Input
                                placeholder='Donor Affilation'
                                leftIcon={{ type: 'font-awesome', name: 'user-o' }}
                                leftIconContainerStyle={{paddingRight: 10}}
                                onChangeText={(affiliation)=> setAffilation(affiliation)}
                            />
                            <Text style={styles.modalText}>
                                Thank you sent?: {thanks}
                            </Text>
                            <Switch
                                style={styles.formItem}
                                value={thanks}
                                trackColor={{ true: '#5637DD', false: null }}
                                onValueChange={(thanks) => setThanks(thanks)}
                            />
                            <Button
                                onPress={() => {
                                    handleSubmit(!showModal)
                                    resetForm();
                            }}
                            color='#5637DD'
                            title='Submit'
                            />
                            <Button
                                onPress={() => {
                                    setShowModal(!showModal);
                                    resetForm();
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
            {!clicked}
                <SearchBar
                    searchPhrase={searchPhrase}
                    setSearchPhrase={setSearchPhrase}
                    clicked={clicked}
                    setClicked={setClicked}
                />
                <Loading/>
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
                data={DONORS}
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