import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const CustomButton = ({onPress, title}) => {
    return (
        <TouchableOpacity 
            onPress={onPress} 
            style={styles.appButtonContainer}
        >
            <Text style={styles.appButtonText}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    appButtonContainer: {
        elevation: 8,
        backgroundColor: '#5637DD',
        borderRadius: 10,
        paddingVertical: 10,
    },
    appButtonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    }
});

export default CustomButton;
