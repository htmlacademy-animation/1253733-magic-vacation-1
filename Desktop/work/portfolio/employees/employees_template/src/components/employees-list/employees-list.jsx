import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({ data, onDelete, onToggleProps, }) => {

    const elements = data.map(elem => {
        const { id, ...elemProps } = elem;
        return (
            < EmployeesListItem
                {...elemProps}
                key={id}
                onDelete={() => onDelete(id)}
                onToggleProps={(e) => onToggleProps(id, e.currentTarget.getAttribute('data-toggle'))} />
        )
    })


    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList;