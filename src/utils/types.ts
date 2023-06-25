import type { NativeStackScreenProps } from "@react-navigation/native-stack";

export type StackParam = {
    Login: undefined;
    Register: undefined;
}


export type LoginProp = NativeStackScreenProps<StackParam, "Login">;