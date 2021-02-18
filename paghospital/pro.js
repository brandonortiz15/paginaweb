function sesion() {
	document.getElementById("vent").style.display="block";
	
}

function cerrar() {
	document.getElementById("vent").style.display="none";
}

function iniciar(){
	var nombr = document.getElementById("nombre").value;
	var contr = document.getElementById("contra").value;
		
	

	if (contr==="" && nombr==""){
		window.alert("Rellena todos los campos");
	}

	

	if (nombr=="Febe" && contr=="1234" ) {
	document.getElementById("vent").style.display="none";
	document.getElementById("sesi").innerHTML ="Febe";


	}
	else{
		window.alert("Usuario o contraseña no son validos");
	}
}

			
function enviar(){


			var info=[], g=0;	
	 info[0]= document.getElementById("nom").value;
	 info[1]= document.getElementById("asunto").value;
	 info[2]= document.getElementById("email").value;
	 info[3]= document.getElementById("telefono").value;
	 info[4]= document.getElementById("hospital").value;
	 info[5]= document.getElementById("mensaje").value;

			
			
			for(var i=0;i < 6;i++){
			
				if(info[i]==""){g++}
			
			}
			
			for(var i=0;i < 6;i++){
			
			console.log(info[i]);
			
			}

			if (info[0, 1, 2, 3, 4, 5]=="") {
				window.alert("rellena todos los campos");
			}else{
	window.alert("Tu cita a sido agendada"); 
	


			}

			
		}

		function sub(){


			var info=[], g=0;	
	 info[0]= document.getElementById("name").value;
	 info[1]= document.getElementById("gmail").value;
	 info[2]= document.getElementById("ciudad").value;
	 info[3]= document.getElementById("edad").value;
	 info[4]= document.getElementById("sexo").value;
	 
			
			
			for(var i=0;i < 5;i++){
			
				if(info[i]==""){g++}
			
			}
			
			for(var i=0;i < 5;i++){
			
			console.log(info[i]);
			
			}
		}

		function aparece(){
		
			document.getElementById("activo").style.display="initial";
		
		}
		
		function desaparece(){
		
			document.getElementById("activo").style.display="none";
		
		}
		
		
		
		function hola(){
		
			var info=[], g=0;
			
			info[0]=document.getElementById("nombre").value;
			info[1]=document.getElementById("email").value;
			info[2]=document.getElementById("tel").value;
			info[3]=document.getElementById("asu").value;
			info[4]=document.getElementById("hos").value;
			info[5]=document.getElementById("area").value;

			

				
			
			for(var i=0;i < 6;i++){
			
				if(info[i]==""){g++}
			
			}
			
			for(var i=0;i < 6;i++){
			
			console.log(info[i]);
			
			}
			if(g==0){
			document.getElementById("nono").style.display="none";
			document.getElementById("terminado").style.display="initial";
			}



		}



		function entrar(){
			var pe = document.getElementById("opcion").value;
			var pi = document.getElementById("entrara").value;

			 if (pe=="Cirugías") {
			 	window.open("especialidad 1.html");

			 }
			 if (pe=="Laboratorio y Estudios Medicos") {
			 	window.open("especialida 2.html");
			 }
			 if (pe=="Pediatria") {
			 	window.open("especialidad 3.html");
			 }
			


		}