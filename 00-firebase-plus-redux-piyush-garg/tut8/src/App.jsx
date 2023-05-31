import React, { useState } from "react";
import { app } from "./firebase";
import {
  collection,
  addDoc,
  getFirestore,
  getDoc,
  doc,
  query,
  where,
  getDocs,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

const db = getFirestore(app);

function App() {
  const [dataArr, setDataArr] = useState([]);

  const addData = async () => {
    try {
      const docRef = await addDoc(collection(db, "users"), {
        Name: "papu",
        Age: 2,
        isMale: true,
      });
      console.log("Document written with ID: ", docRef.id);
      console.log(docRef);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const nestedSubCollectionAddData = async () => {
    try {
      const docRef = await addDoc(
        collection(db, "users/1cMpZKk1qRTmwOSMneTB/purchases"),
        {
          Name: "Laptop HP Ryzen 5",
          Price: 1815,
        }
      );
      console.log("Document written with ID: ", docRef.id);
      console.log(docRef);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const getDocument = async () => {
    const tmp = async () => {
      const docRef = doc(db, "users", "1cMpZKk1qRTmwOSMneTB");
      const docSnap = await getDoc(docRef);
      setDataArr([]);

      if (docSnap.exists()) {
        setDataArr((prev) => {
          return [...prev, docSnap.data()];
        });
        console.log("Document data:", docSnap.data());
      } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
      }
    };
    await tmp();
  };

  const getAllCollection = async () => {
    const q = query(collection(db, "users"));
    setDataArr([]);

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      setDataArr((prev) => {
        return [...prev, doc.data()];
      });
      console.log(doc.id, " => ", doc.data());
    });
  };

  const getCollectionQuery = async () => {
    const q = query(collection(db, "users"), where("isMale", "==", false));
    setDataArr([]);

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      setDataArr((prev) => {
        return [...prev, doc.data()];
      });
      console.log(doc.id, " => ", doc.data());
    });
  };

  const getUpdate = async () => {
    const userRef = doc(db, "users", "1cMpZKk1qRTmwOSMneTB");

    await updateDoc(userRef, {
      Name: "yash badmash 🔥",
    });
  };

  const deleteData = async () => {
    await deleteDoc(doc(db, "users", "E4gNXk4GuQkZQrgzO74O"));
  };

  return (
    <>
      <h1>Writting Data 🐇🔥 in FireStore</h1>
      <button onClick={addData} style={{ margin: "0 10px 0 0" }}>
        Add Data
      </button>
      <button onClick={nestedSubCollectionAddData}>Nested Add Data</button>

      <h1>Reading Data 🔥🐇</h1>
      <button onClick={getDocument} style={{ margin: "0 10px 0 0" }}>
        Get Data with id
      </button>
      <button onClick={getAllCollection} style={{ margin: "0 10px 0 0" }}>
        Get Data Collection
      </button>
      <button onClick={getCollectionQuery} style={{ margin: "0 10px 0 0" }}>
        Get Data Collection with condition
      </button>
      <button onClick={() => setDataArr([])}>Clear Data</button>
      {dataArr &&
        dataArr.map((data, idx) => {
          return (
            <div key={idx}>
              <p>Name: {data.Name}</p>
              <p>Age: {data.Age}</p>
              <p>Is Male: {data.isMale.toString()}</p>
              <hr />
            </div>
          );
        })}

      <h1>Update Data 🐇🔥</h1>
      <button onClick={getUpdate}>get Update</button>

      <h1>Delete Data 🐇🔥</h1>
      <button onClick={deleteData}>Delete User</button>
    </>
  );
}

export default App;
