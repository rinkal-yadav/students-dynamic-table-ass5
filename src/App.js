import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Contact from './Components/Contact';
import Header from './Components/Header';
import Home from './Components/Home';
import Student from './Components/Student';
import AddStudent from './Components/AddStudent';
import { StudentProvider } from './Components/StudentContext';

function App() {
  return (
    <StudentProvider>
    <div >
        <Router>
          <Header/>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/home' element={<Home/>}/>
              <Route path='/student' element={<Student/>}/>
              <Route path='/edit/:id' element={<AddStudent/>}/>
              <Route path='/addstudent' element={<AddStudent/>}/>
              {/* <Route path='/edit/:id' element={<Edit/>}/> */}
              <Route path='/contact' element={<Contact/>}/>

            </Routes>
        </Router>
    </div>
     </StudentProvider>
    
  );
}

export default App;
