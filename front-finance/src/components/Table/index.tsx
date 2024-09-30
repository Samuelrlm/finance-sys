import { ContainerTable } from "./styles";

interface TableProps {
    headerItens: string[];
    data: { id: string | number; [key: string]: string | number | boolean }[];
    bodyItens: string[];
}

export default function Table({ headerItens, data, bodyItens }: TableProps) {
    return (
        <ContainerTable>
            <thead>
                <tr>
                    {headerItens.map((item:string) => (
                        <th key={item}>{item}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((item: { id: string | number; [key: string]: string | number | boolean }) => (
                    <tr key={item.id}>
                        {bodyItens.map((bodyItem:string) => (
                            <td key={bodyItem}>{
                                bodyItem === 'date' ? new Date(item[bodyItem].toString()).toLocaleDateString() : item[bodyItem]
                            }</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </ContainerTable>
    )
}