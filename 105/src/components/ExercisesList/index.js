import React from 'react'

import ExerciseAmIRunning from './ExerciseAmIRunning'
import ExerciseBackendConnection from './ExerciseBackendConnection'
import ExerciseNginxSetup from './ExerciseNginxSetup'
import ExerciseRedisSetup from './ExerciseRedisSetup'
import ExerciseDBConnection from './ExerciseDBConnection'

const ExerciseList = () => (
    <div style={{ paddingTop: '1em' }}>
        <h3>Part 1</h3>
        <ExerciseAmIRunning exerciseNumber="1.5" />
        <hr />
        <ExerciseBackendConnection exerciseNumber="1.7" />
        <hr />
        <h3>Part 2</h3>
        <ExerciseRedisSetup exerciseNumber="2.2" />
        <hr />
        <ExerciseDBConnection exerciseNumber="2.3" />
        <hr />
        <ExerciseNginxSetup exerciseNumber="2.5" />
        <hr />
    </div>
)

export default ExerciseList
