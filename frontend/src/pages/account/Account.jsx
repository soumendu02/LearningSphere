import React from 'react'
import './account.css'
import { RiDashboardLine } from "react-icons/ri";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { UserData } from '../../context/UserContext';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
const Account = ({user}) => {

  const {setIsAuth,setUser}=UserData()
  const navigate = useNavigate();
  const logouthandler=()=>{
    localStorage.clear()
    setUser([])
    setIsAuth(false);
    toast.success("Logged out")
    navigate("/login")
  }
  return (
    <div>
       {user && (
        <div className="profile">
          <h2>My profile</h2>
          <div className="profile-info">
            <p>
                <strong>Name-{user.name}</strong>
            </p>

            <p>
                <strong>email-{user.email}</strong>
            </p>
            <button className="common-btn"><RiDashboardLine />Dashboard</button>

            <br />
            <button onClick={logouthandler} className="common-btn" style={{background:"red"}}><RiLogoutCircleRLine />Logout</button>
          </div>
        </div>
)}
    </div>
  )
}

export default Account
