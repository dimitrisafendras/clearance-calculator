import { useState } from 'react'
import './App.css'
import {allocateBudget} from "./utils/allocateBudget.ts";

function App() {
    const [salary1, setSalary1] = useState(0);
    const [salary2, setSalary2] = useState(0);
    const [totalBudget, setTotalBudget] = useState(1600); // Default to 1600
    const [cap, setCap] = useState(2000); // Default to 2000


    const result = allocateBudget(salary1, salary2, totalBudget, cap);

    return (
        <div>
            <h1>Budget Allocator</h1>
            <div>
                <label>Dimitris Salary:</label>
                <input
                    placeholder={"Dimitris Salary"}
                    // type="number"
                    value={salary1}
                    onChange={(e) => setSalary1(Number(e.target.value))}
                />
            </div>
            <div>
                <label>Polina Salary:</label>
                <input
                    placeholder={"Polina Salary"}
                    // type="number"
                    value={salary2}
                    onChange={(e) => setSalary2(Number(e.target.value))}
                />
            </div>
            <div>
                <label>Total Budget:</label>
                <input
                    value={totalBudget}
                    onChange={(e) => setTotalBudget(Number(e.target.value))}
                />
            </div>
            <div>
                <label>Cap per Salary:</label>
                <input
                    value={cap}
                    onChange={(e) => setCap(Number(e.target.value))}
                />
            </div>
            <div>
                <h2>Results:</h2>
                <p>Allocation for Dimitris: €{result.allocation1}</p>
                <p>Allocation for Polina: €{result.allocation2}</p>
                <p>{result.clearanceMessage}</p>
            </div>
        </div>
    );
}

export default App
