
import { ACCOUNT_ROUTE, ADMIN_ROUTE, COURSE_ROUTE, COURSEPAGE_ROUTE,GUIDE_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SANDBOX_ROUTE, TRAINER_ROUTE } from './utils/consts';
import { Account } from "./pages/Account.jsx";
import { Admin } from "./pages/Admin.jsx";
import { Auth }  from './pages/Auth.jsx';
import { Sandbox } from './pages/Sandbox.jsx';
import { Trainer } from './pages/Trainer.jsx';
import { Course } from './pages/Course.jsx';
import { Guide } from './pages/Guide.jsx';
import { CoursePage } from './pages/CoursePage.jsx';
export const authRoutes=[

 {
  path: ACCOUNT_ROUTE,
  Component: Account
 }
]
export const publicRoutes=[
  {
    path: ADMIN_ROUTE,
    Component: Admin
   },
   {
    path: COURSEPAGE_ROUTE,
    Component: CoursePage
   },
  {
    path: LOGIN_ROUTE,
    Component: Auth
  },
{
    path: REGISTRATION_ROUTE,
    Component: Auth
},
{
  path:SANDBOX_ROUTE,
  Component:Sandbox
},
{
  path:TRAINER_ROUTE,
  Component:Trainer,
},
{
  path:COURSE_ROUTE,
  Component:Course
},
{
  path:GUIDE_ROUTE,
  Component:Guide
}
]