import React, { useEffect, useState } from "react";
import { db } from "./firebase";
import { addDoc, collection, doc, getDocs } from "firebase/firestore";

function NestedCollection() {
  const [data, setData] = useState([]);
  const handledAdd = (e) => {
    e.preventDefault();

    const val = doc(db, "usuarios", "Y3yo8XHNpHeinIHM7N5k");
    const CollectionVal = collection(val, "gastos");

    addDoc(CollectionVal, {
      title: e.target.title.value,
      concepto: e.target.concepto.value,
      fecha: e.target.fecha.value,
    });
    alert("added...");
  };

  //mostrarDatos
  useEffect(() => {
    const getValue = async () => {
      const val = doc(db, "usuarios", "Y3yo8XHNpHeinIHM7N5k");
      const CollectionVal = collection(val, "gastos");

      const getValue = await getDocs(CollectionVal);
      setData(getValue.doc.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    //
  }, []);
  console.log(data);
  return (
    <div>
      <form onSubmit={(e) => handledAdd(e)}>
        <input name="title" type="number" placeholder="cantidad" />
        <br />
        <input name="concepto" placeholder="concepto" />
        <br />
        <input name="fecha" type="date" />
        <br />

        <button>Add</button>
      </form>
    </div>
  );
}
export default NestedCollection;
