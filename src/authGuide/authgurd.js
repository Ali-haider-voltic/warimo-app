"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'; // For App Directory
// Use 'next/router' for Pages Directory if you're not using the App Directory.

const AuthGuard = (Component) => {
  return function ProtectedComponent(props) {
    const router = useRouter();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const token = localStorage.getItem('token');
      if (!token) {
        router.push('/login'); // Redirect to login if no token
      } else {
        setIsAuthenticated(true);
      }
      setLoading(false);
    }, [router]);

    if (loading) {
      return <div>Loading...</div>; // Optional: Replace with a loader component
    }

    if (!isAuthenticated) {
      return null; // Ensure nothing renders while redirecting
    }

    return <Component {...props} />;
  };
};

export default AuthGuard;
