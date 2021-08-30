import {
  Paper,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  TextField,
  Button,
} from "@material-ui/core";
import { useRouter } from "next/router";
import { useStylesSearch } from "./SearchStyle";
import { useState, useEffect } from "react";
import clsx from "clsx";
import Autocomplete from "@material-ui/lab/Autocomplete";

const Search = ({ transactions, properties, cities }) => {
  console.log(transactions);
  const router = useRouter();

  const classes = useStylesSearch();

  const [cityTypeField, setCityTypeField] = useState(1);
  const [propertyTypeField, setPropertyTypeField] = useState(1);
  const [transactionTypeField, setTransactionTypeField] = useState(1);
  const [activeProperties, setActiveProperties] = useState([]);

  useEffect(() => {
    const activeProperties = transactions
      .find((transaction) => transaction.id === transactionTypeField)
      .propertyTypes.map((property) =>
        properties.find((p) => p.id === property)
      );

    setActiveProperties(activeProperties);
  }, [transactionTypeField]);

  const setTypeField = (e) => {
    setTransactionTypeField(e.target.value);
  };

  const setPropertyField = (e) => {
    setPropertyTypeField(e.target.value);
  };

  const setCityField = (e, { zip }) => {
    setCityTypeField(zip);
  };

  const searchData = (e) => {
    e.preventDefault();
    router.push(
      `/${transactionTypeField}/${propertyTypeField}/${cityTypeField}`
    );
  };

  return (
    <Paper position="start">
      <form onSubmit={searchData}>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel htmlFor="grouped-native-select">
            What will you do?
          </InputLabel>
          <Select value={transactionTypeField} onChange={setTypeField}>
            {transactions.map((transaction) => (
              <MenuItem key={transaction.id} value={transaction.id}>
                {transaction.slug}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel htmlFor="grouped-select">Type House</InputLabel>
          <Select value={propertyTypeField} onChange={setPropertyField}>
            {activeProperties.map((property) => (
              <MenuItem key={property.id} value={property.id}>
                <em>{property.slug}</em>
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl className={clsx(classes.margin, classes.formControl)}>
          <Autocomplete
            onChange={setCityField}
            options={cities}
            getOptionLabel={(option) => option.slug}
            renderInput={(params) => (
              <TextField
                {...params}
                style={{ width: "100%" }}
                label="City or Zip code"
                className={classes.formControl}
                variant="outlined"
              />
            )}
          />
        </FormControl>
        <FormControl className={classes.formControl}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Search
          </Button>
        </FormControl>
      </form>
    </Paper>
  );
};

export default Search;
