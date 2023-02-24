
```
Exported with AIPRM https://www.aiprm.com by Eugenio de Frutos on 29/1/2023, 20:35:34
```

---


**User:**
crear un código en html, css, javascript para pasar al portapapeles el contenido de un texto contenido en <pre></pre>

---

**ChatGPT:**
Aquí hay un código HTML, CSS y JavaScript que copia el contenido de un elemento &lt;pre&gt; en el portapapeles:
HTML:
```bash
bash
Copy code
<pre id="texto">Contenido a copiar</pre>
<button id="copyBtn">Copiar al portapapeles</button>
```
CSS:
```css
css
Copy code
#copyBtn {
  padding: 5px 10px;
  border: 1px solid black;
  border-radius: 5px;
  cursor: pointer;
}
```
JavaScript:
```javascript
javascript
Copy code
const copyBtn = document.querySelector('#copyBtn');
const texto = document.querySelector('#texto');

copyBtn.addEventListener('click', () => {
  const tempInput = document.createElement('input');
  tempInput.value = texto.textContent;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand('copy');
  document.body.removeChild(tempInput);
});
```

---

**User:**
poner el texto sin formato “ #copyBtn {
  padding: 5px 10px;
  border: 1px solid black;
  border-radius: 5px;
  cursor: pointer;
}

---

**ChatGPT:**
El texto sin formato sería:
```css
css
Copy code
#copyBtn {
padding: 5px 10px;
border: 1px solid black;
border-radius: 5px;
cursor: pointer;
}
```

---

**User:**
poner el texto: “#copyBtn {
  padding: 5px 10px;
  border: 1px solid black;
  border-radius: 5px;
  cursor: pointer;
} “ en una ventana <pre> con opción de copia al portapapeles

---

**ChatGPT:**
Aquí está el código HTML y JavaScript que crea un elemento &lt;pre&gt; con opción de copiar su contenido al portapapeles:
HTML:
```css
css
Copy code
<pre id="texto">#copyBtn {
  padding: 5px 10px;
  border: 1px solid black;
  border-radius: 5px;
  cursor: pointer;
}</pre>
<button id="copyBtn">Copiar al portapapeles</button>
```
JavaScript:
```javascript
javascript
Copy code
const copyBtn = document.querySelector('#copyBtn');
const texto = document.querySelector('#texto');

copyBtn.addEventListener('click', () => {
  const tempInput = document.createElement('input');
  tempInput.value = texto.textContent;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand('copy');
  document.body.removeChild(tempInput);
});
```