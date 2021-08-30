import useNavigationStyles from "./NavigationStyle";
import { Toolbar, Link } from "@material-ui/core";

const sections = [
  { title: "Home", url: "#" },
  { title: "About us", url: "#" },
  { title: "Service", url: "#" },
  { title: "Testimonials", url: "#" },
  { title: "Contact", url: "#" },
];

const index = () => {
  const classes = useNavigationStyles();

  return (
    <div>
      <Toolbar
        component="nav"
        variant="dense"
        className={classes.toolbarSecondary}
      >
        {sections.map((section) => (
          <Link
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            href={section.url}
            className={classes.toolbarLink}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
    </div>
  );
};

export default index;
