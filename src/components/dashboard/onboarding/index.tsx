import { Button } from "../../ui/button";
import CustomButton from "../../ui/custom-button";
import NotificationBell from "../../ui/notification-bell";
import OnboardingAnalyticsSection from "./onboarding-analytics-section";
import OnboardingBanner from "./onboarding-banner";
import OnboardingEssentials from "./onboarding-essentials";
import OnboardingProgress from "./onboarding-progress";

const Onboarding = () => {
  return (
    <main>
      <header className="flex items-center justify-between pb-4">
        <h2 className="font-bold text-2xl">Getting Started</h2>
        <NotificationBell notificationsCount={0} />
      </header>
      <OnboardingBanner />
      <div className="mt-6 w-full space-y-6">
        <OnboardingProgress />
        <OnboardingEssentials />
        <OnboardingAnalyticsSection />
        <section className="w-full flex flex-col items-center rounded-[20px] border p-6 bg-white">
          <p className="font-semibold text-2xl">Ready to Get Started?</p>
          <p className="text-neutral-400">
            Complete your setup now or come back later - your progress is
            automatically saved.
          </p>

          <div className="max-w-[440px] my-4 w-full flex flex-col gap-[12px]">
            <CustomButton size="lg" className="w-full" to="/auth/login">
              Get Started
            </CustomButton>
            <Button
              size="lg"
              variant="outline"
              className="w-full rounded-full border-black border-2"
            >
              Skip for Now
            </Button>
          </div>
          <p className="text-neutral-400 text-sm">
            You can finish setup anytime from your dashboard.
          </p>
        </section>
      </div>
    </main>
  );
};

export default Onboarding;
