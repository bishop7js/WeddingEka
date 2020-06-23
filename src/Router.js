import React from 'react';
import {Scene, Router, Actions} from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';
import Testing from './components/Testing';
import WelcomeScreen from './components/WelcomeScreen';
import CategoryScreen from './components/CategoryScreen';
import Photography from './components/usersView/Photography';
import PhotographyProfile from './components/usersView/PhotographyProfile';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar>
        <Scene key="welcomeScreen" hideNavBar>
          <Scene key="welcome" component={WelcomeScreen} title="Welcome" />
          <Scene
            key="category"
            component={CategoryScreen}
            title="Category Screen"
          />
          <Scene
            key="photography"
            component={Photography}
            title="Photographers"
          />
          <Scene
            key="photographyProfile"
            component={PhotographyProfile}
            title="Photographer's Profile"
          />
        </Scene>

        <Scene key="auth" hideNavBar>
          <Scene key="login" component={LoginForm} title="Please Login" />
        </Scene>

        <Scene key="main">
          <Scene
            tabBarStyle={{backgroundColor: 'red'}}
            rightTitle="POST NEW AD"
            onRight={() => Actions.employeeCreate()}
            key="employeeList"
            component={EmployeeList}
            title="YOUR ADS"
            initial
          />
          <Scene
            key="employeeCreate"
            component={EmployeeCreate}
            title="CREATE NEW AD"
          />
          <Scene
            key="employeeEdit"
            component={EmployeeEdit}
            title="EDIT YOUR AD"
          />
          <Scene key="testing" component={Testing} title="Testing page" />
        </Scene>
      </Scene>
    </Router>
  );
};

// const styles = {
//   viewStyle: {
//     backgroundColor: '#755000',
//     justifyContent: 'center',
//     alignItems: 'center',
//     height: 60,
//     paddingTop: 2,
//     shadowOffet: {width: 0, height: 2},
//     shadowOpacity: 0.2,
//     elevation: 2,
//     position: 'relative',
//   },
// };

export default RouterComponent;
