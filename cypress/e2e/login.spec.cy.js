import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage.js';
import DashBoardPage from '../pages/dashboardPage';

const loginPage = new LoginPage()
const dashboardPage = new DashBoardPage()


describe('Login orange hrm test', () => {


  it('Login Fail', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userFail.username, userData.userFail.password)
    loginPage.checkAccessInvalid()

  })
  
  it('Login Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)
    dashboardPage.checkDashboardPage()
})

})