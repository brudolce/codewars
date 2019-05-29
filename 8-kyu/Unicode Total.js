function uniTotal(str)
{
  return [...str].reduce((total, char) => total + char.charCodeAt(0), 0)
}
