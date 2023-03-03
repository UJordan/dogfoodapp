import React, { useState, useEffect } from "react";
import { StyleSheet, SafeAreaView, FlatList, showModal, Modal, Button, Text, View  } from "react-native";
import { ListItem } from "react-native-elements";
import List from "../Component/List";
import SearchBar from "../Component/Searchbar";
import Loading from '../Component/LoadingComponent';


const WarehousePage = () => {
    const [searchPhrase, setSearchPhrase] = useState("");
    const [clicked, setClicked] = useState(false);
    const [food, setfood] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [brand, setBrand] = useState("");
    const [type, setType] = useState("");
    const [flavor, setFlavor] = useState("");
    const [quanity, setQuanity] = useState("");
    const [location, setLocation] = useState("");

    const handlesubmit = () => {
        const newDonor = {
            brand,
            type,
            flavor,
            quanity,
            location
        }
        dispatch(postDonor(newDonor));
        setShowModal(!showModal);
    }

    const renderFoodList = ({ item: donor }) => {

        useEffect(() => {
            setfood(food);
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
                {!food ? (
                    <Loading/>
                ) : (
                    <List
                        searchPhrase={searchPhrase}
                        data={food}
                        setClicked={setClicked}
                    />
                )}
                <Text>List of Food:</Text>
                <FlatList
                    data={FOOD}
                    renderItem={renderFoodList}
                    keyExtractor={(item) => item.id.toString()}
                />
            </SafeAreaView>
            
            
        );
    }
}

export default WarehousePage;