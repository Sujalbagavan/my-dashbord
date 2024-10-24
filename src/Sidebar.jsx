import React from 'react';
import { BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill } from 'react-icons/bs';

function Sidebar({ openSidebarToggle, OpenSidebar, setActiveComponent }) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
      <div className='sidebar-title'>
        <div className='sidebar-brand'>
      My-Dashbord
        </div>
        <span className='icon close_icon' onClick={OpenSidebar}>X</span>
      </div>
      <ul className='sidebar-list'>
        <li className='sidebar-list-item' onClick={() => setActiveComponent('home')}>
          <a href="#">
            <BsGrid1X2Fill className='icon' /> Home
          </a>
        </li>
        <li className='sidebar-list-item' onClick={() => setActiveComponent('leads')}>
          <a href="#">
            <BsFillArchiveFill className='icon' /> Leads
          </a>
        </li>
        <li className='sidebar-list-item' onClick={() => setActiveComponent('analytics')}>
          <a href="#">
            <BsFillGrid3X3GapFill className='icon' /> Analytics
          </a>
        </li>
        <li className='sidebar-list-item' onClick={() => setActiveComponent('reports')}>
          <a href="#">
            <BsPeopleFill className='icon' /> Reports
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;