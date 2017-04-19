import { createRouter } from '@expo/ex-navigation';

import NotificationScreen from '../screens/NotificationScreen'

export default createRouter(() => ({
  notification: () => NotificationScreen
}));
