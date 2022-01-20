import { Flex, Grid } from "@chakra-ui/react";
import { Header } from "../../Components/Header";
import { NewPageTarefas } from "../../Components/NewPageTarefas";
import { useTarefas } from "../../Hooks/TarefasHooks";
import { Search } from "../../Components/Search";
import { CardTasks } from "../../Components/CardTasks";
import { useEffect } from "react";
import { useLogin } from "../../Hooks/LoginHooks";

interface CardProps {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

export const Dashboard = () => {
  const { myTasks, getTasks } = useTarefas();

  const { data } = useLogin();

  useEffect(() => {
    getTasks(data.user.id, data.accessToken);
  }, []);

  return (
    <>
      <Header />
      {myTasks.length > 0 ? (
        <Grid as="main">
          <Search />
          <Grid
            w="100%"
            templateColumns="repeat(auto-fill, minmax(320px, 1fr))"
            gap={10}
            mt="50px"
            paddingX="8"
          >
            {myTasks.map((elem: CardProps) => (
              <CardTasks
                key={elem.id}
                id={elem.id}
                title={elem.title}
                description={elem.description}
                completed={elem.completed}
              />
            ))}
          </Grid>
        </Grid>
      ) : (
        <NewPageTarefas />
      )}
    </>
  );
};
