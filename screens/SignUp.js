import { StyleSheet, TextInput, View } from 'react-native';
import Text from '@kaloraat/react-native-text';
import React from 'react';

const SignUp = () => {
	return (
		<View>
			<Text large center>
				SignUp
			</Text>

			<View style={{ marginHorizontal: 25 }}>
				<Text semi color="#ff2222">
					Name
				</Text>
				<TextInput
					style={{
						borderBottomWidth: 0.5,
						height: 48,
						borderBottomColor: '#8e93a1',
						marginBottom: 30,
					}}
				/>
			</View>
		</View>
	);
};

export default SignUp;

const styles = StyleSheet.create({});
