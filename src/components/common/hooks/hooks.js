import { useEffect, useState } from 'react';

export function useLocalStorage(initialValue, key) {

    const localStorageAuthKey = 'authData'

    const getValue = () => {

        const storage = localStorage.getItem(localStorageAuthKey)
        if(storage) {
            return JSON.parse(storage)
        }
        return initialValue
        //return null
    }

    const [value, setValue] = useState(getValue)

    useEffect(() => {
        localStorage.setItem(localStorageAuthKey, JSON.stringify(value))
    }, [value])

    return [value, setValue]
}