import React from "react";
import StickyNote2Icon from '@mui/icons-material/StickyNote2';

// A component was created to add icon to subject line of homeage and important page.

function Header() {
  return (
    <header>
      <h1>
        <StickyNote2Icon fontSize="large" />
        Notepad
      </h1>
    </header>
  );
}

export default Header;
