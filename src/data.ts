export interface Discipline {
  name: string;
  description: string;
}

export interface Phase {
  number: number;
  title: string;
  color: string;
  icon: string;
  disciplines: Discipline[];
  technologies: string[];
  skills: string[];
  competencies: string[];
  realProblems: string[];
}

export const coursePhases: Phase[] = [
  {
    number: 1,
    title: "BASE TÉCNICA",
    color: "blue",
    icon: "Calculator",
    disciplines: [
      { name: "Cálculo Aplicado", description: "Base matemática para modelagem de fenômenos físicos e elétricos." },
      { name: "Projeto Integrador – Iniciação Científica", description: "Introdução à pesquisa e metodologia científica aplicada à energia." },
      { name: "Tecnologia da Informação", description: "Fundamentos de computação e ferramentas digitais para engenharia." },
      { name: "Fenômenos Físicos", description: "Estudo das leis da física que regem o comportamento da matéria e energia." },
      { name: "Geometria Analítica", description: "Vetores e geometria no espaço para representação de campos e forças." },
      { name: "Ciência e Tecnologia dos Materiais", description: "Propriedades dos materiais condutores, isolantes e semicondutores." },
      { name: "Desenho Técnico Auxiliado por Computador", description: "Leitura e elaboração de projetos técnicos usando ferramentas CAD." }
    ],
    technologies: ["Excel básico", "AutoCAD (ou similar)", "Ferramentas computacionais básicas"],
    skills: ["Raciocínio lógico", "Interpretação técnica", "Leitura de projetos", "Organização de dados"],
    competencies: ["Base matemática e física", "Pensamento estruturado", "Comunicação técnica inicial"],
    realProblems: [
      "Erros básicos em projetos elétricos",
      "Dificuldade em interpretar desenhos técnicos",
      "Falta de organização de dados técnicos",
      "Baixa base analítica em equipes"
    ]
  },
  {
    number: 2,
    title: "FUNDAMENTOS ELÉTRICOS E ANÁLISE",
    color: "emerald",
    icon: "Zap",
    disciplines: [
      { name: "Estatística e Probabilidade", description: "Análise de incertezas e tratamento de dados experimentais." },
      { name: "Circuitos Elétricos A", description: "Análise de circuitos em corrente contínua e leis fundamentais." },
      { name: "Introdução a Sistemas de Energia", description: "Visão geral da cadeia de geração, transmissão e distribuição." },
      { name: "Fundamentos de Eletromagnetismo", description: "Estudo de campos elétricos e magnéticos e suas interações." },
      { name: "Álgebra Linear", description: "Sistemas de equações e matrizes para resolução de redes elétricas." },
      { name: "Planilha Eletrônica Avançada", description: "Uso profissional do Excel para cálculos complexos e automação." },
      { name: "Segurança do Trabalho", description: "Normas de segurança (NR-10) e prevenção de acidentes elétricos." },
      { name: "Economia Aplicada", description: "Fundamentos econômicos para análise de viabilidade e mercado." }
    ],
    technologies: ["Excel avançado", "Ferramentas de análise estatística", "Softwares básicos de circuitos"],
    skills: ["Análise de dados", "Interpretação de circuitos", "Leitura de consumo energético", "Noções de custo"],
    competencies: ["Pensamento analítico", "Base elétrica", "Visão inicial de negócio"],
    realProblems: [
      "Falta de controle sobre consumo de energia",
      "Decisões sem base em dados",
      "Riscos operacionais (segurança elétrica)",
      "Custos mal analisados"
    ]
  },
  {
    number: 3,
    title: "APLICAÇÃO PRÁTICA",
    color: "amber",
    icon: "Wrench",
    disciplines: [
      { name: "Sistemas de Medição Elétrica", description: "Técnicas e instrumentos para medição de grandezas elétricas." },
      { name: "Circuitos Elétricos B", description: "Análise de circuitos em corrente alternada e sistemas trifásicos." },
      { name: "Produção de Energia", description: "Estudo das fontes de energia e processos de conversão." },
      { name: "Lógica de Programação em Matlab", description: "Desenvolvimento de algoritmos para simulação e cálculo numérico." },
      { name: "Materiais e Equipamentos Elétricos", description: "Especificação e aplicação de componentes em sistemas de potência." },
      { name: "Instalações Elétricas", description: "Dimensionamento e execução de redes elétricas de baixa tensão." },
      { name: "Atividade Curricular de Extensão I", description: "Aplicação de conhecimentos em projetos com a comunidade." }
    ],
    technologies: ["Matlab", "Equipamentos de medição elétrica", "Softwares de projetos elétricos"],
    skills: ["Programação aplicada", "Medição e análise elétrica", "Execução de instalações", "Diagnóstico técnico"],
    competencies: ["Integração prática", "Resolução de problemas", "Atuação técnica"],
    realProblems: [
      "Falhas em sistemas elétricos",
      "Falta de medição de consumo",
      "Instalações ineficientes",
      "Falta de automação em análises"
    ]
  },
  {
    number: 4,
    title: "SISTEMAS E EFICIÊNCIA",
    color: "orange",
    icon: "Gauge",
    disciplines: [
      { name: "Projetos de Instalações Elétricas Residenciais e Prediais", description: "Elaboração completa de projetos elétricos para edificações." },
      { name: "Regulação Técnica e Econômica", description: "Normas da ANEEL e regras do setor elétrico brasileiro." },
      { name: "Macros em Planilhas Eletrônicas", description: "Automação de processos e relatórios usando VBA." },
      { name: "Sistemas Elétricos de Potência", description: "Análise de grandes redes, fluxo de carga e estabilidade do sistema." },
      { name: "Fundamentos de Máquinas Elétricas", description: "Funcionamento de motores, geradores e transformadores." },
      { name: "Qualidade de Energia Elétrica", description: "Análise de distúrbios, harmônicos e conformidade da rede." },
      { name: "Matemática Financeira", description: "Cálculos de juros, payback e VPL para projetos de energia." },
      { name: "Introdução à Eficiência Energética", description: "Conceitos de conservação e otimização do uso da energia." }
    ],
    technologies: ["Excel avançado + VBA", "Softwares de análise elétrica", "Ferramentas de qualidade de energia"],
    skills: ["Análise de sistemas complexos", "Automação de relatórios", "Avaliação financeira", "Identificação de perdas"],
    competencies: ["Integração técnica + financeira", "Tomada de decisão", "Otimização de sistemas"],
    realProblems: [
      "Alto custo de energia",
      "Perdas elétricas ocultas",
      "Oscilações e má qualidade de energia",
      "Projetos sem viabilidade econômica"
    ]
  },
  {
    number: 5,
    title: "MERCADO E GESTÃO",
    color: "red",
    icon: "TrendingUp",
    disciplines: [
      { name: "Administração Geral", description: "Princípios de gestão, liderança e organização empresarial." },
      { name: "Comunicação e Pesquisa", description: "Desenvolvimento de relatórios técnicos e comunicação assertiva." },
      { name: "Pré-projeto de TCC", description: "Definição e planejamento do trabalho de conclusão de curso." },
      { name: "Eficiência Energética Aplicada", description: "Implementação de medidas de economia em indústrias e prédios." },
      { name: "Comercialização de Energia", description: "Operação no Mercado Livre de Energia e estratégias de compra." },
      { name: "Energia, Sociedade e Meio Ambiente", description: "Impactos socioambientais e sustentabilidade no setor energético." },
      { name: "Atividade Curricular de Extensão II", description: "Projetos práticos de impacto social e tecnológico." }
    ],
    technologies: ["Ferramentas de gestão", "Excel aplicado a negócios", "Sistemas de análise de mercado"],
    skills: ["Comunicação profissional", "Gestão energética", "Análise de contratos", "Planejamento estratégico"],
    competencies: ["Visão de negócio", "Gestão de energia", "Estratégia"],
    realProblems: [
      "Contratos de energia mal negociados",
      "Falta de estratégia energética",
      "Custos elevados",
      "Baixa eficiência operacional"
    ]
  },
  {
    number: 6,
    title: "CONSOLIDAÇÃO PROFISSIONAL",
    color: "slate",
    icon: "GraduationCap",
    disciplines: [
      { name: "Trabalho de Conclusão de Curso (TCC)", description: "Desenvolvimento de projeto final integrando todos os conhecimentos." },
      { name: "Formação Complementar", description: "Atividades extras para diversificação do perfil profissional." },
      { name: "Atividade Curricular de Extensão III", description: "Consolidação da prática extensionista e impacto social." },
      { name: "Optativas (LIBRAS, Inglês, Tópicos Especiais)", description: "Disciplinas de escolha do aluno para personalização da carreira." }
    ],
    technologies: ["Integração de todas (Excel, Matlab, etc.)", "Ferramentas de pesquisa"],
    skills: ["Resolução de problemas complexos", "Desenvolvimento de projetos", "Autonomia profissional"],
    competencies: ["Visão sistêmica", "Capacidade de entrega", "Integração total"],
    realProblems: [
      "Projetos energéticos mal estruturados",
      "Falta de profissionais completos (técnico + negócio)",
      "Ineficiência global na gestão de energia"
    ]
  }
];
