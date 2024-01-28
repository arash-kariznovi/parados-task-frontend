import React, { useState } from 'react'
import axios from 'axios'

const ProgressBar = ({ progress }) => {
  return (
    <div className='relative pt-1 '>
      <div className='flex flex-col mb-2 items-center justify-between'>
        <div>
          <span className='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-sky-200'>
            {progress}%
          </span>
        </div>
      </div>
      <div className='flex'>
        <div className='w-full h-6 border-2 rounded-sm'>
          <div
            className='shadow-none flex flex-col h-5 bg-sky-200 rounded-sm'
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  )
}

const FileUpload = () => {
  const [file, setFile] = useState(null)
  const [progress, setProgress] = useState(0)

  const handleFileChange = (e) => {
    setFile(e.target.files[0])
  }

  const handleUpload = async () => {
    if (file) {
      const formData = new FormData()
      formData.append('file', file)

      try {
        const response = await axios.post(
          'https://parados-task-api-production.up.railway.app/api/file',
          formData,
          {
            onUploadProgress: (progressEvent) => {
              const percentage = Math.round(
                (progressEvent.loaded * 100) / progressEvent.total
              )
              setProgress(percentage)
            },
          }
        )

        console.log('File uploaded successfully:', response.data)
      } catch (error) {
        console.error('Error uploading file:', error)
      }
    }
  }

  return (
    <div>
      <h1 className='h1 text-4xl font-extrabold p-4 mx-auto'> Upload Files</h1>{' '}
      <div className=' flex flex-col items-center justify-center mx-auto mt-8'>
        <input
          type='file'
          onChange={handleFileChange}
          className='bg-sky-100 text-center px-4 py-20 md:p-16  text-center rounded-lg h-48 border-2 border-dashed border-sky-300'
        />
        <div className='w-4/5 md:w-96 mx-auto'>
          {progress > 0 && <ProgressBar progress={progress} />}
        </div>
        <button
          onClick={handleUpload}
          className='bg-sky-300 px-4 py-3 w-32 rounded-md text-white hover:bg-sky-700 my-6'
        >
          Upload
        </button>
      </div>
    </div>
  )
}

export default FileUpload
