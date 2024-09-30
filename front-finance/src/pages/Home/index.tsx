import PageWrapper from "../../components/PageWrapper"
import instance from "../../api/instance"
import Cards from "../../components/Cards"
import { useEffect, useState } from "react"
import ContentField from "./components/ContentField"
import SelectFilters from "../../components/SelectFilters"

interface Transaction {
    value: number;
    amount: number;
}

export default function Home() {
    const [transactions, setTransactions] = useState<Transaction[]>([])
    const [data, setData] = useState({
        total: 0,
        valueTotal: 0,
        mediaValue: 0
    })
    const [filteredDate, setFilteredDate] = useState({
        start: "",
        end: ""
    })
    const [filteredClients, setFilteredClients] = useState([])
   
    useEffect(() => {
        const body = {
            clients: [],
        }

        try {
            instance.post(`/transactions`, body)
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

    }, [])


    return (
        <PageWrapper>
            <div style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "20px"
            }}>
                <Cards data={data}/>
                <SelectFilters
                    type="simples"
                    setFilteredDate={setFilteredDate}
                    setFilteredClients={setFilteredClients}
                />
            </div>
            <ContentField
                setData={setData}
                transactions={transactions}
                setTransactions={setTransactions}
                filteredDate={filteredDate}
                setFilteredDate={setFilteredDate}
                filteredClients={filteredClients}
                setFilteredClients={setFilteredClients}
            />
        </PageWrapper>
    )
}