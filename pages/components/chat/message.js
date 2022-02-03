function Message(props){
    return (
        <div className="pt-1 flex space-x-8 ">
        <div className="c-message">
                       <div className="c-message__left">
                           <div className="c-picture">
                               <img className="c-image" src="https://i.pravatar.cc/50" alt="example.eth" />
                           </div>
                       </div>
                       <div className="c-message__right">
                           <div className="c-info">
                               <span className="c-ens bg-blue-100 text-blue-600">@{props.name}</span>
                               <span className="c-address text-gray-800">{props.address.slice(0, 7)}</span>
                               <span className="c-timestamp text-gray-600">Today at {props.time} PM</span>
                           </div>
                           <span className="c-body">
                           {props.message}
                           </span>
                       </div>
                   </div>
        </div>
    )
}
export default Message