import { useState } from 'react'

import { useContext } from 'react'
import { Market_Context } from '../../context/context'

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

import { create_user_from_email_and_password,create_user_from_auth } from '../../utils/firebase'
 
const SignUp = () => {
  const [formField,setFormField] = useState(defaultFormFields)
  const {displayName,email,password,confirmPassword} = formField
  
  const {loggedInUser,setLoggedInUser} = useContext(Market_Context)

  // this function handles changes in the form field
  const handleChange = event => {
    const {name,value} = event.target
    setFormField({...formField,[name] : value})
  }

  // this function handles what happens when the form has been submitted
  const handleSubmit = async (event) => {
    event.preventDefault()

    // confirm if password matches onSubmit
    if(password !== confirmPassword){
        alert('passwords do not match')
        return
    }
    try{
      const {user} = await create_user_from_email_and_password(email,password)
      // console.log(user);

      setLoggedInUser(user)

      //  create a reference of the user on the database
      await create_user_from_auth(user,displayName)
      
    } catch(err){
      if(err.code === 'auth/email-already-in-use'){
        alert('user has an account already.Try logging in')
      } 
      else{
        console.log(err.message);
      }
    }
  }


  return (
    <div>
        <form onSubmit={handleSubmit}>
          <div className='formfield-container '>
          <label htmlFor="displayName"> Display NAme</label>
            <input type="text" id='displayName' name='displayName' value={displayName} onChange={handleChange}/>
          </div>
          <div className='formfield-container '>
          <label htmlFor="email">Email</label>
            <input type="text" id='email' name='email' value={email} onChange={handleChange}/>
          </div>
          <div className='formfield-container '>
          <label htmlFor="password" > Password</label>
            <input type="text" id='password' name='password' value={password} onChange={handleChange}/>
          </div>
          <div className='formfield-container '>
          <label htmlFor="confirmPassword"> Confirm Password</label>
            <input type="text" id='confirmPassword' name='confirmPassword' value={confirmPassword} onChange={handleChange}/>
          </div>

          <button className='bg-yellow-400' type='submit'> submit</button>
        </form>
    </div>
  )
}

export default SignUp