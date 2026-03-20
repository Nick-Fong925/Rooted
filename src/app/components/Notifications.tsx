import { PhoneFrame } from './PhoneFrame';
import { BottomNav } from './BottomNav';

const notifications = [
  {
    avatar: 'https://images.unsplash.com/photo-1728771944142-4018f463185f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb24lMjBwb3J0cmFpdCUyMGNhbmRpZCUyMGV2ZXJ5ZGF5fGVufDF8fHx8MTc3Mzk0NzUzNXww&ixlib=rb-4.1.0&q=80&w=1080',
    text: 'Sara reacted 🌿 to your morning walk post',
    time: '2h',
    unread: true
  },
  {
    avatar: 'https://images.unsplash.com/photo-1723189039515-ec457cec311d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHBlcnNvbiUyMG5hdHVyYWwlMjBwb3J0cmFpdCUyMHN1bmxpZ2h0fGVufDF8fHx8MTc3Mzk0NzUzNXww&ixlib=rb-4.1.0&q=80&w=1080',
    text: "Your 10 min journaling streak is at risk 🔥 — check in before midnight",
    time: '4h',
    unread: true
  },
  {
    avatar: 'https://images.unsplash.com/photo-1695485121912-25c7ea05119c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBjYXN1YWwlMjBwb3J0cmFpdCUyMG91dGRvb3IlMjBuYXR1cmFsfGVufDF8fHx8MTc3Mzk0NzUzNnww&ixlib=rb-4.1.0&q=80&w=1080',
    text: 'Jake just planted his week — see his goals',
    time: '6h',
    unread: false
  },
  {
    avatar: 'https://images.unsplash.com/photo-1634552516330-ab1ccc0f605e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb24lMjBzbWlsaW5nJTIwY2FuZGlkJTIwcG9ydHJhaXQlMjBwaG90b3xlbnwxfHx8fDE3NzM5NDc1MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    text: 'Time to wrap up Week 4 — your diary is waiting',
    time: '1d',
    unread: false
  },
  {
    avatar: 'https://images.unsplash.com/photo-1740125492786-aaadb4458fe4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb24lMjBwb3J0cmFpdCUyMGV2ZXJ5ZGF5JTIwY2FzdWFsJTIwc2V0dGluZ3xlbnwxfHx8fDE3NzM4MTY3Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    text: 'Priya commented on your post: so inspiring!',
    time: '2d',
    unread: false
  },
  {
    avatar: 'https://images.unsplash.com/photo-1747374135959-9291ba69215e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBwb3J0cmFpdCUyMG5hdHVyYWwlMjBjYW5kaWQlMjBvdXRkb29yfGVufDF8fHx8MTc3MzgxNjc0MHww&ixlib=rb-4.1.0&q=80&w=1080',
    text: 'Jordan reacted 🌿 to your read 20 pages post',
    time: '3d',
    unread: false
  }
];

export function Notifications() {
  return (
    <PhoneFrame>
      <div className="h-full flex flex-col pt-14">
        {/* Header */}
        <div className="px-6 py-6 border-b border-[#EDE8DF]">
          <h1 className="text-xl text-[#3B4A2F]" style={{ fontFamily: 'Canela, serif', fontWeight: 400 }}>Notifications</h1>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-6 py-6 pb-24 space-y-2">
          {notifications.map((notification, index) => (
            <div key={index} className="relative bg-[#EDE8DF] rounded-3xl p-4 shadow-sm flex items-center gap-3">
              {/* Unread indicator */}
              {notification.unread && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#C4622D]" />
              )}
              
              {/* Avatar */}
              <div className="w-12 h-12 rounded-full bg-white overflow-hidden flex-shrink-0">
                <img 
                  src={notification.avatar} 
                  alt="User avatar"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text content */}
              <div className="flex-1 min-w-0">
                <p className="text-sm text-[#1A1A1A] leading-relaxed" style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif' }}>
                  {notification.text}
                </p>
              </div>

              {/* Timestamp */}
              <div className="flex-shrink-0">
                <span className="text-xs text-[#8B6F47]" style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif' }}>
                  {notification.time}
                </span>
              </div>
            </div>
          ))}
        </div>

        <BottomNav active="home" />
      </div>
    </PhoneFrame>
  );
}
