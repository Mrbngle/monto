import "./App.css";
import useFetch from "./hooks/useFetch";
import React, { useEffect, useState } from "react";
import { CompanyInterface } from "./types";
import CompanyList from "./components/CompanyList";
import { sortArray, filterArray } from "./utilities";
import NavBar from "./components/NavBar";

function App() {
    const companies = useFetch<CompanyInterface[]>("companies");
    const [order, setOrder] = useState<keyof CompanyInterface>("id");
    const [query, setQuery] = useState<string>("");
    const [companyType, setCompanyType] = useState<string>("");
    const [direction, setDirection] = useState<"asc" | "desc">("desc");

    /**
     * Handler to order the data accordingly
     * @param event
     */
    function handleOrder(event: React.MouseEvent<HTMLElement>) {
        if (event.target instanceof Element) {
            let type = event.target.getAttribute(
                "id"
            ) as keyof CompanyInterface;
            setDirection(direction === "asc" ? "desc" : "asc");
            setOrder(type);
        }
    }

    /**
     * Handles either changes in the search field or the company type selector
     * @param event
     */
    function handleChange(
        event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) {
        const nodeName = event.target.nodeName;
        if (nodeName === "INPUT") setQuery(event.target.value);
        else setCompanyType(event.target.value);
    }

    useEffect(() => {
        companies.fetch();
    }, []);

    return (
        <div className="App container mx-auto shadow-md">
            <NavBar onChange={handleChange}></NavBar>
            <div className="border-solid flex">
                <CompanyList
                    companies={sortArray(
                        filterArray(
                            filterArray(companies.data, "name", query),
                            "type",
                            companyType
                        ),
                        order,
                        direction
                    )}
                    orderBy={order}
                    onClick={handleOrder}
                ></CompanyList>
            </div>
        </div>
    );
}

export default App;
