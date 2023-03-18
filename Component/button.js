import React, {useState} from 'react';
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import useAccessibilityHelper from '../utils/accessibility.js';

const CustomButton = ({onPress, title}) => {
    const [isFocused, setIsFocused] = useState(false);

    useAccessibilityHelper(setIsFocused);

    return (
        <TouchableOpacity 
            onPress={onPress} 
            style={styles.appButtonContainer}
            accessible={true}
            accessibilityRole="button"
            accessibilityLabel={`Tap me to go to the ${title} Page`}
            value={isFocused}
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
        fontSize: 20, 
        margin: 10
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
