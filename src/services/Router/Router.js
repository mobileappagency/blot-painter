import { StackNavigator } from 'react-navigation';

import { routes } from '@constants';
import { WelcomeScene, PainterScene } from '@scenes';

export default Router = StackNavigator(
    {
      Main: {
        screen: WelcomeScene,
      },
      Painter: {
        screen: PainterScene
      }
    },
    {
      initialRouteName: routes.Main,
    }
);