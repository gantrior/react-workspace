import logo from './logo.svg';

var Header = ({param1, hrefText}) => (
    <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
            {param1}
        </p>
        <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
        >
            {hrefText}
        </a>
    </header>
);

export default Header;