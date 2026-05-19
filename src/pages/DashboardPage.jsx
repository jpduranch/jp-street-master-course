import Sidebar from "../components/dashboard/Sidebar";
import DashboardHeader from "../components/dashboard/DashboardHeader";
import VideoPlayer from "../components/dashboard/VideoPlayer";
import LessonTabs from "../components/dashboard/LessonTabs";
import CourseContent from "../components/dashboard/CourseContent";
import MobileNav from "../components/dashboard/MobileNav";
import Footer from "../components/landing/Footer";
import { getCurrentLesson } from "../data/mockData";
import { useAuth } from "../context/AuthContext";

export default function DashboardPage({ planOverride, onPlanOverride }) {
  const { profile } = useAuth();
  const { module: currentModule, lesson: currentLesson } = getCurrentLesson();

  // Use planOverride (testing switcher) if set, otherwise use real profile membership
  const effectivePlan = planOverride ?? profile?.membership_status ?? "free";

  return (
    <div className="flex min-h-screen bg-surface">
      <Sidebar membershipStatus={effectivePlan} />

      <main className="flex-1 md:ml-64 min-h-screen">
        <DashboardHeader />

        {/* Plan switcher for testing */}
        <div className="px-6 md:px-8 py-3 bg-surface-container-lowest/50 border-b border-surface-container-highest/20">
          <div className="flex items-center gap-3 text-xs">
            <span className="text-on-surface-variant font-medium">
              Simular plan:
            </span>
            {["free", "vip", "elite"].map((plan) => (
              <button
                key={plan}
                onClick={() => onPlanOverride(plan === effectivePlan && !planOverride ? null : plan)}
                className={`px-3 py-1.5 rounded-full font-bold transition-all capitalize ${
                  effectivePlan === plan
                    ? "bg-primary text-on-primary-fixed"
                    : "bg-surface-container-highest text-on-surface-variant hover:text-primary"
                }`}
              >
                {plan}
              </button>
            ))}
          </div>
        </div>

        <div className="p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left column: Video & lesson info */}
          <div className="lg:col-span-8 space-y-8">
            <VideoPlayer lesson={currentLesson} module={currentModule} />
            <LessonTabs />
          </div>

          {/* Right column: Course curriculum */}
          <div className="lg:col-span-4">
            <CourseContent
              userPlan={effectivePlan}
            />
          </div>
        </div>

        <Footer />
      </main>

      <MobileNav />
    </div>
  );
}
