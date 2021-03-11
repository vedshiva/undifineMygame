var BG,greeting,button,database,Question;


function preload (){
BG = loadImage ("BG.jpg");
}
function setup(){
    canvas = createCanvas (400,400);
    //button =new Botton();
    button = createButton ('complited!!');
    database = firebase.database();

    var QuestionRef = database.ref('/myTask');
    QuestionRef.on ("value",(data)=>{
    Question = data.val();})
    console.log (Question);
}

function draw (){
    background (BG);

   //button.display();
   button.position(300,300);

    fill(255);
    text ("If you are a student complite a book or read a book",60,150);
    text ("And",185,200);
    text ("If you are not a student then read a news paper",70,250);
    
}