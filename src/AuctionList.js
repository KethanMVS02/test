// client/src/AuctionList.js
import React, { useState, useEffect } from 'react';

const AuctionList = () => {
  const [auctionItems, setAuctionItems] = useState([]);

  useEffect(() => {
    // Fetch data from your server when the component mounts
    const fetchData = async () => {
      const response = await fetch('/api/auction-items');
      const data = await response.json();
      setAuctionItems(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Auction Items</h2>
      <ul>
        {auctionItems.map(item => (
          <li key={item._id}>
            {item.title} - Current Bid: ${item.currentBid}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AuctionList;
