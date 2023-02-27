import React, { useState, useEffect } from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import List from "../components/List";
import SearchBar from "../components/SearchBar";
import Loading from '../components/LoadingComponent';

const Home = () => {
    const [searchPhrase, setSearchPhrase] = useState("");
    const [clicked, setClicked] = useState(false);
    const [Donors, setDonors] = useState();

  // get data from donors.js
    useEffect(() => {
        const getData = async () => {
        
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
                    data={Donors}
                    setClicked={setClicked}
                />
            )}
        </SafeAreaView>
    );
};

export default Home;

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