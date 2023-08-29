import React from 'react'

const Filter = ({ setTextField }) => {
    return (
        <div>
            <input placeholder='Search user...' onChange={(event) => {
                if (event.target.value === '') {
                    setTextField('')
                } else {
                    setTextField(event.target.value)
                }
            }
            }/>
        </div>
    )
}

export default Filter
