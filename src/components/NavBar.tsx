import { ChangeEvent } from "react";

type onChangeType = {
    onChange: (
        event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => void;
};

export default function NavBar({ onChange }: onChangeType) {
    return (
        <nav id="navbar" className="p-3 flex items-center">
            <h1 className="text-lg pr-10">Monto Company Search</h1>
            <form className="space-x-4 flex">
                <input
                    className="p-3 pr-10"
                    type="text"
                    placeholder="filter company..."
                    onChange={onChange}
                ></input>
                <select className="p-3" onChange={onChange}>
                    <option value=""></option>
                    <option value="AB">AB</option>
                    <option value="HB">HB</option>
                    <option value="EF">EF</option>
                </select>
            </form>
        </nav>
    );
}
