import { UserTemplate, Title, TileContainer, Tile } from "./DashboardStyles";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const DashboardPage = () => {
  const navigate = useNavigate();

  const handleTileClick = (tileName) => {
    if (tileName === "User Management") {
      navigate("/users");
    } else if (tileName === "Jobs Directory") {
      navigate("/jobs");
    }
  };

  return (
    <UserTemplate>
      <Box>
        <Title>Pick Module</Title>
        <TileContainer>
          <Tile onClick={() => handleTileClick("User Management")}>
            User Management
          </Tile>
          <Tile onClick={() => handleTileClick("Jobs Directory")}>
            Jobs Directory
          </Tile>
        </TileContainer>
      </Box>
    </UserTemplate>
  );
};
