import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Pill,
  Stethoscope,
  Baby,
  Leaf,
  Truck,
  Phone,
  MapPin,
  Clock,
  Mail,
  Heart,
  Star,
  ShoppingCart,
  Activity,
  Thermometer,
  Search,
  MessageCircle,
  ChevronRight,
  Plus,
  CheckCircle2,
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img src="/logo.png" alt="Dis-Pharm Logo" className="w-10 h-10 rounded-lg object-cover" />
              <span className="text-2xl font-bold text-gray-900">
                Dis-Pharm Pharmacy
              </span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#home" className="text-gray-700 hover:text-[#1AB27C]">
                Home
              </a>
              <a href="#doctor" className="text-gray-700 hover:text-[#1AB27C]">
                Doctor
              </a>
              <a
                href="#services"
                className="text-gray-700 hover:text-[#1AB27C]"
              >
                Services
              </a>
              <a href="#products" className="text-gray-700 hover:text-[#1AB27C]">
                Products
              </a>
            </div>
            <div className="flex items-center gap-4">
              <Button className="bg-[#1AB27C] hover:bg-[#0855c7] hidden md:flex">
                Book Appointment
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
              <Search className="w-5 h-5 text-gray-700 cursor-pointer" />
              <ShoppingCart className="w-5 h-5 text-gray-700 cursor-pointer" />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="gradient-hero py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <Activity className="w-4 h-4 text-[#1AB27C]" />
                <span className="text-sm font-medium">Insights</span>
                <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">
                  NEW
                </Badge>
              </div>
              <h1 className="text-6xl font-bold text-gray-900 leading-tight">
                Your Family
                <br />
                <span className="text-gray-600">Pharmacy</span> in Harare
              </h1>
              <p className="text-lg text-gray-600 max-w-md">
                Chronic meds, OTC essentials, baby care, wellness supplements, and fast delivery — all under one roof.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Button className="bg-[#1AB27C] hover:bg-[#0855c7] text-white px-8 py-6 text-lg">
                  Shop Now
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Button>
                <a
                  href="https://wa.me/263782213344?text=Hi%20Dis-Pharm%20Pharmacy%2C%20please%20check%20stock%20for..."
                  className="inline-flex items-center gap-2 rounded-full border px-6 py-3 text-sm font-medium hover:bg-gray-50"
                >
                  <Search className="w-4 h-4" /> Check Stock (WhatsApp)
                </a>
                <a
                  href="tel:+263775520091"
                  className="inline-flex items-center gap-2 rounded-full border px-6 py-3 text-sm font-medium hover:bg-gray-50"
                >
                  <Phone className="w-4 h-4" /> Call 24/7 Voice Agent
                </a>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg inline-block">
                <div className="text-5xl font-bold text-gray-900">24/7</div>
                <div className="text-sm text-gray-600 mt-1">Stock Checking Support</div>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10">
                <img
                  src="https://ugc.same-assets.com/lpp198i8E_afBG_8NkUsU7Ds4DVIculR.jpeg"
                  alt="Pharmacist"
                  className="rounded-3xl shadow-2xl w-full object-cover"
                />
              </div>
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-white/50 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-[#1AB27C]/20 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Categories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Our Popular Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
            {[
              {
                name: "Kidney Care",
                image: "https://ugc.same-assets.com/huodsVniB-8JgoyyzyV7xjPr5d2KgeId.jpeg",
                color: "#E8F5E9",
              },
              {
                name: "Kidney Care",
                image: "https://ugc.same-assets.com/MjkkwgnViWDccC1zx_IPB57sZiFABwmq.jpeg",
                color: "#E3F2FD",
              },
              {
                name: "Liver Care",
                image: "https://ugc.same-assets.com/aRNT5oPPqKK1l-aQ_X-SPEq_jewIaaT9.jpeg",
                color: "#E8F5E9",
              },
              {
                name: "Physiology Care",
                image: "https://ugc.same-assets.com/hTAzwn_8o04Yb5JP_AvGNa7nIYTKac82.jpeg",
                color: "#FFE0B2",
              },
              {
                name: "Sleep Care",
                image: "https://ugc.same-assets.com/YAN9PxeSqF7_VymBQ3wqUuBWlKGa-xH5.jpeg",
                color: "#F3E5F5",
              },
              {
                name: "Pregnant Care",
                image: "https://ugc.same-assets.com/kk_JaZuPlX__V_QqKxd8hu-qBSdiqzTR.jpeg",
                color: "#FFEBEE",
              },
            ].map((category, index) => (
              <div key={index} className="text-center">
                <div
                  className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-4 shadow-lg"
                  style={{ backgroundColor: category.color }}
                >
                  <img src={category.image} alt={category.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-sm font-medium text-gray-900">{category.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Today's Best Offer */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl font-bold text-gray-900">
              Todays Best Offer
              <br />
              <span className="text-2xl font-normal text-gray-600">
                Just For You
              </span>
            </h2>
            <Button variant="outline" className="hidden md:flex">
              See more
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                name: "Immune Booster Combo Pack",
                price: "$10.00",
                image:
                  "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop",
              },
              {
                name: "Omega 3 Fish Oil",
                price: "$12.00",
                image:
                  "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=400&h=400&fit=crop",
              },
              {
                name: "Vitamin C 1000mg",
                price: "$6.00",
                image:
                  "https://images.unsplash.com/photo-1550572017-4950f8b03f8b?w=400&h=400&fit=crop",
              },
              {
                name: "Revivo Multi-Vitamin",
                price: "$9.00",
                image:
                  "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&h=400&fit=crop",
              },
            ].map((product, index) => (
              <Card key={index} className="overflow-hidden group cursor-pointer">
                <div className="relative">
                  <div className="absolute top-4 left-4 z-10">
                    <Badge className="bg-white text-gray-900 hover:bg-white">
                      Nature's bounty
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4 z-10">
                    <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-50">
                      <Heart className="w-4 h-4 text-gray-600" />
                    </button>
                  </div>
                  <div className="bg-gray-100 aspect-square flex items-center justify-center">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-gray-900 mb-2">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-gray-900">
                      {product.price}
                    </span>
                    <Button
                      size="sm"
                      className="bg-[#1AB27C] hover:bg-[#0855c7]"
                    >
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Shop Now
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            Comprehensive pharmaceutical services tailored to meet your health
            needs
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                icon: Pill,
                name: "Prescription Dispensing",
                desc: "Chronic medication refills, ARVs, BP meds, diabetes medication",
              },
              {
                icon: Leaf,
                name: "Wellness & Supplements",
                desc: "Immunity boosters, vitamins, herbal supplements",
              },
              {
                icon: Baby,
                name: "Baby & Mother Care",
                desc: "Formula, diapers, baby meds, toiletries",
              },
              {
                icon: Truck,
                name: "Same-Day Delivery",
                desc: "Fast delivery across Harare from $3",
              },
              {
                icon: Stethoscope,
                name: "Medical Equipment",
                desc: "BP machines, glucometers, thermometers, nebulisers",
              },
              {
                icon: Heart,
                name: "Over-The-Counter",
                desc: "Pain relief, cough, flu, cold, stomach meds",
              },
              {
                icon: Phone,
                name: "24/7 Voice Agent",
                desc: "Call anytime to check stock and get assistance",
              },
              {
                icon: Thermometer,
                name: "Beauty & Cosmetics",
                desc: "Nivea, L'Oréal, Pond's, Vaseline, Bioderma",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-shadow cursor-pointer"
              >
                <div className="w-14 h-14 bg-[#1AB27C]/10 rounded-xl flex items-center justify-center mb-4">
                  <service.icon className="w-7 h-7 text-[#1AB27C]" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  {service.name}
                </h3>
                <p className="text-sm text-gray-600">{service.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Product Catalogue */}
      <section id="products" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">Mock Product Catalogue</h2>
          <p className="text-center text-gray-600 mb-12">Realistic Zimbabwe pharmacy items and pricing</p>
          {(
            [
              {
                name: "Chronic Medication",
                items: [
                  { n: "Enap 10mg (Enalapril) – BP management", p: "$6.00" },
                  { n: "Co-Diovan 80/12.5 – Hypertension", p: "$18.00" },
                  { n: "Amaryl 2mg – Diabetes", p: "$12.00" },
                  { n: "Metformin 500mg – Diabetes", p: "$5.00" },
                  { n: "Atorvastatin 20mg – Cholesterol", p: "$10.00" },
                  { n: "Tenofovir + DTG Combo – ARVs", p: "FREE (Govt Program)" },
                  { n: "Hydrochlorothiazide 25mg – BP", p: "$3.00" },
                ],
              },
              {
                name: "Pain & Fever",
                items: [
                  { n: "Panado Tablets", p: "$2.50" },
                  { n: "Ibuprofen 200mg", p: "$3.00" },
                  { n: "Grandpa Headache Powders", p: "$2.00" },
                  { n: "Muthi Wenyoni Syrup (Baby)", p: "$4.50" },
                ],
              },
              {
                name: "Cough & Flu",
                items: [
                  { n: "Benylin (Adult)", p: "$6.00" },
                  { n: "BronCleer", p: "$3.50" },
                  { n: "Prospan Syrup", p: "$8.00" },
                  { n: "Vicks Vaporub", p: "$4.00" },
                ],
              },
              {
                name: "Stomach & Digestion",
                items: [
                  { n: "Gaviscon Dual Action", p: "$8.00" },
                  { n: "Eno Sachets", p: "$2.00" },
                  { n: "Smecta", p: "$3.00" },
                  { n: "Buscopan", p: "$5.00" },
                ],
              },
              {
                name: "Allergies",
                items: [
                  { n: "Cetirizine 10mg", p: "$4.00" },
                  { n: "Allergex", p: "$3.50" },
                ],
              },
              {
                name: "Baby & Mother Care",
                items: [
                  { n: "Nan Optipro 1", p: "$18.00" },
                  { n: "Pampers New Baby 66s", p: "$16.00" },
                  { n: "Infacare", p: "$14.00" },
                  { n: "Pure Petroleum Jelly", p: "$2.00" },
                ],
              },
              {
                name: "Wellness & Supplements",
                items: [
                  { n: "Vitamin C 1000mg", p: "$6.00" },
                  { n: "Immune Booster Combo Pack", p: "$10.00" },
                  { n: "Omega 3 Fish Oil", p: "$12.00" },
                  { n: "Revivo Multi-Vitamin", p: "$9.00" },
                ],
              },
              {
                name: "Medical Equipment",
                items: [
                  { n: "Omron BP Machine", p: "$45.00" },
                  { n: "Accu-Chek Glucometer", p: "$35.00" },
                  { n: "Disposable Syringes", p: "$0.50 each" },
                  { n: "Digital Thermometer", p: "$6.00" },
                ],
              },
            ] as { name: string; items: { n: string; p: string }[] }[]
          ).map((cat) => (
            <div key={cat.name} className="mb-10">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-semibold text-gray-900">{cat.name}</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {cat.items.map((it) => (
                  <Card key={it.n} className="p-5 flex items-center justify-between">
                    <div className="text-sm text-gray-800 font-medium max-w-[70%]">{it.n}</div>
                    <div className="text-base font-semibold text-gray-900">{it.p}</div>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Seasonal Solutions */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Our Seasonal
            <br />
            <span className="text-gray-600">Exclusive Solutions</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Headache And Migraine Solutions",
                image: "https://ugc.same-assets.com/8XphXz4087R9qHIzuMJlxf55o1cS3RoW.jpeg",
                color: "#F3E5F5",
              },
              {
                title: "Headache And Migraine Solutions",
                image: "https://ugc.same-assets.com/G1IBBzyrkLW3aLe_q8q6rDRqeVcNPkp9.jpeg",
                color: "#FFE0B2",
              },
              {
                title: "Headache And Migraine Solutions",
                image: "https://ugc.same-assets.com/Fj4c_U76iqOmMf7PMmrnmvezmuP4AZEd.jpeg",
                color: "#FFEBEE",
              },
            ].map((solution, index) => (
              <Card key={index} className="overflow-hidden cursor-pointer group">
                <div
                  className="h-64 flex items-center justify-center relative"
                  style={{ backgroundColor: solution.color }}
                >
                  <img
                    src={solution.image}
                    alt={solution.title}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">{solution.title}</h3>
                  <Button variant="outline" className="w-full">
                    Browse
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Doctor Profiles */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-[#1e3a8a] text-white p-8 overflow-hidden relative">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-2">Tawanda Mudzimba</h3>
                <p className="text-blue-200 mb-4">
                  BPharm (UZ), 12 years experience
                  <br />
                  Pharmacist-in-Charge
                </p>
                <Button className="bg-white text-[#1e3a8a] hover:bg-gray-100">
                  Book appointment
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
              <div className="absolute right-0 bottom-0 w-64 h-64">
                <img
                  src="https://ugc.same-assets.com/lpp198i8E_afBG_8NkUsU7Ds4DVIculR.jpeg"
                  alt="Doctor"
                  className="w-full h-full object-cover"
                />
              </div>
            </Card>

            <Card className="bg-gray-50 p-8 overflow-hidden relative">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-2 text-gray-900">Kundai Jiri</h3>
                <p className="text-gray-600 mb-4">
                  Customer Care Lead
                  <br />
                  Expert in patient support
                </p>
                <Button variant="outline" className="border-gray-900 text-gray-900">
                  Book appointment
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
              <div className="absolute right-0 bottom-0 w-64 h-64">
                <img
                  src="https://ugc.same-assets.com/huodsVniB-8JgoyyzyV7xjPr5d2KgeId.jpeg"
                  alt="Customer care lead"
                  className="w-full h-full object-cover"
                />
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              4.5/5 review from
              <br />
              7,000+ verified customer
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                rating: 3,
                text: "This pharmacy was incredibly Being accommodating with COVID-19 as a pandemic going on.I recommend this pharmacy, including the FAST pick-up and delivery!",
                author: "Joe Silva Smith",
              },
              {
                rating: 5,
                text: "This pharmacy was incredibly Being accommodating with COVID-19 as a pandemic going on.I recommend this pharmacy, including the FAST pick-up and delivery!",
                author: "Joe Silva Smith",
              },
              {
                rating: 5,
                text: "This pharmacy was incredibly Being accommodating with COVID-19 as a pandemic going on.I recommend this pharmacy, including the FAST pick-up and delivery!",
                author: "Joe Silva Smith",
              },
            ].map((review, index) => (
              <Card key={index} className="p-6">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < review.rating
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {review.text}
                </p>
                <p className="text-sm font-medium text-gray-900">
                  {review.author}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Promotion */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="gradient-delivery rounded-3xl p-12 relative overflow-hidden">
            <div className="relative z-10 max-w-xl">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Enjoy free delivery
                <br />
                within 2-hours
              </h2>
              <Button className="bg-white text-[#1AB27C] hover:bg-gray-100">
                Order Now
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
            <div className="absolute right-0 bottom-0 w-96 h-full">
              <img
                src="https://ugc.same-assets.com/KyEc_KKDTG1mpQ3iRG5yIlrhvzOD0VzQ.jpeg"
                alt="Delivery courier"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Frequently Asked Question
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: "Do you deliver?",
                a: "Yes, same-day delivery within Harare.",
              },
              {
                q: "Do you check stock in real-time?",
                a: "Yes — customers can call or WhatsApp for a live stock update.",
              },
              {
                q: "Do you open on Sundays?",
                a: "Yes, 9am–1pm.",
              },
              {
                q: "Do you accept Ecocash?",
                a: "Yes, and USD cash, ZIPIT, bank transfers, and Mukuru.",
              },
              {
                q: "Do you have an after-hours service?",
                a: "Yes — our AI voice agent handles queries and forwards emergencies to the pharmacist.",
              },
            ].map((faq, index) => (
              <Card key={index} className="p-6 cursor-pointer hover:shadow-md">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {faq.q}
                    </h3>
                    <p className="text-sm text-gray-600">{faq.a}</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img src="/logo.png" alt="Dis-Pharm Logo" className="w-10 h-10 rounded-lg object-cover" />
                <span className="text-xl font-bold">Dis-Pharm Pharmacy</span>
              </div>
              <p className="text-gray-400 text-sm">
                Your trusted pharmacy in Harare, Zimbabwe
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-3 text-sm text-gray-400">
                <div className="flex items-start gap-2">
                  <Phone className="w-4 h-4 mt-1 flex-shrink-0" />
                  <div>
                    <div>+263 78 221 3344</div>
                    <div className="text-xs">WhatsApp Available</div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Mail className="w-4 h-4 mt-1 flex-shrink-0" />
                  <div>info@dispharm.co.zw</div>
                </div>
                <div className="flex items-start gap-2">
                  <Phone className="w-4 h-4 mt-1 flex-shrink-0" />
                  <div>
                    <div className="text-red-400">Emergency (After Hours)</div>
                    <div>+263 77 552 0091</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Locations</h4>
              <div className="space-y-3 text-sm text-gray-400">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-white">Avondale Branch</div>
                    <div>Shop 3, Avondale Shopping Centre, Harare</div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-white">Westgate Branch</div>
                    <div>Westgate Shopping Mall, Harare</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Opening Hours</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-white">Mon - Fri</div>
                    <div>8:00am – 8:00pm</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-white">Saturday</div>
                    <div>8:00am – 6:00pm</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-white">
                      Sunday
                    </div>
                    <div>9:00am – 2:00pm</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-sm text-gray-400">
                © 2025 Dis-Pharm Pharmacy. All rights reserved.
              </p>
              <div className="flex items-center gap-6 text-sm text-gray-400">
                <a href="#" className="hover:text-white">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-white">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/263782213344"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors z-50"
      >
        <MessageCircle className="w-8 h-8 text-white" />
      </a>

      {/* Stock Check Floating Button */}
      <button className="fixed bottom-24 right-6 bg-[#1AB27C] text-white px-6 py-3 rounded-full shadow-lg hover:bg-[#0855c7] transition-colors z-50 flex items-center gap-2">
        <Search className="w-5 h-5" />
        <span className="font-medium">Check Stock</span>
      </button>

      {/* Call Voice Agent Button */}
      <a
        href="tel:+263775520091"
        className="fixed bottom-40 right-6 bg-[#1AB27C] text-white px-6 py-3 rounded-full shadow-lg hover:bg-[#158a66] transition-colors z-50 flex items-center gap-2"
      >
        <Phone className="w-5 h-5" />
        <span className="font-medium">Call 24/7</span>
      </a>
    </div>
  );
}
