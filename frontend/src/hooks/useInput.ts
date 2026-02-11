import { useCallback, useState } from "react";
import useLocalStorage from "./useLocalStorage";

const useInput = (initialValue, type = "text") => {
    const [value, setValue] = useState(initialValue)

    const reset = () => setValue(initialValue)

    const onChange = useCallback((e) => {
        const target = e.target

        const nextValue = type === "checkbox" ? target.checked :
        type === "number" ? Number(target.value) :
        target.value

        setValue(nextValue)
    }, [])

    // const attributeObj = {
    //     value,
    //     onChange: (e) => setValue(e.target.value),
    // }

    return { value, setValue, onChange, reset };
}

export default useInput;