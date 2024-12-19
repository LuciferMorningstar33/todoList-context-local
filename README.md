# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# TodoList Project

A **TodoList** application built using **React**, **Vite**, **Tailwind CSS**, and the **Context API** for state management. The app persists data locally using the browser's **Local Storage**.

---

## Features

- **Add Tasks**: Quickly add new tasks to your list.
- **Edit Tasks**: Modify task details seamlessly.
- **Delete Tasks**: Remove tasks that are no longer needed.
- **Mark Tasks as Completed**: Easily toggle between completed and incomplete states.
- **Persistent Storage**: Your tasks remain intact even after refreshing the browser, thanks to Local Storage.
- **Responsive Design**: Optimized for all screen sizes using Tailwind CSS.

---

## Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Steps
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd todolist
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open the application:
   Navigate to `http://localhost:5173` in your browser.

---

## Project Structure

```
.
├── src
|   ├── assests
│   ├── components       # Reusable UI components
│   ├── context          # Context API for state management
│   ├── pages            # Application pages
│   ├── styles           # Tailwind CSS setup
│   ├── utils            # Utility functions
│   └── App.jsx          # Main application component
├── public               # Static assets
├── package.json         # Project dependencies and scripts
├── tailwind.config.js   # Tailwind configuration
└── vite.config.js       # Vite configuration
```

---

## Technologies Used

### Frontend
- **React**: Component-based architecture.
- **Vite**: Blazing-fast build tool and development server.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.

### State Management
- **Context API**: Centralized state management for better scalability.

### Storage
- **Local Storage**: Ensures data persistence across browser sessions.

---

## Available Scripts

### `npm run dev`
Starts the development server.

### `npm run build`
Builds the application for production.

### `npm run preview`
Previews the production build locally.

---

## Future Improvements
- Add support for task categories.
- Implement drag-and-drop functionality for task reordering.
- Add a search bar to quickly filter tasks.
- Integrate with a backend API for remote task management.

---

## Contributing

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m "Add feature description"
   ```
4. Push to your branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Acknowledgements

- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Vite Documentation](https://vitejs.dev/guide/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

---

Happy coding! 🎉