import React from "react";
import "../index.css";
import { useState } from "react";
import { Box, styled } from "@mui/material";
import WcIcon from "@mui/icons-material/Wc";

import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";

import { Controlled as ControlledEditor } from "react-codemirror2";

const Container = styled(Box)`
  flex-grow: 1;
  flex-basic: 0;
  display: flex;
  flex-direction: column;
  padding: 0 8px 8px;
`;

const Heading = styled(Box)`
  background: #1d1e22;
  display: flex;
  padding: 9px 12px;
`;

const Header = styled(Box)`
  display: flex;
  background: #060606;
  color: #aaaebc;
  justify-content: space-between;
  font-weight: 700;
`;

const Editor = ({ heading, icon, color, value, onChange }) => {
  
  const [open, setOpen] = useState(true);

  const handleChange = (editor, data, value) => {
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <Container style={open ? null : {flexGrow: 0 }} >
      <Header>
        <Heading>
          <Box
            component="span"
            style={{
              background: color,
              height: 20,
              width: 20,
              display: "flex",
              placeContent: "center",
              borderRadius: 5,
              marginRight: 5,
              paddingBottom: 2,
              color: "#000",
            }}
          >
            {icon}
          </Box>
          {heading}
        </Heading>
        <WcIcon 
        onClick={() => setOpen(prevState => !prevState)}
         fontSize="small"
        /> 
      </Header>
      <ControlledEditor
        className="controlled-editor"
        value={value}
        onBeforeChange={handleChange}
        options={{
          lineWrapping: true,
          lint: true,

          lineNumbers: true,
          theme: "material",
        }}
      />
    </Container>
  );
};

export default Editor;
