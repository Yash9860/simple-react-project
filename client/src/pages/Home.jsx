import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom'
import axiosInstance from '../utils/axiosInstance';
import axios from 'axios';

export default function Home() {



  const [userInfo, setuserInfo] = useState(null)

  const navigate = useNavigate();

  return (
    <>
      <Navbar userInfo={userInfo} />

    </>
  )
}
