import React from 'react'

import Exercise_1_3 from './Exercise_1_3'
import Exercise_1_5 from './Exercise_1_5'
import Exercise_2_2 from './Exercise_2_2'
import Exercise_2_3 from './Exercise_2_3'
import Exercise_2_5 from './Exercise_2_5'

const ExerciseList = () => (
    <div style={{ paddingTop: '1em' }}>
        <h3>Part 1</h3>
        <Exercise_1_3 />
        <hr />
        <Exercise_1_5 />
        <hr />
        <h3>Part 2</h3>
        <Exercise_2_2 />
        <hr />
        <Exercise_2_3 />
        <hr />
        <Exercise_2_5 />
        <hr />
    </div>
)

export default ExerciseList
