import { configureStore, createSlice } from '@reduxjs/toolkit'
import data from './CompStor/boutique.json'

const BoutiqueSlice = createSlice(
    {
        name: "boutique",
        initialState: data,

        reducers: {
            NbreArticle: (state, action) => {
                const artic = state.find((t) => t.id === action.payload);
                artic.quantite += 1;
                (artic.quantite == 1) ? artic.prix = artic.prix : artic.prix *= (artic.quantite / (artic.quantite - 1));


            },
            NbreArticleMoins: (state, action) => {
                const artic = state.find((t) => t.id === action.payload);
                (artic.quantite != 0) ? artic.quantite -= 1 : artic.quantite = 0;
                (artic.quantite == 0) ? artic.prix = artic.prix : artic.prix *= (artic.quantite / (artic.quantite + 1));

            },
            CommandeConfirm: (state, action) => {
                const artic = state.find((t) => t.id === action.payload.id);
                action.payload.total += artic.prix
            }, 

            CleanAll:()=>data
           
          
           

        }

    })

    const CommandeSlice = createSlice(
        {
            name: "commande",
            initialState: [],
    
            reducers: {
            listeCommande:(state,action)=>{ 
                   state.push(action.payload);
            },
            deleteArticle:(state,action)=>{
                state=state.filter((t,index)=>index!==action.payload);

                return state
               },
               CleanAllFacture:()=>[]
            }})

           

export default {BoutiqueSlice,CommandeSlice};
export const { NbreArticle, NbreArticleMoins, CommandeConfirm, CleanAll } = BoutiqueSlice.actions;
export const {listeCommande, deleteArticle, CleanAllFacture} = CommandeSlice.actions;
export const store = configureStore(
    {
        reducer: {
            boutique: BoutiqueSlice.reducer,
            commande:CommandeSlice.reducer
        }
    }
);