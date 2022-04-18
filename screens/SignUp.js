import { StyleSheet, TextInput, View } from 'react-native';
import Text from '@kaloraat/react-native-text';
import React from 'react';
import UserInput from '../components/auth/UserInput';

const SignUp = () => {
	return (
		<View>
			<Text large center>
				Sign Up
			</Text>

			<UserInput name="Name" />
			<UserInput name="E-mail" />
			<UserInput name="Password" />
		</View>
	);
};

export default SignUp;

const styles = StyleSheet.create({});
