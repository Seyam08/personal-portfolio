import { Link } from "react-router-dom";
import CodeBlock from "../components/subComponents/CodeBlock";
import Heading from "../components/subComponents/Heading";
import Title from "../components/subComponents/Title";

export const projects = [
  {
    preview: "https://ezy-event.netlify.app/",
    title: "ezyEvent - Event Management System",
    description:
      "ezyEvent is a full-stack event platform with a React.js/Vite frontend and Node.js/Express backend. The frontend uses RTK Query for API calls and JWT authentication, organized by features for scalability. The backend offers a RESTful API with MongoDB, handling CRUD operations for events/users with secure JWT/bcrypt auth. Following monorepo architecture, it cleanly separates client and server code while enabling seamless communication via REST standards.",
    thumbnail:
      "https://raw.githubusercontent.com/Seyam08/ezyEvent/refs/heads/main/dashboard.png",
    stack: ["React", "Redux", "Tailwind CSS", "Express.js", "MongoDB", "Git"],
    slug: "ezy-event",
    repo: "https://github.com/Seyam08/ezyEvent",
    content: (
      <>
        <Title>🚀 How It Works</Title>

        <Title>Frontend (Client)</Title>

        <ul>
          <li>
            Built with <strong>React.js + Vite</strong>
          </li>
          <li>
            Uses <strong>RTK Query</strong> for API communication
          </li>
          <li>Protected routes with JWT authentication</li>
          <li>Feature-based architecture</li>
        </ul>

        <Title>Backend (Server)</Title>

        <ul>
          <li>
            RESTful API with <strong>Node.js/Express</strong>
          </li>
          <li>MongoDB database</li>
          <li>JWT authentication</li>
          <li>CRUD operations for events/users</li>
        </ul>

        <Title>🔌 API Connection</Title>

        <p>The frontend communicates with backend via:</p>

        <ul>
          <li>All requests require valid JWT (except login/register)</li>
          <li>Standard REST conventions (GET/POST/PUT/DELETE)</li>
        </ul>

        <Title>📚 Documentation</Title>

        <ul>
          <li>
            <Link
              to={"https://github.com/Seyam08/ezyEvent/tree/main/client"}
              target="_blank"
            >
              📖 Frontend Details
            </Link>
          </li>
          <li>
            <Link
              to={"https://github.com/Seyam08/ezyEvent/tree/main/server"}
              target="_blank"
            >
              🔌 API Endpoints
            </Link>
          </li>
        </ul>

        <Title>Key features of this README:</Title>

        <ol>
          <li>Visualizes the monorepo structure</li>
          <li>Clearly separates frontend/backend concerns</li>
          <li>Shows how they connect</li>
          <li>Provides minimal but complete setup instructions</li>
          <li>Links to detailed docs for each part</li>
          <li>Maintains clean formatting</li>
        </ol>

        <Heading>Lesson learned</Heading>

        <Title>RTK Query Mastery</Title>
        <ul>
          <li>API endpoint declaration (createApi)</li>
          <li>Structured code organization (injectEndpoints)</li>
          <li>Automatic caching/revalidation</li>
          <li>Optimistic updates</li>
          <li>Custom query hooks generation</li>
        </ul>

        <Title>Backend API Skills</Title>
        <ul>
          <li>RESTful endpoint design</li>
          <li>File uploads with Multer</li>
          <li>JWT authentication flow</li>
          <li>Session-based auth alternatives</li>
          <li>CORS configuration</li>
          <li>CRUD operation implementation</li>
        </ul>

        <Title>Key Takeaways</Title>
        <ul>
          <li>RTK Query eliminates manual caching logic</li>
          <li>Endpoint structure improves maintainability</li>
          <li>JWT provides stateless auth</li>
          <li>Multer handles file processing</li>
          <li>CORS secures cross-origin requests</li>
        </ul>
      </>
    ),
  },
  {
    preview: "https://pill-splitter-peach.vercel.app/",
    title: "Pill Splitter",
    description:
      "A practice project originally given as an interview task by Pathao. Although I couldn’t participate at that time due to academic exams, I later took it as a personal challenge and successfully completed it. The task was designed with a tight 12-hour deadline, but I invested about 24–30 hours over 3 days to build and refine the solution. This project pushed me to handle complex canvas interactions from scratch using React, TypeScript, and Tailwind CSS.",
    thumbnail:
      "https://raw.githubusercontent.com/Seyam08/pill-splitter/main/screenshot.PNG",
    stack: ["React", "TypeScript", "Tailwind CSS"],
    slug: "pillsplitter",
    repo: "https://github.com/Seyam08/pill-splitter",
    content: (
      <>
        <Title>Features</Title>
        <ul>
          <li>
            🖱️ Draw Rectangles – Click and drag on the empty canvas area to
            create rectangles.
          </li>
          <li>
            🔄 Move Rectangles – Drag existing rectangles to reposition them
            anywhere on the canvas.
          </li>
          <li>
            ✂️ Split Rectangles – Click inside a rectangle to split it:
            <ul>
              <li>2-way horizontal split</li>
              <li>2-way vertical split</li>
              <li>4-way split</li>
            </ul>
          </li>
          <li>
            🧹 Clear All – Use the dedicated control button to remove all
            rectangles from the canvas.
          </li>
          <li>
            🎯 Visual Feedback – Crosshairs and live drawing previews for a
            smoother user experience.
          </li>
        </ul>

        <Title>Tech Stack</Title>
        <ul>
          <li>
            ⚛️ React (with TypeScript) – For building interactive UI components
          </li>
          <li>🎨 Tailwind CSS – For modern and responsive styling</li>
          <li>⚡ Vite – For fast development and bundling</li>
          <li>
            🖥️ Vanilla Implementation – All canvas logic built from scratch (no
            external libraries)
          </li>
        </ul>

        <Title>Installation</Title>
        <p>Install this app with npm</p>
        <ol>
          <li>
            <p>Clone the repository:</p>
            <p>
              <CodeBlock>
                git clone https://github.com/Seyam08/pill-splitter.git
              </CodeBlock>
            </p>
          </li>
          <li>
            <p>Navigate to the project directory:</p>
            <p>
              <CodeBlock>cd pill-splitter</CodeBlock>
            </p>
          </li>
          <li>
            <p>Install the dependencies:</p>
            <p>
              <CodeBlock>npm install</CodeBlock>
            </p>
          </li>
          <li>
            <p>Start the application (development):</p>
            <p>
              <CodeBlock>npm run dev</CodeBlock>
            </p>
          </li>
          <li>
            <p>Build command:</p>
            <p>
              <CodeBlock>npm run build</CodeBlock>
            </p>
          </li>
          <li>
            <p>Preview build:</p>
            <p>
              <CodeBlock>npm run preview</CodeBlock>
            </p>
          </li>
        </ol>

        <Title>Screenshots</Title>
        <p>
          <img
            alt="App Screenshot"
            src="https://raw.githubusercontent.com/Seyam08/pill-splitter/main/screenshot.PNG"
          />
        </p>

        <Title>Authors</Title>
        <ul>
          <li>
            <a href="https://www.github.com/Seyam08">Seyam Hossain</a>
          </li>
        </ul>

        <Title>Lessons Learned</Title>
        <ul>
          <li>Managing complex canvas interactions with React state</li>
          <li>Practiced TypeScript for type safety in UI logic</li>
          <li>Improved UI/UX design skills with TailwindCSS</li>
          <li>
            Learned to build canvas logic fully from scratch without external
            libraries
          </li>
        </ul>
      </>
    ),
  },
  {
    preview: "https://parkreserve.netlify.app/",
    title: "Parking Reserve App",
    description:
      "A web application for reserving parking spots. It has several features, including vehicle type selection, spot choosing, and detailed information about the owner. Based on this information, the app generates a token that serves as the identifier for the booking. The app also includes a token removal option for discharging vehicles.",
    thumbnail:
      "https://raw.githubusercontent.com/Seyam08/parking-app/main/park-reserve.PNG",
    stack: ["React", "Redux", "Tailwind CSS"],
    slug: "parkreserve",
    repo: "https://github.com/Seyam08/parking-app",
    content: (
      <>
        <Title>Features</Title>
        <ul>
          <li>Vehicle type select option.</li>
          <li>Parking sopt choosing option.</li>
          <li>Details information about reserver</li>
          <li>
            A token will be generated when the user clicks the &apos;Get
            Token&apos; button
          </li>
          <li>
            Token list will be available on the left side of panel, also token
            can be removed.
          </li>
          <li>Already booked spot marked.</li>
          <li>Token details will shown in a popup screen</li>
        </ul>
        <Title>Installation</Title>
        <p>Install this app with npm</p>
        <ol>
          <li>
            <p>Clone the repository:</p>
            <p>
              <CodeBlock>
                git clone https://github.com/Seyam08/parking-app.git
              </CodeBlock>
            </p>
          </li>
          <li>
            <p>Navigate to the project directory:</p>
            <p>
              <CodeBlock>cd parking-app</CodeBlock>
            </p>
          </li>
          <li>
            <p>Install the dependencies:</p>
            <p>
              <CodeBlock>npm install</CodeBlock>
            </p>
          </li>
          <li>
            <p>Start the application:</p>
            <p>Development version</p>
            <p>
              <CodeBlock>npm run dev</CodeBlock>
            </p>
          </li>
          <li>
            <p>Open the package.json file to see all the scripts.</p>
          </li>
        </ol>
        <Title>Deployment</Title>
        <p>To deploy this project run</p>
        <p>
          <CodeBlock>bash npm run build </CodeBlock>
        </p>
        <Title>Acknowledgements</Title>
        <ul>
          <li>
            The Daily Routine Maker app was created as a learning exercise.
          </li>
          <li>
            <a href="https://react.dev/">React</a> The JavaScript library used
            for building the user interface.
          </li>
          <li>
            <a href="https://redux.js.org/">Redux</a> A JS library for
            predictable and maintainable global state management
          </li>
          <li>
            <a href="https://tailwindcss.com/">Tailwind CSS</a> A utility-first
            CSS framework
          </li>
          <li>
            <a href="https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md">
              @vitejs/plugin-react
            </a>
            uses <a href="https://babeljs.io/">Babel</a> for Fast Refresh
          </li>
        </ul>
        <Title>Screenshots</Title>
        <p>
          <img
            alt="App Screenshot"
            src="https://raw.githubusercontent.com/Seyam08/parking-app/main/park-reserve.PNG"
          />
        </p>
        <Title>Authors</Title>
        <ul>
          <li>
            <a href="https://www.github.com/Seyam08">Seyam Hossain</a>
          </li>
        </ul>
        <Title>Lessons Learned</Title>
        <ul>
          <li>Predictable state management with Redux</li>
          <li>Practiced React</li>
          <li>Practiced designing with Tailwind.css</li>
        </ul>
      </>
    ),
  },
  {
    preview: "https://daily-routine08.netlify.app/",
    title: "Daily Routine App",
    description:
      "A Daily Routine App built with React. This app allows users to track their tasks, with features such as editing, and deleting tasks. Also, users can select task durations and mark tasks as completed.",
    thumbnail:
      "https://raw.githubusercontent.com/Seyam08/Daily-Routine-App/main/daily-routine.PNG",
    stack: ["React", "Tailwind CSS"],
    slug: "daily-routine-app",
    repo: "https://github.com/Seyam08/Daily-Routine-App",
    content: (
      <>
        <Title>Features</Title>
        <ul>
          <li>Vehicle type select option.</li>
          <li>Parking sopt choosing option.</li>
          <li>Details information about reserver</li>
          <li>
            A token will be generated when the user clicks the &apos;Get
            Token&apos; button
          </li>
          <li>
            Token list will be available on the left side of panel, also token
            can be removed.
          </li>
          <li>Already booked spot marked.</li>
          <li>Token details will shown in a popup screen</li>
        </ul>
        <Title>Installation</Title>
        <p>Install this app with npm</p>
        <ol>
          <li>
            <p>Clone the repository:</p>
            <p>
              <CodeBlock>
                git clone https://github.com/Seyam08/parking-app.git
              </CodeBlock>
            </p>
          </li>
          <li>
            <p>Navigate to the project directory:</p>
            <p>
              <CodeBlock>cd parking-app</CodeBlock>
            </p>
          </li>
          <li>
            <p>Install the dependencies:</p>
            <p>
              <CodeBlock>npm install</CodeBlock>
            </p>
          </li>
          <li>
            <p>Start the application:</p>
            <p>Development version</p>
            <p>
              <CodeBlock>npm run dev</CodeBlock>
            </p>
          </li>
          <li>
            <p>Open the package.json file to see all the scripts.</p>
          </li>
        </ol>
        <Title>Deployment</Title>
        <p>To deploy this project run</p>
        <p>
          <CodeBlock>bash npm run build </CodeBlock>
        </p>
        <Title>Acknowledgements</Title>
        <ul>
          <li>
            The Daily Routine Maker app was created as a learning exercise.
          </li>
          <li>
            <a href="https://react.dev/">React</a> The JavaScript library used
            for building the user interface.
          </li>
          <li>
            <a href="https://redux.js.org/">Redux</a> A JS library for
            predictable and maintainable global state management
          </li>
          <li>
            <a href="https://tailwindcss.com/">Tailwind CSS</a> A utility-first
            CSS framework
          </li>
          <li>
            <a href="https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md">
              @vitejs/plugin-react
            </a>
            uses <a href="https://babeljs.io/">Babel</a> for Fast Refresh
          </li>
        </ul>
        <Title>Screenshots</Title>
        <p>
          <img
            alt="App Screenshot"
            src="https://raw.githubusercontent.com/Seyam08/parking-app/main/park-reserve.PNG"
          />
        </p>
        <Title>Authors</Title>
        <ul>
          <li>
            <a href="https://www.github.com/Seyam08">Seyam Hossain</a>
          </li>
        </ul>
        <Title>Lessons Learned</Title>
        <ul>
          <li>Predictable state management with Redux</li>
          <li>Practiced React</li>
          <li>Practiced designing with Tailwind.css</li>
        </ul>
      </>
    ),
  },
];
