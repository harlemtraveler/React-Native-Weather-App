import React, { Component } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

export default class SearchInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  }

  // Component Lifecycle - (property initializers used)
  handleChangeText = text => {
    this.setState({ text });
  };

  handleSubmitEditing = () => {
    const { onSubmit } = this.props;
    const { text } = this.state;

    if (!text) return;

    onSubmit(text);
    this.setState({ text: '' });
  };

  render() {
    // Destructured Objects
    const { placeholder } = this.props;
    const { text } = this.state;

    return (
      <View style={styles.container}>
        <TextInput
          autocorrect={ false }
          value={ text }
          placeholder={ placeholder }
          placeholderTextColor="white"
          underlineColorAndroid="transparent"
          style={ styles.textInput }
          clearButtonMode="always"
          onChangeText={ this.handleChangeText }
          onSubmitEditing={ this.handleSubmitEditing }
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
