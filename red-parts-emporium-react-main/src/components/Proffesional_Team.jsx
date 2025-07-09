import React from 'react';

export const ProfessionalTeam = () => {
  const teamMembers = [
    {
      name: "Michael Russo",
      title: "Chief Executive Officer",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTXVNBrOtjOIlFHVYv1RAZNb9GwtTaE5lD_g&s",
    },
    {
      name: "Samantha Smith",
      title: "Account Manager",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa1jF7upqqqySaeaxt6rxnIb-T-azRZEuzLQ&s",
    },
    {
      name: "Anthony Harris",
      title: "Finance Director",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      name: "Katherine Miller",
      title: "Marketing Officer",
      image: "https://static.vecteezy.com/system/resources/previews/030/663/622/large_2x/business-woman-high-quality-4k-ultra-hd-hdr-free-photo.jpg",
    },
    {
      name: "Boris Gilmore",
      title: "Engineer",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw_oZqAWEfaimjhSlgtYSf9udBNkujLKtZEg&s",
    },
  ];

  return (
    <section className="container mx-auto px-4 py-12 md:py-20 font-inter bg-white">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Professional Team
        </h2>
        <p className="text-lg text-gray-700">Meet our professional team.</p>
      </div>

      <div className="flex flex-wrap justify-center gap-8 mt-4">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="w-[200px] bg-white rounded-lg shadow-md overflow-hidden text-center"
          >
            <div className="w-full h-48 bg-gray-200 flex items-center justify-center overflow-hidden">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src =
                    'https://placehold.co/200x200/cccccc/000000?text=Image+Error';
                }}
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                {member.name}
              </h3>
              <p className="text-sm text-gray-600">{member.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
