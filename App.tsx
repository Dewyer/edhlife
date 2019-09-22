import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import MainScreen from './screens/MainScreen';
import { Provider, connect } from "react-redux";
import store from "./reducers/store";
import * as Font from 'expo-font';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { AppState } from './reducers';
import BasicBackground from './components/BasicBackground';
import LoadingScreen from './components/LoadinScreen';

var screens = {
	Main: MainScreen,
};
var AppNavigator = createAppContainer(createStackNavigator(screens, {
	initialRouteName: "Main",
	defaultNavigationOptions: { header: null }
}));

export interface Props
{
}

export interface State
{
	isLoaded:boolean

}

export default class App extends React.Component<Props, State> 
{
	state:State= {
		isLoaded:false
	}

	async componentDidMount()
	{
		await Font.loadAsync({
			"mono": require("./assets/fonts/cac.ttf"),
			"bold": require("./assets/fonts/Inconsolata-Bold.ttf"),
			"normal": require("./assets/fonts/Inconsolata-Regular.ttf")
			/*
			"mp": require("./assets/fonts/mplantin.ttf"),
			"mp-bold": require("./assets/fonts/mplanti1.ttf"),
			"mp-italic": require("./assets/fonts/mplantinit.ttf")
			*/
		});
		this.setState({isLoaded:true});
	}

	
	render() {
		const appContent = this.state.isLoaded ? <AppNavigator /> : <LoadingScreen />
		return (
			<Provider store={store}>
				{appContent}
			</Provider>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
