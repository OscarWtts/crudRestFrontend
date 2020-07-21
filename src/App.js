import React from 'react';
import './App.css';
import { PersonaService } from './service/PersonaService';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Panel } from 'primereact/panel';

import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      personas: []
    }
    this.personaService = new PersonaService();
  }

  componentDidMount() {
    this.personaService.getAll().then(data => this.setState({ personas: data }));
  }

  render() {
    return (
      <div>
        <Panel header="React CRUD app" style={{ width: '80%', margin: '0 auto', marginTop: '20px'}}>
          <DataTable value={this.state.personas}>
            <Column field="id" header="ID"></Column>
            <Column field="nombre" header="Nombre"></Column>
            <Column field="apellido" header="Apellido"></Column>
            <Column field="direccion" header="Dirección"></Column>
            <Column field="telefono" header="Telefono"></Column>
          </DataTable>
        </Panel>
      </div> 
    );
  }


}

export default App;
