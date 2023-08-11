
const BuiltSection = () => {
    return (
        <div className="bg-white rounded-2xl shadow-2xl px-10 py-6 md:px-6">
            <div className="text-center mt-5">
                <p style={{ fontFamily: "'JetBrains Mono', sans-serif" }} className="text-xl m-6">BUILT DIFFERENT</p>
                <h1 className="text-4xl m-6 uppercase font-bold">DEFI FIRST & POWERFUL OPTIONS</h1>
                <p className="text-lg">We built a protocol with vast improvements over the existing options market.</p>
            </div>
            <div className="grid lg:grid-cols-2 gap-6 my-8">
                <div className="flex m-5 p-5 gap-5 items-center justify-center">
                    <h2>hello</h2>
                    <div>
                        <h1 className="font-medium text-lg">Staking Yield</h1>
                        <p className="font-light text-lg">Your collateral never goes un-used and is put to work by staking in other protocols to earn yields.</p>
                    </div>
                </div>
                <div className="flex m-5 p-5 gap-5 items-center justify-center">
                    <h2>hello</h2>
                    <div>
                        <h1 className="font-medium text-lg">Collateral Borrowing</h1>
                        <p className="font-light text-lg">Atlantic options offer buyers with unique products like applying straddle strategies with a fraction of the cost and insuring leveraged longs.</p>
                    </div>
                </div>
                <div className="flex m-5 p-5 gap-5 items-center justify-center">
                    <h2>hello</h2>
                    <div>
                        <h1 className="font-medium text-lg">Minimize Risk</h1>
                        <p className="font-light text-lg">Offset risk and minimize losses as a liquidity provider with rDPX rebates.</p>
                    </div>
                </div>
                <div className="flex m-5 p-5 gap-5 items-center justify-center">
                    <h2>hello</h2>
                    <div>
                        <h1 className="font-medium text-lg">Pricing Efficiency</h1>
                        <p className="font-light text-lg">Our options collateral efficiency gives Dopex a distinct advantage in pricing, allowing for immediate arbitrage opportunities.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BuiltSection;