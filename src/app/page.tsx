import React from "react";

const products = [
	["Losartan 50mg", "Hypertension", "$7.00"],
	["Co-Renitec 10mg", "BP", "$12.00"],
	["Glucophage XR 500mg", "Diabetes", "$7.00"],
	["Insulin Mixtard 30/70", "Diabetes", "$18.00"],
	["Simvastatin 20mg", "Cholesterol", "$8.00"],
	["Amlodipine 5mg", "Hypertension", "$3.50"],
	["Paracetamol 500mg", "Pain & Fever", "$2.00"],
	["Ibuprofen 400mg", "Pain & Fever", "$3.50"],
	["Coryx Day & Night", "Cold & Flu", "$4.00"],
];

export default function Page() {
	return (
		<main className="min-h-screen p-8 bg-white">
			<header className="flex items-center justify-center mb-8">
				<img src="/logo.png" alt="Dis-Pharm Pharmacy Logo" className="h-16 w-auto rounded-lg shadow-md" />
			</header>

			<section className="gradient-hero rounded-xl p-8 md:p-16 text-center shadow">
				<h1 className="text-3xl md:text-4xl font-extrabold">Your Family Pharmacy in Harare</h1>
				<p className="mt-3 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
					Chronic meds, OTC essentials, baby care, wellness supplements, and fast delivery — all under one roof.
				</p>
				<div className="mt-6 flex items-center justify-center gap-3">
					<a
						href="https://wa.me/263782213344"
						className="inline-block bg-[hsl(var(--primary))] text-white px-5 py-3 rounded-md shadow-md"
					>
						Check Stock
					</a>
					<a
						href="tel:+263782213344"
						className="inline-block border border-gray-200 px-5 py-3 rounded-md"
					>
						Order Now
					</a>
					<a
						href="tel:+263775520091"
						className="inline-block bg-gray-900 text-white px-4 py-3 rounded-md"
					>
						Call Voice Agent
					</a>
				</div>
			</section>

			<section className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
				<div className="p-6 rounded-lg shadow bg-white">
					<h3 className="font-semibold">About Dis-Pharm Pharmacy</h3>
					<p className="mt-2 text-sm text-muted-foreground">
						Dis-Pharm Pharmacy is a trusted community pharmacy serving Harare with reliable medication, affordable pricing, and friendly customer support. We provide chronic medication, OTC products, health consultations, deliveries, and fast real-time stock verification through WhatsApp and voice agent channels.
					</p>
					<h4 className="mt-3 font-medium">Locations</h4>
					<ul className="text-sm mt-1 space-y-1 text-muted-foreground">
						<li>Avondale Branch: Shop 3, Avondale Shopping Centre, Harare</li>
						<li>Westgate Branch: Westgate Shopping Mall, Harare</li>
					</ul>
				</div>

				<div className="p-6 rounded-lg shadow bg-white">
					<h3 className="font-semibold">Opening Hours & Contact</h3>
					<ul className="mt-2 text-sm text-muted-foreground space-y-1">
						<li>Mon–Fri: 8:00am – 8:00pm</li>
						<li>Saturday: 8:00am – 6:00pm</li>
						<li>Sunday: 9:00am – 2:00pm</li>
					</ul>
					<div className="mt-3">
						<div className="text-sm">Phone / WhatsApp: <a href="tel:+263782213344" className="font-medium text-[hsl(var(--primary))]">+263 78 221 3344</a></div>
						<div className="text-sm">Email: <a href="mailto:info@dispharm.co.zw" className="font-medium">info@dispharm.co.zw</a></div>
						<div className="text-sm mt-1">After-Hours Voice Agent: <a href="tel:+263775520091" className="font-medium">+263 77 552 0091</a></div>
					</div>
				</div>

				<div className="p-6 rounded-lg shadow bg-white">
					<h3 className="font-semibold">Services</h3>
					<ul className="mt-2 text-sm text-muted-foreground space-y-1">
						<li>Prescription Dispensing & Chronic Medication Refills</li>
						<li>OTC Medication</li>
						<li>Wellness, Vitamins & Supplements</li>
						<li>Baby Products & Mother Care</li>
						<li>Same-Day Delivery Across Harare</li>
						<li>24/7 Stock Enquiries via Voice Agent</li>
					</ul>
				</div>
			</section>

			<section className="mt-10">
				<h2 className="text-xl font-semibold mb-2">Featured Products</h2>
				<p className="text-sm text-muted-foreground mb-4">Popular medications and wellness items</p>
				<div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
					{products.map((p, idx) => (
						<div key={p[0]} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden border border-gray-100">
							<div className="h-40 bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--primary))_/_80%] flex items-center justify-center text-white text-4xl font-bold">
								{["💊", "🩺", "💉", "🏥", "⚕️", "🧬", "🌡️", "🔬", "📋"][idx % 9]}
							</div>
							<div className="p-4">
								<div className="font-semibold text-gray-900 text-sm">{p[0]}</div>
								<div className="text-xs text-[hsl(var(--primary))] font-medium mt-1">{p[1]}</div>
								<div className="text-lg font-bold text-gray-900 mt-3">{p[2]}</div>
								<a href="https://wa.me/263782213344" className="w-full inline-block mt-4 bg-[hsl(var(--primary))] hover:opacity-90 text-white px-3 py-2 rounded-md text-sm font-medium text-center transition-opacity">
									Order via WhatsApp
								</a>
							</div>
						</div>
					))}
				</div>
			</section>

			<a
				href="https://wa.me/263782213344"
				className="fixed right-4 bottom-4 bg-[#25D366] p-4 rounded-full shadow-lg flex items-center justify-center"
				aria-label="WhatsApp"
			>
				<svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M20.52 3.48A11.92 11.92 0 0012 0C5.373 0 0 5.373 0 12c0 2.115.553 4.14 1.6 5.95L0 24l6.3-1.6A11.92 11.92 0 0012 24c6.627 0 12-5.373 12-12 0-3.2-1.24-6.16-3.48-8.52z" fill="#25D366"/>
					<path d="M17.2 14.6c-.3-.15-1.76-.86-2.03-.96-.27-.1-.47-.15-.67.15s-.77.96-.94 1.16c-.17.2-.33.22-.63.07-.3-.15-1.13-.42-2.15-1.32-.8-.66-1.34-1.48-1.5-1.78-.16-.3-.02-.46.13-.61.13-.13.3-.33.45-.5.16-.17.2-.28.3-.47.1-.2 0-.37-.04-.52-.04-.15-.67-1.6-.92-2.19-.24-.58-.48-.5-.66-.51-.17-.02-.37-.02-.56-.02s-.52.07-.8.37c-.27.29-1.03 1.01-1.03 2.46 0 1.45 1.06 2.86 1.21 3.06.15.2 2.09 3.2 5.06 4.49 2.97 1.29 2.97.86 3.51.81.54-.05 1.76-.72 2.01-1.42.25-.7.25-1.3.18-1.42-.07-.12-.27-.2-.57-.35z" fill="#fff"/>
				</svg>
			</a>
		</main>
	);
}

