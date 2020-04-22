- [ ] Why would you use class component over function components (removing hooks from the question)?

`The best use-case for class components with the advent of hooks is when you want to take advantage of the lifecycle methods to do things at specific times. They're also better than functional components for high-complexity components, as (for example) adding more keys to this.state is more elegant that calling useState() many times.`

- [ ] Name three lifecycle methods and their purposes.

`componentDidMount() runs after the component mounts. Useful for DOM manipulation and anything that you want to run once on a delay (e.g. API calls). componentDidUpdate() runs whenever the component updates, and is useful to determine how to change a component after its props or state changes. componentWillUnmont() runs before a component closes, and is useful to cleanup anything like setTimeout() to prevent a memory leak.`

- [ ] What is the purpose of a custom hook?

`A custom hook allows you to reuse "stateful" functionality across multiple functional components. They can be used for pretty much anything.`

- [ ] Why is it important to test our apps?

`As I understand it, it's most useful to set up tests to ensure that our App retains its core functionality, even after someone else comes along and modifies it. Tests can provide a safeguard against accidentally breaking an app.`
