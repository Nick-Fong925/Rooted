import { useMemo } from 'react';
import { PhoneFrame } from './PhoneFrame';
import { BottomNav } from './BottomNav';
import type { Screen } from '../App';

interface GoalProgressProps {
  onNavigate: (screen: Screen) => void;
  tasks: string[];
  frequencies: number[];
}

const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

function generateCompletion(frequency: number, seed: number): { completed: boolean[]; current: number } {
  // Random completion between 60% and 100%, rounded up
  const minComplete = Math.ceil(frequency * 0.6);
  // Use seed for stable random so it doesn't change on re-render
  const range = frequency - minComplete + 1;
  const numComplete = minComplete + (seed % range);
  const current = Math.min(numComplete, frequency);

  // Distribute completed days randomly using seed
  const completed = Array(frequency).fill(false);
  let remaining = current;
  let s = seed;
  const indices = Array.from({ length: frequency }, (_, i) => i);
  // Simple seeded shuffle
  for (let i = indices.length - 1; i > 0; i--) {
    s = (s * 1103515245 + 12345) & 0x7fffffff;
    const j = s % (i + 1);
    [indices[i], indices[j]] = [indices[j], indices[i]];
  }
  for (let i = 0; i < remaining; i++) {
    completed[indices[i]] = true;
  }

  return { completed, current };
}

export function GoalProgress({ onNavigate, tasks, frequencies }: GoalProgressProps) {
  const progressTasks = useMemo(() => {
    if (tasks.length === 0) return [];
    return tasks.map((name, i) => {
      const frequency = frequencies[i] || 1;
      const { completed, current } = generateCompletion(frequency, i * 7 + 3);
      return { name, frequency, completed, current };
    });
  }, [tasks, frequencies]);

  const totalCompleted = progressTasks.reduce((sum, task) => sum + task.current, 0);
  const totalRequired = progressTasks.reduce((sum, task) => sum + task.frequency, 0);
  const completionPercentage = totalRequired > 0 ? Math.round((totalCompleted / totalRequired) * 100) : 0;
  return (
    <PhoneFrame>
      <div className="h-full flex flex-col pt-14">
        {/* Header */}
        <div className="px-6 py-6 border-b border-[#EDE8DF]">
          <h1 className="text-xl text-[#3B4A2F]" style={{ fontFamily: 'Canela, serif', fontWeight: 400 }}>Your Roots · Week 5</h1>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-6 py-6 pb-24">
          {/* Task Rows */}
          <div className="space-y-4 mb-8">
            {progressTasks.map((task, index) => (
              <div key={index} className="bg-white rounded-3xl p-4 shadow-sm">
                <div className="flex items-center justify-between mb-3" style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif' }}>
                  <p className="text-[#1A1A1A]">{task.name}</p>
                  <p className="text-sm text-[#1A1A1A]">{task.current}/{task.frequency}</p>
                </div>

                {/* Streak Bar */}
                <div className="flex gap-1.5">
                  {task.completed.map((isCompleted, dayIndex) => {
                    const isToday = dayIndex === 5 && dayIndex < task.frequency;

                    return (
                      <div key={dayIndex} className="flex-1 flex flex-col items-center gap-1">
                        <div
                          className={`w-full h-8 rounded-lg ${
                            isToday
                              ? 'bg-[#C4622D]'
                              : isCompleted
                              ? 'bg-[#3B4A2F]'
                              : 'bg-[#EDE8DF]'
                          }`}
                        />
                        {dayIndex < task.frequency && (
                          <span className="text-xs text-[#1A1A1A]" style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif' }}>
                            {days[dayIndex]}
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Summary Card */}
          <div className="bg-[#EDE8DF] rounded-3xl p-6 flex flex-col items-center">
            {/* Progress Ring */}
            <div className="relative w-32 h-32 mb-4">
              <svg className="w-full h-full -rotate-90">
                <circle
                  cx="64"
                  cy="64"
                  r="56"
                  stroke="#FDF8F2"
                  strokeWidth="12"
                  fill="none"
                />
                <circle
                  cx="64"
                  cy="64"
                  r="56"
                  stroke="#3B4A2F"
                  strokeWidth="12"
                  fill="none"
                  strokeDasharray={`${2 * Math.PI * 56}`}
                  strokeDashoffset={`${2 * Math.PI * 56 * (1 - completionPercentage / 100)}`}
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-3xl text-[#1A1A1A]" style={{ fontFamily: 'Canela, serif', fontWeight: 400 }}>{completionPercentage}%</span>
              </div>
            </div>

            <p className="text-[#1A1A1A] mb-1" style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif', fontWeight: 500 }}>This week</p>
            <p className="text-sm text-[#1A1A1A] text-center" style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif' }}>
              You're building something real.
            </p>
          </div>
        </div>

        <BottomNav active="progress" onNavigate={onNavigate} />
      </div>
    </PhoneFrame>
  );
}
