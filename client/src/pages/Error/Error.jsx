import error from "../../assets/images/error.svg";
import useStyles from "../../styles/styles";

const Error = () => {
  const classes = useStyles();

  return (
    <div className={classes.error}>
      <img className={classes.errorImg} src={error} alt="" />
    </div>
  );
};

export default Error;
