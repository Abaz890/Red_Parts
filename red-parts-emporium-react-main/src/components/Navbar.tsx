import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger
} from "@/components/ui/dropdown-menu";
import { Link, useNavigate } from 'react-router-dom';

import { ShoppingCart, User, Heart, Search, ChevronDown } from "lucide-react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("EN");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isHeartFilled, setIsHeartFilled] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate hook

  // Handles the click event for the heart icon (wishlist)
  const handleHeartClick = () => {
    setIsHeartFilled(!isHeartFilled);
    console.log("Heart clicked! isHeartFilled:", !isHeartFilled);
  };

  // Handles the logout action and redirects to the login page
  const handleLogout = () => {
    setIsLoggedIn(false); // Update login state
    navigate('/login'); // Redirect to the login page
  };

  return (
    <div className="w-full">
      {/* Top Bar Section */}
      <div className="bg-red-500 text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          {/* Top Bar Navigation Links */}
          <div className="flex space-x-4">
            <Link to="/about" className="hover:text-gray-200 transition-colors duration-300">About Us</Link>
            <Link to="/contact" className="hover:text-gray-200 transition-colors duration-300">Contacts</Link>
            <Link to="/track-order" className="hover:text-gray-200 transition-colors duration-300">Track Order</Link>
          </div>
          {/* Top Bar Right Section: Info and Language Dropdown */}
          <div className="hidden md:flex items-center space-x-16">
            <span>AUTO PARTS FOR CARS, TRUCKS AND MOTORCYCLES</span>
            <span>Compare: 5</span> {/* Placeholder for dynamic compare count */}
            <span>Currency: USD</span> {/* Placeholder for dynamic currency */}
            {/* Language Dropdown Menu with Flags */}
            <DropdownMenu>
              <DropdownMenuTrigger className="cursor-pointer flex items-center">
                Language: {selectedLanguage} <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white">
                <DropdownMenuItem onClick={() => setSelectedLanguage("EN")}>
                  <img src="https://flagcdn.com/us.svg" alt="USA Flag" className="w-5 h-5 mr-2" /> English
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSelectedLanguage("AR")}>
                  <img src="https://flagcdn.com/ae.svg" alt="UAE Flag" className="w-5 h-5 mr-2" /> Arabic
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSelectedLanguage("JA")}>
                  <img src="https://www.svgrepo.com/show/405490/flag-for-flag-germany.svg" alt="Germany Flag" className="w-5 h-5 mr-2" /> German
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSelectedLanguage("HI")}>
                  <img src="https://flagcdn.com/in.svg" alt="India Flag" className="w-5 h-5 mr-2" /> Hindi
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>

      <div className="bg-white shadow-sm py-4 px-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="text-3xl font-bold">
              <span className="text-red-500">RED</span>
              <span className="text-gray-800">PARTS</span>
            </Link>
          </div>

          <div className="hidden md:flex flex-1 max-w-2xl mx-8">
            <div className="relative w-full">
              <Input
                type="text"
                placeholder="Enter Keyword or Part Number"
                className="w-full pr-12 h-12"
              />
              <Button
                size="icon"
                className="absolute right-0 top-0 h-12 w-12 rounded-l-none bg-red-500 hover:bg-red-600"
              >
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Link to="/wishlist">
              <Heart
                className={`h-6 w-6 cursor-pointer ${isHeartFilled ? 'text-red-500 fill-current' : 'text-gray-600 hover:text-red-500'}`}
                onClick={handleHeartClick}
              />
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-2 cursor-pointer">
                <User className="h-6 w-6 text-gray-600" />
                <div className="hidden md:block">
                  <div className="text-sm text-gray-500">Hello, Log In</div>
                  <div className="text-sm font-semibold">My Account</div>
                </div>
                <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-64 bg-white p-4">
                {isLoggedIn ? (
                  <>
                    <div className="flex items-center space-x-3 mb-4">
                      <img
                        src="https://img.freepik.com/premium-vector/user-profile-person-avatar-identity-login-icon-vector_1277826-995.jpg?w=360"
                        alt="User Avatar"
                        className="h-10 w-10 rounded-full"
                      />
                      <div>
                        <div className="font-semibold">Helena Garcia</div>
                        <div className="text-sm text-gray-500">red-parts@example.com</div>
                      </div>
                    </div>
                    <DropdownMenuSeparator className="my-2 bg-gray-200 h-[1px]" />
                    <Link to="/dashboard"><DropdownMenuItem>Dashboard</DropdownMenuItem></Link>
                    <Link to="/dashboard"><DropdownMenuItem>Garage</DropdownMenuItem></Link>
                    <Link to="/dashboard"><DropdownMenuItem>Edit Profile</DropdownMenuItem></Link>
                    <Link to="/dashboard"><DropdownMenuItem>Order History</DropdownMenuItem></Link>
                    <Link to="/dashboard"><DropdownMenuItem>Addresses</DropdownMenuItem></Link>
                    <DropdownMenuSeparator className="my-2 bg-gray-200 h-[1px]" />
                    <DropdownMenuItem onClick={handleLogout}> {/* Call handleLogout */}
                      Logout
                    </DropdownMenuItem>
                  </>
                ) : (
                  <>
                    {/* User is logged out - Login form */}
                    <h3 className="text-lg font-semibold mb-4 text-center">Log In to Your Account</h3>
                    <Input
                      type="email"
                      placeholder="Email address"
                      className="mb-3 p-2 border rounded w-full"
                    />
                    <div className="relative mb-4">
                      <Input
                        type="password"
                        placeholder="Password"
                        className="p-2 border rounded w-full pr-16"
                      />
                      <Button variant="link" className="absolute right-0 top-0 text-red-500 text-xs h-full px-2">
                        Forgot?
                      </Button>
                    </div>
                    <Button className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded" onClick={() => setIsLoggedIn(true)}>
                      Login
                    </Button>
                    <div className="text-center mt-3 text-sm text-gray-600">
                      <Link to="/register" className="hover:underline">Create An Account</Link>
                    </div>
                  </>
                )}
              </DropdownMenuContent>
            </DropdownMenu>

            <div className="flex items-center space-x-2">
              <Link to="/cart">
                <div className="relative">
                  <ShoppingCart className="h-6 w-6 text-gray-600" />
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    3
                  </span>
                </div>
              </Link>
              <div className="hidden md:block">
                <div className="text-sm text-gray-500">Shopping Cart</div>
                <div className="text-sm font-semibold">$250.00</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Menu (Bottom Bar) */}
      <nav className="bg-gray-50 border-t">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-12">
            {/* Mobile Menu Toggle Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="w-6 h-6 flex flex-col justify-around">
                <span className="block h-0.5 w-6 bg-gray-600"></span>
                <span className="block h-0.5 w-6 bg-gray-600"></span>
                <span className="block h-0.5 w-6 bg-gray-600"></span>
              </div>
            </button>

            <div className="hidden md:flex items-center space-x-6">
              <Link to="/" className="text-gray-700 hover:text-red-500 transition-colors duration-300">Home</Link>

              <DropdownMenu>
                <DropdownMenuTrigger className="text-gray-700 hover:text-red-500 cursor-pointer flex items-center">
                  Shop <ChevronDown className="ml-1 h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 bg-white">
                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger className="flex justify-between items-center w-full">
                      Category
                    </DropdownMenuSubTrigger>
                    <DropdownMenuSubContent className="bg-white">
                      <Link to="/engine"><DropdownMenuItem>Engine Parts</DropdownMenuItem></Link>
                      <Link to="/brake"><DropdownMenuItem>Brake Systems</DropdownMenuItem></Link>
                      <Link to="/interior"><DropdownMenuItem>Interior Parts</DropdownMenuItem></Link>
                      <Link to="/headlights-lighting"><DropdownMenuItem>Headlights & Lighting</DropdownMenuItem></Link>
                    </DropdownMenuSubContent>
                  </DropdownMenuSub>

                  <DropdownMenuSeparator />

                  <Link to="/checkout"><DropdownMenuItem>Checkout</DropdownMenuItem></Link>
                  <Link to="/order-success"><DropdownMenuItem>Order Success</DropdownMenuItem></Link>
                  <Link to="/compare"><DropdownMenuItem>Compare</DropdownMenuItem></Link>
                  <Link to="/track-order"><DropdownMenuItem>Track Order</DropdownMenuItem></Link>
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger className="text-gray-700 hover:text-red-500 cursor-pointer flex items-center">
                  Blog <ChevronDown className="ml-1 h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white">
                  <Link to="/latest-news"><DropdownMenuItem>Latest News</DropdownMenuItem></Link>
                  <Link to="/maintenance-tips"><DropdownMenuItem>Maintenance Tips</DropdownMenuItem></Link>
                  <Link to="/product-reviews"><DropdownMenuItem>Product Reviews</DropdownMenuItem></Link>
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger className="text-gray-700 hover:text-red-500 cursor-pointer flex items-center">
                  Account <ChevronDown className="ml-1 h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white">
                  <Link to="/login"><DropdownMenuItem>Login</DropdownMenuItem></Link>
                  <Link to="/register"><DropdownMenuItem>Register</DropdownMenuItem></Link>
                  <Link to="/wishlist"><DropdownMenuItem>Wishlist</DropdownMenuItem></Link>
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger className="text-gray-700 hover:text-red-500 cursor-pointer flex items-center">
                  Pages <ChevronDown className="ml-1 h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white">
                  <Link to="/about"><DropdownMenuItem>About Us</DropdownMenuItem></Link>
                  <Link to="/contact"><DropdownMenuItem>Contact</DropdownMenuItem></Link>
                  <Link to="/faq"><DropdownMenuItem>FAQ</DropdownMenuItem></Link>
                  <Link to="/terms"><DropdownMenuItem>Terms & Conditions</DropdownMenuItem></Link>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
