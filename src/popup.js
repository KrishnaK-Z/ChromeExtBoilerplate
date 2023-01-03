import 'libs/polyfills';
import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import Box from 'components/Box';
import Example from 'components/Example';
import defaultTheme from 'themes/default';

const Popup = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Box width="200px" padding={3}>
        <button
          onClick={() => {
            chrome.runtime.sendMessage({ action: 'fill_forms' }, function(response) {
              if (response && response.filled) {
                console.log('Forms filled successfully!');
              } else {
                console.log('Error filling forms.');
              }
            });
          }}
        >
          Auto-fill Forms
        </button>
      </Box>
    </ThemeProvider>
  );
};

const root = document.createElement('div');
document.body.appendChild(root);

ReactDOM.render(<Popup />, root);

// "all_frames": false,
//       "matches": ["http://*/*", "https://*/*"],
//       "js": ["content.js"]
