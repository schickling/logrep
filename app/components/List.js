import React, { PropTypes } from 'react'
import hash from 'string-hash'
import ansiHTML from 'ansi-html'

ansiHTML.setColors({
  reset: ['555', '999'], // FOREGROUND-COLOR or [FOREGROUND-COLOR] or [, BACKGROUND-COLOR] or [FOREGROUND-COLOR, BACKGROUND-COLOR]
  black: 'aaa',	// String
  red: 'bbb',
  green: 'ccc',
  yellow: 'ddd',
  blue: 'eee',
  magenta: 'fff',
  cyan: '999',
  lightgrey: '888',
  darkgrey: '777'
})

const humanizeDate = d => {
  const now = new Date()
  const differenceInHours = (now - d) / 3600000
  if (differenceInHours < 24) {
    return `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`
  } else {
    return d.toDateString()
  }
}

const List = ({ messages }) => (
  <table className='table'>
    <thead>
      <tr>
        <th>Time</th>
        <th>Message</th>
      </tr>
    </thead>
    <tbody>
    {messages.map((message, i) =>
      <tr key={hash(message.text) + i}>
        <td>{humanizeDate(message.date)}</td>
        <td dangerouslySetInnerHTML={{__html: ansiHTML(message.text)}} />
      </tr>
    )}
    </tbody>
  </table>
)

List.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    date: PropTypes.object.isRequired,
  }).isRequired).isRequired,
}

export default List
