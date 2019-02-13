import React, { Component } from 'react'
import ReactToExcel from 'react-html-table-to-excel';
import axios from 'axios';

class FcTable extends Component {
  state = {
    macreport: [],
    fcreport: []
  }
  componentDidMount() {
    axios.get('http://localhost:5000/api/report/machine')
      .then(res => {
        this.setState({
          macreport: res.data
        })
      })
    axios.get('http://localhost:5000/api/report/fc')
      .then(res => {
        this.setState({
          fcreport: res.data
        })
      })
  }
  render() {
    const macList = this.state.macreport.map(mac => {
      return (
        <tr key={mac._id}>
          <td>{mac.subname}</td>
          <td>{mac.CC_use}</td>
          <td>{mac.CC_ratio}</td>
          <td>{mac.CX_use}</td>
          <td>{mac.CX_ratio}</td>
          <td>{mac.CC_mac}</td>
          <td>{mac.CX_mac}</td>
        </tr>
      )
    });

    const fcList = this.state.fcreport.length ? (
      this.state.fcreport.map(fc => {

        // Check color before render
        let cc_color = '';
        let cx_color = '';
        let cc_pc = '';
        let cx_pc = '';
        let lim = 15;

        // Check percent
        if (typeof (fc.CC_percent) === "number")
          cc_pc = '%';
        else if (typeof (fc.CC_percent) !== "number")
          cc_pc = '';

        if (typeof (fc.CX_percent) === "number")
          cx_pc = '%';
        else if (typeof (fc.CX_percent) !== "number")
          cx_pc = '';

        // CC color
        if (fc.CC_percent === 'NA')
          cc_color = 'blue lighten-4';
        else if (fc.CC_percent >= lim || fc.CC_percent <= -lim) {
          cc_color = 'red lighten-3';
        }
        else if (fc.CC_percent <= lim || fc.CC_percent >= -lim) {
          cc_color = 'light-green lighten-2';
        }

        // CX color
        if (fc.CX_percent === 'NA')
          cx_color = 'blue lighten-4';
        else if (fc.CX_percent >= lim || fc.CX_percent <= -lim) {
          cx_color = 'red lighten-3';
        }
        else if (fc.CX_percent <= lim || fc.CX_percent >= -lim) {
          cx_color = 'light-green lighten-2';
        }

        return (
          <tr key={fc._id}>
            <td>{fc.CC_ratio}</td>
            <td>{fc.CC_rnd}</td>
            <td>{fc.CX_ratio}</td>
            <td>{fc.CX_rnd}</td>
            <td>{fc.CC_ratio}</td>
            <td>{fc.CC_fc}</td>
            <td className={cc_color}>{fc.CC_percent}{cc_pc}</td>
            <td>{fc.CX_ratio}</td>
            <td>{fc.CX_fc}</td>
            <td className={cx_color}>{fc.CX_percent}{cx_pc}</td>
          </tr>
        )
      })
    ) : (<p className="center">No report yet</p>)
    return (
      <div className="container report">
        <h4 className="center">fcreport</h4>

        <ReactToExcel
          table="table-export"
          filename="exportFromReact"
          sheet="1"
          buttonText="Export"
        />

        <div className="row">
          <table id="table-export" className="striped centered">
            <tbody>
              <tr className="yellow accent-1">
                <td></td>
                <td colSpan="2">Concave Surface (CC)</td>
                <td colSpan="2">Convexe Surface (CX)</td>
                <td colSpan="2">Machine Recipe</td>
              </tr>
              <tr className="yellow accent-1">
                <td>#</td>
                <td>Usability</td>
                <td>Ratio	</td>
                <td>Usability</td>
                <td>Ratio	</td>
                <td>CC</td>
                <td>CX</td>
              </tr>
              {macList}

              <br></br>
              <br></br>
              <br></br>

              <tr className="yellow accent-1">
                <td></td>
                <td colSpan="4" className="center-align">R&D Ratios</td>
                <td colSpan="5" className="center-align">Forecasted ratios</td>
              </tr>
              <tr className="yellow accent-1">
                <td className="center-align">Ratios</td>
                <td className="center-align">CC</td>
                <td className="center-align">Ratios</td>
                <td className="center-align">CX</td>
                <td className="center-align">Ratios</td>
                <td colSpan="2" className="center-align">CC</td>
                <td className="center-align">Ratios</td>
                <td colSpan="2" className="center-align" >CX</td>
              </tr>
              {fcList}

            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default FcTable
