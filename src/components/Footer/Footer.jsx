import logo from '../../../public/logo.png';

const Footer = () => {
    return (
        <footer className="footer p-10 mt-10 text-base-content">
            <div>
                <img className='w-20' src={logo} alt="" />
                <p className="font-light text-lg dark:text-wave-blue copyright">© 2023 Dopex</p>
            </div>
            <div>
                <h4 className="font-medium text-black dark:text-white text-lg mb-2">Product</h4>
                <ul>
                    <li className="mb-2 flex items-center space-x-2"><a className="font-light text-lg text-stieglitz dark:text-wave-blue">Use Dopex</a>
                    </li>
                </ul>
            </div>
            <div>
            <h4 className="font-medium text-black dark:text-white text-lg mb-2">Learn</h4>
                <ul>
                    <li className="mb-2 flex items-center space-x-2"><a className="font-light text-lg text-stieglitz dark:text-wave-blue">Documentation</a>
                    </li>
                    <li className="mb-2 flex items-center space-x-2"><a className="font-light text-lg text-stieglitz dark:text-wave-blue">Blog</a>
                    </li>
                    <li className="mb-2 flex items-center space-x-2"><a className="font-light text-lg text-stieglitz dark:text-wave-blue ">Knowledge Base</a>
                    </li>
                </ul>
            </div>
            <div>
            <h4 className="font-medium text-black dark:text-white text-lg mb-2">Community</h4>
                <ul>
                    <li className="mb-2 flex items-center space-x-2"><a className="font-light text-lg text-stieglitz dark:text-wave-blue">Discord</a>
                    </li>
                    <li className="mb-2 flex items-center space-x-2"><a className="font-light text-lg text-stieglitz dark:text-wave-blue">Twitter</a>
                    </li>
                </ul>
            </div>
            <div>
            <h4 className="font-medium text-black dark:text-white text-lg mb-2">Developers</h4>
                <ul>
                    <li className="mb-2 flex items-center space-x-2"><a className="font-light text-lg text-stieglitz dark:text-wave-blue">GitHub</a>
                    </li>
                    <li className="mb-2 flex items-center space-x-2"><a className="font-light text-lg text-stieglitz dark:text-wave-blue">Bug Bounty</a>
                    </li>
                </ul>
            </div>
            <div>
            <h4 className="font-medium text-black dark:text-white text-lg mb-2">Other</h4>
                <ul>
                    <li className="mb-2 flex items-center space-x-2"><a className="font-light text-lg text-stieglitz dark:text-wave-blue">Sale</a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;