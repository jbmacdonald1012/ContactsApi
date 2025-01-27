const home = (req, res) => {
  res.json('Esteissy Macdonald');
};
const kids = (req, res) => {
  res.json('Logan Macdonald, Chloe Macdonald, Isabella Macdonald, Charlotte Macdonald');
};
module.exports = {
  home,
  kids
};
