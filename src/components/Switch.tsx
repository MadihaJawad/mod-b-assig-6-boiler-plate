import React, { useState } from 'react';
import Switch from '@mui/material/Switch';

export default  function SwitchComponent() {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <Switch checked={checked} onChange={handleChange} name="switch"color="primary"
    />
  );
}

