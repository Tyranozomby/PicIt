import {Text, View} from "react-native";
import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Home} from "./Home";
import {GroupList} from "./GroupList";
import {Settings} from "./Settings";


type MainTabParamList =  {
    Home: undefined,
    GroupList: undefined,
    Settings: undefined
}

const TabNavigator = createBottomTabNavigator<MainTabParamList>();

export const Main : React.FC = () => {


    return (
        <TabNavigator.Navigator>
            <TabNavigator.Screen name={"Home"} component={Home}/>
            <TabNavigator.Screen name={"GroupList"} component={GroupList}/>
            <TabNavigator.Screen name={"Settings"} component={Settings}/>
        </TabNavigator.Navigator>
    );
};
