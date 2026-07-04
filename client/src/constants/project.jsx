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
    preview: "https://doclify.vercel.app/",
    title: "Doclify — A Modern Blog Platform Built with Next.js",
    description:
      "Doclify is a modern, early-stage blog platform built with Next.js 16 (App Router). It focuses on performance, clean architecture, and a great writing experience through a Tiptap-powered editor. The platform includes Google OAuth authentication, Cloudinary image uploads, and a fully RSC-first structure for fast rendering. Although still actively in development, Doclify already supports core blogging workflows and is steadily growing with planned improvements like advanced caching, UI/UX enhancements, and better authoring tools. Some features—such as updating and deleting blog posts—are currently being built and will be added soon. Doclify continues to evolve quickly, introducing refinements, optimizations, and new features with each iteration.",
    thumbnail:
      "https://raw.githubusercontent.com/Seyam08/doclify/refs/heads/main/screenshot.png",
    stack: [
      "React",
      "JavaScript",
      "TypeScript",
      "MongoDB",
      "Mongoose",
      "NextJS",
      "Cloudinary",
      "Tailwind CSS",
      "Zod",
      "Tiptap-editor",
      "NextAuth",
      "React-hook-form",
      "Shadcn",
    ],
    slug: "doclify",
    repo: "https://github.com/Seyam08/doclify",
    content: (
      <>
        <Title>🌟 Current Features</Title>
        <ul>
          <li>
            🔐 <strong>Authentication</strong> – Secure login system powered by
            Google OAuth via NextAuth v5
            <ul>
              <li>Automatic author profile creation</li>
              <li>Protected dashboard routes</li>
              <li>Session-based access control</li>
            </ul>
          </li>

          <li>
            📝 <strong>Content Management</strong> – Create and publish blog
            posts
            <ul>
              <li>Rich text editor using Tiptap</li>
              <li>Tagging & categorization</li>
              <li>SEO-friendly slug generation</li>
              <li>Cloudinary image uploads for thumbnails</li>
            </ul>
          </li>

          <li>
            🌍 <strong>Public Pages</strong> – Clean UI for browsing and reading
            posts
            <ul>
              <li>Blog listing</li>
              <li>Single post page</li>
              <li>Author pages</li>
              <li>Categories & tags</li>
              <li>Featured posts</li>
            </ul>
          </li>

          <li>
            🛠️ <strong>Developer Experience</strong> – Modern tooling for faster
            builds
            <ul>
              <li>Strict TypeScript setup</li>
              <li>Zod validation schemes</li>
              <li>React 19 + Next.js 16</li>
              <li>Tailwind CSS v4 + Design tokens</li>
              <li>Radix UI + Shadcn components</li>
            </ul>
          </li>
        </ul>

        <Title>🚀 Planned Features</Title>
        <p>
          <strong>Doclify is still in active development.</strong> Several
          important improvements are coming soon:
        </p>
        <ul>
          <li>🧹 Update & Delete blog posts (currently missing)</li>
          <li>⚡ Improved caching & performance</li>
          <li>🧩 Better internal tooling & DX</li>
          <li>🎨 UI/UX improvements</li>
          <li>📦 Deeper category/tag organization</li>
        </ul>

        <Title>🛠️ Tech Stack</Title>
        <ul>
          <li>
            ⚛️ <strong>React 19</strong> – UI framework
          </li>
          <li>
            ▲ <strong>Next.js 16 (App Router)</strong> – SSR, server actions
          </li>
          <li>
            🔐 <strong>NextAuth v5</strong> – Authentication
          </li>
          <li>
            🗄️ <strong>MongoDB + Mongoose</strong> – Database
          </li>
          <li>
            📝 <strong>Tiptap</strong> – Rich text editor
          </li>
          <li>
            🎨 <strong>Tailwind CSS v4</strong> – Styling system
          </li>
          <li>
            ☁️ <strong>Cloudinary</strong> – Image uploads
          </li>
          <li>
            🧪 <strong>Zod</strong> – Input validation
          </li>
          <li>
            🔧 <strong>Radix UI / Shadcn</strong> – UI components
          </li>
        </ul>

        <Title>📂 Project Structure</Title>
        <p>
          <CodeBlock>
            {`📂 src
├── 📂 actions            # Server actions (business logic)
│   ├── 📂 post           # Blog post operations
│   ├── 📂 author         # Author profile operations
│   └── 📂 helper         # Validation helpers
├── 📂 app                # Next.js App Router
│   ├── 📂 (public)       # Public-facing pages
│   └── 📂 dashboard      # Protected routes
├── 📂 components         # Shared UI components
├── 📂 lib                # Config utilities (db, cloudinary, auth helpers)
├── 📂 models             # Mongoose models
├── 📂 types              # Extended TypeScript types
└── 📂 zod-schemas        # Zod validation schemas`}
          </CodeBlock>
        </p>

        <Title>🗺️ Routing Overview</Title>
        <ul>
          <li>
            <strong>Public Routes</strong>
            <ul>
              <li>/ – Homepage</li>
              <li>/blog – All blogs</li>
              <li>/blog/[slug] – Single blog</li>
              <li>/author – Authors</li>
              <li>/author/[username] – Author profile</li>
              <li>/categories – All categories</li>
              <li>/categories/[category] – Single category</li>
              <li>/tags – All tags</li>
              <li>/tags/[tag] – Single tag</li>
            </ul>
          </li>

          <li>
            <strong>Dashboard (Authenticated)</strong>
            <ul>
              <li>/dashboard</li>
              <li>/dashboard/me</li>
              <li>/dashboard/add-post</li>
            </ul>
          </li>
        </ul>

        <Title>🔄 Core Flows</Title>
        <ul>
          <li>
            ✍️ <strong>Blog Post Creation</strong>
            <ul>
              <li>Write content with Tiptap</li>
              <li>Upload thumbnail to Cloudinary</li>
              <li>Zod schema validation</li>
              <li>Slug creation using slugify</li>
              <li>Save in MongoDB with metadata</li>
            </ul>
          </li>

          <li>
            🔑 <strong>Authentication</strong>
            <ul>
              <li>User logs in with Google</li>
              <li>NextAuth callback handles profile</li>
              <li>Author document created if missing</li>
              <li>Session extended with username</li>
            </ul>
          </li>
        </ul>

        <Title>📦 Installation</Title>
        <ol>
          <li>
            <p>Clone the repository:</p>
            <p>
              <CodeBlock>
                git clone https://github.com/Seyam08/doclify.git
              </CodeBlock>
            </p>
          </li>

          <li>
            <p>Navigate to project directory:</p>
            <p>
              <CodeBlock>cd doclify</CodeBlock>
            </p>
          </li>

          <li>
            <p>Install dependencies:</p>
            <p>
              <CodeBlock>npm install</CodeBlock>
            </p>
          </li>

          <li>
            <p>
              Rename <strong>.env-example</strong> to{" "}
              <strong>.env.local</strong> and configure your credentials.
            </p>
          </li>

          <li>
            <p>Start application:</p>
            <p>
              <CodeBlock>npm run dev</CodeBlock>
            </p>

            <p>Build:</p>
            <p>
              <CodeBlock>npm run build</CodeBlock>
            </p>

            <p>Preview:</p>
            <p>
              <CodeBlock>npm start</CodeBlock>
            </p>
          </li>

          <li>
            <p>Open package.json to view all scripts.</p>
          </li>
        </ol>

        <Title>🌱 Environment Variables</Title>
        <ul>
          <li>`MONGO_DB_CONNECTION_STRING` – MongoDB connection string</li>
          <li>`CLOUDINARY_NAME` – Cloudinary cloud name</li>
          <li>`CLOUDINARY_API_KEY` – Cloudinary API key</li>
          <li>`CLOUDINARY_API_SECRET` – Cloudinary secret</li>
          <li>`CLOUDINARY_DOCLIFY_BLOG_THUMB_FOLDER` – Cloudinary folder</li>
          <li>`AUTH_GOOGLE_ID` – Google OAuth client ID</li>
          <li>`AUTH_GOOGLE_SECRET` – OAuth client secret</li>
          <li>`AUTH_SECRET` – Session encryption secret</li>
          <li>`AUTH_URL` – Auth connection URL</li>
          <li>`AUTH_TRUST_HOST` – Trusted host value</li>
          <li>`AUTHOR_LINK` – Author external profile link</li>
        </ul>

        <Title>🧩 Important Design Decisions</Title>
        <ul>
          <li>Server Actions instead of API Routes</li>
          <li>
            React’s <code>cache()</code> for deduping database calls
          </li>
          <li>Slug-based URLs for SEO</li>
          <li>Auto-generated usernames via slugify</li>
          <li>Flexible Mongoose schema design</li>
        </ul>
      </>
    ),
  },
  {
    preview: "https://asadborhan.com/",
    title: "Asad Borhan Portfolio",
    description:
      "A polished personal portfolio website built for a video production manager, designed to showcase cinematic work, communicate brand value, and drive client inquiries through a modern, conversion-focused experience.",
    thumbnail: "/projects/asad-borhan.png",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn",
      "MongoDB",
    ],
    slug: "asad-borhan-portfolio",
    repo: "https://github.com/Seyam08/",
    content: (
      <>
        <Title>🌟 Project Overview</Title>
        <ul>
          <li>Built as a personal brand website for a creative professional</li>
          <li>
            Focused on visual storytelling, strong first impressions, and lead
            generation
          </li>
          <li>Designed to feel cinematic, modern, and conversion-oriented</li>
        </ul>

        <Title>⚙️ What It Includes</Title>
        <ul>
          <li>Hero section with strong brand positioning</li>
          <li>Work showcase and portfolio presentation</li>
          <li>Contact and inquiry flow for client conversion</li>
          <li>Modern responsive UI with polished interactions</li>
        </ul>

        <Title>🛠️ Tech Stack</Title>
        <ul>
          <li>Next.js for a fast, scalable app router experience</li>
          <li>React + TypeScript for maintainable UI logic</li>
          <li>Tailwind CSS + Shadcn for modern design system styling</li>
        </ul>

        <Title>💡 Key Takeaway</Title>
        <ul>
          <li>
            Combined branding, UX, and development to create a portfolio that
            feels premium and client-ready
          </li>
        </ul>
        <Title>Screenshots</Title>
        <p>
          <img alt="App Screenshot" src="/projects/asad-borhan.png" />
        </p>
      </>
    ),
  },
  {
    preview: "https://sketch-flow-view.netlify.app/",
    title: "Sketch Flow",
    description:
      "A prototype project inspired by diagramming and flowchart tools. This is the first version built to experiment with shape drawing and canvas interactions. It’s still in the early stages, but it lays the foundation for a more advanced flowcharting tool. Future updates will introduce arrows, text inside shapes, styling options, and import/export functionality.",
    thumbnail:
      "https://raw.githubusercontent.com/Seyam08/sketch-flow/refs/heads/main/screenshot.PNG",
    stack: ["React", "TypeScript", "Tailwind CSS", "Shadcn", "Vite", "Zustand"],
    slug: "sketch-flow",
    repo: "https://github.com/Seyam08/sketch-flow",
    content: (
      <>
        <Title>🌟 Current Features (Prototype)</Title>
        <ul>
          <li>
            🖌️ <strong>Draw Shapes</strong> – Create basic shapes on the canvas:
            <ul>
              <li>Rectangle</li>
              <li>Circle</li>
              <li>Square</li>
              <li>Diamond</li>
            </ul>
          </li>
          <li>
            🔄 <strong>Move Shapes</strong> – Drag and reposition shapes
            anywhere on the canvas.
          </li>
          <li>
            🧹 <strong>Clear All</strong> – Reset the canvas with a single
            action.
          </li>
        </ul>

        <Title>🚀 Planned Features</Title>
        <p>
          This is only the <strong>prototype version</strong>. Upcoming
          improvements include:
        </p>

        <ul>
          <li>
            ➡️ <strong>Arrows</strong> – Connect shapes with directional arrows
          </li>
          <li>
            🔗 <strong>Join Shapes</strong> – Build flowcharts by linking shapes
            together
          </li>
          <li>
            ✍️ <strong>Text Inside Shapes</strong> – Add labels or descriptions
            inside each shape
          </li>
          <li>
            🎨 <strong>Customization</strong> – Change shape color, border
            stroke, and canvas background
          </li>
          <li>
            📤📥 <strong>Export & Import</strong> – Save and load your diagrams
          </li>
        </ul>

        <Title>🛠️ Tech Stack</Title>
        <ul>
          <li>
            ⚛️ <strong>React (with TypeScript)</strong> – For building
            interactive UI
          </li>
          <li>
            🎨 <strong>Shadcn/UI</strong> – For modern, accessible components
          </li>
          <li>
            🗂️ <strong>Zustand</strong> – For state management
          </li>
          <li>
            ⚡ <strong>Vite</strong> – For fast bundling and development
          </li>
        </ul>

        <Title>Installation</Title>
        <p>Install this app with npm</p>
        <ol>
          <li>
            <p>Clone the repository:</p>
            <p>
              <CodeBlock>
                git clone https://github.com/Seyam08/sketch-flow.git
              </CodeBlock>
            </p>
          </li>
          <li>
            <p>Navigate to the project directory:</p>
            <p>
              <CodeBlock>cd sketch-flow</CodeBlock>
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
            src="https://raw.githubusercontent.com/Seyam08/sketch-flow/refs/heads/main/screenshot.PNG"
          />
        </p>

        <Title>Lessons Learned</Title>
        <ul>
          <li>Managing complex canvas interactions with React state</li>
          <li>Practiced TypeScript for type safety in UI logic</li>
          <li>Using Zustand for tracking shapes</li>
          <li>Implemented Shadcn libraries components for reusable UI</li>
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
    preview: "https://express-typescript-graphql.onrender.com/",
    title: "GraphQL CRUD System",
    description:
      "A simple CRUD API built with Express.js, TypeScript, GraphQL, and MongoDB. Includes a lightweight UI powered by Ruru HTML for testing queries and mutations.",
    thumbnail:
      "https://raw.githubusercontent.com/Seyam08/express-typeScript-graphql/refs/heads/main/screenshot.PNG",
    stack: ["Express.js", "TypeScript", "GraphQL", "MongoDB"],
    slug: "express-typescript-graphql",
    repo: "https://github.com/Seyam08/express-typeScript-graphql",
    content: (
      <>
        <Title>⚡ Features</Title>
        <ul>
          <li>
            Manage <strong>Books</strong> and <strong>Authors</strong> with full
            CRUD operations.
          </li>
          <li>
            Query by <strong>ID</strong> or <strong>Name</strong>.
          </li>
          <li>Supports adding, updating, and deleting data.</li>
          <li>
            Simple UI with <strong>Ruru HTML</strong> for testing.
          </li>
        </ul>
        <Title>🚀 Tech Stack</Title>
        <ul>
          <li>⚡ Express.js + TypeScript (Backend)</li>
          <li>🔗 GraphQL (API Layer)</li>
          <li>🍃 MongoDB + Mongoose (Database)</li>
          <li>🖥️ Ruru HTML IDE (UI Playground)</li>
        </ul>
        <Title>▶️ Installation</Title>
        <ol>
          <li>
            <p>Clone the repository:</p>
            <CodeBlock>
              git clone
              https://github.com/Seyam08/express-typeScript-graphql.git
            </CodeBlock>
          </li>
          <li>
            <p>
              Provide MongoDB connection in <code>.env</code>:
            </p>
            <CodeBlock>
              MONGO_CONNECTION_STRING="mongodb://localhost:27017/graphql"
            </CodeBlock>
          </li>
          <li>
            <p>Install dependencies:</p>
            <CodeBlock>npm install</CodeBlock>
          </li>
          <li>
            <p>Start dev server:</p>
            <CodeBlock>npm run dev</CodeBlock>
          </li>
          <li>
            <p>Build:</p>
            <CodeBlock>npm run build</CodeBlock>
          </li>
          <li>
            <p>Run production server:</p>
            <CodeBlock>npm start</CodeBlock>
          </li>
        </ol>
        <Title>📖 Example Queries</Title>
        <Title>Fetch all books and authors</Title>
        <CodeBlock>{`query {
  allBooks {
    id
    name
    author { id name }
  }
  allAuthors { id name }
}`}</CodeBlock>
        <Title>Fetch author and book by ID</Title>
        <CodeBlock>{`query {
  authorById(id: "68e20964a7ad53a") { id name }
  bookById(id: "68e2096d3da7ad53a") {
    id name
    author { id name }
  }
}`}</CodeBlock>
        <Title>Fetch book and author by name</Title>
        <CodeBlock>{`query {
  authorByName(name: "Elif Shafak") { id name }
  booksByName(name: "The Forty Rules of Love") {
    id name
    author { id name }
  }
}`}</CodeBlock>

        <Title>✍️ Example Mutations</Title>
        <Title>Add a new author</Title>
        <CodeBlock>{`mutation {
  addAuthor(name: "Elif Shafak") { id name }
}`}</CodeBlock>

        <Title>Add a new book</Title>
        <CodeBlock>{`mutation {
  addBook(authorName: "Elif Shafak", name: "The Forty Rules of Love") {
    id name
    author { id name }
  }
}`}</CodeBlock>

        <Title>Update an author</Title>
        <CodeBlock>{`mutation {
  updateAuthor(id: "68e2096d3d64c6f53a", newName: "Elif Shafak") {
    id name
  }
}`}</CodeBlock>

        <Title>Update a Book</Title>
        <CodeBlock>{`mutation {
  updateBook(id: "68e2096d3d64c", newName: "The Forty Rules of Love") {
    id name
    author { id name }
  }
}`}</CodeBlock>

        <Title>Delete a Book</Title>
        <CodeBlock>{`mutation {
  deleteBook(id: "68e2096d3d642c6f53a") { id name }
}`}</CodeBlock>

        <Title>Screenshots</Title>
        <p>
          <img
            alt="App Screenshot"
            src="https://raw.githubusercontent.com/Seyam08/express-typeScript-graphql/refs/heads/main/screenshot.PNG"
          />
        </p>
        <Title>📌 Notes</Title>
        <ul>
          <li>
            All queries & mutations can be tested with <strong>Ruru UI</strong>{" "}
            or Postman/Insomnia.
          </li>
          <li>Ensure MongoDB is running before executing queries.</li>
        </ul>
      </>
    ),
  },
  {
    preview: "https://talent-seek.netlify.app/",
    title: "Multi-Step Form",
    description:
      "A multi-step form built with React, TypeScript, Shadcn UI, Tailwind CSS, and React Hook Form with Zod resolver. It supports conditional validations, progress tracking, and state persistence across steps. Designed to simulate real-world job application scenarios with multiple dependencies between inputs.",
    thumbnail:
      "https://raw.githubusercontent.com/Seyam08/react-multi-step-form/refs/heads/main/Screenshot.PNG",
    stack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn",
      "React Hook Form",
      "Zod",
    ],
    slug: "multi-step-form",
    repo: "https://github.com/Seyam08/react-multi-step-form",
    content: (
      <>
        <Title>🌟 Features</Title>
        <ul>
          <li>
            📝 <strong>Step 1: Personal Info</strong>
            <ul>
              <li>Name (required)</li>
              <li>Email (required)</li>
              <li>Phone with country selector</li>
              <li>Birth Date (must be past date, not earlier than 1950)</li>
              <li>Profile Picture (max 2MB, preview & remove option)</li>
            </ul>
          </li>
          <li>
            💼 <strong>Step 2: Job Details</strong>
            <ul>
              <li>Department Select</li>
              <li>Position Title</li>
              <li>Start Date (past allowed, future max 90 days)</li>
              <li>Job Type (Full-time, Part-time, Contract)</li>
              <li>Manager Select (dynamic by department)</li>
              <li>Salary Expectation (slider, range depends on job type)</li>
            </ul>
          </li>
          <li>
            🛠 <strong>Step 3: Skills & Preferences</strong>
            <ul>
              <li>Minimum 3 skills required (each unlocks experience field)</li>
              <li>Preferred Work Time (time range select)</li>
              <li>
                Remote Preference (less than 50% requires manager approval)
              </li>
              <li>Extra Notes (optional)</li>
            </ul>
          </li>
          <li>
            📞 <strong>Step 4: Emergency Contact</strong>
            <ul>
              <li>Contact Name, Relation, Phone</li>
              <li>
                Guardian Info (required if candidate age between 18–21):
                Guardian Name & Phone
              </li>
            </ul>
          </li>
          <li>
            ✅ <strong>Step 5: Review & Submit</strong>
            <ul>
              <li>Preview of all inputs</li>
              <li>Toggle switch confirmation before final submit</li>
            </ul>
          </li>
        </ul>

        <Title>🚀 Form Overview</Title>
        <ul>
          <li>Progress bar to track completion</li>
          <li>State persistence across forward/backward navigation</li>
        </ul>

        <Title>🛠️ Tech Stack</Title>
        <ul>
          <li>⚛️ React (with TypeScript)</li>
          <li>🎨 Shadcn/UI</li>
          <li>🎨 Tailwind CSS</li>
          <li>📋 React Hook Form</li>
          <li>✅ Zod (for schema validation)</li>
        </ul>

        <Title>Installation</Title>
        <p>Install this app with npm</p>
        <ol>
          <li>
            <p>Clone the repository:</p>
            <p>
              <CodeBlock>
                git clone https://github.com/your-username/multi-step-form.git
              </CodeBlock>
            </p>
          </li>
          <li>
            <p>Navigate to the project directory:</p>
            <p>
              <CodeBlock>cd multi-step-form</CodeBlock>
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
            src="https://raw.githubusercontent.com/Seyam08/react-multi-step-form/refs/heads/main/Screenshot.PNG"
          />
        </p>

        <Title>Lessons Learned</Title>
        <ul>
          <li>Managing conditional dependencies between form inputs</li>
          <li>Schema-based validation with Zod resolver</li>
          <li>Maintaining multi-step state persistence</li>
          <li>Working with Shadcn UI and TailwindCSS for custom forms</li>
          <li>Deepened TypeScript understanding in form validation logic</li>
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
          <li>
            Add tasks: Users can input new tasks and specify start and end times
            before adding them to the list.
          </li>
          <li>
            Edit tasks: Simply click the edit icon next to a task to modify its
            title.
          </li>
          <li>
            Delete tasks: Users can remove unwanted tasks by clicking the delete
            icon next to them.
          </li>
          <li>
            Mark tasks as completed: Check the checkbox next to a task to
            indicate it's been completed.
          </li>
          <li>
            Complete all tasks: Use the master checkbox to mark all tasks as
            completed at once.
          </li>
          <li>
            Task count: The total number of tasks is displayed for easy
            reference.
          </li>
          <li>
            Duration: It shows the duration of a task based on start and end
            time.
          </li>
        </ul>
        <Title>Installation</Title>
        <p>Install this app with npm</p>
        <ol>
          <li>
            <p>Clone the repository:</p>
            <p>
              <CodeBlock>
                git clone https://github.com/Seyam08/Daily-Routine-App.git
              </CodeBlock>
            </p>
          </li>
          <li>
            <p>Navigate to the project directory:</p>
            <p>
              <CodeBlock>cd Daily-Routine-App</CodeBlock>
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
            <p>
              Open your web browser and visit http://localhost:5173 to see the
              application.
            </p>
          </li>
          <li>
            <p>Open the package.json file to see all the scripts.</p>
          </li>
        </ol>
        <Title>Deployment</Title>
        <p>To deploy this project run</p>
        <p>
          <CodeBlock>npm run build</CodeBlock>
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
            <a href="https://tailwindcss.com/">Tailwind CSS</a> A utility-first
            CSS framework
          </li>
          <li>
            <a href="https://fontawesome.com/">Fontawesome</a> The icon library
            used for icons.
          </li>
          <li>Some other tools that used on this project - Vite, eslint.</li>
        </ul>
        <Title>Screenshots</Title>
        <p>
          <img
            alt="App Screenshot"
            src="https://raw.githubusercontent.com/Seyam08/Daily-Routine-App/main/daily-routine.PNG"
          />
        </p>
      </>
    ),
  },
];
