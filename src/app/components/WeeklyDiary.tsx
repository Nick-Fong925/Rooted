import { PhoneFrame } from './PhoneFrame';
import { BottomNav } from './BottomNav';
import { Calendar } from 'lucide-react';

const MAYA_AVATAR = 'https://images.unsplash.com/photo-1771757019737-4468ded75c97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMGFzaWFuJTIwd29tYW4lMjBwb3J0cmFpdCUyMG5hdHVyYWwlMjBjYXN1YWx8ZW58MXx8fHwxNzczOTQ3OTIyfDA&ixlib=rb-4.1.0&q=80&w=1080';

const weekPhotos = [
  { day: 1, caption: 'Morning walk', image: 'https://images.unsplash.com/photo-1767806580462-04ac27b4d4e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb24lMjB3YWxraW5nJTIwbGVhZnklMjBmb3Jlc3QlMjBwYXRofGVufDF8fHx8MTc3MzgxMjI2Nnww&ixlib=rb-4.1.0&q=80&w=1080' },
  { day: 2, caption: 'Read 20 pages', image: 'https://images.unsplash.com/photo-1766431014989-3a1fce5420a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rJTIwcmVhZGluZyUyMGNvenklMjBuYXR1cmFsJTIwbGlnaHR8ZW58MXx8fHwxNzczODEyMjY3fDA&ixlib=rb-4.1.0&q=80&w=1080' },
  { day: 3, caption: 'Morning walk', image: 'https://images.unsplash.com/photo-1618020669553-9ee35740052d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3JuaW5nJTIwd2FsayUyMHN1bnJpc2UlMjBvdXRkb29yfGVufDF8fHx8MTc3MzgxMjI2OHww&ixlib=rb-4.1.0&q=80&w=1080' },
  { day: 4, caption: 'Cook dinner', image: 'https://images.unsplash.com/photo-1625467157210-213ffafa392b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lbWFkZSUyMHBhc3RhJTIwZGlubmVyJTIwdGFibGV8ZW58MXx8fHwxNzczNzU3MDc3fDA&ixlib=rb-4.1.0&q=80&w=1080' },
  { day: 5, caption: '10 min journaling', image: 'https://images.unsplash.com/photo-1553018440-8e05c070608a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqb3VybmFsJTIwcGVuJTIwbGluZW4lMjBub3RlYm9va3xlbnwxfHx8fDE3NzM4MTIyNjd8MA&ixlib=rb-4.1.0&q=80&w=1080' },
  { day: 6, caption: 'Morning walk', image: 'https://images.unsplash.com/photo-1717883042982-6570a9fb6b49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb24lMjBoaWtpbmclMjB0cmFpbCUyMG5hdHVyZXxlbnwxfHx8fDE3NzM4MTIyNjl8MA&ixlib=rb-4.1.0&q=80&w=1080' },
  { day: 7, caption: 'Read 20 pages', image: 'https://images.unsplash.com/photo-1768168211205-34146e00408c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFkaW5nJTIwYm9vayUyMG5hdHVyYWwlMjB3aW5kb3clMjBsaWdodHxlbnwxfHx8fDE3NzM4MTIyNjl8MA&ixlib=rb-4.1.0&q=80&w=1080' },
  { day: 7, caption: 'Cook dinner', image: 'https://images.unsplash.com/photo-1651697347337-0d018decfad4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb29raW5nJTIwZnJlc2glMjB2ZWdldGFibGVzJTIwa2l0Y2hlbnxlbnwxfHx8fDE3NzM4MTIyNjl8MA&ixlib=rb-4.1.0&q=80&w=1080' }
];

export function WeeklyDiary() {
  return (
    <PhoneFrame>
      <div className="h-full flex flex-col pt-14">
        {/* Header */}
        <div className="px-6 py-6 border-b border-[#EDE8DF]">
          <div className="flex items-center gap-2">
            <Calendar size={20} color="#1A1A1A" />
            <h1 className="text-xl text-[#3B4A2F]" style={{ fontFamily: 'Canela, serif', fontWeight: 400 }}>Week 4 — March 10–16</h1>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-6 py-6 pb-24">
          {/* Photo Grid */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            {weekPhotos.map((photo, index) => (
              <div key={index} className="space-y-1">
                <div className="w-full h-32 bg-[#EDE8DF] rounded-2xl overflow-hidden">
                  <img 
                    src={photo.image} 
                    alt={photo.caption}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-xs text-[#1A1A1A]" style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif' }}>Day {photo.day} · {photo.caption}</p>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="flex items-center gap-3 my-6">
            <div className="flex-1 h-px bg-[#EDE8DF]" />
            <span className="text-sm text-[#1A1A1A]" style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif' }}>Weekly Reflection</span>
            <div className="flex-1 h-px bg-[#EDE8DF]" />
          </div>

          {/* Reflection Card */}
          <div className="bg-[#EDE8DF] rounded-3xl p-5 space-y-4 mb-6">
            <div>
              <p className="text-sm text-[#1A1A1A] mb-2" style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif', fontWeight: 500 }}>What worked this week?</p>
              <p className="text-sm text-[#1A1A1A] leading-relaxed" style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif' }}>
                Morning walks have been great for clearing my head. Doing them right after waking up seems to be the key.
              </p>
            </div>
            <div>
              <p className="text-sm text-[#1A1A1A] mb-2" style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif', fontWeight: 500 }}>Where did you struggle?</p>
              <p className="text-sm text-[#1A1A1A] leading-relaxed" style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif' }}>
                Thursday and Friday were tough — work got really busy and I skipped a few tasks. Need to be more flexible with timing.
              </p>
            </div>
          </div>

          {/* Save Button */}
          <button className="w-full bg-[#C4622D] text-white py-4 rounded-2xl" style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif', fontWeight: 500 }}>
            Save Reflection
          </button>
        </div>

        <BottomNav active="diary" />
      </div>
    </PhoneFrame>
  );
}