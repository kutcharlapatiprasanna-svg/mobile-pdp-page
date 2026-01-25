import React from 'react';
import MenuComponent from './Components/MenuComponent/MenuComponent';
import WheelChair from './Components/WheelChair/WheelChair';
import ThingsComponent from './Components/ThingsComponent/ThingsComponent';
import Driveimage from './Components/Driveimage/Driveimage';
import Products from './Components/Products/Products';
import ActionsPage from './Components/ActionsPage/ActionsPage';
import Features from './Components/Features/Features';
import Specifications from './Components/Specifications/Specifications';
import Resources from './Components/Resources/Resources';
import Accessories from './Components/Accessories/Accessories';

// import YouMayAlsoLike from './Components/YouMayAlsoLike/YouMayAlsoLike';

const App = () => {
  return (
    <div>
      <Driveimage/>
      <MenuComponent/>
      <WheelChair/>
      <ThingsComponent/>
      <Products/>
      <ActionsPage/>
      <Features/>
      <Specifications/>
      <Resources/>
      <Accessories/>
      {/* <YouMayAlsoLike/> */}
    </div>
  );
}

export default App;
