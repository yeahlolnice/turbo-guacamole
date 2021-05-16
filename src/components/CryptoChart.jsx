import { LineChart, Line, YAxis, XAxis, CartesianGrid, Tooltip, Legend } from 'recharts';



function cryptoChart() {
    const fetch = require('node-fetch');
    let time = "";
    
    setInterval(() => {

        let DogeData = [
            {
                "time": time,
                "DogeCoin": 31
            }
        ]

        fetch('https://www.coinspot.com.au/pubapi/latest')
            .then(response => response.json())
            .then(data => {
                const currentDate = new Date();
                time = `${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`
                if (DogeData.length === 5){
                    DogeData.shift();
                    DogeData.push({
                        "time": time,
                        "DogeCoin": data.prices.doge.bid
                    });
                }else {
                    DogeData.push({
                        "time": time,
                        "DogeCoin": data.prices.doge.bid
                    });
                    console.log(time)
                }
            });
    }, 5000);

    
    let DogeData = [
        {
            "time": time,
            "DogeCoin": 31
        }
    ]

    return (
        <LineChart width={400} height={400} data={DogeData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="DogeCoin" stroke="#0095FF" />
        </LineChart>
    )
}
export default cryptoChart;