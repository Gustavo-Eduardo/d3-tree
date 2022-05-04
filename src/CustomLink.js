const CustomLink = (linkDatum, orientation) => {
    const { source, target } = linkDatum;
    const { link } = target?.data?.attributes

    return !link ? null : orientation === 'horizontal'
      ? `M${source.y},${source.x}L${target.y},${target.x}`
      : `M${source.x},${source.y}L${target.x},${target.y}`;
  };
  
  export default CustomLink