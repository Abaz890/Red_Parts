
export const LatestNews = () => {
  const newsArticles = [
    {
      id: 1,
      title: "Best Practices for Vehicle Maintenance in Winter",
      excerpt: "Learn essential tips to keep your vehicle running smoothly during the cold season. From battery care to tire maintenance...",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      author: "Jessica Moore",
      date: "October 19, 2024",
      category: "Special Offers"
    },
    {
      id: 2,
      title: "How to Choose the Right Engine Oil for Your Car",
      excerpt: "Understanding the different types of engine oils and their applications. Synthetic vs conventional oils explained...",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      author: "Jessica Moore",
      date: "September 5, 2024",
      category: "Latest News"
    },
    {
      id: 3,
      title: "Performance Upgrades That Actually Make a Difference",
      excerpt: "Discover which aftermarket parts provide real performance gains and which ones are just for show. Expert recommendations...",
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      author: "Jessica Moore",
      date: "August 12, 2024",
      category: "New Arrivals"
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Special Offers':
        return 'bg-red-500 text-white';
      case 'Latest News':
        return 'bg-blue-500 text-white';
      case 'New Arrivals':
        return 'bg-green-500 text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Latest News</h2>
          <div className="flex space-x-2">
            <button className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded">Special Offers</button>
            <button className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded">New Arrivals</button>
            <button className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded">Reviews</button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsArticles.map((article) => (
            <div key={article.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="relative">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <span className={`absolute top-4 left-4 px-3 py-1 text-sm font-semibold rounded ${getCategoryColor(article.category)}`}>
                  {article.category}
                </span>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 hover:text-red-500 cursor-pointer">
                  {article.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                <div className="text-sm text-gray-500">
                  By {article.author} on {article.date}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
