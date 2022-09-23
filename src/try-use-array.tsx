import { useArray, useMount } from "utils"
import React from "react"

export const TsReactTest = () => {
    const persons: { name: string; age: number }[] = [
        { name: "jack", age: 25 },
        { name: "join", age: 18 },
    ]
    const { value, clear, removeIndex, add } = useArray(persons)
    useMount(() => {
        // 期待这里报错： Property 'notExist' does not exits on type '{name: string; age: number}'
        // console.log(value.notExist);
        // 期待这里报错： Property 'age' is missing in type '{name: string}' but required in
        // add({name: 'david'})
        // 期待这里报错： Argument of type 'string' is not assignable to parameter of type
        // removeIndex('123');
    })
    return (
        <div>
            {/* 期待：点击以后增加john */}
            <button onClick={() => add({ name: "join", age: 22 })}>
                add john
            </button>
            {/* 期待：点击以后删除第一项 */}
            <button onClick={() => removeIndex(0)}>remove 0</button>
            {/* 期待：点击以后清空列表 */}
            <button onClick={() => clear()}>clear</button>
            {value.map(
                (person: { name: string; age: number }, index: number) => (
                    <div style={{ marginBottom: "30px" }} key={index}>
                        <span>{index}</span>
                        <span>{person.name}</span>
                        <span>{person.age}</span>
                    </div>
                )
            )}
        </div>
    )
}
