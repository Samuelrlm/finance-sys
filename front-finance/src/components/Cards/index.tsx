import { CardsContainer, Card } from "./styles";

interface DataProps {
    data: {
        total: number;
        valueTotal: number;
        mediaValue: number;
    };
}

export default function Cards({ data }: DataProps) {
    
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
                    <b>R$ {data.valueTotal.toFixed(2)}</b>
                </div>
            </Card>
            <Card
                style={{
                    borderLeft: '5px solid #E83F5B'
                }}
            >
                <p>Montante médio</p>
                <div>
                    <b>R$ {data.mediaValue.toFixed(2)}</b>
                </div>
            </Card>
        </CardsContainer>
    )
}