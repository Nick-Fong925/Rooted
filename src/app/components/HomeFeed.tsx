import { useState } from 'react';
import { PhoneFrame } from './PhoneFrame';
import { BottomNav } from './BottomNav';
import { Leaf, Bell, User, X, MessageCircle, Send } from 'lucide-react';
import type { Screen } from '../App';

interface HomeFeedProps {
  onNavigate: (screen: Screen) => void;
  postedTask: string;
}

interface Comment {
  name: string;
  text: string;
}

interface PostData {
  name: string;
  task: string;
  caption: string;
  streak: number;
  leaves: number;
  image: string;
  avatar: string;
  comments: Comment[];
}

const friends = [
  {
    name: 'Alex',
    streak: 7,
    avatar: 'https://images.unsplash.com/photo-1740125492786-aaadb4458fe4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb24lMjBwb3J0cmFpdCUyMGV2ZXJ5ZGF5JTIwY2FzdWFsJTIwc2V0dGluZ3xlbnwxfHx8fDE3NzM4MTY3Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    bio: 'Bookworm & morning person',
    posts: [
      { image: 'https://images.unsplash.com/photo-1762335986639-eb84a5cdd0e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcGVuJTIwYm9vayUyMGNvZmZlZSUyMHdvb2RlbiUyMHRhYmxlfGVufDF8fHx8MTc3MzgxMjIxOHww&ixlib=rb-4.1.0&q=80&w=1080', caption: 'Chapter 12 done!', task: 'Read 20 pages', time: '2h ago' },
      { image: 'https://images.unsplash.com/photo-1553627558-d738c10f89da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcGVuJTIwYm9vayUyMHdvb2RlbiUyMHRhYmxlJTIwcmVhZGluZ3xlbnwxfHx8fDE3NzM5NDg1NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080', caption: 'Cozy morning read', task: 'Read 20 pages', time: '1d ago' },
      { image: 'https://images.unsplash.com/photo-1739133087944-0a6311a2319b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3p5JTIwcmVhZGluZyUyMGNvcm5lciUyMGJvb2t8ZW58MXx8fHwxNzczOTQ4NTY2fDA&ixlib=rb-4.1.0&q=80&w=1080', caption: 'Found my reading spot', task: 'Read 20 pages', time: '3d ago' },
    ]
  },
  {
    name: 'Jordan',
    streak: 12,
    avatar: 'https://images.unsplash.com/photo-1747374135959-9291ba69215e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBwb3J0cmFpdCUyMG5hdHVyYWwlMjBjYW5kaWQlMjBvdXRkb29yfGVufDF8fHx8MTc3MzgxNjc0MHww&ixlib=rb-4.1.0&q=80&w=1080',
    bio: 'Chasing sunrises daily',
    posts: [
      { image: 'https://images.unsplash.com/photo-1768383352204-723c96196be2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb24lMjBtb3JuaW5nJTIwd2FsayUyMHBhcmslMjBuYXR1cmV8ZW58MXx8fHwxNzczODEyMjY1fDA&ixlib=rb-4.1.0&q=80&w=1080', caption: 'Park at dawn', task: 'Morning walk', time: '3h ago' },
      { image: 'https://images.unsplash.com/photo-1772569874251-60a09d41604f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3JuaW5nJTIwd2FsayUyMG91dGRvb3IlMjBuYXR1cmUlMjBwYXRofGVufDF8fHx8MTc3Mzk0NzkyM3ww&ixlib=rb-4.1.0&q=80&w=1080', caption: 'New trail discovered', task: 'Morning walk', time: '2d ago' },
    ]
  },
  {
    name: 'Sam',
    streak: 4,
    avatar: 'https://images.unsplash.com/photo-1556575533-7190b053c299?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHdvbWFuJTIwY2FzdWFsJTIwcG9ydHJhaXQlMjByZWFsaXN0aWN8ZW58MXx8fHwxNzczODE2NzQwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    bio: 'Learning to cook one meal at a time',
    posts: [
      { image: 'https://images.unsplash.com/photo-1693042978565-4c4a2f06605b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lbWFkZSUyMGRpbm5lciUyMHBsYXRlJTIwZm9vZHxlbnwxfHx8fDE3NzM5NDg1NzB8MA&ixlib=rb-4.1.0&q=80&w=1080', caption: 'Homemade pasta night!', task: 'Cook dinner', time: '5h ago' },
      { image: 'https://images.unsplash.com/photo-1636647511414-c9ec06da32bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb29raW5nJTIwZGlubmVyJTIwa2l0Y2hlbiUyMHByZXB8ZW58MXx8fHwxNzczOTQ4NTY5fDA&ixlib=rb-4.1.0&q=80&w=1080', caption: 'Prepping for the week', task: 'Cook dinner', time: '1d ago' },
      { image: 'https://images.unsplash.com/photo-1625467157210-213ffafa392b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lbWFkZSUyMHBhc3RhJTIwZGlubmVyJTIwdGFibGV8ZW58MXx8fHwxNzczNzU3MDc3fDA&ixlib=rb-4.1.0&q=80&w=1080', caption: 'Sunday feast', task: 'Cook dinner', time: '4d ago' },
    ]
  },
  {
    name: 'Riley',
    streak: 15,
    avatar: 'https://images.unsplash.com/photo-1758523672241-7147a40ea84f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb24lMjBzbWlsaW5nJTIwY2FzdWFsJTIwaGVhZHNob3QlMjBuYXR1cmFsfGVufDF8fHx8MTc3MzgxNjc0MHww&ixlib=rb-4.1.0&q=80&w=1080',
    bio: 'Journaling my way through life',
    posts: [
      { image: 'https://images.unsplash.com/photo-1553018440-8e05c070608a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqb3VybmFsJTIwcGVuJTIwbGluZW4lMjBmYWJyaWN8ZW58MXx8fHwxNzczOTQ4NTcxfDA&ixlib=rb-4.1.0&q=80&w=1080', caption: 'Fresh page, fresh start', task: 'Journaling', time: '1h ago' },
      { image: 'https://images.unsplash.com/photo-1656877280226-ebf9ea8b1303?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3cml0aW5nJTIwam91cm5hbCUyMGNvZmZlZXxlbnwxfHx8fDE3NzM5NDg1NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080', caption: 'Coffee & journaling', task: 'Journaling', time: '2d ago' },
      { image: 'https://images.unsplash.com/photo-1760840415585-ae89d94bb636?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqb3VybmFsaW5nJTIwbm90ZWJvb2slMjB3YXJtJTIwbGlnaHR8ZW58MXx8fHwxNzczOTQ4NTcxfDA&ixlib=rb-4.1.0&q=80&w=1080', caption: 'Golden hour thoughts', task: 'Journaling', time: '5d ago' },
    ]
  }
];

const otherPosts: PostData[] = [
  {
    name: 'Jordan Lee',
    task: 'Morning walk',
    caption: 'Beautiful sunrise at the park today',
    streak: 12,
    leaves: 8,
    image: 'https://images.unsplash.com/photo-1768383352204-723c96196be2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb24lMjBtb3JuaW5nJTIwd2FsayUyMHBhcmslMjBuYXR1cmV8ZW58MXx8fHwxNzczODEyMjY1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    avatar: 'https://images.unsplash.com/photo-1747374135959-9291ba69215e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBwb3J0cmFpdCUyMG5hdHVyYWwlMjBjYW5kaWQlMjBvdXRkb29yfGVufDF8fHx8MTc3MzgxNjc0MHww&ixlib=rb-4.1.0&q=80&w=1080',
    comments: [
      { name: 'Sam', text: 'Love this spot! Where is it?' },
      { name: 'Riley', text: 'You never miss a day, so impressive' }
    ]
  },
  {
    name: 'Alex Rivera',
    task: 'Read 20 pages',
    caption: 'Finally started that book everyone recommended',
    streak: 7,
    leaves: 5,
    image: 'https://images.unsplash.com/photo-1762335986639-eb84a5cdd0e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcGVuJTIwYm9vayUyMGNvZmZlZSUyMHdvb2RlbiUyMHRhYmxlfGVufDF8fHx8MTc3MzgxMjIxOHww&ixlib=rb-4.1.0&q=80&w=1080',
    avatar: 'https://images.unsplash.com/photo-1740125492786-aaadb4458fe4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb24lMjBwb3J0cmFpdCUyMGV2ZXJ5ZGF5JTIwY2FzdWFsJTIwc2V0dGluZ3xlbnwxfHx8fDE3NzM4MTY3Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    comments: [
      { name: 'Jordan', text: 'What book is it?' },
      { name: 'Riley', text: 'Reading buddies! I just started a new one too' },
      { name: 'Sam', text: 'Add it to the group list!' }
    ]
  }
];

const notifications = [
  {
    avatar: 'https://images.unsplash.com/photo-1728771944142-4018f463185f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb24lMjBwb3J0cmFpdCUyMGNhbmRpZCUyMGV2ZXJ5ZGF5fGVufDF8fHx8MTc3Mzk0NzUzNXww&ixlib=rb-4.1.0&q=80&w=1080',
    text: 'Sara sent a leaf to your post',
    time: '2h',
    unread: true
  },
  {
    avatar: 'https://images.unsplash.com/photo-1723189039515-ec457cec311d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHBlcnNvbiUyMG5hdHVyYWwlMjBwb3J0cmFpdCUyMHN1bmxpZ2h0fGVufDF8fHx8MTc3Mzk0NzUzNXww&ixlib=rb-4.1.0&q=80&w=1080',
    text: 'Your streak is at risk — check in before midnight',
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
    text: 'Time to wrap up your week — your diary is waiting',
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
    text: 'Jordan sent a leaf to your reading post',
    time: '3d',
    unread: false
  }
];

function PostCard({ post, isOwnPost }: { post: PostData, isOwnPost?: boolean }) {
  const [leafCount, setLeafCount] = useState(post.leaves);
  const [hasLeafed, setHasLeafed] = useState(false);
  const [visibleComments, setVisibleComments] = useState<Comment[]>(post.comments);
  const [commentText, setCommentText] = useState('');

  const toggleLeaf = () => {
    if (hasLeafed) {
      setLeafCount(prev => prev - 1);
    } else {
      setLeafCount(prev => prev + 1);
    }
    setHasLeafed(!hasLeafed);
  };

  const handleAddComment = () => {
    if (!commentText.trim()) return;
    setVisibleComments(prev => [...prev, { name: 'You', text: commentText.trim() }]);
    setCommentText('');
  };

  return (
    <div className={`rounded-3xl p-4 shadow-sm ${isOwnPost ? 'bg-[#EDE8DF] border-2 border-[#3B4A2F]/20' : 'bg-white'}`}>
      {/* Post Header */}
      <div className="flex items-center gap-3 mb-3">
        {isOwnPost ? (
          <div className="w-10 h-10 rounded-full bg-[#3B4A2F] flex items-center justify-center">
            <User size={18} color="white" />
          </div>
        ) : (
          <div className="w-10 h-10 rounded-full bg-[#EDE8DF] overflow-hidden">
            <img src={post.avatar} alt={post.name} className="w-full h-full object-cover" />
          </div>
        )}
        <div className="flex-1" style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif' }}>
          <p className="text-[#1A1A1A]" style={{ fontWeight: 500 }}>
            {post.name}
            {isOwnPost && <span className="text-xs text-[#8B6F47] ml-2 font-normal">Just now</span>}
          </p>
          <p className="text-sm text-[#1A1A1A]">{post.task} ✓</p>
        </div>
        <div className="text-xs text-[#C4622D] bg-[#FDF8F2] px-3 py-1 rounded-full" style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif' }}>
          🔥 {post.streak} week streak
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

      {/* Leaf + Comment counts */}
      <div className="flex items-center gap-4 mb-3">
        <button onClick={toggleLeaf} className="flex items-center gap-1.5" style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif' }}>
          <Leaf size={20} color={hasLeafed ? '#3B4A2F' : '#8B6F47'} fill={hasLeafed ? '#3B4A2F' : 'none'} />
          <span className={`text-sm ${hasLeafed ? 'text-[#3B4A2F] font-medium' : 'text-[#8B6F47]'}`}>{leafCount}</span>
        </button>
        <div className="flex items-center gap-1.5" style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif' }}>
          <MessageCircle size={18} color="#8B6F47" />
          <span className="text-sm text-[#8B6F47]">{visibleComments.length}</span>
        </div>
      </div>

      {/* Comments */}
      <div className="space-y-2 border-t border-[#EDE8DF] pt-3">
        {visibleComments.map((comment, i) => (
          <p key={i} className="text-sm text-[#1A1A1A]" style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif' }}>
            <span style={{ fontWeight: 500 }}>{comment.name}</span>{' '}
            <span className="text-[#1A1A1A]/80">{comment.text}</span>
          </p>
        ))}

        {/* Comment input */}
        {!isOwnPost && (
          <div className="flex items-center gap-2 mt-2">
            <input
              type="text"
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleAddComment()}
              placeholder="Add a comment..."
              className="flex-1 text-sm bg-[#FDF8F2] rounded-full px-3 py-1.5 outline-none"
              style={{
                fontFamily: 'Helvetica Neue, Arial, sans-serif',
                border: '1px solid rgba(59, 74, 47, 0.15)',
              }}
            />
            <button onClick={handleAddComment} className="flex-shrink-0">
              <Send size={16} color="#3B4A2F" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export function HomeFeed({ onNavigate, postedTask }: HomeFeedProps) {
  const [showNotifications, setShowNotifications] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState<typeof friends[0] | null>(null);

  const userPost: PostData = {
    name: 'You',
    task: postedTask || 'My commitment',
    caption: 'Coffee and a good book — 30 minutes down!',
    streak: 1,
    leaves: 0,
    image: 'https://images.unsplash.com/photo-1529473814998-077b4fec6770?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
    avatar: '',
    comments: [
      { name: 'Jordan', text: 'Love the reading spot! You got this 💪' },
      { name: 'Alex', text: 'Great way to start the habit!' }
    ]
  };

  return (
    <PhoneFrame>
      <div className="h-full flex flex-col pt-14 relative">
        {/* Top Nav */}
        <div className="px-6 py-4 flex items-center justify-between border-b border-[#EDE8DF]">
          <div className="flex items-center gap-2">
            <Leaf size={24} color="#3B4A2F" />
            <span className="text-xl text-[#3B4A2F]" style={{ fontFamily: 'Canela, serif', fontWeight: 400 }}>Rooted</span>
          </div>
          <button onClick={() => setShowNotifications(true)} className="relative">
            <Bell size={24} color="#1A1A1A" />
            <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-[#C4622D] border-2 border-white" />
          </button>
        </div>

        {/* Stories Row */}
        <div className="px-6 py-4 flex gap-4 overflow-x-auto border-b border-[#EDE8DF]">
          {friends.map((friend, index) => (
            <button key={index} onClick={() => setSelectedFriend(friend)} className="flex flex-col items-center gap-1 flex-shrink-0" style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif' }}>
              <div className="w-16 h-16 rounded-full bg-[#EDE8DF] border-2 border-[#C4622D] overflow-hidden">
                <img src={friend.avatar} alt={friend.name} className="w-full h-full object-cover" />
              </div>
              <p className="text-xs text-[#1A1A1A]">{friend.name}</p>
              <p className="text-xs text-[#C4622D]">🔥 {friend.streak}</p>
            </button>
          ))}
        </div>

        {/* Feed */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4 pb-24">
          <PostCard post={userPost} isOwnPost />
          {otherPosts.map((post, index) => (
            <PostCard key={index} post={post} />
          ))}
        </div>

        <BottomNav active="home" onNavigate={onNavigate} />

        {/* Friend Profile Overlay */}
        {selectedFriend && (
          <div className="absolute inset-0 z-50 flex flex-col bg-[#FDF8F2] rounded-[44px]">
            <div className="px-6 py-6 pt-16 flex items-center justify-between border-b border-[#EDE8DF]">
              <h1 className="text-xl text-[#3B4A2F]" style={{ fontFamily: 'Canela, serif', fontWeight: 400 }}>{selectedFriend.name}</h1>
              <button onClick={() => setSelectedFriend(null)}>
                <X size={24} color="#1A1A1A" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-6 py-6">
              {/* Friend Header */}
              <div className="flex flex-col items-center mb-6">
                <div className="w-20 h-20 rounded-full bg-[#EDE8DF] border-2 border-[#C4622D] overflow-hidden mb-3">
                  <img src={selectedFriend.avatar} alt={selectedFriend.name} className="w-full h-full object-cover" />
                </div>
                <p className="text-sm text-[#8B6F47] mb-1" style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif' }}>{selectedFriend.bio}</p>
                <div className="text-xs text-[#C4622D] bg-[#EDE8DF] px-3 py-1 rounded-full" style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif' }}>
                  🔥 {selectedFriend.streak} week streak
                </div>
              </div>

              {/* Recent Posts */}
              <p className="text-sm text-[#8B6F47] mb-3" style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif', fontWeight: 500 }}>Recent activity</p>
              <div className="space-y-4">
                {selectedFriend.posts.map((post, i) => (
                  <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm">
                    <div className="w-full h-40 bg-[#EDE8DF]">
                      <img src={post.image} alt={post.caption} className="w-full h-full object-cover" />
                    </div>
                    <div className="p-3">
                      <div className="flex items-center justify-between mb-1">
                        <p className="text-xs text-[#C4622D]" style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif' }}>{post.task}</p>
                        <p className="text-xs text-[#8B6F47]" style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif' }}>{post.time}</p>
                      </div>
                      <p className="text-sm text-[#1A1A1A]" style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif' }}>{post.caption}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Notifications Overlay */}
        {showNotifications && (
          <div className="absolute inset-0 z-50 flex flex-col bg-[#FDF8F2] rounded-[44px]">
            <div className="px-6 py-6 pt-16 flex items-center justify-between border-b border-[#EDE8DF]">
              <h1 className="text-xl text-[#3B4A2F]" style={{ fontFamily: 'Canela, serif', fontWeight: 400 }}>Notifications</h1>
              <button onClick={() => setShowNotifications(false)}>
                <X size={24} color="#1A1A1A" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-2">
              {notifications.map((notification, index) => (
                <div key={index} className="relative bg-[#EDE8DF] rounded-3xl p-4 shadow-sm flex items-center gap-3">
                  {notification.unread && (
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#C4622D]" />
                  )}
                  <div className="w-12 h-12 rounded-full bg-white overflow-hidden flex-shrink-0">
                    <img src={notification.avatar} alt="User avatar" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-[#1A1A1A] leading-relaxed" style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif' }}>
                      {notification.text}
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <span className="text-xs text-[#8B6F47]" style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif' }}>
                      {notification.time}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </PhoneFrame>
  );
}
