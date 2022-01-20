import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import {SearchBar} from 'react-native-elements';
import {setCountries} from '../redux/action';
import {useDispatch, useSelector} from 'react-redux';
import {Header} from './header';

function Countries({navigation, route}) {
  const {countryData, loading} = useSelector(state => state.allCountries);
  const dispatch = useDispatch();
  const region = route.params.region;

  const renderCountry = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Countrydetails', {
            country: item,
            region: region,
          });
        }}
        style={[styles.countries, {backgroundColor: region.color}]}>
        <Image
          source={{uri: item.flags.png}}
          style={{height: 200, width: 200}}
        />
        <Text style={styles.text}>{item.name.official}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <Header header={`${region.region} > Countries`} backgroundColor={region.color}/>
      <TouchableOpacity
        onPress={() => navigation.navigate('Search', {data: countryData, region: region})}
        style={{backgroundColor: '#99A799', padding: 15, margin: 15}}>
        <Text>Search...</Text>
      </TouchableOpacity>
      {loading ? (
        <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      ) : (
        <FlatList data={countryData} renderItem={renderCountry} />
      )}
    </SafeAreaView>
  );
}

export default Countries;

const styles = StyleSheet.create({
  countries: {
    backgroundColor: '#F5EEDC',
    padding: 30,
    elevation: 10,
    margin: 14,
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    margin: 15,
    fontWeight: '700',
    color: '#072227',
  },
});
