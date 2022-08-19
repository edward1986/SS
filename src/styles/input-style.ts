import { StyleSheet } from "react-native";
import { text, outline } from './color';

const styles = StyleSheet.create({
  outlineStyle: {
    borderRadius: 30,
    paddingHorizontal: 8,
    paddingVertical: 1,
    borderColor: "transparent",
  },
  text: {
    color: text.default,
    fontWeight: '400',
  },
})

export default styles;