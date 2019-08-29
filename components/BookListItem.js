import React, {Component} from "react";
import {Alert, Image, StyleSheet, Text, View, TouchableHighlight} from "react-native";

export default class extends Component {
  openBook(){
    Alert.alert(
      'Открываем книгу',
      'Но позже...',
    )
  };

  render() {
    return (
      <TouchableHighlight
        onPress={this.openBook}
        underlayColor="white"
      >
        <View style={styles.item}>
          <Image
            source={{uri: this.props.data.image}}
            style={{width: 100, height: 100}}
          />
          <View style={styles.container}>
            <Text style={styles.title}>
              {this.props.data.title}
            </Text>
            <Text style={styles.author}>
              {this.props.data.author}
            </Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    display: 'flex',
    flexDirection: 'row',
  },
  container: {
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  title: {
    fontSize: 20,
  },
  author: {
    marginTop: 10,
    fontStyle: 'italic',
    fontSize: 16,
  },
});