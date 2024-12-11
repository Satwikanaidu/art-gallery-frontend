import React from "react";

const UserProfile = () => {
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    orderHistory: [
      { id: 1, artwork: "Artwork 1", date: "2024-12-01" },
      { id: 2, artwork: "Artwork 2", date: "2024-11-20" },
    ],
  };

  return (
    <div>
      <h1>User Profile</h1>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <h2>Order History</h2>
      <ul>
        {user.orderHistory.map((order) => (
          <li key={order.id}>
            {order.artwork} - {order.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserProfile;
