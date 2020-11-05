import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { createAppContainer, SafeAreaView } from 'react-navigation';
import { NavigationStackProp } from 'react-navigation-stack';
import { BackContainer } from './comopnents/BackContainer';
import { createDrawerNavigator, DrawerActions } from 'react-navigation-drawer';

/**
 * https://reactnavigation.org/docs/4.x/typescript
 */
type Props = {
    navigation: NavigationStackProp<{ userId: string }>;
}

class HomeScreen extends React.Component<Props> {
    static navigationOptions = {}

    onMenuPress() {
        console.log("Menu pressed");
        this.props.navigation.dispatch(DrawerActions.toggleDrawer());
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
                    <TouchableOpacity onPress={() => { this.props.navigation.navigate("SecondScreen", { userId: '1234' }) }}>
                        <Text>Home Screen</Text>
                    </TouchableOpacity>

                </View>
            </SafeAreaView>

        );
    }
}

const SecondScreen = (props: Props) => {

    const userId = props.navigation.getParam('userId', 'defaultUserId');
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Text>{userId}</Text>
            <BackContainer navigation={props.navigation} />
        </SafeAreaView>
    )
}

const RootStack = createDrawerNavigator({
    Home: {
        screen: HomeScreen
    },
    SecondScreen: {
        screen: SecondScreen
    }
});
const AppContainer = createAppContainer(RootStack);

// Now AppContainer is the main component for React to render
export { AppContainer };