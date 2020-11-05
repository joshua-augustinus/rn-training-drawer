import React from 'react';
import { Button, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { createAppContainer, SafeAreaView } from 'react-navigation';
import { BackContainer } from './components/BackContainer';
import { createDrawerNavigator, DrawerActions, NavigationDrawerProp } from 'react-navigation-drawer';
import { ActivityScreen } from './screens/ActivityScreen';

/**
 * https://reactnavigation.org/docs/4.x/typescript
 */
type Props = {
    navigation: NavigationDrawerProp<{ userId: string, routeName: string }>;
}

class HomeScreen extends React.Component<Props> {
    static navigationOptions = {}

    onMenuPress() {
        console.log(this.props.navigation.state);// { key: 'Home', routeName: 'Home' }
        console.log("Menu pressed");
        this.props.navigation.dispatch(DrawerActions.toggleDrawer());
    }

    onButtonPress() {
        this.props.navigation.navigate("Activity");
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ height: 50, backgroundColor: 'red', flexDirection: 'row', alignItems: 'center' }}>

                    <TouchableOpacity style={{ backgroundColor: 'yellow' }}
                        onPress={() => this.onMenuPress()}>
                        <Text>Menu</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

                    <Text>{this.props.navigation.state.routeName}</Text>
                    <TextInput placeholder="Enter text here..."></TextInput>
                    <Button title="Press me" onPress={() => this.onMenuPress()}></Button>
                </View>
            </SafeAreaView>

        );
    }
}


const RootStack = createDrawerNavigator({
    Home: {
        screen: HomeScreen
    },
    SecondScreen: {
        screen: HomeScreen
    },
    Activity: {
        screen: ActivityScreen
    }
});
const AppContainer = createAppContainer(RootStack);

// Now AppContainer is the main component for React to render
export { AppContainer };