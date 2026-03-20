import { useState } from 'react';
import { PhoneFrame } from './PhoneFrame';
import { BottomNav } from './BottomNav';
import { ChevronRight, User, Lock, Check } from 'lucide-react';
import type { Screen, DiaryEntry } from '../App';

interface ProfilePageProps {
  onNavigate: (screen: Screen) => void;
  savedDiary: DiaryEntry | null;
}

const pastDiaries = [
  {
    week: 'Week 4 · Mar 10–16',
    excerpt: 'Built real momentum this week. Morning walks became automatic — didn\'t even think about skipping.',
    images: [
      'https://images.unsplash.com/photo-1772569874251-60a09d41604f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3JuaW5nJTIwd2FsayUyMG91dGRvb3IlMjBuYXR1cmUlMjBwYXRofGVufDF8fHx8MTc3Mzk0NzkyM3ww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1704814685609-88f7d913aa49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3JuaW5nJTIwY29mZmVlJTIwbm90ZWJvb2slMjBubyUyMHBob25lfGVufDF8fHx8MTc3Mzk0ODU2N3ww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1636647511414-c9ec06da32bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb29raW5nJTIwZGlubmVyJTIwa2l0Y2hlbiUyMHByZXB8ZW58MXx8fHwxNzczOTQ4NTY5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    reflections: {
      q1: 'Built real momentum this week. Morning walks became automatic — didn\'t even think about skipping.',
      q2: 'Thursday was tough — had a stressful day and almost skipped everything. Pushed through with just a short walk.',
      q3: 'On stressful days, do a shorter version of the habit instead of skipping entirely.',
      extra: 'Starting to feel like these are becoming real habits, not just tasks on a list.'
    }
  },
  {
    week: 'Week 3 · Mar 3–9',
    excerpt: 'Reading before bed became a ritual I actually looked forward to. Having the book on my nightstand made it feel effortless.',
    images: [
      'https://images.unsplash.com/photo-1623222316492-d7bddd11a0de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb24lMjBmb3Jlc3QlMjBwYXRoJTIwd2Fsa2luZ3xlbnwxfHx8fDE3NzM4MTIyNzV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1665764356520-3daa0e8326b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kd3JpdHRlbiUyMGpvdXJuYWwlMjBjb2ZmZWUlMjBtb3JuaW5nfGVufDF8fHx8MTc3MzgxMjI3MHww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1759689975548-2e3a06b3d816?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwbWVhbCUyMGJvd2wlMjB3b29kZW4lMjB0YWJsZXxlbnwxfHx8fDE3NzM4MTIyNzF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    reflections: {
      q1: 'Reading before bed became a ritual I actually looked forward to. Having the book on my nightstand made it feel effortless.',
      q2: 'Wednesday and Thursday were really hard — back-to-back late nights at work left me with no energy.',
      q3: "I'd protect my evenings earlier in the week instead of letting work bleed in.",
      extra: 'Overall a decent week. The social media one is still the hardest.'
    }
  },
  {
    week: 'Week 2 · Feb 24–Mar 2',
    excerpt: 'Struggled mid-week but finished strong. Learning that flexibility is key when work gets busy.',
    images: [
      'https://images.unsplash.com/photo-1765609118489-39de95d7bac4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpdGF0aW9uJTIwam91cm5hbCUyMHBlYWNlZnVsJTIwbW9ybmluZ3xlbnwxfHx8fDE3NzM4MTIyNzF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1516201813791-779fe0b77742?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqb3VybmFsJTIwd3JpdGluZyUyMG1vcm5pbmclMjByb3V0aW5lfGVufDF8fHx8MTc3MzgxMjI3NXww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1768383352204-723c96196be2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb24lMjBtb3JuaW5nJTIwd2FsayUyMHBhcmslMjBuYXR1cmV8ZW58MXx8fHwxNzczODEyMjY1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    reflections: {
      q1: 'Morning walks were easy — I just walked out the door. No prep needed.',
      q2: 'Cooking was tough mid-week when I had to work late. Fell back on takeout twice.',
      q3: 'Meal prep on Sunday would have saved me on those busy weeknights.',
      extra: 'Struggled mid-week but finished strong. Learning that flexibility is key.'
    }
  },
  {
    week: 'Week 1 · Feb 17–23',
    excerpt: 'First week! Everything felt new and exciting. The social accountability really helped me stay on track.',
    images: [
      'https://images.unsplash.com/photo-1762335986639-eb84a5cdd0e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcGVuJTIwYm9vayUyMGNvZmZlZSUyMHdvb2RlbiUyMHRhYmxlfGVufDF8fHx8MTc3MzgxMjIxOHww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1625467157210-213ffafa392b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lbWFkZSUyMHBhc3RhJTIwZGlubmVyJTIwdGFibGV8ZW58MXx8fHwxNzczNzU3MDc3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1767806580462-04ac27b4d4e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb24lMjB3YWxraW5nJTIwbGVhZnklMjBmb3Jlc3QlMjBwYXRofGVufDF8fHx8MTc3MzgxMjI2Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    reflections: {
      q1: 'Everything felt new and exciting. The social accountability really helped me stay on track.',
      q2: 'Journaling was the hardest to fit in. I kept pushing it to "later" and then forgetting.',
      q3: 'Set a specific time for journaling instead of leaving it open-ended.',
      extra: 'First week done! Excited to keep going.'
    }
  },
];

const reflectionQuestions = [
  'What felt easiest to show up for this week?',
  'Where did you lose momentum, and why?',
  'What would you do differently if you had this week again?',
];

export function ProfilePage({ onNavigate, savedDiary }: ProfilePageProps) {
  return (
    <PhoneFrame>
      <div className="h-full flex flex-col pt-14">
        <div className="flex-1 overflow-y-auto px-6 py-8 pb-24">
          {/* Profile Header */}
          <div className="flex flex-col items-center mb-8">
            <div className="w-24 h-24 rounded-full bg-[#3B4A2F] mb-4 flex items-center justify-center">
              <User size={40} color="white" />
            </div>
            <h1 className="text-2xl text-[#3B4A2F] mb-1" style={{ fontFamily: 'Canela, serif', fontWeight: 400 }}>User1</h1>
            <div className="flex flex-col items-center gap-2 mt-2">
              <div className="bg-[#EDE8DF] px-4 py-2 rounded-full">
                <span className="text-sm text-[#1A1A1A]" style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif' }}>Week 5 streak 🔥</span>
              </div>
              <div className="bg-[#EDE8DF] px-4 py-2 rounded-full">
                <span className="text-sm text-[#1A1A1A]" style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif' }}>Rooted since Feb 17</span>
              </div>
            </div>
          </div>

          {/* Diary Section */}
          <div>
            <h2 className="text-lg text-[#1A1A1A] mb-4" style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif', fontWeight: 500 }}>My Diary</h2>
            <div className="space-y-3">
              {/* User's saved diary — shown first if exists */}
              {savedDiary && (
                <SavedDiaryCard entry={savedDiary} />
              )}

              {/* Pre-filled past diaries */}
              {pastDiaries.map((entry, index) => (
                <DiaryCard key={index} entry={entry} />
              ))}
            </div>
          </div>
        </div>

        <BottomNav active="profile" onNavigate={onNavigate} />
      </div>
    </PhoneFrame>
  );
}

function SavedDiaryCard({ entry }: { entry: DiaryEntry }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-[#EDE8DF] rounded-3xl p-4 border-2 border-[#3B4A2F]/20">
      <button onClick={() => setExpanded(!expanded)} className="w-full text-left">
        <div className="flex items-start justify-between mb-3">
          <div>
            <p className="text-[#1A1A1A]" style={{ fontFamily: 'Canela, serif', fontWeight: 400 }}>{entry.week}</p>
            <div className="flex items-center gap-1.5 mt-1">
              <Check size={14} color="#3B4A2F" strokeWidth={2.5} />
              <span className="text-xs text-[#3B4A2F]" style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif' }}>Saved just now</span>
            </div>
          </div>
          <ChevronRight size={20} color="#C4622D" className={`transition-transform ${expanded ? 'rotate-90' : ''}`} />
        </div>

        {/* Thumbnail Grid */}
        {entry.images && entry.images.length > 0 && (
          <div className="flex gap-2 mb-3">
            {entry.images.map((img, imgIndex) => (
              <div key={imgIndex} className="w-16 h-16 bg-white rounded-xl overflow-hidden">
                <img
                  src={img}
                  alt={`Photo ${imgIndex + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        )}

        {!expanded && (
          <p className="text-sm text-[#1A1A1A] leading-relaxed line-clamp-2" style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif' }}>
            {entry.answers[0] || entry.additionalThoughts || 'Reflection saved'}
          </p>
        )}
      </button>

      {/* Expanded reflection */}
      {expanded && (
        <div className="space-y-4 mt-3 pt-3 border-t border-[#FDF8F2]">
          {reflectionQuestions.map((question, qi) => (
            <div key={qi}>
              <p className="text-sm text-[#8B6F47] mb-1" style={{ fontFamily: 'Canela, serif', fontWeight: 400 }}>
                {question}
              </p>
              <p className="text-sm leading-relaxed" style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif', color: '#5C5248' }}>
                {entry.answers[qi] || '—'}
              </p>
            </div>
          ))}
          {entry.additionalThoughts && (
            <div>
              <p className="text-sm text-[#8B6F47] mb-1" style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif' }}>
                Additional thoughts
              </p>
              <p className="text-sm leading-relaxed" style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif', color: '#5C5248' }}>
                {entry.additionalThoughts}
              </p>
            </div>
          )}
          <div className="bg-[#FDF8F2] rounded-full px-4 py-2 flex items-center justify-center gap-2">
            <Check size={14} color="#3B4A2F" strokeWidth={2.5} />
            <p className="text-xs text-[#3B4A2F]" style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif' }}>
              Reflection saved
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

function DiaryCard({ entry }: { entry: typeof pastDiaries[0] }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-[#EDE8DF] rounded-3xl p-4">
      <button onClick={() => setExpanded(!expanded)} className="w-full text-left">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-2">
            <Lock size={14} color="#8B6F47" strokeWidth={2} />
            <p className="text-[#1A1A1A]" style={{ fontFamily: 'Canela, serif', fontWeight: 400 }}>{entry.week}</p>
          </div>
          <ChevronRight size={20} color="#C4622D" className={`transition-transform ${expanded ? 'rotate-90' : ''}`} />
        </div>

        {/* Thumbnail Grid */}
        <div className="flex gap-2 mb-3">
          {entry.images.map((img, imgIndex) => (
            <div key={imgIndex} className="w-16 h-16 bg-white rounded-xl overflow-hidden">
              <img
                src={img}
                alt={`Photo ${imgIndex + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {!expanded && (
          <p className="text-sm text-[#1A1A1A] leading-relaxed line-clamp-2" style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif' }}>
            {entry.excerpt}
          </p>
        )}
      </button>

      {/* Expanded reflection */}
      {expanded && (
        <div className="space-y-4 mt-3 pt-3 border-t border-[#FDF8F2]">
          {reflectionQuestions.map((question, qi) => (
            <div key={qi}>
              <p className="text-sm text-[#8B6F47] mb-1" style={{ fontFamily: 'Canela, serif', fontWeight: 400 }}>
                {question}
              </p>
              <p className="text-sm leading-relaxed" style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif', color: '#5C5248' }}>
                {qi === 0 ? entry.reflections.q1 : qi === 1 ? entry.reflections.q2 : entry.reflections.q3}
              </p>
            </div>
          ))}
          {entry.reflections.extra && (
            <div>
              <p className="text-sm text-[#8B6F47] mb-1" style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif' }}>
                Additional thoughts
              </p>
              <p className="text-sm leading-relaxed" style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif', color: '#5C5248' }}>
                {entry.reflections.extra}
              </p>
            </div>
          )}
          <div className="bg-[#FDF8F2] rounded-full px-4 py-2 flex items-center justify-center gap-2">
            <Check size={14} color="#8B6F47" strokeWidth={2.5} />
            <p className="text-xs text-[#8B6F47]" style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif' }}>
              Reflection saved
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
