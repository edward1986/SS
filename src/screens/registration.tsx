import React, {useState} from 'react';
import {
    SafeAreaView,
    ScrollView,
    View,
    StyleSheet,
    Image,
    ActivityIndicator,
    TouchableOpacity,
    Alert
} from 'react-native';
import RegistrationForm from '../components/organisms/forms/registration';
import {validateEmail, validatePassword} from "../utils/form-validations";
import LogoText from "../../assets/svg/logoText";
const logo = require('../../assets/logo.png');
import styles from "../styles/auth";
import Button from "../components/atoms/button";
import {button, text} from "../styles/color";
import Text from "../components/atoms/text";
import axios from "axios";
import {BASE_URL} from "../services/config";
import check from "../components/atoms/icon/check";
import useLocation from "../hooks/useLocation";
import AwesomeAlert from "react-native-awesome-alerts";
const Registration = (props) => {
    const location = useLocation();
    const [formValue, setFormValue] = useState({
        name: {
            value: '',
            isValid: false,
            error: '',
        },
        location: {
            value: '',
            isValid: false,
            error: '',
        },
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
    const errorResponse = {
        email: 'Please enter a valid email address',
        password: 'Password must be atleast 6 characters',
    };

    const onChangeValue = (key: string, value: any) => {
        switch (key) {
            case 'name': {
                return setFormValue({
                    ...formValue,
                    [key]: {
                        value: value,
                        isValid: !!value
                    }
                })
            }
            case 'location': {
                return setFormValue({
                    ...formValue,
                    [key]: {
                        value: value,
                    }
                });
            }
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
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("")
    const [visible, setVisible] = useState(false)
    const onCheckValidation = () => {
        setLoading(true)
        axios.post(BASE_URL + "/api/register", {
            name: formValue.name.value,
            location: location,
            email: formValue.email.value,
            password: formValue.password.value,
        }).then((response) => {
setLoading(false)
            props.navigation.navigate('Login')

        }).catch((error)=>{
            setLoading(false)
            setVisible(true)
            setMessage(error?.response?.data?.message)
        })
    };
    return (
    <SafeAreaView style={styles.container}>
        <AwesomeAlert useNativeDriver={true} onDismiss={()=>{
            setMessage("")
            setVisible(false)
        }} showConfirmButton={true} closeOnTouchOutside={true} show={visible} onConfirmPressed={()=>{
            setMessage("")
            setVisible(false)
        }} message={message}/>
      <ScrollView style={{ paddingHorizontal: 15 }}>
          <View style={[styles.header, {paddingTop: "5%" }]}>
              <View style={styles.horizontal}>
                  <Image style={styles.image} source={logo} />
                  <View style={{paddingTop: "10%"}}>
                      <LogoText/>
                  </View>

              </View>
          </View>
        <RegistrationForm onChangeText={onChangeValue}  formValue={formValue} />
          <View style={styles.footer}>
              <Button
                  style={[styles.button, { backgroundColor:  button.primary  }]}
                  disabled={loading}
                  onPress={onCheckValidation}
              >
                  {
                      loading ? (
                          <ActivityIndicator color={'white'} size={'small'} />
                      ) : (
                          <Text color="white" size={18}>Register</Text>
                      )
                  }
              </Button>
              <View style={{paddingVertical: 10, justifyContent: "center", alignItems: "center"}}>
                  <TouchableOpacity onPress={() => {

                      props.navigation.navigate('Login')
                  }}>
                      <Text color={"#00E0FF"} size={14}>
                          Sign in
                      </Text>
                  </TouchableOpacity>
              </View>

          </View>

      </ScrollView>
    </SafeAreaView>
  );
};

export default Registration;
