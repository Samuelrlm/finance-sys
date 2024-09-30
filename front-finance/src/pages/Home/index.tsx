import PageWrapper from "../../components/PageWrapper"
import instance from "../../api/instance"
import Cards from "../../components/Cards"
import { useEffect, useState } from "react"
import ContentField from "./components/ContentField"

export default function Home() {
    const [transactions, setTransactions] = useState([])
    // const [filteredClients, setFilteredClients] = useState([])
    // const [filteredDate, setFilteredDate] = useState({
    //     start: "",
    //     end: ""
    // })

    useEffect(() => {
        const body = {
            clients: []
        }

        try {
            instance.post(`/transactions`, body)
            .then((response) => {
                setTransactions(response.data)
            })
        } catch (error) {
            console.log(error)
        }
    }, [])


    return (
        <PageWrapper>
            <Cards transactions={transactions}/>
            <ContentField />
        </PageWrapper>
    )
}