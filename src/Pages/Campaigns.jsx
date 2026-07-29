import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Campaigns() {
  const { t } = useTranslation();
  const [index, setIndex] = useState(0);

  const oldCampaigns = [
    { id: "food-basket", image: "/campaigns/food_basket.webp" },
    { id: "fast-food-kitchens", image: "/campaigns/kitchen.webp" },
    { id: "eid-adha-sacrifices", image: "/campaigns/Ada7i.webp" },
    { id: "ramadan-market", image: "/campaigns/ramadan_market.webp" },
    { id: "football-academy", image: "/campaigns/Football1_1.webp" },
    { id: "swimming-academy", image: "/campaigns/Swim1_1.webp" },
    { id: "chess-academy", image: "/campaigns/Chess1_1.webp" },
    { id: "eid-activities", image: "/campaigns/eid.webp" },
    { id: "sakienh-campaign", image: "/campaigns/sakienh1.webp" },
    { id: "winter-assistance", image: "/campaigns/winter1.webp" },
    // { id: "emergency-response-fires", image: "/campaigns/fires.webp" },
    { id: "monthly-sponsorships", image: "/campaigns/sponsorships.webp" },
    { id: "joy-for-orphan", image: "/campaigns/orphan.webp" },
    { id: "earthquake-response", image: "/campaigns/earthquake.webp" },
    { id: "Latakia-Camp", image: "/campaigns/Camp.webp"}
  ];

  const next = () => {
    setIndex((prev) => (prev + 3 >= oldCampaigns.length ? 0 : prev + 3));
  };

  const prev = () => {
    setIndex((prev) =>
      prev - 3 < 0 ? Math.max(oldCampaigns.length - 3, 0) : prev - 3
    );
  };

  return (
    <main className="bg-white px-4 py-16">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-14 text-center text-4xl font-extrabold text-[#3C3C3C]">
          {t("campaigns.pageTitle")}
        </h1>

        <section>
          <h2 className="mb-8 text-3xl font-bold text-[#3C3C3C]">
            {t("campaigns.old")}
          </h2>

          <div className="relative">
            <button
              onClick={prev}
              className="absolute left-[-25px] top-1/2 z-20 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#155541] shadow-lg ring-1 ring-black/10 transition hover:bg-[#155541] hover:text-white"
              aria-label="Previous"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={next}
              className="absolute right-[-25px] top-1/2 z-20 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#155541] shadow-lg ring-1 ring-black/10 transition hover:bg-[#155541] hover:text-white"
              aria-label="Next"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            <div key={index} className="animate-[fadeSlider_.4s_ease]">
              <div className="grid gap-8 px-10 sm:grid-cols-2 lg:grid-cols-3">
                {oldCampaigns.slice(index, index + 3).map((campaign) => (
                  <article
                    key={campaign.id}
                    className="group flex min-h-[560px] flex-col overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-black/5 transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
                  >
                    <Link to={`/campaigns/${campaign.id}`}>
                      <img
                        src={campaign.image}
                        alt={t(`campaigns.items.${campaign.id}.title`)}
                        className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
                      />
                    </Link>

                    <div className="flex flex-1 flex-col p-6">
                      <h3 className="mb-4 text-2xl font-bold text-[#3C3C3C]">
                        {t(`campaigns.items.${campaign.id}.title`)}
                      </h3>

                      <p className="mb-8 flex-1 leading-8 text-[#5A4B3C]">
                        {t(`campaigns.items.${campaign.id}.description`)}
                      </p>

                      <Link
                        to={`/campaigns/${campaign.id}`}
                        className="mt-auto block rounded-xl border border-[#155541] px-5 py-4 text-center font-bold text-[#155541] transition hover:bg-[#155541] hover:text-white"
                      >
                        {t("campaigns.view")}
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}