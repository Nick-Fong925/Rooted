import { PhoneFrame } from './PhoneFrame';
import { BottomNav } from './BottomNav';
import { ChevronRight } from 'lucide-react';

const MAYA_AVATAR = 'https://images.unsplash.com/photo-1771757019737-4468ded75c97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMGFzaWFuJTIwd29tYW4lMjBwb3J0cmFpdCUyMG5hdHVyYWwlMjBjYXN1YWx8ZW58MXx8fHwxNzczOTQ3OTIyfDA&ixlib=rb-4.1.0&q=80&w=1080';

const diaryEntries = [
  {
    week: 'Week 3 · Mar 3–9',
    excerpt: 'Really proud of staying consistent with morning walks. The evening cooking routine needs work though...',
    images: [
      'https://images.unsplash.com/photo-1623222316492-d7bddd11a0de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb24lMjBmb3Jlc3QlMjBwYXRoJTIwd2Fsa2luZ3xlbnwxfHx8fDE3NzM4MTIyNzV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1665764356520-3daa0e8326b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kd3JpdHRlbiUyMGpvdXJuYWwlMjBjb2ZmZWUlMjBtb3JuaW5nfGVufDF8fHx8MTc3MzgxMjI3MHww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1759689975548-2e3a06b3d816?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwbWVhbCUyMGJvd2wlMjB3b29kZW4lMjB0YWJsZXxlbnwxfHx8fDE3NzM4MTIyNzF8MA&ixlib=rb-4.1.0&q=80&w=1080'
    ]
  },
  {
    week: 'Week 2 · Feb 24–Mar 2',
    excerpt: 'Struggled mid-week but finished strong. Learning that flexibility is key when work gets busy.',
    images: [
      'https://images.unsplash.com/photo-1765609118489-39de95d7bac4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpdGF0aW9uJTIwam91cm5hbCUyMHBlYWNlZnVsJTIwbW9ybmluZ3xlbnwxfHx8fDE3NzM4MTIyNzF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1516201813791-779fe0b77742?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqb3VybmFsJTIwd3JpdGluZyUyMG1vcm5pbmclMjByb3V0aW5lfGVufDF8fHx8MTc3MzgxMjI3NXww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1768383352204-723c96196be2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb24lMjBtb3JuaW5nJTIwd2FsayUyMHBhcmslMjBuYXR1cmV8ZW58MXx8fHwxNzczODEyMjY1fDA&ixlib=rb-4.1.0&q=80&w=1080'
    ]
  },
  {
    week: 'Week 1 · Feb 17–23',
    excerpt: 'First week! Everything felt new and exciting. The social accountability really helped me stay on track.',
    images: [
      'https://images.unsplash.com/photo-1762335986639-eb84a5cdd0e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcGVuJTIwYm9vayUyMGNvZmZlZSUyMHdvb2RlbiUyMHRhYmxlfGVufDF8fHx8MTc3MzgxMjIxOHww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1625467157210-213ffafa392b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lbWFkZSUyMHBhc3RhJTIwZGlubmVyJTIwdGFibGV8ZW58MXx8fHwxNzczNzU3MDc3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1767806580462-04ac27b4d4e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb24lMjB3YWxraW5nJTIwbGVhZnklMjBmb3Jlc3QlMjBwYXRofGVufDF8fHx8MTc3MzgxMjI2Nnww&ixlib=rb-4.1.0&q=80&w=1080'
    ]
  }
];

export function ProfilePage() {
  return (
    <PhoneFrame>
      <div className="h-full flex flex-col pt-14">
        {/* Content */}
        <div className="flex-1 overflow-y-auto px-6 py-8 pb-24">
          {/* Profile Header */}
          <div className="flex flex-col items-center mb-8">
            <div className="w-24 h-24 rounded-full bg-[#EDE8DF] mb-4 overflow-hidden">
              <img 
                src={MAYA_AVATAR}
                alt="Maya Chen" 
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-2xl text-[#3B4A2F] mb-1" style={{ fontFamily: 'Canela, serif', fontWeight: 400 }}>Maya Chen</h1>
            <p className="text-sm text-[#1A1A1A] mb-4" style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif' }}>Rooted since Jan 2025 · Week 4 streak 🔥</p>
            
            {/* Stats */}
            <div className="flex gap-3">
              <div className="bg-[#EDE8DF] px-4 py-2 rounded-full">
                <span className="text-sm text-[#1A1A1A]" style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif' }}>Tasks committed: 5</span>
              </div>
              <div className="bg-[#EDE8DF] px-4 py-2 rounded-full">
                <span className="text-sm text-[#1A1A1A]" style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif' }}>Best streak: 18 days</span>
              </div>
            </div>
          </div>

          {/* Diary Section */}
          <div>
            <h2 className="text-lg text-[#1A1A1A] mb-4" style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif', fontWeight: 500 }}>My Diary</h2>
            <div className="space-y-3">
              {diaryEntries.map((entry, index) => (
                <div key={index} className="bg-[#EDE8DF] rounded-3xl p-4">
                  <div className="flex items-start justify-between mb-3">
                    <p className="text-[#1A1A1A]" style={{ fontFamily: 'Canela, serif', fontWeight: 400 }}>{entry.week}</p>
                    <ChevronRight size={20} color="#C4622D" />
                  </div>
                  
                  {/* Thumbnail Grid */}
                  <div className="flex gap-2 mb-3">
                    {entry.images.map((img, imgIndex) => (
                      <div key={imgIndex} className="w-16 h-16 bg-white rounded-xl overflow-hidden">
                        <img 
                          src={img} 
                          alt={`Week ${index + 1} photo ${imgIndex + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  
                  {/* Excerpt */}
                  <p className="text-sm text-[#1A1A1A] leading-relaxed line-clamp-2" style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif' }}>
                    {entry.excerpt}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <BottomNav active="profile" />
      </div>
    </PhoneFrame>
  );
}