import { Mail, Phone, MessageSquare } from "lucide-react";
import { useEffect } from "react";

export function Appointment() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://asset.cal.com/embed/embed.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#B8860B] to-[#A67C52] text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 md:mb-6">
            Book Your Appointment
          </h1>
          <p className="text-lg md:text-xl text-[#F5E6D3] max-w-2xl mx-auto">
            Schedule your visit to Glam Hair & Skin and let us pamper you with
            our exceptional services.
          </p>
        </div>
      </section>

      {/* Cal.com Booking Widget */}
      <section className="py-16 bg-gradient-to-br from-[#F5E6D3] via-[#FAF0E6] to-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-[#6B4E3D] mb-3">Book Online</h2>
            <p className="text-[#8B6F47] text-lg">Pick a service and time that works for you</p>
          </div>
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-[#F0E0CC]">
            <iframe
              src="https://cal.com/theglamstudio"
              width="100%"
              height="600"
              frameBorder="0"
              title="Book an Appointment at Glam Hair & Skin"
              className="w-full min-h-[500px] md:min-h-[700px]"
            />
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-[#F5E6D3] via-[#FAF0E6] to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-[#6B4E3D]">
                Prefer to Contact Us Directly?
              </h2>
              <p className="text-[#8B6F47] text-lg max-w-2xl mx-auto">
                Reach out to us via phone, text, or email to schedule your beauty services. 
                We're here to make you look and feel amazing!
              </p>
            </div>

            {/* Contact Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {/* Phone Card */}
              <div className="bg-white rounded-3xl shadow-xl p-8 text-center hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-[#B8860B]">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#B8860B] to-[#A67C52] rounded-full mb-6">
                  <Phone className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-[#6B4E3D]">Call Us</h3>
                <p className="text-[#8B6F47] mb-6">
                  Speak directly with our team
                </p>
                <a
                  href="tel:6616663649"
                  className="text-2xl font-semibold text-[#B8860B] hover:text-[#A67C52] transition-colors block mb-4"
                >
                  661-666-3649
                </a>
                <a
                  href="tel:6616663649"
                  className="inline-block bg-[#F5E6D3] text-[#6B4E3D] px-8 py-3 rounded-full hover:bg-[#EBD9C5] transition-colors font-semibold"
                >
                  Call Now
                </a>
              </div>

              {/* Text Card */}
              <div className="bg-white rounded-3xl shadow-xl p-8 text-center hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-[#B8860B]">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#B8860B] to-[#A67C52] rounded-full mb-6">
                  <MessageSquare className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-[#6B4E3D]">Text Us</h3>
                <p className="text-[#8B6F47] mb-6">
                  Send us a quick message
                </p>
                <a
                  href="sms:6616663649"
                  className="text-2xl font-semibold text-[#B8860B] hover:text-[#A67C52] transition-colors block mb-4"
                >
                  661-666-3649
                </a>
                <a
                  href="sms:6616663649"
                  className="inline-block bg-[#F5E6D3] text-[#6B4E3D] px-8 py-3 rounded-full hover:bg-[#EBD9C5] transition-colors font-semibold"
                >
                  Send Text
                </a>
              </div>

              {/* Email Card */}
              <div className="bg-white rounded-3xl shadow-xl p-8 text-center hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-[#B8860B]">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#B8860B] to-[#A67C52] rounded-full mb-6">
                  <Mail className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-[#6B4E3D]">Email Us</h3>
                <p className="text-[#8B6F47] mb-6">
                  Send us a detailed inquiry
                </p>
                <a
                  href="mailto:Satnam2016@gmail.com"
                  className="text-xl font-semibold text-[#B8860B] hover:text-[#A67C52] transition-colors block mb-4"
                >
                  Satnam2016@gmail.com
                </a>
                <a
                  href="mailto:Satnam2016@gmail.com"
                  className="inline-block bg-[#F5E6D3] text-[#6B4E3D] px-8 py-3 rounded-full hover:bg-[#EBD9C5] transition-colors font-semibold"
                >
                  Send Email
                </a>
              </div>
            </div>

            {/* Business Info Card */}
            <div className="bg-gradient-to-br from-[#B8860B] to-[#A67C52] rounded-3xl shadow-2xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr]">
                {/* Location & Hours */}
                <div className="p-10 min-w-0">
                  <h3 className="text-3xl font-bold mb-8 text-white">Visit Information</h3>
                  
                  <div className="space-y-8">
                    <div>
                      <h4 className="text-xl font-semibold mb-3 text-[#F5E6D3]">
                        Our Location
                      </h4>
                      <p className="text-white/90 text-lg leading-relaxed">
                        24251 Town Center Dr Suite 110
                        <br />
                        Valencia, CA 91355
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xl font-semibold mb-3 text-[#F5E6D3]">
                        Business Hours
                      </h4>
                      <div className="text-white/90 text-lg leading-relaxed space-y-1">
                        <p>Monday - Friday: 9:30 AM - 3:30 PM, after by appointment</p>
                        <p>Saturday: By appointment only</p>
                        <p>Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Additional Info */}
                <div className="bg-white/10 backdrop-blur-sm p-10">
                  <div className="mb-8">
                    <h4 className="text-xl font-semibold mb-4 text-[#F5E6D3]">
                      Cancellation Policy
                    </h4>
                    <p className="text-white/90 leading-relaxed">
                      Please provide at least 24 hours notice for
                      cancellations. Late cancellations may be subject to a
                      fee. We appreciate your understanding!
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold mb-4 text-[#F5E6D3]">
                      What to Expect
                    </h4>
                    <ul className="text-white/90 space-y-3">
                      <li className="flex items-center gap-3">
                        <span className="text-[#F5E6D3] text-xl">✓</span>
                        Complimentary consultation
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="text-[#F5E6D3] text-xl">✓</span>
                        Premium products & tools
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="text-[#F5E6D3] text-xl">✓</span>
                        Relaxing atmosphere
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="text-[#F5E6D3] text-xl">✓</span>
                        Expert professionals
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-[#6B4E3D]">
            We Can't Wait to See You!
          </h2>
          <p className="text-[#8B6F47] text-lg max-w-2xl mx-auto mb-10">
            Our team is dedicated to providing you with the best beauty
            experience. If you have any questions, don't hesitate to reach out!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:6616663649"
              className="inline-flex items-center gap-2 bg-[#B8860B] text-white px-8 py-4 rounded-full hover:bg-[#A67C52] transition-colors font-semibold text-lg shadow-lg"
            >
              <Phone className="w-5 h-5" />
              Call Us Now
            </a>
            <a
              href="mailto:Satnam2016@gmail.com"
              className="inline-flex items-center gap-2 bg-[#6B4E3D] text-white px-8 py-4 rounded-full hover:bg-[#8B6F47] transition-colors font-semibold text-lg shadow-lg"
            >
              <Mail className="w-5 h-5" />
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}