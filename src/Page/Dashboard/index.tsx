import { Center, Grid, Heading, Text } from "@chakra-ui/react";
import { Header } from "../../Components/Header";
import { NewPageTarefas } from "../../Components/NewPageTarefas";
import { useTarefas } from "../../Hooks/TarefasHooks";
import { Search } from "../../Components/Search";
import { CardTasks } from "../../Components/CardTasks";
import { useEffect, useState } from "react";
import { useLogin } from "../../Hooks/LoginHooks";
import { NotFound } from "../../Components/NotFound";
import { CardSkeleton } from "../../Components/Skeletons/cardSqueleton";

interface CardProps {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

export const Dashboard = () => {
  const [isSearch, setIsSearch] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const { myTasks, getTasks, getTask, notFound } = useTarefas();

  const { data } = useLogin();

  useEffect(() => {
    getTasks(data.user.id, data.accessToken);
  }, []);

  if (notFound) {
    return (
      <>
        <Header />
        <Search setIsSearch={setIsSearch} isSearch={isSearch} />
        <NotFound />
      </>
    );
  }

  return (
    <>
      <Header />
      {myTasks.length > 0 ? (
        <>
          <Grid as="main">
            <Search setIsSearch={setIsSearch} isSearch={isSearch} />
            {isLoading ? (
              <CardSkeleton repeatCount={6} />
            ) : (
              <Grid
                w="100%"
                templateColumns={[
                  "repeat(auto-fill, minmax(320px, 1fr))",
                  "repeat(auto-fill, minmax(425px, 1fr))",
                ]}
                gap={10}
                mt="50px"
                paddingX="8"
              >
                {isSearch
                  ? getTask.length > 0 &&
                    getTask.map((elem: CardProps) => (
                      <CardTasks
                        key={elem.id}
                        id={elem.id}
                        title={elem.title}
                        description={elem.description}
                        completed={elem.completed}
                      />
                    ))
                  : myTasks.map((elem: CardProps) => (
                      <CardTasks
                        key={elem.id}
                        id={elem.id}
                        title={elem.title}
                        description={elem.description}
                        completed={elem.completed}
                      />
                    ))}
              </Grid>
            )}
          </Grid>
        </>
      ) : (
        <NewPageTarefas />
      )}
    </>
  );
};
