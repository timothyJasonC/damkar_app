import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { UserContext } from '../UserContext';

export default function NewsPage() {
    const [news, setNews] = useState([])
    const { id } = useParams();
    const { user } = useContext(UserContext)
    const [showConfirmationDialog, setShowConfirmationDialog] = useState(false);
    const navigate = useNavigate()

    const getNews = async () => {
        const data = await fetch('http://localhost/damkar/api/get_news_by_id.php', {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify({ id: id }),
            headers: { 'Content-Type': 'application/json' },
        });
        const res = await data.json();
        setNews(res.news);
    };

    useEffect(() => {
        getNews();
    }, [id]);

    const deleteAlert = () => {
        setShowConfirmationDialog(true);
    };

    const confirmDelete = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost/damkar/api/delete_news.php', {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify({ id: id }),
            headers: { 'Content-Type': 'application/json' },
        });
        const res = await response.json();
        console.log(res);
        if (res.message === 'Berita berhasil dihapus') {
            alert(res.message);
            navigate('/');
        } else {
            alert(res.message);
        }
        setShowConfirmationDialog(false);
    };

    const cancelDelete = () => {
        setShowConfirmationDialog(false);
    };
    return (
        <section className='flex flex-col gap-4 '>
            <h1 className='text-2xl font-semibold text-center'>{news.title}</h1>
            <div className="flex items-center w-full justify-center border-black border-2 h-72 cursor-pointer flex-col overflow-hidden rounded-xl bg-grey-50">
                <img
                    src={`http://localhost/damkar/api/${news.image}`}
                    alt="image"
                    width={250}
                    height={250}
                    className="h-full w-full object-cover object-center"
                />
            </div>
            {user && user.id == news.author_id ? (
                <div className='flex justify-end gap-6 px-12'>
                    <Link to={'/edit_news/' + id} className="text-white w-10 bg-black bg-opacity-20 rounded-2xl p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                        </svg>
                    </Link>
                    <button onClick={deleteAlert} className="text-red-500 w-10 bg-black bg-opacity-20 rounded-2xl p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                        </svg>
                    </button>
                </div>
            ) : (
                null
            )}


            <div className='flex gap-2 items-center'>
                <label className="text-gray-700 text-lg font-bold">
                    Author :
                </label>
                <p>{news.name}</p>
            </div>
            <div className='flex gap-2 items-center'>
                <label className="text-gray-700 text-lg font-bold">
                    Created At :
                </label>
                <p>{news.created_at}</p>
            </div>
            <div>
                <label className="text-gray-700 text-lg font-bold">
                    content :
                </label>
                <div className="truncate h-full" dangerouslySetInnerHTML={{ __html: news.content }} />

            </div>

            {showConfirmationDialog && (
                <div className="fixed z-50 inset-0 overflow-y-auto">
                    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                        </div>
                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <div className="sm:flex sm:items-start">
                                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                        <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                                            Delete Alert
                                        </h3>
                                        <div className="mt-2">
                                            <p className="text-sm text-gray-500">
                                                Are you sure you want to delete this alert? This action cannot be undone.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                <button onClick={confirmDelete} className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">
                                    Delete
                                </button>
                                <button onClick={cancelDelete} className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}
