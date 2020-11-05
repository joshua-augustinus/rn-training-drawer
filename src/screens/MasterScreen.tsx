import React from 'react';
import { Button, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { DrawerActions, NavigationDrawerProp } from 'react-navigation-drawer';

/**
 * https://reactnavigation.org/docs/4.x/typescript
 */
type Props = {
    navigation: NavigationDrawerProp<{ userId: string, routeName: string }>;
}

const MasterScreen = (props: Props) => {


    const onMenuPress = () => {
        console.log(props.navigation.state);// { key: 'Home', routeName: 'Home' }
        console.log("Menu pressed");
        props.navigation.dispatch(DrawerActions.toggleDrawer());
    }

    const onButtonPress = () => {
        props.navigation.navigate("Activity");
    }


    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ height: 50, backgroundColor: 'red', flexDirection: 'row', alignItems: 'center' }}>

                <TouchableOpacity style={{ backgroundColor: 'yellow' }}
                    onPress={() => onMenuPress()}>
                    <Text>Menu</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

                <Text>{props.navigation.state.routeName}</Text>
                <TextInput placeholder="Enter text here..."></TextInput>
                <Button title="Press me" onPress={() => onButtonPress()}></Button>
            </View>
        </SafeAreaView>

    );

}

MasterScreen.navigationOptions = {}

export { MasterScreen }