import React, { Component } from 'react'
import ReactToExcel from 'react-html-table-to-excel';

class Table extends Component {
  render() {
    return (
      <div>
        <ReactToExcel
          table="table-export"
          filename="exportFromReact"
          sheet="1"
          buttonText="Export"
        />
        
        <table id="table-export">
          <thead>
            <tr>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Department</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>1</td>
              <td>1</td>
            </tr>
            <tr>
              <td>2</td>
              <td>2</td>
              <td>2</td>
            </tr>
            <tr>
              <td>3</td>
              <td>3</td>
              <td>3</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default Table
