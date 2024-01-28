import React, { useEffect, useState } from 'react'

const TextInput = () => {
  const [text, setText] = useState('')

  const inputHandler = (e) => setText(e.target.value)

  const textHandler = async () => {
    console.log(text)
    try {
      await fetch(
        'https://parados-task-api-production.up.railway.app/api/text',
        {
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ text }),
          method: 'POST',
        }
      )
        .then((res) => res.json())
        .then((data) => console.log(data))
    } catch (error) {
      console.log(error)
    }
    setText('')
  }

  return (
    <div>
      <h1 className='h1 text-4xl font-extrabold p-4 mx-auto'>
        {' '}
        Add Text Record
      </h1>{' '}
      <div className='flex flex-col items-center max-w-md mx-auto mt-8'>
        <textarea
          className='bg-sky-100 p-1 px-2 resize-none w-4/5 rounded-lg h-48 border-2 border-dashed border-sky-300'
          placeholder='add your text here...'
          type='textarea'
          onChange={inputHandler}
          value={text}
        />
        <button
          type='button'
          onClick={textHandler}
          className='bg-sky-300 px-4 py-3 w-32 rounded-md text-white hover:bg-sky-700 my-6'
        >
          {' '}
          Submit
        </button>
      </div>
    </div>
  )
}

export default TextInput
