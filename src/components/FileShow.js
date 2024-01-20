import React, { useEffect, useState } from 'react'

const FileShow = () => {
  const [files, setFiles] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const filesHandler = async () => {
      try {
        const response = await fetch(
          'https://parados-task-api-production.up.railway.app/api/file'
        )
        if (!response.ok) {
          throw new Error('Failed to fetch files')
        }
        const data = await response.json()
        console.log(data)
        setFiles(data.res)
      } catch (error) {
        console.error('Error fetching files:', error.message)
      } finally {
        setLoading(false)
      }
    }

    filesHandler()
  }, [])

  return (
    <div>
      <h1 className='h1 text-4xl font-extrabold p-4'> Download Files</h1>{' '}
      <div className=' container mx-auto rounded-lg py-8 px-8 md:px-16'>
        {' '}
        {loading ? (
          <p>loading.. </p>
        ) : (
          <ul>
            {files.map((file) => (
              <div className='flex flex-col md:flex-row text-center justify-between break-all shadow py-8 md:py-2 px-4 items-center'>
                <div key={file.url}>{file.name}</div>
                <a
                  href={file.url}
                  className='bg-sky-300 text-white p-2 my-2 rounded-lg hover:bg-sky-700'
                >
                  {' '}
                  Download
                </a>
              </div>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default FileShow
