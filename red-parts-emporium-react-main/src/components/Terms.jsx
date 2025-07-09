import React from 'react';
import { Link } from 'react-router-dom'; 

const Terms = () => {
  return (
    <div className="p-6 container mx-auto px-4 py-8 max-w-4xl font-inter">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 text-center leading-tight mb-4">
        Terms And Conditions
      </h1>
      <p className="text-center text-gray-600 text-sm mb-12">
        This Agreement was last modified on 27 May 2018.
      </p>

      {/* Content Section - Enclosed in a new container for page effect */}
      <div className="mt-4 bg-gray-50 p-8 rounded-lg shadow-lg"> {/* Off-white background, padding, rounded corners, shadow */}
        <div className="prose prose-lg mx-auto text-gray-700 leading-relaxed">
          <p className="mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis neque ut purus
            fermentum, ac pretium nibh facilisis. Vivamus venenatis viverra iaculis. Suspendisse tempor
            orci non sapien ullamcorper dapibus. Suspendisse at velit diam. Donec pharetra nec enim
            blandit vulputate. Suspendisse potenti. Pellentesque et molestie ante. In feugiat ante vitae
            ultricies malesuada.
          </p>

          {/* Definitions Section */}
          <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4">
            Definitions
          </h2>
          <ol className="list-decimal list-inside ml-6 mb-6">
            <li className="mb-3">
              <span className="font-semibold">Ristus</span> — Morbi posuere eleifend sollicitudin. Praesent eget ante in enim scelerisque
              scelerisque. Donec mi lorem, molestie a sapien non, laoreet convallis felis. In semper
              felis in lacus venenatis, sit amet commodo leo interdum. Maecenas congue ut leo et
              auctor.
            </li>
            <li className="mb-3">
              <span className="font-semibold">Praesent</span> — Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos. Nulla orci ante, viverra in imperdiet in, pharetra et leo
            </li>
            <li className="mb-3">
              <span className="font-semibold">Vestibulum</span> — Vestibulum arcu tellus, aliquam vel fermentum vestibulum, lacinia
              pulvinar ipsum. In hac habitasse platea dictumst. Integer felis libero, blandit
              scelerisque mauris eget, porta elementum sapien. Mauris luctus arcu non enim lobortis
              gravida.
            </li>
          </ol>

          {/* Ornara dolor Section */}
          <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4">
            Ornare dolor
          </h2>
          <p className="mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis neque ut purus
            fermentum, ac pretium nibh facilisis. Vivamus venenatis viverra iaculis. Suspendisse tempor
            orci non sapien ullamcorper dapibus. Suspendisse at velit diam. Donec pharetra nec enim
            blandit vulputate. Suspendisse potenti. Pellentesque et molestie ante. In feugiat ante vitae
            ultricies malesuada.
          </p>

          <p className="mb-6">
            For information about how to contact us, please visit our{' '}
            <Link to="/contact" className="text-red-500 hover:underline font-semibold">contact page</Link>.
          </p>

          {/* Signature Image */}
          <div className="my-8">
            <img
              src="../signature.jpg" 
              alt="Signature"
              className="h-auto max-w-[150px] mx-auto md:mx-0"
              onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/150x50/cccccc/333333?text=Signature"; }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
