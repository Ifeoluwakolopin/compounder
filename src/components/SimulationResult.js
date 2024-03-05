import React, { useEffect, useReducer, useRef } from "react";
import { Line } from "react-chartjs-2";
import MoneyBox from "./MoneyBox";
import { Container, Row, Col } from "react-bootstrap"; // Using Bootstrap container
import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

function reducer(state, action) {
  switch (action.type) {
    case "setData":
      return {
        ...state,
        labels: action.labels,
        datasets: [
          {
            ...state.datasets[0],
            label: action.title,
            data: action.data,
            backgroundColor: action.backgroundColor, // Set background color
          },
        ],
      };
    default:
      return state;
  }
}

export default function SimulationResult({ title, data, isLine, maxAmount }) {
  const [chartData, dispatch] = useReducer(reducer, {
    labels: [],
    datasets: [
      {
        label: title,
        data: [],
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        pointRadius: 3,
        pointHitRadius: 10,
      },
    ],
  });

  const chartContainer = useRef(null);

  useEffect(() => {
    if (data) {
      const labels = data.map((item) =>
        item.year ? item.year.toString() : "N/A"
      );
      const amountData = data.map((item) => item.amount);

      // Determine the background color based on the last data point
      const backgroundColor =
        amountData[amountData.length - 1] > maxAmount / 2
          ? "green" // Set to red if amount exceeds half of maxAmount
          : "red";

      dispatch({
        type: "setData",
        labels,
        title,
        data: amountData,
        backgroundColor,
      });
    }
  }, [data, title, maxAmount]);

  const finalAmount =
    data && data.length > 0 && typeof data[data.length - 1].amount === "number"
      ? data[data.length - 1].amount
      : 0;

  return (
    <Container className="simulation-font">
      <Row className="mb-3">
        <Col>
          <h3>{title}</h3>
        </Col>
      </Row>
      <Row className="chart-moneybox-container">
        {/* Adjust the column sizing here */}
        <Col xs={12} md={8} lg={9} className="chart-container">
          {" "}
          {/* Allocate more space for the chart on larger screens */}
          {isLine && (
            <div ref={chartContainer} style={{ height: "300px" }}>
              <Line
                data={chartData}
                options={{
                  maintainAspectRatio: false,
                }}
              />
            </div>
          )}
        </Col>
        <Col xs={12} md={4} lg={3}>
          <MoneyBox
            data={data.map((item) => item.amount)}
            maxAmount={maxAmount}
            graphHeight={chartContainer.current?.offsetHeight || 0}
          />
        </Col>
      </Row>
      <Row className="mt-3">
        <Col>
          <p style={{ fontSize: "18px" }}>
            The final investment after
            <span style={{ color: "blue", fontSize: "22px" }}>
              {" "}
              {data.length > 0 ? data[data.length - 1].year : 0}
            </span>{" "}
            years is{" "}
            <span style={{ color: "blue", fontSize: "25px" }}>
              ${finalAmount.toFixed(2)}
            </span>
          </p>
        </Col>
      </Row>
    </Container>
  );
}
