
import React, {Component} from 'react';
import { View, Text , StatusBar } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import ListMovie from './components/ListMovie';
import DetailMovie from './components/DetailMovie';
import { TouchableOpacity } from 'react-native-gesture-handler';


const AppNavigator = createStackNavigator({
    List: {
        screen: ListMovie
    },
    Detail: {
        screen: DetailMovie
    }

}, {
    initialRouteName: 'List', 
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: '#F15F66'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold'
        }
    }
});

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <StatusBar backgroundColor={'darkred'} 
                            barStyle={'light-content'}/>
                            
                <AppContainer />
            </View>
        );
    }
}
