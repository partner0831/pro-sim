import * as React from "react";
import styled from "styled-components";
import { useTable } from "react-table";
import Card from "assets/image/dashboard/credit-card.svg";

const StyledTable = styled.table`
  width: 100%;
  border-radius: 16px;
  thead {
    text-align: left;
    th:first-child {
      border-radius: 10px 0 0 0;
    }
    th:last-child {
      border-radius: 0 10px 0 0;
    }
    th {
      padding: 10px 20px 10px 20px;
      font-weight: 500;
      border-collapse: collapse;
      border-bottom: 1px solid #edf2f7;
      background-color: #edf2f7;
      color: #8492a6;
      font-weight: 600px;
      font-size: 10px;
      letter-spacing: 0.06em;
      height: 52px;
    }
  }
  tbody {
    td {
      border-collapse: collapse;
      border-bottom: 1px solid #edf2f7;
      padding: 8px 20px;
    }
  }
`;

type TableProps = {
  columns: any;
  data: any;
};

function Table({ columns, data }: TableProps) {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });
  return (
    <>
      <StyledTable {...getTableProps()}>
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
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  const celldata: any = cell.row;
                  return (
                    <td {...cell.getCellProps()}>
                      <div className="flex flex-row items-center">
                        {cell.column.Header === "Description" ? (
                          <div className="flex flex-row">
                            <img src={Card} />
                            <div className="flex flex-col ml-8 space-y-1">
                              <div className="text-bs font-medium text-ligtext">
                                {celldata.original.description.date}
                              </div>
                              <div className="text-sm  min-w-1/4">
                                {celldata.original.description.name}
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div className="text-sm text-formtext font-normal">
                            {cell.render("Cell")}
                          </div>
                        )}
                      </div>
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </StyledTable>
      <div className="mt-5 text-ligtext text-sm">
        Showing 10 items out of {data.length} results found
      </div>
    </>
  );
}
export default Table;
