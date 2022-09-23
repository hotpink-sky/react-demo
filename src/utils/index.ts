import { useState, useEffect } from "react"

export const isFasly = (value: any) => (value === 0 ? false : !value)
export const cleanObject = (object: object) => {
    // Object.assign({}, object);
    const result = { ...object }
    Object.keys(result).forEach(key => {
        // @ts-ignore
        const value = result[key]
        if (isFasly(value)) {
            // @ts-ignore
            delete result[key]
        }
    })
    return result
}

export const useDebounce = (value: any, delay?: number) => {
    const [debounceValue, setDebounceValue] = useState(value)
    useEffect(() => {
        const timeout = setTimeout(() => setDebounceValue(value), delay)
        return () => clearTimeout(timeout)
    }, [value, delay])
    return debounceValue
}

export const useMount = (callback: () => void) => {
    useEffect(() => {
        callback()
    }, [])
}
