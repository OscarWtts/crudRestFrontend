import axios from 'axios';

export class PersonaService{
    baseUrl = "http://localhost:8888/api/";

    getAll(){
        return axios.get(this.baseUrl + "all").then(res => res.data);
    }
}