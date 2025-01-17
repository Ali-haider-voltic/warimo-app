'use client'
import React from 'react'
import AuthGuard from '../../../../authGuide/authgurd';
const Index =()=>{
    return <h1> hello</h1>
}
export default AuthGuard(Index)