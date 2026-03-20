import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Client Reviews | The Patrick Group",
  description:
    "See what clients say about working with The Patrick Group — Brad and Sarah Patrick of Oak & Stone Real Estate. First-time buyers, sellers, relocators, and more across Southeast Michigan.",
  alternates: { canonical: "https://thepatrickgrp.com/reviews" },
};

const reviews = [
  {
    name: "Holly Stauffer",
    rating: 5,
    text: "Brad was great to work with! I had to move from out of state and he was so flexible, and patient, and knew what I was looking for in a home! Very knowledgeable and also has great recommendations! I'm so excited to be back in Michigan and with a home just right for me that he helped me find! He took so much stress away from the transition!! I am forever thankful!",
  },
  {
    name: "Tony Shaw",
    rating: 5,
    text: "After talking with many real estate agents we were fortunate enough to have met Brad and Sara. We decided to use them to sell our biggest asset, our home in Rochester Hills. They were extremely knowledgeable and responsive to all of our numerous questions and concerns. Brad visited our house countless times prior to listing the house for sale to provide the exact items that should be updated and improved to allow for the highest price and fastest sale. Brad worked countless hours and has seemingly unlimited energy and enthusiasm to attract the right buyer. He constantly followed up with potential buyers and provided critical feedback to us. Once an offer was submitted he then took the initiative to get the title work moving as well as to talk with the buyers lenders to ensure that they were well qualified. Brad and Sara have a unique ability to understand and easily explain the entire process in layman's terms. They also never bring a problem unless they also provide several recommendations. I cannot more highly recommend Brad and Sara for any real estate project. Simply put they are the best and we consider themselves very fortunate to have had the opportunity to meet and work with them.",
  },
  {
    name: "Mrs. H",
    rating: 5,
    text: "I highly recommend The Patrick Group for all of your real estate needs. Mr. Brad & Mrs. Sarah Patrick came to our home to formally introduce themselves. The couple made us feel taken care of and protected from the start!! They advised us what we needed to do and we all got to work! Mr. Brad Patrick was the detailed, diligent intelligent agent that assisted us directly. He was very patient with our questions, research and reservations early on. What really impressed us — we ran into an issue with the buyers of our house needing more time due to an issue, not on our end. The big issue was we were a few days from closing. He happily offered to and executed to contact the listing agent, builder and whoever else was in charge on our contract to buy elsewhere. It's a family affair — Brad and Sarah's son, Christian, hosted the open house for us when our home was for sale. All texts, emails and calls are handled with care and I never felt like Brad didn't care! Expectations were always exceeded — if he told me he would call by 5 pm, he is calling at 3:30! Please trust that you are working with the best!",
  },
  {
    name: "Sabella Cascarelli",
    rating: 5,
    text: "Brad recently helped my husband and I find our first home together. He made the entire process feel absolutely seamless from start to finish. From the beginning, he was always transparent, sharing his honest opinions and giving us advice to help us through the process. He offered so much insight on everything from design ideas to different ways of house hunting in order to get the most 'bang' for our 'buck'. He acted not only as our realtor, but as a friend and advisor. Buying a first home is no easy feat, especially in today's market. Brad coached us through, gave pep talks when needed, and provided us with all the tools we would need to be successful homeowners. He made us feel like we were his only clients, always making our busy schedules work with his and answering the phone if we ever called with any questions. There is no one I would more highly recommend!!!",
  },
  {
    name: "Jasmine Coleman",
    rating: 5,
    text: "Brad was great to work with as a first time home buyer! He was knowledgeable, patient, and just an overall nice guy. He's been in the industry for a while so it was helpful to have someone who could point things out in a home that I may not have thought to look at or consider. He also has positive relationships with a lot of people in the industry which was super helpful. We were always able to make scheduling work for houses I wanted to view which in this market matters because the houses weren't staying on the market long. Everyone that I interacted with on his team was a pleasure to work with as well. I would definitely recommend, 10/10!",
  },
  {
    name: "Amanda Conlon",
    rating: 5,
    text: "Our experience with Brad and The Patrick Group as a whole was incredible! As first time home buyers we really appreciated that Brad made sure all our questions were answered, really listened to what we wanted and was very patient with us. Having had an unsatisfactory experience with another real estate group we felt very discouraged, but the minute we began working with Brad things took a 180 and now we are moving into the perfect home for us. The housing market can be very overwhelming and feel impossible to navigate — but working with Brad made it so much more manageable and made us feel like we could actually be excited to buy our home. Can't recommend enough!",
  },
  {
    name: "Devon Mosquera",
    rating: 5,
    text: "Brad was patient, kind, flexible, and genuine during our very long and complicated house hunt. He never pushed us to go somewhere we didn't want to go, and always had our best interest in mind. We are forever thankful for our first home and the work Brad put in to make it happen!",
  },
  {
    name: "Dana",
    rating: 5,
    text: "Brad made the process stress free and easy! I was a first time homebuyer and the whole process took less than a month! He is very responsive, personable and has a lot of knowledge. Would definitely recommend!",
  },
  {
    name: "Prasoon Manandhar",
    rating: 5,
    text: "Brad and Christian were very helpful throughout the process. Very professional. I would highly recommend.",
  },
  {
    name: "Barbara Kline",
    rating: 5,
    text: "Everything went so smoothly and our closing was a breeze. Thank you Brad.... you are great!!",
  },
];

const aggregateSchema = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: "The Patrick Group | Oak and Stone Real Estate",
  url: "https://thepatrickgrp.com",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: String(reviews.length),
    bestRating: "5",
    worstRating: "1",
  },
  review: reviews.map((r) => ({
    "@type": "Review",
    author: { "@type": "Person", name: r.name },
    reviewRating: {
      "@type": "Rating",
      ratingValue: String(r.rating),
      bestRating: "5",
    },
    reviewBody: r.text,
    itemReviewed: {
      "@type": "RealEstateAgent",
      name: "The Patrick Group | Oak and Stone Real Estate",
    },
  })),
};

function Stars() {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <svg key={i} className="w-4 h-4 text-[#c70000] fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function ReviewsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateSchema) }}
      />

      {/* HERO */}
      <section
        className="pt-32 pb-16 px-4 sm:px-6"
        style={{ background: "linear-gradient(135deg, #0d0d0d 0%, #1a0000 40%, #2a0808 100%)" }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#c70000] text-xs uppercase tracking-widest font-semibold mb-3">
            Client Reviews
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-5">
            What Our Clients Say
          </h1>

          {/* Aggregate rating display */}
          <div className="inline-flex flex-col items-center gap-2 bg-white/10 rounded-sm px-8 py-5">
            <p className="font-serif text-5xl font-bold text-white">5.0</p>
            <div className="flex gap-1">
              {[1,2,3,4,5].map((i) => (
                <svg key={i} className="w-6 h-6 text-[#c70000] fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-white/60 text-sm">Google Reviews</p>
          </div>
        </div>
      </section>

      {/* REVIEWS GRID */}
      <section className="py-16 px-4 sm:px-6 bg-[#faf9f7]">
        <div className="max-w-5xl mx-auto">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {reviews.map((r) => (
              <div
                key={r.name}
                className="break-inside-avoid bg-white border border-gray-100 rounded-sm p-6 shadow-sm"
              >
                {/* Quote mark */}
                <div className="text-[#c70000] text-4xl font-serif leading-none mb-3 select-none">&ldquo;</div>
                <p className="text-gray-600 text-sm leading-relaxed mb-5">{r.text}</p>
                <div className="border-t border-gray-100 pt-4 flex items-center justify-between">
                  <p className="font-semibold text-[#1a1a1a] text-sm">{r.name}</p>
                  <Stars />
                </div>
              </div>
            ))}
          </div>

          {/* Google Reviews link */}
          <div className="mt-12 text-center">
            <p className="text-gray-500 text-sm mb-4">Reviews sourced from Google. See our full listing on Google.</p>
            <a
              href="https://www.google.com/search?q=The+Patrick+Group+Oak+and+Stone+Real+Estate"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-gray-200 px-6 py-3 text-sm font-semibold text-[#1a1a1a] hover:border-[#c70000] hover:text-[#c70000] transition-colors rounded-sm"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              View on Google
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 bg-[#1a1a1a] text-white text-center">
        <p className="text-[#c70000] text-xs uppercase tracking-widest font-semibold mb-3">Ready to get started?</p>
        <h2 className="font-serif text-2xl sm:text-3xl font-bold mb-4">
          Let&apos;s Make You Our Next Success Story.
        </h2>
        <p className="text-white/70 text-sm mb-6 max-w-md mx-auto">
          Whether you&apos;re buying, selling, or just starting to think about it — we&apos;d love to talk.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:2487553545"
            className="bg-[#c70000] text-white font-bold px-8 py-4 rounded-sm hover:bg-[#a30000] transition-colors"
          >
            Call 248.755.3545
          </a>
          <Link
            href="/contact"
            className="border border-white/30 text-white font-semibold px-8 py-4 rounded-sm hover:bg-white/10 transition-colors"
          >
            Send Us a Message →
          </Link>
        </div>
      </section>
    </>
  );
}
