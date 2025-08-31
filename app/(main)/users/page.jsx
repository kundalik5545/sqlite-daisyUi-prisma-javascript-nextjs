import { getAllUsers } from "@/actions/users";
import React from "react";

const UsersPage = async () => {
  const response = await getAllUsers();

  return (
    <div className="">
      <p>{response.firstName}</p>
      <p>{response.lastName}</p>
      <p>{response.email}</p>
      <p>{response.createdAt.toLocaleString()}</p>
      <p>{response.updatedAt.toLocaleString()}</p>

      <div className="commenting">
        {response.comments.map((item) => (
          <p key={item.id}>{item.comments}</p>
        ))}
      </div>
    </div>
  );
};

export default UsersPage;
