import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps43839Navigator from '../features/Maps43839/navigator';
import UserProfile43832Navigator from '../features/UserProfile43832/navigator';
import Maps43813Navigator from '../features/Maps43813/navigator';
import Settings43791Navigator from '../features/Settings43791/navigator';
import Settings43776Navigator from '../features/Settings43776/navigator';
import NotificationList43775Navigator from '../features/NotificationList43775/navigator';
import Maps43774Navigator from '../features/Maps43774/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
Maps43839: { screen: Maps43839Navigator },
UserProfile43832: { screen: UserProfile43832Navigator },
Maps43813: { screen: Maps43813Navigator },
Settings43791: { screen: Settings43791Navigator },
Settings43776: { screen: Settings43776Navigator },
NotificationList43775: { screen: NotificationList43775Navigator },
Maps43774: { screen: Maps43774Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

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
