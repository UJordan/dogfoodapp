import { useState } from "react";
import { UserContext } from "./UserContext";
import Main from "./screens/MainComponent";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
    const [userToken, setUserToken] = useState(null);
    return (
        <NavigationContainer>
            <UserContext.Provider
                value={{ userToken: userToken, setUserToken: setUserToken }}>
                <Main />
            </UserContext.Provider>
        </NavigationContainer>
    );
}
