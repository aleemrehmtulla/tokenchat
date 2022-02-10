import Image from "next/image";
function Message(props) {
  return (
    <div className="pr-20 w-screen">
      <div className="pt-1 flex space-x-8  ">
        <div className="c-message">
          <div className="c-message__left">
            <div className="c-picture">
              <div className="w-14">
                {" "}
                <Image
                  className="rounded-full w-14"
                  width={500}
                  height={500}
                  src="/images/blank.webp"
                  alt="example.eth"
                />
              </div>
            </div>
          </div>
          <div className="c-message__right">
            <div className="c-info">
              <span className="c-ens bg-blue-100 text-blue-600">
                {props.name.slice(0, 7)}
              </span>
              <span className="c-timestamp w-full text-gray-600">
                Today at {props.time} PM
              </span>
            </div>
            <span className="c-body">{props.message}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Message;
