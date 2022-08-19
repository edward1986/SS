import * as React from 'react';
import {View, StyleSheet, FlatList} from "react-native";
import ProfileIcon from "../../../assets/svg/profileIcon";
import Text from './../../components/atoms/text'
import {Bold, Regular} from "../../styles/fonts";
const styles = StyleSheet.create({
    gridContainer: {

        justifyContent: "center",
        alignItems: "center",
    },
    rowStyle: {

        width: "90%",
        paddingHorizontal: 20,
        flexDirection: "row",

        justifyContent: "space-around",
    },
    cellStyle: {
        flex: 1,
        margin: 10,
    },

})
const Profile = () => {
    function Cell({ data, index }) {
        return (
            <View  style={styles.cellStyle}>
                <Text style={{fontSize: (12),  fontFamily: index == 0 ? Bold: Regular}}>{data}</Text>
            </View>
        );
    }
    const Row = (props: { item: { label: any; value: any; }; }) => {
        return (
            <View style={styles.rowStyle}>
                    <Cell index={0} key={0} data={props.item.label} />
                    <Cell index={1} key={1} data={props.item.value} />
            </View>
        );
    }
    const data = [
            {id: 1, label:"Name", value: "test"},
        {id: 2, label: "Email", value: 'test'},
    {id: 3, label: "Phone number",  value: 'test'},
        {id: 4,label:"Shipping Address", value: "test"},
            {id: 5, label:"Specific Description of Location", value:'test'},
    ];

    function ListHeaderComponent() {
        return  <View style={{paddingTop: "10%", justifyContent: 'center', alignItems: 'center'}}>
            <ProfileIcon/>
            <Text>Profile</Text>
        </View>
    }

    return (
        <View style={{flex: 1, backgroundColor: '#E4E3DF'}}>

                <FlatList
                    ListHeaderComponent={ListHeaderComponent()}
                    contentContainerStyle={styles.gridContainer}
                    data={data}
                    renderItem={Row}
                    keyExtractor={item => item.id}
                />
        </View>

    );
};

export default Profile;
