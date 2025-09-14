import { useState } from "react";
import { Layout } from "@/components/Layout";
import { HeroSection } from "@/components/HeroSection";
import { FeatureSection } from "@/components/FeatureSection";
import { DonationFlow } from "@/components/DonationFlow";
import { ImpactDashboard } from "@/components/ImpactDashboard";
import { CameraUpload } from "@/components/CameraUpload";
import { InteractiveMap } from "@/components/InteractiveMap";

const Index = () => {
  const [activeTab, setActiveTab] = useState("home");

  const renderContent = () => {
    switch (activeTab) {
      case "home":
        return (
          <>
            <HeroSection onTabChange={setActiveTab} />
            <FeatureSection />
            <DonationFlow onTabChange={setActiveTab} />
          </>
        );
      case "donate":
        return (
          <div className="py-20 lg:py-32">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h1 className="text-4xl font-bold mb-6">Donate Surplus</h1>
                <p className="text-xl text-muted-foreground">
                  Upload your surplus items and connect with those in need
                </p>
              </div>
              <CameraUpload />
            </div>
          </div>
        );
      case "discover":
        return (
          <div className="py-20 lg:py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h1 className="text-4xl font-bold mb-6">Discover Surplus</h1>
                <p className="text-xl text-muted-foreground">
                  Find food and medicine surplus near you with real-time updates
                </p>
              </div>
              <InteractiveMap />
            </div>
          </div>
        );
      case "impact":
        return (
          <>
            <div className="py-12 text-center">
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold mb-6">Your Impact Dashboard</h1>
                <p className="text-xl text-muted-foreground">
                  Track your environmental and social contributions
                </p>
              </div>
            </div>
            <ImpactDashboard />
          </>
        );
      case "settings":
        return (
          <div className="py-20 lg:py-32">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h1 className="text-4xl font-bold mb-6">Settings</h1>
              <p className="text-xl text-muted-foreground mb-8">
                Customize your SurplusLink experience
              </p>
              <div className="bg-gradient-card rounded-xl p-8 border border-border/50">
                <p className="text-muted-foreground">Settings panel coming soon</p>
              </div>
            </div>
          </div>
        );
      default:
        return (
          <>
            <HeroSection onTabChange={setActiveTab} />
            <FeatureSection />
            <DonationFlow onTabChange={setActiveTab} />
          </>
        );
    }
  };

  return (
    <Layout activeTab={activeTab} onTabChange={setActiveTab}>
      {renderContent()}
    </Layout>
  );
};

export default Index;
