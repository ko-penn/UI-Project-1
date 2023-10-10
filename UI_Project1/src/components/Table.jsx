//npm install --save mdbreact
//https://mdbootstrap.com/docs/b4/react/tables/pagination/
import React from 'react';
import { MDBDataTable } from 'mdbreact';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

function Table(){

        const data = {
            columns: [
            {
                label: 'Trip',
                field: 'Trip',
                sort: 'asc',
                width: 4
            },
            {
                label: 'Avg. Heart Rate (bpm)',
                field: 'HR',
                sort: 'asc',
                width: 3
            },
            {
                label: 'Avg. Speed (mph)',
                field: 'Speed',
                sort: 'asc',
                width: 7
            },
            {
                label: 'Calories',
                field: 'Calories',
                sort: 'asc',
                width: 7
            },
            {
                label: 'Time (minutes.seconds)',
                field: 'Time',
                sort: 'asc',
                width: 7
            },
            {
                label: 'Date',
                field: 'Date',
                sort: 'asc',
                width: 15
            }
            ],
            rows: [
            {
                Trip: '1',
                HR: '155',
                Speed: '12',
                Calories: '175',
                Time: '60.35',
                Date: '1/5/2023'
            },
            {
                Trip: '2',
                HR: '160',
                Speed: '13',
                Calories: '190',
                Time: '70.00',
                Date: '2/6/2023'
            },
            {
                Trip: '3',
                HR: '180',
                Speed: '14',
                Calories: '170',
                Time: '50.35',
                Date: '3/7/2023'
            },
            {
                Trip: '4',
                HR: '150',
                Speed: '10.5',
                Calories: '100',
                Time: '20.00',
                Date: '4/5/2023'
            },
            {
                Trip: '5',
                HR: '200',
                Speed: '16.7',
                Calories: '300',
                Time: '120.35',
                Date: '5/1/2023'
            },
            {
                Trip: '6',
                HR: '100',
                Speed: '5',
                Calories: '25',
                Time: '10.00',
                Date: '6/6/2023'
            },
            {
                Trip: '7',
                HR: '210',
                Speed: '17',
                Calories: '180',
                Time: '45.89',
                Date: '7/16/2023'
            },
            {
                Trip: '8',
                HR: '135',
                Speed: '12',
                Calories: '104',
                Time: '51.00',
                Date: '8/1/2023'
            },
            {
                Trip: '9',
                HR: '142',
                Speed: '8',
                Calories: '64',
                Time: '30.05',
                Date: '8/18/2023'
            },
            {
                Trip: '10',
                HR: '160',
                Speed: '15',
                Calories: '150',
                Time: '23.00',
                Date: '9/25/2023'
            },
            {
                Trip: '11',
                HR: '120',
                Speed: '10',
                Calories: '64',
                Time: '10.56',
                Date: '10/21/2023'
            },
            {
                Trip: '12',
                HR: '130',
                Speed: '8',
                Calories: '55',
                Time: '10.50',
                Date: '11/1/2023'
            },
            ]
        }


  return (
    <div className = "tablecontainer">
        <MDBDataTable
        data={data}
        />
    </div>
  );
}

export default Table;