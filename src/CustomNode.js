
const CustomNode = (props, click) => {
    return (
        <g>
          <circle r="15" fill={"#FFF"} onClick={() => click(props.nodeDatum)}/>
          <text fill="black" strokeWidth="0.5" x="20" y="-5">
            {props.nodeDatum.name}
          </text>
        </g>
      );
}

export default CustomNode