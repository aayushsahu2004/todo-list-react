import React from 'react'

const Header = (props) => {
    const { tasks } = props
    return (
        <div className='w-full h-28 border border-zinc-700 rounded-lg mb-5 flex items-center justify-between px-5'>
            <div className='flex justify-center items-center flex-col'>
                <h1 className='text-orange-500 text-lg font-bold leading-none'>Todo Done</h1>
                <p className='text-orange-300 text-sm'>keep it up</p>
            </div>
            <div className='w-20 h-20 bg-orange-600 rounded-full flex items-center justify-center text-xl font-bold'>
                {tasks.filter((t) => t.completed === true).length}/{tasks.length}
            </div>
        </div>
    )
}

export default Header