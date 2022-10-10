import styled from "styled-components";

export const Table = styled.table`
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  margin: 50px auto 30px;
  text-align: center;

  th {
    width: 150px;
    padding: 25px;
    border: 1px solid black;
  }
  td {
    width: 150px;
    padding: 25px;
    border: 1px solid black;
  }
`;
export const TableHead = styled.thead`
  background-color: rgba(20, 204, 214, 0.82);
`;
