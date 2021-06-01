import { action } from 'easy-peasy';

export const formModel = {
    inputValue:'',
    pergunta1: {pergunta:'',resposta:''},
    pergunta2: {pergunta:'',resposta:''},
    pergunta3: {pergunta:'',resposta:''},
    pergunta4: {pergunta:'',resposta:''},
    pergunta5: {pergunta:'',resposta:''},
    reset: {pergunta:'',resposta:''},

    modifyInput: action((state,payload)=>{
        state.inputValue = payload
    }),
    modifyPergunta1: action((state,payload)=>{
        state.pergunta1 = payload
    }),
    modifyPergunta2: action((state,payload)=>{
        state.pergunta2 = payload
    }),
    modifyPergunta3: action((state,payload)=>{
        state.pergunta3 = payload
    }),
    modifyPergunta4: action((state,payload)=>{
        state.pergunta4 = payload
    }),
    modifyPergunta5: action((state,payload)=>{
        state.pergunta5 = payload
    }),
    resetPerguntas: action((state,payload)=>{
        state.pergunta1 = state.reset
        state.pergunta2 = state.reset
        state.pergunta3 = state.reset
        state.pergunta4 = state.reset
        state.pergunta5 = state.reset
        state.inputValue = ''
    })
};