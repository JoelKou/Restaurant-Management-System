import React, { useState } from 'react';
import { TableAssign } from "../componets/TableAssign";
import { TakeOrder } from '../componets/TakeOrder';
import { Link } from "react-router-dom";

//Table function to display and group 


export function TableManagementLink() {
  return (
    <div className="table-management-container">
      <h1 className="page-title">Tables</h1>

      <div className="main-content">
        <div className="tables-wrapper">
          <div className="row">
            <TableAssign tableName="Table 1" />
            <TableAssign tableName="Table 2" />
            <TableAssign tableName="Table 3" />
            <TableAssign tableName="Table 4" />
            <TableAssign tableName="Table 5" />
            <TableAssign tableName="Table 6" />
            <TableAssign tableName="Table 7" />
            <TableAssign tableName="Table 8" />
          </div>

          <div className="divider"></div>

          <div className="row">
            <TableAssign tableName="Table 9" />
            <TableAssign tableName="Table 10" />
            <TableAssign tableName="Table 11" />
            <TableAssign tableName="Table 12" />
            <TableAssign tableName="Table 13" />
            <TableAssign tableName="Table 14" />
            <TableAssign tableName="Table 15" />
          </div>

          <div className="divider"></div>
          <div className="row">
            <TableAssign tableName="Table 16" />
            <TableAssign tableName="Table 17" />
            <TableAssign tableName="Table 18" />
            <TableAssign tableName="Table 19" />
            <TableAssign tableName="Table 20" />
            <TableAssign tableName="Table 21" />
            <TableAssign tableName="Table 22" />
            <TableAssign tableName="Table 23" />
          </div>

          <div className="divider"></div>
          <div className="row">
            <TableAssign tableName="Table 24" />
            <TableAssign tableName="Table 25" />
            <TableAssign tableName="Table 26" />
            <TableAssign tableName="Table 27" />
            <TableAssign tableName="Table 28" />
            <TableAssign tableName="Table 29" />
            <TableAssign tableName="Table 30" />
          </div>
        </div>
        <Link to="/EmployeeScr" className="Employee" >  Go back </Link>
        <div className="take-order-container">
          <TakeOrder />
        </div>
      </div>
    </div>
  );
}
