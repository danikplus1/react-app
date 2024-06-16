import { styled } from "@mui/system";
import { DataGrid } from "@mui/x-data-grid";

export const DataGridStyled = styled(DataGrid)(({ theme }) => ({
  "& .MuiDataGrid-root, & .MuiDataGrid-columnHeaders, & .MuiDataGrid-columnHeader, & .MuiDataGrid-cell, & .MuiDataGrid-row, & .MuiDataGrid-footerContainer, & .MuiDataGrid-toolbarContainer, & .MuiDataGrid-overlay, & .MuiDataGrid-columnHeaderDraggableContainer, & .MuiDataGrid-columnHeaderTitleContainer, & .MuiDataGrid-filler, & .MuiDataGrid-scrollbarFiller, & .MuiDataGrid-scrollbarFiller--header":
    {
      backgroundColor: "#424242",
      color: "#e8e8e8",
    },
  "& .MuiDataGrid-checkboxInput, & .MuiTablePagination-root, & .MuiDataGrid-columnSeparator, & .MuiDataGrid-iconSeparator, & .MuiDataGrid-columnHeaderTitle, & .MuiDataGrid-menuIcon, & .MuiDataGrid-iconButtonContainer, & .MuiSvgIcon-root, & .MuiButtonBase-root, & .MuiIconButton-root, & .MuiTouchRipple-root":
    {
      color: "#e8e8e8",
    },
}));
