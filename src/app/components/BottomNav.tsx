import { Home, Plus, BookOpen, User, TrendingUp } from 'lucide-react';
import type { Screen } from '../App';

interface BottomNavProps {
  active?: 'home' | 'add' | 'diary' | 'progress' | 'profile';
  onNavigate?: (screen: Screen) => void;
}

export function BottomNav({ active = 'home', onNavigate }: BottomNavProps) {
  return (
    <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-[#EDE8DF] px-8 py-4 flex justify-between items-center" style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif' }}>
      <button className="flex flex-col items-center gap-1" onClick={() => onNavigate?.('home-feed')}>
        <Home size={24} strokeWidth={active === 'home' ? 2.5 : 2} color={active === 'home' ? '#3B4A2F' : '#8B6F47'} />
        {active === 'home' && <div className="w-1 h-1 rounded-full bg-[#C4622D]" />}
      </button>
      <button className="flex flex-col items-center gap-1" onClick={() => onNavigate?.('goal-progress')}>
        <TrendingUp size={24} strokeWidth={active === 'progress' ? 2.5 : 2} color={active === 'progress' ? '#3B4A2F' : '#8B6F47'} />
        {active === 'progress' && <div className="w-1 h-1 rounded-full bg-[#C4622D]" />}
      </button>
      <button onClick={() => onNavigate?.('post-creation')}>
        <div className="w-12 h-12 rounded-full bg-[#3B4A2F] flex items-center justify-center -mt-6">
          <Plus size={24} color="white" strokeWidth={2.5} />
        </div>
      </button>
      <button className="flex flex-col items-center gap-1" onClick={() => onNavigate?.('diary')}>
        <BookOpen size={24} strokeWidth={active === 'diary' ? 2.5 : 2} color={active === 'diary' ? '#3B4A2F' : '#8B6F47'} />
        {active === 'diary' && <div className="w-1 h-1 rounded-full bg-[#C4622D]" />}
      </button>
      <button className="flex flex-col items-center gap-1" onClick={() => onNavigate?.('profile')}>
        <User size={24} strokeWidth={active === 'profile' ? 2.5 : 2} color={active === 'profile' ? '#3B4A2F' : '#8B6F47'} />
        {active === 'profile' && <div className="w-1 h-1 rounded-full bg-[#C4622D]" />}
      </button>
    </div>
  );
}
