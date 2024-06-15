import { UserTemplate, Title, TileContainer, Tile } from "./DashboardStyles";
import { Box } from "@mui/material";

export const DashboardPage = () => {
  return (
    <UserTemplate>
      <Box>
        <Title>Pick Module</Title>
        <TileContainer>
          <Tile>User Management</Tile>
          <Tile>Jobs Directory</Tile>
        </TileContainer>
      </Box>
    </UserTemplate>
  );
};
