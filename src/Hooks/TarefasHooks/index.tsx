import {
  useContext,
  createContext,
  useCallback,
  ReactNode,
  useState,
} from "react";
import { api } from "../../Services/api";

interface ChildrenProps {
  children: ReactNode;
}

interface MycardsProps {
  id: string;
  title: string;
  description: string;
  userId: string;
  completed: boolean;
}

interface TarefasProvidersData {
  myTasks: any;
  getTask: any;
  getTasks: (userId: string, accessToken: string) => Promise<void>;
  deleteTasks: (id: any) => Promise<void>;
  updateTask: (
    taskId: number,
    accessToken: string,
    userId: string
  ) => Promise<void>;
  createTasks: (data: any, accessToken: string) => Promise<void>;
  searchTask: (title: string, accessToken: string) => Promise<void>;
}

const TarefasContext = createContext<TarefasProvidersData>(
  {} as TarefasProvidersData
);

export const useTarefas = () => {
  const context = useContext(TarefasContext);

  if (!context) {
    throw new Error("TarefasContext must be used within an Provider");
  }

  return context;
};

export const TarefasProviders = ({ children }: ChildrenProps) => {
  const [token] = useState(localStorage.getItem("@token-doit") || "");

  const [myTasks, setMyTasks] = useState<any[]>([]);

  const [getTask, setGetTask] = useState<any>([]);

  const getTasks = useCallback(async (userId: string, accessToken: string) => {
    // const { data } = response;

    try {
      const response = await api.get(`/tasks?userId=${userId}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      setMyTasks(response.data);
    } catch (err) {
      console.log(err);
    }
  }, []);

  const createTasks = useCallback(async (data: any, accessToken: string) => {
    const response = await api.post("/tasks", data, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  }, []);

  const deleteTasks = useCallback(
    async (id: any) => {
      const response = await api.delete(`/tasks/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const filteredTasks = myTasks.filter((elem: any) => elem.id !== id);
      setMyTasks(filteredTasks);
    },
    [myTasks]
  );

  const updateTask = useCallback(
    async (taskId: number, accessToken: string, userId: string) => {
      const response = await api.patch(
        `/tasks/${taskId}`,
        { completed: true, userId: userId },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
    },
    []
  );

  const searchTask = useCallback(async (title: any, accessToken: string) => {
    console.log(title);
    const response = await api.get(`/tasks?title_like=${title}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    setGetTask(response.data);
  }, []);

  return (
    <TarefasContext.Provider
      value={{
        createTasks,
        myTasks,
        getTasks,
        deleteTasks,
        updateTask,
        searchTask,
        getTask,
      }}
    >
      {children}
    </TarefasContext.Provider>
  );
};
