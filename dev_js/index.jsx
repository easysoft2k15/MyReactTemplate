import React from "react";
import ReactDOM from "react-dom";

//Import F# bundle
import {getData} from "../out_fsharp/libBundle.js"

import {VictoryLine,VictoryChart,VictoryZoom} from "victory";

class App extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state=
        {
            ZoomDomain: [0,100],
            SelectedDomain: [0,100]
        }
    }

    render()
    {
        <VictoryZoom zoomDomain={this.state.ZoomDomain}>
            <VictoryChart>
                <VictoryLine data={this.props.date} interpolation="basis" />
            </VictoryChart>
        </VictoryZoom>
    }
}

let myData=getData();

ReactDOM.render(
    <Appa data={myData} />,
    document.getElementById("root")
);