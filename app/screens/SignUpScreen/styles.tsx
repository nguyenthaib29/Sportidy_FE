import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 30,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#FFD700',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
  },
  signUpButton: {
    backgroundColor: '#FFD700',
    borderRadius: 10,
    padding: 15,
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  signUpButtonText: {
    fontWeight: 'bold',
  },
  orText: {
    marginBottom: 20,
  },
  googleButton: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  googleButtonText: {
    color: 'black',
  },
  loginText: {
    fontSize: 16,
  },
  loginLink: {
    color: '#FFD700',
    fontWeight: 'bold',
  },
});