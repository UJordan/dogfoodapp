import { useEffect } from "react";
import { AccessibilityInfo } from 'react-native';

const useAccessibilityHelper = (setIsFocused) => {
    useEffect(() => {
        const focusListener = AccessibilityInfo.addEventListener(
            'focusChanged',
            event => setIsFocused(event.focused),
        );

        return () => {
            focusListener.remove();
        };
    }, []);
};

export default useAccessibilityHelper;
