import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Quoter from './components/Quoter';
import InventoryModule from './components/InventoryModule';
import CRMModule from './components/CRMModule';
import ProductionKanban from './components/ProductionKanban';
import CalendarModule from './components/CalendarModule';
import ReportsModule from './components/ReportsModule';
import Login from './components/Login';
import { User } from './types';
import { initializeAuth, getDefaultViewForRole } from './services/authService';

const App: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [currentView, setCurrentView] = useState('dashboard');

  useEffect(() => {
    // Initialize DB (ensure Admin exists)
    initializeAuth();
  }, []);

  const handleLogin = (user: User) => {
    setCurrentUser(user);
    // Set view to default for that role to avoid unauthorized access on load
    setCurrentView(getDefaultViewForRole(user.role));
  };

  const handleLogout = () => {
    // Logic 1: Reset Session State
    setCurrentUser(null);
    
    // Logic 2: Reset View (Optional since null user unmounts main app, but good practice)
    setCurrentView('dashboard');
    
    // Note: In React, setting state triggers a re-render. 
    // Since we conditionally render <Login> below based on !currentUser, 
    // this effectively redirects the user to the Login screen immediately.
  };

  // Visual Guard: If not logged in, show Login.
  if (!currentUser) {
    return <Login onLogin={handleLogin} />;
  }

  const renderContent = () => {
    switch (currentView) {
      case 'dashboard': return <Dashboard onNavigate={setCurrentView} />;
      case 'quote': return <Quoter />;
      case 'inventory': return <InventoryModule />;
      case 'crm': return <CRMModule />;
      case 'production': return <ProductionKanban />;
      case 'calendar': return <CalendarModule />;
      case 'reports': return <ReportsModule />;
      default: return <Dashboard onNavigate={setCurrentView} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex">
      <Sidebar 
        currentView={currentView} 
        onChangeView={setCurrentView} 
        currentUser={currentUser}
        onLogout={handleLogout}
      />
      <main className="flex-1 ml-64 p-8 overflow-y-auto h-screen">
        <div className="max-w-7xl mx-auto">
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default App;