import { useState, useEffect } from "react"
import { List } from "./list"
import { SearchPanel } from "./search-panel"
import * as qs from "qs"
import { cleanObject, useMount, useDebounce } from "utils"

const apiUrl = process.env.REACT_APP_API_URL

export const ProjectListScreen = () => {
    const [users, setUsers] = useState([])
    const [param, setParam] = useState({
        name: "",
        personId: "",
    })
    const debouncedParam = useDebounce(param, 2000)
    const [list, setList] = useState([])
    // useDebounce(param, );
    useEffect(() => {
        fetch(
            `${apiUrl}/projects?${qs.stringify(cleanObject(debouncedParam))}`
        ).then(async response => {
            if (response.ok) {
                setList(await response.json())
            }
        })
    }, [debouncedParam])

    // useEffect(() => {
    //     fetch(`${apiUrl}/users`).then(async response => {
    //         if (response.ok) {
    //             setUsers(await response.json());
    //         }
    //     })
    // }, []);
    // 使用hook封装
    useMount(() => {
        fetch(`${apiUrl}/users`).then(async response => {
            if (response.ok) {
                setUsers(await response.json())
            }
        })
    })

    return (
        <div>
            <SearchPanel
                param={param}
                users={users}
                setParam={setParam}
            ></SearchPanel>
            <List list={list} users={users}></List>
        </div>
    )
}
