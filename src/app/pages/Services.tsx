import { Link } from "react-router";
import { Sparkles, Scissors, Droplet, Waves, Plus } from "lucide-react";
import facialImage from "../../assets/facial.png";
import waxingImage from "../../assets/waxing.png";
import hairImage from "../../assets/hair.png";
import spaImage from "../../assets/spa.png";
import backImage from "../../assets/back.png";

const facialServices = [
  {
    name: "Express Facial",
    price: "$45",
    description: "30 minute quick clean — fast refresh for glowing skin",
  },
  {
    name: "Classic Facial",
    price: "$75",
    description: "Deep cleansing, exfoliation, massage, mask & SPF",
  },
  {
    name: "Hydrating Facial",
    price: "$85",
    description: "For dry & dull skin — hyaluronic acid & moisture boost",
  },
  {
    name: "Acne / Deep Cleaning Facial",
    price: "$90",
    description: "Blackhead removal + acne treatment",
  },
  {
    name: "Anti-Aging Facial",
    price: "$85",
    description: "Targeted treatment to firm and rejuvenate the skin",
  },
  {
    name: "Signature Facial",
    price: "$95",
    description: "Our signature full-service facial experience",
  },
];

const waxingServices = [
  {
    name: "Bikini Line",
    price: "$40",
    description: "Clean, defined bikini line wax for a smooth finish",
  },
  {
    name: "Brazilian",
    price: "$60",
    description: "Full hair removal for a completely smooth result",
  },
  {
    name: "Full Body",
    price: "$180",
    description: "Full arms + full legs + underarms — the complete package",
  },
];

const waxingAddOns = [
  { name: "Add Brazilian", price: "$45", description: "Add a Brazilian to any service" },
  { name: "Stomach", price: "$35", description: "Smooth stomach wax add-on" },
];

const hairServices = [
  {
    name: "Blow Dry",
    price: null,
    description: "Wash + blowout for a sleek, polished finish",
  },
  {
    name: "Root Touch Up",
    price: "$45",
    description: "Refresh your color at the roots for a seamless, vibrant look",
  },
  {
    name: "Curling",
    price: "$45",
    description: "Defined, bouncy curls styled with a curling iron",
  },
  {
    name: "Flat Iron",
    price: "$45",
    description: "Silky, smooth straightening for a sleek look",
  },
  {
    name: "Blowdry + Curls",
    price: "$55",
    description: "Wash, blowout, and curling iron styling all in one",
  },
  {
    name: "Facial + Blowdry",
    price: "$99",
    description: "Treat your skin and your hair in one luxurious visit",
  },
];

const headSpaServices = [
  {
    name: "Basic Head Spa",
    price: "$65",
    duration: "30 min",
    description: "Scalp cleanser + relaxing scalp massage to relieve tension and promote hair health",
  },
  {
    name: "Standard Head Spa",
    price: "$85",
    duration: "45 min",
    description: "Deep scalp cleaning, therapeutic massage, and hydration treatment",
  },
  {
    name: "Luxury Head Spa",
    price: "$150",
    duration: "60 min",
    description: "Full scalp treatment with steam, nourishing mask, and extended relaxation massage",
  },
];

const comboPackages = [
  { name: "Head Spa + Facial", price: "$150", description: "Rejuvenate your scalp and skin together for full-body relaxation" },
  { name: "Head Spa + Blow Dry", price: "$125", description: "Scalp treatment followed by a fresh, polished blowout" },
  { name: "Head Spa + Facial + Blow Dry", price: "$185", description: "The ultimate self-care experience — scalp, skin, and style all in one" },
];

function ServiceRow({
  name,
  price,
  description,
  duration,
}: {
  name: string;
  price: string | null;
  description?: string;
  duration?: string;
}) {
  return (
    <div className="flex items-start justify-between py-4 border-b border-[#F0E0CC] last:border-0">
      <div className="flex-1 pr-4">
        <div className="flex items-center gap-2">
          <p className="font-semibold text-[#6B4E3D]">{name}</p>
          {duration && (
            <span className="text-xs bg-[#F5E6D3] text-[#B8860B] px-2 py-0.5 rounded-full font-medium">
              {duration}
            </span>
          )}
        </div>
        {description && (
          <p className="text-sm text-[#8B6F47] mt-0.5">{description}</p>
        )}
      </div>
      <p className="font-bold text-[#B8860B] text-lg whitespace-nowrap">
        {price ?? "Ask for pricing"}
      </p>
    </div>
  );
}

function SectionCard({
  title,
  icon: Icon,
  children,
}: {
  title: string;
  icon: React.ElementType;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
      <div className="bg-gradient-to-r from-[#B8860B] to-[#A67C52] px-6 py-4 flex items-center gap-3">
        <div className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center">
          <Icon className="w-5 h-5 text-white" />
        </div>
        <h2 className="text-xl font-bold text-white">{title}</h2>
      </div>
      <div className="px-6 py-2">{children}</div>
    </div>
  );
}

export function Services() {
  return (
    <div>
      {/* Hero */}
      <section className="text-white py-16 md:py-24" style={{ backgroundImage: `url(${backImage})`, backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Our Services</h1>
          <p className="text-lg md:text-xl text-[#F5E6D3] max-w-2xl mx-auto">
            Premium beauty and wellness services tailored just for you.
          </p>
        </div>
      </section>

      {/* First-Time Customer Discount */}
      <section className="py-5 bg-[#F5E6D3] border-b border-[#E8D5C0]">
        <div className="container mx-auto px-4 text-center">
          <p className="text-[#6B4E3D] font-semibold text-base md:text-lg">
            <span className="inline-block bg-[#B8860B] text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mr-3">
              New Clients
            </span>
            Enjoy <span className="font-bold text-[#B8860B]">5% off all services</span> on your first visit — mention this offer when booking!
          </p>
        </div>
      </section>

      {/* Japanese Head Spa Promotion */}
      <section className="py-14 bg-[#6B4E3D]">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-8">
            <span className="inline-block bg-[#B8860B] text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
              Limited Time Offer
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Japanese Head Spa Promotion
            </h2>
            <p className="text-[#F5E6D3]">5% off all head spa packages — for a limited time only</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            {/* Basic */}
            <div className="bg-white/10 border border-white/20 rounded-2xl p-6 text-center hover:bg-white/20 transition-colors">
              <h3 className="text-lg font-bold text-white mb-1">Basic Head Spa</h3>
              <p className="text-[#F5E6D3] text-sm mb-4">Scalp cleanse & relaxing massage</p>
              <div className="flex items-center justify-center gap-3">
                <span className="text-white/50 line-through text-lg">$65</span>
                <span className="text-[#B8860B] text-3xl font-bold">$61.75</span>
              </div>
            </div>

            {/* Premium */}
            <div className="bg-[#B8860B] rounded-2xl p-6 text-center shadow-xl md:scale-105">
              <span className="inline-block bg-white text-[#B8860B] text-xs font-bold uppercase tracking-wide px-3 py-0.5 rounded-full mb-3">Most Popular</span>
              <h3 className="text-lg font-bold text-white mb-1">Premium Head Spa</h3>
              <p className="text-white/80 text-sm mb-4">Deep cleanse, massage & hydration</p>
              <div className="flex items-center justify-center gap-3">
                <span className="text-white/50 line-through text-lg">$88</span>
                <span className="text-white text-3xl font-bold">$83.60</span>
              </div>
            </div>

            {/* Luxury & Facial Combo */}
            <div className="bg-white/10 border border-white/20 rounded-2xl p-6 text-center hover:bg-white/20 transition-colors">
              <h3 className="text-lg font-bold text-white mb-1">Luxury & Facial Combo</h3>
              <p className="text-[#F5E6D3] text-sm mb-4">Full head spa + facial treatment</p>
              <div className="flex items-center justify-center gap-3">
                <span className="text-white/50 line-through text-lg">$125</span>
                <span className="text-[#B8860B] text-3xl font-bold">$118.75</span>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <a
              href="/appointment"
              className="inline-block bg-[#F5E6D3] text-[#6B4E3D] px-8 py-3 rounded-full hover:bg-[#EBD9C5] transition-colors font-semibold"
            >
              Book Now & Save
            </a>
          </div>
        </div>
      </section>

      {/* Services Menu */}
      <section className="py-10 md:py-16 bg-gradient-to-br from-[#FAF0E6] to-white">
        <div className="container mx-auto px-4 max-w-7xl space-y-12 lg:space-y-28">

          {/* Facial Treatments */}
          <div className="flex flex-col lg:flex-row gap-6 items-stretch">
            <div className="flex-1 flex flex-col">
              <SectionCard title="Facial Treatments" icon={Sparkles}>
                {facialServices.map((s) => (
                  <ServiceRow key={s.name} name={s.name} price={s.price} description={s.description} />
                ))}
              </SectionCard>
            </div>
            <div className="lg:w-[500px] flex-shrink-0">
              <img
                src={facialImage}
                alt="Facial Treatment"
                className="w-full h-full object-cover rounded-2xl shadow-md"
              />
            </div>
          </div>

          {/* Waxing */}
          <div className="flex flex-col lg:flex-row gap-6 items-stretch">
            <div
              className="lg:w-[500px] flex-shrink-0 rounded-2xl shadow-md bg-cover bg-center h-56 lg:h-auto"
              style={{ backgroundImage: `url(${waxingImage})` }}
            />
            <div className="flex-1 flex flex-col">
              <SectionCard title="Waxing" icon={Droplet}>
                {waxingServices.map((s) => (
                  <ServiceRow key={s.name} name={s.name} price={s.price} description={s.description} />
                ))}
                {/* Add-ons */}
                <div className="mt-4 mb-2">
                  <div className="flex items-center gap-2 mb-2">
                    <Plus className="w-4 h-4 text-[#B8860B]" />
                    <p className="text-sm font-semibold text-[#B8860B] uppercase tracking-wide">Add-Ons</p>
                  </div>
                  {waxingAddOns.map((s) => (
                    <ServiceRow key={s.name} name={s.name} price={s.price} description={s.description} />
                  ))}
                </div>
              </SectionCard>
            </div>
          </div>

          {/* Hair Services */}
          <div className="flex flex-col lg:flex-row gap-6 items-stretch">
            <div className="flex-1 flex flex-col">
              <SectionCard title="Hair Services" icon={Scissors}>
                {hairServices.map((s) => (
                  <ServiceRow key={s.name} name={s.name} price={s.price} description={s.description} />
                ))}
              </SectionCard>
            </div>
            <div
              className="lg:w-[500px] flex-shrink-0 rounded-2xl shadow-md bg-cover bg-center h-56 lg:h-auto"
              style={{ backgroundImage: `url(${hairImage})` }}
            />
          </div>

          {/* Japanese Head Spa + Combo Packages */}
          <div className="flex flex-col lg:flex-row gap-6 items-stretch">
            <div
              className="lg:w-[500px] flex-shrink-0 rounded-2xl shadow-md bg-cover bg-center h-56 lg:h-auto"
              style={{ backgroundImage: `url(${spaImage})` }}
            />
            <div className="flex-1 flex flex-col gap-6">
              <SectionCard title="Japanese Head Spa" icon={Waves}>
                {headSpaServices.map((s) => (
                  <ServiceRow key={s.name} name={s.name} price={s.price} description={s.description} duration={s.duration} />
                ))}
              </SectionCard>
              <SectionCard title="Combo Packages" icon={Sparkles}>
                {comboPackages.map((s) => (
                  <ServiceRow key={s.name} name={s.name} price={s.price} description={s.description} />
                ))}
              </SectionCard>
            </div>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-8 bg-[#6B4E3D] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Ready to Book Your Service?
          </h2>
          <p className="text-[#F5E6D3] text-sm mb-5 max-w-2xl mx-auto">
            Transform your look and feel your best with our expert beauty services.
          </p>
          <Link
            to="/appointment"
            className="inline-block bg-[#F5E6D3] text-[#6B4E3D] px-6 py-2.5 rounded-full hover:bg-[#EBD9C5] transition-colors font-semibold"
          >
            Book an Appointment
          </Link>
        </div>
      </section>
    </div>
  );
}
