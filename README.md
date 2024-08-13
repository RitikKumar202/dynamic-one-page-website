## Task Details

**Task:** Build a Dynamic One-Page Website with React

Your task is to create a dynamic one-page website using React, which includes the following features:

**1. Website Layout:**

- Design a simple, clean one-page website that can optionally display a banner. The banner's visibility should be controllable. 
- Frontend Countdown Display: Implement a countdown timer on the banner, displayed as a reverse clock, that shows the remaining time before the banner disappears.
**2. Internal Dashboard:**

Implement an internal dashboard that allows the following controls:
- **Banner On/Off:** Toggle the visibility of the banner on the main website.
- **Banner Description:** Update the content of the banner's text.
- **Banner Timer:** Set a timer to control how long the banner is displayed. Please make sure in the frontend, there should be a reverse clock showing the countdown. 
- **Banner Link:** Add a clickable link to the banner, directing users to a specified URL

**3. Database Integration:** Use MySQL to store the banner's content, including the description, timer settings, and link. The dashboard should retrieve and update this information in the database.
## Setup Instructions

### Installation

1. Clone the Repository:

```bash
  git clone https://github.com/RitikKumar202/dynamic-one-page-website
```

2. Install Dependencies: Open two terminals and run the below command
```bash
  cd frontend
  npm install

  cd backend
  npm install
```

3. Now in backend folder create .env file and put your MySQL database details
```bash
  DB_HOST = YOUR_DB_HOST
  DB_USER = YOUR_DB_USER
  DB_PASSWORD = YOUR_DB_PASSWORD
  DB_NAME = YOUR_DB_NAME
```

3. Run the Application: Open two terminals and run the below command
```bash
  cd frontend
  npm start

  cd backend
  node server.js
```
Open http://localhost:3000/ in your web browser to access the application.

    
## Technologies Used

- **Frontend:** React.js, HTML, CSS, Axios
- **Backend:** Node.js, Express.js
- **Database:** MySQL

