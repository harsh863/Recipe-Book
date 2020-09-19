export enum RecipeStoreActions {
  GET_PUBLIC_RECIPES = '[Recipe] -> GET PUBLIC RECIPES',
  SAVE_PUBLIC_RECIPES = '[Recipe] -> SAVE PUBLIC RECIPES',

  GET_PRIVATE_RECIPES = '[Recipe] -> GET PRIVATE RECIPES',
  SAVE_PRIVATE_RECIPES = '[Recipe] -> SAVE PRIVATE RECIPES',

  OPEN_RECIPE = '[Recipe] -> OPEN RECIPE',
  CLOSE_RECIPE = '[Recipe] -> CLOSE RECIPE',

  START_RECIPE_ADDITION = '[Recipe] -> START RECIPE ADDITION',
  ADD_RECIPE = '[Recipe] -> ADD RECIPE',

  START_RECIPE_UPDATE = '[Recipe] -> START RECIPE UPDATE',
  UPDATE_RECIPE = '[Recipe] -> UPDATE RECIPE',

  START_RECIPE_DELETION = '[Recipe] -> START RECIPE DELETION',
  DELETE_RECIPE = '[Recipe] -> DELETE RECIPE',

  OPEN_RECIPE_EDIT_WINDOW = '[Recipe] -> OPEN RECIPE EDIT WINDOW',
  CLOSE_RECIPE_EDIT_WINDOW = '[Recipe] -> CLOSE RECIPE EDIT WINDOW',
}
