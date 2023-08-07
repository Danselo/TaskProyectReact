import { TodoTitle } from "../Components/TodoTitle";
import { TodoFilter } from "../Components/TodoFilter";
import { TodoList } from "../Components/TodoList";
import { TodoItem } from "../Components/TodoItem";
import { TodoButtonAdd } from "../Components/TodoButtonAdd";
import { SectionForDesktop } from "../Components/SectionForDesktop";
import { TaskError } from "../Components/TaskError";
import { TaskLoading } from "../Components/TaskLoading";
import { EmptyTask } from "../Components/EmptyTask";
import { TodoContext } from "../Components/TodoContext";
import { useContext } from "react";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";

export function AppUI(
) {
  const{
    searchValue,
    deleteTask,
    changeStateTask,
    error,
    loading,
    openModal,
  } = useContext(TodoContext)
  return (
    <>
    <main className="section-main">
        <SectionForDesktop />
        <section className="section-tasks">
          <TodoTitle  />
          <TodoFilter/>
          <TodoButtonAdd />
              <TodoList>
                {loading && <TaskLoading/>}
                {error && <TaskError/>}
                {(!loading && searchValue.length === 0) && 
                  <EmptyTask/>
                }

                {searchValue.map((item) => (
                  <TodoItem
                    key={item.title}
                    title={item.title}
                    completed={item.completed}
                    onComplete={() => changeStateTask(item.title)}
                    onDelete={() => deleteTask(item.title)}
                  />
                ))}
              </TodoList>
              {openModal && (
                <Modal>
                  <TodoForm />
                </Modal>
              )}
        </section>
      </main>
    </>
  );
}
