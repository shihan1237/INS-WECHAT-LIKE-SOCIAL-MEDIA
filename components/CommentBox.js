import { useEffect, useState } from "react";


export default (props) => {
    const [isCommitAvailable, setIsCommitAvailable] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [inputPics, setInputPics] = useState([]);
    const columns = 'grid-cols-3';
    useEffect(() => {
        if (isCommitAvailable) {
            document.querySelector('.submitPostButton').removeAttribute("disabled");
        } else {
            document.querySelector('.submitPostButton').setAttribute("disabled", true);
        }

        if (inputPics.length > 0 || inputValue != '') {
            setIsCommitAvailable(true);
        } else {
            setIsCommitAvailable(false);
        }
    }, [isCommitAvailable, inputPics]);
    useEffect(() => {
        window.onbeforeunload = function (e) {
            e = e || window.event;
            if (e && isCommitAvailable) {
                e.returnValue = 'Any string';
            }
            if (isCommitAvailable) {
                return 'Any string';
            }

        };
    }, [isCommitAvailable]);

    return (
        <div className="box-border p-5 h-screen w-screen max-w-screen-sm fixed 
        -top-0 bg-gray-200 z-50 overflow-scroll" style={{
                top: `${props.show ? '-0px' : '-100%'}`,
                transition: 'all 0.5s'
            }}>
                <div className="flex justify-between">
                    <button
                        className={"w-14 bg-gray-400 m-1 rounded-md overflow-hidden text-slate-100" +
                            'bg-gray-200'} onClick={() => {
                                props.func(null, false)
                            }}>
                        Back</button>
                    <button disabled
                        className={" submitPostButton w-14 bg-gray-400 m-1 rounded-md overflow-hidden text-slate-100" +
                            (isCommitAvailable ? ' bg-green-500' : 'bg-gray-200')}>
                        Send</button>
                </div>
                <textarea type="text" placeholder="send a post" autoFocus
                    onChange={(e) => {
                        setInputValue(e.target.value)
                        if (e.target.value != '') {
                            setIsCommitAvailable(true);
                        } else {
                            setIsCommitAvailable(false);
                        }

                    }}
                    className=" block flex-grow my-1  p-2 "
                    style={{ margin: "6px auto", width: '100%', height: '10rem', resize: 'none' }} />
                <div className={`grid  ${columns} gap-1 my-1 mr-2`}>
                    {inputPics.map((value, key) => {
                        let url = URL.createObjectURL(value)
                        url = 'url(' + url + ')'
                        return (
                            <div className=" bg-no-repeat bg-cover bg-center cursor-pointer" style={{
                                height: '30vw',
                                maxHeight: '200px',
                                backgroundImage: `${url}`,
                            }} key={key}>

                            </div>
                        )
                    })}
                    <div className=" bg-[url(/img/addPic.jpg)] bg-no-repeat bg-center bg-contain cursor-pointer" style={{
                        height: '30vw',
                        maxHeight: '200px'
                    }} onClick={() => {
                        document.querySelector('.file-upload').click();
                    }}>
                        <input className="file-upload invisible w-0"
                            multiple type="file" accept="image/*" name="picture"
                            onChange={(e) => {
                                const pics = document.querySelector('.file-upload').files;
                                const picsArr = []
                                for (let pic in pics) {
                                    if (pics[pic] instanceof File)
                                        picsArr.push(pics[pic])
                                };
                                if (inputPics.length + picsArr.length > 9) {
                                    alert("You can only upload less than 9 pictures!")
                                    return
                                }
                                setInputPics([
                                    ...inputPics,
                                    ...picsArr

                                ]);



                            }} /> </div>

                </div>



        </div>
    )
}