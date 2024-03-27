import Image from "next/image";
import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import FeaturedCourses from "@/components/FeaturedCourses";
import MusicSchoolTestimonials from "@/components/TestimonialCards";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import Instructors from "@/components/Instructors";
import Footer from "@/components/Footer";
import { TracingBeam } from "@/components/ui/tracing-beam";

export default function Home() {
    return (
        <main className="min-h-screen antialiased bg-black/[0.96] bg-grid-white/[0.02]">
            <TracingBeam className="">
                <HeroSection />
                <FeaturedCourses />
                <WhyChooseUs />
                <MusicSchoolTestimonials />
                <UpcomingWebinars />
                <Instructors />
                <Footer />
            </TracingBeam>
        </main>
    );
}
