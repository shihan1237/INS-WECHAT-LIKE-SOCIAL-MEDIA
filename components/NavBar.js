import { useEffect, useState } from 'react'

export default (props) => {
    const [isSwitchBarColor, setIsSwitchBarColor] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, []);
    function handleScroll() {
        let height = document.documentElement.scrollTop
        if (height >= 285) setIsSwitchBarColor(true)
        else setIsSwitchBarColor(false)
    }


    return (
        <div className={"navbar h-12 w-full max-w-screen-sm fixed top-0 z-30 flex  justify-between"
            + (isSwitchBarColor ? ' bg-gray-200' : '')} >
            <div className={" iconfont inline-block text-slate-100 h-8 w-8 text-4xl  mx-3 cursor-pointer "
                + (isSwitchBarColor ? ' text-black' : 'text-slate-100')}
                onClick={() => {
                    window.location.href = "/"
                }}
                >&#xe60e;</div>
            <div className={" iconfont inline-block text-slate-100 h-8 w-8 text-4xl  mx-3 cursor-pointer "
                + (isSwitchBarColor ? ' text-black' : 'text-slate-100')}
                onClick={() => {
                    props.func(null, true)
                }}
            >&#xe600;</div>
        </div>
    )
}