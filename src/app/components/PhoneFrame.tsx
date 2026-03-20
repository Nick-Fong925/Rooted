import { ReactNode } from 'react';

interface PhoneFrameProps {
  children: ReactNode;
}

export function PhoneFrame({ children }: PhoneFrameProps) {
  return (
    <div className="relative bg-[#1a1a1a] rounded-[52px] shadow-2xl p-2" style={{ width: '375px', height: '812px' }}>
      {/* Dynamic Island */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 w-32 h-9 bg-black rounded-[28px] z-50 shadow-lg" />
      
      {/* Screen Content */}
      <div className="relative w-full h-full bg-[#FDF8F2] rounded-[44px] overflow-hidden">
        {children}
      </div>
    </div>
  );
}