import * as React from 'react';
import {View} from "react-native";
import {useDispatch} from "react-redux";
import BellIcon from "../../../assets/svg/bellIcon";
import {useEffect} from "react";
import {setDrawerVisible} from "../../reducers/drawer/actions";



const Notifications = () => {
    const dispatch = useDispatch();
    return (
      <View>
          <View style={{justifyContent: "center", alignItems: "center"}}>
              <BellIcon notification={false} width={(75)}
                        height={(81)}/>
          </View>
      </View>
    );
};

export default Notifications;
