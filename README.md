This is a Node.js/Express application that uses server-side rendering and Firestore as the database. The app includes a form page and a success page. After submitting the form, the user is redirected to the success page.

## Getting Started

Follow these instructions to set up and run the project on your local machine.

### Prerequisites

- Node.js (v12.x or later)
- npm (v6.x or later)

### Installation

1. **Clone the Repository**

   You can clone the repository using the following command:

   ```sh
   git clone <your-repo-url>
   ```

2.**Alternatively, you can download the ZIP file from the GitHub repository and unzip it.**
cd <your-project-directory>

3.**Add the .env File**
Create a .env file in the root directory of the project and add the required environment variables:

FIREBASE_API_KEY=your_api_key
FIREBASE_AUTH_DOMAIN=your_auth_domain
FIREBASE_PROJECT_ID=your_project_id
FIREBASE_STORAGE_BUCKET=your_storage_bucket
FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
FIREBASE_APP_ID=your_app_id

4.**Install Dependencies**
npm install

5.**Running the application**
npm start
