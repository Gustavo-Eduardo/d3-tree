const DEFAULT_NODE_CIRCLE_RADIUS = 15;
const textLayout = {
  title: {
    textAnchor: 'start',
    x: 40,
  },
  attribute: {
    x: 40,
    dy: '1.2em',
  },
};
const CustomNode = (props) => {
  return (
    <>
      <circle
        r={DEFAULT_NODE_CIRCLE_RADIUS}
        onClick={(evt) => {
          props.toggleNode()
          props.onNodeClick(evt)
        }}
      ></circle>
      <g className="rd3t-label">
        <text className="rd3t-label__title" {...textLayout.title}>
          {props.nodeDatum.name}
        </text>
        <text className="rd3t-label__attributes">
          {props.nodeDatum.attributes &&
            Object.entries(props.nodeDatum.attributes).map(([labelKey, labelValue], i) => (
              <tspan key={`${labelKey}-${i}`} {...textLayout.attribute}>
                {labelKey}: {typeof labelValue === 'boolean' ? labelValue.toString() : labelValue}
              </tspan>
            ))}
        </text>
      </g>
    </>
  );
}

export default CustomNode