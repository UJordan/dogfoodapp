import { useState, useEffect } from "react";
import { AccessibilityInfo, StyleSheet } from 'react-native';

const AccessibilityHelper = () => {
    const [isHighContrastEnabled, setIsHighContrastEnabled] = useState(false);

    useEffect(() => {
        const highContrastListener = AccessibilityInfo.addEventListener(
        'reduceMotionChanged',
        event => setIsHighContrastEnabled(event.reduceMotionEnabled),
        );

        return () => {
        highContrastListener.remove();
        };
    }, []);

    const styles = StyleSheet.create({
        container: {
            backgroundColor: isHighContrastEnabled ? '#000000' : '#FFFFFF',
            color: isHighContrastEnabled ? '#FFFFFF' : '#000000',
            fontSize: isHighContrastEnabled ? 18 : 16,
            // add more accessibility styles here...
        },
    });

    return null;
};

export default AccessibilityHelper;
