import type { NativeStackScreenProps } from "@react-navigation/native-stack";

export type StackParam = {
    Login: undefined;
    Register: undefined;
    Home: undefined;
    Chats: undefined;
}


export type LoginProp = NativeStackScreenProps<StackParam, "Login">;
export type RegisterProp = NativeStackScreenProps<StackParam, "Register">;
export type HomeProp = NativeStackScreenProps<StackParam, "Home">;
export type ChatsProp = NativeStackScreenProps<StackParam, "Chats">;


export interface User {
    token: string;
    _id: string;
    userName: string;
}

interface Details {
    userName: string;
    userId: string;
    friendId: string;
    friendUsername: string;
}

export interface Friend {
    friendDetails: Details;
}