// client/src/components/SidebarItem.tsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import type { IconType } from 'react-icons'; // アイコンの型定義

interface SidebarItemProps {
  to: string;
  icon: IconType; // React Icons のコンポーネントを型として受け取る
  label: string;
  end?: boolean; // NavLink の end プロパティ
}

const SidebarItem: React.FC<SidebarItemProps> = ({ to, icon: Icon, label, end }) => {
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) => `sidebar-item ${isActive ? 'active' : ''}`}
        end={end}
      >
        <Icon className="sidebar-icon" /> {/* アイコンを表示 */}
        <span className="sidebar-label">{label}</span>
      </NavLink>
    </li>
  );
};

export default SidebarItem;