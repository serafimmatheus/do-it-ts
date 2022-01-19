import { Button, Flex, Grid, Text } from "@chakra-ui/react";
import { Header } from "../../Components/Header";
import { NewPageTarefas } from "../../Components/NewPageTarefas";
import { useTarefas } from "../../Hooks/TarefasHooks";
import { Search } from "../../Components/Search";
import { CardTasks } from "../../Components/CardTasks";

interface CardProps {
  id: number;
  title: string;
  description: string;
}

export const Dashboard = () => {
  const { myTasks } = useTarefas();

  return (
    <>
      <Header />
      {myTasks.length > 0 ? (
        <Grid as="main">
          <Search />
          <Flex
            padding="20px"
            flexDirection={["column", "column", "row", "row"]}
            flexWrap="wrap"
            justifyContent={["space-between", "space-evenly", "space-evenly"]}
          >
            {/* <CardTasks />
            <CardTasks />
            <CardTasks />
            <CardTasks />
            <CardTasks />
            <CardTasks />
            <CardTasks />
            <CardTasks />
            <CardTasks /> */}
            {myTasks.map((elem: CardProps) => (
              <CardTasks
                key={elem.id}
                title={elem.title}
                description={elem.description}
                id={elem.id}
              />
            ))}
          </Flex>
        </Grid>
      ) : (
        <NewPageTarefas />
      )}
    </>
  );
};
