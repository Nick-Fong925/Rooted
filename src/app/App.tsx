import { useState } from 'react';
import { PhoneFrame } from './components/PhoneFrame';
import { WeeklyCommit } from './components/WeeklyCommit';
import { PostCreation } from './components/PostCreation';
import { HomeFeed } from './components/HomeFeed';
import { GoalProgress } from './components/GoalProgress';
import { WeeklyDiary } from './components/WeeklyDiary';
import { ProfilePage } from './components/ProfilePage';
import { Leaf } from 'lucide-react';

export type Screen = 'start' | 'weekly-commit' | 'post-creation' | 'home-feed' | 'goal-progress' | 'diary' | 'profile';

export interface DiaryEntry {
  week: string;
  answers: string[];
  additionalThoughts: string;
  images: string[];
}

export default function App() {
  const [screen, setScreen] = useState<Screen>('start');
  const [tasks, setTasks] = useState<string[]>([]);
  const [frequencies, setFrequencies] = useState<number[]>([]);
  const [postedTask, setPostedTask] = useState<string>('');
  const [savedDiary, setSavedDiary] = useState<DiaryEntry | null>(null);

  const handleCommitDone = (taskTexts: string[], taskFrequencies: (number | null)[]) => {
    const filtered: string[] = [];
    const filteredFreqs: number[] = [];
    taskTexts.forEach((t, i) => {
      if (t.trim() !== '') {
        filtered.push(t);
        filteredFreqs.push(taskFrequencies[i] || 1);
      }
    });
    setTasks(filtered);
    setFrequencies(filteredFreqs);
    setScreen('post-creation');
  };

  const handlePost = (selectedTask: string) => {
    setPostedTask(selectedTask);
    setScreen('home-feed');
  };

  const handleSaveDiary = (entry: DiaryEntry) => {
    setSavedDiary(entry);
    setScreen('profile');
  };

  return (
    <div className="min-h-screen bg-[#FDF8F2] flex items-center justify-center">
      {screen === 'start' && (
        <PhoneFrame>
          <button
            onClick={() => setScreen('weekly-commit')}
            className="h-full w-full flex flex-col items-center justify-center gap-6 cursor-pointer"
          >
            <div className="w-20 h-20 rounded-full bg-[#3B4A2F] flex items-center justify-center">
              <Leaf size={40} color="white" />
            </div>
            <h1 className="text-3xl text-[#3B4A2F]" style={{ fontFamily: 'Canela, serif', fontWeight: 400 }}>
              Rooted
            </h1>
            <p className="text-[#8B6F47] text-sm" style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif' }}>
              Tap anywhere to begin
            </p>
          </button>
        </PhoneFrame>
      )}
      {screen === 'weekly-commit' && (
        <WeeklyCommit onNavigate={setScreen} onCommit={handleCommitDone} />
      )}
      {screen === 'post-creation' && (
        <PostCreation onNavigate={setScreen} tasks={tasks} onPost={handlePost} />
      )}
      {screen === 'home-feed' && (
        <HomeFeed onNavigate={setScreen} postedTask={postedTask} />
      )}
      {screen === 'goal-progress' && (
        <GoalProgress onNavigate={setScreen} tasks={tasks} frequencies={frequencies} />
      )}
      {screen === 'diary' && (
        <WeeklyDiary onNavigate={setScreen} tasks={tasks} onSave={handleSaveDiary} />
      )}
      {screen === 'profile' && (
        <ProfilePage onNavigate={setScreen} savedDiary={savedDiary} />
      )}
    </div>
  );
}
