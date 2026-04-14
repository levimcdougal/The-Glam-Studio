import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#6B4E3D] text-white border-t border-[#8B6F47]">
      <div className="container mx-auto px-4 pt-12 pb-2">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-[#B8860B]">The Glam</span> Studio
            </h3>
            <p className="text-[#F5E6D3]">
              Your destination for beauty, elegance, and self-care.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#B8860B]">
              Contact Us
            </h4>
            <div className="space-y-3 text-[#F5E6D3]">
              <div className="flex items-center gap-2 justify-center">
                <Phone size={18} className="text-[#B8860B]" />
                <span>(262) 411-5001</span>
              </div>
              <div className="flex items-center gap-2 justify-center">
                <Mail size={18} className="text-[#B8860B]" />
                <span>Satnam2016@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 justify-center">
                <MapPin size={18} className="text-[#B8860B]" />
                <span>24251 Town Center Dr Suite 110, Valencia, CA 91355</span>
              </div>
            </div>
          </div>

        </div>

        <div className="border-t border-[#8B6F47] mt-4 pt-4 text-center text-[#EBD9C5] text-xs">
          <p>&copy; 2026 The Glam Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}