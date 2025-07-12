import React from "react";

const PortfolioSection = () => {
  return (
    <>
      <section className="w-full px-4 py-10 md:px-12 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">
          {/* First Main Div */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Our Latest Projects.
            </h2>
            <p className="text-gray-600">
            We are thrilled to unveil our latest project, a project that represents our ongoing commitment to innovation and excellence in the cryptocurrency space. As a leading crypto token service provider, join us as we take you on a journey through our newest creation, showcasing the dedication and expertise that went into bringing this project to life.
            </p>
          </div>

          {/* Second Main Div */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            {/* Inner Div 1: 5 Headings */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <h3 className="text-lg font-semibold text-gray-700">
                ALL 
              </h3>
              <h3 className="text-lg font-semibold text-gray-700">
                LISTING 
              </h3>
              <h3 className="text-lg font-semibold text-gray-700">
                DEVELOPMENT 
              </h3>
              <h3 className="text-lg font-semibold text-gray-700">
                MARKET MAKING 
              </h3>
              <h3 className="text-lg font-semibold text-gray-700">
                CRTPTO MARKETING 
              </h3>
            </div>
<div className="max-w-100 max-h-100 bg-pink-700 border"></div>
            {/* Inner Div 2: Images */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {[
                "https://listobyte.com/wp-content/uploads/2024/04/LOGS-LISTO.png",
                "https://listobyte.com/wp-content/uploads/2024/04/floki-inu-floki-logo.png",
                "https://listobyte.com/wp-content/uploads/2024/04/LOGS-LISTO1.png",
                "https://listobyte.com/wp-content/uploads/2024/04/2926751.png",
                "https://listobyte.com/wp-content/uploads/2024/04/Untitled-2.png",
                "https://listobyte.com/wp-content/uploads/2024/04/photo_6145485751580737168_y.jpg",
                "https://listobyte.com/wp-content/uploads/2024/04/Untitled-1.png",
                "https://listobyte.com/wp-content/uploads/2024/04/LOGS-LISTfrO.png",
                "https://listobyte.com/wp-content/uploads/2024/04/photo_6145485751580737169_y.jpg",
                "https://listobyte.com/wp-content/uploads/2024/05/Bsc-logo.png",
              ].map((img, index) => (
                <img
                key={index}
                src={img}
                alt={`Portfolio ${index + 1}`}
                className="w-full h-32 object-cover rounded-xl shadow-md"
                />
                
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PortfolioSection;
