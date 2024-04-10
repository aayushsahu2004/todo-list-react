import React, { useState } from 'react'

const App = () => {
  const [tasks, settask] = useState([
    {title:"Task1", completed: false},
    {title:"Task2", completed: false},
    {title:"Task3", completed: true}
  ])

  const [title, settitle] = useState("")

  const submitHandler = (e) => {
    e.preventDefault();
    const newTask = { title, completed: false };
    const copyTask = [...tasks];
    copyTask.push(newTask);
    // settask([...tasks, newTask])
    settask(copyTask);
    settitle("");
  }

  const CompleteTaskHandler = (e, i) => {
    // e.target.classList.toggle("bg-green-500");
    // e.target.classList.toggle("border");
    // e.target.nextSibling.classList.toggle("line-through");

    const copyTask = [...tasks];
    copyTask[i].completed = !tasks[i].completed;
    settask(copyTask);
  }

  let taksRender = <p className='text-zinc-400 text-center mt-32 text-base md:text-sm font-semibold'>No task is present</p>

  if (tasks.length > 0) {
    taksRender = tasks.map((task, index) => (
      <li key={index} className='w-full h-11 border-2 rounded-lg border-zinc-500 bg-zinc-900 flex items-center justify-between px-2 mb-5'>
        <div className='flex items-center gap-2'>
          <div onClick={(e) => CompleteTaskHandler(e, index)} className={`${task.completed ? "bg-green-600" : "border"} w-5 h-5 border-orange-500 rounded-full`}></div>
          <h1 className={`${task.completed && "line-through"} text-sm text-zinc-300 font-semibold`}>{task.title}</h1>
        </div>
        <div className='flex items-center gap-2'>
          <i className="ri-edit-box-line text-zinc-400 text-xl"></i>
          <i className="ri-delete-bin-2-line text-zinc-400 text-xl"></i>
        </div>
      </li>
    ))
  }

  return (
    <>
      <div className='w-full h-screen bg-black flex justify-center items-center overflow-hidden'>
        <div className='w-full h-full md:w-80 md:h-4/5 md:border-2 md:border-zinc-700 rounded-lg py-8 md:py-5 px-5 overflow-hidden'>
          <div className='w-full h-28 border border-zinc-700 rounded-lg mb-5 flex items-center justify-between px-5'>
            <div className='flex justify-center items-center flex-col'>
              <h1 className='text-orange-500 text-lg font-bold leading-none'>Todo Done</h1>
              <p className='text-orange-300 text-sm'>keep it up</p>
            </div>
            <div className='w-20 h-20 bg-orange-600 rounded-full flex items-center justify-center text-xl font-bold'>
              {tasks.filter((t) => t.completed === true).length}/{tasks.length}
            </div>
          </div>
          <form className='w-full flex justify-between gap-2 md:gap-3 mt-10 md:mt-5' onSubmit={submitHandler}>
            <input className='w-full py-2 md:py-1 px-4 text-base md:text-sm rounded-lg bg-zinc-800 text-zinc-400 outline-none' onChange={(e) => settitle(e.target.value)} type="text" placeholder='write your task here.....' value={title} />
            <button className='px-2 py-1 bg-orange-600 rounded-full'><i className="ri-add-line text-2xl md:text-base font-bold"></i></button>
          </form>
          <div className='hide-scroll w-full h-3/4 md:h-80 overflow-y-auto mt-10 md:mt-5 scroll-smooth'>
            <ul className="list-none">
              {taksRender}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default App