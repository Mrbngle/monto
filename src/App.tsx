import "./App.css";
import useFetch from "./hooks/useFetch";
import { useEffect, useState } from "react";
import { CompanyInterface } from "./types";
import CompanyList from "./components/CompanyList";
import { sortArray } from "./utilities";

function App() {
    const companies = useFetch<CompanyInterface[]>("companies");
    const [order, setOrder] = useState<keyof CompanyInterface>("id");
	const [direction, setDirection] = useState<'asc' | 'desc'>('asc');

    function handleOrder(event: React.MouseEvent<HTMLElement>) {
        if (event.target instanceof Element) {
			
            let type = event.target.getAttribute("id") as keyof CompanyInterface;
			setDirection(direction === 'asc' ? 'desc' : 'asc');
            setOrder(type);
        }
    }

    useEffect(() => {
        companies.fetch();
    }, []);

    return (
        <div className="App container mx-auto shadow-md">
            <div className="border-solid flex">
                <CompanyList
                    companies={sortArray(companies.data, order, direction)}
                    orderBy={order}
                    onClick={handleOrder}
                ></CompanyList>
            </div>
        </div>
    );
}

export default App;
