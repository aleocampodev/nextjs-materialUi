import Button from "@material-ui/core/Button";

const ButtonHeader = ({ description }) => {
  return (
    <Button variant="outlined" size="small">
      {description}
    </Button>
  );
};

export default ButtonHeader;
