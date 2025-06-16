"use client";

import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase/init";

export default function People() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const querySnapshot = await getDocs(collection(db, "people"));
      const results: any = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPeople(results);
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1>Family Members</h1>
      <ul>
        {people.map((p: any) => (
          <li key={p.id}>
            {p.name} {p.familyId} {p.photoUrl}
          </li>
        ))}
      </ul>
    </div>
  );
}
