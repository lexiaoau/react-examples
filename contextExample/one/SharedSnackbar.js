import { IconButton, Snackbar } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import React from 'react';
import { SharedSnackbarConsumer } from './SharedSnackbarProvider';  // why import like this ??????

const SharedSnackbar = () => (
  <SharedSnackbarConsumer>
    {({ snackbarIsOpen, message, closeSnackbar }) => (
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        open={snackbarIsOpen}
        autoHideDuration={6000}
        onClose={closeSnackbar}
        message={message}
        action={[
          <IconButton key="close" color="inherit" onClick={closeSnackbar}>
            <Close />
          </IconButton>,
        ]}
      />
    )}
  </SharedSnackbarConsumer>
);

export default SharedSnackbar;
