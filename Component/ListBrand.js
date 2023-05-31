import React from "react";
import { StyleSheet, Text, View, FlatList, SafeAreaView } from "react-native";

const Item = ({ name, brand }) => (
    <View style={styles.item}>
        <Text style={styles.details}>{brand}</Text>
    </View>
);

const ListBrand = ({
    searchPhrase,
    setClicked,
    data,
    renderBrand,
    keyExtractor,
}) => {
    const defaultRenderBrand = ({ item }) => {
        return <Item brand={item.brand} />;
    };

    const filterData = data.filter((item) => {
        if (searchPhrase === "") {
            return true;
        }
        if (
            item.brand
                .toUpperCase()
                .includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ""))
        ) {
            return true;
        }
    });

    const defaultKeyExtractor = (item) => item.id;

    return (
        <SafeAreaView
            style={styles.list__container}
            onStartShouldSetResponder={() => {
                setClicked(false);
            }}>
            <FlatList
                data={filterData.length > 0 ? filterData : data}
                renderItem={renderBrand || defaultRenderBrand}
                keyExtractor={keyExtractor || defaultKeyExtractor}
            />
        </SafeAreaView>
    );
};

export default ListBrand;

const styles = StyleSheet.create({
    list__container: {
        flex: 1,
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
        alignItem: "center",
    },
});
