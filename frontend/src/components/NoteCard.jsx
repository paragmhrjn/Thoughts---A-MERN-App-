import { Link } from 'react-router'
import { PenSquareIcon, Trash2Icon } from 'lucide-react'
import toast from 'react-hot-toast'
import { formatDate } from '../lib/utils'
import api from '../lib/axios'
const NoteCard = ({ note, setNotes }) => {

    const handleDelete = async (e, id) => {
        e.preventDefault() // prevent from navigation on click

        if (!window.confirm("Are you sure you want to delete this note?")) return
        try {
            await api.delete(`/notes/${id}`)
            setNotes((prev) => prev.filter(note => note._id !==id ))// get rid of deleted note id and updater
            toast.success("Note Deleted Successfully!!")
        } catch (error) {
            console.log("Error in handle delete", error)
            toast.error("failed to delete note")
        }
    }
    return (
        <Link to={`/note/${note._id}`} className='card bg-base-200 hover:shadow-lg transition-all duration-200 border-t-4 border-solid'>
            <div className='card-body'>
                <h3 className='card-title text-base-content'>{note.title}</h3>
                <p className='text-base-content/70 line-clamp-3'>
                    {note.content}
                </p>

                <div className="card-actions justify-between items-center mt-4">
                    <span className="text-sm text-base-content">
                        {formatDate(new Date(note.createdAt))}
                    </span>
                    <div className="flex items-center gap-1">
                        <PenSquareIcon className="size-4"></PenSquareIcon>
                        <button className='btn btn-ghost btn-xs text-error'
                        onClick={(e) => handleDelete(e, note._id)}>
                            <Trash2Icon className='size-4'/>
                        </button>
                    </div>

                </div>
            </div>
        </Link>
    )
}

export default NoteCard