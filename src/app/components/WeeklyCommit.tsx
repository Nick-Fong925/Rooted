import { PhoneFrame } from './PhoneFrame';

const tasks = [
  { label: 'Task 1', value: 'Morning walk', frequency: 5, filled: true },
  { label: 'Task 2', value: 'Read 20 pages', frequency: 4, filled: true },
  { label: 'Task 3', value: '', frequency: 7, filled: false },
  { label: 'Task 4', value: '', frequency: 3, filled: false },
  { label: 'Task 5', value: '', frequency: 6, filled: false }
];

const MAYA_AVATAR = 'https://images.unsplash.com/photo-1771757019737-4468ded75c97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMGFzaWFuJTIwd29tYW4lMjBwb3J0cmFpdCUyMG5hdHVyYWwlMjBjYXN1YWx8ZW58MXx8fHwxNzczOTQ3OTIyfDA&ixlib=rb-4.1.0&q=80&w=1080';

export function WeeklyCommit() {
  return (
    <PhoneFrame>
      <div className="h-full flex flex-col">
        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-6 pt-16 pb-32">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-2xl text-[#1A1A1A] mb-1" style={{ fontFamily: 'Canela, serif', fontWeight: 400 }}>
                Good Monday, Maya 🌱
              </h1>
              <p className="text-[#1A1A1A]" style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif' }}>
                What are you committing to this week?
              </p>
            </div>

            {/* Progress indicator */}
            <div className="mb-6">
              <p className="text-sm text-[#1A1A1A]" style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif' }}>Week 4</p>
            </div>

            {/* Task Cards */}
            <div className="space-y-3">
              {tasks.map((task, index) => (
                <div key={index} className="bg-[#EDE8DF] rounded-3xl p-4">
                  {/* Task number label */}
                  <p className="text-xs text-[#8B6F47] mb-2" style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif' }}>
                    {task.label}
                  </p>
                  
                  {/* Text input */}
                  <input
                    type="text"
                    value={task.filled ? task.value : ''}
                    placeholder={task.filled ? '' : 'What will you commit to?'}
                    readOnly
                    className="w-full bg-[#FDF8F2] rounded-lg px-3 py-2.5 mb-3 outline-none"
                    style={{ 
                      fontFamily: 'Helvetica Neue, Arial, sans-serif',
                      border: '1px solid rgba(59, 74, 47, 0.2)',
                      color: task.filled ? '#1A1A1A' : '#8B6F47'
                    }}
                  />
                  
                  {/* Pill Strip */}
                  <div className="flex gap-1.5 mb-2">
                    {[1, 2, 3, 4, 5, 6, 7].map((num) => (
                      <button
                        key={num}
                        className={`w-7 h-7 rounded-full flex items-center justify-center ${
                          num === task.frequency
                            ? 'bg-[#3B4A2F] text-white'
                            : 'bg-transparent border border-[#3B4A2F] text-[#3B4A2F]'
                        }`}
                        style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif', fontSize: '13px', fontWeight: num === task.frequency ? 500 : 400 }}
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
          {/* Fade */}
          <div className="h-8 bg-gradient-to-t from-[#FDF8F2] to-transparent" />
          
          {/* Button Container */}
          <div className="bg-[#FDF8F2] px-6 pb-6">
            <button className="w-full bg-[#3B4A2F] text-white py-4 rounded-2xl text-lg" style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif', fontWeight: 500 }}>
              Plant my week
            </button>
          </div>
        </div>
      </div>
    </PhoneFrame>
  );
}