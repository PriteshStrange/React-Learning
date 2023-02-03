import React, { useState } from 'react'
import List from './List'
import Data from './Data'

const Main = () => {
    const [people,setPeople] = useState(Data)
  return (
    <>
        <main>
            <section>
                <h3>{people.length} Data Available</h3>
                <List people={people}/>
                <button onClick={()=> setPeople([])}>Clear all</button>
            </section>
        </main>
    </>
  )
}

export default Main