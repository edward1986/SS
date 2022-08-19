import React, { FC } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { CheckIcon } from '../../atoms/icon';
import {
  InputField,
  PasswordField,
} from '../../molecules/form-fields';
import InputStyles from '../../../styles/input-style';
import { text } from '../../../styles/color';
import Text from '../../atoms/text';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  label: {
    marginLeft: 10
  },
  passwordValidationContainer: {
    paddingVertical: 5,
    marginBottom: 10,
    marginTop: 5,
  },
  strengthBar: {
    height: 4,
    borderRadius: 4,
    marginTop: 10,
    flex: 1,
  },
  horizontal: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  unchecked: {
    height: 18,
    width: 18,
    backgroundColor: '#DBDFE5',
    borderRadius: 3,
  }
});

interface Props {
  form?: any;
  onChangeValue?: any;
}

const LoginForm : FC<Props> = ({ form = {}, onChangeValue = () => {} }) => {
  const keepMeLoggedInChecker = (checked:boolean) => {
    if (checked) {
      return (
        <View
          style={[
            styles.unchecked,
            {
              backgroundColor: text.primary,
              justifyContent: 'center',
              alignItems: 'center'
            }
          ]}
        >
          <CheckIcon
            type="check"
            color="white"
            size={14}
          />
        </View>
      );
    }
    return (
      <View style={styles.unchecked} />
    );
  }
  return (
    <View style={styles.container}>
      <InputField
        inputStyle={InputStyles.text}
        label={'Email'}
        placeholder="Email address"
        required={true}
        hasValidation={true}
        outlineStyle={InputStyles.outlineStyle}
        activeColor={text.primary}
        errorColor={text.error}
        requiredColor={text.error}
        error={form?.email?.error}
        value={form?.email?.value}
        keyboardType={'email-address'}
        onChangeText={(value: string) => onChangeValue('email', value)}
        onSubmitEditing={(event:any) => onChangeValue('email', event.nativeEvent.text)}
      />
      <View style={[styles.horizontal, { justifyContent: 'flex-end' }]}>
        <TouchableOpacity onPress={() => onChangeValue('forgotPassword')}>
          <Text
            style={[InputStyles.text, styles.label, { color: text.primary }]}
            size={12}
          >
            Forgot your password?
          </Text>
        </TouchableOpacity>
      </View>
      <PasswordField
        inputStyle={[InputStyles.text, { flex: 1 }]}
        label={'Password'}
        placeholder="Password"
        textContentType="oneTimeCode"
        required={true}
        hasValidation={false}
        outlineStyle={InputStyles.outlineStyle}
        activeColor={text.primary}
        errorColor={text.error}
        requiredColor={text.error}
        secureTextEntry={!form?.showPassword?.value}
        error={form?.password?.error}
        value={form?.password?.value}
        showPassword={() => onChangeValue('showPassword')}
        onChangeText={(value: string) => onChangeValue('password', value)}
        onSubmitEditing={(event:any) => onChangeValue('password', event.nativeEvent.text)}
      />
    </View>
  );
};

export default LoginForm;
