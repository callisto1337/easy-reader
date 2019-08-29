import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, Alert} from 'react-native';
import BookList from './components/BookList';

export default class App extends Component {
  state = {
    books: [
      {
        id: 0,
        title: 'Война и Мир',
        image: 'https://vignette.wikia.nocookie.net/memes2019/images/7/74/Rm1.jpg/revision/latest?cb=20181211202935&path-prefix=ru',
        author: 'Лев Николаевич Толстой',
      },
      {
        id: 1,
        title: 'Зелёная миля',
        image: 'https://vignette.wikia.nocookie.net/memes2019/images/7/74/Rm1.jpg/revision/latest?cb=20181211202935&path-prefix=ru',
        author: 'Лев Николаевич Толстой',
      },
      {
        id: 2,
        title: 'Война и Мир',
        image: 'https://vignette.wikia.nocookie.net/memes2019/images/7/74/Rm1.jpg/revision/latest?cb=20181211202935&path-prefix=ru',
        author: 'Лев Николаевич Толстой',
      },
      {
        id: 3,
        title: 'Война и Мир',
        image: 'https://vignette.wikia.nocookie.net/memes2019/images/7/74/Rm1.jpg/revision/latest?cb=20181211202935&path-prefix=ru',
        author: 'Лев Николаевич Толстой',
      },
      {
        id: 4,
        title: 'Война и Мир',
        image: 'https://vignette.wikia.nocookie.net/memes2019/images/7/74/Rm1.jpg/revision/latest?cb=20181211202935&path-prefix=ru',
        author: 'Лев Николаевич Толстой',
      },
      {
        id: 5,
        title: 'Война и Мир',
        image: 'https://vignette.wikia.nocookie.net/memes2019/images/7/74/Rm1.jpg/revision/latest?cb=20181211202935&path-prefix=ru',
        author: 'Лев Николаевич Толстой',
      },
      {
        id: 6,
        title: 'Война и Мир',
        image: 'https://vignette.wikia.nocookie.net/memes2019/images/7/74/Rm1.jpg/revision/latest?cb=20181211202935&path-prefix=ru',
        author: 'Лев Николаевич Толстой',
      },
      {
        id: 7,
        title: 'Война и Мир',
        image: 'https://vignette.wikia.nocookie.net/memes2019/images/7/74/Rm1.jpg/revision/latest?cb=20181211202935&path-prefix=ru',
        author: 'Лев Николаевич Толстой',
      },
    ]
  };

  loadBook() {
    Alert.alert(
      'Загрузить книгу',
      'Но не сейчас...',
    )
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Мои книги</Text>
        <View style={styles.content}>
          <BookList books={this.state.books}/>
          <Button
            style={styles.button}
            onPress={this.loadBook}
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
  button: {
    backgroundColor: '#000000',
  }
});
