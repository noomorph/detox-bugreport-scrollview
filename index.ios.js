/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Alert,
  AppRegistry,
  StyleSheet,
  Button,
  TextInput,
  ScrollView,
  View
} from 'react-native';

export default class ScrollViewBug extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.state = {
      text: '',
    };
  }
  onPress() {
    Alert.alert('You clicked!');
  }
  onChange(e) {
    this.setState({ text: e.value });
  }
  render() {
    return (
      <ScrollView testID="scrollContainer">
        <View testID="panel" style={styles.container}>
          <View style={styles.inputContainer}>
            <TextInput
                    testID="input"
                    value={this.state.text}
                    onChange={this.onChange}
                    editable={true}
                    maxLength={40}
                    placeholder="Focus and scroll from it"
                    style={styles.input}></TextInput>
          </View>
          <View style={styles.buttonContainer}>
            <Button
                    testID="btnClick"
                    onPress={this.onPress}
                    style={styles.button}
                    title="Click me"></Button>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#F5FCFF',
  },
  inputContainer: {
    paddingTop: 25,
    paddingBottom: 25,
  },
  buttonContainer: {
    paddingTop: 350,
    paddingBottom: 350,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 10,
    textAlign: 'center',
  },
  button: { },
});

AppRegistry.registerComponent('ScrollViewBug', () => ScrollViewBug);
