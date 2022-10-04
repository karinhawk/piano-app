import React from 'react'

const ToggleButton = ({toggle}) => {

    //toggle props passed down through nav etc.
    //toggle will either be toggle ideas, toggle chords/melody, toggle keypress or click.
  return (
    <div>
        <button className='button' onClick={toggle}></button>
    </div>
  )
}

export default ToggleButton