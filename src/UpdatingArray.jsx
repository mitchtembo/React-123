import React, { useState } from 'react'


const UpdatingArray = () => {

    const [friends, setFriends] = useState(['Mitchel','Tino','Ben'])
   const handleFriend = () => setFriends([...friends,'Mutsa']);
   const handleRemove = () => setFriends(friends.filter(f => f != "Ben"))
   const updateOneFriend = () =>   setFriends(friends.map(friend => friend === 'Mitchel'? 'Mitchel Tembo': friend))
        
   
  return (
    <div>
        {friends.map(f => (
            <li key={Math.random()}>{f}</li>
        ))}

        <button onClick={handleFriend}>Add ONE Friend</button>
        <button onClick={handleRemove}>Remove</button>
        <button onClick={updateOneFriend}>UpdateFriend</button>
    </div>
  )
}

export default UpdatingArray