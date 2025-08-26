# Dynamic Data Management Application

This is a dynamic data management application built with React, Redux Toolkit, and Tailwind CSS. It allows users to add new data entries, manage them through a table, and perform CRUD (Create, Read, Update, Delete) operations. The application also includes search functionality for filtering table data in real-time.

## 🚀 Features

*   **Add New Data:** A user-friendly form allows for the submission of new entries, including `name`, `age`, and `email`.
*   **Create (via `InputNewData`):** A new data entry is created with a unique ID and added to the Redux store.
*   **Read (via `DataTable`):** All data entries are fetched from the Redux store and displayed in a dynamic table.
*   **Update (via `editDataInfo`):** Users can click the "Edit" button on a row to modify an entry, and the changes are saved to the Redux store.
*   **Delete (via `deleteDataFromInfo`):** Each row includes a "Delete" button to remove specific entries from the data table.
*   **Search Functionality:** A search bar filters table entries in real-time based on `name` or `email`, providing a quick way to find specific records.
*   **Redux Toolkit State Management:** The application's state is centrally managed using Redux Toolkit for predictable state updates and a clean data flow.
*   **UI Routing:** React Router is implemented to manage navigation between different parts of the application, such as a signup page and the data table view.
*   **Tailwind CSS:** A utility-first CSS framework is used for a modern and responsive user interface.

## 🛠️ Tech Stack

*   **React:** A JavaScript library for building user interfaces.
*   **Redux Toolkit:** The official toolset for efficient Redux development.
*   **React Router:** A standard library for routing in React.
*   **Tailwind CSS:** A utility-first CSS framework for rapid UI development.

## 📦 Getting Started

### Prerequisites

*   Node.js (version 14 or higher)
*   npm (Node Package Manager)

### Installation

1.  **Clone the repository:**
    
    git clone https://github.com/PrinceSah06/[your-repo-name].git
    cd [your-repo-name]
  
2.  **Install dependencies:**
   
    npm install
 
3.  **Run the application:**
    
    npm run dev
   
    The application will be available at `http://localhost:5173` (or another port depending on your setup).

## 🗺️ Project Structure

Use code with caution.

.
├── src/
│ ├── componets/
│ │ ├── DataTable.jsx
│ │ ├── InputField.jsx
│ │ ├── InputNewData.jsx
│ │ └── SignupPage.jsx
│ ├── utils/
│ │ ├── infoSlice.js
│ │ └── store.js
│ └── App.jsx
├── package.json
└── README.md

## 📈 Feature Development Flow

This project was built incrementally, following a logical progression of feature implementation.

### 1. **Initial Setup and Data Display**
*   **Redux Store Configuration:** Set up the Redux store using `@reduxjs/toolkit` (`store.js`).
*   **Slice Creation:** Defined the `infoSlice` with `initialState` for `info` and `dataBase` (`infoSlice.js`).
*   **Add Functionality:** Created the `InputNewData` and `DataTable` components. The `addDataInfo` reducer and action were implemented to add new entries to the `dataBase` array.
*   **Routing:** Integrated `react-router-dom` to manage navigation between the `SignupPage` and `DataTable`.

### 2. **Implement Edit Functionality**
*   **Reducer:** Added the `editDataInfo` reducer to the `infoSlice.js` to handle updating existing entries based on their unique ID.
*   **State Management:** Implemented local state (`editRowId`, `editFormData`) in `DataTable` to track and manage changes during the edit process.
*   **Actions:** Added "Edit" and "Save" buttons with corresponding `handleEditClick` and `handleSaveClick` functions to dispatch the edit action.

### 3. **Implement Delete Functionality**
*   **Reducer:** Added the `deleteDataFromInfo` reducer to `infoSlice.js`, which uses the `filter` method to remove an item from the `dataBase` array.
*   **Actions:** Added a "Delete" button to each table row with an `onClick` handler that dispatches the `deleteDataFromInfo` action.

### 4. **Implement Search Functionality**
*   **State Management:** Introduced a `searchText` state variable in `DataTable` to store the user's input.
*   **Filtering Logic:** Added the `filterData` function to dynamically filter the data from the Redux store based on the search term.
*   **Rendering:** The table's `map` function was updated to display the `filterData` array, providing real-time search results.

### 5. **Add Basic Sorting Logic**
*   **State Management:** Added a `sortConfig` state to track the sorting key and direction.
*   **Handlers:** Created the `handelclickDirection` function to update the `sortConfig` when a header is clicked.
*   **Rendering:** Added `onClick` handlers to the table headers to enable sorting.

## 🤝 Contributing

Contributions are welcome! If you find a bug or have an idea for an improvement, please open an issue or submit a pull request.
