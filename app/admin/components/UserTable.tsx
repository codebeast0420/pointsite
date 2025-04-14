"use client";
import React from "react";
import Link from "next/link";

interface User {
  email: string;
  points: number;
}

export function UserTable() {
  // Example data - replace with your actual data source
  const users: User[] = [
			{ email: "user@example.com", points: 1234 },
			{ email: "user@example.com", points: 1234 },
			{ email: "user@example.com", points: 1234 },
			{ email: "user@example.com", points: 1234 },
			{ email: "user@example.com", points: 1234 },
			{ email: "user@example.com", points: 1234 },
			{ email: "user@example.com", points: 1234 },
			{ email: "user@example.com", points: 1234 },
    // ... more users
  ];

  return (
    <div className="ml-5 w-[72%] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] max-md:ml-0 max-md:w-full mt-30 overflow-x-scroll" aria-label="User table Section">
      <table className="w-full border-collapse" aria-label="User table">
        <thead>
          <tr className="border-b border-black" aria-label="User table header">
            <th className="py-4 px-6 text-left font-semibold" aria-label="User table header column">User</th>
            <th className="py-4 px-6 text-right font-semibold" aria-label="User table header column">Points</th>
            <th className="py-4 px-6 text-right font-semibold" aria-label="User table header column">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr 
              key={index} 
              className={`border-b border-gray-100 hover:bg-gray-50`}
              aria-label="User table row"
            >
              <td className={`px-6 text-left ${index === 0 ? "pt-4 pb-2" : "py-2 "}`} aria-label="User table data">
                {user.email}
              </td>
              <td className={`py-2 px-6 text-right ${index === 0 ? "pt-4 pb-2" : "py-2 "}`} aria-label="User table data">
                {user.points.toLocaleString()}
              </td>
              <td className={`py-2 px-6 text-right ${index === 0 ? "pt-4 pb-2" : "py-2 "}`} aria-label="User table data">
                <Link 
                  href={`/admin/`}
                  className="font-medium"
                  aria-label="View user"
                >
                  View
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}