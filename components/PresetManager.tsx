import React from "react";
import { StyleSheet, Text, View, ImageBackground, ActivityIndicator } from 'react-native';
import BasicBackground from "./BasicBackground";
import PresetPicker from "./PresetPicker";
import BasicText from "./BasicText";
import IconButton from "./IconButton";
import TitleSection from "./TitleSection";

export interface Props {

}

export interface State {

}

export default class PresetManager extends React.Component<Props, State> {

	constructor(props: Props) {
		super(props);
		this.state =
			{
			}
	}

	render() {
		return (
			<TitleSection
				title={"Preset"}
			>
					<PresetPicker />
					<IconButton style={{marginLeft:20}} size={20} source={require("../assets/icons/add.png")}/>
					<IconButton style={{ marginLeft: 20 }} size={20} source={require("../assets/icons/trash.png")} />

			</TitleSection>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		borderColor:"#4ecca3",
		borderWidth:1,
		padding:20,
		borderRadius:10,
		height:100,
		width:"100%",
		paddingTop:35
	},
	topText:
	{
		position:"absolute",
		top:10,
		left:20,
	},
	managerContainer:
	{
		flex:1,
		justifyContent:"flex-start",
		alignItems:"center",
		flexDirection:"row",
		width:"100%"
	}

});
