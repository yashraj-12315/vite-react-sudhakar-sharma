import { useState } from "react";

export function EmiCalculator() {
  const [amount, setAmount] = useState(100000);
  const [years, setYears] = useState(1);
  const [rate, setRate] = useState(10.45);
  const [emi, setEmi] = useState(0);

  function handleAmountChange(e) {
    setAmount(e.target.value);
  }

  function handleYearsChange(e) {
    setYears(e.target.value);
  }

  function handleRateChange(e) {
    setRate(e.target.value);
  }

  function handleCalculateClick() {
    var P = parseInt(amount);
    var R = parseFloat(rate) / 12 / 100;
    var N = parseInt(years) * 12;

    var EMI = (P * R * Math.pow(1 + R, N)) / Math.pow(1 + R, N) - 1;
    setEmi(EMI);
  }

  return (
    <div
      className="container-fluid bg-secondary p-4"
      style={{ height: "100vh" }}
    >
      <div>
        <h5 className="text-center text-white">Personal Loan EMI Calculator</h5>
        <div className="bg-light text-dark">
          <div className="row p-4">
            <div className="col">
              Amount you need &#8377;{" "}
              <input
                type="text"
                size={16}
                value={amount}
                onChange={handleAmountChange}
              />
            </div>
            <div className="col">
              for{" "}
              <input
                type="text"
                size={2}
                value={years}
                onChange={handleYearsChange}
              />{" "}
              years
            </div>
            <div className="col">
              interest rate{" "}
              <input type="text" value={rate} onChange={handleRateChange} /> %
            </div>
          </div>
          <div className="row p-4">
            <div className="col">
              <input
                className="form-range"
                type="range"
                step={1000}
                min={100000}
                max={1000000}
                value={amount}
                onChange={handleAmountChange}
              />
              <span>&#8377; 1,00,000</span>
              <span className="float-end">&#8377;10,00,000</span>
            </div>
            <div className="col">
              <input
                className="form-range"
                type="range"
                min={1}
                max={10}
                value={years}
                onChange={handleYearsChange}
              />
              <span>1 Year</span>
              <span className="float-end">10 Years</span>
            </div>
            <div className="col">
              <input
                className="form-range"
                type="range"
                step={0.01}
                min={10.45}
                max={18.45}
                value={rate}
                onChange={handleRateChange}
              />
              <span>10.45%</span>
              <span className="float-end">18.45%</span>
            </div>
          </div>
          <div className="row p-4">
            <div className="col text-end">
              <button className="btn btn-primary" onClick={handleCalculateClick}>Calculate</button>
            </div>
          </div>

          <div className="row p-4">
            <div className="col text-center">
              <div>Your monthly EMI is <span className="fs-3 fw-bold">{Math.round(emi).toLocaleString('en-in',{style:'currency',currency:'INR'})}</span>  for next {years*12} months</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
