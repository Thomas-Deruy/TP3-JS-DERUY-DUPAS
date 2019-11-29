let monModuleTab = (function () {
    return{
        monTableauIngredient : () => {
            for (let i = 0; i < ingredients.length; i++){
                monModuleLigne.maLigneIngredient(i);
            }
        },
        monTableauPlats : () => {
            for (let i = 0; i < plats.length; i++){
                monModuleLigne.maLignePlats(i);
            }
        }
    }
})();