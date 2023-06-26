import { useLayoutEffect, useState } from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { User } from '../utils/types';

function useUser() {
    const [user, setUser] = useState<User>();

    useLayoutEffect(() => {
        AsyncStorage.getItem("user")
        .then(data => setUser(JSON.parse(data!)))
    }, []);

    return {
        user
    }
}

export default useUser;