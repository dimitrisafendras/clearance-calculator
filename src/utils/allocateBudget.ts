export function allocateBudget(
    salary1: number,
    salary2: number,
    totalBudget: number,
    cap: number
): { allocation1: number, allocation2: number, difference: number, clearanceMessage: string } {
    // Cap the salaries
    const cappedSalary1 = Math.min(salary1, cap);
    const cappedSalary2 = Math.min(salary2, cap);

    // Calculate the total of the capped salaries
    const totalCappedSalaries = cappedSalary1 + cappedSalary2;

    // Allocate budget based on the capped salaries
    const allocation1 = Math.round((cappedSalary1 / totalCappedSalaries) * totalBudget)
    const allocation2 = Math.round((cappedSalary2 / totalCappedSalaries) * totalBudget)
    const difference = allocation1 - allocation2;

    return {
        allocation1,
        allocation2,
        difference,
        clearanceMessage: difference > 0 ?
            `Dimitris owes Polina €${Math.abs(difference)}` :
            `Polina owes Dimitris €${Math.abs(difference)}`
    };
}
