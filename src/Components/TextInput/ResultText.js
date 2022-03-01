
import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

export default function ResultText(props){
    
    return(
		<TextInput
			disable
        	style={styles.textInput}
			value={props.result}
		/>);
}



const styles = StyleSheet.create({
	textInput: {
		backgroundColor: '#FFF',
		color: '#000',
		borderRadius: 10,
		margin: 15,
		padding: 10,
		borderColor: '#000',
		borderWidth: 1 
	},
});