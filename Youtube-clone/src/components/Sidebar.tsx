import React from 'react';
import { Home, Compass, Clock, ThumbsUp, PlaySquare, History } from 'lucide-react';

const menuItems = [
  { icon: Home, label: 'Home' },
  { icon: Compass, label: 'Explore' },
  { icon: Clock, label: 'Shorts' },
  { icon: PlaySquare, label: 'Subscriptions' },
  { icon: History, label: 'History' },
  { icon: ThumbsUp, label: 'Liked Videos' },
];

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-14 w-64 h-[calc(100vh-3.5rem)] bg-white p-2 overflow-y-auto">
      {menuItems.map(({ icon: Icon, label }) => (
        <button
          key={label}
          className="w-full flex items-center gap-4 p-3 hover:bg-gray-100 rounded-lg"
        >
          <Icon className="w-6 h-6" />
          <span>{label}</span>
        </button>
      ))}
    </aside>
  );
}