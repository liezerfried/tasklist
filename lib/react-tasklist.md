SVAR React Tasklist
npm License npm downloads

Documentation • Demos

SVAR React Tasklist is a lightweight React component that helps you add simple, interactive to-do lists to your applications. It's compatible with React 18 and 19, and is a part of the SVAR React Core widgets family.

With Tasklist, users can easily add, edit, delete, and mark tasks as completed. The component works fully on the client side and integrates smoothly with any backend or external data source (like REST APIs) to load and save tasks. It also provides flexible event handling, letting you track and respond to task additions, updates, or deletions.

SVAR React TaskList
🛠️ How to Use
To use the task list, simply import the package and include the component in to .jsx file:

    import { Tasklist } from "@svar-ui/react-tasklist";
    import "@svar-ui/react-tasklist/all.css";

    function MyComponent(){
        const data =  [
            { id: 7, content: 'Optimize performance', status: 1 },
            { id: 8, content: 'Work with API requests', status: 0}
        ];

        return (<Tasklist value={data} />);
    }