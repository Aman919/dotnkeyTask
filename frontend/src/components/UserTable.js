import React from "react";
import { useTable, usePagination } from "react-table";

const UserTable = ({ data }) => {
  const columns = React.useMemo(
    () => [
      { Header: "ID", accessor: "id" },
      { Header: "Full Name", accessor: "fullName" },
      { Header: "Email", accessor: "email" },
      { Header: "Country Name", accessor: "countryName" },
      { Header: "State Name", accessor: "stateName" },
      { Header: "City Name", accessor: "cityName" },
      { Header: "Languages", accessor: "languages" },
      { Header: "Active", accessor: "isActive" },
      { Header: "CreatedDate", accessor: "createdDate" },
      { Header: "Action", accessor: "action" },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 10 },
    },
    usePagination
  );

  return (
    <div>
      <table {...getTableProps()} className="user-table">
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            return (
              <tr>
                {row.cells.map((cell) => {
                  if (cell.column.id === "action") {
                    return (
                      <td {...cell.getCellProps()}>
                        <button>Edit</button>
                        <button>Delete</button>
                      </td>
                    );
                  } else {
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    );
                  }
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="pagination">
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          Previous
        </button>{" "}
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          Next
        </button>{" "}
      </div>
    </div>
  );
};

export default UserTable;
