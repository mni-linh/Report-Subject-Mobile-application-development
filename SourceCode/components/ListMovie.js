import React, { Component } from 'react';
import {
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button
} from 'react-native';
import api from '../api';

export default class ListMovie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataSource: []
    };
  }

  // static navigationOptions = {
  //   title: 'MOVIES APP',
  //   headerStyle: {
  //     backgroundColor: '#F15F66',
  //   },
  //   headerTintColor: '#fff',
  //   headerTitleStyle: {
  //     fontWeight: 'bold',
  //   }
  // };

  componentDidMount() {
    api.getAll().then((data) => this.setState({ dataSource: data }));
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Movie Explorer</Text>
        <TextInput
          style={styles.searchbox}
          placeholder="Search a Movie..."
          onChangeText={(text) => {
            api.search(text).then((data) => this.setState({dataSource:data}))
          }}
        />
        <FlatList
          style={styles.ul}
          data={this.state.dataSource}
          enableEmptySections={true}
          renderItem={({item}) => {
            //console.log(item)
            return (
              <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('Detail', {
                  imdbID: item.imdbID,
                  }
                )}
              }>
              <View style={styles.row}>
                <View style={{ flex: 6 }}>
              
                  <Image
                    style={styles.image}
                    source={{ uri: item.Poster }}
                  />
                </View>
                <View style={{ flex: 10, padding: 10, alignSelf:'center' }}>
                  <Text style={styles.name}>
                    {item.Title} ({item.Year})
                  </Text>
                </View>
                <View style={{flex: 1, alignSelf: 'center'}}>
                  <TouchableOpacity style={{color: '#FFF', fontSize: 18, paddingLeft: 10}} onPress={() => {
                this.props.navigation.navigate('Detail', {
                  imdbID: item.imdbID,
                  }
                )}
              }><Text>{'>'}</Text>  </TouchableOpacity>
                </View>
                <View style={{ flex: 1, justifyContent: 'center' }}>
                  <Text style={styles.title}></Text>
                </View>
              </View>
            </TouchableOpacity>
            );
          }}
          keyExtractor={(item, index) => index.toString()}
          ItemSeperatorComponent={(
            sectionID,
            rowID,
            adjacentRowHighlighted
          ) => (
            <View
              key={rowID}
              style={{ height: 1, backgroundColor: 'lightgray' }}
            />
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#223343',
    // backgroundColor: '#223343', 316879  f47a60
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  title: {
    color: '#FFF',
    fontSize: 32,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 20,
    textShadowColor: 'white',
  },
  searchbox: {
    fontSize: 20,
    fontWeight: '300',
    padding: 10,
    width: '100%',
    backgroundColor: '#FFF',
    borderRadius: 8,
    marginBottom: 40,
  },
  ul: {
    // padding: 10,
    // marginBottom: 10,
    flex: 1
  },
  row: {
    flexDirection: 'row',
    height: 100,
    marginBottom: 10,
    marginTop: 10,
  },
  image: {
    height: 100,
  },
  name: {
    fontSize: 20,
    color: '#FFF',
  },
});
