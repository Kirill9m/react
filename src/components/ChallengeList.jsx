import { createElement } from "react"

function ChallengeList({ challenges }) {
  // console.log(props)
  // const { challenges } = props;
  // return (
  //   createElement('ul', {}, challenges.map(challenge => createElement('li', { key: challenge.id }, challenge.title)))
  // )

  // JSX
  return (
    <ul>
      {challenges.map(challenge => (<li key={challenge.id}>{challenge.title}</li>))}
    </ul>
  );
}

export default ChallengeList