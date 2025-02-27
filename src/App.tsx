import { Route, Routes } from 'react-router-dom';
import './App.css'
import AdminPanelPage from './pages/adminPanel/AdminPanelPage';
import HomePage from './pages/home/HomePage';
import TaskListsPage from './pages/lists/TaskListsPage';
import LoginPage from './pages/login/LoginPage';
import RegisterPage from './pages/register/RegisterPage';
import TasksPage from './pages/tasks/TasksPage';
import NoMatchPage from './pages/noMatch/NoMatchPage';
import ProtectedRoute from './routes/protectedRoute';
import AdminRoute from './routes/adminRoute';
import Navbar from './components/Navbar/navbar';

function App()
{

  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/tasklists" element={<ProtectedRoute><TaskListsPage /></ProtectedRoute>} />
        <Route path="/tasklists/:id" element={<ProtectedRoute><TasksPage /></ProtectedRoute>} />
        <Route path="/adminPanel" element={<AdminRoute><AdminPanelPage /></AdminRoute>} />
        {/* <Route path="/tasklists" element={<TaskListsPage />} />
        <Route path="/tasklists/:id" element={<TasksPage />} />
        <Route path="/adminPanel" element={<AdminPanelPage />} /> */}
        <Route path="*" element={<NoMatchPage />} />
      </Routes>
    </>
  )
}

export default App;