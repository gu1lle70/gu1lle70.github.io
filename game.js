
let game_data;
    
let current_room = 0;
let items_picked = [];
     
function game (data)
{
    game_data = data;
    
    document.getElementById("terminal").innerHTML = "<p><strong>¡Bienvenidos a ENTIerrame!</strong> El juego de terrror definitivo.</p>";
    
    document.getElementById("terminal").innerHTML += "<p>Te encuentras en "+game_data.rooms[current_room].name+". ¿Que quieres hacer?</p>";
    
    
}

function terminal_out (info)
    {
        
        let terminal = document.getElementById("terminal");
        terminal.innerHTML += info;
        terminal.scrollTop = terminal.scrollHeight;
    }
    
function parseCommand (command)
{
    
     console.log("Commando", command);
    switch (command){
		case "ver":
			terminal_out("<p>"+game_data.rooms[current_room].description+"</p>");
			break;

		case "ir":
			let doors = "";
			let doors_num = game_data.rooms[current_room].doors.length;
            
			for (let i = 0; i < doors_num; i++){
				doors += game_data.rooms[current_room].doors[i]+" ";
			}
            
			terminal_out("<p>Puedes ir a: "+doors+"</p>");
			break;

		default:
			terminal_out("<p><strong>Error</strong>: "+command+" commando no encontrado</p>");
        
        
    }
}
function getRoomNumber (room)
{
    for (let i = 0; i < game_data.rooms.length; i++){
        
        if(game_data.rooms[i].id == room)
            {
            
            return i;
            }
    }
return -1;    
              
}
    
function getDoorNumber (door)
{
    for (let i = 0; i < game_data.doors.length; i++){
        
        if(game_data.doors[i].id == room){
            
            return i;
        }
    
 }
		
              
}
function parseInstruction (instruction)
{
    
    console.log("Instrucción", instruction);
      switch (instruction[0]){
		case "ver":
			terminal_out("<p>"+game_data.rooms[current_room].description+"</p>");
			break;

		case "ir":
			
            let door_num = getDoorNumber(instruction[1]);
            if (door_num < 0){
                
                console.log("PuertaErronea");
                return;
            }
              
            let room_num = getRoomNumber(game_data.doors[doors_num].rooms[0]);
            if(room_num == current_room){
                
                current_room = getRoomNumber(game_data.rooms[room_num].rooms[1])   
            }
            else{
                current_room = room_num;
            }
		
		
			break;
              
          case "coger":
              game_data.rooms[current_room].items.forEach(function(item) {
                  
                 if(item == instruction[1]){
                     
                     items_picked.push(item);
                     
                     let item_num = game_data.rooms[current_room].items.indexOf(item);
                     if (item_num < 0){
                         
                         console.log("Error al borrar el item de la habitacion");
                         return;
                     }
                     
                     game_data.rooms[current_room].items.splice(item_num, 1);
                     
                     return;
                     
                 } 
                  
                  
                  
              });
              
              
              
              
            break;
              

		default:
			terminal_out("<p><strong>Error</strong>: "+command+" commando no encontrado</p>");
        
        
    }
}
    
function readAction ()
{
    
    let instruction = document.getElementById("commands").value;  
    let instruction_trim = instruction.trim();
    
    let data = instruction_trim.split(" ");
    
        console.log(data);
    
    if (data.length == 0 || instruction_trim == ""){
        
    terminal_out("<p><strong>Error</strong>: Escribe una instrucción</p>");
    return;  
        
    }
    if (data.length == 1){
        
          parseCommand(data[0]);
        
    }
    else{
        
         parseInstruction(data)
        
    }
    
}
    
    
    
fetch("https://gu1lle70.github.io/game.json").then(response => response.json()).then(data => game(data));      