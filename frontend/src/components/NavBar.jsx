import React from 'react'
import { Link } from 'react-router'
import { PlusIcon } from 'lucide-react'
const NavBar = () => {
    return (
        <header className='bg-base-300 border-b border-base-content/10'>
            <div className='mx-auto max-w-6xl px-4 p-4'>
                <div className='flex items-center justify-between'>
                    <Link to={"/"}>
                        <h1 className='text-3xl font-bold text-primary font-sans tracking-tight'>Thoughts</h1>
                    </Link>
                    <div className="flex items-center gap-4">
                        <Link to={"/create"} className='btn btn-primary'>
                            <PlusIcon className='size-5' />
                            <span>New Notes</span>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default NavBar