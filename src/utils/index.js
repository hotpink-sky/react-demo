import { useState, useEffect } from "react"
export const isFasly = value => (value === 0 ? false : !value)
export const cleanObject = object => {
    // Object.assign({}, object);

    const result = { ...object }
    Object.keys(result).forEach(key => {
        const value = result[key]
        if (isFasly(value)) {
            delete result[key]
        }
    })
    return result
}

export const useDebounce = (value, delay) => {
    const [debounceValue, setDebounceValue] = useState(value)
    useEffect(() => {
        const timeout = setTimeout(() => setDebounceValue(value), delay)
        return () => clearTimeout(timeout)
    }, [value, delay])
    return debounceValue
}

export const useMount = callback => {
    useEffect(() => {
        callback()
    }, [])
}
