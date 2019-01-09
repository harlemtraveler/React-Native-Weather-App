import React, { Component } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

export default class SearchInput extends Component {

  render() {
    const { placeholder } = this.props;
    return (
      <View style={styles.container}>
        <TextInput
          autocorrect={ false }
          placeholder={ placeholder }
          placeholderTextColor="white"
          underlineColorAndroid="transparent"
          style={ styles.textInput }
          clearButtonMode="always"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    width: 300, // Book doesn't include width
    marginTop: 20,
    backgroundColor: '#666',
    marginHorizontal: 20, // Book has value of 20
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  textInput: {
    flex: 1,
    color: 'white',
  },
});