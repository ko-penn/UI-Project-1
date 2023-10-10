import Home from './pages/Home';
import NavBar from './components/NavBar';
import Gear from './components/Gear';
import Explore from './pages/Explore';
import Route from './pages/Route';
import Data from './pages/Data';
import Settings from './pages/Settings';
import Back from './components/Back';
import Bluetooth from './pages/Bluetooth';
import BlueBack from './components/BlueBack';
import BorderLines from './components/BorderLines';
import BTDev from './components/BTDevice';
import BluetoothDevice from './pages/BluetoothDevice';
import Dev from './components/Dev';
import ProjInfo from './components/ProjInfo';

function App(){
  let Component = Home;
  switch(window.location.pathname){
    case "/":
      Component = Home
      break
    case "/Explore":
      Component = Explore
      break
    case "/Route":
      Component = Route
      break
    case "/Data":
      Component = Data
      break
    case "/Settings":
      Component = Settings
      break
    case "/Bluetooth":
      Component = Bluetooth
      break
    case "/BluetoothDevice":
      Component = BluetoothDevice
      break
  }
  if (Component == Home){
    return (
      <>
        <BorderLines></BorderLines>
        <Gear></Gear>
        <Component></Component>
        <BTDev></BTDev>
        <ProjInfo></ProjInfo>
      </>
    )
  }
  else if (Component == Settings){
    return (
      <>
        <BorderLines></BorderLines>
        <Back></Back>
        <Settings></Settings>
        <BTDev></BTDev>
        <ProjInfo></ProjInfo>
      </>
    )
  }
  else if (Component == Bluetooth){
    return(
      <>
        <BorderLines></BorderLines>
        <BlueBack></BlueBack>
        <Bluetooth></Bluetooth>
        <BTDev></BTDev>
        <ProjInfo></ProjInfo>
      </>
    )
  }
  else if (Component == Explore){
    return(
      <>
        <BorderLines></BorderLines>
        <Gear></Gear>
        <Component></Component>
        <NavBar c1="expbut2" c2="roubut1" c3="datbut1"></NavBar>
        <BTDev></BTDev>
        <ProjInfo></ProjInfo>
      </>
    )
  }
  else if (Component == Route){
    return(
      <>
        <BorderLines></BorderLines>
        <Component></Component>
        <Gear></Gear>
        <NavBar c1="expbut1" c2="roubut2" c3="datbut1"></NavBar>
        <BTDev></BTDev>
        <ProjInfo></ProjInfo>
      </>
    )
  }
  else if (Component == Data){
    return(
      <>
        <BorderLines></BorderLines>
        <Gear></Gear>
        <Component></Component>
        <NavBar c1="expbut1" c2="roubut1" c3="datbut2"></NavBar>
        <BTDev></BTDev>
        <ProjInfo></ProjInfo>
      </>
    )
  }
  else if (Component == BluetoothDevice){
    return(
      <>
        <BorderLines></BorderLines>
        <Component></Component>
        <Dev></Dev>
        <ProjInfo></ProjInfo>
      </>
    )
  }
  else {
    return(
      <>
        <BorderLines></BorderLines>
        <Gear></Gear>
        <Component></Component>
        <NavBar></NavBar>
        <BTDev></BTDev>
        <ProjInfo></ProjInfo>
      </>
    )
  }
}

export default App; 