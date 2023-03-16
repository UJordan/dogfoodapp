import React, { useState, useEffect } from "react";
import { StyleSheet, FlatList, Icon, Modal, TouchableOpacity,Text, View  } from "react-native";
import { Card } from "react-native-elements";
import List from "../Component/List";
import SearchBarComponent from "../Component/Searchbar";
import Loading from '../Component/LoadingComponent';
import { FOOD } from "../shared/food";
import { HeaderTitle } from "@react-navigation/stack";
import FoodModal from "../Component/FoodModal";
import CustomButton from "../Component/button";


const WarehousePage = () => {
    const [searchPhrase, setSearchPhrase] = useState("");
    const [clicked, setClicked] = useState(false);
    const [foods, setFoods] = useState([]);
    const [showFood, setShowFood] = useState(false);
    const [food, setFood] = useState({});
    const [showNewFood, setShowNewFood] = useState(false);

    useEffect(() => {
        setFoods(FOOD);
    }, []);

    const myListEmpty = () => {
        return (
            <View style={{ alignItems:"center" }}>
            <Text style={styles.item}>No data found</Text>
            </View>
        );
    };

    const toggleModal = (food) => {
        setShowFood(!showFood);
        setFood(food)
    };

    const handleFoodModal = () => {
        setShowNewFood(!showNewFood);
        console.log({showNewFood})
    };

    const addNewFood = (newFood) => {
        setFoods([...food, newFood]);
        setShowNewFood(false); // hide the modal
    };

    const renderFoodList = ({ item }) => {
        return (
            <Card>
                <View>
                    <TouchableOpacity onPress={() => toggleModal(item)}>
                        <Text>{item.brand} - {item.type} - {item.flavor}</Text>
                    </TouchableOpacity>
                </View>
            </Card>   
        )
    };

    return (
        <View>
            <FoodModal 
                setModalState={handleFoodModal}
                modalState={showNewFood}
                setFoods={setFoods}
                foods={foods}
            />
            <View style={{ fontSize: 20, margin: 25 }}>
                <CustomButton 
                    onPress={() => handleFoodModal()}
                    title='Add New Food'
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
            <HeaderTitle style={styles.root}>List of Food</HeaderTitle>
            {!foods ? (
                <Loading/>
            ) : (
                <List
                    searchPhrase={searchPhrase}
                    data={foods}
                    setClicked={setClicked}
                    renderItem={renderFoodList}
                    keyExtractor={(item) => item.id.toString()}
                />
            )}
            <Modal
                visible={showFood}
                onRequestClose={toggleModal}
                >
                <View>
                    <Card.Title style={styles.modaltitle}>Food Information</Card.Title>
                    <Card>
                        <Text style={styles.modaltext}>Name: <Text style={styles.foodId}>{food.name}</Text></Text>
                    </Card>
                    <Card>
                        <Text style={styles.modaltext}>Phone Number: <Text style={styles.foodId}>{food.phoneNumber}</Text></Text>
                    </Card>
                    <Card>
                        <Text style={styles.modaltext}>Email: <Text style={styles.foodId}>{food.email}</Text></Text>
                    </Card>
                    <Card>
                        <Text style={styles.modaltext}>Affiliation: <Text style={styles.foodId}>{food.withACompany}</Text></Text>
                    </Card>
                    <Card>
                        <Text style={styles.modaltext}>Thanked? <Text style={styles.foodId}>{food.thanks}</Text></Text>
                    </Card>
                    <Card>
                        <Text style={styles.modaltext}>Donor ID: <Text style={styles.foodId}>{food.id}</Text></Text>
                    </Card>
                    <Card.Divider />
                    <View style={{ fontSize: 20, margin: 25 }}>
                        <CustomButton 
                            onPress={() =>setShowFood(!showFood)}
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
    foodId: {
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

export default WarehousePage;