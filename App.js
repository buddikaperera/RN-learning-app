import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
	return (
		<View style={styles.container}>
			<Welcome name="James" />
			<Welcome name="Paul" />
			<Welcome name="Paula" />
		</View>
	);
}

const Welcome = (props) => (
	<View>
		<Text>Hi {props.name}</Text>
	</View>
);

///flex box top left  flex: 1,backgroundColor: '#fff',
/// center left  flex: 1 /justifyContent: 'center'
///  bottom left flex: 1 /justifyContent: 'flex-end'

/// top right  flex: 1 //alignItems: 'flex-end',
///center right   flex: 1 /justifyContent: 'center' alignItems: 'flex-end',
///bottom right flex: 1 /justifyContent: 'flex-end' alignItems: 'flex-end',
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
