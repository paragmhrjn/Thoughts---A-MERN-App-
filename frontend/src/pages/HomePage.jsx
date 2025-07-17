import NavBar from '../components/NavBar'
import { useEffect, useState } from 'react'
import RateLimitedUI from "../components/RateLimitedUI"
import toast from 'react-hot-toast'
import NoteCard from '../components/NoteCard'
import NotesNotFound from '../components/NotesNotFound'
import api from '../lib/axios'
const HomePage  = () => {
  const [isRateLimited, setIsRateLimited] = useState(false);
  const [notes, setNotes] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchNotes = async () => {
      // using fetch API(axios)
      try {
        const res = await api.get("/notes")
        setNotes(res.data)
        setIsRateLimited(false)
        // const res = await fetch("http://localhost:5000/api/notes")
        // const data = await res.json();
        // console.log(res)
      }catch (error) {
        console.log("Error Fetching data.")
        if(error.response?.status === 429) {
          setIsRateLimited(true)
        } else {
          toast.error("Failed to laod notes")
        }
      } finally {
        setLoading(false)
      }
    }
    fetchNotes()
  },[])
  return (
    <div className='min-h-screen'>
      <NavBar/>

      {isRateLimited && <RateLimitedUI/>}
      <div className="max-w-7xl mx-auto p-4 mt-6">
        {loading && <div className='text-center text-primary py-10'> Loading Notes...</div>}

        {/* conditional rendring */}
        {notes.length === 0 && !isRateLimited && <NotesNotFound/>}
        {notes.length > 0 && !isRateLimited && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {notes.map(note => (
              <NoteCard key={note._id} note={note} setNotes={setNotes}/>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default HomePage