import {Outlet,Link} from 'react-router-dom'

import { useContext } from 'react'
import { Market_Context } from '../../context/auth-context'

import {sign_out} from '../../utils/firebase'
import Footer from '../footer/footer'


import './navigation.css'

const Navigation = () => {
    const {loggedInUser,setLoggedInUser} = useContext(Market_Context)


    const sign_out_handler = async () => {
        await sign_out()
        setLoggedInUser(null)
    }

  return (
    <main className='h-screen border-4 border-red-500 flex flex-col '>
        <nav className=' navigation  p-5 flex justify-between items-center'>
            <h2>  MarketPlace</h2>
            {
                loggedInUser ? <span onClick={sign_out_handler}> sign out </span> : <Link to='/signin'> sign in</Link>
            }


        </nav>
        <section className='outlet'>
            <Outlet />
        </section>

        <Footer  />
    </main>
    )
}

export default Navigation