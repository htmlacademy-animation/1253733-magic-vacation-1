import "./app-filter.css";

const AppFilter = (props) => {

    const buttonsDate = [
        { name: 'all', label: 'Все сотрудники' },
        { name: 'rise', label: 'На повышение' },
        { name: 'moreThen1000', label: 'З/П больше 1000$' },
    ]

    const buttons = buttonsDate.map(({ name, label }) => {
        const active = props.filter === name;
        const classNamebutton = active ? "btn-light" : "btn-outline-light";
        return (
            <button type="button"
                className={`btn + ${classNamebutton}`}
                key={name}
                onClick={() => props.onUpdateFilter(name)}>
                {label}
            </button>
        )
    })


    return (
        <div className="btn-group" >
            {buttons}
        </div>
    )
}

export default AppFilter;