import { useState } from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Home from './Home';
import Report from './Report';
import Leads from './Leads';
import Analytics from './Analytics';

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const [activeComponent, setActiveComponent] = useState('home');

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  const renderComponent = () => {
    switch (activeComponent) {
      case 'home':
        return <Home />;
      case 'reports':
        return <Report />;
      case 'leads':
        return <Leads />;
      case 'analytics':
        return <Analytics />;
      default:
        return <Home />;
    }
  };

  return (
    <div className='grid-container'>
      <Header OpenSidebar={OpenSidebar} />
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} setActiveComponent={setActiveComponent} />
      {renderComponent()}
    </div>
  );
}

export default App;