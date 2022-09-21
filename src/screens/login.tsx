import React, { useState, useCallback, useEffect } from 'react';
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  View,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Image,
  ActivityIndicator,
} from 'react-native';
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import { setUser } from '../reducers/user/actions'
import {
  validateEmail,
  validatePassword,
} from '../utils/form-validations';
import LoginForm from '../components/organisms/forms/login';
import Text from '../components/atoms/text';
import Button from '../components/atoms/button';
import { text, button, outline } from '../styles/color';
import {Bold} from "../styles/fonts";
import {BASE_URL} from "../services/config";
import axios from "axios";
import {StackActions} from "@react-navigation/native";
import LogoText from "../../assets/svg/logoText";
const logo = require('../../assets/logo.png');
const background = require('../../assets/background.png');
import styles from "../styles/auth";

const errorResponse = {
  email: 'Please enter a valid email address',
  password: 'Password must be atleast 6 characters',
};

const Login = ({ navigation }:any) => {
  const dispatch = useDispatch();
  const user = useSelector((state:RootStateOrAny) => state.user);
  const [loading, setLoading] = useState(false);
  const onLogin = useCallback(async (data) => {
    setLoading(true);
    axios.post(BASE_URL + "/api/login", {
      email: data.email,
      password: data.password,
    }).then((response) => {

      setLoading(false);
      dispatch(setUser(response.data));
      navigation.dispatch(StackActions.replace('Home'));
    }) .catch(e => {
      setLoading(false);
      if (e) {
        setFormValue({
          ...formValue,
          email: {
            ...formValue.email,
            error: 'Authentication failed'
          }
        });
      }
    });

  }, []);
  const [formValue, setFormValue] = useState({
    email: {
      value: '',
      isValid: false,
      error: '',
    },
    password: {
      value: '',
      isValid: false,
      error: '',
      characterLength: false,
      upperAndLowerCase: false,
      atLeastOneNumber: false,
      strength: 'Weak',
    },
    showPassword: {
      value: false
    },
    keepLoggedIn: {
      value: false,
    }
  });
  const onChangeValue = (key: string, value: any) => {
    switch (key) {
      case 'email': {
        const checked = validateEmail(value);
        return setFormValue({
          ...formValue,
          [key]: {
            value: value,
            isValid: checked,
            error: !checked ? errorResponse['email'] : ''
          }
        });
      }
      case 'password': {
        const passwordTest = validatePassword(value);
        return setFormValue({
          ...formValue,
          [key]: {
            value: value,
            isValid: passwordTest?.isValid,
            error: !passwordTest?.isValid ? errorResponse['password'] : '',
            characterLength: passwordTest.characterLength,
            upperAndLowerCase: passwordTest.upperAndLowerCase,
            atLeastOneNumber: passwordTest.atLeastOneNumber,
            strength: passwordTest.strength,
          }
        });
      }
      case 'showPassword': {
        return setFormValue({
          ...formValue,
          [key]: {
            value: !formValue.showPassword.value,
          }
        });
      }
      case 'forgotPassword': {
        return;
      }
      default:
        return setFormValue({
          ...formValue,
          [key]: {
            value: value,
            isValid: !!value,
            error: '',
          }
        });
    }
  };
  const onCheckValidation = () => {
    if (!formValue.email.isValid) {
      return onChangeValue('email', formValue.email.value);
    } if (!formValue.password.isValid) {
      return onChangeValue('password', formValue.password.value);
    } else {
      return onLogin({
        email: formValue?.email?.value,
        password: formValue?.password?.value,
      });
    }
  }
  const isValid =
    formValue.email.isValid &&
    formValue.password.isValid;

  useEffect(() => {
    if (user && user.email) {
      navigation.replace('Home');
    }
  }, []);

  return (
    <View style={[styles.container, {backgroundColor: "#E5E5E5"}]} >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <ScrollView
            style={{ padding: "10%" }}
            showsVerticalScrollIndicator={false}
        >
          <View style={[styles.header, {paddingTop: "5%" }]}>
            <View style={styles.horizontal}>
              <Image style={styles.image} source={logo} />
              <View style={{paddingTop: "10%"}}>
                <LogoText/>
              </View>

            </View>
          </View>
          <View style={styles.formContainer}>
            <LoginForm onChangeValue={onChangeValue} form={formValue} />
            <View style={styles.footer}>
              <Button
                  style={[styles.button, { backgroundColor: isValid ? button.primary : button.default }]}
                  disabled={loading}
                  onPress={onCheckValidation}
              >
                {
                  loading ? (
                      <ActivityIndicator color={'white'} size={'small'} />
                  ) : (
                      <Text color="white" size={18}>Login</Text>
                  )
                }
              </Button>
            </View>
            <View style={[styles.horizontal, {flexDirection: "row", justifyContent: "flex-start"}]}>
              <Text  color={text.default} size={14}>
                {`Don't have an account? `}
              </Text>
              <TouchableOpacity onPress={() => navigation.navigate('Registration')}>
                <Text color={"#00E0FF"} size={14}>
                  Sign up
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default Login;
