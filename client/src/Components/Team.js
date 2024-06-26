import React from 'react'

const Team = ({team}) => {
  return (
    <div>
    <p> {team.teamName}</p>
    <p> {team.description}</p>
    <p>Members:</p>
      <ul>
        {team.member.map((member) => (
            
            <li key={member.id}>{`Name: ${member.first_name} ${member.last_name}, ID:${member.id}, Domain:${member.domain}, Avatar:`} <img className="right floated mini ui image" src={member.avatar} alt="profileImage" /></li>
        ))}
      </ul>
  </div>
  )
}

export default Team