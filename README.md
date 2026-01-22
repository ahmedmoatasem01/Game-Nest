# GameNest - A Gaming Platform

<div align="center">

**A unified gaming platform designed to combine the best features into a comprehensive hub for gamers**

[![.NET](https://img.shields.io/badge/.NET-8.0-purple.svg)](https://dotnet.microsoft.com/)
[![ASP.NET Core](https://img.shields.io/badge/ASP.NET%20Core-Razor%20Pages-blue.svg)](https://dotnet.microsoft.com/apps/aspnet)
[![SQL Server](https://img.shields.io/badge/SQL%20Server-Database-red.svg)](https://www.microsoft.com/sql-server)

</div>

---

## 📋 Table of Contents

- [About](#about)
- [Project Information](#project-information)
- [Features](#features)
- [System Users](#system-users)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Database Schema](#database-schema)
- [Pages Overview](#pages-overview)
- [Installation & Setup](#installation--setup)
- [Contact](#contact)

---

## 🎮 About

GameNest is a unified gaming platform designed to combine the best features into a comprehensive hub for gamers. The platform provides a social space for gamers to discover upcoming game releases, follow updates on existing games, troubleshoot errors, and engage in community-driven discussions for solving problems.

The platform allows users to create personal profiles, add friends, and communicate via chat or voice calls. Additionally, it features game news feeds, forums for discussing game-related issues, and developer support for reporting crashes and errors. GameNest aims to create a tight-knit gaming community where players can share experiences, support each other, and stay updated on the latest trends in the gaming world.

---

## 📚 Project Information

- **Course**: CSAI 202 - Introduction to Database Systems
- **University**: Zewail City of Science, Technology and Innovation
- **School**: School of Computational Sciences and Artificial Intelligence
- **Semester**: Fall 2024
- **Developer**: Ahmed Moatasem 

---

## ✨ Features

### Core Functionalities

- 🔐 **User Authentication**: Secure login and sign-up system
- 👤 **User Profiles**: Customizable profiles with gaming preferences and achievements
- 👥 **Social Features**: Add friends, manage friend lists, and track gaming activity
- 💬 **Communication**: Text and voice chat capabilities
- 📝 **Community Forums**: Post and engage in game-related discussions
- 🐛 **Bug Reporting**: Report bugs, crashes, and game-related issues
- 🎮 **Game Discovery**: Browse games, follow releases, and view game details
- 📊 **Leaderboards**: Track rankings, scores, and win rates
- 📅 **Events**: Calendar for tournaments, cups, leagues, and game releases
- 🔔 **Notifications**: Alerts for game releases, updates, and community events
- 🛒 **Game Shop**: Browse and purchase games with filtering options

---

## 👥 System Users

### 1. Gamers

Gamers are players who use the platform for gaming-related discussions and support.

**Key Features:**
- Create and customize user profiles with gaming preferences and achievements
- Add friends and manage a friend list
- Chat with friends and other gamers via text or voice
- Post and engage in game-related discussions and forums
- Report bugs, crashes, and game-related issues
- Follow upcoming game releases and news updates
- Participate in community discussions for troubleshooting and problem-solving
- Share gameplay clips and screenshots with friends or in forums
- View friends' gaming activity and track their achievements
- Receive notifications about game releases, updates, and community events

### 2. Game Developers

Game developers are people or companies who publish and manage games on the platform.

**Key Features:**
- Announce and promote upcoming game releases
- Manage and update game details (release dates, patches, etc.)
- Respond to gamer feedback and provide technical support for game issues
- Monitor error reports from gamers and deliver patches or fixes
- Gather user feedback to improve the gaming experience
- Post updates on game patches, DLC releases, and bug fixes
- Organize game-related events, such as tournaments or in-game challenges
- View player statistics and feedback to enhance games
- Offer exclusive in-game content or updates to users on the platform
- Track user-generated content for moderation and feedback purposes

### 3. Administrators

Administrators are the technical and managerial team overseeing platform stability and user management.

**Key Features:**
- Manage platform infrastructure and ensure stability
- Monitor system performance, including server and database health
- Handle system backups and ensure data security and privacy compliance
- Set and enforce high-level user permissions for the platform
- Analyze platform usage data and prepare reports for platform improvements
- Update and roll out new features or system updates
- Oversee technical support for users, developers, and moderators
- Maintain security protocols to prevent data breaches and cyber threats
- Manage resource allocation for server and platform scaling
- Ensure legal compliance with data management and user privacy laws

---

## 🛠️ Technology Stack

### Backend
- **.NET 8.0**: Core framework
- **ASP.NET Core Razor Pages**: Web application framework
- **C#**: Programming language
- **SQL Server**: Database management system
- **System.Data.SqlClient**: Database connectivity

### Frontend
- **HTML5/CSS3**: Markup and styling
- **JavaScript**: Client-side scripting
- **Bootstrap 5**: CSS framework for responsive design
- **jQuery**: JavaScript library
- **jQuery Validation**: Form validation

### Development Tools
- **Visual Studio / Visual Studio Code**: IDE
- **SQL Server Management Studio**: Database management

---

## 📁 Project Structure

```
GameNest/
├── GameNest/
│   ├── Pages/              # Razor Pages
│   │   ├── Index.cshtml    # Login/Sign Up page
│   │   ├── Home.cshtml     # Community home page
│   │   ├── Profile.cshtml  # User profile page
│   │   ├── Games.cshtml    # Games shop page
│   │   ├── Friends.cshtml  # Friends and chat page
│   │   ├── Event.cshtml    # Events calendar page
│   │   ├── Profile.cshtml  # Leaderboard page
│   │   └── Shared/         # Shared layouts and partials
│   ├── wwwroot/            # Static files
│   │   ├── css/            # Stylesheets
│   │   ├── js/             # JavaScript files
│   │   └── lib/            # Third-party libraries
│   ├── Properties/         # Project properties
│   ├── Program.cs          # Application entry point
│   ├── appsettings.json    # Configuration
│   └── GameNest.csproj     # Project file
└── GameNest.sln            # Solution file
```

---

## 🗄️ Database Schema

### Entities

1. **User Profile**: Contains user information, friends, achievements, and settings
2. **Friend**: Represents a connection between two users on the platform
3. **Game**: Detailed information about games listed, including titles, descriptions, developers, and updates
4. **Forum Post**: User-generated content in the form of discussions or questions about gaming topics
5. **Chat**: Conversation logs between users (both text and voice)
6. **Error Report**: Data collected from users experiencing crashes or bugs
7. **Notification**: Alerts for new messages, game releases, updates, and friend requests
8. **Developer Profile**: Profile of game developers or companies managing the games
9. **Moderator Profile**: Information about platform moderators, their permissions, and activities
10. **Achievement**: In-game accomplishments tracked for each gamer
11. **Game Patch**: Updates or bug fixes released by developers for games
12. **Event**: Scheduled events like game tournaments or community discussions
13. **Voice Call**: Logs and data for voice conversations between users
14. **Post Reaction**: User feedback (likes, dislikes, comments) on forum posts
15. **DLC**: Downloadable content (in-game purchases) managed by developers

### Key Relationships

- **User Profile ↔ Games**: Users are linked to the games they play, rate, or host events for
- **User Profile ↔ Friend**: Many-to-many relationship for friend connections
- **User Profile ↔ Forum Post**: Users create forum posts of different types
- **User Profile ↔ Payment**: Users make payments for various in-game purchases or services
- **Games ↔ Events**: Games are linked to events hosted for them
- **Games ↔ Developers**: Developers manage the games they create or are associated with
- **Games ↔ Feedback**: Games receive feedback from users
- **Games ↔ Leaderboard**: Each game has a leaderboard where user scores and ranks are displayed
- **Events ↔ User Profile**: Users can own or participate in events related to specific games
- **Admin ↔ User Profile**: Admins manage user profiles and handle permissions
- **Admin ↔ Games**: Admins are responsible for overseeing the games available on the platform
- **Forum Post ↔ Forum Post Type**: Each forum post has a specific type (question, discussion, issue)
- **Leaderboard ↔ User Profile**: Users are ranked and scored on the leaderboard
- **Feedback ↔ Developer**: Feedback is linked to the developers responsible for the games
- **Inventory System ↔ Games**: The inventory system tracks game-related items or assets
- **Inventory System ↔ Payments**: Payments are associated with transactions for items stored in the inventory
- **Notifications ↔ User Profile**: Notifications are sent to users for events, requests, or updates
- **Notifications ↔ Requests**: Notifications can be tied to specific user requests or actions

---

## 📄 Pages Overview

### 1. Login/Sign Up Page (`Index.cshtml`)

**Description**: Entry point for the platform featuring both login and sign-up functionality in a single interface.

**Features:**
- Secure user authentication
- User registration with username, email, password, and age
- Password confirmation
- Toggle between sign-in and sign-up forms
- Password recovery option
- Welcome message and branding

### 2. Home Page (`Home.cshtml`)

**Description**: Community hub where users can post comments and read posts from other GameNest users.

**Features:**
- Create new posts with title and description
- View community posts
- React to existing posts (likes, comments)
- Community engagement and discussions
- News feed of gaming-related content

### 3. Profile Page (`Profile.cshtml`)

**Description**: User profile page displaying gamer information, achievements, and activity.

**Features:**
- User bio and personal information
- Gaming achievements and rankings
- Location and profile customization
- Create posts section
- Follower and following statistics
- Gaming statistics and accomplishments

### 4. Games Shop Page (`Games.cshtml`)

**Description**: Digital storefront where users can browse and purchase video games.

**Features:**
- Game catalog with covers, titles, and prices
- Filter by genre and price range
- Discount percentages display
- Game details and descriptions
- Purchase functionality

### 5. Friends and Chat Page (`Friends.cshtml`)

**Description**: Social interaction interface for communicating with friends.

**Features:**
- Friend list management
- Text chat functionality
- Voice call initiation
- Message history
- Online status indicators

### 6. Event Page (`Event.cshtml`)

**Description**: Calendar interface showing events, cups, leagues, and game releases.

**Features:**
- Calendar view of events
- Event details and information
- Remove event functionality
- Tournament and league schedules
- Game release dates

### 7. Leaderboard Page (`Profile.cshtml`)

**Description**: Ranking display showing player statistics and competitive standings.

**Features:**
- Player rankings
- Scores and match statistics
- Win rate percentages
- Regional rankings
- Match history

---

## 🚀 Installation & Setup

### Prerequisites

- [.NET 8.0 SDK](https://dotnet.microsoft.com/download/dotnet/8.0)
- [SQL Server](https://www.microsoft.com/sql-server/sql-server-downloads) (Express edition is sufficient)
- [Visual Studio 2022](https://visualstudio.microsoft.com/) or [Visual Studio Code](https://code.visualstudio.com/)
- [SQL Server Management Studio (SSMS)](https://docs.microsoft.com/sql/ssms/download-sql-server-management-studio-ssms) (optional, for database management)

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd GameNest
   ```

2. **Restore NuGet packages**
   ```bash
   dotnet restore
   ```

3. **Configure the database**
   - Update the connection string in `appsettings.json` or `appsettings.Development.json`
   - Run the database scripts to create the schema and tables

4. **Build the project**
   ```bash
   dotnet build
   ```

5. **Run the application**
   ```bash
   dotnet run
   ```

6. **Access the application**
   - Open your browser and navigate to `https://localhost:5001` or `http://localhost:5000`
   - The exact URL will be displayed in the console output

### Configuration

Update the connection string in `appsettings.json`:

```json
{
  "ConnectionStrings": {
    "DefaultConnection": "Server=localhost;Database=GameNestDB;Trusted_Connection=True;TrustServerCertificate=True;"
  }
}
```

---

## 📧 Contact

For inquiries or support, please contact:

**Email**: ahmedmoatasem11@gmail.com

---

## 📝 License

This project is developed as part of the CSAI 202 course at Zewail City University.

---

## 🙏 Acknowledgments

- Zewail City of Science, Technology and Innovation
- School of Computational Sciences and Artificial Intelligence
- Course Instructors and Teaching Assistants

---

<div align="center">

**Made with ❤️ by Ahmed Moatasem**

*Fall 2024 - CSAI 202 - Introduction to Database Systems*

</div>
