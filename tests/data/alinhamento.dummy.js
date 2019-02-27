const parlamentar = {
  estado: 'BAHIA',
  uf: 'BA',
  idade_posse: 70,
  nome_coligacao: 'FRENTE DO TRABALHO POR TODA BAHIA',
  nome_candidato: 'JOSE ALVES ROCHA',
  cpf: '04789113515',
  recebeu: false,
  num_partido: '22',
  email: 'DEP.JOSEROCHA@UOL.COM.BR',
  nome_social: '#NULO#',
  nome_urna: 'JOSE ROCHA',
  reeleicao: '1',
  ocupacao: 'MÉDICO',
  nome_exibicao: 'JOSE ALVES ROCHA',
  raca: 'BRANCA',
  tipo_agremiacao: 'COLIGAÇÃO',
  n_candidatura: 5,
  composicao_coligacao: 'PT / PC do B / PP / PSB / PSD / PR / PODE',
  tem_foto: 1,
  partido: 'PARTIDO DA REPÚBLICA',
  sg_partido: 'PR',
  grau_instrucao: 'SUPERIOR COMPLETO',
  genero: 'MASCULINO',
  eleito: true,
  respondeu: false,
  cpf_vot:
   [ { id: 94, resposta: 0, cpf: '04789113515', proposicao_id: 4968 },
     { id: 583, resposta: 1, cpf: '04789113515', proposicao_id: 6095 },
     { id: 1072, resposta: 1, cpf: '04789113515', proposicao_id: 6204 },
     { id: 1561, resposta: 1, cpf: '04789113515', proposicao_id: 6259 },
     { id: 2050, resposta: 1, cpf: '04789113515', proposicao_id: 6286 },
     { id: 2539, resposta: 1, cpf: '04789113515', proposicao_id: 6310 },
     { id: 3028,
       resposta: -1,
       cpf: '04789113515',
       proposicao_id: 6352 },
     { id: 3517, resposta: 1, cpf: '04789113515', proposicao_id: 6354 },
     { id: 4006, resposta: 1, cpf: '04789113515', proposicao_id: 6358 },
     { id: 4495, resposta: 1, cpf: '04789113515', proposicao_id: 6359 },
     { id: 4984, resposta: 0, cpf: '04789113515', proposicao_id: 6369 },
     { id: 5473, resposta: 0, cpf: '04789113515', proposicao_id: 6370 },
     { id: 5962, resposta: 0, cpf: '04789113515', proposicao_id: 6371 },
     { id: 6451, resposta: 1, cpf: '04789113515', proposicao_id: 6377 },
     { id: 6940, resposta: 1, cpf: '04789113515', proposicao_id: 6378 },
     { id: 7429, resposta: 1, cpf: '04789113515', proposicao_id: 6502 },
     { id: 7918, resposta: 1, cpf: '04789113515', proposicao_id: 6517 },
     { id: 8407, resposta: 1, cpf: '04789113515', proposicao_id: 6531 },
     { id: 8896, resposta: 0, cpf: '04789113515', proposicao_id: 6575 },
     { id: 9385, resposta: 0, cpf: '04789113515', proposicao_id: 6608 },
     { id: 9874, resposta: 1, cpf: '04789113515', proposicao_id: 6675 },
     { id: 10363,
       resposta: 1,
       cpf: '04789113515',
       proposicao_id: 7252 },
     { id: 10852,
       resposta: 0,
       cpf: '04789113515',
       proposicao_id: 7291 },
     { id: 11341,
       resposta: 0,
       cpf: '04789113515',
       proposicao_id: 7317 },
     { id: 11830,
       resposta: 1,
       cpf: '04789113515',
       proposicao_id: 7431 },
     { id: 12319,
       resposta: 1,
       cpf: '04789113515',
       proposicao_id: 7492 },
     { id: 12808,
       resposta: 1,
       cpf: '04789113515',
       proposicao_id: 7546 },
     { id: 13297,
       resposta: 1,
       cpf: '04789113515',
       proposicao_id: 7566 },
     { id: 13786,
       resposta: 0,
       cpf: '04789113515',
       proposicao_id: 7927 },
     { id: 14275,
       resposta: 1,
       cpf: '04789113515',
       proposicao_id: 8175 },
     { id: 14764,
       resposta: 1,
       cpf: '04789113515',
       proposicao_id: 8309 },
     { id: 15253,
       resposta: -1,
       cpf: '04789113515',
       proposicao_id: 8334 },
     { id: 15742,
       resposta: 0,
       cpf: '04789113515',
       proposicao_id: 99999 } ]
}

const respostas = {
  "4968":1,"6095":0,"6204":0,"6259":-2,"6286":0,"6310":0,"6352":0,"6354":0,"6358":0,"6359":0,"6369":0,"6370":0,"6371":0,"6377":0,"6378":0,"6502":0,"6517":0,"6531":0,"6575":0,"6608":0,"6675":0,"7252":0,"7291":0,"7317":0,"7431":0,"7492":0,"7546":-1,"7566":0,"7927":0,"8175":0,"8309":0,"8334":0,"99999":0
}

module.exports = {
  parlamentar: parlamentar,
  respostas: respostas
}