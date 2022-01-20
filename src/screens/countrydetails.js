import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView
} from 'react-native';

import {setRegion, setCountries} from '../redux/action';
import {useDispatch, useSelector} from 'react-redux';
import {Header} from './header';

function CountryDetail({navigation, route}) {
  const dispatch = useDispatch();
  const {country, region} = route.params;
  

  const renderCountry = item => {
    return (
      <View style={[styles.countries, {backgroundColor: region.color}]}>
        <Image
          source={{uri: item.flags.png}}
          style={{height: 200, width: 200}}
        />
        <Text style={styles.text}>{item.name.official}</Text>
        <Text style={styles.text}>Capital : {JSON.stringify(item.capital)}</Text>
        <Text style={styles.text}>Country Code : {item.cioc}</Text>
        <Text style={styles.text}>Dialling Code : {item.idd.root}</Text>
        <Text style={styles.text}>Currencies : {JSON.stringify(item.currencies)}</Text>
        <Text style={styles.text}>Demonym : {JSON.stringify(item.demonyms)}</Text>
      </View>
    );
  };

  return (
    <ScrollView style={{flex: 1}}>
      <Header header={`${region.region} > ${country.name.official}`} backgroundColor={region.color}/>
      {renderCountry(country)}
    </ScrollView>
  );
}

export default CountryDetail;

const styles = StyleSheet.create({
  countries: {
    backgroundColor: '#F5EEDC',
    padding: 30,
    elevation: 10,
    margin: 14,
    alignItems: 'center'
  },
  text: {
    fontSize: 20,
    margin: 15,
    fontWeight: '700',
    color: '#072227',
  },
});
