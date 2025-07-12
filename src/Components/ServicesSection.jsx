import React from 'react'
import { motion } from 'framer-motion';
const ServicesSection = () => {
  const services = [
    {
      img: 'https://listobyte.com/wp-content/uploads/2024/04/Component-3.png',
      title: 'MARKET MAKING',
      desc: 'High-quality responsive web design & development.',
    },
    {
      img: 'https://listobyte.com/wp-content/uploads/2024/04/Component-2-1.png',
      title: 'DEVELOPMENT',
      desc: 're launching a new token or developing a decentralized application (dApp), our experienced developers and engineers are here to provide expert guidance and support at every stage of the development process. '
    },
    {
      img: 'https://listobyte.com/wp-content/uploads/2024/04/Component-3.png',
      title: 'CONSULTING',
      desc: 'we offer expert consulting services tailored to the needs of our clients in the cryptocurrency industry. Our team of experienced professionals provides strategic guidance and actionable insights to help you navigate the complexities of the crypto landscape and achieve your business objectives.',
    },
    {
      img: 'https://listobyte.com/wp-content/uploads/2024/04/Component-1-1.png',
      title: 'CRYPTO MARKETING',
      desc: 'Our dedicated team of marketers specializes in crypto marketing strategies that drive engagement, increase visibility, and enhance the reputation of your project in the market.',
    },
  ];
  return (
  

   <>

 

  
    <section className="w-full px-6 py-12 bg-white">
      {/* Top Content Row */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Left Side Text */}
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Services We Offer</h2>
          <h3 className="text-xl text-blue-600">Tailored for You</h3>
          <p className="text-gray-600">
           We pride ourselves on offering a complete range of services specialized to meet the diverse needs of our clients in the cryptocurrency industry. As a leading token service provider, we specialize in token listing, project consultation, and a variety of marketing and development solutions. Our expertise spans across the entire spectrum of crypto services, ensuring that your project receives the support it needs to succeed. Explore our offerings and unlock the potential for success in your crypto ventures with a trusted token service provider by your side.
          </p>
        </div>
        {/* Right Side Button */}
        <div className="flex justify-center md:justify-end">
          <button className=" border text-white px-6 py-3 rounded-2xl shadow-md hover:bg-blue-700 bg-black transition">
            VIEW ALL SERVICES 
          </button>
        </div>
      </div>

      {/* Animated Service Cards */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 hover:bg-gradient-to-b hover:to-pink-900 from-yellow-600">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 3, x: 0 }}
            transition={{ delay: index * 0.2, duration: 2 }}
            viewport={{ once: true }}
            className="bg-gray-50 p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition duration-300"
          >
            <img
              src={service.img}
              alt={service.title}
              className="mx-auto mb-4 w-20 h-20 object-contain"
            />
            <h4 className="text-lg font-semibold text-gray-800">{service.title}</h4>
            <p className="text-gray-600 mt-2">{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
   
   
   </>
  )
}

export default ServicesSection