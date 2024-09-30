import { useEffect, useState } from "react";
import PageWrapper from "../../components/PageWrapper";
import instance from "../../api/instance";
import { Container } from "./styles";
import { CaretDown } from "@phosphor-icons/react";

interface Filter {
    id: number;
    name: string;
    clients?: string[];
}

export default function Filters() {
    const [simpleFilters, setSimpleFilters] = useState([])
    const [comparisonFilters, setComparisonFilters] = useState([])
    const [showOptions, setShowOptions] = useState(false)
    const [typeFilter, setTypeFilter] = useState("simple")

    const [selectedFilter, setSelectedFilter] = useState<Filter | null>(null)

    useEffect(() => {
        instance.get("/simple-filters/")
        .then((response) => {
            setSimpleFilters(response.data)
        })

        instance.get("/comparison-filters/")
        .then((response) => {
            setComparisonFilters(response.data)
        })
    } ,[])

    function handleSelecteFilter(filter: any, type: string) {
        setSelectedFilter(filter)
        setTypeFilter(type)
        setShowOptions(!showOptions)
    }

    return (
        <PageWrapper>
            <h1>Filtros</h1>

            <Container>
                <h2>Filtros Simples</h2>
                {simpleFilters.map((filter: any) => {
                    return (
                        <div
                            key={filter.id}
                            className="filter"
                            onClick={() => handleSelecteFilter(filter, 'simple')}
                        >
                            <div className="show">
                                <p>{filter.name}</p>
                                <CaretDown size={20} />
                            </div>
                            {showOptions && selectedFilter && selectedFilter.id == filter.id && typeFilter === 'simple' &&(
                                <div className="options">
                                    <p>Clientes</p>
                                    <div className="client-container">
                                        {filter.clients.map((client: any) => {
                                            return (
                                                <div key={client} className="name">
                                                    <p>{client}</p>
                                                </div>
                                            )
                                        })}
                                    </div>
                                    <div className="dates">
                                        <p>Inicio: {filter.start_date}</p>
                                        <p>Fim: {filter.end_date}</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    )
                })}
            </Container>
            <Container>
                <h2>Filtros de Comparação</h2>
                {comparisonFilters.map((filter: any) => {
                    return (
                        <div
                            key={filter.id}
                            className="filter"
                            onClick={() => handleSelecteFilter(filter, 'comparison')}
                        >
                            <div className="show">
                                <p>{filter.name}</p>
                                <CaretDown size={20} />
                            </div>
                            {showOptions && selectedFilter && selectedFilter.id == filter.id && typeFilter === 'comparison' &&(
                                <div className="options">
                                    <p>Filtros</p>
                                    <div className="filters-details">
                                        {Object.entries(filter.filters).map(([index, value]: any) => {
                                            return (
                                                <div key={index} className="filter-details">
                                                    <p>Filtro {index.split('-')[1]}</p>
                                                    <b>Clientes</b>
                                                    <div className="clients">
                                                        {value.clients.map((client: any) => {
                                                            return (
                                                                <div key={client} className="name">
                                                                    <p>{client}</p>
                                                                </div>
                                                            )
                                                        })}
                                                    </div>
                                                    <div className="dates">
                                                        <p>Inicio: {value.start_date}</p>
                                                        <p>Fim: {value.end_date}</p>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            )}
                        </div>
                    )
                })}
            </Container>
        </PageWrapper>
    )
}