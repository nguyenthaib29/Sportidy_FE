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
import { RootStackParamList } from "../../../types/types";

type VerificationScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Verification"
>;

const VerificationScreen = () => {
  const [verificationCode, setVerificationCode] = useState(["", "", "", ""]);
  const navigation = useNavigation<VerificationScreenNavigationProp>();

  const handleVerify = () => {
    navigation.navigate("NewPassword");
    console.log("Verification code:", verificationCode.join(""));
  };

  const handleResend = () => {
    // Implement resend verification code logic here
    console.log("Resend verification code");
  };

  const handleInputChange = (index: number, value: string) => {
    const updatedCode = [...verificationCode];
    updatedCode[index] = value;
    setVerificationCode(updatedCode);
  };

  return (
    <LinearGradient colors={["#FFE484", "#FFA41B"]} style={styles.container}>
      <Text style={styles.title}>Verification</Text>
      <Text style={styles.subtitle}>Enter the verification code</Text>

      <View style={styles.codeContainer}>
        {verificationCode.map((digit, index) => (
          <TextInput
            key={index}
            style={styles.codeInput}
            maxLength={1}
            value={digit}
            onChangeText={(value) => handleInputChange(index, value)}
            keyboardType="number-pad"
          />
        ))}
      </View>

      <TouchableOpacity style={styles.verifyButton} onPress={handleVerify}>
        <Text style={styles.verifyButtonText}>Verify</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.resendButton} onPress={handleResend}>
        <Text style={styles.resendButtonText}>Resend</Text>
      </TouchableOpacity>

      <View style={styles.socialContainer}>
        <Text style={styles.orText}>or</Text>
        <View style={styles.socialButtons}>
          <TouchableOpacity style={styles.socialButton}>
            <Text style={styles.socialButtonText}>Google</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Text style={styles.socialButtonText}>Facebook</Text>
          </TouchableOpacity>
        </View>
      </View>

      <span>Don't have an account?</span>
      <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
        <Text>Sign Up</Text>
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
  codeContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  codeInput: {
    backgroundColor: "#FFD700",
    borderRadius: 10,
    padding: 15,
    width: 50,
    marginHorizontal: 10,
    textAlign: "center",
  },
  verifyButton: {
    backgroundColor: "#FFF",
    borderRadius: 10,
    padding: 15,
    width: "100%",
    alignItems: "center",
    marginBottom: 20,
  },
  verifyButtonText: {
    fontWeight: "bold",
    color: "#000",
  },
  resendButton: {
    padding: 15,
  },
  resendButtonText: {
    color: "#000",
  },
  socialContainer: {
    marginTop: 20,
  },
  orText: {
    marginBottom: 10,
  },
  socialButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  socialButton: {
    backgroundColor: "#FFF",
    borderRadius: 10,
    padding: 15,
    width: "48%",
    alignItems: "center",
  },
  socialButtonText: {
    color: "#000",
  },
});

export default VerificationScreen;
