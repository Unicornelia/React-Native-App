import { Button, StyleSheet, TextInput, View } from 'react-native';

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder="Your goals for the day" />
        <Button title="Add Goal" />
      </View>
      <View style={styles.goalsContainer}>
        <TextInput placeholder="List of goals..." />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
    flex: 1,
    backgroundColor: '#ffb8d3',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textInput: {
    borderWidth: 1,
    color: '#505050',
    width: '80%',
    backgroundColor: '#fff',
    padding: 5,
    marginRight: 5,
  },
  goalsContainer: {
    paddingTop: 15,
  },
});
