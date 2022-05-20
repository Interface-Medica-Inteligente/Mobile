import * as React from "react";
import { CommonActions } from "@react-navigation/native";

interface ResetStackProps {
  route?: string;
}

// Used in App/Containers/RootContainer.tsx
export const navigationRef = React.createRef<any>();

const navigate = (name: string, params?: any) => {
  return navigationRef.current?.navigate(name, params);
};

const resetStack = ({ route = "Prontuario" }: ResetStackProps) => {
  return navigationRef.current?.dispatch(
    CommonActions.reset({
      index: 0,
      routes: [{ name: route }],
    })
  );
};

export default {
  navigate,
  resetStack,
};
