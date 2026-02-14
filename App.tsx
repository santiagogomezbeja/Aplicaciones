import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Quoter from './components/Quoter';
import InventoryModule from './components/InventoryModule';
import CRMModule from './components/CRMModule';
import ProductionKanban from './components/ProductionKanban';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState('dashboard');

  const renderContent = () => {
    switch (currentView) {
      case 'dashboard': return <Dashboard />;
      case 'quote': return <Quoter />;
      case 'inventory': return <InventoryModule />;
      case 'crm': return <CRMModule />;
      case 'production': return <ProductionKanban />;
      default: return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex">
      <Sidebar currentView={currentView} onChangeView={setCurrentView} />
      <main className="flex-1 ml-64 p-8 overflow-y-auto h-screen">
        <div className="max-w-7xl mx-auto">
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default App;