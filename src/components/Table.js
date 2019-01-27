import React, { Component } from 'react'
import ReactToExcel from 'react-html-table-to-excel';
import axios from 'axios';

class Table extends Component {
  state = {
    reports: []
  }
  componentDidMount() {
    axios.get('http://localhost:5000/api/report/')
      .then(res => {
        this.setState({
          reports: res.data
        })
      })
  }
  render() {
    const reportList = this.state.reports.length ? (
      this.state.reports.map(report => {
        return (
          <tr key={report._id}>
            <td>{report.sub_name}</td>
            <td>{report.cc_usability}</td>
            <td>{report.cc_ratio}</td>
            <td>{report.cx_usability}</td>
            <td>{report.cx_ratio}</td>
            <td>{report.cc_avg_machine}</td>
            <td>{report.cx_avg_machine}</td>
          </tr>
        )
      })
    ) : (<p className="center">No report yet</p>)
    return (
      <div className="container report">
        <h4 className="center">reports</h4>

        <ReactToExcel
          table="table-export"
          filename="exportFromReact"
          sheet="1"
          buttonText="Export"
        />

        <div className="row">
          <table className="table-export">
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
              {reportList}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default Table
