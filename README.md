# Audio Player Sample Project
A simple web-based audio player built using MERN-stack having different programs and different tracks. This project is intended to be the first assessment task for Innerbhakti Technologies.

## Badges
[![Licence](https://img.shields.io/github/license/Ileriayo/markdown-badges?style=for-the-badge)](./LICENSE)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![Bootstrap](https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-%23404d59.svg?logo=express&logoColor=%2361DAFB)


## Features

- **Different Programs**: Curated Playlists for everyone's different music taste . <br />
- **Audio Controls**: High Quality music. Can Play, Pause, Rewind, Forward the music accordingly. <br />
- **Note**: This project has been built to function as a music player, but can tweak add any sort of audios. (like podcasts, speeches, spiritual-talks, etc).


## Setting up Environment Variables

- To run this project locally, follow these steps to configure your environment variables:

1. Clone the repo:
   ```bash
   git clone https://github.com/siddharthruria/audio-player-program.git
   ```
   
2. Navigate to the project directory:
   ```bash
   cd audio-player-program
   ```
   
3. Create a .env file here
   ```bash
   touch .env
   ```
   
4. Add the following variables to your .env file: Open the .env file in your preferred text editor and add the following:
   ```bash
   MONGO_URI=your_mongo_database_connection_string   
   PORT=your_desired_port_number
   ```
- Replace 'your_mongo_database_connection_string' with your MongoDB connection URI.<br />
- Replace 'your_desired_port_number' with a port number for your server.<br />


### a. Running the project

- After you have successfully set up the environment variables in the .env file, follow the below mentioned instructions.
1. Make sure you're in the main project root folder [ audio-player-program ]: 

2. Now navigate to the server (backend) folder and install dependancies:
   ```bash
   cd server
   npm i
   ```

3. Run the express server now:
   ```bash
   nodemon index.js
   ```
   
4. Now navigate to client (frontend) folder and install dependancies:
   ```bash
   cd ../client
   npm i
   ```

5. Run the React client here:
   ```bash
   npm run start
   ```
   
### b. Direct Website Link
https://audio-player-client.onrender.com/

## Feedback

If you have any feedback, please reach out to me at siddharthruria10@gmail.com

Thank You.
## 🔗 Connect with Me
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/ruria-siddharth/)
[![X](https://img.shields.io/badge/X-%23000000.svg?style=for-the-badge&logo=X&logoColor=white)](https://x.com/ruriaxcodes)
