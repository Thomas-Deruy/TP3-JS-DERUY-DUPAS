let monModuleLigne = (function () {

    function setLigne(indice){
        let tabl = document.getElementById(indice);
        let node = document.createElement("TR");
        tabl.appendChild(node);
        return tabl.lastelementChild;
    }

    function afficherSection(paramtr,id){
        let section = document.createElement("TD");
        let ligne = document.getElementById(id);
        ligne.lastElementChild.appendChild(section);

        ligne.lastElementChild.lastElementChild.innerHTML = paramtr;
    }

    function afficherSectionLocalite(indice,id){
        let section = document.createElement("TD");
        let ligne = document.getElementById(id);
        ligne.lastElementChild.appendChild(section);

        if (ingredients[indice].local == 1){
            ligne.lastElementChild.lastElementChild.innerHTML = 'Oui';
        }
        else {
            ligne.lastElementChild.lastElementChild.innerHTML = 'Non';
        }
    }

    function afficherSectionIngredients(indice,id){
        let section = document.createElement("TD");
        let ligne = document.getElementById(id);
        ligne.lastElementChild.appendChild(section);

        for (let i in plats[indice].ingrédients){
            if (i == 0){
                ligne.lastElementChild.lastElementChild.innerHTML += ingredients[plats[indice].ingrédients[i]].name;
            }
            else {
                ligne.lastElementChild.lastElementChild.innerHTML += ", " + ingredients[plats[indice].ingrédients[i]].name;
            }
        }
    }

    return{
        maLigneIngredient : (indice) => {
            setLigne("tableIng");
            afficherSection(ingredients[indice].name,"tableIng");
            afficherSectionLocalite(indice,"tableIng");
            afficherSection(ingredients[indice].prix,"tableIng");
            let ligne = document.getElementById("tableIng");
            ligne.lastElementChild.lastElementChild.innerHTML += " €";
        },
        
        maLignePlats : (indice) => {
            let ligne = document.getElementById("tablePlt");
            setLigne("tablePlt");
            afficherSection(plats[indice].name,"tablePlt");
            afficherSection(plats[indice].preparation,"tablePlt");
            ligne.lastElementChild.lastElementChild.innerHTML += " min";
            afficherSectionIngredients(indice,"tablePlt");
            afficherSection(plats[indice].prixPreparation,"tablePlt");
            ligne.lastElementChild.lastElementChild.innerHTML += " €";
            let somme = parseFloat(plats[indice].prixPreparation);
            for (let i in plats[indice].ingrédients){
                somme += parseFloat(ingredients[plats[indice].ingrédients[i]].prix);
            }
            let section = document.createElement("TD");
            ligne.lastElementChild.appendChild(section);
            ligne.lastElementChild.lastElementChild.innerHTML = somme + " €";
        }
    }
})();