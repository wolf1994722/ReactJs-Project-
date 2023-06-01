import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useFireBase } from "../contexts";
import { Customer } from "../components";

const ViewOrderDeatails = (props) => {
  const params = useParams();
  const firebase = useFireBase();
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    if (firebase.isLoggedIn) {
      const fetchOrders = async () => {
        firebase.getOrders(params.bookId)?.then((result) => {
          setCustomers(result.docs);
        });
      };
      fetchOrders();
    }
  }, [firebase]);

  if (!firebase.isLoggedIn) {
    return (
      <div
        className="d-flex align-items-center justify-content-center flex-column"
        style={{ minHeight: "100vh", background: "#f5f7f6" }}
      >
        <p className="my-1">🙏 Please do Login in</p>
        <Link to={"/login"} className="btn btn-sm btn-dark">
          Login
        </Link>
      </div>
    );
  }

  if(customers.length === 0) {
    return (
      <div
        className="d-flex align-items-center justify-content-center flex-column"
        style={{ minHeight: "100vh", background: "#f5f7f6" }}
      >
        <p className="my-1">🙏 Please wait for some time ⌛ until the user 💁‍♂️ completes the purchase 🛒.</p>
      </div>
    );
  }

  return (
    <>
      <div className="container my-4">
        <div className="row">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Sno</th>
                <th scope="col">Email</th>
                <th scope="col">UserID</th>
                <th scope="col">Qunatity</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer, idx) => {
                return <Customer key={idx} id={idx} {...customer.data()} />;
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ViewOrderDeatails;
