import React from 'react';
import PropTypes from 'prop-types';
import {default as MUIButton} from '@mui/material/Button';
import { useTheme } from '@mui/material';


/**
 * Primary UI component for user interaction
 */
const Button = ({label, onClick, ...props }) => {
  const theme = useTheme();
  return (
    <MUIButton
    onClick={onClick}
    label={props.label}
    sx={{backgroundColor: theme.palette.primary.main, color: theme.palette.background.default}}
    >
      {label}
    </MUIButton>
  );
};

// Button.propTypes = {
//   /**
//    * Is this the principal call to action on the page?
//    */
//   primary: PropTypes.bool,
//   /**
//    * What background color to use
//    */
//   backgroundColor: PropTypes.string,
//   /**
//    * How large should the button be?
//    */
//   size: PropTypes.oneOf(['small', 'medium', 'large']),
//   /**
//    * Button contents
//    */
//   label: PropTypes.string.isRequired,
//   /**
//    * Optional click handler
//    */
//   onClick: PropTypes.func,
// };

// Button.defaultProps = {
//   backgroundColor: null,
//   primary: false,
//   size: 'medium',
//   onClick: undefined,
// };

export default Button;