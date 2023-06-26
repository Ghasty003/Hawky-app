import { useEffect, useState } from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";

function useUser() {
    const [user, setUser] = useState<string | null>("");

    useEffect(() => {
        AsyncStorage.getItem("user")
        .then(data => setUser(data))
    }, []);

    return {
        user
    }
}

export default useUser;