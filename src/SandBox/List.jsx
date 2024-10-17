import React from 'react'
const userInfo = [
    {
        name: "Mitchel Tembo",
        location: "Harare Zimbabwe",
        role: "Software Developer"
    },
    {
        name: "Mutsawashe Tembo",
        location: "Harare Zimbabwe",
        role: "DevOps Engineer"
    },
    {
        name: "Mukudzeishe Tembo",
        location: "Salt Lake City U.S.",
        role: "Frontend Dev"
    }
]

const List = () => {
  return (
    <div>
        {userInfo.map(({name,location,role}) => (
            <ul key={Math.random()}>
                <li>name:{name}</li>
                <li>location:{location}</li>
                <li>role:{role}</li>
            </ul>
        ))}
    </div>
  )
}

export default List