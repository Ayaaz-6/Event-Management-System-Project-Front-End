import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Events from './pages/Events'
import EventDetails from './pages/EventDetails'
import Login from './pages/Login'
import Signup from './pages/Signup'
import UserDashboard from './pages/UserDashboard'
import MyRegistrations from './pages/MyRegistrations'
import AdminDashboard from './pages/AdminDashboard'
import ManageEvents from './pages/ManageEvents'
import ManageUsers from './pages/ManageUsers'
import ProtectedRoute from './components/ProtectedRoute'
import { useAuth } from './context/AuthContext'

function DashboardRedirect(){const {user}=useAuth();return <Navigate to={user?.role==='admin'?'/admin':'/dashboard'} replace/>}
export default function App(){
 return <Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/events" element={<Events/>}/>
  <Route path="/events/:id" element={<EventDetails/>}/>
  <Route path="/login" element={<Login/>}/>
  <Route path="/signup" element={<Signup/>}/>
  <Route path="/dashboard" element={<ProtectedRoute role="user"><UserDashboard/></ProtectedRoute>}/>
  <Route path="/my-registrations" element={<ProtectedRoute role="user"><MyRegistrations/></ProtectedRoute>}/>
  <Route path="/admin" element={<ProtectedRoute role="admin"><AdminDashboard/></ProtectedRoute>}/>
  <Route path="/admin/events" element={<ProtectedRoute role="admin"><ManageEvents/></ProtectedRoute>}/>
  <Route path="/admin/users" element={<ProtectedRoute role="admin"><ManageUsers/></ProtectedRoute>}/>
  <Route path="/account" element={<ProtectedRoute><DashboardRedirect/></ProtectedRoute>}/>
  <Route path="*" element={<Navigate to="/" replace/>}/>
 </Routes>
}