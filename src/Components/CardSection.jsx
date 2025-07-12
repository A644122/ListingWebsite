import React from "react";

const CardSection = () => {
  const cards = [
    {
      id: 1,
      title: "TOKEN/COIN LISTING",
      description: "We understand the importance of increasing the visibility and accessibility of your token or coin. That’s why we offer a complete token/coin listing service through our crypto  token marketing agency",
      image: "https://listobyte.com/wp-content/uploads/2024/04/Untitled_design__2_-removebg-preview.png",
    },
    {
      id: 2,
      title: "Marketing Strategy",
      description: "Our market making service, as a best token service provider, offers a strategic approach to ensuring continuous buy and sell orders for your token or coin, fostering healthy trading activity and market stability.",
      image: "https://listobyte.com/wp-content/uploads/2024/04/Untitled_design__3_-removebg-preview.png",
    },
    {
      id: 3,
      title: "PROJECT DEVELOPMENT",
      description: "Our experienced team offers end-to-end support to bring your ideas to life, from conceptualization to implementation, ensuring the success of your token project or decentralized application (dApp). As a best token service provider India and UAE, we are committed to delivering comprehensive solutions tailored to your needs.",
      image: "https://listobyte.com/wp-content/uploads/2024/04/Untitled_design__4_-removebg-preview.png",
    },
    {
      id: 4,
      title: "CRYPTO MARKETING",
      description: "Our dedicated marketing services, specialized for the cryptocurrency industry, are designed to help you, as a leading crypto exchange development company, increase awareness, drive engagement, and achieve your business objectives.",
      image: "https://listobyte.com/wp-content/uploads/2024/04/Untitled_design__5_-removebg-preview.png",
    },
  ];

  return (
    <section className="w-full px-4 py-10 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {cards.map((card) => (
          <div
            key={card.id}
            className="border rounded-2xl p-6 text-center shadow-md bg-gradient-to-b from-blue-100 to-white"
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-20 h-20 mx-auto mb-4 object-cover rounded-full"
            />
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              {card.title}
            </h2>
            <p className="text-gray-600 text-sm">{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CardSection;
