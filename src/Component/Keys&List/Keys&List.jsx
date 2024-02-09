import React from 'react'

function KeysList() {
    // const people = [
    //     'Creola Katherine Johnson: mathematician',
    //     'Mario José Molina-Pasquel Henríquez: chemist',
    //     'Mohammad Abdus Salam: physicist',
    //     'Percy Lavon Julian: chemist',
    //     'Subrahmanyan Chandrasekhar: astrophysicist'
    //   ];

    const people = [{
        id: 0,
        name: 'Creola Katherine Johnson',
        profession: 'mathematician',
      }, {
        id: 1,
        name: 'Mario José Molina-Pasquel Henríquez',
        profession: 'chemist',
      }, {
        id: 2,
        name: 'Mohammad Abdus Salam',
        profession: 'physicist',
      }, {
        id: 3,
        name: 'Percy Lavon Julian',
        profession: 'chemist',  
      }, {
        id :4 ,
        name: 'Subrahmanyan Chandrasekhar',
        profession: 'astrophysicist',
      }];

      let maps = people.map((people,index) => <li key={index}> {people.name}</li>)
  return (
    <ul>
        {maps}
    </ul>
  )
}

export default KeysList