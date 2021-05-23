import React from 'react'
import { Excercise } from './components'
import { Header } from './components'
function App() {
    return (
        <div className="App">
            <Header />
            <Excercise name={'bänk'} sets={3} repetitions={10} weight={30} />
            <Excercise name={'knäböj'} sets={3} repetitions={10} weight={30} />
        </div>
    )
}

export default App
