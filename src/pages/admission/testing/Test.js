import React, {useState,useEffect} from 'react';

export default  function Test(){

    const [list,setList]=useState( JSON.parse( localStorage.getItem('list')))
    const [name,setName]=useState('')
    const [sureName,setSureName]=useState('')


    const save=()=>{
        if (name==='' || sureName===''){
         alert('Kattakni toldir')
        }else if (name!=='' && sureName!==''){
            setList([...list,{name: name, sureName: sureName}])
            setName('')
            setSureName('')
        }
    }

    useEffect(()=>{
       localStorage.setItem('list',JSON.stringify(list))

    },[list])

    const del = (ind)=>{
        setList(list.filter((item,index)=>index!==ind))
    }

    const edit=(ind)=>{
        setList(list.filter((item,index)=> index===ind

        ))
    }

        return (
            <div className={'d-block'}>
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
                <input type="text"  value={sureName} onChange={(e)=>setSureName(e.target.value)}/>

                <button className={'btn btn-success'} onClick={save}> Save please </button>

                <h3>{list.map((item,index)=>{
                    return(
                        <ul>
                            <li>{index+1}. {item.sureName} {item.name}
                                <button onClick={()=>edit(index)}>edit</button>
                                <button onClick={()=>del(index)}>delete</button>
                            </li>
                        </ul>
                    )
                })}</h3>
            </div>
        );
}

;