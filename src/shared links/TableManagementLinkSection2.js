import { TableAssign } from "../componets/TableAssign";
import { Link } from "react-router-dom";

export function TableManagementLinkSection2() {

  return (

    <div>
      <h1 className="page-title">Tables</h1>
      <Link to="/TableManagementLink" className="TableManagementLink"> Table 1-15 </Link>
      <div className="grid-wrapper">
        <TableAssign tableName="Table 16" />
        <TableAssign tableName="Table 17" />
        <TableAssign tableName="Table 18" />
        <TableAssign tableName="Table 19" />
        <TableAssign tableName="Table 20" />
        <TableAssign tableName="Table 21" />
        <TableAssign tableName="Table 22" />
        <TableAssign tableName="Table 23" />
        <TableAssign tableName="Table 24" />
        <TableAssign tableName="Table 25" />
        <TableAssign tableName="Table 26" />
        <TableAssign tableName="Table 27" />
        <TableAssign tableName="Table 28" />
        <TableAssign tableName="Table 29" />
        <TableAssign tableName="Table 30" />
      </div>
    </div>
  );
}
