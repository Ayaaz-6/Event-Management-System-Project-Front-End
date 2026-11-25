import { createContext, useContext, useEffect, useState } from 'react'
import { clearSession, getSession, getUsers, saveSession, saveUsers, seedData } from '../utils/storage'

const AuthContext = createContext(null)
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  useEffect(() => {
    seedData()
    setUser(getSession())
  }, [])

  function signup({ name, email, password }) {
    const users = getUsers()
    if (users.some(u => u.email.toLowerCase() === email.toLowerCase())) {
      return { ok: false, message: 'An account with this email already exists.' }
    }
    const newUser = { id: `user-${Date.now()}`, name, email, password, role: 'user' }
    saveUsers([...users, newUser])
    const session = { id: newUser.id, name: newUser.name, email: newUser.email, role: newUser.role }
    saveSession(session)
    setUser(session)
    return { ok: true }
  }

  function login(email, password) {
    const found = getUsers().find(u => u.email.toLowerCase() === email.toLowerCase() && u.password === password)
    if (!found) return { ok: false, message: 'Email or password is incorrect.' }
    const session = { id: found.id, name: found.name, email: found.email, role: found.role }
    saveSession(session)
    setUser(session)
    return { ok: true, user: session }
  }

  function logout() {
    clearSession()
    setUser(null)
  }

  return <AuthContext.Provider value={{ user, signup, login, logout }}>{children}</AuthContext.Provider>
}
export const useAuth = () => useContext(AuthContext)
