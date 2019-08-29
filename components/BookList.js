import React, {Component} from "react";
import {FlatList, StyleSheet, View} from "react-native";
import BookListItem from "./BookListItem";

export default class extends Component {
  render() {
    return (
      <FlatList
        data={this.props.books}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => (
          <View>
            <BookListItem
              data={item}
            />
          </View>
        )}
      />
    )
  }
}