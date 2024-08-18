export function allocateBudget(
    salary1: number,
    salary2: number,
    totalBudget: number,
    cap: number
): { allocation1: number, allocation2: number, difference: number, clearanceMessage: string } {
    // Calculate the proportion of the total budget for each salary
    const totalSalaries = salary1 + salary2;

    // Allocate budget for salary1 and salary2, and round the result
    const allocation1 = Math.min(Math.round((salary1 / totalSalaries) * totalBudget), salary1, cap);
    const allocation2 = Math.min(Math.round((salary2 / totalSalaries) * totalBudget), salary2, cap);

    // Calculate the difference for clearance
    const difference = allocation1 - allocation2;

    return {
        allocation1: allocation1,
        allocation2: allocation2,
        difference: difference,
        clearanceMessage: difference > 0 ?
            `Dimitris owes Polina €${Math.abs(difference)}` :
            `Polina owes Dimitris €${Math.abs(difference)}`
    };
}
