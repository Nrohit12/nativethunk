import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';

import {setRegions, setCountries} from '../redux/action';
import {useDispatch, useSelector} from 'react-redux';
import {Header} from './header';

function Regions({navigation}) {
  const {regionData, loading} = useSelector(state => state.allRegions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setRegions());
  }, [dispatch]);

  const renderRegion = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Countries', {region: item});
        }}
        style={[styles.regions, {backgroundColor: item.color}]}>
        <Text style={{color: 'black', fontSize: 20}}>{item.region}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <Header header={'Regions'} backgroundColor={'#AB6D23'}/>

      {loading ? (
        <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      ) : (
        <FlatList data={regionData} renderItem={renderRegion} />
      )}
    </SafeAreaView>
  );
}

export default Regions;

const styles = StyleSheet.create({
  regions: {
    padding: 30,
    elevation: 10,
    margin: 14,
    alignItems: 'center',
  },
});
