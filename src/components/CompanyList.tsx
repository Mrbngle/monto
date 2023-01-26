import { CompanyInterface } from "../types";
import { getLocalDate } from "../utilities";

export default function CompanyList({
    companies,
    orderBy,
    onClick,
}: {
    companies: CompanyInterface[];
    orderBy: string;
    onClick: (event: React.MouseEvent<HTMLElement>) => void;
}) {
    const listCompanies = companies.map((el: CompanyInterface) => {
        return (
            <tr key={el.id}>
                <td className="text-left border p-3">
                    <strong>{el.id}</strong>
                </td>
                <td className="text-left border p-3">{el.name}</td>
                <td className="text-left border p-3">{el.type}</td>
                <td className="text-left border p-3">
                    {getLocalDate(el.created_at)}
                </td>
            </tr>
        );
    });

    const createOrderCell = (type: string, label: string) => {
        const fontWeight = type === orderBy ? "font-bold" : "font-normal";
        return (
            <td className="text-left border p-3">
                <button className={fontWeight} id={type} onClick={onClick}>
                    {label}
                </button>
            </td>
        );
    };

    return (
        <table className="flex-1 border-separate border border-spacing-100">
            <thead>
                <tr>
                    {createOrderCell("id", "ID")}
                    {createOrderCell("name", "Name")}
                    {createOrderCell("type", "Type")}
                    {createOrderCell("created_at", "Created")}
                </tr>
            </thead>
            <tbody>{listCompanies}</tbody>
        </table>
    );
}
