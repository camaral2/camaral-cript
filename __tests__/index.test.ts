import { CaCripto } from '../src/index';

describe('testing module', () => {
  test('cripto function data 1', () => {
    expect(CaCripto('Minha casa é grande para fazer um bom trabalho de estudo com os meus colegas','key')).toStrictEqual({"hash": "f5c7a49ff514204e92efd64e7c123fbf100132f1d66008107e6f3ac6ceb306c22d6ae433b74ab25280cc61c29c670eaddfcacd113cc20c50238c63a4dbfa668a"});
  });
  test('cripto function data 2', () => {
    expect(CaCripto('Minha casa é grande para fazer um bom trabalho de estudo com os meus colegas e minha irmã','key')).toStrictEqual({"hash": "48682c469c716fb99a5f6345e2cea3ed9190469d42dd37d4ada82a1d0dbbceb6a2c5e55a7b54c9b38c3a7194eefdeb68c70a4b360aa18f12a25a2151e8b30990"});
  });
  test('cripto function data 3', () => {
    expect(CaCripto('Minha casa é grande para fazer um bom trabalho de estudo com os meus colegas e minha irmã, podendo ser num dia de semana','key')).toStrictEqual({"hash": "adeb31c71c74bff46d960a33a286ecc61d7e5b2af82c4c751b03a9955e175c9cd8cea2e662b941c26f80454ca1c767001dd4492b89a9d7ad299eaac44e74a6e4"});
  });
  test('cripto function data 4', () => {
    expect(CaCripto('Minha casa é grande para fazer um bom trabalho de estudo com os meus colegas e minha irmã, podendo ser num dia de semana e num ano em que a escola for boa','key')).toStrictEqual({"hash": "acf83047a34373453892f15e8db609ce88d7d112f7e1766b4d8789a2b8a731ac8b2408a07930239914925586d9096f9af42ce537201864ff6aa189e9dbf6ec39"});
  });
  test('cripto function data 5', () => {
    expect(CaCripto('Minha casa é grande para fazer um bom trabalho de estudo com os meus colegas e minha irmã, podendo ser num dia de semana e num ano em que a escola for ruim','key')).toStrictEqual({"hash": "ffe94872a1bc58223495e87ce296bd730e31130876ce71b582835a6c9842c77db2dbe456875bc2877fce1ee7c50e2a4ce0928f85e347f072298c81f294752c12"});
  });

});