Redux Folder Structure

src/
├── store/
│   └── store.js                  # Configures Redux store and registers all reducers
├── features/
│   └── product/
│       ├── api/
│       │   └── productAPI.js     # Contains Axios functions to call backend product APIs
│       ├── actions/
│       │   └── productThunks.js  # Defines async Redux actions using createAsyncThunk
│       ├── reducers/
│       │   └── productReducer.js # Contains Redux slice with initialState and reducers
│       └── index.js              # Re-exports reducer and actions for easy imports
├── services/
│   └── axiosInstance.js          # Configures Axios with baseURL and default settings





Routing 

src/
└── router/
    ├── AppRouter.jsx         # Main router that defines all <Routes> and page paths
    ├── PrivateRoute.jsx      # Protects authenticated (private) routes
    └── PublicRoute.jsx       # Blocks access to auth pages for already logged-in users


