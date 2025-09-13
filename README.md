# 🛒 Tela de Produtos em 4 Estilos de Estilização

Este projeto implementa a **mesma interface** utilizando **quatro técnicas diferentes de estilização** no React:

1. **CSS Global**  
2. **CSS Modules**  
3. **Tailwind CSS**  
4. **styled-components**

---

## 📌 Exemplo de Tela

- **Navbar (fixa):** logo, toggle de tema (claro/escuro com persistência) e badge do carrinho.  
- **Grid de produtos responsivo:**  
  - ≤480px → 1 coluna  
  - 481–768px → 2 colunas  
  - 769–1024px → 3 colunas  
  - ≥1025px → 4 colunas  
- **Card de produto:**  
  - Imagem 1:1 (lazy loading, placeholder)  
  - Título com 2 linhas + ellipsis  
  - Preço e rating (★)  
  - Tag dinâmica (“Novo”/“Promo”)  
  - Botão **Adicionar** com variantes: `solid`, `outline`, `ghost`  

---

## 🎨 Estados e Interações

- Hover (elevação/sombra)  
- Focus visível  
- Disabled  
- Loading → **Skeleton** (sem layout shift, atraso simulado)  
- **Dark Mode** aplicado a cores/sombras/bordas  

---

## ♿ Acessibilidade

- Navegação por teclado  
- Uso de `aria-*` onde necessário  
- Contraste mínimo **4.5:1**  

---

## ✨ Animações

- Transições suaves (150–250ms)  
- Usando `transform` e `opacity`  

---

## 📂 Estrutura do Projeto

```

01-css-global/
├── components/
│   ├── Navbar.jsx
│   ├── ProductCard.jsx
│   ├── Button.jsx
│   └── Skeleton.jsx
└── README.md

02-css-modules/
└── ... (mesma estrutura)

03-tailwind/
└── ... (mesma estrutura)

04-styled-components/
└── ... (mesma estrutura)

````


---

## 🚀 Como Rodar o Projeto

1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/seu-repo.git
````

2. Instale as dependências:

   ```bash
   npm install
   ```
3. Acesse a pasta da versão desejada e rode o projeto:

   ```bash
   cd 01-css-global
   npm run dev
   ```

---

## ✅ Critérios de Aceite Atendidos

* Breakpoints **exatos**
* Dark mode com **persistência em localStorage**
* **Focus ring visível**
* Skeleton sem layout shift
* Botão com variantes consistentes nos dois temas
* Organização clara de pastas e uso de **design tokens** (cores, espaçamentos, radius, sombras)

---

## 📖 Tecnologias

* React
* Vite
* CSS (Global, Modules, Tailwind, styled-components)

---
```

Quer que eu também prepare **modelos curtos de README.md** para colocar **dentro de cada pasta** (`01-css-global/`, `02-css-modules/`, etc.), explicando só a técnica usada?
```
