import { PhoneFrame } from './PhoneFrame';
import { BottomNav } from './BottomNav';

const MAYA_AVATAR = 'https://images.unsplash.com/photo-1771757019737-4468ded75c97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMGFzaWFuJTIwd29tYW4lMjBwb3J0cmFpdCUyMG5hdHVyYWwlMjBjYXN1YWx8ZW58MXx8fHwxNzczOTQ3OTIyfDA&ixlib=rb-4.1.0&q=80&w=1080';

const tasks = [
  'Morning walk',
  'Read 20 pages',
  'No social media before 9am',
  'Cook dinner at home',
  '10 min journaling'
];

const taskPhotos = {
  'Morning walk': [
    { day: 'Mon', image: 'https://images.unsplash.com/photo-1772569874251-60a09d41604f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3JuaW5nJTIwd2FsayUyMG91dGRvb3IlMjBuYXR1cmUlMjBwYXRofGVufDF8fHx8MTc3Mzk0NzkyM3ww&ixlib=rb-4.1.0&q=80&w=1080' },
    { day: 'Wed', image: 'https://images.unsplash.com/photo-1767806580462-04ac27b4d4e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb24lMjB3YWxraW5nJTIwbGVhZnklMjBmb3Jlc3QlMjBwYXRofGVufDF8fHx8MTc3MzgxMjI2Nnww&ixlib=rb-4.1.0&q=80&w=1080' },
    { day: 'Thu', image: 'https://images.unsplash.com/photo-1618020669553-9ee35740052d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3JuaW5nJTIwd2FsayUyMHN1bnJpc2UlMjBvdXRkb29yfGVufDF8fHx8MTc3MzgxMjI2OHww&ixlib=rb-4.1.0&q=80&w=1080' },
    { day: 'Fri', image: 'https://images.unsplash.com/photo-1717883042982-6570a9fb6b49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb24lMjBoaWtpbmclMjB0cmFpbCUyMG5hdHVyZXxlbnwxfHx8fDE3NzM4MTIyNjl8MA&ixlib=rb-4.1.0&q=80&w=1080' },
    { day: 'Sat', image: 'https://images.unsplash.com/photo-1768383352204-723c96196be2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb24lMjBtb3JuaW5nJTIwd2FsayUyMHBhcmslMjBuYXR1cmV8ZW58MXx8fHwxNzczODEyMjY1fDA&ixlib=rb-4.1.0&q=80&w=1080' }
  ],
  'Read 20 pages': [
    { day: 'Mon', image: 'https://images.unsplash.com/photo-1553627558-d738c10f89da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcGVuJTIwYm9vayUyMHdvb2RlbiUyMHRhYmxlJTIwcmVhZGluZ3xlbnwxfHx8fDE3NzM5NDg1NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' },
    { day: 'Tue', image: 'https://images.unsplash.com/photo-1739133087944-0a6311a2319b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3p5JTIwcmVhZGluZyUyMGNvcm5lciUyMGJvb2t8ZW58MXx8fHwxNzczOTQ4NTY2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' },
    { day: 'Thu', image: 'https://images.unsplash.com/photo-1769021488255-c58d0b4748f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rJTIwcGFnZXMlMjBjb2ZmZWUlMjB0YWJsZXxlbnwxfHx8fDE3NzM5NDg1NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' },
    { day: 'Sat', image: 'https://images.unsplash.com/photo-1660489884646-ec557a53e6a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFkaW5nJTIwYm9vayUyMG5hdHVyYWwlMjBsaWdodHxlbnwxfHx8fDE3NzM5NDg1Njd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' }
  ],
  'No social media before 9am': [
    { day: 'Mon', image: 'https://images.unsplash.com/photo-1704814685609-88f7d913aa49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3JuaW5nJTIwY29mZmVlJTIwbm90ZWJvb2slMjBubyUyMHBob25lfGVufDF8fHx8MTc3Mzk0ODU2N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' },
    { day: 'Tue', image: 'https://images.unsplash.com/photo-1771499931737-6fd07b407ff2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3JuaW5nJTIwcm91dGluZSUyMHdvcmtzcGFjZSUyMGNhbG18ZW58MXx8fHwxNzczOTQ4NTY4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' },
    { day: 'Wed', image: 'https://images.unsplash.com/photo-1523920290228-4f321a939b4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZWFjZWZ1bCUyMG1vcm5pbmclMjB0ZWElMjBqb3VybmFsfGVufDF8fHx8MTc3Mzk0ODU2OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' },
    { day: 'Thu', image: 'https://images.unsplash.com/photo-1662038271111-5b1c0b4157e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmVha2Zhc3QlMjB0YWJsZSUyMHdpbmRvdyUyMG1vcm5pbmd8ZW58MXx8fHwxNzczOTQ4NTY4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' },
    { day: 'Fri', image: 'https://images.unsplash.com/photo-1771499931737-6fd07b407ff2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3JuaW5nJTIwcm91dGluZSUyMHdvcmtzcGFjZSUyMGNhbG18ZW58MXx8fHwxNzczOTQ4NTY4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' },
    { day: 'Sat', image: 'https://images.unsplash.com/photo-1704814685609-88f7d913aa49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3JuaW5nJTIwY29mZmVlJTIwbm90ZWJvb2slMjBubyUyMHBob25lfGVufDF8fHx8MTc3Mzk0ODU2N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' },
    { day: 'Sun', image: 'https://images.unsplash.com/photo-1523920290228-4f321a939b4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZWFjZWZ1bCUyMG1vcm5pbmclMjB0ZWElMjBqb3VybmFsfGVufDF8fHx8MTc3Mzk0ODU2OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' }
  ],
  'Cook dinner at home': [
    { day: 'Tue', image: 'https://images.unsplash.com/photo-1636647511414-c9ec06da32bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb29raW5nJTIwZGlubmVyJTIwa2l0Y2hlbiUyMHByZXB8ZW58MXx8fHwxNzczOTQ4NTY5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' },
    { day: 'Wed', image: 'https://images.unsplash.com/photo-1693042978565-4c4a2f06605b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lbWFkZSUyMGRpbm5lciUyMHBsYXRlJTIwZm9vZHxlbnwxfHx8fDE3NzM5NDg1NzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' },
    { day: 'Sat', image: 'https://images.unsplash.com/photo-1765200231351-83120f0b9b90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraXRjaGVuJTIwY29va2luZyUyMHZlZ2V0YWJsZXMlMjBob21lfGVufDF8fHx8MTc3Mzk0ODU3MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' }
  ],
  '10 min journaling': [
    { day: 'Mon', image: 'https://images.unsplash.com/photo-1553018440-8e05c070608a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqb3VybmFsJTIwcGVuJTIwbGluZW4lMjBmYWJyaWN8ZW58MXx8fHwxNzczOTQ4NTcxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' },
    { day: 'Tue', image: 'https://images.unsplash.com/photo-1760840415585-ae89d94bb636?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqb3VybmFsaW5nJTIwbm90ZWJvb2slMjB3YXJtJTIwbGlnaHR8ZW58MXx8fHwxNzczOTQ4NTcxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' },
    { day: 'Wed', image: 'https://images.unsplash.com/photo-1656877280226-ebf9ea8b1303?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3cml0aW5nJTIwam91cm5hbCUyMGNvZmZlZXxlbnwxfHx8fDE3NzM5NDg1NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' },
    { day: 'Thu', image: 'https://images.unsplash.com/photo-1748609422318-7301636fb625?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxub3RlYm9vayUyMHBlbiUyMGRlc2slMjB3cml0aW5nfGVufDF8fHx8MTc3Mzk0ODU3Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' },
    { day: 'Fri', image: 'https://images.unsplash.com/photo-1553018440-8e05c070608a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqb3VybmFsJTIwcGVuJTIwbGluZW4lMjBmYWJyaWN8ZW58MXx8fHwxNzczOTQ4NTcxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' },
    { day: 'Sun', image: 'https://images.unsplash.com/photo-1760840415585-ae89d94bb636?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqb3VybmFsaW5nJTIwbm90ZWJvb2slMjB3YXJtJTIwbGlnaHR8ZW58MXx8fHwxNzczOTQ4NTcxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' }
  ]
};

export function EndOfDaySummary() {
  const activeTask = 'Read 20 pages';
  const photos = taskPhotos[activeTask] || [];

  return (
    <PhoneFrame>
      <div className="h-full flex flex-col pt-14">
        {/* Header */}
        <div className="px-6 py-6 border-b border-[#EDE8DF]">
          <h1 className="text-xl text-[#3B4A2F] mb-1" style={{ fontFamily: 'Canela, serif', fontWeight: 400 }}>Week 4 Reflection</h1>
          <p className="text-sm text-[#8B6F47]" style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif' }}>March 10–16</p>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-6 py-6 pb-24">
          {/* Task Tabs */}
          <div className="flex gap-2 overflow-x-auto pb-4 mb-4">
            {tasks.map((task, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full flex-shrink-0 ${
                  task === activeTask
                    ? 'bg-[#3B4A2F] text-white'
                    : 'bg-[#EDE8DF] text-[#3B4A2F]'
                }`}
                style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif', fontWeight: task === activeTask ? 500 : 400 }}
              >
                {task}
              </button>
            ))}
          </div>

          {/* Photo Grid */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            {photos.map((photo, index) => (
              <div key={index} className="space-y-1">
                <div className="w-full h-32 bg-[#EDE8DF] rounded-2xl overflow-hidden">
                  <img 
                    src={photo.image} 
                    alt={`${activeTask} - ${photo.day}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-xs text-[#1A1A1A]" style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif' }}>{photo.day}</p>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="flex items-center gap-3 my-6">
            <div className="flex-1 h-px bg-[#C4622D]" />
            <span className="text-sm text-[#1A1A1A]" style={{ fontFamily: 'Canela, serif', fontWeight: 400 }}>Weekly Reflection</span>
            <div className="flex-1 h-px bg-[#C4622D]" />
          </div>

          {/* Reflection Questions */}
          <div className="space-y-3 mb-6">
            {/* Question 1 */}
            <div className="bg-[#EDE8DF] rounded-3xl p-5">
              <p className="text-sm text-[#1A1A1A] mb-3" style={{ fontFamily: 'Canela, serif', fontWeight: 400 }}>
                What felt easiest to show up for this week?
              </p>
              <textarea
                className="w-full bg-white rounded-2xl p-3 text-sm text-[#1A1A1A] resize-none"
                rows={2}
                placeholder="Type your reflection..."
                style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif' }}
              />
            </div>

            {/* Question 2 */}
            <div className="bg-[#EDE8DF] rounded-3xl p-5">
              <p className="text-sm text-[#1A1A1A] mb-3" style={{ fontFamily: 'Canela, serif', fontWeight: 400 }}>
                Where did you lose momentum, and why?
              </p>
              <textarea
                className="w-full bg-white rounded-2xl p-3 text-sm text-[#1A1A1A] resize-none"
                rows={2}
                placeholder="Type your reflection..."
                style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif' }}
              />
            </div>

            {/* Question 3 - This week's question */}
            <div className="bg-[#EDE8DF] rounded-3xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <p className="text-sm text-[#1A1A1A] flex-1" style={{ fontFamily: 'Canela, serif', fontWeight: 400 }}>
                  What would you do differently if you had this week again?
                </p>
                <span className="text-xs text-[#C4622D] bg-white px-2 py-1 rounded-full flex-shrink-0" style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif' }}>
                  This week's question ✦
                </span>
              </div>
              <textarea
                className="w-full bg-white rounded-2xl p-3 text-sm text-[#1A1A1A] resize-none"
                rows={2}
                placeholder="Type your reflection..."
                style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif' }}
              />
            </div>
          </div>

          {/* Additional Thoughts */}
          <div className="bg-[#EDE8DF] rounded-3xl p-5 mb-6">
            <p className="text-sm text-[#8B6F47] mb-3" style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif' }}>
              Additional thoughts
            </p>
            <textarea
              className="w-full bg-white rounded-2xl p-3 text-sm text-[#1A1A1A] resize-none"
              rows={3}
              placeholder="Any other reflections on this week..."
              style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif' }}
            />
          </div>

          {/* Save Button */}
          <button className="w-full bg-[#3B4A2F] text-white py-4 rounded-2xl" style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif', fontWeight: 500 }}>
            Save reflection
          </button>
        </div>

        <BottomNav active="home" />
      </div>
    </PhoneFrame>
  );
}
