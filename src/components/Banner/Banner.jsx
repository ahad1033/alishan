
const Banner = () => {
    return (
        <div className="mt-20 px-5">
            <div className="text-center mb-28">
                <h1 style={{ fontFamily: "'JetBrains Mono', sans-serif" }} className="uppercase text-5xl font-semibold my-5">DECENTRALIZED OPTIONS EXCHANGE</h1>
                <p className="text-lg my-5">Dopex is a maximum liquidity and minimal exposure options protocol</p>
                <div className=" my-5">
                    <button className="btn btn-primary normal-case mx-2 btn-sm">
                        Use Alishan
                    </button>
                    <button className="btn btn-outline normal-case btn-primary mx-2 btn-sm">
                        Documentation
                    </button>
                </div>
            </div>
            <div className="grid gap-12 md:grid-cols-3 text-center md:px-10 lg:mt-52 lg:mb-32">
                <div className="flex flex-col space-y-3 items-center px-8">
                    <p style={{
                fontFamily: "'JetBrains Mono', sans-serif",
                color: 'transparent', 
                backgroundImage: 'linear-gradient(170deg, #22e1ff, #1d8fe1 51.79%, #625eb1)',
                WebkitBackgroundClip: 'text', 
                backgroundClip: 'text', 
            }} className="text-xl m-3">STRUCTURED</p>
                    <h1 className="text-2xl m-3 font-bold">SSOV OPTIONS</h1>
                    <p className="text-lg">Provide option liquidity via covered calls or cash-secured puts while passively earning diverse sources of yields.</p>
                </div>
                <div className="flex flex-col space-y-3 items-center px-8">
                    <p style={{
                fontFamily: "'JetBrains Mono', sans-serif",
                color: 'transparent', 
                backgroundImage: 'linear-gradient(170deg, #22e1ff, #1d8fe1 51.79%, #625eb1)',
                WebkitBackgroundClip: 'text', 
                backgroundClip: 'text', 
            }} className="text-xl m-3">OPTION</p>
                    <h1 className="text-2xl m-3 font-bold">LIQUIDITY POOLS</h1>
                    <p className="text-lg">A platform for option buyers to easily exit & sell their tokenized positions at any time at a discounted rate.</p>
                </div>
                <div className="flex flex-col space-y-3 items-center px-8">
                    <p style={{
                fontFamily: "'JetBrains Mono', sans-serif",
                color: 'transparent', 
                backgroundImage: 'linear-gradient(170deg, #22e1ff, #1d8fe1 51.79%, #625eb1)',
                WebkitBackgroundClip: 'text', 
                backgroundClip: 'text', 
            }} className="text-xl m-3">STRUCTURED</p>
                    <h1 className="text-2xl m-3 font-bold">ATLANTIC OPTIONS</h1>
                    <p className="text-lg">A novel DeFi primitive that aims to improve collateral composability & efficiency by enabling buyers to borrow option collateral.</p>
                </div>
            </div>
        </div>

    );
};

export default Banner;