import AboutSection from "./components/about-section";
import Header from "./components/header";
import HeroSection from "./components/hero-section";
import ServiceSection from "./components/service-section";
import VideoSection from "./components/video-section";
import PortfolioSection from "./components/portfolio-section";
import PricingSection from "./components/pricing-section";
import TeamSection from "./components/team-section";
import SubscriptionSec from "./components/subscription-sec";
import TestimonialSec from "./components/testimonial-sec";
import BlogSection from "./components/blog-section";
import ClientLogoSec from "./components/client-logo-sec";
import ContactSec from "./components/contact-section";
import FooterSection from "./components/footer-section";
import BottomActionBtn from "./components/bottom-action-btn";
import BackToTop from "./components/back-to-top";
function App()
{
    return(
        <>
            <Header/>
            <HeroSection/>
            <AboutSection/>
            <ServiceSection/>
            <VideoSection/>
            <PortfolioSection/>
            <PricingSection/>
            <TeamSection/>
            <SubscriptionSec/>
            <TestimonialSec/>
            <BlogSection/>
            <ClientLogoSec/>
            <ContactSec/>
            <FooterSection/>
            <BottomActionBtn/>
            <BackToTop/>
        </>
    );
}
export default App;