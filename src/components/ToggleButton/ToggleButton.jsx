import React from 'react'
import "./ToggleButton.scss"

const ToggleButton = ({toggle, classname, children}) => {

    //toggle props passed down through nav etc.
    //toggle will either be toggle ideas, toggle chords/melody, toggle keypress or click.
  return (
    <button className={classname} onClick={toggle}>
        <div>{children}</div>
    </button>
  )
}

export default ToggleButton