import NotificationBell from "../../ui/notification-bell";
import OnboardingBanner from "./onboarding-banner";
import OnboardingProgress from "./onboarding-progress";

const Onboarding = () => {
  return (
    <main>
      <header className="flex items-center justify-between pb-4">
        <h2 className="font-bold text-2xl">Getting Started</h2>

        <NotificationBell notificationsCount={0} />
      </header>

      <OnboardingBanner />

      <div className="mt-6 w-full">
        <OnboardingProgress />
      </div>
    </main>
  );
};

export default Onboarding;
