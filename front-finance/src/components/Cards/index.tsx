import { useEffect, useState } from "react";
import { CardsContainer, Card } from "./styles";

interface Transaction {
    amount: number;
}

export default function Cards({transactions} : {transactions: Transaction[]}) {
    const [data, setData] = useState({
        total: 0,
        valueTotal: 0,
        mediaValue: 0
    })

    useEffect(() => {
        let valueTotal = 0
        let mediaValue = 0

        transactions.forEach((transaction: Transaction) => {
            valueTotal += transaction.amount
        })

        if (transactions.length > 0) {
            mediaValue = valueTotal / transactions.length
        }

        setData({
            total: transactions.length,
            valueTotal,
            mediaValue: mediaValue
        })
    } , [transactions])

    return (
        <CardsContainer>
            <Card
                style={{
                    borderLeft: '5px solid #FF872C'
                }}
            >
                <p>Total de transações</p>
                <div>
                    <b>{data.total}</b>
                </div>
            </Card>
            <Card
                style={{
                    borderLeft: '5px solid #12A454'
                }}
            >
                <p>Montante total</p>
                <div>
                    <b>R$ {data.valueTotal}</b>
                </div>
            </Card>
            <Card
                style={{
                    borderLeft: '5px solid #E83F5B'
                }}
            >
                <p>Montante médio</p>
                <div>
                    <b>{data.mediaValue}</b>
                </div>
            </Card>
        </CardsContainer>
    )
}