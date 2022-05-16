import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          name: 'Olga',
          salary: 700,
          increase: true,
          rise: false,
          id: 1,
        },
        {
          name: 'Mary',
          salary: 800,
          increase: false,
          rise: true,
          id: 2
        },
        {
          name: 'Nina',
          salary: 1200,
          increase: true,
          rise: false,
          id: 3
        },
      ],
      term: '',
      filter: ''
    }

    this.maxId = 4;
  }

  deleteItem = (id) => {
    this.setState(({ data }) => {
      return {
        data: data.filter(item => item.id !== id)
      }
    })
  }

  addItem = (name, salary) => {
    const newItem = {
      name,
      salary,
      increase: false,
      rise: false,
      id: this.maxId++
    }
    this.setState(({ data }) => {
      const newData = [...data, newItem]
      return {
        data: newData
      }
    });
  }

  onToggleProps = (id, props) => {
    this.setState(({ data }) => ({
      data: data.map(elem => {
        if (elem.id === id) {
          return { ...elem, [props]: !elem[props] }
        }
        return elem;
      })
    }))
  }

  searchEmp = (items, term) => {
    if (term.length === 0) {
      return items;
    }

    return items.filter(item => {
      return item.name.indexOf(term) > -1
    })
  }

  onUpdateSearch = (term) => {
    this.setState({ term });
  }

  onUpdateFilter = (filter) => {
    this.setState({ filter });
  }

  onFilterItem = (items, filter) => {
    switch (filter) {
      case 'rise':
        return items.filter(item => item.rise);
      case 'moreThen1000':
        return items.filter(item => item.salary > 1000);
      default:
        return items
    }
  }



  render() {
    const { data, term, filter } = this.state;
    const employees = this.state.data.length;
    const increased = this.state.data.filter(elem => elem.increase).length;
    const visibleData = this.onFilterItem(this.searchEmp(data, term), filter);

    return (
      <div className="app" >
        <AppInfo employees={employees} increased={increased} />

        <div className="search-panel">
          <SearchPanel onUpdateSearch={this.onUpdateSearch} />
          <AppFilter filter={filter} onUpdateFilter={this.onUpdateFilter} />
        </div>

        <EmployeesList
          data={visibleData}
          onDelete={this.deleteItem}
          onToggleProps={this.onToggleProps}
        />
        <EmployeesAddForm
          onAdd={this.addItem} />
      </div>
    );
  }
}

export default App;

