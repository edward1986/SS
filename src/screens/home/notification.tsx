import * as React from 'react';
import {View, Text, FlatList, TouchableOpacity} from "react-native";
import {RootStateOrAny, useDispatch, useSelector} from "react-redux";
import BellIcon from "../../../assets/svg/bellIcon";
import {Bold} from "../../styles/fonts";
import {useEffect, useMemo, useState} from "react";
import axios from "axios";
import {setCategories} from "../../reducers/category/actions";
import Toast from "react-native-toast-message";
import {BASE_URL} from "../../services/config";
import {setBlogs} from "../../reducers/blog/actions";
import ListEmptyComponent from "../../components/atoms/listEmpty";



const Notifications = (props) => {
    const dispatch = useDispatch();
    const token = useSelector((state: RootStateOrAny) => state.user?.token?.token);
    const blogs = useSelector((state: RootStateOrAny) => state.blog.blogs);
    const [page, setPage] = useState(1);
    const blogsMemo = useMemo(() => {
        return blogs
    }, [blogs])
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        return fetchCategories()
    }, [blogs.length == 0])
    const fetchCategories = () => {
        setLoading(true);
        axios.get(BASE_URL + "/api/blogs?page=" + page, {
            headers: {
                Authorization: "Bearer ".concat(token)
            }
        }).then((response) => {
            dispatch(setBlogs(response.data.data))
            setLoading(false);
            if (response.data.last_page != page) {
                setPage(page + 1);
            }
        }).catch((response) => {
            Toast.show({
                type: 'error',
                text1: response.message,
            })
        })
    }

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
          <View style={{paddingHorizontal: 17, flex: 1 }}>

              <FlatList
                  ListEmptyComponent={ListEmptyComponent}
                  data={blogsMemo}
                    contentContainerStyle={{flexGrow: 1}}
                  renderItem={_renderItem}
              />

          </View>



      </View>
    );
};

export default Notifications;
