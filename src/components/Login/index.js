import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import AuthApiService from '../../services/auth-api-service'
import UserContext from '../../UserContext'

const CoolLoginForm = styled.form`
  width: 500px;
  height: 130px;
  display: flex;
  flex-direction: column;
  justify-items: space-between;
  padding: 1rem;
  border: none;
  @media (max-width: 600px) {
      width: 320px;
  }
`
const CoolRegistrationForm = styled(CoolLoginForm)``

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  @media (max-width) {
      max-width: 320px;
  }
`

const LittleButton = styled.div`
    cursor: pointer;
`

const UserTypeThing = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`

export default function Login (props) {
  const [userName, setUsername] = useState('')
  const [fullName, setFullName] = useState('')
  const [password, setPassword] = useState('')
  const [isNewUser, setIsNewUser] = useState(false)

  const handleSubmitLogin = (e) => {
    e.preventDefault()
    AuthApiService.postUser(userName, fullName, password)
  }

  const handleSubmitRegistration = (e) => {
    e.preventDefault()
    AuthApiService.postLogin(userName, password)
  }

  const user = useContext(UserContext)

  return (
    <LoginContainer>
        Login Page
      <div>Logged In User: {user}</div>
      {user !== '' && isNewUser ? (
        <CoolLoginForm>
          <input type='text' value={userName} onChange={(e) => setUsername(e.target.value)} placeholder='username' />
          <input type='text' value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder='full name' />
          <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='password' />
          <button onClick={(e) => handleSubmitLogin(e)}>Submit</button>
        </CoolLoginForm>)
        : (
          <CoolRegistrationForm>
            <input type='text' value={userName} onChange={(e) => setUsername(e.target.value)} placeholder='username' />
            <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='password' />
            <button onClick={(e) => handleSubmitRegistration(e)}>Submit</button>
          </CoolRegistrationForm>
        )}
      <UserTypeThing>
        <LittleButton onClick={() => setIsNewUser(false)}>
            Login
        </LittleButton>
            |
        <LittleButton onClick={() => setIsNewUser(true)}>
            Register
        </LittleButton>
      </UserTypeThing>
    </LoginContainer>

  )
}
