import React from "react";
import { IoMdAddCircleOutline } from 'react-icons/io';
import { FcStart } from 'react-icons/fc';


class App extends React.Component{
    constructor(){
        super()
        this.state={
            value:"",
            todo:[

            ],
             
        }
        console.log("constructor")
    }


    componentDidMount(){
        console.log("component did mount")
        let data = localStorage.getItem("Todo_List")
        console.log(data)
        if(data == null){
            this.state.todo = []
        }
        else{

        //parse
        this.state.todo= JSON.parse(data)
        }

        this.setState({})
    }






    handlechange=(val)=>{
        this.setState({
            value:val
        })
    }

    setdata=()=>{
        console.log(this.state.value)

        let obj={
            title:this.state.value,
            s:0
        }

        this.setState({
            todo:[...this.state.todo, obj]
        })
      
        localStorage.setItem("Todo_List",JSON.stringify(this.state.todo))

        this.setState({
      
            value:""
        })

        console.log(this.state.todo)
    }

    //state chg = 0 or 1
edit = (ind)=>{
    


    for(var i =0;i<this.state.todo.length;i++){
        this.state.todo[i].s=0
    }

    this.state.todo[ind].s=1
    this.setState({})
}

//todo title => value inp 
setnewtext=(val,ind)=>{
    this.state.todo[ind].title=val
       this.setState({
         
       })
   
   
   }
   
   update = (i)=>{
       this.state.todo[i].s=0
       localStorage.setItem("Todo_List",JSON.stringify(this.state.todo))
       this.setState({
         
       })
   }

   delete = (e)=>{
    this.state.todo.splice(e,1)
    this.setState({})
    localStorage.setItem("Todo_List",JSON.stringify(this.state.todo))
   }

    render(){
        console.log("render")
        return(
            <div >
                <h1 style={{color:"white"}}>Todo List</h1>
                <input type="text" onChange={(e)=>this.handlechange(e.target.value)} />
                <button onClick={()=>this.setdata()}>
                    <IoMdAddCircleOutline color="red"/>
                    </button>
                    {
                    this.state.todo.map((v,i)=>{
                        return(

                            v.s == 0 ?
                            //text 
                          
                            <li key={i} style={{listStyle:"none",margin:12+"px", color:"whitesmoke", fontWeight:600}}>
                              <i><FcStart/></i>
                                {v.title}
                              <button onClick={()=>this.edit(i)}>edit</button>
                              <button onClick={()=>this.delete()}>delete</button>

                            </li>

                            :
                            <li key={i} style={{listStyle:"none",margin:12+"px"}}>
                            <i><FcStart/></i> 
                            <input type="text" value={v.title} onChange={(e)=>this.setnewtext(e.target.value,i)} />
                            <button onClick={()=>this.update(i)}>update</button>


                          </li> 
                          

                        

                        )
                    })
                }

            </div>
        )
    }
}


export default App;

 