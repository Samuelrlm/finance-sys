import { useEffect, useState } from "react";
import instance from "../../api/instance";
import { CaretDown } from "@phosphor-icons/react";
import { ContainerOptions, ContainerSelect } from "./styles";
import { toast } from "react-toastify";

interface Filter {
    id: number;
    name: string;
    start_date: string;
    end_date: string;
    clients: Array<string>;
}

interface SelectFiltersProps {
    type: "simples" | "comparison";
    setFilteredDate: (filteredDate: { start: string; end: string }) => void;
    setFilteredClients: (filteredClients:   Array<string>) => void;
}

export default function SelectFilters({ type, setFilteredDate, setFilteredClients}: SelectFiltersProps) {
  const [filters, setFilters] = useState<Filter[]>([]);
  const [showOptions, setShowOptions] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState<Filter | null>(null);
  const [clients, setClients] = useState([])


  useEffect(() => {
    const body = {};
    const url =
      type === "simples" ? "/simple-filters/" : "/comparison-filters/";
    try {
      instance.get(url, body).then((response) => {
        setFilters(response.data);
      });
      instance.get("/clients")
        .then((response) => {
            setClients(response.data)
        })
    } catch (error) {
      toast.error("Erro ao buscar filtros");
      console.error(error);
    }
  }, [type]);

  
  function handleSelecteFilter(filter: Filter) {
    setSelectedFilter(filter);

    setFilteredDate({ start: filter.start_date, end: filter.end_date });

    const clientsFilter = clients.filter((client: { name: string }) => filter.clients.includes(client.name))

    setFilteredClients(clientsFilter)

    setShowOptions(false);
  }

  return (
    <div style={{ position: "relative" }}>
      <ContainerSelect onClick={() => setShowOptions(!showOptions)}>
        <div className="content">
            {
                selectedFilter ? <p>{selectedFilter.name}</p> : <p>Selecionar Filtro</p>
            }
        </div>
        <div className="icon">
          <CaretDown size={20} />
        </div>
      </ContainerSelect>
      {showOptions && (
        <ContainerOptions>
          {filters.map((filter: Filter) => {
            return (
              <div
                className="option"
                key={filter.id}
                onClick={() => {
                    handleSelecteFilter(filter);
                }}
              >
                <div className="content">
                  <p>{filter.name}</p>
                </div>
              </div>
            );
          })}
        </ContainerOptions>
      )}
    </div>
  );
}
