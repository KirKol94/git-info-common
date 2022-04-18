import React from 'react'
import { commands } from '../db/db'
import '../style/CommandList.scss'

const CommandList = ({ searchValue }) => {
  const array = commands.filter(
    (c) =>
      c.command?.toLowerCase().includes(searchValue.toLowerCase())
  );
  return (
    <div className="container">
      <ul>
        {array.map((c, i) => (
          <li key={i}>
            <b>{c.command}</b> <span>{c.about}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CommandList