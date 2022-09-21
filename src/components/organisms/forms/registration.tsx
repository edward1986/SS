import React, { FC, useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { CheckIcon, CloseIcon } from '../../atoms/icon';
import {
  InputField,
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
    paddingVertical: 2,
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
  formValue?: any;
  onChangeText?: any;
}

const RegistrationForm : FC<Props> = ({ formValue = {}, onChangeText = () => {} }) => {
  const validateIcon = (valid:boolean) => {
    if (valid) {
      return (
        <CheckIcon
          color={text.success}
          size={18}
        />
      )
    }
    return (
      <CloseIcon
        color={text.error}
        size={18}
      />
    )
  }
  const validateColor = (valid:boolean) => {
    return valid ? text.success : text.error;
  }
  const renderPasswordChecker = (checked:boolean) => {
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
  const passwordMeterColor = (strength:string) => {
    if (strength === 'Average') {
      return '#F8BF24';
    } else if (strength === 'Strong') {
      return '#2C9669';
    }
    return '#DC2626';
  }
  return (
    <View style={styles.container}>
      <InputField
          inputStyle={InputStyles.text}
          label={'Enter your email'}
          placeholder="Enter your email"
          required={true}
          hasValidation={true}
          outlineStyle={InputStyles.outlineStyle}
          activeColor={text.primary}
          errorColor={text.error}
          requiredColor={text.error}
          error={formValue?.email?.error}
          value={formValue?.email?.value}
          keyboardType={'email-address'}
          onChangeText={(value: string) => onChangeText('email', value)}
          onSubmitEditing={(event:any) => onChangeText('email', event.nativeEvent.text)}
      />

      <InputField
          inputStyle={InputStyles.text}
          label={'Enter your full  name'}
          placeholder="Enter your full  name"
          required={true}
          hasValidation={true}
          outlineStyle={InputStyles.outlineStyle}
          activeColor={text.primary}
          errorColor={text.error}
          requiredColor={text.error}
          error={formValue?.name?.error}
          value={formValue?.name?.value}
          onChangeText={(value: string) => onChangeText('name', value)}
          onSubmitEditing={(event:any) => onChangeText('name', event.nativeEvent.text)}
      />
      <InputField
        inputStyle={InputStyles.text}
        label={'Enter your password'}
        placeholder="Enter your password"
        textContentType="oneTimeCode"
        required={true}
        hasValidation={true}
        outlineStyle={InputStyles.outlineStyle}
        activeColor={text.primary}
        errorColor={text.error}
        requiredColor={text.error}
        secureTextEntry={!formValue?.showPassword?.value}
        error={formValue?.password?.error}
        value={formValue?.password?.value}
        onChangeText={(value: string) => onChangeText('password', value)}
        onSubmitEditing={(event:any) => onChangeText('password', event.nativeEvent.text)}
      />
      <InputField
        inputStyle={InputStyles.text}
        label={'Confirm password'}
        placeholder="Confirm password"
        textContentType="oneTimeCode"
        required={true}
        hasValidation={true}
        outlineStyle={InputStyles.outlineStyle}
        activeColor={text.primary}
        errorColor={text.error}
        requiredColor={text.error}
        secureTextEntry={!formValue?.showPassword?.value}
        error={formValue?.confirmPassword?.error}
        value={formValue?.confirmPassword?.value}
        onChangeText={(value: string) => onChangeText('confirmPassword', value)}
        onSubmitEditing={(event:any) => onChangeText('confirmPassword', event.nativeEvent.text)}
      />

    </View>
  );
};

export default RegistrationForm;
