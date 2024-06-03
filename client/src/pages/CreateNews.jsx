import React, { useState } from 'react'
import PhotoUploader from '../components/photoUploader'

export default function CreateNews() {
  const [file, setFile] = useState('')
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  return (
    <section className='flex flex-col text-center'>
      <h1 className='text-2xl font-semibold'>Create News</h1>
      <PhotoUploader file={file} setFile={setFile} />
    </section>
  )
}
