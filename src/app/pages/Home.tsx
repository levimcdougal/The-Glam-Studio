import { Link } from "react-router";
import { Sparkles, Clock, Users } from "lucide-react";
import heroImage from "../../assets/3b23d07670f3706cb900d404f3a190083d17927c.png";
import waxingImage from "../../assets/wax.png";
import hairCareImage from "../../assets/dry.png";
import facialImage from "../../assets/treatment.png";
import ownerImage1 from "../../assets/pro1.jpg";
import ownerImage2 from "../../assets/pro2.jpg";

export function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#F5E6D3] via-[#FAF0E6] to-white overflow-hidden">
        <div className="container mx-auto px-4 py-12 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 text-center lg:text-left">
              <p className="text-[#6B4E3D] max-w-md leading-relaxed mx-auto lg:mx-0">
                Luxury isn't just how it looks it's how it feels, how it heals,
                and how it brings out your most radiant self.
              </p>

              <div>
                <h1 className="text-4xl md:text-7xl font-bold text-[#6B4E3D] mb-4 leading-tight">
                  PURE
                  <br />
                  ELEGANCE
                </h1>
                <p className="text-[#6B4E3D] max-w-md mx-auto lg:mx-0">
                  Because your skin deserves more than just beauty it deserves
                  to be nourished, cherished, and celebrated every day.
                </p>
              </div>

              <Link
                to="/appointment"
                className="inline-block bg-[#F5E6D3] text-[#6B4E3D] px-8 py-4 rounded-full hover:bg-[#EBD9C5] transition-colors font-semibold"
              >
                Book an Appointment
              </Link>
            </div>

            {/* Right Content - Images — hidden on mobile since it's the same as the header logo */}
            <div className="hidden lg:block relative order-1 lg:order-2">
              <div className="relative">
                <img
                  src={heroImage}
                  alt="Beauty cosmetics"
                  className="rounded-3xl shadow-2xl w-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#6B4E3D] mb-4">
              Why Choose <span className="text-[#B8860B]">The Glam Studio</span>?
            </h2>
            <p className="text-[#8B6F47] max-w-2xl mx-auto">
              Experience luxury beauty services tailored just for you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-[#F5E6D3] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="text-[#B8860B]" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#6B4E3D]">
                Premium Products
              </h3>
              <p className="text-[#8B6F47]">
                Only the finest cosmetics and skincare products for our clients
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-[#E8B5CE] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-[#A67C52]" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#6B4E3D]">
                Expert Team
              </h3>
              <p className="text-[#8B6F47]">
                Certified professionals with years of experience in beauty care
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-[#F5E6D3] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-[#B8860B]" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#6B4E3D]">
                Flexible Hours
              </h3>
              <p className="text-[#8B6F47]">
                Open 7 days a week to accommodate your busy schedule
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gradient-to-br from-[#F5E6D3] to-[#FAF0E6]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#6B4E3D] mb-4">
              Our Services
            </h2>
            <p className="text-[#8B6F47] max-w-2xl mx-auto">
              Discover our range of beauty and personal care services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img
                src={hairCareImage}
                alt="Hair Care"
                className="w-full h-64 object-cover object-top"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-[#6B4E3D]">
                  Hair Services
                </h3>
                <p className="text-[#8B6F47]">
                  Blow dry, root touch-up, curling, flat iron, blowdry + curls combo, and facial + blowdry.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img
                src={facialImage}
                alt="Facial Treatments"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-[#6B4E3D]">
                  Facial Treatment
                </h3>
                <p className="text-[#8B6F47]">
                  Express facial, classic, hydrating, acne, anti-aging, and signature facial.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img
                src={waxingImage}
                alt="Waxing Services"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-[#6B4E3D]">
                  Waxing
                </h3>
                <p className="text-[#8B6F47]">
                  Bikini line, Brazilian, and full body (arms + legs + underarms).
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/services"
              className="inline-block bg-[#B8860B] text-white px-8 py-4 rounded-full hover:bg-[#A67C52] transition-colors font-semibold"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr_1fr] gap-8 lg:gap-20 items-center">
            {/* Left Image */}
            <img
              src={ownerImage1}
              alt="Owner of The Glam Studio"
              className="rounded-3xl shadow-xl w-full object-cover object-top aspect-[3/4]"
            />

            {/* Center — Text Content */}
            <div className="space-y-6 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-[#6B4E3D]">
                Meet the <span className="text-[#B8860B]">Owner</span>
              </h2>
              <h3 className="text-xl md:text-2xl font-semibold text-[#6B4E3D]">
                Satnam Kaur
              </h3>
              <p className="text-[#B8860B] font-medium">
                Licensed Cosmetologist &amp; Esthetician — Valencia
              </p>
              <p className="text-[#8B6F47] leading-relaxed text-base md:text-lg">
                I specialize in results-driven treatments that focus on what your skin and hair truly need to repair, strengthen, and maintain long-term health. My approach goes beyond trends and focuses on real results, confidence, and care.
              </p>
              <p className="text-[#8B6F47] leading-relaxed">
                As a certified professional, I combine modern techniques with personalized treatments to deliver visible, lasting results for every client. At Glam Hair &amp; Skin, my mission is simple — beauty should not be a luxury. It should be accessible, effective, and built to last.
              </p>
              <p className="text-[#8B6F47] leading-relaxed">
                Offering Glow Facials, Acne Treatments, Deep Cleansing, Skin Renewal, Full Body Waxing, Hair Services, and Japanese Head Spa treatments — all designed to help you achieve healthy, radiant skin and hair.
              </p>
              <div className="flex flex-col items-center gap-2 pt-2 text-[#6B4E3D] font-medium">
                <span>🎓 Certified from Newberry School of Beauty</span>
                <span>✔ Professional &amp; Licensed Services</span>
              </div>
            </div>

            {/* Right Image — hidden on mobile */}
            <img
              src={ownerImage2}
              alt="Owner of The Glam Studio"
              className="hidden lg:block rounded-3xl shadow-xl w-full object-cover aspect-[3/4]"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 bg-[#6B4E3D] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Ready to Book Your Service?
          </h2>
          <p className="text-[#F5E6D3] text-sm mb-5 max-w-2xl mx-auto">
            Transform your look and feel your best with our expert beauty
            services.
          </p>
          <Link
            to="/appointment"
            className="inline-block bg-[#B8860B] text-white px-6 py-2.5 rounded-full hover:bg-[#A67C52] transition-colors font-semibold"
          >
            Book an Appointment
          </Link>
        </div>
      </section>
    </div>
  );
}