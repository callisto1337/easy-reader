import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import BookList from './components/BookList';
import * as DocumentPicker from 'expo-document-picker';

export default class App extends Component {
  state = {
    books: []
  };

  async findBook() {
    await DocumentPicker.getDocumentAsync()
      .then(result => {
        if (result.type === 'cancel') return;
        this.addBook(result);
      });
  };

  addBook(book) {
    this.setState({
      books: [
        ...this.state.books,
        {
          id: this.state.books.length,
          title: book.name,
          image: 'https://vignette.wikia.nocookie.net/memes2019/images/7/74/Rm1.jpg/revision/latest?cb=20181211202935&path-prefix=ru',
          uri: book.uri,
        }
      ]
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Мои книги</Text>
        <View style={styles.content}>
          <BookList books={this.state.books}/>
          <Button
            onPress={() => this.findBook()}
            title="Загрузить книгу"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 50,
    flex: 1,
  },
  content: {
    marginTop: 30,
    flex: 1,
  },
  title: {
    textAlign: 'center',
    fontSize: 30,
  },
});
