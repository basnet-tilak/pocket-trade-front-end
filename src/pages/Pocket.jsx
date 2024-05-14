import axios from "axios";
import { useEffect, useState } from "react";
import '../styles/Pocket.css'
const Pocket = () => {
  const [customer, setCustomer] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await axios.get('http://localhost:8080/customer');
      setCustomer(response.data);
      console.log(response.data)
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  }
  return (
    <>
      <h1>This is Trade page </h1>
      <table>
        <tr>
          <th>  First Name  </th>
          <th>  Middle Name </th>
          <th>  Last Name </th>
          <th>  Email </th>
          <th>  Contact </th>
        </tr>
        {customer.map(customer => (
          <tr key={customer.key}>
            <td> {customer.firstName}</td>
            <td> {customer.middleName}</td>
            <td> {customer.lastName}</td>
            <td> {customer.email}</td>
            <td> {customer.contact}</td>
            <td> {} </td>
          </tr>))}

      </table>
    </>
  )
}

export default Pocket;
