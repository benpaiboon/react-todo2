import React, { Component } from 'react'
import ReactToExcel from 'react-html-table-to-excel';
import axios from 'axios';

class Table extends Component {
  componentDidMount() {
    axios.get('http://localhost:5000/data')
      .then(res => console.log(res))
  }
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
              <th></th>
              <th colSpan="2">Concave Surface (CC)</th>
              <th colSpan="2">Convexe Surface (CX)</th>
              <th colSpan="2">Machine Recipe</th>
            </tr>
            <tr>
              <th>#</th>
              <th>Usability</th>
              <th>Ratio	</th>
              <th>Usability</th>
              <th>Ratio	</th>
              <th>CC</th>
              <th>CX</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Q0</td>
              <td>Bill Gates</td>
              <td>555 77 854</td>
              <td>555 77 855</td>
              <td>555 77 855</td>
              <td>1.7</td>
              <td>16.1</td>
            </tr>
            <tr>
              <td>Z0</td>
              <td>Bill Gates</td>
              <td>555 77 854</td>
              <td>555 77 855</td>
              <td>555 77 855</td>
              <td>4</td>
              <td>121</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default Table
