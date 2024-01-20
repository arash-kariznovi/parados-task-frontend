import React, { useEffect, useState } from 'react'

const TextShow = () => {
  const [files, setFiles] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const filesHandler = async () => {
      try {
        const response = await fetch(
          'https://parados-task-api-production.up.railway.app/api/text'
        )
        if (!response.ok) {
          throw new Error('Failed to fetch files')
        }
        const data = await response.json()
        console.log(data)
        setFiles(data)
      } catch (error) {
        console.error('Error fetching files:', error.message)
      } finally {
        setLoading(false)
      }
    }

    filesHandler()
  }, [])

  return (
    <div className='mx-auto my-8'>
      <h1 className='h1 text-4xl font-extrabold p-4'> Text Records</h1>{' '}
      {loading ? (
        <p>loading.. </p>
      ) : (
        <ul className='flex flex-col md:flex-row flex-wrap mx-auto justify-around mx-16'>
          {files.responses.map((file) => (
            <li
              className='flex flex-col md:flex-row text-center justify-between break-all shadow py-8  md:py-2 px-4 m-2 items-center'
              key={file.id}
            >
              {file.text}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default TextShow
