import { Button, Box, TextField, Typography, styled } from "@mui/material";

export const Title = styled(Typography)`
  font-size: 1.25rem;
  align-self: flex-start;
  padding: 8px 16px;
  color: #fff;

  &.dashboard {
    align-self: center;
  }
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
  & > .container {
    width: 330px;
    margin: 8px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    padding: 16px;
    border: 1px solid #424242;
    border-radius: 6px;
    background-color: #424242;
  }
  ,
  & > .container-dashboard {
    margin: 8px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    padding: 16px;
    background-color: #303030;
  }
`;

export const Btn = styled(Button)`
  background-color: #90caf9;
  color: #222f39;
  &:hover {
    color: #fbfbfb;
  }
`;

export const BtnWithoutHover = styled(Btn)`
  color: #90caf9;
  background-color: transparent;
  padding: 0;
  &:hover {
    background-color: transparent;
  }
`;

export const StyledTextField = styled(TextField)`
  padding: 0;
  margin: 0;
  background-color: #535353;
  min-width: 300px;

  & .MuiInputBase-input,
  & .MuiFormLabel-root,
  & .MuiFormHelperText-root {
    color: #c2c2c2;
  }
`;

export const BoxElement = styled(Box)`
  height: 200px;
  width: 200px;
`;
