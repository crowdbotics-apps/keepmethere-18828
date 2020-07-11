import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Tutorial77258Navigator from '../features/Tutorial77258/navigator';
import NotificationList77230Navigator from '../features/NotificationList77230/navigator';
import Settings77229Navigator from '../features/Settings77229/navigator';
import Settings77221Navigator from '../features/Settings77221/navigator';
import UserProfile77219Navigator from '../features/UserProfile77219/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
Tutorial77258: { screen: Tutorial77258Navigator },
NotificationList77230: { screen: NotificationList77230Navigator },
Settings77229: { screen: Settings77229Navigator },
Settings77221: { screen: Settings77221Navigator },
UserProfile77219: { screen: UserProfile77219Navigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
