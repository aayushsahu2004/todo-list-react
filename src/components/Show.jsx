import React from 'react'

const Show = (props) => {
    const { tasks } = props;
    const { settask } = props;

    const DeleteHandler = (i) => {
        const copyTask = [...tasks];
        let isValid = false;
        if (!copyTask[i].completed) {
            isValid = confirm("Do you really want to delete this Task ?");
        };

        if (isValid || copyTask[i].completed) {
            copyTask.splice(i, 1);
            settask(copyTask);
        };
    };

    const CompleteTaskHandler = (e, i) => {
        // e.target.classList.toggle("bg-green-500");
        // e.target.classList.toggle("border");
        // e.target.nextSibling.classList.toggle("line-through");

        const copyTask = [...tasks];
        copyTask[i].completed = !tasks[i].completed;
        settask(copyTask);
    };

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
                    <i onClick={() => DeleteHandler(index)} className="ri-delete-bin-2-line text-zinc-400 text-xl"></i>
                </div>
            </li>
        ))
    }
    return (
        <div className='hide-scroll w-full h-2/3 md:h-3/5 overflow-y-auto mt-10 md:mt-5 scroll-smooth'>
            <ul className="list-none">
                {taksRender}
            </ul>
        </div>)
}

export default Show