import { useState } from "react";

function useToggle(defaultValue: boolean): [boolean, () => void] {

    const [value, setValue] = useState(defaultValue);

    function toggleValue() {
        setValue(prev => !prev);
    }

    return [
        value, toggleValue
    ]
}

export default useToggle;