import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import GalleryScreen from '../screens/GalleryScreen'
import PhotoScreen from '../screens/PhotoScreen'

const AppNavigator = createStackNavigator({
    Gallery: {
        screen: GalleryScreen,
        navigationOptions: {
            title: 'Gallery'
        }
    },
    Photo: {
        screen: PhotoScreen,
        navigationOptions: ({ navigation }) => ({
            title: navigation.getParam('photo').author
        })
    }
})


export default createAppContainer(AppNavigator)