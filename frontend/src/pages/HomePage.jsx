import NavBar from '../components/NavBar'
import { useState } from 'react'
import RateLimitedUI from "../components/RateLimitedUI"
const HomePage  = () => {
  const [isRateLimited, setIsRateLimited] = useState(true);
  return (
    <div className='min-h-screen'>
      <NavBar/>

      {isRateLimited && <RateLimitedUI/>}
    </div>
  )
}

export default HomePage