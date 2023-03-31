import { LoggedNavBar } from "../components/LoggedNavBar";
import '../styles/Logged.css'
import { API, graphqlOperation } from "aws-amplify";
import { useEffect, useState, React } from "react";
import * as subscriptions from '../graphql/subscriptions';
import {listTodos} from '../graphql/queries';
import GaugeChart from 'react-gauge-chart'
import { color } from 'd3-color';
import { interpolateRgb } from 'd3-interpolate';
import ReactDOM from 'react-dom';
import LiquidFillGauge from 'react-liquid-gauge';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
  } from "recharts";

const MakaiMap = () => {
    return(
        <div className="page">
            <LoggedNavBar/>
            My Makai Map
        </div>
    )
}

export default MakaiMap;