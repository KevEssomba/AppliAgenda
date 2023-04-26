import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabNavigator from "./BottomTabNavigator";
import { Account, Description } from "../pages";
import { NavigationContainer } from "@react-navigation/native";
import {Connexion} from "../pages";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {

    return (

        <Stack.Navigator>
            <Stack.Screen name="Root" component={BottomTabNavigator} options={{headerShown: false}} />
            <Stack.Group>
                <Stack.Screen name ="Description" component={Description} />
                <Stack.Screen name ="Connexion" component={Connexion} />
                <Stack.Screen name ="Compte" component={Account} />
            </Stack.Group>
        </Stack.Navigator>

    );

}

const Navigation = () => {

    return (
        <NavigationContainer>
            <RootNavigator/>
        </NavigationContainer>
    );


}

export default Navigation ;