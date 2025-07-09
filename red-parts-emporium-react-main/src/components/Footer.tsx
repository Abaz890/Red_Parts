// components/Footer.jsx
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Youtube, Instagram } from "lucide-react";
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact Us */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact Us</h3>
            <p className="text-gray-300 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer in faucibus lorem.
            </p>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-400 mb-1">PHONE NUMBER</h4>
                <p className="text-white">+1 (800) 060-07-30</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-400 mb-1">EMAIL ADDRESS</h4>
                <p className="text-white">red-parts@example.com</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-400 mb-1">OUR LOCATION</h4>
                <p className="text-white">715 Fake Street, New York 10021 USA</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-400 mb-1">WORKING HOURS</h4>
                <p className="text-white">Mon-Sat 10:00pm - 7:00pm</p>
              </div>
            </div>
          </div>

          {/* Information */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Information</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-300 hover:text-white">About Us</Link></li> {/* About Us Link */}
              <li><Link to="/delivery-info" className="text-gray-300 hover:text-white">Delivery Information</Link></li> {/* Assuming a delivery info page */}
              <li><Link to="/privacy-policy" className="text-gray-300 hover:text-white">Privacy Policy</Link></li> {/* Assuming a privacy policy page */}
              <li><Link to="/brands" className="text-gray-300 hover:text-white">Brands</Link></li> {/* Assuming a brands page */}
              <li><Link to="/contact" className="text-gray-300 hover:text-white">Contact Us</Link></li> {/* Assuming a contact us page */}
              <li><Link to="/returns" className="text-gray-300 hover:text-white">Returns</Link></li> {/* Assuming a returns page */}
              <li><Link to="/sitemap" className="text-gray-300 hover:text-white">Site Map</Link></li> {/* Assuming a sitemap page */}
            </ul>
          </div>

          {/* My Account */}
          <div>
            <h3 className="text-xl font-semibold mb-6">My Account</h3>
            <ul className="space-y-3">
              <li><Link to="/store-location" className="text-gray-300 hover:text-white">Store Location</Link></li> {/* Assuming a store location page */}
              <li><Link to="/order-history" className="text-gray-300 hover:text-white">Order History</Link></li>
              <li><Link to="/wishlist" className="text-gray-300 hover:text-white">Wish List</Link></li>
              <li><Link to="/newsletter" className="text-gray-300 hover:text-white">Newsletter</Link></li> {/* Assuming a newsletter page */}
              <li><Link to="/specials" className="text-gray-300 hover:text-white">Specials</Link></li> {/* Assuming a specials page */}
              <li><Link to="/gift-certificates" className="text-gray-300 hover:text-white">Gift Certificates</Link></li> {/* Assuming a gift certificates page */}
              <li><Link to="/affiliate" className="text-gray-300 hover:text-white">Affiliate</Link></li> {/* Assuming an affiliate page */}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Newsletter</h3>
            <p className="text-gray-300 mb-6">
              Enter your email address below to subscribe to our newsletter and keep up to date with discounts and special offers.
            </p>
            
            <div className="flex mb-6">
              <Input 
                type="email" 
                placeholder="Email Address..." 
                className="rounded-r-none bg-gray-800 border-gray-700 text-white"
              />
              <Button className="bg-red-500 hover:bg-red-600 rounded-l-none">
                Subscribe
              </Button>
            </div>
            
            <div className="mb-6">
              <h4 className="font-semibold mb-4">Follow us on social networks</h4>
              <div className="flex space-x-3">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-700">
                  <Facebook className="w-5 h-5" />
                </div>
                {/* Twitter icon, assuming you want to keep it */}
                <div className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-500">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </div>
                <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-red-700">
                  <Youtube className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-pink-700">
                  <Instagram className="w-5 h-5" />
                </div>
                {/* Link icon, assuming you want to keep it */}
                <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-orange-600">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Footer */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 mb-4 md:mb-0">
            Powered by HTML — Designed by <span className="text-white">Abdul Rehman</span>
          </div>
          
          <div className="flex space-x-2">
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg" alt="Visa" className="h-8 px-2 rounded" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-8 bg-white px-2 rounded" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Mastercard_2019_logo.svg/1200px-Mastercard_2019_logo.svg.png" alt="Mastercard" className="h-8 px-2 rounded" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkZJVHk-ilzNKw6XEU7pusTogLLyy84sViAw&s" alt="ASM" className="h-8 px-2 rounded" />
          </div>
        </div>
      </div>
    </footer>
  );
};
