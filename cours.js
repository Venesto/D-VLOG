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