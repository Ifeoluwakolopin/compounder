import React, { useEffect, useReducer } from "react";
import { Line } from "react-chartjs-2";
import { Container, Row, Col } from "react-bootstrap";
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
          },
        ],
      };
    default:
      return state;
  }
}

export default function SimulationResult({ title, data, isLine }) {
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

  useEffect(() => {
    if (data) {
      const labels = data.map((item) =>
        item.year ? item.year.toString() : "N/A"
      );
      const amountData = data.map((item) => item.amount);
      dispatch({ type: "setData", labels, title, data: amountData });
    }
  }, [data, title]);

  // Ensure finalAmount is a number and defaults to 0 if data is empty or amount is undefined
  const finalAmount =
    data && data.length > 0 && typeof data[data.length - 1].amount === "number"
      ? data[data.length - 1].amount
      : 0;

  return (
    <Container>
      <Row className="mb-3">
        <Col>
          <h3>{title}</h3>
        </Col>
      </Row>
      <Row>
        <Col>
          {isLine && (
            <div style={{ height: "240px" }}>
              <Line
                data={chartData}
                options={{
                  maintainAspectRatio: false,
                  scales: {
                    x: {
                      type: "linear",
                      position: "bottom",
                    },
                  },
                }}
              />
            </div>
          )}
        </Col>
      </Row>
      <Row className="mt-3">
        <Col>
          <p>
            The final investment after{" "}
            {data.length > 0 ? data[data.length - 1].year : 0} years is $
            {finalAmount.toFixed(2)}
          </p>
        </Col>
      </Row>
    </Container>
  );
}
