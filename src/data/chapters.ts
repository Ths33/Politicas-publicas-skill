export type Evidence = { title:string; url:string; institution:string; accessed:string };
export type Scene = {id:string;year:string;eyebrow:string;title:string;description:string;metric?:string;metricLabel?:string;sourceIds:string[]};
export const evidence:Record<string,Evidence>={
 bcbReal:{title:'O Plano Real',institution:'Banco Central do Brasil',url:'https://www.bcb.gov.br/controleinflacao/planoreal',accessed:'2026-10-21'},
 bcb30:{title:'30 anos do Real',institution:'Banco Central do Brasil',url:'https://www.bcb.gov.br/controleinflacao/30anosreal',accessed:'2026-10-21'},
 ibge:{title:'IPCA — tabela 1737',institution:'IBGE/SIDRA',url:'https://sidra.ibge.gov.br/tabela/1737',accessed:'2026-10-21'}
};
export const scenes:Scene[]=[
{id:'antes-do-real',year:'1993',eyebrow:'01 / O problema',title:'Antes do Real, a inflação moldava o cotidiano',description:'A escalada dos preços reduzia a previsibilidade de salários, contratos e compras. Entender esse cenário é indispensável para interpretar a estabilização posterior.',sourceIds:['bcbReal','bcb30']},
{id:'preparacao',year:'1993',eyebrow:'02 / Preparação',title:'A estabilização começou antes da nova moeda',description:'O Programa de Ação Imediata e medidas fiscais integraram a preparação do plano. O Real não foi apenas uma troca de cédulas.',sourceIds:['bcbReal','bcb30']},
{id:'urv',year:'1994',eyebrow:'03 / Transição',title:'A URV ajudou a coordenar a mudança',description:'A Unidade Real de Valor foi introduzida como referência de valor antes da circulação da moeda. Essa transição foi parte central da estratégia.',metric:'URV',metricLabel:'Unidade Real de Valor',sourceIds:['bcbReal']},
{id:'moeda',year:'Julho de 1994',eyebrow:'04 / A nova moeda',title:'O Real entrou em circulação',description:'Em 1º de julho de 1994, a nova moeda começou a circular. A etapa monetária foi precedida por um processo de preparação institucional e econômica.',metric:'01.07.1994',metricLabel:'Início da circulação do Real',sourceIds:['bcbReal','bcb30']},
{id:'inflacao',year:'1994',eyebrow:'05 / Os indicadores',title:'A inflação desacelerou — os preços não voltaram ao passado',description:'A inflação mensal diminuiu rapidamente após a introdução do Real. Uma taxa menor significa que os preços sobem mais devagar, não necessariamente que ficaram mais baratos.',sourceIds:['ibge','bcbReal']},
{id:'legado',year:'1995 em diante',eyebrow:'06 / O legado',title:'Estabilização é um processo, não um único acontecimento',description:'A evolução posterior dependeu de decisões de política econômica, condições externas e mudanças institucionais. A narrativa seguirá os governos sem atribuir resultados por simples coincidência de datas.',sourceIds:['bcb30']}
];
export const ipca1994=[{month:'Junho',value:47.43},{month:'Julho',value:6.84},{month:'Agosto',value:1.86}];
