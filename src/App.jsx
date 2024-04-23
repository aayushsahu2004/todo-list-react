import Header from './components/Header';
import Create from './components/Create';
import Show from './components/Show';

const App = () => {
  return (
    <>
      <div className='w-full h-screen bg-black flex justify-center items-center overflow-hidden'>
        <div className='w-full h-full md:w-80 md:h-4/5 md:border-2 md:border-zinc-700 rounded-lg py-8 md:py-5 px-5 overflow-hidden'>
          <Header />
          <Create />
          <Show />
        </div>
      </div>
    </>
  )
}

export default App