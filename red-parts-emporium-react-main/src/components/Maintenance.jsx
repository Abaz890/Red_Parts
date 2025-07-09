import React from 'react';

const Maintenance = () => {
  return (
    <div className="p-4 container mx-auto px-4 py-8 max-w-4xl font-inter">
      <div className="text-center mb-6">
        <span className="inline-block bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
          Maintenance Tips
        </span>
      </div>

      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 text-center leading-tight mb-4">
        The Ultimate Guide to Vehicle Maintenance: Keeping Your Car Running Smoothly
      </h1>

      <div className="text-center text-gray-600 text-sm mb-8">
        By <span className="font-semibold">RedParts Maintenance Team</span> • December 15, 2024 • <span>5 Comments</span>
      </div>

      <div className="prose prose-lg mx-auto text-gray-700 leading-relaxed">
        <p className="mb-6">
          Owning a vehicle is a significant investment, and like any valuable asset, it requires regular care and attention to ensure its longevity and optimal performance.
          Vehicle maintenance is not just about fixing problems when they arise; it's about proactive measures that prevent issues, enhance safety, improve fuel efficiency,
          and ultimately save you money on costly repairs down the line. Neglecting routine maintenance can lead to a host of problems, from minor inconveniences to major mechanical failures.
        </p>
        <p className="mb-6">
          A well-maintained car is a reliable car. Regular checks and services ensure that all components are functioning correctly, from the engine and transmission to the
          brakes and tires. This holistic approach to vehicle care helps in early detection of wear and tear, allowing for timely replacements or repairs before they escalate.
          Moreover, a properly maintained vehicle retains a higher resale value, making it a wise financial decision in the long run.
        </p>

        <div className="bg-gray-100 border-l-4 border-red-500 p-6 my-8 rounded-lg shadow-sm">
          <p className="italic text-gray-800 text-lg mb-4">
            "Preventative maintenance is the cornerstone of vehicle longevity. It's far more economical to prevent a problem than to repair one."
          </p>
          <p className="text-right font-semibold text-gray-700">
            — Sarah Jenkins, Certified Automotive Technician
          </p>
        </div>

        <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4">
          Key Areas of Routine Vehicle Maintenance
        </h2>
        <p className="mb-6">
          Understanding the critical areas of your vehicle that require regular attention is the first step towards effective maintenance.
          Here are the primary components and systems you should focus on:
        </p>
        <ul className="list-disc list-inside ml-6 mb-6">
          <li>
            **Engine Oil and Filter:** The lifeblood of your engine, oil lubricates moving parts, reduces friction, and helps dissipate heat.
            Over time, oil breaks down and collects contaminants. Regular oil changes, along with filter replacement, are crucial for engine health.
            Follow your manufacturer's recommended intervals, typically every 5,000 to 10,000 miles, depending on oil type (conventional, synthetic blend, full synthetic) and driving conditions.
          </li>
          <li>
            **Tires:** Your tires are the only contact point between your vehicle and the road, making their condition paramount for safety and performance.
            * **Tire Pressure:** Check monthly using a reliable gauge. Incorrect pressure leads to uneven wear, reduced fuel economy, and compromised handling.
            * **Tire Rotation:** Rotate tires every 5,000 to 7,500 miles to ensure even wear across all four tires, extending their lifespan.
            * **Tread Depth:** Regularly inspect tread for wear. The "penny test" (inserting a penny head-first into a tread groove) is a quick indicator: if you can see Lincoln's head, it's time for new tires.
            * **Alignment and Balancing:** Ensure wheels are properly aligned and balanced to prevent uneven tire wear and steering issues.
          </li>
          <li>
            **Brake System:** Essential for safety, your brakes must be in top condition.
            * **Brake Pads and Rotors:** Listen for squealing or grinding noises, and feel for vibrations when braking. These are signs of worn pads or warped rotors.
            * **Brake Fluid:** Check fluid levels and condition regularly. Brake fluid is hygroscopic (absorbs moisture), which can reduce its effectiveness over time.
          </li>
          <li>
            **Fluids (Other):** Beyond engine oil and brake fluid, several other fluids are vital for your vehicle's operation.
            * **Coolant:** Prevents engine overheating and freezing. Check levels and condition, and flush/replace as per manufacturer guidelines.
            * **Transmission Fluid:** Ensures smooth gear changes. Check levels and condition; some modern transmissions have "lifetime" fluid, but many still require periodic changes.
            * **Power Steering Fluid:** For hydraulic power steering systems. Check levels and top up if low.
            * **Windshield Washer Fluid:** Simple but important for clear visibility.
          </li>
          <li>
            **Belts and Hoses:** These rubber components can degrade over time due to heat and wear.
            * **Serpentine Belt:** Drives accessories like the alternator, power steering pump, and A/C compressor. Inspect for cracks, fraying, or glazing.
            * **Timing Belt (if applicable):** A critical component that synchronizes engine camshaft and crankshaft rotation. Failure can cause catastrophic engine damage. Follow strict replacement intervals.
            * **Hoses:** Check radiator hoses, heater hoses, and vacuum hoses for cracks, leaks, or swelling.
          </li>
          <li>
            **Battery:** The heart of your electrical system.
            * **Terminals:** Keep clean and free of corrosion.
            * **Charge:** Ensure the battery holds a charge, especially in extreme temperatures. Test its health periodically.
          </li>
          <li>
            **Lights and Wipers:** Simple but crucial for visibility and safety.
            * **All Lights:** Regularly check headlights, taillights, brake lights, turn signals, and interior lights.
            * **Wiper Blades:** Replace every 6-12 months or when they start streaking or chattering.
          </li>
        </ul>
        <p className="mb-6">
          Any deviation from normal operation, or signs of significant wear or leaks, warrants further investigation by a qualified mechanic. Early detection of these issues can prevent minor problems from escalating into major engine repairs.
        </p>

        {/* Notice/Call to Action 1 */}
        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-8 rounded-lg text-yellow-800">
          <p className="font-semibold mb-2">Pro Tip for DIY Enthusiasts:</p>
          <p>Before attempting any maintenance, always consult your vehicle's owner's manual. It contains specific information about fluid types, capacities, torque specifications, and maintenance schedules unique to your car.</p>
        </div>

        {/* Image Section */}
        <div className="my-8 text-center">
          <img
            src="https://images.pexels.com/photos/2760241/pexels-photo-2760241.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="Car maintenance checklist"
            className="w-full max-w-xl h-auto rounded-lg shadow-lg mx-auto"
            onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/800x450/cccccc/333333?text=Image+Not+Found"; }}
          />
          <p className="text-sm text-gray-500 mt-2 italic">
            A visual guide to common vehicle maintenance checks.
          </p>
        </div>

        {/* Added more content after the image */}
        <p className="mb-6">
          Beyond these routine checks, it's also important to pay attention to your vehicle's warning lights on the dashboard.
          These indicators are designed to alert you to potential issues before they become critical. For example, the "Check Engine" light,
          while sometimes indicating a minor issue like a loose gas cap, can also signal more serious problems with the engine,
          emissions system, or transmission. Ignoring these warnings can lead to costly damage and compromise your safety.
        </p>
        <p className="mb-6">
          The environment in which you drive also impacts your maintenance schedule. Vehicles operating in extreme temperatures,
          dusty conditions, or those frequently used for short trips (which don't allow the engine to reach optimal operating temperature)
          may require more frequent servicing than those driven under normal conditions. Heavy towing or frequent stop-and-go city driving
          also puts additional strain on components, necessitating closer attention to maintenance intervals.
        </p>

        {/* Blockquote Section 2 */}
        <div className="bg-gray-100 border-l-4 border-red-500 p-6 my-8 rounded-lg shadow-sm">
          <p className="italic text-gray-800 text-lg mb-4">
            "A car is a complex machine, and every part plays a role. Regular maintenance is like a symphony conductor, ensuring
            all instruments play in harmony for a smooth and efficient performance."
          </p>
          <p className="text-right font-semibold text-gray-700">
            — Professor Alex Chen, Automotive Engineering Lecturer
          </p>
        </div>

        <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4">
          The Environmental and Economic Benefits of Good Maintenance
        </h2>
        <p className="mb-6">
          Proper vehicle maintenance extends beyond just personal benefits; it has a significant positive impact on the environment.
          A well-tuned engine with clean filters and correctly inflated tires operates more efficiently, consuming less fuel and
          producing fewer harmful emissions. For instance, a clogged air filter can reduce fuel efficiency by up to 10%, while
          underinflated tires can decrease it by 3% for every 1 PSI drop below the recommended pressure. These seemingly small
          factors add up, contributing to a larger carbon footprint. By adhering to a strict maintenance schedule, you're not
          only saving money on gas but also doing your part to reduce air pollution.
        </p>
        <p className="mb-6">
          Economically, preventative maintenance is a clear winner. While there's an upfront cost for services like oil changes,
          tire rotations, and fluid flushes, these expenses are minimal compared to the cost of major repairs that can result
          from neglect. For example, replacing a timing belt is a significant expense, but it pales in comparison to the cost
          of repairing an engine damaged by a broken timing belt. Furthermore, a car with a documented service history is more
          attractive to potential buyers, commanding a higher resale value.
        </p>

        {/* Notice/Call to Action 2 */}
        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-8 rounded-lg text-yellow-800">
          <p className="font-semibold mb-2">Expert Insight:</p>
          <p>Keep a detailed record of all your vehicle's maintenance, whether DIY or professional. This service history is invaluable for troubleshooting and significantly boosts resale value.</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4">
          The Future of Vehicle Maintenance
        </h2>
        <p className="mb-6">
          As automotive technology continues to advance, so too will vehicle maintenance. Modern cars are equipped with sophisticated
          onboard diagnostic (OBD-II) systems that monitor various sensors and components, providing real-time data and alerting
          drivers to potential issues. The rise of connected car technology and telematics means that future maintenance could
          become even more predictive, with vehicles autonomously scheduling their own service appointments based on real-time
          wear and performance data.
        </p>
        <p className="mb-6">
          Electric vehicles (EVs) also present a different maintenance landscape, with no engine oil, sparkplugs, or traditional
          transmissions. However, EVs still require maintenance for their battery systems, electric motors, brakes (though less frequently due to regenerative braking),
          tires, and cooling systems. The focus will shift from combustion-related components to electrical systems and software updates.
          Regardless of the powertrain, regular, informed maintenance will remain critical for ensuring vehicle safety, reliability, and longevity.
        </p>

        {/* Final Image Section */}
        <div className="my-8 text-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7wC-GLjMO2jellXIEnIEQgLJ2RoRVd5G6-g&s"
            alt="Modern car being serviced"
            className="w-full max-w-xl h-auto rounded-lg shadow-lg mx-auto"
            onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/800x450/cccccc/333333?text=Image+Not+Found"; }}
          />
          <p className="text-sm text-gray-500 mt-2 italic">
            Advanced diagnostics are becoming integral to modern vehicle maintenance.
          </p>
        </div>

        {/* References Section */}
        <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4">
          References
        </h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>"The Importance of Regular Car Maintenance." *Automotive Service Association*, 2023.</li>
          <li>"Your Car's Fluids: A Complete Guide." *Consumer Reports Automotive*, 2024.</li>
          <li>"Tire Care and Safety." *National Highway Traffic Safety Administration (NHTSA)*, 2023.</li>
          <li>"Understanding Your Vehicle's Warning Lights." *AAA Auto Club*, 2024.</li>
          <li>"The Environmental Benefits of Vehicle Maintenance." *Environmental Protection Agency (EPA)*, 2023.</li>
          <li>"The Evolution of Automotive Diagnostics." *SAE International Journal of Engines*, Vol. 16, No. 3, 2024.</li>
          <li>Vehicle Owner's Manuals.</li>
        </ul>
      </div>
    </div>
  );
};

export default Maintenance;
