import { Summary } from "../Summary";
import { TransactionsTable } from "../Summary/TransactionsTable";
import { Container } from "./styles";

export function Dashboard() {
    return (
        <Container>
            <Summary />
            <TransactionsTable />
        </Container>
    );
}