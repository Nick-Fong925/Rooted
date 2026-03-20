import { WeeklyCommit } from './components/WeeklyCommit';
import { HomeFeed } from './components/HomeFeed';
import { EndOfDaySummary } from './components/EndOfDaySummary';
import { WeeklyReflectionFilled } from './components/WeeklyReflectionFilled';
import { GoalProgress } from './components/GoalProgress';
import { ProfilePage } from './components/ProfilePage';
import { PostCreation } from './components/PostCreation';
import { Notifications } from './components/Notifications';
import { ArrowRight } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FDF8F2] p-12 overflow-x-auto">
      <div className="mb-8">
        <h1 className="text-3xl text-[#3B4A2F] mb-2" style={{ fontFamily: 'Canela, serif', fontWeight: 400 }}>Rooted — Mobile App Mockup</h1>
        <p className="text-[#1A1A1A]" style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif' }}>Weekly habit and accountability app flow</p>
      </div>
      
      <div className="flex items-center gap-8">
        {/* Screen 1 */}
        <div className="flex-shrink-0">
          <WeeklyCommit />
          <p className="text-center mt-4 text-sm text-[#1A1A1A]" style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif' }}>Screen 1: Weekly Commit</p>
        </div>

        {/* Arrow */}
        <ArrowRight className="flex-shrink-0 text-[#1A1A1A] opacity-40" size={32} />

        {/* Screen 2 */}
        <div className="flex-shrink-0">
          <HomeFeed />
          <p className="text-center mt-4 text-sm text-[#1A1A1A]" style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif' }}>Screen 2: Home Feed</p>
        </div>

        {/* Arrow */}
        <ArrowRight className="flex-shrink-0 text-[#1A1A1A] opacity-40" size={32} />

        {/* Screen 3 */}
        <div className="flex-shrink-0">
          <EndOfDaySummary />
          <p className="text-center mt-4 text-sm text-[#1A1A1A]" style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif' }}>Screen 3: Weekly Reflection</p>
        </div>

        {/* Arrow */}
        <ArrowRight className="flex-shrink-0 text-[#1A1A1A] opacity-40" size={32} />

        {/* Screen 4B */}
        <div className="flex-shrink-0">
          <WeeklyReflectionFilled />
          <p className="text-center mt-4 text-sm text-[#1A1A1A]" style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif' }}>Screen 4B: Reflection (Filled)</p>
        </div>

        {/* Arrow */}
        <ArrowRight className="flex-shrink-0 text-[#1A1A1A] opacity-40" size={32} />

        {/* Screen 4 */}
        <div className="flex-shrink-0">
          <GoalProgress />
          <p className="text-center mt-4 text-sm text-[#1A1A1A]" style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif' }}>Screen 4: Goal Progress</p>
        </div>

        {/* Arrow */}
        <ArrowRight className="flex-shrink-0 text-[#1A1A1A] opacity-40" size={32} />

        {/* Screen 5 */}
        <div className="flex-shrink-0">
          <ProfilePage />
          <p className="text-center mt-4 text-sm text-[#1A1A1A]" style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif' }}>Screen 5: Profile</p>
        </div>

        {/* Arrow */}
        <ArrowRight className="flex-shrink-0 text-[#1A1A1A] opacity-40" size={32} />

        {/* Screen 6 */}
        <div className="flex-shrink-0">
          <PostCreation />
          <p className="text-center mt-4 text-sm text-[#1A1A1A]" style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif' }}>Screen 6: Post Creation</p>
        </div>

        {/* Arrow */}
        <ArrowRight className="flex-shrink-0 text-[#1A1A1A] opacity-40" size={32} />

        {/* Screen 7 */}
        <div className="flex-shrink-0">
          <Notifications />
          <p className="text-center mt-4 text-sm text-[#1A1A1A]" style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif' }}>Screen 7: Notifications</p>
        </div>
      </div>
    </div>
  );
}