function Imprimir1al100(){

    for(i=1;i<100;i++){
        console.log(i);
    }
}
function ImprimirMultplos31(){

    for(i=0;i<=100;i+=3){
        console.log(i);
    }
}
function ImprimirMultplos32(){

    for(i=1;i<=100;i++){
        if(i%3==0)
        console.log(i);
    }
}
function SumaimparesparesM1(){
    par=0;
    impar=0;
    for(i=1;i<=50;i+=2){
        impar+=i;
        par+=i+1;
    }
    console.log(par);
    console.log(impar);
}
function SumaimparesparesM2(){
    par=0;
    impar=0;
    for(i=1;i<=50;i++){
        if(i%2==1)impar+=i;
        else par+=i;
    }
    console.log(par);
    console.log(impar);
}
function SumaimparesparesM3(){
    par=0;
    impar=0;
    i=1;//inicial
    while(i<=50){//condicional
        impar+=i;
        par+=i+1;
        i+=2;//avance
    }
    console.log(par);
    console.log(impar);
}
function Serie4(){
    N=8;
    for(x=3,i=1;i<=N;i++,x++){
    console.log(x);
    if(x==5)x=2;
    }
}
    function Serie3(){
    N=8;
    for(x=1,s=1,i=1;i<=N;i++,x++){
        console.log(s*x);
        if(x==2){
            x=0;
            s*=-1;
        }
    }
}
    function Serie2(){
    N=8;
    for(x=-1,i=1;i<=N;i++,x*=-1){
        console.log(x);
        }
}
    function Serie1(){
    N=8;
    for(x=1,i=1;i<=N;i++,x--){
        console.log(x);
        if(x==0){
        x=2;
        }
    }
}
