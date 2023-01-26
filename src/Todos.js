import { Container, Box, Typography, Paper } from "@mui/material";
import { useState, useEffect } from "react";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

import {
  collection,
  addDoc,
  getDocs,
  getDoc,
  doc,
  deleteDoc
} from "firebase/firestore";
import { db } from "./firebase";
import { async } from "@firebase/util";
import "./styles.css";

export default function Todos() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const fetchPost = async () => {
    await getDocs(collection(db, "todos")).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id
      }));

      setTodos(newData);
      //alert(todos, newData);
    });
  };

  useEffect(() => {
    fetchPost();
  }, []);

  const addTodo = async (e) => {
    e.preventDefault();

    //alert(db);

    try {
      const docRef = await addDoc(collection(db, "todos"), {
        todo: todo
      });
      alert("Document written with ID: ", docRef.id);
    } catch (e) {
      alert(`error adding document ${e}`);
    }
  };

  const onDeleteTodo = async (todo) => {
    alert(`${JSON.stringify(todo)}`);

    try {
      await deleteDoc(doc(db, "todos", todo.id));
    } catch (e) {
      alert(e);
    }
  };

  return (
    <section className="todo-container">
      <div className="todo">
        <h1 className="header">Todo-App</h1>

        <div>
          <div>
            <input
              type="text"
              placeholder="What do you have to do today?"
              onChange={(e) => setTodo(e.target.value)}
            />
          </div>

          <div className="btn-container">
            <button type="submit" className="btn" onClick={addTodo}>
              Submit
            </button>
          </div>
        </div>

        <Box
          sx={{ display: "flex", gap: 2, flexDirection: "column" }}
          className="todo-content"
        >
          {todos?.map((todo, i) => (
            <Paper elevation={3} sx={{ p: 2 }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between"
                }}
              >
                <p key={i}>{todo.todo}</p>{" "}
                <HighlightOffIcon
                  className="del"
                  onClick={(e) => onDeleteTodo(todo)}
                  color="error"
                />
              </Box>
            </Paper>
          ))}
        </Box>
      </div>
    </section>
  );
}
