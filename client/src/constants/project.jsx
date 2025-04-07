import CodeBlock from "../components/subComponents/CodeBlock";
import Title from "../components/subComponents/Title";

export const projects = [
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
