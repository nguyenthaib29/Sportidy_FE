import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../types/types"; // Adjust the import path as needed

type ForgotPasswordScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "ForgotPassword"
>;

const ForgotPasswordScreen = () => {
  const [email, setEmail] = useState("");
  const navigation = useNavigation<ForgotPasswordScreenNavigationProp>();

  const handleResetPassword = () => {
    // Implement password reset logic here
    if (!email) {
      alert("Please enter your email address");
      return;
    }
    // If email is not inside the database -> Send a message for example ("Your email is not registered, kindly create one!")
    // If email is in the database -> Navigate to the verification screen
    navigation.navigate("Verification");
    console.log("Reset password for:", email);
  };

  const handleBackToSignIn = () => {
    // Navigate back to the signIn screen
    navigation.navigate("Login");
  };

  const handleSignUp = () => {
    // Navigate to the signUp screen
    navigation.navigate("SignUp");
  };

  return (
    <LinearGradient colors={["#FFE484", "#FFA41B"]} style={styles.container}>
      <Text style={styles.title}>Forgot Password</Text>
      <Text style={styles.subtitle}>
        Enter your email to reset your password
      </Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email address"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>
      <TouchableOpacity
        style={styles.backToSignInButton}
        onPress={handleBackToSignIn}
      >
        <Text style={styles.backToSignInButtonText}>Back to SignIn</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.resetButton}
        onPress={handleResetPassword}
      >
        <Text style={styles.resetButtonText}>Send</Text>
      </TouchableOpacity>

      <span>Or</span>
      {/* FB & Gmail icons*/}
      <span>Don't have an account?</span>
      <TouchableOpacity
        style={styles.backToSignInButton}
        onPress={handleSignUp}
      >
        <Text style={styles.signUpButtonText}>Sign Up</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 30,
  },
  inputContainer: {
    width: "100%",
    marginBottom: 20,
  },
  input: {
    backgroundColor: "#FFD700",
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
  },
  resetButton: {
    backgroundColor: "#FFF",
    borderRadius: 10,
    padding: 15,
    width: "100%",
    alignItems: "center",
    marginBottom: 20,
  },
  resetButtonText: {
    fontWeight: "bold",
    color: "#000",
  },
  backToSignInButton: {
    padding: 15,
  },
  backToSignInButtonText: {
    color: "#000",
  },
  signUpButtonText: {
    color: "#000",
  },
});

export default ForgotPasswordScreen;
