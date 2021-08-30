import { makeStyles } from "@material-ui/core/styles";

export const useStylesSearch = makeStyles((theme) => ({
  formControl: {
    padding: theme.spacing(1),
    width: "25%",
  },
  submit: {
    height: 56,
  },
}));
