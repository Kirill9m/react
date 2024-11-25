import { createElement, useState } from 'react'
import ChallengeList from './challengeList'

const challenges = [
  {
    id: 'a',
    title: 'Challenge A'
  },
  {
    id: 'b',
    title: 'Challenge B'
  },
  {
    id: 'c',
    title: 'Challenge C'
  },
];

function App() {
  // return (
  //   createElement('div', { className: 'foo'},
  //     createElement('button', {}, 'Only A + B'),
  //     createElement('button', {}, 'B'),
  //     createElement('button', {}, 'All'),
  //     createElement('p', {}, 'Showing 3'),
  //     createElement(ChallengeList, { challenges: challenges }),
  //     )
  //   )

  //JSX
  return (
    <div className='container'>
      <button>Only A+B</button>
      <button>Only B</button>
      <button>All</button>
      <p>Showing 3</p>
      <ChallengeList challenges={challenges}/>
    </div>
  );
}

export default App
