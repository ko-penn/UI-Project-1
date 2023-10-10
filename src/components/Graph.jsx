//npm install recharts
import { ScatterChart, Scatter, XAxis, YAxis, Legend, CartesianGrid } from 'recharts';

function Graph(){
    let data01 = [
        { x: 10, y: 12 },
        { x: 20, y: 14 },
        { x: 30, y: 17 },
        { x: 40, y: 18 },
        { x: 50, y: 20 },
        { x: 60, y: 10 }
    ];
    let data02 = [
        { x: 10, y: 70 },
        { x: 20, y: 60 },
        { x: 30, y: 45 },
        { x: 40, y: 45 },
        { x: 50, y: 35 },
        { x: 60, y: 80 }
    ];
    
    return(
        <>
            <p className='triptitle'>Trip 12 Overview</p>
            <ScatterChart
                width={600}
                height={400}
                margin={{
                top: 10,
                right: 5,
                bottom: 25,
                left: 55}}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="x" type="number" name="Time" unit=" min." />
                <YAxis dataKey="y" type="number" name="weight" unit="" />
                <Legend />
                <Scatter name="Speed (mph)" data={data01} fill="#8884d8"/>
                <Scatter name="Elevation Gain (ft)" data={data02} fill="#82ca9d" />
            </ScatterChart>
        </>
    )
    
    
}

export default Graph;