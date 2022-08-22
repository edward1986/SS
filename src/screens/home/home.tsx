import React, { useState, useCallback } from 'react';
import {SafeAreaView, StyleSheet, View, FlatList, Image, ScrollView} from 'react-native';
import { RootStateOrAny, useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setUser } from '../../reducers/user/actions'
import AwesomeAlert from 'react-native-awesome-alerts';
import { button, text } from '../../styles/color';
import CupertinoSearchBar from "../../components/atoms/cupertinoSearchBar/CupertinoSearchBar";
import CardWithTextOverImage from "../../components/atoms/card";
import Text from '../../components/atoms/text'
import {Bold} from "../../styles/fonts";
import data from "../../sample_data";
const styles = StyleSheet.create({
  container: {
    flex: 1,
backgroundColor: "#E4E3DF",
  },
  alertMessage: {
    textAlign: 'center',
    color: text.default,
  },
  contentStyle: {
    padding: 30,
  },
  actionContainerStyle: {
    justifyContent: 'space-around',
  },
  confirmButton: {
    paddingVertical: 10,
    paddingHorizontal: 40,
  },
  cancelButton: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderWidth: 1,
    borderColor: text.default,
  },
  confirmText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
  },
  cancelText: {
    color: text.default,
    fontSize: 14,
    fontWeight: '600',
  }
});

const Home = ({ navigation }:any) => {

  function listHeaderComponent() {
    return <View style={{justifyContent: "center",
      alignItems: "center", paddingBottom: 10}}>
      <Image
          source={require("../../../assets/logo.png")}
          style={{

            width: 120,
            height: 120,
          }}
          resizeMode="contain"
      />
      <Text size={16} style={{fontFamily: Bold}} weight={"600"}>Spare Square</Text>
    </View>
  }

  const cardOnPress = (item) => {
    return navigation.navigate('SubItems', item )
  };
  return (
    <View  style={[styles.container]}>



        <FlatList
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{paddingHorizontal:  10, paddingBottom: 20}}
            ListHeaderComponent={listHeaderComponent()}
            columnWrapperStyle={{ justifyContent: 'space-between' }}
            data={data.DATA}
            numColumns={2}
            renderItem={(props) => CardWithTextOverImage({item:props.item, onPress: cardOnPress})}
            keyExtractor={item => item.id}
        />


    </View>
  );
};

export default Home;
