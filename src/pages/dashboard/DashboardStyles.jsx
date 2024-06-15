import { Box, Typography, styled } from "@mui/material";

export const Title = styled(Typography)`
  font-size: 1.25rem;
  align-self: center;
  padding: 8px 16px;
  color: #fff;
`;

export const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  font-size: 1rem;
  background-color: #303030;
`;

export const UserTemplate = styled(Container)`
  margin: 8px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
`;

export const TileContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

export const Tile = styled(Box)`
  height: 200px;
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 16px;
  color: #fff;
  background-color: #424242;
`;
