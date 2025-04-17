import React, { useEffect } from 'react'
import { useMatches, useNavigate } from 'react-router';
import { useUserContext } from '../context/UserContext';
import { AuthenticationHandle } from '../interface';

export default function useAuth() {
    const navigate = useNavigate();
  const {currentUser} = useUserContext();
  const mustAuthenticated = (useMatches() as (AuthenticationHandle)[])
    .find((m) => m.handle?.mustAuthenticated)?.handle?.mustAuthenticated;
    useEffect(()=>{
      if(mustAuthenticated && !currentUser){
        navigate('/login');
      }
    },[])
  return null
}
