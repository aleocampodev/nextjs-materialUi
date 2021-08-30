import useStyles from "./HeaderStyle";
import Toolbar from "@material-ui/core/Toolbar";
import Logo from "./Logo/index";
import Navigation from "./Navigation/index";
import ButtonHeader from "./Button/index";

const Header = () => {
  const classes = useStyles();

  return (
    <>
      <Toolbar className={classes.toolbar}>
        <Logo description="Logo de Finca Raiz" />
        <Navigation className="toolbarTitle" />
        <ButtonHeader description="log in" />
      </Toolbar>
    </>
  );
};

export default Header;
