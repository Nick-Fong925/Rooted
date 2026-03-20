import { PhoneFrame } from './PhoneFrame';
import { X } from 'lucide-react';

const MAYA_AVATAR = 'https://images.unsplash.com/photo-1771757019737-4468ded75c97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMGFzaWFuJTIwd29tYW4lMjBwb3J0cmFpdCUyMG5hdHVyYWwlMjBjYXN1YWx8ZW58MXx8fHwxNzczOTQ3OTIyfDA&ixlib=rb-4.1.0&q=80&w=1080';

const goals = [
  'Morning walk',
  'Read 20 pages',
  'No social media before 9am',
  'Cook dinner at home',
  '10 min journaling'
];

export function PostCreation() {
  return (
    <PhoneFrame>
      <div className="h-full flex flex-col relative">
        {/* Full-bleed camera viewfinder */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1758874960608-f0d7f38d9846?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lbWFkZSUyMGZvb2QlMjBib3lsJTIwa2l0Y2hlbiUyMGNvdW50ZXJ8ZW58MXx8fHwxNzczOTQ3NTM0fDA&ixlib=rb-4.1.0&q=80&w=1080" 
            alt="Post preview"
            className="w-full h-full object-cover"
          />
          {/* Dark gradient overlay at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black/60 to-transparent" />
        </div>

        {/* Top overlay controls */}
        <div className="relative z-10 px-6 py-4 pt-16 flex items-center justify-between">
          <button>
            <X size={28} color="white" strokeWidth={2} />
          </button>
          <div className="w-10 h-10 rounded-full bg-[#EDE8DF] overflow-hidden">
            <img 
              src={MAYA_AVATAR}
              alt="Maya Chen" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Bottom controls */}
        <div className="relative z-10 mt-auto px-6 pb-8 space-y-4">
          {/* Scrollable goal pill selector */}
          <div className="flex gap-2 overflow-x-auto pb-2">
            {goals.map((goal, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full flex-shrink-0 ${
                  index === 3
                    ? 'bg-[#C4622D] text-white'
                    : 'border-2 border-white/80 text-white bg-white/10'
                }`}
                style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif', fontWeight: index === 3 ? 500 : 400 }}
              >
                {goal}
              </button>
            ))}
          </div>

          {/* Post button */}
          <button className="w-full bg-[#3B4A2F] text-white py-4 rounded-2xl" style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif', fontWeight: 500 }}>
            Post to Rooted
          </button>
        </div>
      </div>
    </PhoneFrame>
  );
}