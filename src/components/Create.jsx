import React, { useContext, useState } from 'react'
import { todoContext } from '../Context/Context';

const Create = () => {
    const [title, settitle] = useState("");
    const [tasks, settasks] = useContext(todoContext);
    const submitHandler = (e) => {
        e.preventDefault();
        if (title !== "") {
            const newTask = { title, completed: false };
            const copyTask = [...tasks];
            copyTask.push(newTask);
            // settasks([...tasks, newTask])
            settasks(copyTask);
        }
        settitle("");
    };
    return (
        <form className='w-full flex justify-between gap-2 md:gap-3 mt-10 md:mt-5' onSubmit={submitHandler}>
            <input className='w-full py-2 md:py-1 px-4 text-base md:text-sm rounded-lg bg-zinc-800 text-zinc-400 outline-none' onChange={(e) => settitle(e.target.value)} type="text" placeholder='write your task here.....' value={title} />
            <button className='px-2 py-1 bg-orange-600 rounded-full'><i className="ri-add-line text-2xl md:text-base font-bold"></i></button>
        </form>
    )
}

export default Create