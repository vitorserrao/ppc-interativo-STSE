export interface Discipline {
  id: string;
  name: string;
  code: string;
  hours: number;
  prerequisites: string[];
  phase: number;
}

export const curriculumData: Discipline[] = [
  // Fase 1
  { id: "101", name: "Cálculo Aplicado", code: "CAL20801", hours: 120, prerequisites: [], phase: 1 },
  { id: "102", name: "Projeto Integrador Iniciação Científica", code: "PII20801", hours: 40, prerequisites: [], phase: 1 },
  { id: "103", name: "Tecnologia da Informação", code: "TCI20801", hours: 40, prerequisites: [], phase: 1 },
  { id: "104", name: "Fenômenos Físicos", code: "FFS20801", hours: 80, prerequisites: [], phase: 1 },
  { id: "105", name: "Geometria Analítica", code: "GAN20801", hours: 60, prerequisites: [], phase: 1 },
  { id: "106", name: "Ciência e Tecnologia dos Materiais", code: "CTM20801", hours: 40, prerequisites: [], phase: 1 },
  { id: "107", name: "Desenho Técnico Auxiliado por Computador", code: "DAC20801", hours: 20, prerequisites: [], phase: 1 },
  
  // Fase 2
  { id: "201", name: "Estatística e Probabilidade", code: "ESP20802", hours: 60, prerequisites: ["101"], phase: 2 },
  { id: "202", name: "Circuitos Elétricos A", code: "CEA20802", hours: 80, prerequisites: ["101", "104"], phase: 2 },
  { id: "203", name: "Introdução à Sistemas de Energia", code: "ISE20802", hours: 40, prerequisites: ["102", "103"], phase: 2 },
  { id: "204", name: "Fundamentos de Eletromagnetismo", code: "FEM20802", hours: 40, prerequisites: ["101", "104"], phase: 2 },
  { id: "205", name: "Álgebra Linear", code: "ALG20802", hours: 60, prerequisites: ["105"], phase: 2 },
  { id: "206", name: "Planilha Eletrônica Avançada", code: "PEA20802", hours: 40, prerequisites: ["103"], phase: 2 },
  { id: "207", name: "Segurança do Trabalho", code: "SEG20802", hours: 40, prerequisites: [], phase: 2 },
  { id: "208", name: "Economia Aplicada", code: "ECA20802", hours: 40, prerequisites: ["101"], phase: 2 },
  
  // Fase 3
  { id: "301", name: "Sistemas de Medição Elétrica", code: "SME20803", hours: 40, prerequisites: ["201", "202", "203", "204"], phase: 3 },
  { id: "302", name: "Circuitos Elétricos B", code: "CEB20803", hours: 80, prerequisites: ["202"], phase: 3 },
  { id: "303", name: "Produção de Energia", code: "PRE20803", hours: 80, prerequisites: ["104", "203"], phase: 3 },
  { id: "304", name: "Lógica de Programação em Matlab", code: "MAT20803", hours: 40, prerequisites: ["205", "206"], phase: 3 },
  { id: "305", name: "Materiais e Equipamentos Elétricos", code: "MEE20803", hours: 40, prerequisites: ["106", "203"], phase: 3 },
  { id: "306", name: "Instalações Elétricas", code: "IEL20803", hours: 40, prerequisites: ["107", "207"], phase: 3 },
  { id: "307", name: "Atividade Curricular de Extensão I", code: "EXT20803", hours: 100, prerequisites: ["800h"], phase: 3 },
  
  // Fase 4
  { id: "401", name: "Projetos de Instalações Elétricas Resid. e Prediais", code: "PIE20804", hours: 80, prerequisites: ["302", "305", "306"], phase: 4 },
  { id: "402", name: "Regulação Técnica e Econômica", code: "RTE20804", hours: 40, prerequisites: ["206", "208", "303"], phase: 4 },
  { id: "403", name: "Macros em Planilhas Eletrônicas", code: "MPE20804", hours: 40, prerequisites: ["304"], phase: 4 },
  { id: "404", name: "Sistemas Elétricos de Potência", code: "SEP20804", hours: 40, prerequisites: ["302", "303"], phase: 4 },
  { id: "405", name: "Fundamentos de Máquinas Elétricas", code: "FME20804", hours: 80, prerequisites: ["301", "302"], phase: 4 },
  { id: "406", name: "Qualidade de Energia Elétrica", code: "QEE20804", hours: 40, prerequisites: ["301", "302"], phase: 4 },
  { id: "407", name: "Matemática Financeira", code: "MTF20804", hours: 40, prerequisites: ["208"], phase: 4 },
  { id: "408", name: "Introdução à Eficiência Energética", code: "IEE20804", hours: 40, prerequisites: ["301", "305", "306"], phase: 4 },
  
  // Fase 5
  { id: "501", name: "Administração Geral", code: "ADM20805", hours: 40, prerequisites: ["208"], phase: 5 },
  { id: "502", name: "Comunicação e Pesquisa", code: "CPQ20805", hours: 40, prerequisites: ["103"], phase: 5 },
  { id: "503", name: "Pré-projeto de TCC", code: "PPT20805", hours: 40, prerequisites: ["1400h"], phase: 5 },
  { id: "504", name: "Eficiência Energética Aplicada", code: "EEA20805", hours: 80, prerequisites: ["401", "405", "406", "408"], phase: 5 },
  { id: "505", name: "Comercialização de Energia", code: "CME20805", hours: 80, prerequisites: ["402", "403", "407"], phase: 5 },
  { id: "506", name: "Energia, Sociedade e Meio Ambiente", code: "EMA20805", hours: 40, prerequisites: ["203"], phase: 5 },
  { id: "507", name: "Atividade Curricular de Extensão II", code: "EXT20805", hours: 100, prerequisites: ["1400h"], phase: 5 },
  
  // Fase 6
  { id: "601", name: "Trabalho de Conclusão de Curso", code: "TCC20806", hours: 300, prerequisites: ["503"], phase: 6 },
  { id: "602", name: "Formação Complementar", code: "FCO20806", hours: 40, prerequisites: [], phase: 6 },
  { id: "603", name: "Atividade Curricular de Extensão III", code: "EXT20806", hours: 20, prerequisites: ["1400h"], phase: 6 },
  { id: "604", name: "Linguagem Brasileira de Sinais* (optativa)", code: "LIB20806", hours: 40, prerequisites: [], phase: 6 },
  { id: "605", name: "Tópicos Especiais em Sistemas de Energia* (optativa)", code: "TEE20806", hours: 40, prerequisites: [], phase: 6 },
  { id: "606", name: "Inglês Instrumental* (optativa)", code: "ING20806", hours: 40, prerequisites: [], phase: 6 },
];
