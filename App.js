import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import IndexScreen from './src/screen/indexScreen';
import { Provider } from './src/context/BlogContext';

const navigator = createStackNavigator({
  index: IndexScreen,

},
{
  initialRouteName:'index',
  defaultNavigationOption:{
    title:'Blog', 
  }

})

const App = createAppContainer(navigator)


export default() => {
  return <Provider>
          <App/>
          </Provider>

}