import { PhoneFrame } from './PhoneFrame';
import { BottomNav } from './BottomNav';

const MAYA_AVATAR = 'https://images.unsplash.com/photo-1771757019737-4468ded75c97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMGFzaWFuJTIwd29tYW4lMjBwb3J0cmFpdCUyMG5hdHVyYWwlMjBjYXN1YWx8ZW58MXx8fHwxNzczOTQ3OTIyfDA&ixlib=rb-4.1.0&q=80&w=1080';

const tasks = [
  { name: 'Morning walk', frequency: 5, completed: [true, true, false, true, true], current: 4 },
  { name: 'Read 20 pages', frequency: 4, completed: [true, true, true, false], current: 3 },
  { name: 'No social media before 9am', frequency: 7, completed: [true, false, true, true, false, true, false], current: 4 },
  { name: 'Cook dinner at home', frequency: 3, completed: [false, true, true], current: 2 },
  { name: '10 min journaling', frequency: 4, completed: [true, true, false, true], current: 3 }
];

const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

// Calculate overall completion
const totalCompleted = tasks.reduce((sum, task) => sum + task.current, 0);
const totalRequired = tasks.reduce((sum, task) => sum + task.frequency, 0);
const completionPercentage = Math.round((totalCompleted / totalRequired) * 100);

export function GoalProgress() {
  return (
    <PhoneFrame>
      <div className="h-full flex flex-col pt-14">
        {/* Header */}
        <div className="px-6 py-6 border-b border-[#EDE8DF]">
          <h1 className="text-xl text-[#3B4A2F]" style={{ fontFamily: 'Canela, serif', fontWeight: 400 }}>Your Roots · Week 4</h1>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-6 py-6 pb-24">
          {/* Task Rows */}
          <div className="space-y-4 mb-8">
            {tasks.map((task, index) => (
              <div key={index} className="bg-white rounded-3xl p-4 shadow-sm">
                <div className="flex items-center justify-between mb-3" style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif' }}>
                  <p className="text-[#1A1A1A]">{task.name}</p>
                  <p className="text-sm text-[#1A1A1A]">{task.current}/{task.frequency}</p>
                </div>
                
                {/* Streak Bar */}
                <div className="flex gap-1.5">
                  {task.completed.map((isCompleted, dayIndex) => {
                    // Determine if this is "today" (5th index = Saturday)
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

        <BottomNav active="progress" />
      </div>
    </PhoneFrame>
  );
}
