import { AppBar, Toolbar, Typography } from "@material-ui/core";

const Footer = () => {
  return (
    <div>
      <p>Hola Footer</p>
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Album layout
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Footer;
