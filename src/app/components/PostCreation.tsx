import { useState } from 'react';
import { PhoneFrame } from './PhoneFrame';
import { X, User } from 'lucide-react';
import type { Screen } from '../App';

interface PostCreationProps {
  onNavigate: (screen: Screen) => void;
  tasks: string[];
  onPost: (selectedTask: string) => void;
}

export function PostCreation({ onNavigate, tasks, onPost }: PostCreationProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <PhoneFrame>
      <div className="h-full flex flex-col relative">
        {/* Full-bleed camera viewfinder */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1529473814998-077b4fec6770?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Post preview"
            className="w-full h-full object-cover"
          />
          {/* Dark gradient overlay at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black/60 to-transparent" />
        </div>

        {/* Top overlay controls */}
        <div className="relative z-10 px-6 py-4 pt-16 flex items-center justify-between">
          <button onClick={() => onNavigate('weekly-commit')}>
            <X size={28} color="white" strokeWidth={2} />
          </button>
          <div className="w-10 h-10 rounded-full bg-[#EDE8DF] flex items-center justify-center">
            <User size={20} color="#8B6F47" />
          </div>
        </div>

        {/* Bottom controls */}
        <div className="relative z-10 mt-auto px-6 pb-8 space-y-4">
          {/* Scrollable goal pill selector — from user's committed tasks */}
          {tasks.length > 0 && (
            <div className="flex gap-2 overflow-x-auto pb-2">
              {tasks.map((task, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedIndex(index)}
                  className={`px-4 py-2 rounded-full flex-shrink-0 ${
                    index === selectedIndex
                      ? 'bg-[#C4622D] text-white'
                      : 'border-2 border-white/80 text-white bg-white/10'
                  }`}
                  style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif', fontWeight: index === selectedIndex ? 500 : 400 }}
                >
                  {task}
                </button>
              ))}
            </div>
          )}

          {/* Post button */}
          <button
            onClick={() => onPost(tasks[selectedIndex] || '')}
            className="w-full bg-[#3B4A2F] text-white py-4 rounded-2xl"
            style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif', fontWeight: 500 }}
          >
            Post to Rooted
          </button>
        </div>
      </div>
    </PhoneFrame>
  );
}
