import React, { Component } from "react";
import {StyleSheet, View, TouchableOpacity, TextInput, Image} from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import MenuLeft from "../../../../assets/svg/menu";
import {useSafeArea} from "react-native-safe-area-context";

function CupertinoSearchBar(props) {
  const {  top: paddingTop } = useSafeArea();
  return (
    <View style={[styles.container, {paddingTop},   props.style]}>
      <TouchableOpacity onPress={props.onPress} style={styles.leftIconButton}>
        <MenuLeft
          name="subdirectory-arrow-right"
          style={styles.leftIcon}
        ></MenuLeft>
      </TouchableOpacity>
      <View style={styles.inputBox}>
        <MaterialCommunityIconsIcon
          name="magnify"
          style={styles.inputLeftIcon}
        ></MaterialCommunityIconsIcon>
        <TextInput
            placeholderTextColor={"rgba(255,255,255, 0.4)"}
          placeholder="Search"
          type="MaterialCommunityIcons"
          style={styles.inputStyle}
        ></TextInput>
        <MaterialCommunityIconsIcon
          name="close-circle"
          style={styles.inputRightIcon}
        ></MaterialCommunityIconsIcon>
      </View>
      <TouchableOpacity style={styles.rightIconButton}>
       <Image style={{width: 44, height: 44}} source={require("./../../../../assets/trucks.png")}/>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#AFB8A7",
  },
  leftIconButton: {
    padding: 8
  },
  leftIcon: {
    backgroundColor: "transparent",
    opacity: 0.6,
    color: "#007AFF",
    fontSize: 24
  },
  inputBox: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#7B896E",
    borderRadius: 16
  },
  inputLeftIcon: {
    color: "rgba(0, 0, 0, 0.49)",
    fontSize: 20,
    alignSelf: "center",
    paddingLeft: 5,
    paddingRight: 5
  },
  inputStyle: {
    height: 32,

    alignSelf: "flex-start",
    fontSize: 15,
    color: "#fff",
    flex: 1
  },
  inputRightIcon: {
    color: "#000",
    fontSize: 20,
    alignSelf: "center",
    paddingLeft: 5,
    paddingRight: 5
  },
  rightIconButton: {
    alignItems: "center",
    padding: 8
  },
  rightIcon: {
    backgroundColor: "transparent",
    opacity: 0.6,
    color: "#007AFF",
    fontSize: 24
  }
});

export default CupertinoSearchBar;
