import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { supabase } from '../lib/supabase';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Initial fetch of user
    const initAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        const adminEmails = [
          'admin@virsoftech.com',
          'pralay@virsoftech.com',
          import.meta.env.VITE_ADMIN_EMAIL
        ].filter(Boolean);
        
        setUser({
          id: session.user.id,
          name: session.user.user_metadata?.name || session.user.email?.split('@')[0],
          email: session.user.email,
          role: adminEmails.includes(session.user.email) ? 'admin' : 'author',
        });
      }
      setLoading(false);
    };

    initAuth();

    const { data: authListener } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (session) {
        const adminEmails = [
          'admin@virsoftech.com',
          'pralay@virsoftech.com',
          import.meta.env.VITE_ADMIN_EMAIL
        ].filter(Boolean);
        
        setUser({
          id: session.user.id,
          name: session.user.user_metadata?.name || session.user.email?.split('@')[0],
          email: session.user.email,
          role: adminEmails.includes(session.user.email) ? 'admin' : 'author',
        });
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  const login = useCallback(async (email, password) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      throw error;
    }
    return data;
  }, []);

  const logout = useCallback(async () => {
    await supabase.auth.signOut();
    setUser(null);
  }, []);

  const adminEmails = [
    'admin@virsoftech.com',
    'pralay@virsoftech.com',
    import.meta.env.VITE_ADMIN_EMAIL
  ].filter(Boolean);
  
  const canManageContent = user && adminEmails.includes(user.email);

  return (
    <AuthContext.Provider value={{
      user,
      login,
      logout,
      loading,
      isAdmin: canManageContent,
      canManageContent,
    }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

