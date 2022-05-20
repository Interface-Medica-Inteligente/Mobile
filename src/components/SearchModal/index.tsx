import React from "react";
import { Controller, useForm } from "react-hook-form";
import { Text } from "react-native";
import ReactNativeModal from "react-native-modal";
import { useDispatch, useSelector } from "react-redux";
import { Actions as RecordActions } from "../../reducers/record";
import { Actions as RecipeActions } from "../../reducers/recipe";
import recipeSelector from "../../selectors/recipeSelector";
import { ButtonLarge } from "../ButtonLarge";
import { Input } from "../Input";

import { Container, RecipeContainer, RecipeTitle } from "./styles";

const SearchModal = ({ visible, type, onClose }) => {
  return (
    <ReactNativeModal
      isVisible={visible}
      backdropTransitionOutTiming={0}
      backdropOpacity={0.5}
      onModalHide={onClose}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}
    >
      <Container>
        <Content type={type} onClose={onClose} />
      </Container>
    </ReactNativeModal>
  );
};

const Content = ({ type, onClose }) => {
  const recipes = useSelector(recipeSelector.getRecipes);
  const dispatch = useDispatch();
  const { control, handleSubmit } = useForm();

  if (type === "RECORD") {
    const onSubmit = (data) => {
      dispatch(RecordActions.ui.requestSearchRecord(data));
    };

    return (
      <>
        <Controller
          name="cpf"
          control={control}
          render={({ field: { value, onChange } }) => (
            <Input
              placeholder="CPF"
              autoCompleteType="name"
              autoCapitalize="none"
              keyboardType="numeric"
              autoCorrect={false}
              value={value}
              onChangeText={onChange}
            />
          )}
        />
        <ButtonLarge text="Buscar" secondary onPress={handleSubmit(onSubmit)} />
      </>
    );
  }

  const onSubmit = (data) => {
    dispatch(RecipeActions.ui.requestFilterRecipe(data));
  };

  return (
    <>
      <Controller
        name="medicines"
        control={control}
        render={({ field: { value, onChange } }) => (
          <Input
            placeholder="Medicamento"
            autoCompleteType="name"
            autoCapitalize="none"
            autoCorrect={false}
            value={value}
            onChangeText={onChange}
            onSubmitEditing={handleSubmit(onSubmit)}
          />
        )}
      />
      {recipes.map((item) => (
        <RecipeItem {...item} onClose={onClose} />
      ))}
    </>
  );
};

const RecipeItem = ({ onClose, ...recipe }) => {
  const dispatch = useDispatch();

  const handleSelectedRecipe = () => {
    dispatch(RecipeActions.entities.setSelectedRecipe(recipe));
    onClose();
  };

  return (
    <RecipeContainer onPress={handleSelectedRecipe}>
      <RecipeTitle>{recipe.medicines}</RecipeTitle>
      <RecipeTitle>{recipe.revenueDate}</RecipeTitle>
    </RecipeContainer>
  );
};

export { SearchModal };
