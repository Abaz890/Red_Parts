import React from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const TrackOrder = () => {
  return (
    <div className="track-order-wrapper min-h-[600px] bg-gray-50 flex flex-col p-4">

      <div className="track-order-card bg-white rounded-lg shadow-md w-[120px] h-[500px] p-6 border border-gray-200 mx-auto mt-8 mb-8">

        <h2 className="track-order-title text-xl font-semibold text-gray-900 text-center mb-4">Track Order</h2>
        <p className="track-order-description text-sm text-gray-600 text-center mb-6">
          Enter the order ID and email address that was used to create the order, and then click the track button.
        </p>

        <form className="track-order-form space-y-4">
          <div className="track-order-input-group">
            <label htmlFor="orderId" className="track-order-label block text-sm font-medium text-gray-700 mb-1">
              Order ID
            </label>
            <Input
              id="orderId"
              placeholder="Order ID"
              className="track-order-input w-full p-2 border border-gray-300 rounded-md bg-gray-100 text-gray-500"
            />
          </div>

          <div className="track-order-input-group">
            <label htmlFor="email" className="track-order-label block text-sm font-medium text-gray-700 mb-1">
              Email address
            </label>
            <Input
              id="email"
              placeholder="Email address"
              className="track-order-input w-full p-2 border border-gray-300 rounded-md bg-gray-100 text-gray-500"
            />
          </div>

          <Button
            type="submit"
            className="track-order-button w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-md text-sm font-medium"
          >
            Track
          </Button>
        </form>
      </div>
    </div>
  );
};