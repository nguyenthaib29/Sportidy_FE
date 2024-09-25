/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/_sitemap` | `/screens/ForgotPasswordScreen` | `/screens/ForgotPasswordScreen/styles` | `/screens/LoginScreen` | `/screens/LoginScreen/styles` | `/screens/NewPasswordScreen` | `/screens/SignUpScreen` | `/screens/SignUpScreen/styles` | `/screens/SplashScreen` | `/screens/SplashScreen/styles` | `/screens/VerificationScreen` | `/screens/VerificationScreen/styles`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
