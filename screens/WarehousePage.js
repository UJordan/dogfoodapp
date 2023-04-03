import React, { useState, useEffect } from "react";
import { StyleSheet, Modal, TouchableOpacity, Text, View } from "react-native";
import { Card } from "react-native-elements";
import List from "../Component/List";
import SearchBarComponent from "../Component/Searchbar";
import Loading from "../Component/LoadingComponent";
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
            <View style={{ alignItems: "center" }}>
                <Text style={styles.item}>No data found</Text>
            </View>
        );
    };

    const toggleModal = (food) => {
        setShowFood(!showFood);
        setFood(food);
    };

    const handleFoodModal = () => {
        setShowNewFood(!showNewFood);
        console.log({ showNewFood });
    };

    const addNewFood = (newFood) => {
        setFoods([...foods, newFood]);
        setShowNewFood(false); // hide the modal
    };

    const renderFoodList = ({ item }) => {
        return (
            <Card>
                <View>
                    <TouchableOpacity onPress={() => toggleModal(item)}>
                        <Text>
                            {item.name} - {item.type} - {item.flavor}
                        </Text>
                    </TouchableOpacity>
                </View>
            </Card>
        );
    };

    return (
        <View style={{ flex: 1 }}>
            <FoodModal
                setModalState={handleFoodModal}
                modalState={showNewFood}
                setFoods={setFoods}
                foods={foods}
            />
            <View style={{ fontSize: 20, margin: 25 }}>
                <CustomButton
                    onPress={() => handleFoodModal()}
                    title="Add New Food"
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
            <HeaderTitle style={styles.root}>List of Foods</HeaderTitle>
            {!foods ? (
                <Loading />
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
                onRequestClose={toggleModal}>
                <View>
                    <Card.Title style={styles.modaltitle}>
                        Food Information
                    </Card.Title>
                    <Card>
                        <Text style={styles.modaltext}>
                            Brand:{" "}
                            <Text style={styles.foodId}>{food.name}</Text>
                        </Text>
                    </Card>
                    <Card>
                        <Text style={styles.modaltext}>
                            Type: <Text style={styles.foodId}>{food.type}</Text>
                        </Text>
                    </Card>
                    <Card>
                        <Text style={styles.modaltext}>
                            Flavor:{" "}
                            <Text style={styles.foodId}>{food.flavor}</Text>
                        </Text>
                    </Card>
                    <Card>
                        <Text style={styles.modaltext}>
                            Quantity:{" "}
                            <Text style={styles.foodId}>{food.quantity}</Text>
                        </Text>
                    </Card>
                    <Card>
                        <Text style={styles.modaltext}>
                            Aisle:{" "}
                            <Text style={styles.foodId}>{food.aisle}</Text>
                        </Text>
                    </Card>
                    <Card>
                        <Text style={styles.modaltext}>
                            Bin: <Text style={styles.foodId}>{food.bin}</Text>
                        </Text>
                    </Card>
                    <Card>
                        <Text style={styles.modaltext}>
                            Date Received:{" "}
                            <Text style={styles.foodId}>{food.date}</Text>
                        </Text>
                    </Card>
                    <Card>
                        <Text style={styles.modaltext}>
                            Food ID:{" "}
                            <Text style={styles.foodId}>{food.id}</Text>
                        </Text>
                    </Card>
                    <Card.Divider />
                    <View style={{ fontSize: 20, margin: 25 }}>
                        <CustomButton
                            onPress={() => setShowFood(!showFood)}
                            title="cancel"
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
        padding: 10,
    },
    title: {
        width: "100%",
        marginTop: 20,
        fontSize: 25,
        fontWeight: "bold",
        marginLeft: "10%",
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
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
        fontWeight: "normal",
        color: "black",
    },
});

export default WarehousePage;
