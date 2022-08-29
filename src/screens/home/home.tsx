import React, {useEffect, useMemo, useState} from 'react';
import {FlatList, Image, StyleSheet, View} from 'react-native';
import {RootStateOrAny, useDispatch, useSelector} from 'react-redux';
import {text} from '../../styles/color';
import CardWithTextOverImage from "../../components/atoms/card";
import axios from "axios";
import {BASE_URL} from "../../services/config";
import {setCategories} from "../../reducers/category/actions";
import Toast from 'react-native-toast-message'
import LogoText from "../../../assets/svg/logoText";
import ListEmptyComponent from "../../components/atoms/listEmpty";

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

const Home = ({navigation}: any) => {
    const token = useSelector((state: RootStateOrAny) => state.user?.user?.token?.token);
    const categories = useSelector((state: RootStateOrAny) => state.category.categories);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();

    function listHeaderComponent() {
        return <View style={{
            justifyContent: "center",
            alignItems: "center", paddingBottom: 10
        }}>
            <Image
                source={require("../../../assets/logo.png")}
                style={{

                    width: 120,
                    height: 100,
                }}
                resizeMode="contain"
            />
            <LogoText/>
        </View>
    }

    const cardOnPress = (item) => {
        return navigation.navigate('SubItems', item)
    };

    const categoriesMemo = useMemo(() => {
        return categories
    }, [categories])

    useEffect(() => {
        return fetchCategories()
    }, [])

    const fetchCategories = () => {
        setLoading(true);
        axios.get(BASE_URL + "/api/categories?page=" + page, {
            headers: {
                Authorization: "Bearer ".concat(token)
            }
        }).then((response) => {
            dispatch(setCategories(response.data.data))
            setLoading(false);
            if (response.data.last_page != page) {
                setPage(page + 1);
            }
        }).catch((response) => {
            Toast.show({
                type: 'error',
                text1: response.message,
            })
            console.log(response.message)
        })
    }
    return (

        <View style={[styles.container]}>


            <FlatList
                ListEmptyComponent={ListEmptyComponent}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{flexGrow: 1, paddingHorizontal: 10, paddingBottom: 20}}
                ListHeaderComponent={listHeaderComponent()}
                columnWrapperStyle={{justifyContent: 'space-between'}}
                data={categoriesMemo}
                numColumns={2}
                renderItem={(props) => CardWithTextOverImage({item: props.item, onPress: cardOnPress})}
                keyExtractor={item => item.id}
            />


        </View>
    );
};

export default Home;
