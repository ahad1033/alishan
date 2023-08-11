
const Token = () => {
    return (
        <div className="flex py-20 px-5 mt-20">
            <div>
                <h5 style={{
                    fontFamily: "'JetBrains Mono', sans-serif",
                    color: 'transparent',
                    backgroundImage: 'linear-gradient(170deg, #22e1ff, #1d8fe1 51.79%, #625eb1)',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                }} className="font-mono text-lg mb-5 text-center xl:text-left uppercase">Synergy</h5>
                <h2 className="font-bold text-black dark:text-white sm:text-4xl text-3xl mb-5 text-center xl:text-left uppercase">Dual Token Model</h2>
                <p className="font-light text-lg  dark:text-wave-blue mb-5 text-center xl:text-left">Dopex utilizes two separate tokens to coordinate new ecosystem dynamics in a synergistic feedback loop.</p>
                <a href="https://docs.dopex.io/tokenomics" className="font-light text-primary text-xl dark:text-white">Tokenomics ⟶</a>
            </div>
            <div className="flex flex-row ">
                <div className=" bg-white rounded-2xl p-6 my-3 shadow-xl sm:mr-3 sm:w-1/2 dark:bg-cod-gray">
                    <div className="font-bold text-black dark:text-white text-2xl pt-2 mb-4 xl:pt-3">DPX</div>
                    <p className="font-light text-lg  dark:text-wave-blue mb-3">DPX is the limited supply governance token.</p>
                    <p className="MuiBox-root jss75 font-light text-lg dark:text-wave-blue  mb-2">It accrues fees and revenue from pools, vaults and wrappers.</p>
                </div>
                <div className=" bg-white rounded-2xl p-6 my-3 shadow-xl sm:mr-3 sm:w-1/2 dark:bg-cod-gray">
                    <div className="font-bold text-black dark:text-white text-2xl pt-2 mb-4 xl:pt-3">DPX</div>
                    <p className="font-light text-lg  dark:text-wave-blue mb-3">DPX is the limited supply governance token.</p>
                    <p className="MuiBox-root jss75 font-light text-lg dark:text-wave-blue  mb-2">It accrues fees and revenue from pools, vaults and wrappers.</p>
                </div>
            </div>
        </div>
    );
};

export default Token;