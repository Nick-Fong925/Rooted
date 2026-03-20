import { PhoneFrame } from './PhoneFrame';
import { BottomNav } from './BottomNav';
import { Leaf, Bell } from 'lucide-react';

const MAYA_AVATAR = 'https://images.unsplash.com/photo-1771757019737-4468ded75c97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMGFzaWFuJTIwd29tYW4lMjBwb3J0cmFpdCUyMG5hdHVyYWwlMjBjYXN1YWx8ZW58MXx8fHwxNzczOTQ3OTIyfDA&ixlib=rb-4.1.0&q=80&w=1080';

const friends = [
  { name: 'Alex', streak: 7, avatar: 'https://images.unsplash.com/photo-1740125492786-aaadb4458fe4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb24lMjBwb3J0cmFpdCUyMGV2ZXJ5ZGF5JTIwY2FzdWFsJTIwc2V0dGluZ3xlbnwxfHx8fDE3NzM4MTY3Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080' },
  { name: 'Jordan', streak: 12, avatar: 'https://images.unsplash.com/photo-1747374135959-9291ba69215e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBwb3J0cmFpdCUyMG5hdHVyYWwlMjBjYW5kaWQlMjBvdXRkb29yfGVufDF8fHx8MTc3MzgxNjc0MHww&ixlib=rb-4.1.0&q=80&w=1080' },
  { name: 'Sam', streak: 4, avatar: 'https://images.unsplash.com/photo-1556575533-7190b053c299?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHdvbWFuJTIwY2FzdWFsJTIwcG9ydHJhaXQlMjByZWFsaXN0aWN8ZW58MXx8fHwxNzczODE2NzQwfDA&ixlib=rb-4.1.0&q=80&w=1080' },
  { name: 'Riley', streak: 15, avatar: 'https://images.unsplash.com/photo-1758523672241-7147a40ea84f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb24lMjBzbWlsaW5nJTIwY2FzdWFsJTIwaGVhZHNob3QlMjBuYXR1cmFsfGVufDF8fHx8MTc3MzgxNjc0MHww&ixlib=rb-4.1.0&q=80&w=1080' }
];

const posts = [
  {
    name: 'Jordan Lee',
    task: 'Morning walk ✓',
    caption: 'Beautiful sunrise at the park today 🌅',
    streak: 12,
    image: 'https://images.unsplash.com/photo-1768383352204-723c96196be2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb24lMjBtb3JuaW5nJTIwd2FsayUyMHBhcmslMjBuYXR1cmV8ZW58MXx8fHwxNzczODEyMjY1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    avatar: 'https://images.unsplash.com/photo-1747374135959-9291ba69215e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBwb3J0cmFpdCUyMG5hdHVyYWwlMjBjYW5kaWQlMjBvdXRkb29yfGVufDF8fHx8MTc3MzgxNjc0MHww&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    name: 'Alex Rivera',
    task: 'Read 20 pages ✓',
    caption: 'Finally started that book everyone recommended',
    streak: 7,
    image: 'https://images.unsplash.com/photo-1762335986639-eb84a5cdd0e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcGVuJTIwYm9vayUyMGNvZmZlZSUyMHdvb2RlbiUyMHRhYmxlfGVufDF8fHx8MTc3MzgxMjIxOHww&ixlib=rb-4.1.0&q=80&w=1080',
    avatar: 'https://images.unsplash.com/photo-1740125492786-aaadb4458fe4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb24lMjBwb3J0cmFpdCUyMGV2ZXJ5ZGF5JTIwY2FzdWFsJTIwc2V0dGluZ3xlbnwxfHx8fDE3NzM4MTY3Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080'
  }
];

export function HomeFeed() {
  return (
    <PhoneFrame>
      <div className="h-full flex flex-col pt-14">
        {/* Top Nav */}
        <div className="px-6 py-4 flex items-center justify-between border-b border-[#EDE8DF]">
          <div className="flex items-center gap-2">
            <Leaf size={24} color="#3B4A2F" />
            <span className="text-xl text-[#3B4A2F]" style={{ fontFamily: 'Canela, serif', fontWeight: 400 }}>Rooted</span>
          </div>
          <Bell size={24} color="#1A1A1A" />
        </div>

        {/* Stories Row */}
        <div className="px-6 py-4 flex gap-4 overflow-x-auto border-b border-[#EDE8DF]">
          {friends.map((friend, index) => (
            <div key={index} className="flex flex-col items-center gap-1 flex-shrink-0" style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif' }}>
              <div className="w-16 h-16 rounded-full bg-[#EDE8DF] border-2 border-[#C4622D] overflow-hidden">
                <img src={friend.avatar} alt={friend.name} className="w-full h-full object-cover" />
              </div>
              <p className="text-xs text-[#1A1A1A]">{friend.name}</p>
              <p className="text-xs text-[#C4622D]">🔥 {friend.streak}</p>
            </div>
          ))}
        </div>

        {/* Feed */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4 pb-24">
          {posts.map((post, index) => (
            <div key={index} className="bg-white rounded-3xl p-4 shadow-sm">
              {/* Post Header */}
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-[#EDE8DF] overflow-hidden">
                  <img src={post.avatar} alt={post.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1" style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif' }}>
                  <p className="text-[#1A1A1A]" style={{ fontWeight: 500 }}>{post.name}</p>
                  <p className="text-sm text-[#1A1A1A]">{post.task}</p>
                </div>
                <div className="text-xs text-[#C4622D] bg-[#FDF8F2] px-3 py-1 rounded-full" style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif' }}>
                  🔥 {post.streak} day streak
                </div>
              </div>

              {/* Image */}
              <div className="w-full h-48 bg-[#EDE8DF] rounded-2xl mb-3 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.task}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Caption */}
              <p className="text-[#1A1A1A] mb-3" style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif' }}>{post.caption}</p>

              {/* Reaction */}
              <button className="flex items-center gap-2 text-[#3B4A2F]" style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif' }}>
                <Leaf size={20} />
                <span className="text-sm">Send a leaf</span>
              </button>
            </div>
          ))}
        </div>

        <BottomNav active="home" />
      </div>
    </PhoneFrame>
  );
}