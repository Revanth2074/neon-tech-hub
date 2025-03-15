
import { Link } from "react-router-dom";
import { Award, Gift } from "lucide-react";

const ReferralBanner = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-tech-accent-blue/20 via-tech-accent-purple/20 to-tech-accent-teal/20"></div>
      <div className="absolute inset-0 backdrop-blur-3xl"></div>
      <div className="absolute w-full h-full bg-shimmer-gradient bg-[length:200%_100%] animate-shimmer"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto bg-tech-darker/50 backdrop-blur-md border border-white/10 rounded-2xl p-8 md:p-12 shadow-xl">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="flex-shrink-0">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-tech-accent-blue to-tech-accent-purple flex items-center justify-center animate-pulse-glow">
                <Gift className="w-12 h-12 text-white" />
              </div>
            </div>
            
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">Refer Friends, Earn Rewards</h2>
              <p className="text-muted-foreground mb-6">
                Invite your friends to join TechClub and earn points for each successful sign-up. 
                Redeem your points for exclusive access to workshops, club merchandise, and more!
              </p>
              
              <div className="flex flex-wrap gap-3 mb-6">
                <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-full text-sm">
                  <Award className="w-4 h-4 text-tech-accent-blue" />
                  <span>100 points per referral</span>
                </div>
                <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-full text-sm">
                  <Award className="w-4 h-4 text-tech-accent-purple" />
                  <span>Exclusive workshop access</span>
                </div>
                <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-full text-sm">
                  <Award className="w-4 h-4 text-tech-accent-teal" />
                  <span>Club merchandise</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/refer" className="btn-primary text-center">
                  Get Your Referral Link
                </Link>
                <Link to="/rewards" className="btn-secondary text-center">
                  View Rewards
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReferralBanner;
