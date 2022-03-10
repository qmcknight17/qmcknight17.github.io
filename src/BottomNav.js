import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import DateRangeIcon from '@mui/icons-material/DateRange';
import {Route, useNavigate} from "react-router-dom";

import HomeIcon from '@mui/icons-material/Home';
import FlagIcon from '@mui/icons-material/Flag';
const BottomNav = () => {
    const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);

  };
  const navigate = useNavigate();
    return ( 

      // <MenuItem onClick={handleClose}><span onClick={()=> navigate('/Home/Landing')}>Home</span></MenuItem>
      // <MenuItem onClick={handleClose}><span onClick={()=> navigate('/Home/Active')}>Active Workout</span></MenuItem>
      // <MenuItem onClick={handleClose}><span onClick={() => navigate('/Home/Goals')} >Goals</span></MenuItem>
      // <MenuItem onClick={handleClose}><span onClick={() => navigate('/Home/Blog')} >Blog</span></MenuItem>

       


        <BottomNavigation sx={{ width: "100vw" }} value={value} onChange={handleChange}>
        <BottomNavigationAction
          label="Home"
          value="recents"
          icon={<HomeIcon />}
          onClick={()=> navigate('/Home/Landing')}
        />
        <BottomNavigationAction
          label="Blog"
          value="favorites"
          icon={<DateRangeIcon />}
          onClick={() => navigate('/Home/Blog')}
        />
        <BottomNavigationAction
          label="Workout"
          value="nearby"
          icon={<FitnessCenterIcon />}
          onClick={()=> navigate('/Home/Active')}
        />
        <BottomNavigationAction 
        label="Goals" 
        value="Goals" 
        icon={<FlagIcon />}
        onClick={() => navigate('/Home/Goals')} 
        />
      </BottomNavigation>
     );
}
 
export default BottomNav;