import React, { useState } from 'react';
import { InputBase } from "@material-ui/core";
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  inputBase: {
    fontSize: 20,
  },
  input: {
    textAlign: 'center'
  }
});

export default function UserInput({ username, setUsername }) {
  const style = useStyles();

  const [value, setValue] = useState(username);

  const handleOnKeyPress = (event) => {
    if (event.key === 'Enter') {
      setUsername(value);
    }
  };

  return (
    <InputBase
      fullWidth
      className={style.inputBase}
      placeholder="Enter Twitch login…"
      value={value}
      onKeyPress={(event) => handleOnKeyPress(event)}
      onChange={(event) => setValue(event.target.value)}
    />
  );
}
