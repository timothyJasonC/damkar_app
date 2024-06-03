import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import PhotoUploader from '../components/photoUploader'

export default function EditNews() {
    const { id } = useParams()
    const [file, setFile] = useState(null)
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const navigate = useNavigate()

    const getNews = async () => {
        const data = await fetch('http://localhost/damkar/api/get_news_by_id.php', {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify({ id: id }),
            headers: { 'Content-Type': 'application/json' }
        })
        const res = await data.json()
        setTitle(res.news.title)
        setContent(res.news.content)
        const imageUrl = `http://localhost/damkar/api/${res.news.image}`
        setFile(imageUrl)
    }

    useEffect(() => {
        getNews()
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(file);
        const data = new FormData()
        data.set('file', file)
        data.set('title', title)
        data.set('content', content)
        data.set('newsId', id)
        const response = await fetch('http://localhost/damkar/api/edit_news.php', {
            method: 'POST',
            credentials: 'include',
            body: data
        })
        const res = await response.json()
        if (res.message === 'Berita berhasil diedit') {
            alert(res.message)
            navigate('/')
        } else {
            alert(res.message)
        }
    }

    return (
        <section className='flex flex-col '>
            <h1 className='text-2xl font-semibold text-center'>Edit News</h1>
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
                    content:
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500"
                    />
                </label>
                <button
                    type="submit"
                    className="bg-pink-500 text-white py-2 px-6 rounded-md shadow-lg hover:bg-pink-600 transition duration-200"
                >
                    Update News
                </button>
            </form>
        </section>
    )
}
