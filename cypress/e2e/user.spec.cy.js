import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage.js';
import DashBoardPage from '../pages/dashboardPage';
import MenuPage from '../pages/menuPage';
import MyInfoPage from '../pages/myInfoPage.js';

const Chance = require('chance');

const chance = new Chance();
const loginPage = new LoginPage()
const dashboardPage = new DashBoardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage

describe('orange hrm test', () => {

  it('User Info Update', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)
    dashboardPage.checkDashboardPage()
    menuPage.accessMyInfo()
    myInfoPage.fillPersonalDetails(chance.first(), chance.last(), chance.string())
    myInfoPage.fillEmployeeDetails('EmployId', 'otherId', '2025-07-29', '123456')
    myInfoPage.fillStatus()
    myInfoPage.saveForm()
  
  })

  })