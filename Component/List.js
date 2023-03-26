import React from "react";
import { StyleSheet, Text, View, FlatList, SafeAreaView } from "react-native";

const Item = ({ name, brand }) => (
    <View style={styles.item}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.details}>{brand}</Text>
    </View>
);

const List = ({ searchPhrase, setClicked, data, renderItem, keyExtractor }) => {
    const defaultRenderItem = ({ item }) => {
        return (
            <Item
                name={item.name}
                brand={item.brand}
            />
        );
    };

    const filterData = data.filter((item) => {
        if (searchPhrase === "") {
            return true;
        }
        if (
            item.name
                .toUpperCase()
                .includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ""))
        ) {
            return true;
        }
    });

    const defaultKeyExtractor = (item) => item.id;

    return (
        <SafeAreaView style={styles.list__container}>
            <View
                onStartShouldSetResponder={() => {
                    setClicked(false);
                }}>
                <FlatList
                    // data={data}
                    data={filterData.length > 0 ? filterData : data}
                    renderItem={renderItem || defaultRenderItem}
                    keyExtractor={keyExtractor || defaultKeyExtractor}
                    vertical
                    style={styles.list__container}
                />
            </View>
        </SafeAreaView>
    );
};

export default List;

const styles = StyleSheet.create({
    list__container: {
        margin: 10,
        height: "100%",
        alignItem: "center",
        width: "85%",
        flexGrow: 1,
    },
    item: {
        margin: 30,
        borderBottomWidth: 2,
        borderBottomColor: "lightgrey",
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 5,
        fontStyle: "italic",
    },
});
