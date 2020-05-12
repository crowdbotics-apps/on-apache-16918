import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile44114Navigator from '../features/UserProfile44114/navigator';
import Maps44095Navigator from '../features/Maps44095/navigator';
import Settings44073Navigator from '../features/Settings44073/navigator';
import Settings44058Navigator from '../features/Settings44058/navigator';
import NotificationList44057Navigator from '../features/NotificationList44057/navigator';
import Maps44056Navigator from '../features/Maps44056/navigator';
import UserProfile44033Navigator from '../features/UserProfile44033/navigator';
import Maps44029Navigator from '../features/Maps44029/navigator';
import Add-Item44025Navigator from '../features/Add-Item44025/navigator';
import Maps44024Navigator from '../features/Maps44024/navigator';
import UserProfile43977Navigator from '../features/UserProfile43977/navigator';
import Maps43957Navigator from '../features/Maps43957/navigator';
import Settings43934Navigator from '../features/Settings43934/navigator';
import Settings43918Navigator from '../features/Settings43918/navigator';
import NotificationList43917Navigator from '../features/NotificationList43917/navigator';
import Maps43916Navigator from '../features/Maps43916/navigator';
import UserProfile43897Navigator from '../features/UserProfile43897/navigator';
import Maps43878Navigator from '../features/Maps43878/navigator';
import Settings43856Navigator from '../features/Settings43856/navigator';
import Settings43841Navigator from '../features/Settings43841/navigator';
import NotificationList43840Navigator from '../features/NotificationList43840/navigator';
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
UserProfile44114: { screen: UserProfile44114Navigator },
Maps44095: { screen: Maps44095Navigator },
Settings44073: { screen: Settings44073Navigator },
Settings44058: { screen: Settings44058Navigator },
NotificationList44057: { screen: NotificationList44057Navigator },
Maps44056: { screen: Maps44056Navigator },
UserProfile44033: { screen: UserProfile44033Navigator },
Maps44029: { screen: Maps44029Navigator },
Add-Item44025: { screen: Add-Item44025Navigator },
Maps44024: { screen: Maps44024Navigator },
UserProfile43977: { screen: UserProfile43977Navigator },
Maps43957: { screen: Maps43957Navigator },
Settings43934: { screen: Settings43934Navigator },
Settings43918: { screen: Settings43918Navigator },
NotificationList43917: { screen: NotificationList43917Navigator },
Maps43916: { screen: Maps43916Navigator },
UserProfile43897: { screen: UserProfile43897Navigator },
Maps43878: { screen: Maps43878Navigator },
Settings43856: { screen: Settings43856Navigator },
Settings43841: { screen: Settings43841Navigator },
NotificationList43840: { screen: NotificationList43840Navigator },
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
