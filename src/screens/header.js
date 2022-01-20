import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {IconButton} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native'

export const Header = ({header, backgroundColor}) => {
  const navigation = useNavigation()
  return (
    <View style={[styles.container, {backgroundColor: backgroundColor}]}>
      {header === 'Regions' ? null : <IconButton
                color="black"
                icon={require('../assets/back.png')}
                style={{width: 24, height: 24, marginRight: 20}}
                onPress={() => navigation.goBack()}
              />}
      <Text style={styles.text}>{header}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 30,
    elevation: 10,
    flexDirection: 'row', 
    flexWrap: 'wrap'
  },
  text: {
    color: 'black',
    elevation: 10,
    fontWeight: '900',
    fontSize: 25
  },
});
