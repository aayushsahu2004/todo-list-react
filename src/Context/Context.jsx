import { data } from "autoprefixer";
import { createContext, useState } from "react"

export const todoContext = createContext(null);

export const Context = (props) => {
    const [tasks, settasks] = useState([

    ])
    return (
        <todoContext.Provider value={[tasks, settasks]}>
            {props.children}
        </todoContext.Provider>
    )
}
