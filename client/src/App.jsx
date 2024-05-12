import Form from './components/Form'
import Tasks from './components/Tasks'

function App() {

  return (
    <>
      <h2 className='text-5xl text-white py-8 font-medium text-center'>Task Tracker</h2>
      <Form />
      <Tasks />
    </>
  )
}

export default App
