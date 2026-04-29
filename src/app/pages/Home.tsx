import { Link } from "react-router";
import { Sparkles, Clock, Users, Star } from "lucide-react";
import heroImage from "../../assets/3b23d07670f3706cb900d404f3a190083d17927c.png";
import waxingImage from "../../assets/wax.png";
import hairCareImage from "../../assets/dry.png";
import facialImage from "../../assets/treatment.png";
import ownerImage2 from "../../assets/pro2.jpg";
import ownerPhoto from "../../assets/photo.png";
import salon1 from "../../assets/57889.jpg";
import salon2 from "../../assets/57888.jpg";

export function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#F5E6D3] via-[#FAF0E6] to-white overflow-hidden">
        <div className="container mx-auto px-4 py-12 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 text-center lg:text-left order-2 lg:order-1">
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

            {/* Right Content - Images */}
            <div className="relative order-1 lg:order-2">
              <div className="relative">
                <img
                  src={heroImage}
                  alt="Beauty cosmetics"
                  className="rounded-3xl shadow-2xl w-full object-contain max-w-[220px] mx-auto lg:max-w-none"
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
              Why Choose <span className="text-[#B8860B]">Glam Hair & Skin</span>?
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
                Easy Scheduling
              </h3>
              <p className="text-[#8B6F47]">
                Appointment slots available to fit your schedule, book online anytime
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
                className="w-full h-80 object-cover object-center"
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
                className="w-full h-80 object-cover object-center"
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
                className="w-full h-80 object-cover object-center"
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

      {/* Salon Photos */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#6B4E3D] mb-4">
              Visit Our <span className="text-[#B8860B]">Salon</span>
            </h2>
            <p className="text-[#8B6F47] max-w-2xl mx-auto">
              A clean, relaxing space designed to make you feel at home
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-start gap-16">
            <img src={salon1} alt="The Glam Studio salon" className="rounded-2xl shadow-lg w-full md:w-auto md:max-h-[500px]" />
            <img src={salon2} alt="The Glam Studio salon" className="rounded-2xl shadow-lg w-full md:w-auto md:max-h-[500px]" />
          </div>
        </div>
      </section>

      <div className="border-t border-[#B8860B] w-full" />

      {/* About Me Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr_1fr] gap-8 lg:gap-12 items-center">
            {/* Left Image — hidden on mobile */}
            <img
              src={ownerImage2}
              alt="Owner of Glam Hair & Skin"
              className="hidden lg:block rounded-3xl shadow-xl w-full object-cover aspect-[3/4]"
            />

            {/* Text Content */}
            <div className="space-y-6 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-[#6B4E3D]">
                Meet the <span className="text-[#B8860B]">Owner</span>
              </h2>
              <h3 className="text-xl md:text-2xl font-semibold text-[#6B4E3D]">
                Sunny Kaur
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

            {/* Right Image — visible on mobile, shown on all sizes */}
            <img
              src={ownerPhoto}
              alt="Sunny Kaur"
              className="rounded-3xl shadow-xl w-full object-cover aspect-[3/4] max-h-80 lg:max-h-none"
            />
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-gradient-to-br from-[#F5E6D3] to-[#FAF0E6]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#6B4E3D] mb-4">
              What Our <span className="text-[#B8860B]">Clients Say</span>
            </h2>
            <div className="flex justify-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[#B8860B] text-[#B8860B]" />
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[3fr_5fr] gap-8 items-stretch">
            {/* Swara Bose */}
            <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col gap-4 h-full">
              <div>
                <p className="font-semibold text-[#6B4E3D] mb-1">Swara Bose</p>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-[#B8860B] text-[#B8860B]" />)}
                </div>
              </div>
              <p className="text-[#8B6F47] leading-relaxed">"I recently had a Dermalogica facial with Satnam, and it was truly excellent. She performed a thorough and incredibly relaxing facial massage. She removed stubborn blackheads also. Afterward, my skin was noticeably glowing and felt completely refreshed. Adding the whole-body massage as a complementary treatment was a win-win. I really appreciated the extra time and attention she spent on my feet and hands, as I was feeling very tired—it made a huge difference. This is my second wonderful experience with her, as I previously had a HydraFacial with Satnam which was also fantastic. She has a wonderful technique and a real talent for making the entire session therapeutic and luxurious."</p>
            </div>

            {/* Dimple + Alejandra stacked */}
            <div className="flex flex-col gap-8">
              <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col gap-4">
                <div>
                  <p className="font-semibold text-[#6B4E3D] mb-1">Dimple Naresh</p>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-[#B8860B] text-[#B8860B]" />)}
                  </div>
                </div>
                <p className="text-[#8B6F47] leading-relaxed">"Thank you so much for the amazing facial and massage! I received papaya facial. My face feels good. It was a pleasure meeting you and I truly enjoyed the experience."</p>
              </div>
              <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col gap-4">
                <div>
                  <p className="font-semibold text-[#6B4E3D] mb-1">Alejandra Rocha</p>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-[#B8860B] text-[#B8860B]" />)}
                  </div>
                </div>
                <p className="text-[#8B6F47] leading-relaxed">"I had such a relaxing and refreshing facial with Satnam — my skin felt hydrated, brighter, and incredibly smooth afterwards. She was professional, gentle, and really took the time to customize everything to what my skin needed. The whole experience felt calm, clean, and super welcoming, and you can tell she truly cares about her clients and their results. If you're looking for someone who pays attention to detail and creates a genuinely soothing experience, I definitely recommend booking with her!"</p>
              </div>
            </div>
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