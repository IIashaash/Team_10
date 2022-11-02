
### SE PROJECT BY TEAM 10
{ using MERN Stack (MongoDB, Express js, React js, Node js) }
github link -

## We have developed a web application using mern stack for the following modules :

 <b><u>1. Sign up and login  for Everyone:</u></b><br>
  This is for user to login to his/her account. this module also ensures security.

 <b><u>2. Complaint-Requests-and-Requisitions:</u></b><br>
 Received complaint from user and seeks approval and solution from corresponding departments and displays status of the complaint.

 <b><u>3. Contingency-Maintenance,Advanced Request and Settlements:</u></b><br>
 The system should be able to process pre-approval requests on a hierarchical basis and send them to the account section. You can also submit all invoices for payment against advance payments.


 <b><u>4. Budget Approval :</u></b><br>
 Prepare recurring and non-recurring budget for EU department Receiving the budget info from various departments ,etc….and Approving the budget The Finalized Budget Format Is to be Stored in Database. Also track budgets for annual report.

 <b><u>5. Tendering and Vendor management :</u></b><br>
 RFP documents, comparison report, material
supplier details, special terms if any required etc
Prepare vendor list , site visit report, annual
      evaluation report & feedback

 <b><u>6. Campus  property  procurements and maintenance:</u></b><br>
 ALL Details of the Campus Properties are Maintained and
Displayed

  <br>
  <br>
  b><u>6. bills-and-payments:</u></b><br>
  Payments of Various Departments.(CPWD,RWSS,Architects fee.. Etc)

   <br>
   <br>
   <b><u>6.  RFP Section:</u></b><br>
   Preparation of RFP documents, Uploading the RFP documents, Evaluating the RFP documents, Awarding of Works

    <br>
    <br>


## client

* Sign-In & Sign-Up Pages.

* Uses Token based system, so only registered users can access the website  passport js.

* Password hashing using passport js.

* Has a profile page, which will display all information about the signed in user.

* List of setupbudget for users to choose from (transcation & budget).

* Getting list of different transcation budget available.

* has add transcation selection page .

* budget confirmation is done using transcationprocess . This uses react-credit-cards.

* Final page has a budget approved displaying component.

### Back-End

* Uses Express js based application for the backend process.

* Uses MongoDB atlas for storing the collections.

* Uses setupbudget js for authenticating user and token based system.

* Uses setupbudget  js for hashing the budget before sending the data to the cloud.

* This version does not support dynamic seat data being stored from cloud.


This project also demonstrates:

* a typcial React project layout structure




### Steps to run



* Clone this repo

* Install node modules
 * cd {your directory name}
 * cd client
 *  npm install
 * cd..
 * npm run serve


### Then start both frontend and backend in terminal

 * cd client
 * npm start
 * cd..
 * npm run devStart

### All dependencies
<br>

*  client:
  {<br>
  "@testing-library/jest-dom": "^4.2.4",<br>
  "@testing-library/react": "^9.3.2",<br>
  "@testing-library/user-event": "^7.1.2"<br>,
  "@types/date-fns": "^2.6.0",<br>
  "axios": "^0.19.2",<br>
  "bootstrap": "^4.5.0",<br>
  "jwt-decode": "^2.2.0",<br>
  "react": "^16.13.1",<br>
  "react-credit-cards": "^0.8.2",<br>
  "react-datepicker": "^2.16.0",<br>
  "react-dom": "^16.13.1",<br>
  "react-icons": "^3.10.0",<br>
  "react-router-dom": "^5.2.0",<br>
  "react-scripts": "^3.4.4",<br>
  "react-transition-group": "^4.4.1",<br>
  "redux": "^4.0.5"<br>
  }<br>
*  serve::
  {
  "bcrypt": "^4.0.1",<br>
  "bcryptjs": "^2.4.3",<br>
  "body-parser": "^1.19.0",<br>
  "cookie-parser": "~1.4.4",<br>
  "cors": "^2.8.5",<br>
  "debug": "~2.6.9",<br>
  "express": "~4.16.1",<br>
  "express-session": "^1.17.1",<br>
  "jsonwebtoken": "^8.5.1",<br>
  "moment": "^2.26.0",<br>
  "mongoose": "^5.9.16",<br>
  "morgan": "~1.9.1",<br>
  "passport": "^0.4.1",<br>
  "passport-jwt": "^4.0.0",<br>
  "passport-local": "^1.0.0"<br>
  }
