import React, { useState } from 'react'
import PhotoUploader from '../components/photoUploader'
import { useNavigate } from "react-router-dom";
import 'react-quill/dist/quill.snow.css'
import Editor from '../components/Editor';


export default function CreateNews() {
  const [file, setFile] = useState(null)
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [summary, setSummary] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = new FormData()
    data.set('file', file)
    data.set('title', title)
    data.set('content', content)
    data.set('summary', summary)
    const response = await fetch('http://localhost/damkar/api/create_news.php', {
      method: 'POST',
      credentials: 'include',
      body: data
    })
    const res = await response.json()
    if (res.message === 'Berita berhasil dibuat') {
      alert(res.message)
      navigate('/')
    } else {
      alert(res.message)
    }
  }

  return (
    <section className='flex flex-col '>
      <h1 className='text-2xl font-semibold text-center'>Create News</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <PhotoUploader file={file} setFile={setFile} />
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500"
          />
        </label>
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Summary:
          <input
            type="text"
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500"
          />
        </label>
        <div className='bg-white'>
          <Editor value={content} onChange={setContent} />
        </div>

        <button
          type="submit"
          className="bg-pink-500 text-white py-2 px-6 rounded-md shadow-lg hover:bg-pink-600 transition duration-200"
        >
          Create News
        </button>
      </form>
    </section>
  )
}
