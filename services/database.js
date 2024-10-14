import * as SQLite from 'expo-sqlite';




const db = SQLite.openDatabase('db.db');


export const createTable = () => {
  // A table for save letters and his status of lesson
  db.transaction(tx => {
    tx.executeSql(
      'create table if not exists letters (id integer primary key not null, letter text, status text);'
    );
  });
};

export const insertLetter = (letter, status) => {
  db.transaction(
    tx => {
      tx.executeSql('insert into letters (letter, status) values (?, ?)', [
        letter,
        status,
      ]);
    },
    null,
  );
};

export const updateLetter = (id, status) => {
  db.transaction(
    tx => {
      tx.executeSql('update letters set status = ? where id = ?', [status, id]);
    },
    null,
  );
}


//select method
export const selectAll = (callback) => {
  db.transaction(
    tx => {
      tx.executeSql('select * from letters', [], (_, { rows }) =>
        callback(rows._array)
      );
    },
    null,
  );
};

// get specific letter
export const selectLetter = (id, callback) => {
  db.transaction(
    tx => {
      tx.executeSql('select * from letters where id = ?', [id], (_, { rows }) =>
        callback(rows._array)
      );
    },
    null,
  );
};

