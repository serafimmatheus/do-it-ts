import { ComponentType } from "react";
import { Redirect, Route as ReactRoute, RouteProps } from "react-router-dom";
import { useLogin } from "../Hooks/LoginHooks";

interface Props extends RouteProps {
  isPrivate?: boolean;
  component: ComponentType;
}

export const Route = ({
  isPrivate = false,
  component: Conponent,
  ...rest
}: Props) => {
  const { data } = useLogin();
  return (
    <ReactRoute
      {...rest}
      render={() =>
        isPrivate === !!data.accessToken ? (
          <Conponent />
        ) : (
          <Redirect to={isPrivate ? "/" : "/dashboard"} />
        )
      }
    />
  );
};
