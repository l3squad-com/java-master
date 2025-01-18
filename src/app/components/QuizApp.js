'use client'

import { useState, useEffect } from 'react'
import UserSelection from './UserSelection'
import QuizSelection from './QuizSelection'
import Quiz from './Quiz'

export default function QuizApp() {
  const [users, setUsers] = useState([])
  const [currentUser, setCurrentUser] = useState(null)
  const [quizType, setQuizType] = useState(null)

  useEffect(() => {
    const storedUsers = localStorage.getItem('java_quizUsers')
    if (storedUsers) {
      setUsers(JSON.parse(storedUsers))
    }
  }, [])

  const addUser = (name) => {
    const newUser = { name }
    const updatedUsers = [...users, newUser]
    setUsers(updatedUsers)
    localStorage.setItem('java_quizUsers', JSON.stringify(updatedUsers))
    setCurrentUser(newUser)
  }

  const selectUser = (user) => {
    setCurrentUser(user)
  }

  const selectQuizType = (type) => {
    setQuizType(type);

    const updatedUser = { ...currentUser, type }
    const updatedUsers = users.map(user => 
      user.id === updatedUser.id ? updatedUser : user
    )
    setUsers(updatedUsers)
    localStorage.setItem('java_quizUsers', JSON.stringify(updatedUsers))
    setCurrentUser(updatedUser)
    setQuizType(type)
  }

  const resetQuiz = () => {
    setCurrentUser(null)
    setQuizType(null)
  }

  if (!currentUser) {
    return <UserSelection users={users} addUser={addUser} selectUser={selectUser} />
  }

  if (!quizType) {
    return <QuizSelection selectQuizType={selectQuizType} />
  }

  return <Quiz quizType={quizType} user={currentUser} resetQuiz={resetQuiz} />
}

