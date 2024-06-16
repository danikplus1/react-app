import { useState, useEffect } from "react";
import { DataGridStyled } from "./UserPageStyles";
import Avatar from "@mui/material/Avatar";

const URL = "https://jsonplaceholder.typicode.com/users";

export const UserPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "avatar",
      headerName: "Avatar",
      width: 100,
      renderCell: (params) => {
        const firstNameInitial = params.row.firstName
          ? params.row.firstName[0]
          : "";
        const lastNameInitial = params.row.lastName
          ? params.row.lastName[0]
          : "";
        return (
          <Avatar>
            {firstNameInitial}
            {lastNameInitial}
          </Avatar>
        );
      },
    },
    { field: "firstName", headerName: "First name", width: 130 },
    { field: "lastName", headerName: "Last name", width: 130 },
    { field: "email", headerName: "Email", width: 250 },
  ];

  const rows = users.map((user) => {
    const [firstName, ...lastNameArray] = user.name ? user.name.split(" ") : [];
    const lastName = lastNameArray.join(" ");

    return {
      id: user.id,
      avatar: "",
      firstName: firstName || "",
      lastName: lastName || "",
      email: user.email || "",
    };
  });

  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        backgroundColor: "#424242",
        color: "#e8e8e8",
      }}
    >
      <DataGridStyled
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        components={{
          Cell: ({ row, field }) => {
            if (field === "avatar") {
              const name = row.name || "";
              return <Avatar>{name ? name[0] : ""}</Avatar>;
            }
            return <div>{row[field]}</div>;
          },
        }}
      />
    </div>
  );
};
