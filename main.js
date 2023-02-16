







// PANIER : OPEN

//element HTML
let prix = document.createElement("div");
let ligne = document.createElement("div");
let sommeTotalTitre = document.createElement("p");

//valeur 
let sommeTotalValue = 0;


prix.style = 'position: absolute;top: 127%;left: 46%;width: 28%;height: 17%;outline: solid; border-radius:10px;background-color:white';
ligne.style = 'position: absolute;top: 61%;left: 5%;width: 27%;border: 1px solid;height: 1px;';
sommeTotalTitre.style = 'position: absolute;top: 73%;left: 5%;font-size: 24px;';
sommeTotalTitre.innerText = `Le Total :   ${sommeTotalValue} euros`;


prix.appendChild(ligne);
prix.appendChild(sommeTotalTitre);
document.body.appendChild(prix);

 // PANIER : OFF



const panierValue = document.getElementById("panierValue");
const panier1 = document.getElementById("panier1");
const panier2 = document.getElementById("panier2");
const panier3 = document.getElementById("panier3");
const panier4 = document.getElementById("panier4");

let panierAdd1 = 0; //btn ajouter
let panierAdd2 = 0;
let panierAdd3 = 0;
let panierAdd4 = 0;

let compteur1 = 0;//compteur incrementation
let compteur2 = 0;
let compteur3 = 0;
let compteur4 = 0;


// localStorage.setItem('compteur1s', "0");
// localStorage.setItem('somme', "0");

// var value = parclocalStorage.getItem('compteur1s');
// var value = parseInt(localStorage.getItem("compteur1s"));
// var somme = parseInt(localStorage.getItem("somme"));


// localStorage.removeItem('monChat');
// localStorage.clear();

panier1.addEventListener("click", () => {

    panierAdd1 += 1;


    const menuA = document.createElement("p");
    const textA = document.createTextNode("POKÉ CREVETTE");

    sommeTotalTitre.innerText = `Le Total :   ${sommeTotalValue}`;
    menuA.style = 'position:absolute; top:5%;left:35%;';

    if(panierAdd1 > 0){

        //+
        sommeTotalValue += 9.50
        compteur1 += 1

        const payer = document.createElement("button")
        payer.innerText="PAYER"
        payer.style = 'position:absolute; outline:solid; top:55%; left:60%; width:150px; height:50px; box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; border-radius:10px;'
        prix.appendChild(payer);

        payer.addEventListener("click",() => {
            let facture = document.createElement("div");
            facture.style = 'position:absolute; width:90%; height:60px; left:6%;line-height:32px; color:red;'
            facture.innerText = 'Confirmez votre commande au +33 1 42 04 05 87 un livreur se met en route ;)'
            prix.appendChild(facture)
        })
        

        const incrementeA = document.createElement("button");
        incrementeA.addEventListener("click", () => {

            compteur1 += 1;
            sommeTotalValue += 9.50
            sommeTotalTitre.innerText = `Le Total :   ${sommeTotalValue} euros`;

        })

        incrementeA.innerText = "+";
        incrementeA.style = 'position:absolute; top:4%;left:70%; width:20px; height:25px;outline:solid; border-radius:12px;';


        //-
        const decrementeA = document.createElement("button");
        decrementeA.addEventListener("click", () => {
            
            if(compteur1 == 0){
                

                panierValue.removeChild(menuA)
                panierValue.removeChild(incrementeA)
                panierValue.removeChild(decrementeA)
                sommeTotalTitre.innerText = `Le Total :   ${sommeTotalValue} euros`;

            }else{

                compteur1 -= 1
                sommeTotalValue -= 9.50
                sommeTotalTitre.innerText = `Le Total :   ${sommeTotalValue} euros`;
            }
        })

        decrementeA.innerText = "-";
        decrementeA.style = 'position:absolute; top:4%;left:24%; width:20px; height:25px; outline:solid; border-radius:12px;';
        panierValue.appendChild(incrementeA);
        panierValue.appendChild(decrementeA);

    }else{

        return
    }

    menuA.appendChild(textA);
    panierValue.appendChild(menuA);
    sommeTotalTitre.innerText = `Le Total :   ${sommeTotalValue} euros`;

});




panier2.addEventListener("click", () => {

    panierAdd2 += 1;


    const menuB = document.createElement("p");
    const textB = document.createTextNode("POKE CHICK'EN VÉGÉTAL");

    sommeTotalTitre.innerText = `Le Total :   ${sommeTotalValue}`;
    menuB.style = 'position:absolute; top:20%;left:27%;';

    const payer = document.createElement("button")
    payer.innerText="PAYER"
    payer.style = 'position:absolute; outline:solid; top:55%; left:60%; width:150px; height:50px; box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; border-radius:10px;'
    prix.appendChild(payer);

    payer.addEventListener("click",() => {
        let facture = document.createElement("div");
        facture.style = 'position:absolute; width:90%; height:60px; left:6%;line-height:32px; color:red;'
        facture.innerText = 'Confirmez votre commande au +33 1 42 04 05 87 un livreur se met en route ;)'
        prix.appendChild(facture)
    })


    if(panierAdd2 > 0){

        //+
        sommeTotalValue += 9.50
        compteur2 += 1

        const incrementeB = document.createElement("button");
        incrementeB.addEventListener("click", () => {
            compteur2 += 1;
            sommeTotalValue += 9.50
            sommeTotalTitre.innerText = `Le Total :   ${sommeTotalValue} euros`;

        })

        incrementeB.innerText = "+";
        incrementeB.style = 'position:absolute; top:20%;left:75%; width:20px; height:25px;outline:solid; border-radius:12px;';

        //-
        const decrementeB = document.createElement("button");
        decrementeB.addEventListener("click", () => {

            if(compteur2 == 0){

                panierValue.removeChild(menuB)
                panierValue.removeChild(incrementeB)
                panierValue.removeChild(decrementeB)
                sommeTotalTitre.innerText = `Le Total :   ${sommeTotalValue} euros`;

            }else{
                compteur2 -= 1;
                sommeTotalValue -= 9.50
                sommeTotalTitre.innerText = `Le Total :   ${sommeTotalValue} euros`;
            }
        })

        decrementeB.innerText = "-";
        decrementeB.style = 'position:absolute; top:20%;left:20%; width:20px; height:25px; outline:solid; border-radius:12px;';
        panierValue.appendChild(incrementeB);
        panierValue.appendChild(decrementeB);

    }else{

        return
    }

    menuB.appendChild(textB);
    panierValue.appendChild(menuB);
    sommeTotalTitre.innerText = `Le Total :   ${sommeTotalValue} euros`;

});


panier3.addEventListener("click", () => {

    panierAdd3 += 1;


    const menuC = document.createElement("p");
    const textC = document.createTextNode("POKÉ SAUMON");

    sommeTotalTitre.innerText = `Le Total :   ${sommeTotalValue}`;
    menuC.style = 'position:absolute; top:35%;left:35%;';

    const payer = document.createElement("button")
    payer.innerText="PAYER"
    payer.style = 'position:absolute; outline:solid; top:55%; left:60%; width:150px; height:50px; box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; border-radius:10px;'
    prix.appendChild(payer);

    payer.addEventListener("click",() => {
        let facture = document.createElement("div");
        facture.style = 'position:absolute; width:90%; height:60px; left:6%;line-height:32px; color:red;'
        facture.innerText = 'Confirmez votre commande au +33 1 42 04 05 87 un livreur se met en route ;)'
        prix.appendChild(facture)
    })


    if(panierAdd3 > 0){

        //+
        sommeTotalValue += 10.50
        compteur3 += 1

        const incrementeC = document.createElement("button");
        incrementeC.addEventListener("click", () => {
            compteur3 += 1;
            sommeTotalValue += 10.50
            sommeTotalTitre.innerText = `Le Total :   ${sommeTotalValue} euros`;

        })

        incrementeC.innerText = "+";
        incrementeC.style = 'position:absolute; top:35%;left:75%; width:20px; height:25px;outline:solid; border-radius:12px;';

        //-
        const decrementeC = document.createElement("button");
        decrementeC.addEventListener("click", () => {

            if(compteur3 == 0){

                panierValue.removeChild(menuC)
                panierValue.removeChild(incrementeC)
                panierValue.removeChild(decrementeC)
                sommeTotalTitre.innerText = `Le Total :   ${sommeTotalValue} euros`;
            }else{
                compteur3 -= 1
                sommeTotalValue -= 10.50
                sommeTotalTitre.innerText = `Le Total :   ${sommeTotalValue} euros`;
            }
        })

        decrementeC.innerText = "-";
        decrementeC.style = 'position:absolute; top:35%;left:20%; width:20px; height:25px; outline:solid; border-radius:12px;';
        panierValue.appendChild(incrementeC);
        panierValue.appendChild(decrementeC);

    }else{

        return
    }

    menuC.appendChild(textC);
    panierValue.appendChild(menuC);
    sommeTotalTitre.innerText = `Le Total :   ${sommeTotalValue} euros`;

});


panier4.addEventListener("click", () => {

    panierAdd4 += 1;


    const menuD = document.createElement("p");
    const textD = document.createTextNode("POKÉ THON MARINÉ");

    sommeTotalTitre.innerText = `Le Total :   ${sommeTotalValue}`;
    menuD.style = 'position:absolute; top:50%;left:32%;';

    const payer = document.createElement("button")
    payer.innerText="PAYER"
    payer.style = 'position:absolute; outline:solid; top:55%; left:60%; width:150px; height:50px; box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; border-radius:10px;'
    prix.appendChild(payer);

    payer.addEventListener("click",() => {
        let facture = document.createElement("div");
        facture.style = 'position:absolute; width:90%; height:60px; left:6%;line-height:32px; color:red;'
        facture.innerText = 'Confirmez votre commande au +33 1 42 04 05 87 un livreur se met en route ;)'
        prix.appendChild(facture)
    })

    if(panierAdd4 > 0){


        //+
        sommeTotalValue += 9.50
        compteur4 += 1
        
        const incrementeD = document.createElement("button");
        incrementeD.addEventListener("click", () => {
            compteur4 += 1;
            sommeTotalValue += 9.50
            sommeTotalTitre.innerText = `Le Total :   ${sommeTotalValue} euros`;

        })

        incrementeD.innerText = "+";
        incrementeD.style = 'position:absolute; top:50%;left:75%; width:20px; height:25px;outline:solid; border-radius:12px;';

        //-
        const decrementeD = document.createElement("button");
        decrementeD.addEventListener("click", () => {

            if(compteur4 == 0){

                panierValue.removeChild(menuD)
                panierValue.removeChild(incrementeD)
                panierValue.removeChild(decrementeD)
                sommeTotalTitre.innerText = `Le Total :   ${sommeTotalValue} euros`;
            }else{
                compteur4 -= 1
                sommeTotalValue -= 9.50
                sommeTotalTitre.innerText = `Le Total :   ${sommeTotalValue} euros`;
            }
        })

        decrementeD.innerText = "-";
        decrementeD.style = 'position:absolute; top:50%;left:20%; width:20px; height:25px; outline:solid; border-radius:12px;';
        panierValue.appendChild(incrementeD);
        panierValue.appendChild(decrementeD);

    }else{

        return
    }

    menuD.appendChild(textD);
    panierValue.appendChild(menuD);
    sommeTotalTitre.innerText = `Le Total :   ${sommeTotalValue} euros`;

});

