import React, { useState, FC } from 'react';
import { View, StyleSheet } from 'react-native';
import { ExclamationIcon } from '../../atoms/icon';
import Text from '../../atoms/text';
import TextInput from '../../atoms/input';

const styles = StyleSheet.create({
  container: {
    paddingVertical: 5
  },
  label: {
    position: 'absolute',
    top: 15,
    left: 15,
    paddingHorizontal: 5,
    zIndex: 99,
    flexDirection: 'row'
  },

  inputContainer: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    overflow: 'hidden',
    width: '100%',
    backgroundColor: "white"
  },
  description: {
    paddingTop: 2,
  },
  info: {
    flexDirection: 'row',
    alignItems: 'center',
  }
});

interface Props {
  label?: string;
  placeholder?: string;
  secureTextEntry?: boolean;
  required?: boolean;
  hasValidation?: boolean;
  containerStyle?: any;
  inputStyle?: any;
  labelStyle?: any;
  outlineStyle?: any;
  description?: string;
  error?: string;
  errorColor?: string;
  activeColor?: string;
  requiredColor?: string;
  [x: string]: any;
}

const InputField: FC<Props> = ({
  label = '',
  placeholder = '',
  secureTextEntry = false,
  required = false,
  hasValidation = false,
  containerStyle,
  inputStyle,
  labelStyle,
  outlineStyle,
  description,
  error,
  errorColor,
  activeColor,
  requiredColor,
  ...otherProps
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const onFocus = () => setIsFocused(true);
  const onBlur = () => setIsFocused(false);

  return (
    <View style={[styles.container, containerStyle]}>

      <View
        style={[
          styles.inputContainer,
          outlineStyle,
          isFocused && { borderColor: activeColor },
          !!error && { borderColor: errorColor }
        ]}
      >
        <TextInput
          style={inputStyle}
          placeholder={placeholder || label}
          secureTextEntry={secureTextEntry}
          onFocus={onFocus}
          onBlur={onBlur}
          {...otherProps}
        />
      </View>
      {
        hasValidation && (
          <View style={styles.description}>
            <View style={styles.info}>

              <Text
                style={[
                  labelStyle,
                  !!error && {
                    marginLeft: 10,
                    color: errorColor
                  }
                ]}
                size={12}
              >
                {error || description}
              </Text>
            </View>
          </View>
        )
      }
    </View>
  );
};

export default InputField;
