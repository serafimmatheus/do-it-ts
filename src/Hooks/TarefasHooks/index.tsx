import jwtDecode from "jwt-decode";
import {
  useContext,
  createContext,
  useCallback,
  ReactNode,
  useState,
  useEffect,
} from "react";
import { api } from "../../Services/api";

interface ChildrenProps {
  children: ReactNode;
}

interface TarefasProvidersData {
  handleTasks: (data: any) => Promise<void>;
  myTasks: any;
  getTasks: () => Promise<void>;
  deleteTasks: (id: any) => Promise<void>;
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

  const decoder: any = jwtDecode(token);

  const [myTasks, setMyTasks] = useState<any>([]);

  const getTasks = useCallback(async () => {
    const response = await api.get("/tasks", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const { data } = response;

    setMyTasks([...myTasks, data]);
  }, []);

  useEffect(() => {
    getTasks();
  }, []);

  const handleTasks = useCallback(async ({ title, description }: any) => {
    const response = await api.post(
      "/tasks",
      {
        title: title,
        description: description,
        userId: decoder.sub,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  }, []);

  const deleteTasks = useCallback(async (id: any) => {
    const response = await api.delete(`/tasks/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }, []);

  return (
    <TarefasContext.Provider
      value={{ handleTasks, myTasks, getTasks, deleteTasks }}
    >
      {children}
    </TarefasContext.Provider>
  );
};
