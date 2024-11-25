import { createElement, useState } from 'react'
import ChallengeList from './challengeList'

function App() {
  return (
    createElement('div', { className: 'foo'},
      createElement('button', {}, 'Only A + B'),
      createElement('button', {}, 'B'),
      createElement('button', {}, 'All'),
      createElement('p', {}, 'Showing 3'),
      createElement(ChallengeList, {}),
      )
    )
}

export default App
