import React from 'react';
import Input from './components/InputComponent';

import { Box } from '@mui/material';
import FruitPicker from './components/SelectComponent';
import Button from './components/Button';
import IconButton from './components/IconButton';

import AddIcon from '@mui/icons-material/Add';
import Table from './components/Table';

import SwitchComponent from './components/Switch';
import DatePickerComponent from './DatePicker';


function App() {
  let tableData =  [
    {
      "title": "book",
      "description": "read it!"
    },
    {
      "title": "clap ",
      "description": "He did a great job!"
    },
    {
      "title": "go inside",
      "description": "The water is cloudy."
    }
  ]
  return (
    <>
      <Box>
        <h1>
          Input component</h1>
        <Input />
        <h1>Select Component</h1>
        <FruitPicker />
        <h1>Button</h1>
        <Button />
        <h1>Icon Button</h1>
        <IconButton iconBtncolor={"warning"} iconBtnicon={<AddIcon />} iconBtnlabel={"add"} />
        <br />
        <h1>Table</h1>
        <Table label="Testing Data"
          cols={
            [
              {
                heading: "Title",
                key: "title",
              },
              {
                heading: "Description",
                key: "description",
              },

            ]
          }
          datasource={tableData}
        />
        <br />





   <h1>Switch component</h1>
      <SwitchComponent />

<h1>Date picker</h1>
<DatePickerComponent />



    </Box>
    </>
  );
}

export default App;
