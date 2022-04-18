import React from 'react'
import { commands } from '../db/db'
import '../style/CommandList.scss'

const CommandList = () => {
  return (
    <div className="container">
      <ul>
        {commands.map((c, i) => (
          <li key={i}>
            <b>{c.command}</b> <span>{c.about}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CommandList