const CustomLink = (linkDatum) => {
  const { source, target } = linkDatum;
  return `M ${source.y} ${source.x}
  C ${(source.y + target.y) / 2} ${source.x},
    ${(source.y + target.y) / 2} ${target.x},
    ${target.y} ${target.x}`
};

export default CustomLink