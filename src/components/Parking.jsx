
import MaterialTable from 'material-table'
import React, { forwardRef } from "react";
import AddBox from "@material-ui/icons/AddBox";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";
import { useState } from 'react';
import data_management from './data/data_management';
const Parking = () =>{

  const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
  };

  const [tableData, setTableData] = useState(data_management)
  const columns = [
    { title: "Tên", field: "name",   },
    // { title: "Tên", field: "email", filterPlaceholder: "filter" },
    { title: "License Plates", field: "Plates",  grouping: false },
    {
      title: "identity card number", field: "ID",
      // render: (rowData) => <div style={{ background: row,Data.ID >= 18 ? "#008000aa" : "#f90000aa",borderRadius:"4px",paddingLeft:5 }}>{rowData.age >= 18 ? "18+" : "18-"}</div>,
      //  searchable: false, export: false
    },
    { title: "phone number ", field: "Phone"},
    { title: "Location", field: "Location",filterPlaceholder:"filter" ,cellStyle: { paddingRight:"40px"},align: "center" },
    // { title: "Schoo: "currency", currencySetting: { currencyCode: "INR", minimumFractionDigits: 1 },
    // cellStyle: { background:"#009688" }, headerStyle: { color: "#fff" } },
  ]
  return (
    <div className="App">

      

      <MaterialTable columns={columns} data={tableData}
      icons={tableIcons}
      style={{width:"100%",minHeight:"600px"}}
       
        // actions={[
        //   {
        //     icon: () => <GetAppIcon />,
        //     tooltip: "Click me",
        //     onClick: (e, data) => console.log(data),
        //     // isFreeAction:true
        //   }
        // ]}
        onSelectionChange={(selectedRows) => console.log(selectedRows)}
        options={{
          sorting: true, search: true,
          searchFieldAlignment: "right",
          
          searchAutoFocus: true, searchFieldVariant: "standard",
          // filtering: true,
          //  paging: true,
          
          pageSizeOptions: [2, 5, 10, 20, 25, 50, 100], pageSize: 9,



          paginationType: "stepped", showFirstLastPageButtons: false,
          // paginationPosition: "both",
          
          // exportButton: true,
          // exportAllData: true,
          
          exportFileName: "TableData", addRowPosition: "first", actionsColumnIndex: -1, 
          
          
          // selection: true,
          showSelectAllCheckbox: false, showTextRowsSelected: false, selectionProps: rowData => ({
            disabled: rowData.age == null,
            // color:"primary"
          }),
          // grouping: true,
          // columnsButton: true,
          rowStyle: (data, index) => index % 2 === 0 ? { background: "#f5f5f5" } : null,
          // headerStyle: { background: "#f44336",color:"#fff"}
        }}
        title="Customer  Information"
        />
      
    </div>
  )
  }


export default Parking
