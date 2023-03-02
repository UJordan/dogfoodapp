import React, { useState, useEffect } from "react";
import { StyleSheet, SafeAreaView, FlatList, showModal, Modal, Button, Text, View  } from "react-native";
import { ListItem } from "react-native-elements";
import List from "../Component/List";
import SearchBar from "../Component/Searchbar";
import Loading from '../Component/LoadingComponent';


const RecipientPage = () => {
    const [searchPhrase, setSearchPhrase] = useState("");
    const [clicked, setClicked] = useState(false);
    const [donors, setdonors] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const [email, setEmail] = useState("");
    const [affilation, setAffilation] = useState("");
    const [thanks, setThanks] = useState("");

    const handlesubmit = () => {
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
            <Loading/>
        )
    }
}

export default RecipientPage;