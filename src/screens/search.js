import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {IconButton} from 'react-native-paper';
function Search({route, navigation}) {
  const {data, region} = route.params;
  const [search, setSearch] = React.useState([]);
  const [text, onChangeText] = React.useState('');

  const setSearchArray = text => {
    const searchArray = data.filter(item => {
      return item.name.official.toLowerCase().indexOf(text.toLowerCase()) > -1;
    });
    setSearch(searchArray);
  };

  const renderItems = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Countrydetails', {
            country: item,
            region: region,
          });
        }}
        style={[styles.countries, {backgroundColor: region.color}]}>
        
        <Text style={styles.text}>{item.name.official}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView  style={{flex:1}}>
      <View style={[styles.container, {backgroundColor: region.color}]}>
        <IconButton
          color="black"
          icon={require('../assets/back.png')}
          style={{width: 24, height: 24, marginRight: 20}}
          onPress={() => navigation.goBack()}
        />
        <TextInput
          style={styles.input}
          onChangeText={text => setSearchArray(text)}
          placeholder="Search Countries Official Names"
        />
      </View>
      <FlatList data={search} renderItem={renderItems} />
    </SafeAreaView>
  );
}

export default Search;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ECB390',
    padding: 10,
    elevation: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  text: {
    color: 'white',
    elevation: 10,
    fontWeight: '400',
    fontSize: 15,
  },
  input: {
    padding: 10,
  },
  countries: {
    padding: 5,
    elevation: 2,
    margin: 5,
  },
});
