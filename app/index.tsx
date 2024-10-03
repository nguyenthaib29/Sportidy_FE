import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "./screens/SplashScreen";
import SignUpScreen from "./screens/SignUpScreen";
import LoginScreen from "./screens/LoginScreen";
import ForgotPasswordScreen from "./screens/ForgotPasswordScreen";
import VerificationScreen from "./screens/VerificationScreen";
import NewPasswordScreen from "./screens/NewPasswordScreen";
import UserProfile from "./screens/UserProfile";
import ClubScreen from "./screens/Clubscreen";

const Stack = createNativeStackNavigator();

export default function Layout() {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
      <Stack.Screen name="Verification" component={VerificationScreen} />
      <Stack.Screen name="NewPassword" component={NewPasswordScreen} />
      <Stack.Screen name="Clubscreen" component={ClubScreen}/>
      <Stack.Screen name="UserProfile" component={UserProfile} />
      {/* Add other screens here */}
    </Stack.Navigator>
  );
}
