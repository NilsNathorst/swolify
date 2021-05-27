import React from 'react'
import { Excercise } from './components'
import { weeklySchedule } from './excercises'
import { Header } from './components'
import { useCurrentDay } from './hooks'
function App() {
    const { dayNo } = useCurrentDay()

    const excercisesOfTheDay = weeklySchedule.filter(
        (item) => item.dayNo === dayNo
    )[0]
    return (
        <div className="App">
            <Header />
            {excercisesOfTheDay.excercises.length > 0
                ? excercisesOfTheDay.excercises.map((item) => {
                      return (
                          <Excercise
                              key={item.name}
                              name={item.name}
                              sets={item.sets}
                              repetitions={item.repetitions}
                              weight={item.weight}
                              type={item.type}
                          />
                      )
                  })
                : 'rest'}
        </div>
    )
}

export default App
