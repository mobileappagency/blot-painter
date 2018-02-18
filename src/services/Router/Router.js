import { StackNavigator } from 'react-navigation';

import { WelcomeScene } from '@scenes';

export default Router = StackNavigator(
    {
      Main: {
        screen: WelcomeScene,
      }
    },
    {
      initialRouteName: 'Main',
    }
);

