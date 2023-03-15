import React from "react";
import { StyleSheet, TextInput, View, Keyboard, Button } from "react-native";
import { Feather, Entypo } from "@expo/vector-icons";


const SearchBar = ({clicked, searchPhrase, setSearchPhrase, setClicked}) => {
    return (
        <View style={styles.container}>
        <View
            style={
            clicked
                ? styles.searchBar__clicked
                : styles.searchBar__unclicked
            }
        >
            <Feather
                name="search"
                size={20}
                color="black"
                style={{ marginLeft: 1 }}
            />
            <TextInput
                style={styles.input}
                placeholder="Search"
                value={searchPhrase}
                onChangeText={setSearchPhrase}
                onFocus={() => {
                    setClicked(true);
                }}
            />
            {clicked && (
            <Entypo name="cross" size={20} color="black" style={{ padding: 1 }} onPress={() => {
                setSearchPhrase("")
            }}/>
            )}
        </View>
            {clicked && (
                <View style={styles.button}>
                    <Button
                        title="Cancel"
                        onPress={() => {
                        Keyboard.dismiss();
                        setClicked(false);
                        setSearchPhrase("")
                        }}
                    ></Button>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        margin: 15,
        justifyContent: "center",
        alignSelf: "center",
        flexDirection: "row",
        width: "90%",
        paddingTop: 10
    },
    searchBar__unclicked: {
        padding: 10,
        flexDirection: "row",
        width: "95%",
        backgroundColor: "#d9dbda",
        borderRadius: 15,
        alignItems: "center",
    },
    searchBar__clicked: {
        padding: 10,
        flexDirection: "row",
        width: "80%",
        backgroundColor: "#d9dbda",
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "space-evenly",
    },
    input: {
        fontSize: 20,
        marginLeft: 10,
        width: "90%",
    },
    button: {
        backgroundColor: '#5637DD'
    }
});

export default SearchBar;
