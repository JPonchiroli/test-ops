import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { getFirestoreDatabase, isFirebaseConfigured } from "@/services/firebase";
import type {
  IncomeEntry,
  IncomeEntryInput,
} from "@/services/income-entry-types";

const incomeEntriesCollectionName = "incomeEntries";

function getIncomeEntriesCollection() {
  const database = getFirestoreDatabase();

  if (!database) {
    throw new Error(
      "Firestore não está configurado. Configure as variáveis de ambiente Firebase para habilitar a persistência.",
    );
  }

  return collection(database, incomeEntriesCollectionName);
}

export async function createIncomeEntry(incomeEntry: IncomeEntryInput) {
  if (incomeEntry.amount <= 0) {
    throw new Error("Valor da entrada deve ser maior que zero.");
  }

  const incomeEntriesCollection = getIncomeEntriesCollection();

  const docRef = await addDoc(incomeEntriesCollection, {
    amount: incomeEntry.amount,
    date: incomeEntry.date,
    source: incomeEntry.source,
    title: incomeEntry.title,
    createdAt: new Date().toISOString(),
  });

  return {
    id: docRef.id,
    amount: incomeEntry.amount,
    date: incomeEntry.date,
    source: incomeEntry.source,
    title: incomeEntry.title,
  };
}

export function subscribeToIncomeEntries(
  onIncomeEntriesChange: (entries: IncomeEntry[]) => void,
) {
  if (!isFirebaseConfigured()) {
    onIncomeEntriesChange([]);
    return () => undefined;
  }

  try {
    const incomeEntriesCollection = getIncomeEntriesCollection();
    const incomeEntriesQuery = query(
      incomeEntriesCollection,
      orderBy("createdAt", "desc"),
    );

    return onSnapshot(
      incomeEntriesQuery,
      (snapshot) => {
        const entries = snapshot.docs.map((snapshotDocument) => {
          const documentData = snapshotDocument.data();

          return {
            amount: Number(documentData.amount ?? 0),
            date: String(documentData.date ?? ""),
            id: snapshotDocument.id,
            source: String(documentData.source ?? ""),
            title: String(documentData.title ?? ""),
          };
        });

        onIncomeEntriesChange(entries);
      },
    );
  } catch (error) {
    onIncomeEntriesChange([]);
    return () => undefined;
  }
}
