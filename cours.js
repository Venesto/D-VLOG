// VARIABLES //


  "var --> déprécié"
  "let --> Pour des variables qui auront tendance à changer"
  "const --> Pour des variables qui resteront toujours identiques"


// CONDITIONS //


  const marc = {
    nom: "Marc",
    age: 17,
    moyenne: 15
  }
  if (marc.age >= 18) {
    console.log('Tu es majeur');
  } else {
    console.log('Tu es mineur');
  }

  if (marc.age >= 18) {
    console.log('Tu peux passer ton permis');
  } else if (marc.age >= 15) {
    console.log('Tu peux passer la conduite accompagnée');
  } else {
    console.log('Tu ne peux pas conduire');
  }

  if (marc.age >= 18 && marc.age <= 25) {
    console.log('Bravo, tu as le droit au tarif jeune')
  } else {
    console.log("Vous n'avez pas accès au tarif jeune");
  }
  
  if (marc.age < 18 || marc.age > 25) {
    console.log("Vous n'avez pas accès au tarif jeune")
  } else {
    console.log('Bravo, tu as le droit au tarif jeune')
  }

  switch (marc.age) {
    case 18:
      console.log('Bravo, tu as 18 ans')
      break
    case 25:
      console.log('Bravo, tu as un quart de siècle')
      break
    case 50:
      console.log('Bravo, tu as un demi siècle')
      break
    default: console.log('Bon anniversaire');
  }

  console.log(marc.age >= 18 ? 'Tu es majeur' : 'Tu es mineur');


// BOUCLES //


  let i = 0
  while (i < 11) {
    console.log(i)
    if (i == 3) {
    }
    i++
  }
  console.log('salut');

  for(var j = 0; j < 11; j++) {
    console.log(j);
  }
  console.log('Salut toi');

  const eleves = ['Jean', 'Marc', 'Marion', 'Antoine']
  for(let i = 0; i < eleves.length; i++) {
    let eleve = eleves[i]
    console.log('Bonjour ' + eleves[i]);
  }
  // --> Prénoms dans l'ordre
  for(let i = eleves.length -1; i >= 0; i--) {
    let eleve = eleves[i]
    console.log('Bonjour ' + eleve);
  }
  // --> Prénoms dans le désordre

  // Test nombre premier
  const nombre = 91
  let estPremier = true
  
  for(let i = 2; i < nombre; i++) {
    if (nombre % i === 0) {
      estPremier = false
      console.log("Ce nombre n'est pas premier")
      console.log(nombre + ' est divisible par ' + i)
      break
    }
  }
    if (estPremier) {
      console.log(nombre + ' est premier');
    }
  
  // Exercice élèves
  
  const etudiants = [{
    nom: 'Marc',
    moyenne: 15
  }, {
    nom: 'Marion',
    moyenne: 8
  }, {
    nom: 'Antoine',
    moyenne: 4
  }, {
    nom: 'Jean',
    moyenne: 14
  }]
  console.log(etudiants[0].nom);
  
  for(let i = 0; i < etudiants.length; i++) {
    let etudiant = etudiants[i]
    if (etudiant.moyenne < 10) {
      console.log(etudiant.nom + " n'a pas la moyenne");
    } else {
      console.log(etudiant.nom + " a la moyenne");
    }
  }


  // FONCTIONS //


  function nombrePremier(number) {
    for(let i = 2; i < number; i++) {
      if (number % i === 0) {
        return false
      }
    }
    return true
  }
  function multiplie(a, b) {
    return a * b
  }

  const classA = [{
    nom: 'Marc',
    moyenne: 15
  }, {
    nom: 'Marion',
    moyenne: 8
  }, {
    nom: 'Antoine',
    moyenne: 4
  }, {
    nom: 'Jean',
    moyenne: 14
  }]
  const classB = [{
    nom: 'Sebastien',
    moyenne: 8
  }, {
    nom: 'Marine',
    moyenne: 6
  }, {
    nom: 'Pedro',
    moyenne: 14
  }, {
    nom: 'Violette',
    moyenne: 14
  }]

  function afficheQuiALaMoyenne(students) {
    for (let i = 0; i < students.length; i++) {
      let student = students[i]
      if (student.moyenne >= 10) {
        console.log(student.nom + " a la moyenne");
      }
    }
  }
  afficheQuiALaMoyenne(classA)
  afficheQuiALaMoyenne(classB)

  const aLaMoyenne = function (students) {
    const moyennes = []
    for (let i = 0; i< students.length; i++) {
      let student = students[i]
      if (student.moyenne >= 10) {
        moyennes.push(student)
      }
    }
    return moyennes
  }
  console.log(aLaMoyenne(classA));

  const eleve1 = {
    nom: 'Jean',
    notes: [15, 16, 18, 2]
  }
  const eleve2 = {
    nom: 'Marc',
    notes: [5, 18, 20, 18]
  }
  const moyenne = function (notes) {
    let somme = 0
    for (let i = 0; i < notes.length; i++) {
      somme = somme + notes[i]
    }
    return somme / notes.length
  }
  console.log(moyenne(eleve1.notes))
  console.log(moyenne(eleve2.notes))

  const estMeilleur = function (a, b) {
    return moyenne(a.notes) > moyenne(b.notes)
  }
  console.log(estMeilleur(eleve1, eleve2));

  //ParseInt --> mettre chaine de caractères en nombre
  //ParseFloat --> Mettre chaine de caractères en nombre à virgules
  
  /* fonction quand c'est une fonction générale
    méthode quand c'est une fonction sur un objet */


  // PORTÉE DES VARIABLES ET HOISTING


  /* Les fonctions ont accès aux variables extérieures à elles-mêmes
    const a =/= a 

    Les variables ont une portée limitée seulement dans le cadre des fonctions */


 // THIS //


  "Il prend la valeur de l'objet global"
  "this dans un objet --> l'objet est utilisé"
  "--> ex: " 
    const eleve = { 
      nom: 'Jean', 
      present: function() {
        console.log(this.nom + " présent")
      }
    }
    eleve.present()
    // --> Jean présent

    "Si je veux accéder à l'élève dans un objet, il faut stocker this"
      const eleve = {
        nom: 'Jean', 
        present: function() {
          const eleve = this
          const demo = {
            demo: function() {
              console.log(eleve.nom);
            }
          }
          demo.demo
          console.log(this.nom + " présent")
        }
      }
      eleve.present()
  /* Jean
  Jean present */


  // PROTOTYPES //

  
  // TRY CATCH //


  /* Le try catch sert à afficher ton site malgré des erreurs bloquantes.
  Il sert également à éclaircir l'erreur en question */