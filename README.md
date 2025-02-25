Inaccessibilitat Web
Anàlisi de la Pàgina Web
El primer pas ha estat identificar els principals punts que requerien modificacions per millorar l'accessibilitat de la pàgina.
Millores Implementades
1. Contrast de Colors
Per millorar la llegibilitat, s'han aplicat els següents canvis:
Millora del contrast entre el fons i el text.
Colors més visibles per garantir una bona diferenciació.
Text més gruixut i amb ombres per millorar la lectura.
Implementació:
.user-actions a.text-white,
.header .text-white {
    color:  #f8f9fa !important; /* Blanc més clar */
    text-shadow: 0 0 2px  rgba(0, 0, 0, 0.8); /* Ombra per millorar la llegibilitat */
    font-weight: 600; /* Text més gruixut */
}
.btn-primary {
    background-color:  #0056b3; /* Blau més fosc */
    color:  #ffffff;
    font-weight: 600;
    border: 2px solid  #ffffff;
}

Beneficis:
Major llegibilitat per a tots els usuaris.
Compliment amb els estàndards WCAG.
Millora de la usabilitat sense afectar l'estètica.
2. Jerarquia d'Encapçalaments
S'han realitzat ajustos per mantenir una estructura lògica i seqüencial dels encapçalaments (h1, h2, etc.).
Implementació:
<!-- Canviat de h5 a h2 per mantenir la jerarquia correcta -->
<div class="card-body">
    <h2 class="card-title">Peix Globus</h2>
    ...
</div>

Beneficis:
Millor comprensió de la informació.
Facilitat de navegació per usuaris de lectors de pantalla.
Optimització per a motors de cerca.
3. Millores en la Página de Login
Per millorar l'accessibilitat en la pantalla d'inici de sessió, s'han aplicat els següents canvis:
Contrast de Colors
Fons i text amb major contrast.
Text en color blanc sobre botons blaus foscos.
Ombres per millorar la visibilitat.
Implementació:
.login-button, .register-button {
    background-color:  #0056b3;    /* Color blau més fosc */
    color:  #ffffff;               /* Text blanc per contrast màxim */
    font-weight: 600;             /* Text més gruixut */
    text-shadow: 0 1px 1px  rgba(0, 0, 0, 0.3);  /* Millora llegibilitat */
}

Àrees Tàctils
Inputs més grans per facilitar la interacció.
Enllaços i botons amb àrees clicables ampliades.
Checkboxs més grans i visibles.
Implementació:
.input-group input,
.options .forgot-password,
.login-button {
    min-height: 44px;   /* Alçada mínima WCAG */
    padding: 12px;      /* Espai intern adequat */
    font-size: 16px;    /* Mida de text òptima */
}

4. Altres Millores d'Accessibilitat
Etiquetes ARIA
Implementació:
<!-- Millora d'accessibilitat amb ARIA -->
<button class="btn btn-danger" aria-label="Eliminar article">
    <i class="fas fa-trash"></i>
</button>

Navegació per Teclat
Implementació:
.btn:focus,
.input:focus {
    outline: 2px solid #004085;
    box-shadow: 0 0 5px rgba(0, 64, 133, 0.5);
}

Responsivitat
Implementació:
@media screen and (max-width: 768px) {
    .card {
        width: 100%;
        height: auto;
    }
}

Beneficis Generals
Accessibilitat Universal:
Millor experiència per a tots els usuaris.
Compliment d'estàndards WCAG.
Inclusivitat en l'ús.
Usabilitat Millorada:
Navegació més intuïtiva.
Interaccions més clares.
Feedback visual adequat.
Compatibilitat:
Funciona amb tecnologies assistives.
Adaptable a diferents dispositius.
Compatible amb diversos navegadors.
Conclusió
Amb aquestes millores, la pàgina web s'ha tornat més accessible i usable per a tothom, garantint una experiència d'usuari òptima i el compliment dels estàndards d'accessibilitat web actuals.



