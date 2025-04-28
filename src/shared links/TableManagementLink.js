import { TableAssign } from "../componets/TableAssign";
import { Link } from "react-router-dom";

export function TableManagementLink() {

  return (

    <div>
      <h1 className="page-title">Tables</h1>
      <Link to="/TableManagementLinkSection2" className="TableManagementLinkSection2"> Go to Table 16-30 </Link> 
      <div className="grid-wrapper">
        <TableAssign tableName="Table 1" />
        <TableAssign tableName="Table 2" />
        <TableAssign tableName="Table 3" />
        <TableAssign tableName="Table 4" />
        <TableAssign tableName="Table 5" />
        <TableAssign tableName="Table 6" />
        <TableAssign tableName="Table 7" />
        <TableAssign tableName="Table 8" />
        <TableAssign tableName="Table 9" />
        <TableAssign tableName="Table 10" />
        <TableAssign tableName="Table 11" />
        <TableAssign tableName="Table 12" />
        <TableAssign tableName="Table 13" />
        <TableAssign tableName="Table 14" />
        <TableAssign tableName="Table 15" />
      </div>
    </div>
  );
}
