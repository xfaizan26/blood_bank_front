import React, { useEffect, useState } from "react";
import Layout from "../../components/shared/Layout/Layout";
import moment from "moment";
import API from "../../services/API";

const TranscationHistory = () => {
  const [data, setData] = useState([]);
  //find donar records
  const gethistory = async () => {
    try {
      const  { data } = await API.get("/admin/transaction-history");
      
       if (data?.success) {
        setData(data?.inventory);
         console.log(data);
       }
     } catch (error) {
       console.log(error);
     }
  };

  useEffect(() => {
    gethistory();
  }, []);

  //DELETE FUNCTION
  // const handelDelete = async (id) => {
  //   try {
  //     let answer = window.prompt(
  //       "Are You SUre Want To Delete This Organisation",
  //       "Sure"
  //     );
  //     if (!answer) return;
  //     const { data } = await API.delete(`/admin/delete-donar/${id}`);
  //     alert(data?.message);
  //     window.location.reload();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <Layout>
    <div className="container my-3">
        <h1 className="my-3"> Blood Transactions</h1>
        <table className="table ">
          <thead>
            <tr>
              <th scope="col">Blood Group</th>
              <th scope="col">Inventory Type</th>
              <th scope="col">Quantity</th>
              <th scope="col">Donar Email</th>
              <th scope="col">TIme & Date</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((record) => (
              <tr key={record._id}>
                <td>{record.bloodGroup}</td>
                <td>{record.inventoryType}</td>
                <td>{record.quantity} (ML)</td>
                <td>{record.email}</td>
                <td>{moment(record.createdAt).format("DD/MM/YYYY hh:mm A")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </Layout>
  );
};

export default TranscationHistory;
