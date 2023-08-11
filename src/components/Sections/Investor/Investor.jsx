import ocra from '../../../assets/orca_traders.png';
import pattern from '../../../assets/pattern.png';
import debase from '../../../assets/debase.svg';
import hardwood from '../../../assets/hardwood_orcz.svg';
import dcv from '../../../assets/dcv.png';

const Investor = () => {
    return (
        <div className='items-center justify-center text-center'>
            <p style={{
                fontFamily: "'JetBrains Mono', sans-serif",
                color: 'transparent', 
                backgroundImage: 'linear-gradient(170deg, #22e1ff, #1d8fe1 51.79%, #625eb1)',
                WebkitBackgroundClip: 'text', 
                backgroundClip: 'text', 
            }} className="text-2xl  uppercase m-6 p-20">Investors & Partners</p>
            <div className='grid grid-cols-1 md:grid-cols-2 justify-items-center gap-x-10 gap-y-20 items-center'>
                <h3 className="ml-8 text-6xl text-black dark:text-white">TΞtranodΞ</h3>
                <h3 className="ml-8 text-6xl text-black dark:text-white">DefiGod</h3>
                <img src={ocra} alt="OrcaTraders" className="h-24 dark:invert dark:brightness-0 object-contain"></img>
                <img src={pattern} alt="Pattern" className="h-36 dark:invert dark:brightness-0 object-contain"></img>
                <img src={debase} alt="Debase" className="h-14 lg:h-24 dark:invert dark:brightness-0 object-contain"></img>
                <img src={hardwood} alt="Hardwood Orcz" className="h-14 lg:h-20 dark:invert dark:brightness-0 object-contain"></img>
                <img src={dcv} alt="DCV" className="h-18 lg:h-24 object-contain"></img>
            </div>
        </div>
    );
};

export default Investor;