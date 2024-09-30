import { useEffect, useState } from "react";
import instance from "../../../../api/instance";
import { ContainerOptions, ContainerSelect } from "./styles";
import { CaretDown } from "@phosphor-icons/react";

interface Client {
    id: number;
    name: string;
}

interface SelectClientsProps {
    filteredClients: Client[];
    setFilteredClients: React.Dispatch<React.SetStateAction<Client[]>>;
}

export default function SelectClients({filteredClients, setFilteredClients}: SelectClientsProps) {
    const [clients, setClients] = useState([])
    const [showOptions, setShowOptions] = useState(false)

    useEffect(() => {
        instance.get("/clients")
        .then((response) => {
            setClients(response.data)
        })
    }, [])

    function handleSelectClient(client: Client) {
        const index = filteredClients.findIndex((item: Client) => item.id === client.id)

        if (index === -1) {
            setFilteredClients([...filteredClients, client])
        } else {
            const newClients = filteredClients.filter((item: Client) => item.id !== client.id)
            setFilteredClients(newClients)
        }
    }

    return (
        <div style={{position: "relative"}}>
            <ContainerSelect
                onClick={() => setShowOptions(!showOptions)}
            >
                <div className="content">
                    <p>Filtrar clientes</p>
                </div>
                <div className="icon">
                    <CaretDown size={20} />
                </div>
            </ContainerSelect>
            {showOptions && (
                <ContainerOptions>
                    {clients.map((client: Client ) => {
                        return (
                            <div className="option"
                                style={{
                                    border: filteredClients.findIndex((item: Client) => item.id === client.id) !== -1 ? "1px solid #FF872C" : ""
                                }}
                                key={client.id}
                                onClick={() => {
                                    handleSelectClient(client)
                                }}
                            >
                                <div className="chekcbox">
                                    <input
                                        checked={filteredClients.findIndex((item: Client) => item.id === client.id) !== -1}
                                        type="checkbox"
                                        onChange={() => {
                                            handleSelectClient(client)
                                        }}
                                    />
                                </div>
                                <div className="content">
                                    <p>{client.name}</p>
                                </div>
                            </div>
                        )
                    })}
                    <div className="clean-btn">
                        <button
                            onClick={() => setFilteredClients([])}
                        >
                            Limpar
                        </button>
                    </div>
                </ContainerOptions>
            )}
        </div>
    );
}