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
