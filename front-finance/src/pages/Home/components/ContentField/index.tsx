import { useState } from "react";
import { Container } from "./styles";
import instance from "../../../../api/instance";
import { toast } from "react-toastify";
import SelectClients from "../SelectClients";
import Table from "../../../../components/Table";

interface Transaction {
    id: string;
    client_name: string;
    date: string;
    value: number;
    amount: number;
    [key: string]: string | number | boolean;
}

interface ContentFieldProps {
    setData: (data: { total: number; valueTotal: number; mediaValue: number }) => void;
    transactions: Transaction[];
    setTransactions: (transactions: Transaction[]) => void;
}

export default function ContentField({setData, transactions, setTransactions}: ContentFieldProps) {
    const [filteredClients, setFilteredClients] = useState([])
    const [filteredDate, setFilteredDate] = useState({
        start: "",
        end: ""
    })

    function handleFilterClients() {
        const body = {
            clients: filteredClients.map((client: { name: string }) => client.name),
        }

        if ((filteredDate.start && !filteredDate.end) || (!filteredDate.start && filteredDate.end) || (filteredDate.start > filteredDate.end)) {
            toast.error("Selecione um intervalo de data válido")
            return
        }

        try {
            instance.post(`/transactions${
                filteredDate.start ? `?start_date=${filteredDate.start}` : ""
            }${
                filteredDate.end ? `&end_date=${filteredDate.end}` : ""
            }`, body)
            .then((response) => {
                setTransactions(response.data)

                const total = response.data.length
                let valueTotal = 0
                let mediaValue = 0

                response.data.forEach((transaction: Transaction) => {
                    valueTotal += transaction.amount
                })

                if (response.data.length > 0) {
                    mediaValue = valueTotal / response.data.length
                }

                setData({
                    total: total,
                    valueTotal,
                    mediaValue: mediaValue
                })
            })
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <Container>
            <div className="top">
                <h2>Transações</h2>
                <div className="filters">
                    <SelectClients
                        filteredClients={filteredClients}
                        setFilteredClients={setFilteredClients}
                    />
                    <div className="date">
                        <label htmlFor="date">Inicio</label>
                        <input
                            type="date"
                            id="date"
                            value={filteredDate.start}
                            onChange={(e) => setFilteredDate({...filteredDate, start: e.target.value})}
                        />
                    </div>
                    <div className="date">
                        <label htmlFor="date">Fim</label>
                        <input
                            type="date"
                            id="date"
                            value={filteredDate.end}
                            onChange={(e) => setFilteredDate({...filteredDate, end: e.target.value})}
                        />
                    </div>
                    <button
                        onClick={handleFilterClients}
                    >Aplicar</button>
                </div>
            </div>
            <Table
                headerItens={["Cliente","Montante", "Data"]}
                data={transactions}
                bodyItens={["client_name", "amount", "date"]}
            />
        </Container>
    )
}