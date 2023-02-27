import React, { useState, useEffect } from "react";
import { StyleSheet, Text, SafeAreaView, ActivityIndicator,} from "react-native";
import List from "../components/List";
import SearchBar from "../components/SearchBar";
import Loading from '../components/LoadingComponent';
import * as Animatable from 'react-native-animatable'


const Donor = () => {
        const [searchPhrase, setSearchPhrase] = useState("");
        const [clicked, setClicked] = useState(false);
        const [Donor, setDonor] = useState();
    
        // get data from donor.js
        useEffect(() => {
        const getData = async () => {
            ;
        };
        getData();
        }, []);
    
        return (
        <SafeAreaView style={styles.root}>
            {!clicked && <Loading/>}
            <SearchBar
                searchPhrase={searchPhrase}
                setSearchPhrase={setSearchPhrase}
                clicked={clicked}
                setClicked={setClicked}
            />
            { : (
    
                <List
                    searchPhrase={searchPhrase}
                    data={Donor}
                    setClicked={setClicked}
                />
    
            )}
        </SafeAreaView>
        );
};

export default Donor;

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