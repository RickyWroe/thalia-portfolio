# React Best Practices - Tips for Writing Better React Code

*By Jean-Marc Möckel | February 3, 2022*

## Table of Contents

- [Three Major Challenges React Developers Face](#three-major-challenges-react-developers-face)
- [Learn The Building Blocks of React](#learn-the-building-blocks-of-react)
- [Learn How to Build Clean, Performant and Maintainable React Components](#learn-how-to-build-clean-performant-and-maintainable-react-components)
- [Tips to Help You Write Better React Code - The Cherries on Top](#tips-to-help-you-write-better-react-code---the-cherries-on-top)
- [Final Words](#final-words)

---

## Three Major Challenges React Developers Face

During two years of using React on a daily basis, three major challenges emerge that React developers face when building their apps. Ignoring these challenges might bring hard times that harm the growth of your app.

### ⚙️ Maintainability

This goes hand in hand with *reusability*. At the beginning when the application and the components are very lightweight, they're easy to maintain. But once the requirements start growing, components tend to become very complex and therefore less maintainable.

Common issues include:
- Components with many different cases, each representing a different outcome
- JSX flooded with conditional renderings (ternary operators and `&&` operators)
- Classnames applied conditionally
- Components using huge `switch` statements
- Many possible prop and state values, each responsible for a different outcome

The more complexity and different outcomes a component has (polymorphism), the more difficult it becomes to maintain. Root causes are often:
- Laziness
- Not enough experience
- Time pressure to refactor properly
- No or little testing

### 🧠 Solid Understanding of React

Another root cause for problems is a poor basic understanding of how React works under the hood. Many people jump too fast into intermediate or advanced concepts without having a solid foundation.

Not having a solid understanding of React can cause issues like headaches when wanting to use different component lifecycles without knowing how to actually use them.

### 📈 Scalability

This challenge goes hand in hand with *maintainability*. It is not only specific to React, but applies generally in software.

The quality of software rises or falls with its ability to scale. When you keep *maintainability* and *scalability* in mind when orchestrating your components and organizing your project structure, you'll be less likely to end up with a mess of source code that needs major refactoring.

---

## Learn the Building Blocks of React

### Why Solid Foundations Matter

Manifesting the building blocks is not only relevant to learning React, but to other technologies or programming languages as well. You can't build a skyscraper on a sandy foundation and expect it to be solid.

**Important:** Learning React doesn't make sense if you don't have a solid foundation in Vanilla JavaScript. If you're not feeling very comfortable with JavaScript already, spend more time strengthening it first.

### Essential React Concepts

As a bare minimum, you should understand all topics in the [Main Concepts Chapter](https://reactjs.org/docs/hello-world.html) and the [Hooks Chapter](https://reactjs.org/docs/hooks-intro.html) of the official React docs.

#### Most Important Concepts to Know:

- What is "state"?
- Ups and downs of class and functional components
- What are component re-renderings and how do they work?
- How to trigger re-renderings
- Different component lifecycles and how to interact with them
- Virtual DOM
- Benefits of CSR (Client Side Rendering) and SSR (Server Side Rendering)
- Controlled vs. Uncontrolled Components
- State Lifting
- At least one global state management technology (Context API, Redux/Toolkit, Recoil)
- Component Patterns (especially how to choose the right pattern)

---

## Learn How to Build Clean, Performant and Maintainable React Components

### 📁 Create a Good Folder Structure

Organizing your files and folders inside your React application is mandatory for maintainability and scalability. A good folder structure depends on the size of your application and your team.

Don't over-engineer it, but maintain a proper structure that is best suited for your current application and your team size.

### 👇 Maintain a Structured Import Order

Files can become bloated with import statements mixed up with external imports from third-party packages and internal imports.

**Bad Example:**
```javascript
import React, { useState, useEffect, useCallback } from "react";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Title from "../components/Title";
import Navigation from "../components/Navigation";
import DialogActions from "@material-ui/core/DialogActions"
import { getServiceURL } from '../../utils/getServiceURL";
import Grid from "@material-ui/core/Grid";
```

**Better Version:**
```javascript
// Built-in
import React, { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Formik } from "formik";
import axios from 'axios';

// External (Material-UI)
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Box from "@material-ui/core/Box";
import DialogActions from "@material-ui/core/DialogActions";
import Grid from "@material-ui/core/Grid";
import { DatePicker } from "@material-ui/pickers";

// Internal
import { getServiceURL } from '../../utils/getServiceURL";
import { sectionTitleEnum } from "../../constants";
import CustomButton from "../components/CustomButton";
import Title from "../components/Title";
import Navigation from "../components/Navigation";
import Paragraph from "../components/Paragraph";
```

**Import Structure:**
1. Built-in imports (like 'react')
2. External imports (third-party node modules)
3. Internal imports

### 📔 Learn Different Component Patterns

Learning different component patterns is essential as you become more experienced. Every pattern serves a certain purpose. For example, the compound component pattern avoids unnecessary *prop-drilling* of many component levels.

**Personal guideline:** Try to think about a different way/pattern if you start to pass props through more than two component levels.

### 🔒 Use a Linter and Follow Its Rules

A linter helps you write better code in general. When using `create-react-app`, ESLint is already configured.

Benefits:
- Observes JavaScript code and reminds you of errors
- Catches errors you'd more likely catch when executing the code
- Can adjust style checking
- Great for teams to maintain consistent code style

Combine ESLint with JSPrettify for formatting.

### 🧪 Test Your Code

Testing ensures you're doing your job more professionally and delivering higher quality software.

**Benefits of Testing:**
- Ensures nothing breaks when integrating new features
- Helps organize code to pass tests
- Forces thinking about goals before writing code
- Serves as documentation for new developers
- Saves extra work in the future

**Key Areas:**
- What should the component do?
- What important edge cases might arise?
- Can the component be more pure (serve one purpose)?

### 🧰 Integrate TypeScript (or at least use default props and prop types)

TypeScript provides:
- Static type checking
- Better code completion in your IDE (intellisense)
- Improved developer experience
- Catching type errors while writing code

If you don't want to use TypeScript, at a bare minimum use `prop-types` and `default-props` for your components.

### 💎 Use Lazy-Loading / Code Splitting

Most React apps will have their files "bundled" using tools like Webpack, Rollup, or Browserify. Bundling merges imported files into a single file: a "bundle."

**The Problem:** As your app grows, your bundle grows. Especially when using big third-party libraries, the bundle needs to be loaded completely even when the user needs only a fraction of the code.

**The Solution:** Code splitting allows you to create multiple bundles and load them dynamically, helping you lazy load only what's needed.

### 🗄️ Extract Reusable Logic into Custom Hooks

Hooks allow us to reuse stateful logic without changing our component hierarchy.

**Example - Window Size Hook:**

**Before:**
```javascript
const ScreenDimensions = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <p>Current screen width: {windowSize.width}</p>
      <p>Current screen height: {windowSize.height}</p>
    </>
  )
}
```

**After (Custom Hook):**
```javascript
const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
}

const ScreenDimensions = () => {
  const windowSize = useWindowSize()

  return (
    <>
      <p>Current screen width: {windowSize.width}</p>
      <p>Current screen height: {windowSize.height}</p>
    </>
  )
}
```

### 🖥️ Handle Errors Effectively

Handling errors effectively is often overlooked. Once you've been in nasty situations where better error handling could have saved time, you realize it's mandatory for production applications.

#### React Error Boundary

A custom class component used as a wrapper that catches errors during the rendering phase:

```javascript
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log the error to an error reporting service
    errorService.log({ error, errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return <h1>Oops, something went wrong.</h1>;
    }
    return this.props.children;
  }
}
```

**Limitation:** Doesn't handle errors in asynchronous callbacks, server-side rendering, or event handlers.

#### Use try-catch for Asynchronous Code

```javascript
const UserProfile = ({ userId }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [profileData, setProfileData] = useState({})

  useEffect(() => {
    const getUserDataAsync = async () => {
      try {
        const userData = await axios.get(`/users/${userId}`)
        if (!userData) {
          throw new Error("No user data found")
        }
        setProfileData(userData.profile)
      } catch(error) {
        errorService.log({ error })
        setProfileData(null)
      } finally {
        setIsLoading(false)
      }
    }

    getUserDataAsync()
  }, [])

  if (isLoading) {
    return <div>Loading ...</div>
  }

  if (!profileData) {
    return <ErrorUI />
  }

  return (
    <div>
      ...User Profile
    </div>
  )
}
```

#### Use react-error-boundary Library

This library combines ErrorBoundary with additional features:

```javascript
import { ErrorBoundary } from 'react-error-boundary'

const ErrorComponent = ({ error, resetErrorBoundary }) => {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
    </div>
  )
}

const App = () => {
  const logError = (error, errorInfo) => {
    errorService.log({ error, errorInfo })
  }

  return (
    <ErrorBoundary
      FallbackComponent={ErrorComponent}
      onError={logError}
    >
      <MyErrorProneComponent />
    </ErrorBoundary>
  );
}
```

#### Logging Errors

Use a logging service instead of `console.log` for production. Personal recommendation: **Sentry**.

### ☝️ Keep Your Key Prop Unique Across Your Whole App

When mapping over an array, the key prop must be unique across your entire application, not just within the map function.

**Bad Example (Using Index):**
```javascript
const SeasonScores = ({ seasonScoresData, currentRoster }) => {
  return (
    <>
      <h3>Our scores in this season:</h3>
      {seasonScoresData.map((score, index) => (
        <div key={index}>
          <p>{score.opponent}</p>
          <p>{score.value}</p>
        </div>
      ))}
      
      <h3>Our current roster:</h3>
      {currentRoster.map((player, index) => (
        <div key={index}>
          <p>{player.name}</p>
          <p>{player.position}</p>
        </div>
      ))}
    </>
  )
}
```

**Good Example (Using Unique IDs):**
```javascript
const SeasonScores = ({ seasonScoresData, currentRoster }) => {
  return (
    <>
      <h3>Our scores in this season:</h3>
      {seasonScoresData.map((score) => (
        <div key={score.id}>
          <p>{score.opponent}</p>
          <p>{score.value}</p>
        </div>
      ))}
      
      <h3>Our current roster:</h3>
      {currentRoster.map((player) => (
        <div key={player.id}>
          <p>{player.name}</p>
          <p>{player.position}</p>
        </div>
      ))}
    </>
  )
}
```

If items don't have unique IDs, use a library like `uuidv4` to generate them.

---

## Tips to Help You Write Better React Code - The Cherries on Top

### 🪄 Implement the useReducer Hook Earlier

When components have many `useState` hooks, consider using `useReducer` for better organization.

**Personal Rule:** Implement `useReducer` if the component exceeds four `useState` hooks, or if the state is more complex than just a boolean.

**Before (Multiple useState):**
```javascript
const CustomersMap = () => {
  const [isDataLoading, setIsDataLoading] = useState(false)
  const [customersData, setCustomersData] = useState([])
  const [hasError, setHasError] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [hasMapLoaded, setHasMapLoaded] = useState(false)
  const [mapData, setMapData] = useState({})
  const [formData, setFormData] = useState({})
  const [isBtnDisabled, setIsBtnDisabled] = useState(false)

  return ( ... )
}
```

**After (useReducer):**
```javascript
const initialState = {
  isDataLoading: false,
  customerData: [],
  hasError: false,
  isHovered: false,
  hasMapLoaded: false,
  mapData: {},
  formdata: {},
  isBtnDisabled: false
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'POPULATE_CUSTOMER_DATA':
      return {
        ...state,
        customerData: action.payload
      }
    case 'LOAD_MAP':
      return {
        ...state,
        hasMapLoaded: true
      }
    default: {
      return state
    }
  }
}

const CustomersMap = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return ( ... )
}
```

### 🔌 Use Shorthand for Boolean Props

**Instead of:**
```javascript
<RegistrationForm hasPadding={true} withError={true} />
```

**Use:**
```javascript
<RegistrationForm hasPadding withError />
```

### 👎 Avoid Curly Braces for String Props

**Instead of:**
```javascript
<Paragraph variant={"h5"} heading={"A new book"} />
```

**Use:**
```javascript
<Paragraph variant="h5" heading="A new book" />
```

### 🧹 Erase Non-HTML Attributes When Spreading Props

Always extract non-HTML attributes from props before spreading to avoid browser warnings.

**Bad:**
```javascript
const MainTitle = ({ isBold, children, ...restProps }) => {
  return (
    <h1
      style={{
        fontWeight: isBold ? 600 : 400,
        padding: restProps.hasPadding ? 16 : 0
      }}
      {...restProps}
    >
      {children}
    </h1>
  )
}
```

**Good:**
```javascript
const MainTitle = ({ isBold, children, hasPadding, ...restProps }) => {
  return (
    <h1
      style={{
        fontWeight: isBold ? 600 : 400,
        padding: hasPadding ? 16 : 0
      }}
      {...restProps}
    >
      {children}
    </h1>
  )
}
```

### 🔥 Use Snippet Extensions

Snippet extensions increase productivity by avoiding repetitive boilerplate code.

**Recommendation:** Beginners should type boilerplate by hand to build muscle memory. Use snippets only after you can type it in your sleep.

**Popular Extensions:**
- ES7+ React/Redux/React-Native snippets
- JavaScript (ES6) code snippets
- Simple React Snippets

### ❌ Write a Fragment When a div is Not Needed

**Instead of:**
```javascript
const InfoText = () => {
  return (
    <div>
      <h1>Welcome!</h1>
      <p>This is our new page, we're glad you're here!</p>
    </div>
  )
}
```

**Use:**
```javascript
const InfoText = () => {
  return (
    <>
      <h1>Welcome!</h1>
      <p>This is our new page, we're glad you're here!</p>
    </>
  )
}
```

### 👈 Integrate Self-Closing Tags When No Children are Needed

**Instead of:**
```javascript
<NavigationBar></NavigationBar>
```

**Use:**
```javascript
<NavigationBar />
```

### ✅ Follow Common Naming Conventions

#### Use PascalCase for:
- React components
- TypeScript interfaces
- Type aliases

```javascript
// React component
const LeftGridPanel = () => { ... }

// TypeScript interface
interface AdminUser {
  name: string;
  id: number;
  email: string;
}

// TypeScript Type Alias
type TodoList = {
  todos: string[];
  id: number;
  name: string;
}
```

#### Use camelCase for:
- Variables
- Arrays
- Objects
- Functions

```javascript
const getLastDigit = () => { ... }
const userTypes = [ ... ]
```

**Important:** Naming React components in PascalCase is crucial for linters to recognize them as components.

### 🧨 Sanitize Your Code to Prevent XSS Attacks

When using `dangerouslySetInnerHTML`, always sanitize the code first to prevent cross-site-scripting (XSS) attacks.

**Use dompurify library:**
```javascript
import DOMPurify from 'dompurify';

const Markup = () => {
  const htmlString = "<p>This is set via dangerouslySetInnerHTML</p>"
  const sanitizedHTML = DOMPurify.sanitize(htmlString)

  return (
    <div dangerouslySetInnerHTML={{ __html: sanitizedHTML }} />
  )
}
```

---

## Final Words

This guide is a collection of tips and best practices accumulated over two years of React development. The goal is to share experiences to help you avoid harder times during your React learning and development journey.

Remember:
- Adapt what's useful for your situation
- Don't take everything for granted
- Build your own stack of best practices

Keep learning, keep improving, and happy coding! 🚀