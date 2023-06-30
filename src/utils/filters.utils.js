const filter = (fornecedor, codigo, descricao, listaObjetos) => {
  return listaObjetos.filter(objeto => {
    const fornecedorRegex = new RegExp(fornecedor, 'i');
    const codigoRegex = new RegExp(codigo, 'i');
    const descricaoRegex = new RegExp(descricao, 'i');

    return (
      (!fornecedor || fornecedorRegex.test(objeto.fornecedor)) &&
      (!codigo || codigoRegex.test(objeto.codInt)) &&
      (!descricao || descricaoRegex.test(objeto.produto))
    );
  });
};

module.exports = {
  filter,
}