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
  const dispatch = useDispatch();
  const [showAlert, setShowAlert] = useState(false);
  const user = useSelector((state: RootStateOrAny) => state.user);
  const onLogout = useCallback(() => {
    onHide();
    dispatch(setUser({}));
    setTimeout(() => {
      navigation.replace('Login');
    }, 100);
  }, []);

  const onHide = () => setShowAlert(false)
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Steel',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Masonry',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Lumber',
    },{
      id: '58694a0f-3da1-471f-bd96-145571e29d12',
      title: 'Tilework',
    },{
      id: '58694a0f-3da1-471f-bd96-145571e29312',
      title: 'Plumbing',
    },{
      id: '58694a0f-3da1-471f-bd96-145571e29312',
      title: 'Glass',
    },
  ];

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

  return (
    <View  style={[styles.container]}>



        <FlatList
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{paddingHorizontal:  10, paddingBottom: 20}}
            ListHeaderComponent={listHeaderComponent()}
            columnWrapperStyle={{ justifyContent: 'space-between' }}
            data={DATA}
            numColumns={2}
            renderItem={CardWithTextOverImage}
            keyExtractor={item => item.id}
        />


      <AwesomeAlert
        show={showAlert}
        showProgress={false}
        titleStyle={styles.alertMessage}
        title={'Are you sure you would\nlike to log out?'}
        contentStyle={styles.contentStyle}
        closeOnTouchOutside={false}
        closeOnHardwareBackPress={false}
        showCancelButton={true}
        showConfirmButton={true}
        cancelText="Yes"
        confirmText="No"
        confirmButtonColor={'white'}
        cancelButtonColor={button.primary}
        confirmButtonStyle={styles.cancelButton}
        confirmButtonTextStyle={styles.cancelText}
        cancelButtonStyle={styles.confirmButton}
        cancelButtonTextStyle={styles.confirmText}
        actionContainerStyle={styles.actionContainerStyle}
        onCancelPressed={onLogout}
        onConfirmPressed={onHide}
      />
    </View>
  );
};

export default Home;
