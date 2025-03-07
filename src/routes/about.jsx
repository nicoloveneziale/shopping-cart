import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-16">
      <div className="container mx-auto max-w-4xl p-4 md:p-6">
        <h1 className="text-4xl font-semibold mb-8 text-center">
          About Binary Bazaar
        </h1>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="text-lg text-gray-700">
            Binary Bazaar was founded in 2010 by a group of tech enthusiasts who
            were passionate about making cutting-edge technology accessible to
            everyone. What started as a small online store selling refurbished
            computer parts quickly grew into a thriving marketplace for the
            latest gadgets and electronics.
          </p>
          <p className="text-lg text-gray-700 mt-4">
            Our commitment to quality, affordability, and exceptional customer
            service has been the cornerstone of our success. We believe that
            everyone should have access to the tools and technology they need to
            thrive in the digital age.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-lg text-gray-700">
            At Binary Bazaar, our mission is to provide a curated selection of
            high-quality tech products at competitive prices. We strive to
            create a seamless and enjoyable shopping experience for our
            customers, with fast shipping, hassle-free returns, and dedicated
            support.
          </p>
          <p className="text-lg text-gray-700 mt-4">
            We are constantly exploring new technologies and trends to ensure
            that our customers have access to the latest and greatest products
            on the market.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-4">
              <img
                src="https://via.placeholder.com/150"
                alt="Founder 1"
                className="w-full rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">John Doe</h3>
              <p className="text-gray-600">Founder & CEO</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4">
              <img
                src="https://via.placeholder.com/150"
                alt="Founder 2"
                className="w-full rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Jane Smith</h3>
              <p className="text-gray-600">Head of Operations</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4">
              <img
                src="https://via.placeholder.com/150"
                alt="Founder 3"
                className="w-full rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">David Lee</h3>
              <p className="text-gray-600">Lead Developer</p>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
          <ul className="list-disc list-inside text-lg text-gray-700">
            <li>Customer Satisfaction</li>
            <li>Quality and Affordability</li>
            <li>Innovation and Growth</li>
            <li>Integrity and Trust</li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="text-lg text-gray-700">
            Have any questions or feedback? Feel free to reach out to us at{" "}
            <a
              href="mailto:nicoloveneziale@gmail.com"
              className="text-indigo-600 hover:underline"
            >
              nicoloveneziale@gmail.com
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
