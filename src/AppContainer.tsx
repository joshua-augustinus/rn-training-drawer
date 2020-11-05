import { createAppContainer, SafeAreaView } from 'react-navigation';
import { createDrawerNavigator, DrawerActions, NavigationDrawerProp } from 'react-navigation-drawer';
import { ActivityScreen } from './screens/ActivityScreen';
import { MasterScreen } from './screens/MasterScreen';




const RootStack = createDrawerNavigator({
    Home: {
        screen: MasterScreen
    },
    SecondScreen: {
        screen: MasterScreen
    },
    Activity: {
        screen: ActivityScreen
    }
});
const AppContainer = createAppContainer(RootStack);

// Now AppContainer is the main component for React to render
export { AppContainer };