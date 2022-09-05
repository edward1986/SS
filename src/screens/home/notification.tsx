import * as React from 'react';
import {View, Text, FlatList, TouchableOpacity} from "react-native";
import {useDispatch} from "react-redux";
import BellIcon from "../../../assets/svg/bellIcon";
import {Bold} from "../../styles/fonts";



const Notifications = (props) => {
    const dispatch = useDispatch();

    const blogs = [
        {
            id: 1,
            title: "title",
            description: "article description"
        },
        {
            id: 2,
            title: "title",
            description: "article description"
        },
    ]

    const _renderItem =({item}) => {
        return   <View style={{paddingVertical: 12,}}>
            <TouchableOpacity onPress={()=>props.navigation.push('BlogItem')}>
                <View style={{backgroundColor: "#AFB8A7", height: 166,  borderRadius: 7}}>
                    <View style={{flex: 1, alignItems: "flex-end", justifyContent: "flex-end", padding: 12}}>
                        <Text style={{fontFamily: Bold, fontSize: 16}} >
                            {item.title}
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>

        </View>
    }

    return (
      <View style={{flex: 1, backgroundColor: "#E4E3DF"}}>
          <View style={{justifyContent: "center", alignItems: "center"}}>
              <BellIcon notification={false} width={(75)}
                        height={(81)}/>
              <Text style={{fontSize: 16, fontFamily: Bold}}>Blogs</Text>
          </View>
          <View style={{paddingHorizontal: 17, }}>

              <FlatList
                  data={blogs}
                  renderItem={_renderItem}
              />


          </View>



      </View>
    );
};

export default Notifications;
