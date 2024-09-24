/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/..\types\types` | `/_sitemap` | `/screens/ForgotPasswordScreen/ForgotPasswordScreen` | `/screens/LoginScreen/LoginScreen` | `/screens/NewPasswordScreen/NewPasswordScreen` | `/screens/SignUpScreen/SignUpScreen` | `/screens/SplashScreen` | `/screens/SplashScreen/SplashScreenStyles` | `/screens/VerificationScreen/VerificationScreen` | `/screens\ForgotPasswordScreen\` | `/screens\LoginScreen\` | `/screens\NewPasswordScreen\NewPasswordScreen` | `/screens\SignUpScreen\` | `/screens\SignUpScreen\styles` | `/screens\SplashScreen\styles`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
