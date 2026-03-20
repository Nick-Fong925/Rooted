import { useState } from 'react';
import { PhoneFrame } from './PhoneFrame';
import type { Screen } from '../App';

interface WeeklyCommitProps {
  onNavigate: (screen: Screen) => void;
  onCommit: (tasks: string[]) => void;
}

const TASK_COUNT = 5;

export function WeeklyCommit({ onCommit }: WeeklyCommitProps) {
  const [texts, setTexts] = useState<string[]>(Array(TASK_COUNT).fill(''));
  const [frequencies, setFrequencies] = useState<(number | null)[]>(Array(TASK_COUNT).fill(null));

  const updateText = (index: number, value: string) => {
    setTexts(prev => {
      const next = [...prev];
      next[index] = value;
      return next;
    });
  };

  const updateFrequency = (taskIndex: number, num: number) => {
    setFrequencies(prev => {
      const next = [...prev];
      next[taskIndex] = prev[taskIndex] === num ? null : num;
      return next;
    });
  };

  return (
    <PhoneFrame>
      <div className="h-full flex flex-col">
        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-6 pt-16 pb-32">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-2xl text-[#1A1A1A] mb-1" style={{ fontFamily: 'Canela, serif', fontWeight: 400 }}>
                Good Monday, User1 🌱
              </h1>
              <p className="text-[#1A1A1A]" style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif' }}>
                What are you committing to this week?
              </p>
            </div>

            {/* Progress indicator */}
            <div className="mb-6">
              <p className="text-sm text-[#1A1A1A]" style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif' }}>Week 1</p>
            </div>

            {/* Task Cards */}
            <div className="space-y-3">
              {Array.from({ length: TASK_COUNT }, (_, index) => (
                <div key={index} className="bg-[#EDE8DF] rounded-3xl p-4">
                  <p className="text-xs text-[#8B6F47] mb-2" style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif' }}>
                    Task {index + 1}
                  </p>

                  <input
                    type="text"
                    value={texts[index]}
                    onChange={(e) => updateText(index, e.target.value)}
                    placeholder="What will you commit to?"
                    className="w-full bg-[#FDF8F2] rounded-lg px-3 py-2.5 mb-3 outline-none"
                    style={{
                      fontFamily: 'Helvetica Neue, Arial, sans-serif',
                      border: '1px solid rgba(59, 74, 47, 0.2)',
                      color: texts[index] ? '#1A1A1A' : '#8B6F47'
                    }}
                  />

                  <div className="flex gap-1.5 mb-2">
                    {[1, 2, 3, 4, 5, 6, 7].map((num) => (
                      <button
                        key={num}
                        onClick={() => updateFrequency(index, num)}
                        className={`w-7 h-7 rounded-full flex items-center justify-center ${
                          num === frequencies[index]
                            ? 'bg-[#3B4A2F] text-white'
                            : 'bg-transparent border border-[#3B4A2F] text-[#3B4A2F]'
                        }`}
                        style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif', fontSize: '13px', fontWeight: num === frequencies[index] ? 500 : 400 }}
                      >
                        {num}
                      </button>
                    ))}
                  </div>
                  <p className="text-xs text-[#8B6F47]" style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif' }}>
                    times this week
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sticky Footer with CTA Button */}
        <div className="absolute bottom-0 left-0 right-0">
          <div className="h-8 bg-gradient-to-t from-[#FDF8F2] to-transparent" />
          <div className="bg-[#FDF8F2] px-6 pb-6">
            <button
              onClick={() => onCommit(texts)}
              className="w-full bg-[#3B4A2F] text-white py-4 rounded-2xl text-lg"
              style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif', fontWeight: 500 }}
            >
              Plant my week
            </button>
          </div>
        </div>
      </div>
    </PhoneFrame>
  );
}
