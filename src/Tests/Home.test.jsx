import axios from "axios";
import '@testing-library/jest-dom';

const fetchData = () => axios.get('https://jsonplaceholder.typicode.com/users')

test('el primer elemento de los odontologos', () => { 
    return fetchData().then(data =>{
        expect(data.data[0].name).toBe("Leanne Graham");
    });
});