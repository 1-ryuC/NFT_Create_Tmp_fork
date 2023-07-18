import Image from 'next/image'

function Header() {
    return <header>
            <nav className="max-w-full lg:pt-1 bg-black">
                <div className="grid grid-rows-12 grid-flow-col">
                    <div className='justify-front flex'>
                    <img className="mx-4 mt-2" src="/logo.png" alt="LOGO" height="40" width="50" />
                    </div>
                    <div className="justify-end px-2 flex">
                        <div className="bg-[url('/opensea_icon.png')] invisible md:visible px-2 pt-8 mx-2 bg-center bg-cover"><a className="px-2 py-4" href="https://testnets.opensea.io/0xA3501E12704128913f021F0e3b6c0aB85be0092c"></a></div>
                        <div className="bg-[url('/twitter_icon.png')] invisible md:visible px-2 pt-8 mx-4 bg-center bg-cover"><a className="px-2 py-4" href="https://twitter.com/whitebearN99807"></a></div>
                    </div>
                </div>
            </nav>
        </header>
}

export default Header;