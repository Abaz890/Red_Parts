import React from 'react';

const Review = () => {
  return (
    <div className="p-4 container mx-auto px-4 py-8 max-w-4xl font-inter">
      {/* "PRODUCT REVIEW" Tag */}
      <div className="text-center mb-6">
        <span className="inline-block bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
          Product Review
        </span>
      </div>

      {/* Blog Post Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 text-center leading-tight mb-4">
        In-Depth Review: The RedParts Pro-Scan 5000 Advanced Car Diagnostic Scanner
      </h1>

      {/* Author and Date */}
      <div className="text-center text-gray-600 text-sm mb-8">
        By <span className="font-semibold">RedParts Tech Team</span> • January 10, 2025 • <span>7 Comments</span>
      </div>

      {/* Main Content Section */}
      <div className="prose prose-lg mx-auto text-gray-700 leading-relaxed">
        <p className="mb-6">
          In today's increasingly complex automotive world, having a reliable diagnostic tool is no longer just for professional mechanics.
          With modern vehicles packed with intricate electronic systems, a good car diagnostic scanner can be an invaluable asset for
          any car owner looking to understand, troubleshoot, and even perform basic maintenance on their vehicle. Today, we're taking
          a deep dive into the RedParts Pro-Scan 5000, an advanced car diagnostic scanner that promises professional-grade capabilities
          in a user-friendly package.
        </p>
        <p className="mb-6">
          The Pro-Scan 5000 is designed to bridge the gap between basic OBD-II code readers and expensive professional shop tools.
          It boasts a wide range of features, from reading and clearing trouble codes to live data streaming, advanced sensor testing,
          and even some bidirectional control functions. Our team put this device through its paces across various vehicle makes and models
          to assess its performance, ease of use, and overall value for both the DIY enthusiast and the budding home mechanic.
        </p>

        {/* Blockquote Section 1 */}
        <div className="bg-gray-100 border-l-4 border-blue-600 p-6 my-8 rounded-lg shadow-sm">
          <p className="italic text-gray-800 text-lg mb-4">
            "The ability to quickly and accurately diagnose a vehicle's issue is paramount. Tools like the Pro-Scan 5000 empower users
            with insights previously exclusive to high-end workshops."
          </p>
          <p className="text-right font-semibold text-gray-700">
            — David Miller, Master Automotive Diagnostician
          </p>
        </div>

        {/* Sub-heading */}
        <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4">
          Unboxing and First Impressions
        </h2>
        <p className="mb-6">
          Upon unboxing, the Pro-Scan 5000 immediately impresses with its robust build quality. The device feels solid in hand,
          with a durable rubberized casing designed to withstand the rigors of a garage environment. The 5-inch color LCD display
          is bright and clear, making it easy to read even in varying light conditions. Navigation is intuitive, primarily
          through a well-laid-out keypad with dedicated function buttons and a directional pad. The included OBD-II cable is
          generously long, providing ample reach, and the device comes with a sturdy carrying case, which is a thoughtful addition
          for protecting your investment. Setup was straightforward: simply plug it into the vehicle's OBD-II port, and it powers
          on instantly, ready for use.
        </p>

        {/* Notice/Call to Action 1 */}
        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-8 rounded-lg text-yellow-800">
          <p className="font-semibold mb-2">Pro Tip:</p>
          <p>Always ensure your vehicle's ignition is in the "ON" position (engine off) when connecting and operating a diagnostic scanner for initial setup and code reading.</p>
        </div>

        {/* Image Section 1 */}
        <div className="my-8 text-center">
          <img
            src="https://media.istockphoto.com/id/484344529/photo/brake-shoe-kit.jpg?s=612x612&w=0&k=20&c=Kuyx9iuymzWmmHAjE73LgSIjlI3Js5Pk886XvVQ13MU="
            alt="Car diagnostic scanner interface"
            className="w-full max-w-xl h-auto rounded-lg shadow-lg mx-auto"
            onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/800x450/cccccc/333333?text=Image+Not+Found"; }}
          />
          <p className="text-sm text-gray-500 mt-2 italic">
            The intuitive interface of a modern diagnostic scanner.
          </p>
        </div>

        {/* Sub-heading */}
        <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4">
          Features and Performance
        </h2>
        <p className="mb-6">
          The true value of the Pro-Scan 5000 lies in its comprehensive feature set. It performs all standard OBD-II functions,
          including reading generic and manufacturer-specific diagnostic trouble codes (DTCs), clearing the Check Engine Light (CEL),
          and viewing freeze frame data. What sets it apart are its advanced capabilities:
        </p>
        <ul className="list-disc list-inside ml-6 mb-6">
          <li>
            **Live Data Stream:** This feature allows you to view real-time sensor data in text or graph format. We found this
            incredibly useful for monitoring parameters like O2 sensor readings, fuel trim, engine RPM, and coolant temperature.
            The graphing function is particularly helpful for identifying intermittent issues or comparing sensor performance.
          </li>
          <li>
            **ABS/SRS Diagnostics:** Unlike many basic scanners, the Pro-Scan 5000 can access and diagnose Anti-lock Braking System (ABS)
            and Supplemental Restraint System (SRS - airbag) codes, which are crucial for safety. This alone can save a trip to the mechanic.
          </li>
          <li>
            **Oil Light Reset & EPB Release:** It supports common service functions such as oil service light reset and Electronic Parking Brake (EPB)
            release, making DIY brake jobs on compatible vehicles much simpler.
          </li>
          <li>
            **Battery Test:** A quick battery health check function provides insights into battery voltage and condition.
          </li>
          <li>
            **I/M Readiness:** Quickly checks if your vehicle is ready for emissions testing, a vital feature for states with strict inspection requirements.
          </li>
        </ul>
        <p className="mb-6">
          In terms of performance, the scanner was consistently fast in connecting to vehicles and retrieving data. The code definitions
          are clear and often provide context, helping users understand the underlying problem. The ability to record and playback live data
          is a standout feature, allowing for detailed analysis without needing to be constantly connected to the vehicle.
        </p>

        {/* Blockquote Section 2 */}
        <div className="bg-gray-100 border-l-4 border-blue-600 p-6 my-8 rounded-lg shadow-sm">
          <p className="italic text-gray-800 text-lg mb-4">
            "The real power of a diagnostic tool isn't just in reading codes, but in interpreting live data to understand the story your car's sensors are telling."
          </p>
          <p className="text-right font-semibold text-gray-700">
            — Emily White, Automotive Software Developer
          </p>
        </div>

        {/* Sub-heading */}
        <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4">
          User Experience and Value
        </h2>
        <p className="mb-6">
          The user interface of the Pro-Scan 5000 is surprisingly intuitive for a device with so many features. The menu structure is logical,
          and the on-screen prompts guide the user through various tests and functions. Even for someone new to diagnostic tools,
          the learning curve is manageable. The device supports multiple languages, adding to its accessibility.
        </p>
        <p className="mb-6">
          Considering its robust feature set, excellent build quality, and user-friendly design, the RedParts Pro-Scan 5000 offers
          exceptional value for its price point. It's an investment that can quickly pay for itself by saving you diagnostic fees
          at the mechanic, allowing you to perform basic service resets, and helping you make informed decisions about repairs.
          While it may not replace every specialized tool a professional shop uses, it certainly comes close for the vast majority
          of common automotive issues.
        </p>

        {/* Notice/Call to Action 2 */}
        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-8 rounded-lg text-yellow-800">
          <p className="font-semibold mb-2">Expert Recommendation:</p>
          <p>For advanced diagnostics or complex repairs, always consult a certified professional. This tool is an excellent aid but not a substitute for expert mechanical knowledge.</p>
        </div>

        {/* Sub-heading */}
        <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4">
          Pros and Cons
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <h3 className="text-xl font-semibold text-green-700 mb-2">Pros:</h3>
            <ul className="list-disc list-inside ml-6 text-gray-700">
              <li>Comprehensive OBD-II functions and advanced system access (ABS/SRS).</li>
              <li>Live data streaming with graphing capabilities.</li>
              <li>Durable build quality and clear, bright display.</li>
              <li>User-friendly interface, suitable for DIYers.</li>
              <li>Supports common service resets (Oil, EPB).</li>
              <li>Excellent value for money.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-red-700 mb-2">Cons:</h3>
            <ul className="list-disc list-inside ml-6 text-gray-700">
              <li>Limited bidirectional controls compared to very high-end professional tools.</li>
              <li>Software updates may require a computer connection.</li>
              <li>Some advanced functions might require a learning curve for beginners.</li>
            </ul>
          </div>
        </div>

        {/* Final Image Section */}
        <div className="my-8 text-center">
          <img
            src="https://img.freepik.com/free-vector/pros-cons-compare-icon-paper-torn-style_1017-50582.jpg"
            alt="Diagnostic scanner connected to car"
            className="w-full max-w-xl h-auto rounded-lg shadow-lg mx-auto"
            onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/800x450/cccccc/333333?text=Image+Not+Found"; }}
          />
          <p className="text-sm text-gray-500 mt-2 italic">
            Connecting the scanner to a vehicle's OBD-II port.
          </p>
        </div>

        <p className="mb-6">
          In conclusion, the RedParts Pro-Scan 5000 Advanced Car Diagnostic Scanner is a highly recommended tool for anyone
          serious about understanding and maintaining their vehicle. Its blend of comprehensive features, user-friendliness,
          and robust construction makes it an outstanding choice for both automotive enthusiasts and those simply looking
          to save on diagnostic costs. It truly empowers car owners to take a more active role in their vehicle's health.
        </p>

        {/* References Section */}
        <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4">
          References
        </h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>"Understanding OBD-II Diagnostic Codes." *Automotive Tech Insights*, 2023.</li>
          <li>"Choosing the Right Car Diagnostic Tool." *Mechanic's Choice Magazine*, Fall 2024.</li>
          <li>"The Evolution of Automotive Electronics." *SAE International Journal of Vehicle Systems*, Vol. 15, No. 1, 2023.</li>
          <li>Product Manual: RedParts Pro-Scan 5000 Advanced Diagnostic Scanner.</li>
        </ul>
      </div>
    </div>
  );
};

export default Review;
