# Emvm : Entrenador multiple de velocidad mental
# autor : Roberto Chalean	
# año 2015, 2016
# robertchalean@live.com
#
# javascript inmersion ``
						
class motorReaction

	totalEjercicios : 25

	cantidadElegir : 3
	cartasSinElegir : []
	nivel : 3
	pausa : 0
	operadores : []
	variables : []
	nots : []
	salida :  ""
	chequear : ""
	resultado : 0
	contador : 0
	t_ini : 0
	t_fin : 0
	t_dif : 0
	t_total : 0
	t_promedio : 0
	jugadas : 0
	promedio_total : 0
	pasadas : 0
	mejora : 0
	estado : 0
	parar : 0
	killTimeout : 0
	killTimeout3 : 0
	killTimeout5 : 0
	killTimeout6 : 0
	totalPasadas : 8
	aciertos : 0
	errores : 0
	penaTiempo : 0

	espacios : ""
	hola : 0	
	tipo : 0
	alfabeto : []
	memoriaM : []
	memoriaM2 : []
	memoriaM2Elegidas : []
	memoriaJugadas : 0
	cantidadElegirM2 : 0
	memoriaAnterior : 0
	ejercicioGlobal : 0
	ejerciciosActivos : []
	tiempoEjercicios : []
	tieneMemoria : 0
	tieneMemoria2 : 0
	ejercicioSeleccionado : 0
	tiempoEjercicioInicial : 0

	#memoria2
	noEsta1 : ""

	#tsr

	articulos : []
	sustantivos : []
	adjetivos : []

	#charts

	resultados : []
	coloresResultados : []
	leyendaResultados : []

	#ojos

	ojosImagenes : []
	ojosLeyendas : []
	ojosAnterior : 0
	ojosPasadas : 0
	leyendaAnterior : 0
	esInverso : 0

	#total ejercicios
	ejerciciosAnteriores : []
	erroresEjercicios : []

	totalEjerciciosMemoria : 13
	ejerciciosActivosMemoria : []
	cantidadEjerciciosMemoria : 13
	ejercicioSeleccionadoMemoria : 0
	PAO : []
	bPAO : 0
	mixTiempos : []

	esMovil : 0

	#sumFlash
	numeroSumFlash : 0
	acumuladorSumFlash : 0
	jugadasSumFlash : 0

	#calendario
	teclaCalendario : []

	#timer
	tiempoEstado : 0

	#clef
	teclaNotas : []

	#
	cantidadMemoria2 : 0

	#
	segundos : 3
	entrarMemoria : 0

	#cantidad
	cantidad1 : 0

	myZoom : "100%"

	nombreRandom : ""

	constantTime : 0

	emocionesIncluidas : []
	tieneEmocionesIncluidas : 0
	cantidadIncluido : 0
	killTimeout7 : 0
	contadorIncluido : 0
	cantidadProposiciones : 0

	#sum

	tSuma : []
	tSumaFila : []
	resultado1 : 0

	#multi

	tMulti : []
	tMultFila : []
	cMulti : 0

	#Memoria Rapida	
	mMR : []
	mCurrentMR : []
	ejerciciosMR : []
	seleccionMR : ""
	matrizSeleccionMR : []
	matrizMRConfiguracion : []
	todasConfiguracionesMR : []

	digitosMR : 0
	tipoMR : 0
	espacioMR: 0
	ejerciciosMR : []
	
	primeraMR : 0
	selectedMRAccion : 0

	tipoMRGo : 0
	tiempoMRGo : 0
	digitosMRGo : 0
	matrizMRConfiguracionGo : []

	resultadosMRGo : []
	contadorMR : 0

	arrayMRBin : []

	bMRGo : 1

	restaYMR : 0

	preventHelp : 0

	bCantidadPasadasCalendar : 0
	cantidadPasadasCalendar : 1
	contadorCantidadPasadasCalendar : 0
	preventCalendar : 0

	countMemoria2 : 1

	sumFlashElegido : 0

	nextQuestionDelay : 0

	__salida : ""

	configApp : ""

	#resultados
	resultadosList : ""
	nuevoResultado : ""

	#textos para usar en resultados
	_tR : ""
	_tR1 : ""
	_tR2 : ""
	_tR3 : ""

	killTimeoutSumFlash : 0

	senglarMindMode : 0
	timeInitSenglarMindMode : 0
	timeEndSenglarMindMode : 0
	timeDiffSenglarMindMode : 0

	bMemoria2 : 0

	wToN : []

	constructor : () ->
		#preLoad Colors
		window.arrCol=[$("#txt0").val(),$("#txt1").val(),$("#txt2").val(),$("#txt3").val(),$("#txt4").val(),$("#txt5").val(),$("#txt6").val(),$("#txt7").val(),$("#txt8").val(),$("#txt9").val()]
		#
		# TESTING
		#
		#@checkboxAction("quitar", "ch", 25)
		#$("#ch18").prop('checked', true);
		#$("#multiSinestesia").prop('checked', true);

		#$("#cifrasMultiplicacion").val("2")

		#setTimeout ( => $( "#boton-comenzar" ).trigger( "click" ) ) , 100

		#
		#	END TESTING
		#
		
		#console.clear()

		$("#resultados-div").hide()
		$(".clear-result-btn-class").hide()

		$("#senglarMindMode").click =>
			@senglarMindMode = !@senglarMindMode

			if @senglarMindMode
				$("#cantPasadas").prop('disabled', true);
				$("#cantPasadas").val("30")

				@checkboxAction("quitar", "ch", 21, 30)
				$("#ch21").prop('checked', true);
				$("#ch22").prop('checked', false);
				$("#ch23").prop('checked', false);
				$("#ch24").prop('checked', false);
				$("#ch25").prop('checked', false);
			else
				$("#cantPasadas").prop('disabled', false);


		$("#result-link").click =>
			$("#resultados-div").show()
			$(".clear-result-btn-class").show()
			$("#resultados-div").html(@resultadosList)

		$(".clear-result-btn-class").click =>
			$(".clear-result-btn-class").hide()
			@resultadosList=""
			$("#resultados-div").html(@resultadosList)
			localStorage.setItem("reultadosListLocalStorage", @resultadosList);

		@configApp=localStorage.getItem("configAppLocalStorage");
		@resultadosList=localStorage.getItem("reultadosListLocalStorage");

		if @resultadosList==null
			@resultadosList=""
			localStorage.setItem("reultadosListLocalStorage", @resultadosList);

		if @configApp==null
			@configApp=window.configDefault;
			localStorage.setItem("configAppLocalStorage", @configApp);
		else
			#cargar datos de configuración del localStorage
			@cargarConfiguracionTotal()
					
		$("#reset-config-btn").add("#reset-config-btn1").click =>

			if confirm('Estás seguro que quieres resetear las configuraciones?')

				@configApp=window.configDefault;
				localStorage.setItem("configAppLocalStorage", @configApp);
				@cargarConfiguracionTotal()

				$("#div-configurar").hide()

				location.hash = "#top";

		$("#close-config-btn").add("#close-config-btn1").click =>
			$("#div-configurar").hide()
			location.hash = "#top";

		$("#boton-guardar").add("#boton-guardar1").click =>
			location.hash = "#top";

			$("#div-configurar").hide()

			_inputs = $('#myForm200 :input')
			values = {}
			@__salida = ""

			_inputs.each (element, index) =>

				#values[this.name] = $(this).val()
				__val = $(index).val()
				__id = $(index).attr('id')
				__type = $(index).attr('type')

				if ( __type == "text" or __type == "checkbox" or __type=="color") and __type != "undefined" and __val !=""
					if __type == "checkbox"
						__val = false
						if $("#"+__id).is(':checked') 
							__val = true

					#console.log(__type+"|"+__id+"|"+__val)
					@__salida += __type+"|"+__id+"|"+__val+"\n";


			@configApp = @__salida.slice(0, -1)

			localStorage.setItem("configAppLocalStorage", @configApp);

			console.log(@configApp)

			if $("#multiSinestesia").is(':checked')

				eval("""

						console.log("repaint");

						for(i=0;i<=9;i++){

					    arrCol[i]= $("#txt"+i).val();
					    //console.log(arrCol[i]);
					    //$("#txt"+i).val(arrCol[i]);

					  }

						$(".num0-1").css("color",arrCol[0]);

						$(".num1").css("background-color",arrCol[1]);
						$(".num1").css("color",arrCol[1]);
						$(".num1-1").css("color",arrCol[1]);

						$(".num2").css("background-color",arrCol[2]);
						$(".num2").css("color",arrCol[2]);
						$(".num2-1").css("color",arrCol[2]);

						$(".num3").css("background-color",arrCol[3]);
						$(".num3").css("color",arrCol[3]);
						$(".num3-1").css("color",arrCol[3]);

						$(".num4").css("background-color",arrCol[4]);
						$(".num4").css("color",arrCol[4]);
						$(".num4-1").css("color",arrCol[4]);

						$(".num5").css("background-color",arrCol[5]);
						$(".num5").css("color",arrCol[5]);
						$(".num5-1").css("color",arrCol[5]);

						$(".num6").css("background-color",arrCol[6]);
						$(".num6").css("color",arrCol[6]);
						$(".num6-1").css("color",arrCol[6]);

						$(".num7").css("background-color",arrCol[7]);
						$(".num7").css("color",arrCol[7]);
						$(".num7-1").css("color",arrCol[7]);

						$(".num8").css("background-color",arrCol[8]);
						$(".num8").css("color",arrCol[8]);
						$(".num8-1").css("color",arrCol[8]);

						$(".num9").css("background-color",arrCol[9]);
						$(".num9").css("color",arrCol[9]);
						$(".num9-1").css("color",arrCol[9]);
				 		
				 		/*		
				 		$(".num1").css("background-color","rgb(175,13,102)");
				 		$(".num1").css("color","rgb(175,13,102)");

				 		$(".num2").css("background-color","rgb(146,248,70)");
				 		$(".num2").css("color","rgb(146,248,70)");

				 		$(".num3").css("background-color","rgb(255,200,47)");
				 		$(".num3").css("color","rgb(255,200,47)");

				 		$(".num4").css("background-color","rgb(255,118,0)");
				 		$(".num4").css("color","rgb(255,118,0)");

				 		$(".num5").css("background-color","rgb(255,152,213)");
				 		$(".num5").css("color","rgb(255,152,213)");

				 		$(".num6").css("background-color","rgb(235,235,222)");
				 		$(".num6").css("color","rgb(235,235,222)");

				 		$(".num7").css("background-color","rgb(100,100,100)");
				 		$(".num7").css("color","rgb(100,100,100)");

				 		$(".num8").css("background-color","rgb(255,255,0)");
				 		$(".num8").css("color","rgb(255,255,0)");

				 		$(".num9").css("background-color","rgb(255,255,150)");
				 		$(".num9").css("color","rgb(255,255,150)");
				 		*/

					""")
			

		
		###
		Create Config
		_inputs = $('#myForm200 :input')
		values = {}
		@__salida = ""

		_inputs.each (element, index) =>

			#values[this.name] = $(this).val()
			__val = $(index).val()
			__id = $(index).attr('id')
			__type = $(index).attr('type')

			if ( __type == "text" or __type == "checkbox" ) and __type != "undefined" and __val !=""
				if __type == "checkbox"
					__val = false
					if $("#"+__id).is(':checked') 
						__val = true

				console.log(__type+"|"+__id+"|"+__val)
				@__salida += __type+"|"+__id+"|"+__val+"\n";


		@__salida = @__salida.slice(0, -1)
		$("#outputConfig").val(@__salida)
		###
		
		myUrl = window.location.href
		seccion = myUrl.split("#")

		#Routter
		$("#mySp23").hide()

		if seccion[1] == "multiSinestesia"
			document.title = 'Emvm - Multiplicación Sinestésica';

			@checkboxAction("quitar", "ch", 25)
			$("#ch18").prop('checked', true);
			$("#multiSinestesia").prop('checked', true);

			#$("#cifrasMultiplicacion").val("2")

			setTimeout ( => $( "#boton-comenzar" ).trigger( "click" ) ) , 100
			

		if seccion[1] == "silogismos"
			document.title = 'Emvm - Silogismos';

			$("#div-help").hide()
			@preventHelp = 1
			@checkboxAction("quitar", "ch", 25, 12)

			for i in [0..25]
				$("#mySp"+i).hide()

				#for
			# if seccion  == silogismos

			$("#mySp12").show()

		if seccion[1] == "logic"
			document.title = 'Emvm - Logic';

			$("#div-help").hide()
			@preventHelp = 1
			@checkboxAction("quitar", "ch", 25, 0)

			for i in [0..25]
				$("#mySp"+i).hide()

				#for
			# if seccion  == silogismos

			$("#mySp0").show()
			$("#mySp20").show()


		if seccion[1] == "matematica"
			#MODIFICAR TAMBIEN CHECKBOX ACTION!
			document.title = 'Emvm - Matemática';

			$("#div-help").hide()
			@preventHelp = 1
			@checkboxAction("quitar", "ch", 25, 13)
			$("#ch17").prop('checked', true);
			$("#ch18").prop('checked', true);
			$("#ch19").prop('checked', true);
			$("#ch10").prop('checked', true);
			$("#ch20").prop('checked', true);
			$("#ch9").prop('checked', true);

			#cuadrados
			$("#ch21").prop('checked', true);
			$("#ch22").prop('checked', true);
			$("#ch23").prop('checked', true);
			$("#ch24").prop('checked', true);

			#Raiz
			$("#ch25").prop('checked', true);

			for i in [0..23]
				$("#mySp"+i).hide()
				#for
			# if seccion  == silogismos

			$("#mySp10").show()
			#$("#mySp10").append("""[LMIJVSD]""")

			$("#mySp13").show()
			$("#mySp17").show()
			$("#mySp18").show()
			$("#mySp19").show()
			$("#mySp21").show()
			$("#mySp9").show()
			$("#mySp22").show()
			$("#mySp23").show() #all/rand
			$("#mySp25").show() #all/rand

			

		#Fin rutter

		#$("#mySp0").hide()
		#$("#mySp4").hide()
		#$("#mySp7").hide()
		
		$("#contadorMR").html(@contadorMR)
		$('#basic-modal-content').hide()

		@iniciarBin()
		@selectedMRAccion = 0
		@iniciarMR()

		$("#guardarMRBin").click =>
			for i in [0..7]
				txt = $("#binMR#{i}").val()
				if txt.length == 0
					alert("Debe completar todos los campos")
					return

			save = ""
			for i in [0..7]
				txt = $("#binMR#{i}").val()
				#arrayBase = myCookie.split(" ");
				save += txt 
				save += "|"
			
			save = save.substring(0, save.length-1)
			$.cookie('initBin', save, { expires: 14 })
			console.log save

			@iniciarBin()

		$("#contadorMR").click =>
			@contadorMR = 0
			$("#contadorMR").html(@contadorMR)

		$("#controlesMR1").hide()

		$("#nextMR").click =>
			$("#controlesMR1").hide()
			$("#screen").html("")

		$('#verifyMR').msgbox
			content: 'jqueryscript.net'
			padding: 12


		$("#verifyMR").click =>
			@goMR(2)
			

		$("#goMR").click =>
			@contadorMR++
			$("#contadorMR").html(@contadorMR)
			$("#div-help").hide()
			$("#div-configurar").hide()	
			@goMR(0)

		$("#checkMR").click =>
			$("#div-help").hide()	

			if $("#fastMode").is(':checked') 
				@goMR(1)
			else
				@checkMR()
				$("#controlesMR1").show()

			
		$('#abrirMR').change =>

			@abrirMR()
			@configurarMR()


		$("#borrarMR").click =>

			if @todasConfiguracionesMR.length == 1
				return

			select = parseInt($("#abrirMR").val())

			if select == 0
				return

			save = ""
			
			auxTodasConfiguracionesMR = []

			for i in [0..@todasConfiguracionesMR.length-1] 

				if i != select
					

					save += @todasConfiguracionesMR[i][0] + "*" + @todasConfiguracionesMR[i][1]  + "*" + @todasConfiguracionesMR[i][2]  + "*" + @todasConfiguracionesMR[i][3]  + "*"

					for k in [0..@todasConfiguracionesMR[i][4].length-1]
						arrayAux = []
						arrayAux = @todasConfiguracionesMR[i][4][k]
						
						save += """#{parseInt(arrayAux[0])} #{parseInt(arrayAux[1])} #{parseInt(arrayAux[2])}"""

						save += "-"

					save = save.substring(0, save.length-1);
					
					save += "|"
			
			save = save.substring(0, save.length-1)


			@todasConfiguracionesMR = []
			@matrizMRConfiguracion = []
			$.cookie('initMR', save, { expires: 14 })

			$("#tiempoMR").val("500")
			$("#digitosMR").val("6")
			
			@selectedMRAccion = 0
			@iniciarMR()
	

		$("#borrarTodoMR").click =>

			if @todasConfiguracionesMR.length == 1
				return

			if confirm('Estás seguro que quieres borrar las configuraciones?')

				$.removeCookie("initMR")
				@todasConfiguracionesMR = []
				@matrizMRConfiguracion = []

				$("#tiempoMR").val("500")
				$("#digitosMR").val("6")
				#$("#tipoMR select").val("0");
				$('#tipoMR option[value=0]').attr('selected','selected');

				@iniciarMR()
				
				
		$('#guardarMR').click =>

			select = parseInt($("#abrirMR").val())
			
			save = ""
			seleccionado = 0
			if select == 0
				
				for i in [0..@todasConfiguracionesMR.length-1] 
					save += @todasConfiguracionesMR[i][0] + "*" + @todasConfiguracionesMR[i][1]  + "*" + @todasConfiguracionesMR[i][2]  + "*" + @todasConfiguracionesMR[i][3]  + "*"

					for k in [0..@todasConfiguracionesMR[i][4].length-1] 
						arrayAux = []
						arrayAux = @todasConfiguracionesMR[i][4][k]
						# ...
						save += """#{parseInt(arrayAux[0])} #{parseInt(arrayAux[1])} #{parseInt(arrayAux[2])}"""

						
						save += "-"

					save = save.substring(0, save.length-1);

					save += "|"

				#possible = "BCDFGHJKLMNPQRSTVWXYZ"
				#possible1 = "AEIOU"

				#txt = possible.charAt( _.random(0,possible.length-1) ) + possible1.charAt( _.random(0,possible1.length-1) ) + possible.charAt( _.random(0,possible.length-1) ) 
				#nombre = txt
				nombre = prompt("Enter namme", "");
				save += nombre + "*" + $("#tipoMR").val() + "*" + $("#tiempoMR").val() + "*" + $("#digitosMR").val() + "*"

				for i in [0..$("#digitosMR").val()-1]
					
					save += """#{parseInt(@matrizMRConfiguracion[i][0])} #{parseInt(@matrizMRConfiguracion[i][1])} #{@matrizMRConfiguracion[i][2]}"""
					save += "-"

				save = save.substring(0, save.length-1);

				seleccionado = @todasConfiguracionesMR.length

			else
				seleccionado = select

				for i in [0..@todasConfiguracionesMR.length-1] 

					if i == select
					
						save += @todasConfiguracionesMR[i][0] + "*" + $("#tipoMR").val() + "*" + $("#tiempoMR").val() + "*" + $("#digitosMR").val() + "*"

						for j in [0..$("#digitosMR").val()-1]
					
							save += """#{parseInt(@matrizMRConfiguracion[j][0])} #{parseInt(@matrizMRConfiguracion[j][1])} #{@matrizMRConfiguracion[j][2]}"""
							save += "-"

						save = save.substring(0, save.length-1);


					else

						save += @todasConfiguracionesMR[i][0] + "*" + @todasConfiguracionesMR[i][1]  + "*" + @todasConfiguracionesMR[i][2]  + "*" + @todasConfiguracionesMR[i][3]  + "*"

						for k in [0..@todasConfiguracionesMR[i][4].length-1] 
							arrayAux = []
							arrayAux = @todasConfiguracionesMR[i][4][k]
							

							save += """#{parseInt(arrayAux[0])} #{parseInt(arrayAux[1])} #{parseInt(arrayAux[2])}"""
							save += "-"

						save = save.substring(0, save.length-1);

					save += "|"

				save = save.substring(0, save.length-1);
				

			$.cookie('initMR', save, { expires: 14 });
			
			@selectedMRAccion = seleccionado

			@todasConfiguracionesMR = []
			@matrizMRConfiguracion = []

			@cargarMR() #carga todas las configuraciones desde el cookie
			@abrirMR() #abre la configuración
			@configurarMR() #dibuja la configuracion abierta

			
		$('#unselectMR').click =>
			@matrizSeleccionMR = []
			$("#seleccionMR").val("")
			$("#siguienteMR").val("")

		$('#addMR').click =>
					
			aux = parseInt($("#movimientoMR").val())
			aux += 1
			$("#movimientoMR").val(aux)
		
		$('#restMR').click =>
		

			aux = parseInt($("#movimientoMR").val())
			
			if aux != 0
				aux -= 1
			
			$("#movimientoMR").val(aux)

		$('#upMR').click =>

			aux = parseInt($("#movimientoMR").val())
			
			for i in [0..@matrizSeleccionMR.length-1]

				@matrizMRConfiguracion[@matrizSeleccionMR[i]][1] -= aux 
				@matrizMRConfiguracion[@matrizSeleccionMR[i]][3] = 1 

			@configurarMR()

		$('#downMR').click =>

			aux = parseInt($("#movimientoMR").val())

			
			for i in [0..@matrizSeleccionMR.length-1]

				@matrizMRConfiguracion[@matrizSeleccionMR[i]][1] += aux 
				@matrizMRConfiguracion[@matrizSeleccionMR[i]][3] = 1 

			@configurarMR()

		$('#leftMR').click =>

			aux = parseInt($("#movimientoMR").val())

			
			for i in [0..@matrizSeleccionMR.length-1]

				@matrizMRConfiguracion[@matrizSeleccionMR[i]][0] -= aux 
				@matrizMRConfiguracion[@matrizSeleccionMR[i]][3] = 1 

			@configurarMR()

		$('#rightMR').click =>

			aux = parseInt($("#movimientoMR").val())

			for i in [0..@matrizSeleccionMR.length-1]

				@matrizMRConfiguracion[@matrizSeleccionMR[i]][0] += aux 
				@matrizMRConfiguracion[@matrizSeleccionMR[i]][3] = 1 

			@configurarMR()
					

		$('#restaDigitosMR').click =>
					
			aux = parseInt($("#digitosMR").val())
			aux -= 1
			$("#digitosMR").val(aux)
			@configurarMR()


		$('#sumaDigitosMR').click =>
			
			aux = parseInt($("#digitosMR").val())
			aux += 1
			$("#digitosMR").val(aux)
			@configurarMR()

		$('#digitosMR').change =>
			
			@configurarMR()

		$('#tipoMR').change =>
			@matrizMRConfiguracion = []
			@matrizSeleccionMR = []

			$("#seleccionMR").val("")
			$("#siguienteMR").val("")

			@configurarMR()

		$('#siguienteMR').change =>
			aux = parseInt($("#siguienteMR").val())

			for i in [0..@matrizSeleccionMR.length-1]

				@matrizMRConfiguracion[@matrizSeleccionMR[i]][2] = aux 
				@matrizMRConfiguracion[@matrizSeleccionMR[i]][4] = 1 
			
			@configurarMR()

			

		$("#frase").html("<br>" + window.frases[_.random(0,2)])

		$("#footer").hide()
		$("#timer").hide()


		#mobileFirst


		ua = navigator.userAgent.toLowerCase()
		isAndroid = 0
		isiPad = 0
		isiPhone = 0
		isAndroid = ua.indexOf('android') > -1
		isiPad = navigator.userAgent.match(/iPad/i) != null
		if navigator.userAgent.match(/iPhone/i) or navigator.userAgent.match(/iPod/i)
 			isiPhone = 1
		#&& ua.indexOf("mobile");
		#if isAndroid
		  # Do something!
		  # Redirect to Android-site?
		  #window.location = 'http://android.davidwalsh.name'

		#!!
		#console.log(window.screen.availHeight + "x" + window.screen.availWidth)

		#Lumia 520
		if window.screen.availWidth == 320

			$("#controles1").css("zoom", "400%")
			$("#controles2").css("zoom", "400%")
			$("#controles3").css("zoom", "400%")
			$("#screen").css("zoom", "400%")
			$("#fastMode1").prop('checked', true);
			$("#fastMode1").attr("disabled", true);
			#@myZoom = "400%"

		document.body.style.zoom = @myZoom


		if window.screen.availWidth < 1000 or isAndroid or isiPad or isiPhone
			@esMobil = 1
			$("#guia").hide()
			$("#footer").show()
			$("#margen-help").hide()
			
			# $("#btn-z-id").css("font-size","50px")
			# $("#btn-x-id").css("font-size","50px")
			$("#periY").val("5")
			@restaYMR = 200

			$('#myForm200 :input').css("zoom","200%")

			###
			$("#navegar").css("font-size","200%")
			$("#boton-comenzar").css("font-size","200%")
			$("#boton-conf").css("font-size","200%")

			#$("#screen").css("font-size","250%")

			if window.screen.availWidth > 1000 or window.screen.availWidth > 1000
				$("#screen").css("zoom","250%")
				$("#screen").css("zoom","250%") ###


			@esMovil = 1

				#Kindle hd
		if window.screen.availWidth == 2560
			@restaYMR = 0
			@myZoom = "400%"


		#console.log(document.images.length);

		#agrego la accion quitar a todos lo checkbox
		for xx in [0..@totalEjercicios]
			eval("""$("#a#{xx}").click(function(){window.juegoReaction.checkboxAction("quitar", "ch", window.juegoReaction.totalEjercicios, #{xx}); }) """)
		

		#agrego la accion quitar a todos lo checkbox
		for xx in [0..@totalEjerciciosMemoria-1]
			eval("""$("#aa#{xx}").click(function(){window.juegoReaction.checkboxAction("quitar", "mm", window.juegoReaction.totalEjercicios, #{xx}); }) """)
				

		$("#aab7").click =>
			@checkboxAction("quitar", "ch", window.juegoReaction.totalEjercicios, 7)	

		$("#all").click =>
			@checkboxAction("all","ch",@totalEjercicios,0) 

		$("#all3").click =>
			@checkboxAction("all","ch",@totalEjercicios,0) 

		$("#random").click =>
			@checkboxAction("random","ch",@totalEjercicios,0) 

		$("#random3").click =>
			@checkboxAction("random","ch",@totalEjercicios,10000) 

		$("#all1").click =>
			@checkboxAction("all","mm",@totalEjercicios,0) 

		$("#random1").click =>
			@checkboxAction("random","mm",@totalEjercicios,0) 

		$("#help").click =>
			$("#div-help").show()	
					
		@totalPasadas = $("#cantPasadas").val()

		#!!!
		$("#div-configurar").hide()

		$("#hola").html("hola")	

		$("#boton-conf").click =>	
			$("#screen").html("")
			$("#controlesMR1").hide()

			if $("#div-configurar").is(':visible')
				location.hash = "#top";
				$("#div-configurar").hide()
			else 
				location.hash = "#configurar-anchor";
				$("#div-configurar").show()


		$("#boton-conf-sumFlash").click =>	
			$("#screen").html("")
			$("#controlesMR1").hide()

			if $("#div-configurar").is(':visible')
				$("#div-configurar").hide()
			else 
				$("#div-configurar").show()

			location.hash = '#sum-flash-config';

		$("#ok").html(@aciertos)
		$("#no").html(@errores)
		$("#pasadas").html(@totalPasadas)

		
		$( "#boton-comenzar" ).click  =>
			clearTimeout(@killTimeout)
			clearTimeout(@killTimeout1)

			$("#resultados-div").hide()
			$(".clear-result-btn-class").hide()

			if not @estado 
				$("#controlesMR").hide()
				$("#boton-comenzar").attr('value', '■');

				@jugadas = 0
				@configurarEjercicios()
				$("#div-help").hide()
				$("#controles2").hide()
				$("#liveHelp1").html("")

				@bMRGo = 0

				if @senglarMindMode
					@timeInitSenglarMindMode = Date.now()

				@iniciar()
			else

				@bMRGo = 1

				$("#controlesMR").show()
				if not @preventHelp
					$("#div-help").show()	
				$("#pasadas").html($("#cantPasadas").val())
				$("#ok").html("0")
				$("#no").html("0")	
				clearTimeout(@killTimeout)
				clearTimeout(@killTimeout1)
				clearInterval(@killTimeout5)
				$("#controles2").show()
				$("#timer").hide()

				$("#liveHelp").html("")
				$("#liveHelp1").html("")

				$("#boton-comenzar").attr('value', '▶');
				@estado = 0
				@cls()

		$( "#btn-z-id" ).click  =>
			if @bMRGo
				@contadorMR++
				$("#contadorMR").html(@contadorMR)
				$("#div-help").hide()
				$("#div-configurar").hide()	
				@goMR(0)

			else 

				@checkPosicion(true)

		$( "#btn-x-id" ).click  =>
			if @bMRGo
				
				$("#div-help").hide()	

				if $("#fastMode").is(':checked') 
					@goMR(1)
				else
					@checkMR()
					$("#controlesMR1").show()

			else
				@checkPosicion(false)

		###
		$(document).keypress (e) =>
			alert(e.which)
		###
	
		$(document).keypress (e) =>

			# z o x
			if @ejercicioSeleccionado != 10

				console.log(e.which)

				if e.which == 122
					@checkPosicion(true)
				if e.which == 120
					@checkPosicion(false)
				if e.which == 99

					if not $("#question-1").is(":visible")
						$("#question-1").show()
						console.log("mostrar")
						return

					$(".salida-logic").show()
					$("#texto-ayuda-1").hide()
					$("#question-1").hide()

				if e.which == 97 and @ejercicioSeleccionado == 12
					_seeQ()



			#calendar
			if @ejercicioSeleccionado == 10
				
				#domingo
				if e.which == 100 or e.which == 49
					@resultadosList = @_tR + " = " + @_tR1 + " su respuesta es " + ( if @_tR2==0 then "correcta" else "domingo") + "<br>" + @resultadosList 
					@checkPosicion(@teclaCalendario[0])
					
				if e.which == 108 or e.which == 50
					@resultadosList = @_tR + " = " + @_tR1 + " su respuesta es " + ( if @_tR2==1 then "correcta" else "lunes") + "<br>" + @resultadosList
					@checkPosicion(@teclaCalendario[1])
				if e.which == 109 or e.which == 51
					@resultadosList = @_tR + " = " + @_tR1 + " su respuesta es " + ( if @_tR2==2 then "correcta" else "martes") + "<br>" + @resultadosList
					@checkPosicion(@teclaCalendario[2])
				if e.which == 105 or e.which == 52
					@resultadosList = @_tR + " = " + @_tR1 + " su respuesta es " + ( if @_tR2==3 then "correcta" else "miércoles") + "<br>" + @resultadosList
					@checkPosicion(@teclaCalendario[3])
				if e.which == 106 or e.which == 53
					@resultadosList = @_tR + " = " + @_tR1 + " su respuesta es " + ( if @_tR2==4 then "correcta" else "jueves") + "<br>" + @resultadosList
					@checkPosicion(@teclaCalendario[4])
				if e.which == 118 or e.which == 54
					@resultadosList = @_tR + " = " + @_tR1 + " su respuesta es " + ( if @_tR2==5 then "correcta" else "viernes") + "<br>" + @resultadosList
					@checkPosicion(@teclaCalendario[5])
				if e.which == 115 or e.which == 55
					@resultadosList = @_tR + " = " + @_tR1 + " su respuesta es " + ( if @_tR2==6 then "correcta" else "sábado") + "<br>" + @resultadosList
					@checkPosicion(@teclaCalendario[6])


				localStorage.setItem("reultadosListLocalStorage", @resultadosList);
	
			#music cleff
			if @ejercicioSeleccionado == 11
				
				#notas
				if e.which == 99
					@checkPosicion(@teclaNotas[0])
				if e.which == 100
					@checkPosicion(@teclaNotas[1])
				if e.which == 101
					@checkPosicion(@teclaNotas[2])
				if e.which == 102
					@checkPosicion(@teclaNotas[3])
				if e.which == 103
					@checkPosicion(@teclaNotas[4])
				if e.which == 97
					@checkPosicion(@teclaNotas[5])
				if e.which == 98
					@checkPosicion(@teclaNotas[6])

			 e.preventDefault();

	iniciar : () ->
		clearInterval(@killTimeout7)
		@nextQuestionDelay = 0

		@segundos = parseInt($("#tiempoPreparacion").val())
		document.body.style.zoom = @myZoom

		@tipo = 0

		$("#timer").hide()
		
		cantidadEjercicios = @ejerciciosActivos.length

		$("#pasadas").html(@totalPasadas - @jugadas)


		ejercicioAnterior = @ejercicioSeleccionado

		loop
			loop

				
				ejercicio = @ejerciciosActivos[_.random(0,cantidadEjercicios - 1)]
				@ejercicioSeleccionado = ejercicio

				if cantidadEjercicios >= 3 and ejercicioAnterior == ejercicio
					continue

				if not ( @preventCalendar and ejercicio == 10 )
					break

			if ejercicio == 7 and cantidadEjercicios != 1
				
				ir = @jugadas - parseInt($("#unoDeCada").val())
				#console.log("x:"+@ejerciciosAnteriores+"ir:"+ir)

				#Disminuyo la cantidad de ejercicios de memoria
				salir = 1
				for zz in [@jugadas .. if ir > 0 then ir else 0 ] 

					if @ejerciciosAnteriores[zz] == 7
						salir = 0	
						continue
				
				if salir 
					break
			else
				break

		#@ejercicioSeleccionado = 18
		#@multiplicacion()
		#@suma()
		#return

		#console.log(@ejerciciosActivos)

		if @jugadas == 0 and @tieneMemoria == 1
			@memoria()
			@ejercicioSeleccionado = 5
			@ejerciciosAnteriores[@jugadas] = ejercicio

			return	

		@ejerciciosAnteriores[@jugadas] = ejercicio

		if @bCantidadPasadasCalendar
			ejercicio = 10
			@ejercicioSeleccionado = ejercicio

			@calendario()
			@contadorCantidadPasadasCalendar++

			if @contadorCantidadPasadasCalendar == @cantidadPasadasCalendar

				@bCantidadPasadasCalendar = 0
				@preventCalendar = 1

			return	

		#console.log(ejercicio)
		@bMemoria2 = 0

		switch ejercicio
			when 0 then @logica(0)
			when 1 then @aritmetica()
			when 2 then @periferica()
			when 3 then @binarios()
			when 4 then @sinestesia()
			when 5 then @memoria()
			when 6 then @tsr()
			when 7 
				@countMemoria2 = 1
				@bMemoria2 = 1
				@memoria2()
			when 8 then @ojos()
			when 9
				@nextQuestionDelay = 2000 
				@sumFlash()
			when 10 
				
				@cantidadPasadasCalendar = parseInt($("#cantidadPasadasCalendar").val())
				@contadorCantidadPasadasCalendar = 1

				if @cantidadPasadasCalendar > 1
					@bCantidadPasadasCalendar = 1
					
				else
					@bCantidadPasadasCalendar = 0

				@calendario()

			when 11 then @clef()
			when 12 then @silogismos()
			when 13 then setTimeout ( => @hectoc() ) , 10 
			when 14 then @laberinto()
			when 15 then @logica(1)
			when 16 then @logica(2)
			when 17 then setTimeout ( =>  @suma() ) , 10 
			when 18 then setTimeout ( => @multiplicacion() ) , 10 
			when 19 then setTimeout ( => @suma100() ) , 10 
			when 20 then  setTimeout ( => @resta() ) , 10 

			when 21 then  setTimeout ( => @potencia(2) ) , 10 
			when 22 then  setTimeout ( => @potencia(3) ) , 10 
			when 23 then  setTimeout ( => @potencia(4) ) , 10 
			when 24 then  setTimeout ( => @potencia(5) ) , 10 
			when 25 then  setTimeout ( => @raiz() ) , 10 

			else
				#@logica()
				alert()
				
		@preventCalendar = 0

	cargarConfiguracionTotal : () ->
		

		#cargar datos de configuración del localStorage
		aTxt = @configApp.split("\n")

		for i in [0..aTxt.length-1]

			txt = aTxt[i]
			aTxt1 = txt.split("|")

			if aTxt1[0] == "checkbox"
				val = false
				if aTxt1[2] == "true"
					val = true
				try
					dom = "#" + aTxt1[1]
					$().prop('checked', val);
					
				catch err
					console.log("E")
			else
				
				try
					dom = "#" + aTxt1[1]
					$(dom).val(aTxt1[2])
				catch err
					console.log("E")

		window.arrCol=[$("#txt0").val(),$("#txt1").val(),$("#txt2").val(),$("#txt3").val(),$("#txt4").val(),$("#txt5").val(),$("#txt6").val(),$("#txt7").val(),$("#txt8").val(),$("#txt9").val()]
		console.log("cargarconf")

	iniciarBin : () ->
		myCookie = $.cookie('initBin')
		#console.log myCookie

		if not (myCookie?) #si no hay cokie

			save = "r|t d|f|n|c k|l|s z|m"
			$.cookie('initBin', save, { expires: 14 })
			@iniciarBin()

			return

		k = 0

		arrayBase = []
		arrayBase1 = []

		arrayBase = myCookie.split("|");
		
		for i in [0..arrayBase.length-1] 

			@arrayMRBin[i] = []
			txt = arrayBase[i]

			arrayBase1 = txt.split(" ")

			$("#binMR#{i}").val(txt) 

			for j in [0..arrayBase1.length-1] 
				str = arrayBase1[j] + " "

			
				@arrayMRBin[i][j] = str.charCodeAt(0)

		#console.log(@arrayMRBin)



	checkMR : () ->	
		console.log "_"
		
		for i in [0..@digitosMRGo-1]
			if @tipoMRGo == 2
				@resultadosMRGo[i] = $("#respuestaMRId#{i}").val()
			else 
				@resultadosMRGo[i] = parseInt($("#respuestaMRId#{i}").val())

		#3,6,9,12,15,18,21,24,27,30
		emptyColumsDec = [2,4,6,8,10,12,14,16,18,20]
		emptyColumBin = [3,6,9,12,15,18]
		emptyColumsLetters = [2,4,7,12,13,16,19,22,25,28]

		possible = "abcdefghijklmnopqrstuvwxyz"
		txt = possible.charAt( _.random(0,possible.length-1) )

		possible1 = "0123456789"
		possible2 = "101010"
		possible3 = "010101"

		maxColumnsDec = 22
		maxColumnsBin = 21	
		maxColumnsLetters = 22	

		iSpace = 30
		jSpace = 30

		
		imprimir = ""
		
		inicioCuadro = $("#screen").position()
		inicioCuadro = inicioCuadro.top 


		#dec

		if @tipoMRGo == 0
			
			emptyColumns = emptyColumsDec
			ponerPossible = possible1
			finL = 10

		#bin
		if @tipoMRGo == 1
			emptyColumns = emptyColumBin
			ponerPossible = possible2
			finL = 5

		#letter

		if @tipoMRGo == 2
			emptyColumns = emptyColumsDec
			ponerPossible = possible
			finL = 26
		
		l = 0

		#Letras o números
		if @tipoMRGo == 0 or @tipoMRGo == 2
		
			k = 0
			
			for i in [0..20] 
				auxSuma = 0
				for j in [0..19]

					if l == finL
						l = 0

					if k < @digitosMRGo	

						#es null
						if not (@matrizMRConfiguracionGo[k]?)

							@matrizMRConfiguracionGo[k] = []

						if _.find(emptyColumns, (num) => num == j)
							auxSuma += jSpace

						myX = 20+j*jSpace+auxSuma
						myY = inicioCuadro+i*iSpace
						

						if parseInt(@matrizMRConfiguracionGo[k][4]) == 1
							@matrizMRConfiguracionGo[k][2] 
							
						else
							@matrizMRConfiguracionGo[k][2] = k + 1
							@matrizMRConfiguracionGo[k][4] = 0 

						if parseInt(@matrizMRConfiguracionGo[k][3]) == 1
							
							myX = @matrizMRConfiguracionGo[k][0] 
							myY = @matrizMRConfiguracionGo[k][1]  

						else
							@matrizMRConfiguracionGo[k][3] = 0 
							@matrizMRConfiguracionGo[k][0] = myX
							@matrizMRConfiguracionGo[k][1] = myY

						color = "red"
						poner = @resultadosMRGo[k]

						if isNaN(@resultadosMRGo[k]) 
							poner = "-"

						else

							if parseInt(@matrizMRConfiguracionGo[k][5]) == parseInt(@resultadosMRGo[k])
								color = "green"


						if @tipoMRGo == 2 
							auxTxt = @resultadosMRGo[k]
							if auxTxt.length == 0

								poner = "-"
							else
								poner = @resultadosMRGo[k]

							if @matrizMRConfiguracionGo[k][5] == @resultadosMRGo[k]
								color = "green"





						#console.log @resultadosMRGo[k]

						imprimir += """
							<div class="element" id="myElementGo#{k}"  style="margin-left: #{myX}px; top: #{myY-(100+@restaYMR)}px;"> 					
									<b> <font color="#{color}">#{ poner }  </font> </b>
							</div>	
							"""

						k++; l++;
						
					else
						break

				if k > @digitosMRGo
					break
		

		#binarios

		if @tipoMRGo == 1 
			k = 0

			fPossible = 1
		
			mResta = 1
			ii = 0
			jj = 0

			for i in [0..4] 

				auxSuma = 0
				mResta = 1
				jj = 0
				fModif = 1

				for j in [0..41]

					if k < @digitosMRGo	

						if not (@matrizMRConfiguracionGo[k]?)

							@matrizMRConfiguracionGo[k] = []			

						if k % 6 == 0 	
							l = 0
							
							if fPossible 
								ponerPossible = possible2
								fPossible = 0
							else 
								ponerPossible = possible3
								fPossible = 1

							if j != 0

								auxSuma += jSpace


						if k % 3 == 0 and j != 0

							if fModif 
								fModif = 0
								ii++
								jj -= 3


							else
								fModif = 1
								ii--		


						myX = 20+jj*jSpace+auxSuma
						myY = inicioCuadro+ii*iSpace	


						if parseInt(@matrizMRConfiguracionGo[k][4]) == 1
							@matrizMRConfiguracionGo[k][2] 
							
						else
							@matrizMRConfiguracionGo[k][2] = k + 1
							@matrizMRConfiguracionGo[k][4] = 0 

						# @matrizMRConfiguracion[k][2] = k + 1
						# @matrizMRConfiguracion[k][4] = 0 

						if parseInt(@matrizMRConfiguracionGo[k][3]) == 1
							
							myX = @matrizMRConfiguracionGo[k][0] 
							myY = @matrizMRConfiguracionGo[k][1]  

						else
							@matrizMRConfiguracionGo[k][3] = 0 
							@matrizMRConfiguracionGo[k][0] = myX
							@matrizMRConfiguracionGo[k][1] = myY							

						#console.log("k:" + k + "|ii:" + ii + "|jj:" + jj)

						color = "red"
						poner = @resultadosMRGo[k]
						if isNaN(@resultadosMRGo[k])
							poner = "-"
						else

							if parseInt(@matrizMRConfiguracionGo[k][5]) == @resultadosMRGo[k]
								color = "green"


						#console.log @resultadosMRGo[k]

						imprimir += """
							<div class="element" id="myElementGo#{k}"  style="margin-left: #{myX}px; top: #{myY-(100+@restaYMR)}px;"> 					
									<b> <font color="#{color}">#{ poner }  </font> </b>
							</div>	
							"""

						k++; l++;

						
						jj++
						
					else
						break
				ii += 1

				if k > @digitosMRGo
					break


		$("#screen").html(imprimir)




		

			# eval("""

			# 	$("#respuestaMRId#{x}").keypress(function(event) {
			# 		if ( event.which == 13 ) {
					
					    
			# 		 }
			# 		  //alert(event.wich || event.keyCode);

			# 		//if (#{x}!=#{@digitosMRGo-1}){
					

			# 			$('#respuestaMRId#{siguiente}').focus();
					

			# 		//}
				  
			# 	});
			# """)
		

	respuestaMR : () ->	

		#3,6,9,12,15,18,21,24,27,30
		emptyColumsDec = [2,4,6,8,10,12,14,16,18,20]
		emptyColumBin = [3,6,9,12,15,18]
		emptyColumsLetters = [2,4,7,12,13,16,19,22,25,28]

		possible = "abcdefghijklmnopqrstuvwxyz"
		txt = possible.charAt( _.random(0,possible.length-1) )

		possible1 = "0123456789"
		possible2 = "101010"
		possible3 = "010101"

		maxColumnsDec = 22
		maxColumnsBin = 21	
		maxColumnsLetters = 22	

		iSpace = 30
		jSpace = 30

		
		imprimir = ""
		
		inicioCuadro = $("#screen").position()
		inicioCuadro = inicioCuadro.top 

		#dec

		if @tipoMRGo == 0
			
			emptyColumns = emptyColumsDec
			ponerPossible = possible1
			finL = 10

		#bin
		if @tipoMRGo == 1
			emptyColumns = emptyColumBin
			ponerPossible = possible2
			finL = 5

		#letter

		if @tipoMRGo == 2
			emptyColumns = emptyColumsDec
			ponerPossible = possible
			finL = 26
		
		l = 0

		#Letras o números
		if @tipoMRGo == 0 or @tipoMRGo == 2
		
			k = 0
			
			for i in [0..20] 
				auxSuma = 0
				for j in [0..19]

					if l == finL
						l = 0

					if k < @digitosMRGo	

						#es null
						if not (@matrizMRConfiguracionGo[k]?)

							@matrizMRConfiguracionGo[k] = []

						if _.find(emptyColumns, (num) => num == j)
							auxSuma += jSpace

						myX = 20+j*jSpace+auxSuma
						myY = inicioCuadro+i*iSpace
						

						if parseInt(@matrizMRConfiguracionGo[k][4]) == 1
							@matrizMRConfiguracionGo[k][2] 
							
						else
							@matrizMRConfiguracionGo[k][2] = k + 1
							@matrizMRConfiguracionGo[k][4] = 0 

						if parseInt(@matrizMRConfiguracionGo[k][3]) == 1
							
							myX = @matrizMRConfiguracionGo[k][0] 
							myY = @matrizMRConfiguracionGo[k][1]  

						else
							@matrizMRConfiguracionGo[k][3] = 0 
							@matrizMRConfiguracionGo[k][0] = myX
							@matrizMRConfiguracionGo[k][1] = myY

						imprimir += """
							<div class="element" id="myElementGo#{k}"  style="margin-left: #{myX}px; top: #{myY-(100+@restaYMR)}px;"> 					
									<input type="text" name="respuestaMR#{k}" value="" style="width:20px" id="respuestaMRId#{k}">
							</div>	
							""" 
						k++; l++;
						
					else
						break

				if k > @digitosMRGo
					break
		

		#binarios

		if @tipoMRGo == 1 
			k = 0

			fPossible = 1
		
			mResta = 1
			ii = 0
			jj = 0

			for i in [0..4] 

				auxSuma = 0
				mResta = 1
				jj = 0
				fModif = 1

				for j in [0..41]

					if k < @digitosMRGo	

						if not (@matrizMRConfiguracionGo[k]?)

							@matrizMRConfiguracionGo[k] = []			

						if k % 6 == 0 	
							l = 0
							
							if fPossible 
								ponerPossible = possible2
								fPossible = 0
							else 
								ponerPossible = possible3
								fPossible = 1

							if j != 0

								auxSuma += jSpace


						if k % 3 == 0 and j != 0

							if fModif 
								fModif = 0
								ii++
								jj -= 3


							else
								fModif = 1
								ii--		


						myX = 20+jj*jSpace+auxSuma
						myY = inicioCuadro+ii*iSpace	


						if parseInt(@matrizMRConfiguracionGo[k][4]) == 1
							@matrizMRConfiguracionGo[k][2] 
							
						else
							@matrizMRConfiguracionGo[k][2] = k + 1
							@matrizMRConfiguracionGo[k][4] = 0 

						# @matrizMRConfiguracion[k][2] = k + 1
						# @matrizMRConfiguracion[k][4] = 0 

						if parseInt(@matrizMRConfiguracionGo[k][3]) == 1
							
							myX = @matrizMRConfiguracionGo[k][0] 
							myY = @matrizMRConfiguracionGo[k][1]  

						else
							@matrizMRConfiguracionGo[k][3] = 0 
							@matrizMRConfiguracionGo[k][0] = myX
							@matrizMRConfiguracionGo[k][1] = myY							

						#console.log("k:" + k + "|ii:" + ii + "|jj:" + jj)

						imprimir += """
							<div class="element" id="myElementGo#{k}"  style="margin-left: #{myX}px; top: #{myY-(100+@restaYMR)}px;"> 
								<input type="text" name="respuestaMR{k}" value=""  style="width:20px" id="respuestaMRId#{k}">
							</div>	
							"""

						k++; l++;

						
						jj++
						
					else
						break
				ii += 1

				if k > @digitosMRGo
					break


		$("#screen").html(imprimir)

		$("#respuestaMRId0").focus();



		for x in [0..@digitosMRGo-1]


			siguiente = @matrizMRConfiguracionGo[x][2]


			eval("""

				$("#respuestaMRId#{x}").keypress(function(event) {



					binTxt = ["000", "001", "010", "011", "100", "101", "110", "111"]; 
					

					if (window.juegoReaction.tipoMRGo == 1) {

						for(i=0;i<8;i++){

							for(j=0;j<window.juegoReaction.arrayMRBin[i].length;j++){

								//console.log(window.juegoReaction.arrayMRBin[i][j]);

								if (parseInt(event.which) == parseInt(window.juegoReaction.arrayMRBin[i][j])){

									str = binTxt[i];

		  							$("#respuestaMRId#{x+3}").focus();

		  							setTimeout(function(){

									$("#respuestaMRId#{x}").val(str.charAt(0));
		  							$("#respuestaMRId#{x+1}").val(str.charAt(1));
		  							$("#respuestaMRId#{x+2}").val(str.charAt(2));



		  							},50);
	  							
	  								return;


								}

							}

						}

					}

						$("#respuestaMRId#{siguiente}").focus();

					
				});
			""")




			# $("#respuestaMRId#{x}").keypress (event) =>
			

			# 	binTxt = ["000","001","010","011","100","101","110","111"]

			# 	#si es bin
			# 	if @tipoMRGo == 1 

	  # 				#if event.which == 13
	  			
	  # 				for i in [0..7]

	  # 					console.log "hola"
	  # 					for j in [0..@arrayMRBin[i].length-1] 

	  # 						if parseInt(event.which) == parseInt(@arrayMRBin[i][j])
	  # 							str = binTxt[i]

	  # 							$("#respuestaMRId#{x}").val(str.charAt(2)+"")
	  # 							$("#respuestaMRId#{x+1}").val(str.charAt(1)+"")
	  # 							$("#respuestaMRId#{x+2}").val(str.charAt(0)+"")
	  # 							console.log "#respuestaMRId#{x} " + str.charAt(0)

	  # 							try
	  # 								$("#respuestaMRId#{x+3}").focus();
	  							
	  # 							return

	  # 			try 
			# 		$("#respuestaMRId#{siguiente}").focus();


		# for x in [0..@digitosMRGo-1]

		# 	siguiente = @matrizMRConfiguracionGo[x][2]

			# eval("""

			# 	$("#respuestaMRId#{x}").keypress(function(event) {
			# 		if ( event.which == 13 ) {
					
					    
			# 		 }
			# 		  //alert(event.wich || event.keyCode);

			# 		//if (#{x}!=#{@digitosMRGo-1}){
					

			# 			$('#respuestaMRId#{siguiente}').focus();
					

			# 		//}
				  
			# 	});
			# """)

	goMR : (accion) ->	

		#3,6,9,12,15,18,21,24,27,30
		emptyColumsDec = [2,4,6,8,10,12,14,16,18,20]
		emptyColumBin = [3,6,9,12,15,18]
		emptyColumsLetters = [2,4,7,12,13,16,19,22,25,28]

		possible = "abcdefghijklmnopqrstuvwxyz"
		possible1 = "0123456789"
		possible2 = "10"

		maxColumnsDec = 22
		maxColumnsBin = 21	
		maxColumnsLetters = 22	

		iSpace = 30
		jSpace = 30 

		imprimir = ""
		imprimir2 = ""
		
		inicioCuadro = $("#screen").position()
		inicioCuadro = inicioCuadro.top 


		@selectedMRAccion = parseInt($('#abrirMR1').val())

		k = 0

		#console.log @todasConfiguracionesMR

		for i in [0..@todasConfiguracionesMR.length-1] 

			if i == parseInt($('#abrirMR1').val())

				@tipoMRGo = parseInt(@todasConfiguracionesMR[i][1])
				@tiempoMRGo = parseInt(@todasConfiguracionesMR[i][2])
				@digitosMRGo = parseInt(@todasConfiguracionesMR[i][3])

				#console.log @tipoMRGo

				#dec
				if @tipoMRGo == 0
					ponerPossible = possible1
				#bin
				if @tipoMRGo == 1
					ponerPossible = possible2
				#letter
				if @tipoMRGo == 2
					ponerPossible = possible

				for j in [0..@todasConfiguracionesMR[i][4].length-1] 

					if not accion
						@matrizMRConfiguracionGo[k] = []
					
					#simplifica mucho el codigo
					arrayAux = []
					arrayAux = @todasConfiguracionesMR[i][4][j]
					
					@matrizMRConfiguracionGo[k][0] = parseInt(arrayAux[0])
					@matrizMRConfiguracionGo[k][1] = parseInt(arrayAux[1])
					@matrizMRConfiguracionGo[k][2] = parseInt(arrayAux[2])
					@matrizMRConfiguracionGo[k][3] = 1
					@matrizMRConfiguracionGo[k][4] = 1

					if accion  == 1 or accion == 2
						txt = @matrizMRConfiguracionGo[k][5]
					else
						txt = ponerPossible.charAt( _.random(0,ponerPossible.length-1) ) 
					
					@matrizMRConfiguracionGo[k][5] = txt

					k++

				break

		#dec

		if @tipoMRGo == 0
			
			emptyColumns = emptyColumsDec
			ponerPossible = possible1
			finL = 10

		#bin
		if @tipoMRGo == 1
			emptyColumns = emptyColumBin
			ponerPossible = possible2
			finL = 5

		#letter

		if @tipoMRGo == 2
			emptyColumns = emptyColumsDec
			ponerPossible = possible
			finL = 26
		
		l = 0

		menosY = 100
		if accion == 2
			menosY = 250

		

		#Letras o números
		if @tipoMRGo == 0 or @tipoMRGo == 2
		
			k = 0
			
			for i in [0..20] 
				auxSuma = 0
				for j in [0..19]

					if l == finL
						l = 0

					if k < @digitosMRGo	

						#es null
						if not (@matrizMRConfiguracionGo[k]?)

							@matrizMRConfiguracionGo[k] = []

						if _.find(emptyColumns, (num) => num == j)
							auxSuma += jSpace

						myX = 20+j*jSpace+auxSuma
						myY = inicioCuadro+i*iSpace
						

						if parseInt(@matrizMRConfiguracionGo[k][4]) == 1
							@matrizMRConfiguracionGo[k][2] 
							
						else
							@matrizMRConfiguracionGo[k][2] = k + 1
							@matrizMRConfiguracionGo[k][4] = 0 

						if parseInt(@matrizMRConfiguracionGo[k][3]) == 1
							
							myX = @matrizMRConfiguracionGo[k][0] 
							myY = @matrizMRConfiguracionGo[k][1]  

						else
							@matrizMRConfiguracionGo[k][3] = 0 
							@matrizMRConfiguracionGo[k][0] = myX
							@matrizMRConfiguracionGo[k][1] = myY

						imprimir += """
							<div class="element" id="myElementGo#{k}"  style="margin-left: #{myX}px; top: #{myY-(menosY+@restaYMR)}px;"> 					
									<b> #{ @matrizMRConfiguracionGo[k][5] }  </b>
							</div>	
							"""

						imprimir2 += "#{ @matrizMRConfiguracionGo[k][5] } - "
						k++; l++;
						
					else
						break

				if k > @digitosMRGo
					break
		
		

		#binarios

		

		if @tipoMRGo == 1 
			
			k = 0

			fPossible = 1
		
			mResta = 1
			ii = 0
			jj = 0

			for i in [0..4] 

				auxSuma = 0
				mResta = 1
				jj = 0
				fModif = 1

				for j in [0..41]

					if k < @digitosMRGo	

						if not (@matrizMRConfiguracionGo[k]?)

							@matrizMRConfiguracionGo[k] = []			

						if k % 6 == 0 	
							l = 0
							
							if fPossible 
								
								fPossible = 0
							else 
								
								fPossible = 1

							#console.log("--------------------------")

							if j != 0

								auxSuma += jSpace


						if k % 3 == 0 and j != 0

							if fModif 
								fModif = 0
								ii++
								jj -= 3


							else
								fModif = 1
								ii--		


						myX = 20+jj*jSpace+auxSuma
						myY = inicioCuadro+ii*iSpace	


						if parseInt(@matrizMRConfiguracionGo[k][4]) == 1
							@matrizMRConfiguracionGo[k][2] 
							
						else
							@matrizMRConfiguracionGo[k][2] = k + 1
							@matrizMRConfiguracionGo[k][4] = 0 

						# @matrizMRConfiguracion[k][2] = k + 1
						# @matrizMRConfiguracion[k][4] = 0 

						if parseInt(@matrizMRConfiguracionGo[k][3]) == 1
							
							myX = @matrizMRConfiguracionGo[k][0] 
							myY = @matrizMRConfiguracionGo[k][1]  

						else
							@matrizMRConfiguracionGo[k][3] = 0 
							@matrizMRConfiguracionGo[k][0] = myX
							@matrizMRConfiguracionGo[k][1] = myY							

						#console.log("k:" + k + "|ii:" + ii + "|jj:" + jj)

						imprimir += """
							<div class="element" id="myElementGo#{k}"  style="margin-left: #{myX}px; top: #{myY-(menosY+@restaYMR)}px;"> 
								<b>#{ @matrizMRConfiguracionGo[k][5] }</b>
							</div>	
							"""
						imprimir2 += "#{ @matrizMRConfiguracionGo[k][5] } - "

						k++; l++;

						
						jj++
						
					else
						break
				ii += 1

				if k > @digitosMRGo
					break
		console.log  imprimir2
		
		myDivIdContent = "#screen"
		if accion == 2
			myDivIdContent = ".jMsgbox-loaded"
		$("#{myDivIdContent}").html(imprimir)

		if accion == 0

			killTimeout1 = setTimeout ( =>
							if $("#fastMode").is(':checked') 

								$("#screen").html("")

							else
								$("#screen").html("")
								killTimeout1 = setTimeout ( =>
									@respuestaMR()

								), 500

						), @tiempoMRGo
		

	abrirMR : () ->	

		@matrizMRConfiguracion = []

		@selectedMRAccion = parseInt($('#abrirMR').val())

		k = 0

		for i in [0..@todasConfiguracionesMR.length-1] 

			if i == parseInt($('#abrirMR').val())

				$('#tipoMR').val(@todasConfiguracionesMR[i][1])
				$('#tiempoMR').val(@todasConfiguracionesMR[i][2])
				$('#digitosMR').val(@todasConfiguracionesMR[i][3])

				
				for j in [0..@todasConfiguracionesMR[i][4].length-1] 

					@matrizMRConfiguracion[k] = []
					
					#simplifica mucho el codigo
					arrayAux = []
					arrayAux = @todasConfiguracionesMR[i][4][j]
					
					@matrizMRConfiguracion[k][0] = parseInt(arrayAux[0])
					@matrizMRConfiguracion[k][1] = parseInt(arrayAux[1])
					@matrizMRConfiguracion[k][2] = parseInt(arrayAux[2])
					@matrizMRConfiguracion[k][3] = 1
					@matrizMRConfiguracion[k][4] = 1

					k++

				break

		@matrizSeleccionMR = []

		$("#seleccionMR").val("")
		$("#siguienteMR").val("")

		$('#abrirMR').html('');
		
		for i in [0..@todasConfiguracionesMR.length-1] 

			select = ""
			if i == @selectedMRAccion
				select = "  selected"

			$('#abrirMR').append("""<option value="#{i}" #{select}>#{@todasConfiguracionesMR[i][0]}</option>"""); 

		$('#abrirMR1').html('');
		
		for i in [0..@todasConfiguracionesMR.length-1] 

			select = ""
			if i == 0
				select = "  selected"

			$('#abrirMR1').append("""<option value="#{i}" #{select}>#{@todasConfiguracionesMR[i][0]}</option>"""); 


	iniciarMR : () ->

		myCookie = $.cookie('initMR')

		@configurarMR()

		if not (myCookie?) #si no hay cokie

			save = "Nuevo*" + $("#tipoMR").val() + "*" + $("#tiempoMR").val() + "*" + $("#digitosMR").val() + "*"

			for i in [0..@matrizMRConfiguracion.length-1]
				
				save += """#{parseInt(@matrizMRConfiguracion[i][0])} #{parseInt(@matrizMRConfiguracion[i][1])} #{@matrizMRConfiguracion[i][2]}"""

				if i != @matrizMRConfiguracion.length-1
					save += "-"

			seleccionado = @todasConfiguracionesMR.length

			$.cookie('initMR', save, { expires: 14 });

		@cargarMR()

	cargarMR : () ->	
		myCookie = $.cookie('initMR')
		#console.clear()	

		# if (myCookie?) #si hay cokie
		# 	console.log $.cookie('initMR')

		k = 0

		arrayBase = []

		arrayBase = myCookie.split("|");
		
		for i in [0..arrayBase.length-1] 

			auxBase = arrayBase[i]
			arrayBase1 = auxBase.split("*")

			@todasConfiguracionesMR[k] = []

			@todasConfiguracionesMR[k][0] = arrayBase1[0] #nombre
			@todasConfiguracionesMR[k][1] = arrayBase1[1] #tipo
			@todasConfiguracionesMR[k][2] = arrayBase1[2] #tiempo
			@todasConfiguracionesMR[k][3] = arrayBase1[3] #cantidad

			auxBase1 = arrayBase1[4]
			arrayBase2 = auxBase1.split("-")

			@todasConfiguracionesMR[k][4] = []

			for j in [0..arrayBase2.length-1] 
				@todasConfiguracionesMR[k][4][j] = []

				auxBase2 = arrayBase2[j]
				arrayBase3 = auxBase2.split(" ")

				@todasConfiguracionesMR[k][4][j][0] = arrayBase3[0] 
				@todasConfiguracionesMR[k][4][j][1] = arrayBase3[1]
				@todasConfiguracionesMR[k][4][j][2] = arrayBase3[2]

			k++

		j++
		k--

		#console.log @todasConfiguracionesMR
		# @todasConfiguracionesMR[k][4][j] = []

		# @todasConfiguracionesMR[k][4][j][0] = 0
		# @todasConfiguracionesMR[k][4][j][1] = 0
		# @todasConfiguracionesMR[k][4][j][2] = 0

		$('#abrirMR').html('');
		
		for i in [0..@todasConfiguracionesMR.length-1] 

			select = ""
			if i == @selectedMRAccion
				select = "  selected"

			$('#abrirMR').append("""<option value="#{i}" #{select}>#{@todasConfiguracionesMR[i][0]}</option>"""); 

		$('#abrirMR1').html('');
		
		for i in [0..@todasConfiguracionesMR.length-1] 

			select = ""
			if i == 0
				select = "  selected"

			$('#abrirMR1').append("""<option value="#{i}" #{select}>#{@todasConfiguracionesMR[i][0]}</option>"""); 

	#dibujar y configurar MR
	configurarMR : () ->

		

		#console.clear()
		
		@tipoMR = parseInt($("#tipoMR").val())
		@digitosMR = parseInt($("#digitosMR").val())

		#3,6,9,12,15,18,21,24,27,30
		emptyColumsDec = [2,4,6,8,10,12,14,16,18,20]
		emptyColumBin = [3,6,9,12,15,18]
		emptyColumsLetters = [2,4,7,12,13,16,19,22,25,28]

		possible = "abcdefghijklmnopqrstuvwxyz"
		txt = possible.charAt( _.random(0,possible.length-1) )

		possible1 = "0123456789"
		possible2 = "101010"
		possible3 = "010101"


		maxColumnsDec = 22
		maxColumnsBin = 21	
		maxColumnsLetters = 22	

		iSpace = 30
		jSpace = 30

		
		imprimir = ""
		

		inicioCuadro = $(".wrapper").position()
		inicioCuadro = inicioCuadro.top 

		#dec

		if @tipoMR == 0
			emptyColumns = emptyColumsDec
			ponerPossible = possible1
			finL = 10

		#bin
		if @tipoMR == 1
			emptyColumns = emptyColumBin
			ponerPossible = possible2
			finL = 5

		#letter

		if @tipoMR == 2
			emptyColumns = emptyColumsDec
			ponerPossible = possible
			finL = 26
		
		l = 0

		#Letras o números
		if @tipoMR == 0 or @tipoMR == 2
			k = 0
			
			for i in [0..20] 
				auxSuma = 0
				for j in [0..19]

					if l == finL
						l = 0

					if k < @digitosMR	

						if not (@matrizMRConfiguracion[k]?)

							@matrizMRConfiguracion[k] = []	
							@matrizMRConfiguracion[k][4] = 0
							@matrizMRConfiguracion[k][5] = 0	
						else 	

							@matrizMRConfiguracion[k][4] = 1 	#siguiente
							@matrizMRConfiguracion[k][5] = 1	#espacio


						if _.find(emptyColumns, (num) => num == j)
							auxSuma += jSpace

						myX = 20+j*jSpace+auxSuma
						myY = inicioCuadro+i*iSpace
						
						#Si tiene configurado cual va a ser el siguiente
						if parseInt(@matrizMRConfiguracion[k][4]) == 1 
							@matrizMRConfiguracion[k][2] 
							
						else
							@matrizMRConfiguracion[k][2] = k + 1
							@matrizMRConfiguracion[k][4] = 0 


						#si esta configurada una ubicacion especial

						if parseInt(@matrizMRConfiguracion[k][5]) == 1
							
							myX = @matrizMRConfiguracion[k][0] 
							myY = @matrizMRConfiguracion[k][1]  

						else
							@matrizMRConfiguracion[k][3] = 0 
							@matrizMRConfiguracion[k][0] = myX
							@matrizMRConfiguracion[k][1] = myY

						imprimir += """
							<div class="element" id="myElement#{k}"  style="margin-left: #{myX}px; top: #{myY}px;"> 					
									<b> #{ ponerPossible.charAt( l )}  </b>
							</div>	
							"""
						k++; l++;
						
					else
						break

				if k > @digitosMR
					break
		#console.log(@matrizMRConfiguracion)

		#binarios

		if @tipoMR == 1 
			k = 0 #indice digitos

			fPossible = 1
		
			mResta = 1
			ii = 0
			jj = 0

			especial = 0


			for i in [0..4] 

				auxSuma = 0
				mResta = 1
				jj = 0
				fModif = 1

				for j in [0..41]

					if k < @digitosMR

						if not (@matrizMRConfiguracion[k]?)

							@matrizMRConfiguracion[k] = []	
							@matrizMRConfiguracion[k][4] = 0
							@matrizMRConfiguracion[k][5] = 0	
						else 	

							@matrizMRConfiguracion[k][4] = 1
							@matrizMRConfiguracion[k][5] = 1						

						if k % 6 == 0 	
							l = 0
							
							if fPossible 
								ponerPossible = possible2
								fPossible = 0
							else 
								ponerPossible = possible3
								fPossible = 1

							if j != 0

								auxSuma += jSpace


						if k % 3 == 0 and j != 0

							if fModif 

								fModif = 0
								ii++
								jj -= 3


							else
								fModif = 1
								ii--	

						myX = 20+jj*jSpace+auxSuma
						myY = inicioCuadro+ii*iSpace

						# console.log "myX = 20+jj*jSpace+auxSuma"
						# console.log "20+#{jj}*#{jSpace}+#{auxSuma}=#{myX}"	
						
							
						#Si tiene configurado cual va a ser el siguiente
						if parseInt(@matrizMRConfiguracion[k][4]) == 1 
							@matrizMRConfiguracion[k][2] 
							
						else
							@matrizMRConfiguracion[k][2] = k + 1
							@matrizMRConfiguracion[k][4] = 0 


						#si esta configurada una ubicacion especial
						if parseInt(@matrizMRConfiguracion[k][5]) == 1
							
							myX = @matrizMRConfiguracion[k][0] 
							myY = @matrizMRConfiguracion[k][1]  

						else
							
							@matrizMRConfiguracion[k][3] = 0 
							@matrizMRConfiguracion[k][0] = myX
							@matrizMRConfiguracion[k][1] = myY							

						
						#console.log("k:" + k + "|ii:" + ii + "|jj:" + jj + "|x:" + myX + "|y:" + myY + "|mr3:" + @matrizMRConfiguracion[k][3] + "|auxSuma:" + auxSuma)

						
						#debugger

						imprimir += """
							<div class="element" id="myElement#{k}"  style="margin-left: #{myX}px; top: #{myY}px;"> 
								<b>#{ ponerPossible.charAt( l )}</b>
							</div>	
							"""
						$(".container").html(imprimir)

						k++; l++;

						
						jj++
						
					else
						break
				ii += 1

				if k > @digitosMR
					break

		$(".container").html(imprimir)



		for x in [0..@matrizMRConfiguracion.length-1] 
			$("myElement#{x}").unbind('click');


			eval (""" 
				$("#myElement#{x}").click(function() {

					fPoner = 1;
					sacar = [];

					for(j=0;j<window.juegoReaction.matrizSeleccionMR.length;j++){
						if (window.juegoReaction.matrizSeleccionMR[j] == #{x}){
							fPoner = 0;
							sacar[0] = #{x};

							window.juegoReaction.matrizSeleccionMR = _.difference(window.juegoReaction.matrizSeleccionMR, sacar) ;
						}
						
					}

					

					if (fPoner){

						window.juegoReaction.matrizSeleccionMR = _.union(window.juegoReaction.matrizSeleccionMR, #{x});
						myVal = _.map(window.juegoReaction.matrizSeleccionMR, function(num){ return num; })
						
						$("#seleccionMR").val(myVal);
						
					}

					window.juegoReaction.matrizSeleccionMR = _.sortBy(window.juegoReaction.matrizSeleccionMR, function(num){ return num; });

					myVal = _.map(window.juegoReaction.matrizSeleccionMR, function(num){ return num; });
						
					$("#seleccionMR").val(myVal);

					if (window.juegoReaction.matrizSeleccionMR.length == 1){

						$("#siguienteMR").val(window.juegoReaction.matrizMRConfiguracion[#{x}][2]);
					}else{
						$("#siguienteMR").val("");

					}
				});
				""")

			
	checkboxAction : (accion,name,cantidad,yy) ->

		#all
		if accion == "all"

			if yy == 10000
				$("#ch17").prop('checked', true);
				$("#ch18").prop('checked', true);
				$("#ch19").prop('checked', true);
				$("#ch10").prop('checked', true);
				$("#ch20").prop('checked', true);
				$("#ch9").prop('checked', true);

				$("#ch21").prop('checked', true);
				$("#ch22").prop('checked', true);
				$("#ch23").prop('checked', true);
				$("#ch24").prop('checked', true);

			else

				for xx in [0..cantidad]
					$("##{name}#{xx}").prop('checked', true);

		#random
		if accion == "random"
			if yy  == 10000
				_aR = [true,false]

				$("#ch17").prop('checked', _aR[_.random(0,1)]);
				$("#ch18").prop('checked', _aR[_.random(0,1)]);
				$("#ch19").prop('checked', _aR[_.random(0,1)]);
				$("#ch10").prop('checked', _aR[_.random(0,1)]);
				$("#ch20").prop('checked', _aR[_.random(0,1)]);
				$("#ch9").prop('checked', _aR[_.random(0,1)]);

				$("#ch21").prop('checked', _aR[_.random(0,1)]);
				$("#ch22").prop('checked', _aR[_.random(0,1)]);
				$("#ch23").prop('checked', _aR[_.random(0,1)]);
				$("#ch24").prop('checked', _aR[_.random(0,1)]);

			else 
				for xx in [0..cantidad]
					if _.random(0,1)
						$("##{name}#{xx}").prop('checked', true);
					else
						$("##{name}#{xx}").prop('checked', false);

		if accion == "quitar"

			for xx in [0..cantidad]
				if $("##{name}#{xx}").is(':checked') 
					$("##{name}#{xx}").prop('checked', false);

			#caso especial potencias
			if yy == 21
				$("##{name}21").prop('checked', true);
				$("##{name}22").prop('checked', true);
				$("##{name}23").prop('checked', true);
				$("##{name}24").prop('checked', true);

			else

				$("##{name}#{yy}").prop('checked', true);


	configurarEjercicios : () ->

		@ojosPasadas = 0

		@memoriaJugadas = 0

		#CARGO DATOS data.js

		#tsr
		@articulos = window.articulos
		@sustantivos = window.sustantivos
		@adjetivos = window.adjetivos	

		#memoria1 o reaccion

		if $("#allReaction").is(':checked') 
			switch _.random(0,3)
			    when 0 then @memoriaM = window.memoriaM1 
			    when 1 then @memoriaM = window.memoriaM2
			    when 2 then @memoriaM = window.memoriaM3 
			    when 3 then @memoriaM = window.memoriaM4
		else 
			@memoriaM = window.memoriaM4


		#alfabeto en colores

		@alfabeto = window.alfabeto

		#ojos
		@ojosImagenes = window.ojosImagenes
		@ojosLeyendas = window.ojosLeyendas
	
		
		#CONFIGURO ESPACIO
		auxEspacios4 = $("#espacios4").val()

		@espacios = '<span style="display: inline-block; width: 280px;">&nbsp;</span>' 
		@espacios1 = '<span style="display: inline-block; width: 100px;">&nbsp;</span>' 
		@espacios5 = '<span style="display: inline-block; width: 20px;">&nbsp;</span>' 
		@espacios4 = "<span style=\"display: inline-block; width: #{auxEspacios4}px;\">&nbsp;</span>"

		@estado = 1
		
		@totalPasadas = parseInt($("#cantPasadas").val())
		@errores = 0
		@aciertos = 0

		@tieneMemoria = 0
		@tieneMemoria2 = 0
		yy = 0

		@ejerciciosActivos = []

		#tiempos de respuesta
		for xx in [0..@totalEjercicios] 

			@tiempoEjercicios[xx] = []

			@tiempoEjercicios[xx][0] = $("#t#{xx}").val()
			@tiempoEjercicios[xx][1] = $("#tt#{xx}").val()

			#ejercicios activos

			if $("#ch#{xx}").is(':checked') 
				@ejerciciosActivos[yy] = xx
				yy++
				if xx == 5
					@tieneMemoria = 1
				if xx == 7
					@tieneMemoria2 = 1

		yy = 0

		@ejerciciosActivosMemoria = []

		#tiempos de respuesta memoria
		for xx in [0..@totalEjerciciosMemoria-1] 
			#ejercicios activos

			if $("#mm#{xx}").is(':checked') 
				@ejerciciosActivosMemoria[yy] = xx
				yy++

		for xx in [0..@totalEjercicios]
			@erroresEjercicios[xx] = 0

		#Configuro los graficos
		for xx in [0..@totalEjercicios]
			@resultados[xx] = []

		@coloresResultados[0] = "rgba(0,0,180"; @leyendaResultados[0] = "logic"
		@coloresResultados[1] = "rgba(255,118,0"; @leyendaResultados[1] = "math"
		@coloresResultados[2] = "rgba(255,255,0"; @leyendaResultados[2] = "periferica"
		@coloresResultados[3] = "rgba(255,0,0"; @leyendaResultados[3] = "bin"
		@coloresResultados[4] = "rgba(0,154,37"; @leyendaResultados[4] = "sinestesia"
		@coloresResultados[5] = "rgba(169,34,0"; @leyendaResultados[5] = "reaccion"
		@coloresResultados[6] = "rgba(100,100,100"; @leyendaResultados[6] = "speed reading"	
		@coloresResultados[7] = "rgba(0,154,37"; @leyendaResultados[7] = "Memoria"	
		@coloresResultados[8] = "rgba(121,33,135"; @leyendaResultados[8] = "Ojos"
		@coloresResultados[9] = "rgba(175,200,74"; @leyendaResultados[9] = "SumFlash"
		@coloresResultados[10] = "rgba(255,152,213"; @leyendaResultados[10] = "Calendario"

		@coloresResultados[11] = "rgba(12,75,100"; @leyendaResultados[11] = "ClaveMusica"
		@coloresResultados[12] = "rgba(55,19,112"; @leyendaResultados[12] = "Silogismos"
		@coloresResultados[13] = "rgba(175,155,50"; @leyendaResultados[13] = "Hectoc"
		@coloresResultados[14] = "rgba(175,155,50"; @leyendaResultados[14] = "Laberinto"
		@coloresResultados[15] = "rgba(175,155,50"; @leyendaResultados[15] = "MathLogic"
		@coloresResultados[16] = "rgba(175,155,50"; @leyendaResultados[16] = "EmoLogic"
		@coloresResultados[17] = "rgba(175,155,50"; @leyendaResultados[17] = "Suma10"
		@coloresResultados[18] = "rgba(175,155,50"; @leyendaResultados[18] = "Multiplicación"
		@coloresResultados[19] = "rgba(175,155,50"; @leyendaResultados[19] = "Suma100"
		@coloresResultados[20] = "rgba(175,155,50"; @leyendaResultados[20] = "Resta"

		@coloresResultados[20] = "rgba(175,155,50"; @leyendaResultados[21] = "Cuadrado 2 cifras"
		@coloresResultados[20] = "rgba(175,155,50"; @leyendaResultados[22] = "Cuadrado 3 cifras"
		@coloresResultados[20] = "rgba(175,155,50"; @leyendaResultados[23] = "Cuadrado 4 cifras"
		@coloresResultados[20] = "rgba(175,155,50"; @leyendaResultados[24] = "Cuadrado 5 cifras"

		@coloresResultados[20] = "rgba(175,155,50"; @leyendaResultados[25] = "Raiz cuadrada"

	laberinto : () ->

			
		$("#screen").html(""" 
			<div id="labe">
			<canvas id="canvas" width="400" height="300"></canvas>
			</div>
		""")

		@tiempo()


		@resultado = true
		@pausa = 0

		createMaze()
		$("#labe").animate({ 'zoom': $("#zoomLaberinto").val() }, 100);
		@t_ini = Date.now()

		@killTimeout = setTimeout ( =>
					
					$("#screen").html("<h4>&nbsp;</h4>")

					@killTimeout1 = setTimeout ( =>
					
								@checkPosicion(3)

								), @tiempoEjercicios[14][1]

					), @tiempoEjercicios[14][0]

	hectoc : () ->
		possible = "123456789"

		txt = possible.charAt( _.random(0,possible.length-1) ) + possible.charAt( _.random(0,possible.length-1) ) + possible.charAt( _.random(0,possible.length-1) ) + possible.charAt( _.random(0,possible.length-1) ) + possible.charAt( _.random(0,possible.length-1) ) + possible.charAt( _.random(0,possible.length-1) )  
		@_tR = txt

		@resultado = true
		@t_ini = Date.now()
		@tiempo()
		@pausa = 0

		$("#screen").html(""" 
			<center>
				Entrena tu cerebro! El objetivo es siempre 100. <br> Seis d&iacute;gitos deben ser usados, en el orden que aparecen, junto a los operadores +,-,*,/,(,) y pow(base,exponente). <br> Pueden combinarse d&iacute;gitos simples en n&uacute;meros mayores. Buena suerte!
					<br>
						1+(2+3+4)*(5+6) = 100 <br>
						(677-77)/6
					 <br><br>

				<b>#{txt}</b>&nbsp;<input type="text" style="width: 200px" value="" id="hectoc-text"><input type="button" name="ent-hec" value="entrar"  id="hectoc-btn">
			</center>
		""")

		$('#hectoc-text').focus()
		$('#hectoc-text').keypress (event) =>

			if event.which == 13

				ev = $("#hectoc-text").val()
				if parseInt(eval(ev)) == parseInt(100)

					@checkPosicion(true)
				else

					@checkPosicion(false)

		$('#hectoc-btn').click =>
			ev = $("#hectoc-text").val()

			@resultadosList = @_tR + " se resolvio con " + ev + " su da " + ( if parseInt(eval(ev))==100 then "correcta" else parseInt(eval(ev)) ) + "<br>" + @resultadosList
			localStorage.setItem("reultadosListLocalStorage", @resultadosList);

			if parseInt(eval(ev)) == parseInt(100)

				@checkPosicion(true)
			else

				@checkPosicion(false)
				
		
		#oculto la pregunta
		@killTimeout = setTimeout ( =>
					
					$("#screen").html("<h4>&nbsp;</h4>")

					@killTimeout1 = setTimeout ( =>
								
								@checkPosicion(3)


								), @tiempoEjercicios[13][1]

					), @tiempoEjercicios[13][0]

	silogismos : () ->

		tipo = _.random(0,1)

		objetos = []

		totalPosibles = parseInt($("#cantidadSilogismos").val())

		if parseInt($("#tipoSilogismo").val()) == 3
			tipoSilogismo = _.random(0,1)
		else
			tipoSilogismo = parseInt($("#tipoSilogismo").val())

		misPalabras = _.shuffle(window.palabras)
		misPao = _.shuffle(window.PAO)

		console.log(misPao)

		matrix_img = _.shuffle(window.memoriaM4)

		for xx in [0..totalPosibles]

			objetos[xx] = []
			
			possible = "BCDFGHJKLMNPQRSTVWXYZ"
			possible1 = "AEIOU"

			loop 
				continuar = 0

				txt = possible.charAt( _.random(0,possible.length-1) ) + possible1.charAt( _.random(0,possible1.length-1) ) + possible.charAt( _.random(0,possible.length-1) ) 

				for mm in [xx..0]
					if txt != objetos[mm][0]
						continuar = 1

				if continuar
					break

			if tipoSilogismo == 0
				objetos[xx][0] = misPalabras[xx]
			if tipoSilogismo == 1
				objetos[xx][0] = txt
			if tipoSilogismo == 2
				objetos[xx][0] = misPao[xx][0] + " " + misPao[xx][1] + " " + misPao[xx][2]
			if tipoSilogismo == 4
				objetos[xx][0] = """ <img src="#{matrix_img[xx]}" class="emo-img"> """
			
			objetos[xx][1] = _.random(0,1)

		console.log objetos

		#console.log(objetos)

		silo = []

		tipo = _.random(0,1)

		#tipo = 1

		if tipo

			salida = ""

			for xx in [0..totalPosibles-1]

				if objetos[xx][1] == objetos[xx+1][1]
					if _.random(0,1)
						silo[xx] = objetos[xx][0] + " is the same as " + objetos[xx+1][0] + "<br>"
					else
						silo[xx] = objetos[xx+1][0] + " is the same as " + objetos[xx][0] + "<br>"

				else 
					if _.random(0,1)
						silo[xx] = objetos[xx][0] + " is the opposite to " + objetos[xx+1][0] + "<br>"
					else
						silo[xx] = objetos[xx+1][0] + " is the opposite to " + objetos[xx][0] + "<br>"

				salida += silo[xx]

			elegido1 = _.random(0,totalPosibles)

			loop	

				elegido2 = _.random(0,totalPosibles)
				if elegido2 != elegido1 
					break

			elegidoRnd = _.random(0,1)
			#elegidoRnd = 0

			if elegidoRnd

				if _.random(0,1)		
					salida1 = "<b style=\"color:blue;\">Is #{objetos[elegido1][0]} the same as #{objetos[elegido2][0]}?</b>"
				else
					salida1 = "<b style=\"color:blue;\">Is #{objetos[elegido2][0]} the same as #{objetos[elegido1][0]}?</b>"	

				if objetos[elegido1][1] == objetos[elegido2][1]
					@resultado = true
				else
					@resultado = false

			else

				if _.random(0,1)
					salida1 = "<b style=\"color:blue;\">Is #{objetos[elegido1][0]} opposite to #{objetos[elegido2][0]}?</b>"
				else 
					salida1 = "<b style=\"color:blue;\">Is #{objetos[elegido2][0]} opposite to #{objetos[elegido1][0]}?</b>"

				if objetos[elegido1][1] != objetos[elegido2][1]
					@resultado = true #true
				else
					@resultado = false #false

			if $("#desordenarProposiciones").is(':checked')

		
				silo = _.shuffle(silo)
				salida = ""

				for xx in [0..totalPosibles-1]
					salida += silo[xx]
		else #tipo
			#more or less

			salida = ""

			lessOrMore =  _.random(0,1) 

			preguntaLessOrMore = "more"
			if lessOrMore
				preguntaLessOrMore = "less"

			console.clear()
			console.log(preguntaLessOrMore)
			for xx in [0..objetos.length-1]

				console.log(objetos[xx][0])

			for xx in [0..totalPosibles-1]

				silo[xx] = objetos[xx][0] + " is #{preguntaLessOrMore} than " + objetos[xx+1][0] + "<br>"

				
				if $("#invertirProposiciones").is(':checked')
					rnd = _.random(0,1) 

					if rnd

						preguntaLessOrMore1 = "less"
						if preguntaLessOrMore == "less"
							preguntaLessOrMore1 = "more"

						silo[xx] = objetos[xx+1][0] + " is #{preguntaLessOrMore1} than " + objetos[xx][0]  + "<!-- | #{rnd}--><br>"
				
				
				salida += silo[xx]

			elegido1 = _.random(0,totalPosibles)

			loop	

				elegido2 = _.random(0,totalPosibles)
				if elegido2 != elegido1 
					break

			rnd = _.random(0,1)
			#rnd = 0

			if rnd
				salida1 = "<b style=\"color:blue;\">Is #{objetos[elegido1][0]} less than #{objetos[elegido2][0]}?</b>"

				if lessOrMore
					if elegido1 < elegido2
						@resultado = true
					else
						@resultado = false
				else
					if elegido1 < elegido2
						@resultado = false
					else
						@resultado = true


			else
				salida1 = "<b style=\"color:blue;\">Is #{objetos[elegido1][0]} more than #{objetos[elegido2][0]}?</b>"
				if lessOrMore
					if elegido1 < elegido2
						@resultado = false
					else
						@resultado = true
				else
					if elegido1 < elegido2

						@resultado = true
					else
						@resultado = false


			#console.log(elegido1 + "-" + elegido2)

			if $("#desordenarProposiciones").is(':checked')

				silo = _.shuffle(silo)
				salida = ""

				for xx in [0..totalPosibles-1]
					salida += silo[xx]

			#tipo

		@pausa = 0

		
		if _.random(0,1)
			salida2 = "YES &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; NO"
		else 
			salida2 = "NO &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; YES"
			@resultado = not @resultado
	

		@t_ini = Date.now()
		@tiempo()

		scriptPut=""
		seeQ=""
		if $("#hideQuestion").is(':checked')
			scriptPut= """ 
			<script> $("#myQ").hide(); 
			function _seeQ(){ $("#myA").hide();  $("#seeQ").hide(); $("#myQ").show();  } 
			</script> """
			seeQ=""" <div id="seeQ" onclick="_seeQ();" style="color:blue;"> See Question </div> """
			console.log("script put")


		$("#screen").html(""" 
			<div id="myA">#{salida}</div>#{seeQ}<div id="myQ">#{salida1}<br></div><br>#{salida2}

			#{scriptPut}

		""")

			#oculto la pregunta
		@killTimeout = setTimeout ( =>
					
					$("#screen").html("<h4>&nbsp;</h4>")

					@killTimeout1 = setTimeout ( =>
								
								@checkPosicion(3)


								), @tiempoEjercicios[12][1]

					), @tiempoEjercicios[12][0]


	clef : () ->

		claves = []

		for xx in [0..6]
			claves[xx] = []

		claves[0][0] = "sol.gif";  claves[0][1] = 0;
		claves[1][0] = "fa.gif"; claves[1][1] = -2;
		claves[2][0] = "do1.gif"; claves[2][1] = -5;
		claves[3][0] = "do2.gif"; claves[3][1] = -3;
		claves[4][0] = "do3.gif"; claves[4][1] = -1;
		claves[5][0] = "do4.gif"; claves[5][1] = 1;
		claves[6][0] = "fa3.gif"; claves[6][1] = -4;

		lugares = []

		for xx in [0..11]
			lugares[xx] = []

		lugares[0][0] = 8; lugares[0][1] = 6
		lugares[1][0] = 12; lugares[1][1] = 7
		lugares[2][0] = 16; lugares[2][1] = 8
		lugares[3][0] = 20; lugares[3][1] = 9
		lugares[4][0] = 24; lugares[4][1] = 10
		lugares[5][0] = 27; lugares[5][1] = 11
		lugares[6][0] = 31; lugares[6][1] = 12
		lugares[7][0] = 35; lugares[7][1] = 13
		lugares[8][0] = 49; lugares[8][1] = 14
		lugares[9][0] = 43; lugares[9][1] = 15
		lugares[10][0] = 47; lugares[10][1] = 16

		# c 0 d 1 e 2 f 3 g 4 a 5 b 6

		nota = []

		nota[0] = 2 
		nota[2] = 1 
		nota[3] = 0 
		nota[4] = 6 
		nota[5] = 5
		
		nota[6] = 4
		nota[7] = 3
		nota[8] = 2
		nota[9] = 1
		nota[10] = 0
		nota[11] = 6
		nota[12] = 5
		nota[13] = 4
		nota[14] = 3
		nota[15] = 2
		nota[16] = 1
		nota[17] = 0


		s = _.random(0,6)
		seleccion = claves[s][0]
		l = _.random(0,10)
		lugar = lugares[l][0]
		seleccionNota = nota[lugares[l][1]+claves[s][1]]

		console.log(seleccionNota)

		control = ""

		if @esMovil
			control = """
				<input type="button" name="cc1" value="C" id="btn-c">
				<input type="button" name="cc2" value="D" id="btn-d">
				<input type="button" name="cc3" value="E" id="btn-e">
				<input type="button" name="cc4" value="F" id="btn-f">
				<input type="button" name="cc5" value="G" id="btn-g">
				<input type="button" name="cc6" value="A" id="btn-a">
				<input type="button" name="cc7" value="B" id="btn-b">

			"""


		$("#screen").html(""" 
			<br>
			<div style="width: 80px; height: 66px;">
				<div style="width: 40px; height: 66px; background-image: url(clef/#{seleccion}); float:left;"></div>
				<div style="width: 40px; height: 66px; background-image: url(clef/penta.png); float:left;">
					<div style="margin-top: #{lugar}px; margin-right: 0px;"><img src="clef/Whole-Note.gif" width="8px" height="8px"></div>
				</div>
			</div>
			<br>
			#{control}

		""")


		if @esMovil
			$("#btn-c").click =>
				@checkPosicion(@teclaNotas[0])
			$("#btn-d").click =>
				@checkPosicion(@teclaNotas[1])
			$("#btn-e").click =>
				@checkPosicion(@teclaNotas[2])
			$("#btn-f").click =>
				@checkPosicion(@teclaNotas[3])
			$("#btn-g").click =>
				@checkPosicion(@teclaNotas[4])
			$("#btn-a").click =>
				@checkPosicion(@teclaNotas[5])
			$("#btn-b").click =>
				@checkPosicion(@teclaNotas[6])

		@resultado = true
		@pausa = 0

		for xx in [0..6]
    		@teclaNotas[xx] = false

    	@teclaNotas[seleccionNota] = true

		@t_ini = Date.now()
		

		@killTimeout = setTimeout ( =>
					
					$("#screen").html("<h4>&nbsp;</h4>")

					@killTimeout1 = setTimeout ( =>
					
								@checkPosicion(3)

								), @tiempoEjercicios[11][1]

					), @tiempoEjercicios[11][0]

	ojos : () ->
		inversion = []

		inversion[0] = 1
		inversion[1] = 0
		inversion[2] = 2
		inversion[3] = 4
		inversion[4] = 3
		inversion[5] = 6
		inversion[6] = 5
		inversion[7] = 7

		@pausa = 0
		inversoTxt = ""
		inversoCss = ""
		inverso = 0
		
		$("#pasadas").html(@totalPasadas - @jugadas)

		if @ojosPasadas == 0
			@ojosAnterior = _.random(0,@ojosImagenes.length-1)
			@esInverso = _.random(0,1)
			
			@tipo = 2
			@resultado = true
			if @esInverso
				inversoCss = "border: 3px solid #8AC007; width: 400px;"
				inversoTxt = "Inverso"

		else
		
		#alert(@ojosImagenes)
		#alert(@ojosLeyendas)

			inverso = _.random(0,1);
			cambiar = _.random(0,1);

			if inverso
				inversoCss = "border: 3px solid #8AC007; width: 400px;"
				inversoTxt = "Inverso"

			if cambiar 		

				loop	
					rand =  _.random(0,@ojosImagenes.length-1)

					if @esInverso and inverso
						if rand != @ojosAnterior
							break	

					if @esInverso and not inverso 
						if rand != inversion[@ojosAnterior]
							break	

					if not @esInverso and inverso
						if inversion[rand] != @ojosAnterior
							break	

					if not @esInverso and not inverso
						if rand != @ojosAnterior
							break

				console.log("c|#{@ojosAnterior}:#{@esInverso}|#{rand}:#{inverso}")
					
				@ojosAnterior = rand
				@resultado = false

			else
				console.log("|#{@ojosAnterior}:#{inversion[@ojosAnterior]}")

				if inverso
					@ojosAnterior = inversion[@ojosAnterior]


				@resultado = true

		
			@esInverso = inverso

		color = _.random(0,2)

		#leyenda o imagen
		if  _.random(0,4) > 1 and @ojosAnterior != 7 and @ojosPasadas != 0 and not @leyendaAnterior 
			@leyendaAnterior = 1

			mostrar =  "<br><br><center>#{@ojosLeyendas[@ojosAnterior]}</center>"	
		else
			@leyendaAnterior = 0
			mostrar = """<center><div style="#{inversoCss}"><img src="/ojos/#{@ojosImagenes[@ojosAnterior][color]}" width="200" height="200"><img src="/ojos/#{@ojosImagenes[@ojosAnterior][color]}" width="200" height="200"></div> </center> <div style="clear:both;"/> #{inversoTxt}"""


		$("#liveHelp").html("""  <img src="/em/img/imagen-ojos.jpg" width="325" height="160"> <div style="clear:both;"/> """)

		$("#screen").html(mostrar)

		#console.log(@ojosImagenes[@ojosAnterior][color])
		@t_ini = Date.now()

		@ojosPasadas++

	
		@killTimeout = setTimeout ( =>
				
				$("#screen").html("<h4>&nbsp;</h4>")

				@killTimeout1 = setTimeout ( =>

							if @ojosPasadas == 1
								@checkPosicion(@resultado)
							else
								@checkPosicion(3)

							), if @ojosPasadas == 1 then 0 else @tiempoEjercicios[8][1]  

				), @tiempoEjercicios[8][0]


	tsr : () ->

		@pausa = 0

		bien = _.random(0,1)
		@resultado = bien

		tipoFrase = _.random(0,3)

		maxArticulos = 3
		maxSustantivos = 23
		maxAdjetivos = 17

		selectArt = tipoFrase
		selectSust = _.random(0,maxSustantivos)
		selectAdj = _.random(0,maxAdjetivos)

		art = ""
		sust = ""
		adj = ""

		cantidadErrores = 0
		dondeError = _.random(0,2)

		if bien
			art = @articulos[selectArt][ _.random(0,1)]
			sust = @sustantivos[selectSust][selectArt]
			adj = @adjetivos[selectAdj][selectArt]
		else

			loop
				selectArt2 = _.random(0,3);
				if dondeError = 1
					break  
				if selectArt2 != selectArt
					break

			loop
				selectArt3 = _.random(0,3);  
				if dondeError = 0
					break
				if selectArt3 != selectArt
					break

			art = @articulos[selectArt][ _.random(0,1)]
			sust = @sustantivos[selectSust][selectArt2]
			adj = @adjetivos[selectAdj][selectArt3]


		$("#pasadas").html(@totalPasadas - @jugadas)

		$("#screen").html("<center><h3>"+art+@espacios4+sust+@espacios4+adj+"</h3></center>")	

		@t_ini = Date.now()	

		@killTimeout = setTimeout ( =>
				
				$("#screen").html("<h2>&nbsp;</h4>")

				@killTimeout1 = setTimeout ( =>
				
							@checkPosicion(3)

							), @tiempoEjercicios[6][1]

				), @tiempoEjercicios[6][0]

	raiz : (digitosPotencia) ->

		
		numeroRaiz = _.random(100000,999999)
		@_tR = numeroRaiz

		resultadoRaiz = Math.pow(numeroRaiz, 0.5)

		console.log(resultadoRaiz)

		resultadoRaiz = roundToFive(resultadoRaiz)
		@_tR1 = resultadoRaiz

		console.log(resultadoRaiz)

		@resultado = true; @pausa = 0; @t_ini = Date.now()

		$("#screen").html("""
				<center>
					<h3>√#{numeroRaiz}</h3>
					<input type="text" id="mySumFlashResult" style="width: 45px">,<input type="text" id="mySumFlashResult1" style="width: 45px"><input type="button" value="ok" id="okSumFlash">
				</center>
			""")

		eval(""" 

				$("#okSumFlash").click(function(){
					window.juegoReaction.resultadosList = "√" + window.juegoReaction._tR + " = " + $("#mySumFlashResult").val()+"."+$("#mySumFlashResult1").val() + " la respuesta es " + (($("#mySumFlashResult").val()+"."+$("#mySumFlashResult1").val()+""=="#{resultadoRaiz}")?"correcta":"en realidad " + window.juegoReaction._tR1) + "<br>" + window.juegoReaction.resultadosList ; 
					localStorage.setItem("reultadosListLocalStorage", window.juegoReaction.resultadosList);

					if($("#mySumFlashResult").val()+"."+$("#mySumFlashResult1").val()+""=="#{resultadoRaiz}"){
						window.juegoReaction.checkPosicion(true);
					}else{
						window.juegoReaction.checkPosicion(false);
					}
					$("#screen").html("");

				});

				$("#mySumFlashResult1").keypress(function(event) {
					if ( event.which == 13 ) {
						window.juegoReaction.resultadosList = "√" + window.juegoReaction._tR + " = " + $("#mySumFlashResult").val()+"."+$("#mySumFlashResult1").val() + " la respuesta es " + (($("#mySumFlashResult").val()+"."+$("#mySumFlashResult1").val()+""=="#{resultadoRaiz}")?"correcta":"en realidad " + window.juegoReaction._tR1) + "<br>" + window.juegoReaction.resultadosList ; 
						localStorage.setItem("reultadosListLocalStorage", window.juegoReaction.resultadosList);
				
						if($("#mySumFlashResult").val()+"."+$("#mySumFlashResult1").val()+""=="#{resultadoRaiz}"){
						window.juegoReaction.checkPosicion(true);
						}else{
							window.juegoReaction.checkPosicion(false);
						}
					    
					    $("#screen").html("");
					 }

					 setTimeout(function(){
					 	if($("#mySumFlashResult").val()+"."+$("#mySumFlashResult1").val()+""=="#{resultadoRaiz}"){
					 		window.juegoReaction.resultadosList = "√" + window.juegoReaction._tR + " = " + $("#mySumFlashResult").val()+"."+$("#mySumFlashResult1").val() + " la respuesta es " + (($("#mySumFlashResult").val()+"."+$("#mySumFlashResult1").val()+""=="#{resultadoRaiz}")?"correcta":"en realidad " + window.juegoReaction._tR1) + "<br>" + window.juegoReaction.resultadosList ; 
							localStorage.setItem("reultadosListLocalStorage", window.juegoReaction.resultadosList);

							window.juegoReaction.checkPosicion(true);
							$("#screen").html("");

						}

					 },5);
					 
					console.log("1");

				});

				$("#mySumFlashResult").keypress(function(event) {

					if($("#mySumFlashResult").val().length==2){
						setTimeout(function(){$("#mySumFlashResult1").focus(); },5);
					}

				});

				$("#mySumFlashResult").focus();

			""")

		@killTimeout1 = setTimeout ( =>
							
					@checkPosicion(3)

				), 300000

	potencia : (digitosPotencia) ->

		if digitosPotencia == 2 
			numeroPotenciar = _.random(10,99)

		if digitosPotencia == 3 
			numeroPotenciar = _.random(100,999)

		if digitosPotencia == 4 
			numeroPotenciar = _.random(1000,9999)

		if digitosPotencia == 5 
			numeroPotenciar = _.random(10000,99999)

		resultadoPotencia = numeroPotenciar * numeroPotenciar

		@_tR = numeroPotenciar
		@_tR1 = resultadoPotencia

		console.log(resultadoPotencia)

		@resultado = true; @pausa = 0; @t_ini = Date.now()

		$("#screen").html("""
				<center>
					<h3>#{numeroPotenciar}²</h3>
					<input type="text" id="mySumFlashResult" style="width: 45px"><input type="button" value="ok" id="okSumFlash">
				</center>
			""")

		eval(""" 

				$("#okSumFlash").click(function(){

					if(window.juegoReaction.senglarMindMode)
						return;

					window.juegoReaction.resultadosList = window.juegoReaction._tR + "² = " + $("#mySumFlashResult").val() + " la respuesta es " + ((parseInt($("#mySumFlashResult").val())==window.juegoReaction._tR1 )?"correcta":"en realidad " + window.juegoReaction._tR1) + "<br>" + window.juegoReaction.resultadosList ; 
					localStorage.setItem("reultadosListLocalStorage", window.juegoReaction.resultadosList);

					if(parseInt($("#mySumFlashResult").val())==#{resultadoPotencia} ){
						window.juegoReaction.checkPosicion(true);
					}else{
						window.juegoReaction.checkPosicion(false);
					}
					$("#screen").html("");

					
				});

				$("#mySumFlashResult").keypress(function(event) {
					if ( event.which == 13 ) {

						if(window.juegoReaction.senglarMindMode)
							return;

						window.juegoReaction.resultadosList = window.juegoReaction._tR + "² = " + $("#mySumFlashResult").val() + " la respuesta es " + ((parseInt($("#mySumFlashResult").val())==window.juegoReaction._tR1 )?"correcta":"en realidad " + window.juegoReaction._tR1) + "<br>" + window.juegoReaction.resultadosList ; 
						localStorage.setItem("reultadosListLocalStorage", window.juegoReaction.resultadosList);

						if(parseInt($("#mySumFlashResult").val())==#{resultadoPotencia}){
						window.juegoReaction.checkPosicion(true);
						}else{
							window.juegoReaction.checkPosicion(false);
						}
					    
					    $("#screen").html("");
					 }

					 setTimeout(function(){
					 	if(parseInt($("#mySumFlashResult").val())==#{resultadoPotencia}){
					 		window.juegoReaction.resultadosList = window.juegoReaction._tR + "² = " + $("#mySumFlashResult").val() + " la respuesta es " + ((parseInt($("#mySumFlashResult").val())==window.juegoReaction._tR1 )?"correcta":"en realidad " + window.juegoReaction._tR1) + "<br>" + window.juegoReaction.resultadosList ; 
							localStorage.setItem("reultadosListLocalStorage", window.juegoReaction.resultadosList);

							window.juegoReaction.checkPosicion(true);
							$("#screen").html("");

						}

					 },5);
					 
					console.log("1");

				});

				

				$("#mySumFlashResult").focus();

			""")

		@killTimeout1 = setTimeout ( =>
							
					@checkPosicion(3)

				), 3000000


	sumFlash : () ->
		cantidad = $("#pasadasSumFlash").val()
		minSumFlash = parseInt($("#minSumFlash").val())
		maxSumFlash = parseInt($("#maxSumFlash").val())

		if @jugadasSumFlash == 0
			@acumuladorSumFlash = 0
			@jugadasSumFlash = 0
			elegido = - 1
			sumFlashElegido = elegido
			@_tR = ""

		if @jugadasSumFlash < cantidad

			loop
				nuevo = _.random(minSumFlash,maxSumFlash)

				if nuevo != @sumFlashElegido
					break

			elegido = nuevo
			@_tR += "+" + elegido
			@sumFlashElegido = elegido

			@acumuladorSumFlash += parseInt(elegido)
			@jugadasSumFlash++

			$("#screen").html("<center><h1 style=\"color: black; font-size: 100px;\">#{elegido}</h1></center>")

			console.log(@tiempoEjercicios[9][0])
		

			@killTimeout = setTimeout ( =>

						@sumFlash()		
					
					
					), @tiempoEjercicios[9][0]

		else

			###
			if _.random(0,1)
				@resultado = true
				mostrar = @acumuladorSumFlash
			else
				@resultado = false
				mostrar = @acumuladorSumFlash + _.random(-10,10)

			###
			@resultado = true

			@t_ini = Date.now()
			@pausa = 0
			@jugadasSumFlash = 0

			console.log @acumuladorSumFlash

			$("#screen").html("""
				<center>
					<input type="text" id="mySumFlashResult" style="width: 45px"><input type="button" value="ok" id="okSumFlash">
				</center>
			""")

			eval(""" 

				$("#okSumFlash").click(function(){

					window.juegoReaction.resultadosList = window.juegoReaction._tR + " = " + window.juegoReaction.acumuladorSumFlash + " su respuesta es " + (parseInt($("#mySumFlashResult").val())==parseInt(window.juegoReaction.acumuladorSumFlash)?"correcta":$("#mySumFlashResult").val()) + "<br>" + window.juegoReaction.resultadosList ; 
					localStorage.setItem("reultadosListLocalStorage", window.juegoReaction.resultadosList);

					if(parseInt($("#mySumFlashResult").val())==parseInt(window.juegoReaction.acumuladorSumFlash)){
						window.juegoReaction.checkPosicion(true);
					}else{
						window.juegoReaction.checkPosicion(false);
					}
					$("#screen").html("");

							
				});

				$("#mySumFlashResult").keypress(function(event) {
					if ( event.which == 13 ) {
						window.juegoReaction.resultadosList = window.juegoReaction._tR + " = " + window.juegoReaction.acumuladorSumFlash + " su respuesta es " + (parseInt($("#mySumFlashResult").val())==parseInt(window.juegoReaction.acumuladorSumFlash)?"correcta":$("#mySumFlashResult").val()) + "<br>" + window.juegoReaction.resultadosList; 
						localStorage.setItem("reultadosListLocalStorage", window.juegoReaction.resultadosList);

						if(parseInt($("#mySumFlashResult").val())==parseInt(window.juegoReaction.acumuladorSumFlash)){
						window.juegoReaction.checkPosicion(true);
						}else{
							window.juegoReaction.checkPosicion(false);
						}
						    
					    $("#screen").html("");
					 }

					 setTimeout(function(){
					 	if(parseInt($("#mySumFlashResult").val())==parseInt(window.juegoReaction.acumuladorSumFlash)){
					 		window.juegoReaction.resultadosList = window.juegoReaction._tR + " = " + window.juegoReaction.acumuladorSumFlash + " su respuesta es " + (parseInt($("#mySumFlashResult").val())==parseInt(window.juegoReaction.acumuladorSumFlash)?"correcta":$("#mySumFlashResult").val()) + "<br>" + window.juegoReaction.resultadosList; 
							localStorage.setItem("reultadosListLocalStorage", window.juegoReaction.resultadosList);

							window.juegoReaction.checkPosicion(true);
							$("#screen").html("");		
						}

					 },5);
					 
					console.log("1");

				});

				

				$("#mySumFlashResult").focus();

			""")

			@killTimeout1 = setTimeout ( =>
								
						@checkPosicion(3)
						


					), @tiempoEjercicios[9][1]


	memoria2 : () ->
		
		#cantidad = parseInt($("#cMemoria#{@ejercicioSeleccionadoMemoria}").val())

		if @memoriaJugadas == 0
			@memoriaM2 = []

			@entrarMemoria = 0

			cantidadEjerciciosMemoria = @ejerciciosActivosMemoria.length
			@ejercicioSeleccionadoMemoria = @ejerciciosActivosMemoria[_.random(0,cantidadEjerciciosMemoria - 1)]
			#!
			#@ejercicioSeleccionadoMemoria = 12
			cantidad = parseInt($("#cMemoria#{@ejercicioSeleccionadoMemoria}").val())
			@cantidad1 = cantidad

			#console.log(@ejerciciosActivosMemoria)
			#console.log(cantidad)

			@constantTime = 0
			@bPAO = 0

			for xx in [0..cantidad+10]
				@PAO[xx] = []

			if $("#constantTime").is(':checked')
				@constantTime = 1 

			#console.log(@ejerciciosActivosMemoria)

			if @ejercicioSeleccionadoMemoria == 0

				@tiempoEjercicios[7][0] = $("#t7").val()
			else
				@tiempoEjercicios[7][0] = $("#tm#{@ejercicioSeleccionadoMemoria}").val()

			@tiempoEjercicios[7][1] = $("#tt7").val()
			
			@tiempoEjercicioInicial = @tiempoEjercicios[7][0] 
			
			#@ejercicioSeleccionadoMemoria = 10

			switch @ejercicioSeleccionadoMemoria
				when 0 then @memoriaM2 = window.palabras
				when 1 then @memoriaM2 = window.cartas
				when 2 
					z = 0
					@bPAO = 1

					for xx in [0..cantidad+10]
						repetir = 0
						a = _.random(0,window.PAO.length-1)
						b = _.random(0,window.PAO.length-1)
						c = _.random(0,window.PAO.length-1)

						@PAO[z][0] = a 
						@PAO[z][1] = b
						@PAO[z][2] = c

						@memoriaM2[xx] = """#{window.PAO[a][0]} #{window.PAO[b][1]} #{window.PAO[c][2]}""" 

				when 3 then @memoriaM2 = window.numeros
				when 4 then @memoriaM2 = window.figuras
				when 5

					matrices = []
					dimension = parseInt($("#dimensionMatriz").val())

					for xx in [0..cantidad+20]
						
						if dimension <= 1

							finBucle = 1

							if dimension == 1 
								finBucle = 3

							a = ""
							
							for yy in [0..finBucle]

								r = _.random(0,7)
								#console.log( "l:" + a + "") 

								if r == 0
									a += """<tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>"""
								if r == 1
									a += """<tr><td>&nbsp;</td><td>&nbsp;</td><td bgcolor="#0000FF">&nbsp;</td></tr>"""
								if r == 2
									a +=  """<tr><td>&nbsp;</td><td bgcolor="#0000FF">&nbsp;</td><td bgcolor="#0000FF">&nbsp;</td></tr>"""
								if r == 3
									a += """<tr><td bgcolor="#0000FF">&nbsp;</td><td bgcolor="#0000FF">&nbsp;</td><td bgcolor="#0000FF">&nbsp;</td></tr>"""
								if r == 4
									a += """<tr><td bgcolor="#0000FF">&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>"""
								if r == 5
									a += """<tr><td bgcolor="#0000FF">&nbsp;</td><td>&nbsp;</td><td bgcolor="#0000FF">&nbsp;</td></tr>"""
								if r == 6
									a +=  """<tr><td bgcolor="#0000FF">&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>"""
								if r == 7
									a +=  """<tr><td>&nbsp;</td><td bgcolor="#0000FF">&nbsp;</td><td>&nbsp;</td></tr>"""
							
						if dimension > 1	
							finBucle = 1

							if dimension == 3 
								finBucle = 3
							if dimension == 4
								finBucle = 4

							a = ""
							
							for yy in [0..finBucle]

								r = _.random(0,15)
								
								#console.log( "l:" + a + "") 

								if r == 0
									a += """<tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>""" #0000
								if r == 1
									a += """<tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td bgcolor="#0000FF">&nbsp;</td></tr>""" #0001
								if r == 2
									a +=  """<tr><td>&nbsp;</td><td>&nbsp;</td><td bgcolor="#0000FF">&nbsp;</td><td>&nbsp;</td></tr>""" #0010
								if r == 3
									a += """<tr><td>&nbsp;</td><td bgcolor="#0000FF">&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>""" #0100
								if r == 4
									a += """<tr><td bgcolor="#0000FF">&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>""" #1000
								if r == 5
									#0011
									a += """<tr><td>&nbsp;</td><td>&nbsp;</td><td bgcolor="#0000FF">&nbsp;</td><td bgcolor="#0000FF">&nbsp;</td></tr>"""
								if r == 6
									#0110
									a +=  """<tr><td>&nbsp;</td><td bgcolor="#0000FF">&nbsp;</td><td bgcolor="#0000FF">&nbsp;</td><td>&nbsp;</td></tr>"""
								if r == 7
									#1100
									a +=  """<tr><td bgcolor="#0000FF">&nbsp;</td><td bgcolor="#0000FF">&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>"""
								if r == 8
									#0111

									a +=  """<tr><td>&nbsp;</td><td bgcolor="#0000FF">&nbsp;</td><td bgcolor="#0000FF">&nbsp;</td><td bgcolor="#0000FF">&nbsp;</td></tr>"""
								if r == 9
									#1110
									a +=  """<tr><td bgcolor="#0000FF">&nbsp;</td><td bgcolor="#0000FF">&nbsp;</td><td bgcolor="#0000FF">&nbsp;</td><td>&nbsp;</td></tr>"""
								if r == 10
									#1111
									a +=  """<tr><td bgcolor="#0000FF">&nbsp;</td><td bgcolor="#0000FF">&nbsp;</td><td bgcolor="#0000FF">&nbsp;</td><td bgcolor="#0000FF">&nbsp;</td></tr>"""
								if r == 11
									#0101
									a +=  """<tr><td>&nbsp;</td><td bgcolor="#0000FF">&nbsp;</td><td>&nbsp;</td><td bgcolor="#0000FF">&nbsp;</td></tr>"""
								if r == 12
									#1010
									a +=  """<tr><td bgcolor="#0000FF">&nbsp;</td><td>&nbsp;</td><td bgcolor="#0000FF">&nbsp;</td><td>&nbsp;</td></tr>"""
								if r == 13
									#1001
									a +=  """<tr><td bgcolor="#0000FF">&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td bgcolor="#0000FF">&nbsp;</td></tr>"""
								if r == 14
									#1011
									a +=  """<tr><td bgcolor="#0000FF">&nbsp;</td><td>&nbsp;</td><td bgcolor="#0000FF">&nbsp;</td><td bgcolor="#0000FF">&nbsp;</td></tr>"""
								if r == 15
									#1101
									a +=  """<tr><td bgcolor="#0000FF">&nbsp;</td><td bgcolor="#0000FF">&nbsp;</td><td>&nbsp;</td><td bgcolor="#0000FF">&nbsp;</td></tr>"""


						matrices[xx] = """<table border="1" style="border-collapse: collapse; border: 1px solid black;" class="table-memo">#{a}</table>"""
						     

					@memoriaM2 = matrices

					#console.log(@memoriaM2)

				when 6
					matrizCarasImagen = []
					nombresHombre = window.nombresHombre
					nombresMujer = window.nombresMujer

					nombresHombre.sort( => return 0.5 - Math.random() )
					nombresMujer.sort( => return 0.5 - Math.random() )

					yy = 0
					jj = 0
					kk = 0
					
					for xx in [1..100] 
						if yy == 241
							yy = 0


						if jj == 271
							jj = 0
						

						ceros = ""

						if xx < 10
							ceros = "000"
						else if xx < 100
							ceros = "00"
						else if xx < 1000
							ceros = "0"
						
						matrizCarasImagen[kk] = """<div><img src="/caras/1-#{ceros}#{xx}.jpg" width="100px" height="100px"><br>#{nombresHombre[yy]}</div>"""
						matrizCarasImagen[kk+1] = """<div><img src="/caras/2-#{ceros}#{xx}.jpg" width="100px" height="100px"><br>#{nombresMujer[jj]}</div>"""

						yy++; jj++; kk += 2;

					matrizCarasImagen.sort( => return 0.5 - Math.random() )

					@memoriaM2 = matrizCarasImagen

				when 7
					matrizAbstractas = []
					for xx in [1..200] 
						matrizAbstractas[xx-1] =  """<img src="/abstractas/image-#{xx}.png">"""

					@memoriaM2 = matrizAbstractas

				when 8
					matrizFechas = []

					for xx in [0..100] 

						myDate = @randomDate( new Date(1000, 0, 1), new Date(2099, 0, 1))
			
						month = myDate.getMonth()
						fullYear = myDate.getFullYear()
						day = myDate.getDay()
						date = myDate.getDate()
						year = myDate.getYear()

						matrizFechas[xx] = "<h3>#{date} - #{window.MONTH[month][1]} - #{fullYear}</h3>"

					@memoriaM2 = matrizFechas
				when 9
					@memoriaM2 = window.paises	

				when 10 

					str = $("#simbolitos").html()
					res = str.split(" ");
					@memoriaM2 = res	

				when 11

					str = $("#palabras1").html()
					res = str.split(" ");
					@memoriaM2 = res	
					#console.log(@memoriaM2)

				when 12 #mix

					memoMixArray = []
					###
					if typeof(memoMixArray[0]) == "undefined"
						alert("hola") 
					return
					###
				
					for zzz in [0..cantidad+1]

						randomMix = _.random(0,11)
						#randomMix = 7

						switch randomMix
							when 0
								@mixTiempos[zzz] = $("#t7").val()

								if typeof(memoMixArray[randomMix]) == "undefined"
									memoMixArray[randomMix] = []
									memoMixArray[randomMix] =  window.palabras

							when 1 
								@mixTiempos[zzz] = $("#tm#{randomMix}").val()

								if typeof(memoMixArray[randomMix]) == "undefined"
									memoMixArray[randomMix] = []
									memoMixArray[randomMix] =  window.cartas
							when 2

								@mixTiempos[zzz] = $("#tm#{randomMix}").val()

								if typeof(memoMixArray[randomMix]) == "undefined"
									z = 0
									@bPAO = 1
									arrayAux = []

									for xx in [0..20]
										repetir = 0
										a = _.random(0,window.PAO.length-1)
										b = _.random(0,window.PAO.length-1)
										c = _.random(0,window.PAO.length-1)

										@PAO[z][0] = a 
										@PAO[z][1] = b
										@PAO[z][2] = c

										arrayAux[xx] = """#{window.PAO[a][0]} #{window.PAO[b][1]} #{window.PAO[c][2]}""" 

									auxD = []
									auxD = arrayAux
									auxD.sort( => return 0.5 - Math.random() )
									auxD = _.first(auxD,20)
									memoMixArray[randomMix] = []
									memoMixArray[randomMix] = auxD
							when 3
								@mixTiempos[zzz] = $("#tm#{randomMix}").val()

								if typeof(memoMixArray[randomMix]) == "undefined"
									auxD = []
									auxD = window.numeros
									auxD.sort( => return 0.5 - Math.random() )
									auxD = _.first(auxD,20)

									memoMixArray[randomMix] = []
									memoMixArray[randomMix] =  auxD

							when 4
								@mixTiempos[zzz] = $("#tm#{randomMix}").val()

								if typeof(memoMixArray[randomMix]) == "undefined"
									memoMixArray[randomMix] = []
									memoMixArray[randomMix] =  window.figuras

							when 5

								@mixTiempos[zzz] = $("#tm#{randomMix}").val()

								if typeof(memoMixArray[randomMix]) == "undefined"
									

									matrices = []
									dimension = parseInt($("#dimensionMatriz").val())

									for xx in [0..cantidad+20]
										
										if dimension <= 1

											finBucle = 1

											if dimension == 1 
												finBucle = 3

											a = ""
											
											for yy in [0..finBucle]

												r = _.random(0,7)
												#console.log( "l:" + a + "") 

												if r == 0
													a += """<tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>"""
												if r == 1
													a += """<tr><td>&nbsp;</td><td>&nbsp;</td><td bgcolor="#0000FF">&nbsp;</td></tr>"""
												if r == 2
													a +=  """<tr><td>&nbsp;</td><td bgcolor="#0000FF">&nbsp;</td><td bgcolor="#0000FF">&nbsp;</td></tr>"""
												if r == 3
													a += """<tr><td bgcolor="#0000FF">&nbsp;</td><td bgcolor="#0000FF">&nbsp;</td><td bgcolor="#0000FF">&nbsp;</td></tr>"""
												if r == 4
													a += """<tr><td bgcolor="#0000FF">&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>"""
												if r == 5
													a += """<tr><td bgcolor="#0000FF">&nbsp;</td><td>&nbsp;</td><td bgcolor="#0000FF">&nbsp;</td></tr>"""
												if r == 6
													a +=  """<tr><td bgcolor="#0000FF">&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>"""
												if r == 7
													a +=  """<tr><td>&nbsp;</td><td bgcolor="#0000FF">&nbsp;</td><td>&nbsp;</td></tr>"""
											
										if dimension > 1	
											finBucle = 1

											if dimension == 3 
												finBucle = 3
											if dimension == 4
												finBucle = 4

											a = ""
											
											for yy in [0..finBucle]

												r = _.random(0,15)
												
												#console.log( "l:" + a + "") 

												if r == 0
													a += """<tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>""" #0000
												if r == 1
													a += """<tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td bgcolor="#0000FF">&nbsp;</td></tr>""" #0001
												if r == 2
													a +=  """<tr><td>&nbsp;</td><td>&nbsp;</td><td bgcolor="#0000FF">&nbsp;</td><td>&nbsp;</td></tr>""" #0010
												if r == 3
													a += """<tr><td>&nbsp;</td><td bgcolor="#0000FF">&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>""" #0100
												if r == 4
													a += """<tr><td bgcolor="#0000FF">&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>""" #1000
												if r == 5
													#0011
													a += """<tr><td>&nbsp;</td><td>&nbsp;</td><td bgcolor="#0000FF">&nbsp;</td><td bgcolor="#0000FF">&nbsp;</td></tr>"""
												if r == 6
													#0110
													a +=  """<tr><td>&nbsp;</td><td bgcolor="#0000FF">&nbsp;</td><td bgcolor="#0000FF">&nbsp;</td><td>&nbsp;</td></tr>"""
												if r == 7
													#1100
													a +=  """<tr><td bgcolor="#0000FF">&nbsp;</td><td bgcolor="#0000FF">&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>"""
												if r == 8
													#0111

													a +=  """<tr><td>&nbsp;</td><td bgcolor="#0000FF">&nbsp;</td><td bgcolor="#0000FF">&nbsp;</td><td bgcolor="#0000FF">&nbsp;</td></tr>"""
												if r == 9
													#1110
													a +=  """<tr><td bgcolor="#0000FF">&nbsp;</td><td bgcolor="#0000FF">&nbsp;</td><td bgcolor="#0000FF">&nbsp;</td><td>&nbsp;</td></tr>"""
												if r == 10
													#1111
													a +=  """<tr><td bgcolor="#0000FF">&nbsp;</td><td bgcolor="#0000FF">&nbsp;</td><td bgcolor="#0000FF">&nbsp;</td><td bgcolor="#0000FF">&nbsp;</td></tr>"""
												if r == 11
													#0101
													a +=  """<tr><td>&nbsp;</td><td bgcolor="#0000FF">&nbsp;</td><td>&nbsp;</td><td bgcolor="#0000FF">&nbsp;</td></tr>"""
												if r == 12
													#1010
													a +=  """<tr><td bgcolor="#0000FF">&nbsp;</td><td>&nbsp;</td><td bgcolor="#0000FF">&nbsp;</td><td>&nbsp;</td></tr>"""
												if r == 13
													#1001
													a +=  """<tr><td bgcolor="#0000FF">&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td bgcolor="#0000FF">&nbsp;</td></tr>"""
												if r == 14
													#1011
													a +=  """<tr><td bgcolor="#0000FF">&nbsp;</td><td>&nbsp;</td><td bgcolor="#0000FF">&nbsp;</td><td bgcolor="#0000FF">&nbsp;</td></tr>"""
												if r == 15
													#1101
													a +=  """<tr><td bgcolor="#0000FF">&nbsp;</td><td bgcolor="#0000FF">&nbsp;</td><td>&nbsp;</td><td bgcolor="#0000FF">&nbsp;</td></tr>"""


										matrices[xx] = """<table border="1" style="border-collapse: collapse; border: 1px solid black;">#{a}</table>"""


									memoMixArray[randomMix] = []
							
									memoMixArray[randomMix] = matrices

							when 6
								@mixTiempos[zzz] = $("#tm#{randomMix}").val()

								if typeof(memoMixArray[randomMix]) == "undefined"
									matrizCarasImagen = []
									nombresHombre = window.nombresHombre
									nombresMujer = window.nombresMujer

									nombresHombre.sort( => return 0.5 - Math.random() )
									nombresMujer.sort( => return 0.5 - Math.random() )

									yy = 0
									jj = 0
									kk = 0
									
									for xx in [1..100] 
										if yy == 241
											yy = 0


										if jj == 271
											jj = 0
										

										ceros = ""

										if xx < 10
											ceros = "000"
										else if xx < 100
											ceros = "00"
										else if xx < 1000
											ceros = "0"
										
										matrizCarasImagen[kk] = """<div><img src="/caras/1-#{ceros}#{xx}.jpg" width="100px" height="100px"><br>#{nombresHombre[yy]}</div>"""
										matrizCarasImagen[kk+1] = """<div><img src="/caras/2-#{ceros}#{xx}.jpg" width="100px" height="100px"><br>#{nombresMujer[jj]}</div>"""

										yy++; jj++; kk += 2;

									matrizCarasImagen.sort( => return 0.5 - Math.random() )

									memoMixArray[randomMix] = []
									memoMixArray[randomMix] =  matrizCarasImagen

							when 7
								@mixTiempos[zzz] = $("#tm#{randomMix}").val()

								if typeof(memoMixArray[randomMix]) == "undefined"

									matrizAbstractas = []
									for xx in [1..200] 
										matrizAbstractas[xx-1] =  """<img src="/abstractas/image-#{xx}.png">"""

									memoMixArray[randomMix] = []
									memoMixArray[randomMix] = matrizAbstractas

							when 8
								@mixTiempos[zzz] = $("#tm#{randomMix}").val()

								if typeof(memoMixArray[randomMix]) == "undefined"
									matrizFechas = []

									for xx in [0..100] 

										myDate = @randomDate( new Date(1000, 0, 1), new Date(2099, 0, 1))
							
										month = myDate.getMonth()
										fullYear = myDate.getFullYear()
										day = myDate.getDay()
										date = myDate.getDate()
										year = myDate.getYear()

										matrizFechas[xx] = "<h3>#{date} - #{window.MONTH[month][1]} - #{fullYear}</h3>"

									memoMixArray[randomMix] = []
									memoMixArray[randomMix] =  matrizFechas

							when 9
								@mixTiempos[zzz] = $("#tm#{randomMix}").val()

								if typeof(memoMixArray[randomMix]) == "undefined"
									memoMixArray[randomMix] = []
									memoMixArray[randomMix] =  window.paises

							when 10
								@mixTiempos[zzz] = $("#tm#{randomMix}").val()

								if typeof(memoMixArray[randomMix]) == "undefined"

									str = $("#simbolitos").html()
									res = str.split(" ");

									memoMixArray[randomMix] = []
									memoMixArray[randomMix] =  res

							when 11
								@mixTiempos[zzz] = $("#tm#{randomMix}").val()

								if typeof(memoMixArray[randomMix]) == "undefined"

									str = $("#palabras1").html()
									res = str.split(" ");

									memoMixArray[randomMix] = []
									memoMixArray[randomMix] =  res


						rnd = _.random(0,memoMixArray[randomMix].length-1)

						@memoriaM2[zzz] = memoMixArray[randomMix][rnd]
						memoMixArray[randomMix] = _.without(memoMixArray[randomMix], @memoriaM2[zzz])

						#console.log(memoMixArray[randomMix].length)		

			if @ejercicioSeleccionadoMemoria != 12
				@memoriaM2.sort( => return 0.5 - Math.random() )

				@memoriaM2Elegidas = _.first(@memoriaM2,cantidad)

				noEsta = []
				noEsta = _.difference(@memoriaM2, @memoriaM2Elegidas)
				@noEsta1 = noEsta[_.random(0,noEsta.length-1)]
			else
				@memoriaM2Elegidas = _.first(@memoriaM2,cantidad)
				@noEsta1 = @memoriaM2[cantidad]


			poner = ""

			#preload
			if @ejercicioSeleccionadoMemoria == 1 or @ejercicioSeleccionadoMemoria == 4 or @ejercicioSeleccionadoMemoria == 6  or @ejercicioSeleccionadoMemoria == 7
				for xx in [0..@memoriaM2Elegidas.length-1] 
					poner += """#{@memoriaM2Elegidas[xx]}"""

				poner += """#{@noEsta1}"""

				$("#preload").html(poner)
				$("#preload").css("zoom","0.1")
				

			$("#screen").html("<center><h4>#{@segundos}</h4></center>")

			@tiempo2()

			setTimeout ( =>

					@memoria2()		
					
					
					), parseInt(parseInt($("#tiempoPreparacion").val())) * 1000 + 100

			@memoriaJugadas++

			return

			#console.log(@memoriaM2Elegidas)
		cantidad = @cantidad1

		if @memoriaJugadas < cantidad 


			if @entrarMemoria == 0
				@memoriaJugadas = 0
				@entrarMemoria = 1

				clearInterval(@killTimeout6)
				$("#screen").html("")
			
			#configura tiempo 

			if @ejercicioSeleccionado == 12

				if not $("#constantMixTime").is(':checked') 

					@tiempoEjercicioInicial = parseInt(@mixTiempos[@memoriaJugadas])
					@tiempoEjercicios[7][0] = @tiempoEjercicioInicial
					#console.log("t" +  @memoriaJugadas+ ":"+@tiempoEjercicioInicial + "|" + @memoriaM2Elegidas[@memoriaJugadas])

			if not @constantTime
				if @memoriaJugadas == 3 
					@tiempoEjercicios[7][0] = @tiempoEjercicioInicial * 0.8

				if @memoriaJugadas == 6 
					@tiempoEjercicios[7][0] = @tiempoEjercicioInicial * 0.6

				if @memoriaJugadas == 9
					@tiempoEjercicios[7][0] = @tiempoEjercicioInicial * 0.4

				if @memoriaJugadas == 12  
					@tiempoEjercicios[7][0] = @tiempoEjercicioInicial * 0.2
			
			#console.log("e:#{@ejercicioSeleccionadoMemoria}|j:#{@memoriaJugadas}|t:#{@tiempoEjercicios[7][0]}")

			botonSiguiente = ""
			if $("#noTime").is(':checked')
				botonSiguiente = """<input type="button" name="next" value="next" id="nextMemoObjectBtn">"""

			$("#screen").html("""
				<center><b>#{@countMemoria2}</b></center>

				<div style="zoom: 1.5;"><center><h1>#{@memoriaM2Elegidas[@memoriaJugadas]}</h1></center></div><br>

				<center>#{botonSiguiente}</center>

				""")

			$(".table-memo td").css("width","15px")
			$(".table-memo td").css("height","15px")

			@memoriaJugadas++
			@countMemoria2++

			if $("#noTime").is(':checked')


				$("#nextMemoObjectBtn").click =>
					@memoria2()

				return

			else 

				@killTimeout = setTimeout ( =>

						$("#screen").html("");
						console.log("pausa 200ms")

						@killTimeout = setTimeout ( =>

							@memoria2()		
						
						
							), 200
			
						), @tiempoEjercicios[7][0]
		else
			$("noTimeModeDiv").hide()

			if $("#fastMode1").is(':checked') 


				esta = []
				esta = @memoriaM2Elegidas[_.random(0,@memoriaM2Elegidas.length-1)]
		
				noEsta = @noEsta1

				#0 no esta, 1 esta
				busca = _.random(0,1)
				figura = ""
				css = ""
				css1 = ""

				if busca
					#esta
					figura = "<div id=\"myUp\" class=\"circle\">"
					css = "background"
					css1 = "#{@alfabeto[_.random(0,25)][1]}"
					@resultado = true
					
				else
					#no esta

					figura = "<div id=\"myUp\" class=\"up\">"
					css = "border-color" 
					css1 = "transparent transparent #{@alfabeto[_.random(0,25)][1]} transparent"
					@resultado = false

				lado = _.random(0,1)

				if lado
					izq = noEsta
					der = esta

					if busca
						@resultado = false
						
					else
						@resultado = true
					
				else
					izq = esta
					der = noEsta

					if busca
						@resultado = true
					else
						@resultado = false
					
				zoomFigure = 1
				if @esMobil
					zoomFigure = 0.5


				$("#screen").html("""
						<center>			
							<table>
								<tr><td>
									<div><h4>#{izq}</h4></div>
									</td>
									<td>
										<div style="zoom: #{zoomFigure};"><div>#{figura}</div></div>
									</td>
									<td>
										<div><h4>#{der}</h4></div>
									</td>
								</tr>
							</table>
						</center>



					""")

				$("#myUp").css(css,css1)
				@t_ini = Date.now()
				@pausa = 0

				@killTimeout1 = setTimeout ( =>
									
									@checkPosicion(3)


									), @tiempoEjercicios[7][1]

			#Modo lento	
			else

				possible = "BCDFGHJKLMNPQRSTVWXYZ"
				possible1 = "AEIOU"


				@nombreRandom = possible.charAt( _.random(0,possible.length-1) ) + possible1.charAt( _.random(0,possible1.length-1) ) + possible.charAt( _.random(0,possible.length-1) )  

				@pausa = 0
				@estado = 1

				@resultado = true

				memoriaM2Mezcladas = _.first(@memoriaM2Elegidas,@memoriaM2Elegidas.length)
				memoriaM2Mezcladas.sort( => return 0.5 - Math.random() )

				console.log(@memoriaM2Elegidas)
				console.log(memoriaM2Mezcladas)

				a = ""
				salida = """<div>"""
				for i in [0..@memoriaM2Elegidas.length-1]
					#a += """<option value="#{i}">#{@memoriaM2Elegidas[i]}</option>"""

					salida += """<div  style="float:left;"><center><b>#{i+1}</b></center><br><div class="image-dropdown" >"""

					for j in [0..memoriaM2Mezcladas.length-1]

						for ii in [0..@memoriaM2Elegidas.length-1]
							#console.log(memoriaM2Mezcladas[j] + "|||" + @memoriaM2Elegidas[ii])
							if memoriaM2Mezcladas[j] == @memoriaM2Elegidas[ii]
								break


						if j == 0
							salida += """<input  type="radio" id="line#{i}_#{j}" name="#{@nombreRandom}_#{i}" value="#{ii}" checked="checked" style="zoom: 120%"><label>#{memoriaM2Mezcladas[j]}</label><br>"""

						else

							salida += """<input type="radio" id="line#{i}_#{j}" name="#{@nombreRandom}_#{i}" value="#{ii}"   style="zoom: 120%"><label>#{memoriaM2Mezcladas[j]}</label><br>"""

					salida += """</div></div>"""

			

					if i == 2 or i == 5 or i == 8 or i == 11 or i == 14 or i == 17 or i == 20 or i == 23
					
						salida += """<div style="clear:both"></div>"""

				salida += "</div>"

				#console.log(salida)


				$("#screen").html("""

					<center>		
					<div><input type="button" value="Check" id="chequear"></div>	
					 #{salida}
					</center>
					""")

				$("#chequear").click =>
					matriz = []

					for i in [0..@memoriaM2Elegidas.length-1]

						myVal = $("input[name=#{@nombreRandom}_#{i}]:checked").val()
						matriz[i] = myVal
						console.log(@cantidad1 + "|" + i + "|" + myVal)
						#console.log("input[name=#{@nombreRandom}_#{i}]:checked")

					for i in [0..matriz.length-1]
						if i != parseInt(matriz[i])
							@checkPosicion(false)
						
					@checkPosicion(true)
					#console.log($("input[type='radio'][name=line-style#{i}]:checked").val())

				@killTimeout1 = setTimeout ( =>
									
									@checkPosicion(3)


									), $("#tiempoRespuestaMemoria").val()

	wordToNumber : (x) ->
		
		if window.bWtoN
			return @wToN[x];
		else
			return x

  
	multiplicacion : () ->
		#console.log("multiplicacion")

		@pausa = 0
		imprimir = """<table border="1" width="400" style="border: 1px solid black; width: 400px;">"""
		@tMulti = []
		@tMultiFila = []
		@resultado1 = 0
		@cMulti = n("cifrasMultiplicacion");

		goFocusCheckbox = 0

		@wToN = _.shuffle(window.palabras)

		ponerWToN = """<div id="listWords" > """

		for i in [0..9] 
			ponerWToN += "<br> " + i + " " + @wToN[i]

		ponerWToN += """"</div> <br> <a href="#" onclick="element='#listWords'; if($(element).is(':visible')){  $(element).hide();  }else{ $(element).show(); } ">hide/show</a> <br> """

		#console.log(@cMulti)

	
		if @cMulti > 10 and not $("#multiSinestesia").is(':checked')
			imprimir += "<tr>" 

			for i in [0..@cMulti*2-1] 
				imprimir += "<td><center>" + (  @cMulti*2 - i) + "</center></td>"

			imprimir += "</tr>" 
			

		for x in [0..2]
			imprimir += "<tr>" 
			@tMulti[x] = []
			@tMultiFila[x] = ""

			for i in [0..@cMulti*2-1] 

				if i > @cMulti-1 and x > 0
					rnd = _.random(1,9)
					
					@tMulti[x][i] = rnd

					@tMultiFila[x] += rnd.toString()

					imprimir += """<td class="columna#{i} num#{@tMulti[x][i]} myColumna"><center>#{@wordToNumber(@tMulti[x][i])}</center></td> """
				else 
					signoImprimir = ""
					if x == 2 and i == 0 
						signoImprimir = "x"
					if x == 0 and  i > @cMulti-1
						signoImprimir = """<input type="checkbox" onclick="$('#campo#{goFocusCheckbox}').focus();"> """
						goFocusCheckbox++

					imprimir += """<td class="columna#{i}"><center>#{signoImprimir}</center></td> """


			imprimir += "</tr>"

			#console.log(@tMultiFila[x])

		_r1 = BigInteger( @tMultiFila[1] )
		_r2 = BigInteger( @tMultiFila[2] )

		console.log("tMultiFila")
		console.log(@tMultiFila[1])
		console.log(@tMultiFila[2])
		
		@resultado1 = BigInteger(_r1).multiply(_r2)
		console.log(@resultado1.toString())

		@_tR = @tMultiFila[1] + "*" + @tMultiFila[2]

		if @resultado1.toString().length != @cMulti*2 
			@multiplicacion()
			console.log("incorrect length")
			return 
		
		#myL = ( @resultado1 + "" ).length

		#console.log(myL)

		#if myL != @cMulti * 2
		#	@resultado1 = "0" + @resultado1

		#console.log(myL)


		imprimir += "<tr>"

		for x in [0..@cMulti*2-1]
			imprimir += """<td class="columna#{i}"><input type="number" value="" id="campo#{x}" style="width: 38px;  text-align: center;"></td>"""

		imprimir += "</tr>"

		
		imprimir += "</table>"


		sinestesiaHtml = ""

		if $("#multiSinestesia").is(':checked')
			sinestesiaHtml = """
			<center><div id="output1">
			<span class="num0-1" style="color: rgb(0,0,180)"><b>0</b></span>
			<span class="num1-1" style="color: rgb(175,13,102)"><b>1</b></span>
			<span class="num2-1" style="color: rgb(146,248,70)"><b>2</b></span>
			<span class="num3-1" style="color: rgb(255,200,47)"><b>3</b></span>
			<span class="num4-1" style="color: rgb(255,118,0)"><b>4</b></span>
			<span class="num5-1" style="color: rgb(255,152,213)"><b>5</b></span>
			<span class="num6-1" style="color: rgb(235,235,222)"><b>6</b></span>
			<span class="num7-1" style="color: rgb(100,100,100)"><b>7</b></span>
			<span class="num8-1" style="color: rgb(255,255,0)"><b>8</b></span>
			<span class="num9-1" style="color: rgb(255,255,150)"><b>9</b></span>			
			</div></center>
			<a href="#cm2" onclick="$('#div-configurar').show();">[customColors]</a>
			<br>

		"""

		if !window.bWtoN then ponerWToN="" 


		$("#screen").html("""
					#{sinestesiaHtml}

					<center>
						#{ponerWToN}
						<div id="multiplicacionScreen">#{imprimir}</div>
						<br>
						<input type="button" value="enter" id="enterMulti">

					</center>
					

					""")
		

		@t_ini = Date.now()

		if @cMulti > 10

			$("#multiplicacionScreen").css("zoom","0.8")


		$(".columna#{@cMulti*2-1}").css("background-color","rgb(235,235,222)")
		$("#campo#{@cMulti*2-1}").css("background-color","rgb(235,235,222)")

		$("#campo#{@cMulti*2-1}").focus()

		$("#enterMulti").click =>
	
			myResult = ""

			for i in [0..@cMulti*2-1] 
				myResult += $("#campo#{i}").val()

			console.log(">" + myResult)

			myL = (myResult+"").length

			if myL!=@cMulti*2
				myResult = "0"+myResult


			@resultadosList = @_tR + " = " + myResult + "(su valor)" + " la respuesta es " + ( if @resultado1.compare(myResult) == 0 then "correcta" else " en realidad <br> =" + @resultado1.toString() ) + "<br>" + @resultadosList
			localStorage.setItem("reultadosListLocalStorage", @resultadosList);

			if @resultado1.compare(myResult) == 0

				@checkPosicion(true)
			else

				@checkPosicion(false)

		for x in [0..@cMulti*2-1]

			eval (""" 
				$("#campo#{x}").click(function() {
					
					for(j=0;j<#{@cMulti*2};j++){

						if( ! $("#multiSinestesia").is(':checked') ){
							$(".columna"+j).css("background-color","white");
							$("#campo"+j).css("background-color","white");
						}
						

					}
					if( ! $("#multiSinestesia").is(':checked') ){
						if( n("memoTime") > 0)
							return;
				 		$(".columna#{x}").css("background-color","rgb(235,235,222)");
				 		$("#campo#{x}").css("background-color","rgb(235,235,222)");
				 	}
				 	

				});

			""")

			eval("""

				$("#campo#{x}").change(function() {

					 myStr = "#{@resultado1.toString()}";
					 //myStr.substring(#{x}, #{x+1});
					 console.log(myStr);

					if( parseInt($('#campo#{x}').val()) != parseInt(myStr.substring(#{x}, #{x+1})) ){
						//alert($('#campo#{x}').val() + "|" + myStr.substring(#{x}, #{x+1}));
						//alert($("#campo#{x}").val());
						$("#campo#{x}").css("background-color","red");
						$('#campo#{x}').focus();
						$('#campo#{x}').val("");

						setTimeout(function(){
								if(#{x}>0){
									
									$("#campo#{x-1}").css("background-color","white");
								
									if( ! $("#multiSinestesia").is(':checked') ){
										$(".columna#{x-1}").css("background-color","white");
										
										if( n("memoTime") > 0)
											return;
										$(".columna#{x}").css("background-color","rgb(235,235,222)");
										

									}
								

								}
								
							},1);
					

					}else{


						if (#{x}!=0 ){
						

							for(j=0;j<#{@cMulti*2};j++){

								if( ! $("#multiSinestesia").is(':checked') ){
									$(".columna"+j).css("background-color","white");
									$("#campo"+j).css("background-color","white");
								}

							}

							$('#campo#{x-1}').focus();

							if( ! $("#multiSinestesia").is(':checked') ){
								if( n("memoTime") > 0)
									return;
								$(".columna#{x-1}").css("background-color","rgb(235,235,222)");
							 	$("#campo#{x-1}").css("background-color","rgb(235,235,222)");
							}

						}else{

							myResult = "";

							for(j=0;j<#{@cMulti*2};j++){
								myResult += $("#campo"+j).val();

							}

							if(parseInt(myResult) == parseInt(#{@resultado1.toString()})){
								window.juegoReaction.checkPosicion(true);
							}else{
								window.juegoReaction.checkPosicion(false);
							}

						}
						if( $("#multiSinestesia").is(':checked') ){
							myCampoVal=parseInt($('#campo#{x}').val());
							
							//arrCol=["rgb(0,0,180)","rgb(175,13,102)","rgb(146,248,70)","rgb(255,200,47)","rgb(255,118,0)","rgb(255,152,213)","rgb(235,235,222)","rgb(100,100,100)","rgb(255,255,0)","rgb(255,255,150)"];

							$("#campo#{x}").css("background-color",arrCol[myCampoVal]);
							$("#campo#{x}").css("color",arrCol[myCampoVal]);


						}

						
					}


				  
				});

				$("#campo#{x}").keypress(function(event) {
					if ( event.which == 13 ) {
						myResult = "";

						for(j=0;j<#{@cMulti*2};j++){
							myResult += $("#campo"+j).val();

						}

						window.juegoReaction.resultadosList = window.juegoReaction._tR + " = " + myResult + "(su valor)" + " la respuesta es " + (  ( BigInteger("#{@resultado1.toString()}").compare(myResult) == 0 ) ? "correcta" : " en realidad <br> =" + window.juegoReaction.resultado1.toString() ) + "<br>" + window.juegoReaction.resultadosList;
						localStorage.setItem("reultadosListLocalStorage", window.juegoReaction.resultadosList);

						if( BigInteger("#{@resultado1.toString()}").compare(myResult) == 0 ){
							window.juegoReaction.checkPosicion(true);


						}else{
							window.juegoReaction.checkPosicion(false);
	

						}
					    
					 }
					  //alert(event.wich || event.keyCode);

					  

					  		/*

					 myStr = "#{@resultado1.toString()}";
					 //myStr.substring(#{x}, #{x+1});

					if( parseInt($('#campo#{x}').val()) != parseInt(myStr.substring(#{x}, #{x+1})) ){
						//alert($('#campo#{x}').val() + "|" + myStr.substring(#{x}, #{x+1}));
						alert($("#campo#{x}").val());

					}

						*/

					if (#{x}!=0 ){
						

						for(j=0;j<#{@cMulti*2};j++){
							if( ! $("#multiSinestesia").is(':checked') ){
								$(".columna"+j).css("background-color","white");
								$("#campo"+j).css("background-color","white");
							}
							

						}

						$('#campo#{x-1}').focus();
						if( ! $("#multiSinestesia").is(':checked') ){
							if( n("memoTime") > 0)
								return;
							$(".columna#{x-1}").css("background-color","rgb(235,235,222)");
							$("#campo#{x-1}").css("background-color","rgb(235,235,222)");
						}
					 

					}
				  
				});
			""")
		
		if $("#multiSinestesia").is(':checked')
		
			eval("""

					$(".num0-1").css("color",arrCol[0]);

					$(".num1").css("background-color",arrCol[1]);
			 		$(".num1").css("color",arrCol[1]);
			 		$(".num1-1").css("color",arrCol[1]);

			 		$(".num2").css("background-color",arrCol[2]);
			 		$(".num2").css("color",arrCol[2]);
			 		$(".num2-1").css("color",arrCol[2]);

			 		$(".num3").css("background-color",arrCol[3]);
			 		$(".num3").css("color",arrCol[3]);
			 		$(".num3-1").css("color",arrCol[3]);

			 		$(".num4").css("background-color",arrCol[4]);
			 		$(".num4").css("color",arrCol[4]);
			 		$(".num4-1").css("color",arrCol[4]);

			 		$(".num5").css("background-color",arrCol[5]);
			 		$(".num5").css("color",arrCol[5]);
			 		$(".num5-1").css("color",arrCol[5]);

			 		$(".num6").css("background-color",arrCol[6]);
			 		$(".num6").css("color",arrCol[6]);
			 		$(".num6-1").css("color",arrCol[6]);

			 		$(".num7").css("background-color",arrCol[7]);
			 		$(".num7").css("color",arrCol[7]);
			 		$(".num7-1").css("color",arrCol[7]);

			 		$(".num8").css("background-color",arrCol[8]);
			 		$(".num8").css("color",arrCol[8]);
			 		$(".num8-1").css("color",arrCol[8]);

			 		$(".num9").css("background-color",arrCol[9]);
			 		$(".num9").css("color",arrCol[9]);
			 		$(".num9-1").css("color",arrCol[9]);
			 		
			 		/*		
			 		$(".num1").css("background-color","rgb(175,13,102)");
			 		$(".num1").css("color","rgb(175,13,102)");

			 		$(".num2").css("background-color","rgb(146,248,70)");
			 		$(".num2").css("color","rgb(146,248,70)");

			 		$(".num3").css("background-color","rgb(255,200,47)");
			 		$(".num3").css("color","rgb(255,200,47)");

			 		$(".num4").css("background-color","rgb(255,118,0)");
			 		$(".num4").css("color","rgb(255,118,0)");

			 		$(".num5").css("background-color","rgb(255,152,213)");
			 		$(".num5").css("color","rgb(255,152,213)");

			 		$(".num6").css("background-color","rgb(235,235,222)");
			 		$(".num6").css("color","rgb(235,235,222)");

			 		$(".num7").css("background-color","rgb(100,100,100)");
			 		$(".num7").css("color","rgb(100,100,100)");

			 		$(".num8").css("background-color","rgb(255,255,0)");
			 		$(".num8").css("color","rgb(255,255,0)");

			 		$(".num9").css("background-color","rgb(255,255,150)");
			 		$(".num9").css("color","rgb(255,255,150)");
			 		*/

				""")

		if n("memoTime") > 0
			@killTimeout = setTimeout ( =>
					
					eval("""

						$(".myColumna").css("background-color","white");
					 	$(".myColumna").css("color","white");

					""")

					), n("memoTime")
			


		@resultado = true

		#oculto la pregunta
		@killTimeout = setTimeout ( =>
					
					$("#screen").html("<h4>&nbsp;</h4>")

					@killTimeout1 = setTimeout ( =>
					
								@checkPosicion(3)

								), @tiempoEjercicios[18][1]

					), @tiempoEjercicios[18][0]


	resta : () ->

		loop

			@pausa = 0
		
			@tMulti = []
			@tMultiFila = []
			@resultado1 = 0
			@cMulti = 8

			goFocusCheckbox = 0

			#console.log(@cMulti)

			imprimir = """<table border="1" width="400" style="border: 1px solid black; width: 400px;">"""

			for x in [0..2]
				imprimir += "<tr>" 
				@tMulti[x] = []
				@tMultiFila[x] = ""

				for i in [0..@cMulti*2-1] 

					if i > @cMulti-1 and x > 0
						rnd = _.random(1,9)
						
						@tMulti[x][i] = rnd

						@tMultiFila[x] += rnd.toString()

						imprimir += """<td class="columna#{i}"><center>#{@tMulti[x][i]}</center></td> """
					else 
						signoImprimir = ""
						if x == 2 and i == 0 
							signoImprimir = "-"
						if x == 0 and  i > @cMulti-1
							signoImprimir = """<input type="checkbox" onclick="$('#campo#{goFocusCheckbox}').focus();"> """
							goFocusCheckbox++

						imprimir += """<td class="columna#{i}"><center>#{signoImprimir}</center></td> """


				imprimir += "</tr>"

				#console.log(@tMultiFila[x])

			console.log(@tMultiFila[1]+"-"+@tMultiFila[2])
			@resultado1 = parseInt(@tMultiFila[1]) - parseInt(@tMultiFila[2])

			@_tR = "<br><br>" + @tMultiFila[1] + "-" + @tMultiFila[2] + "<br>"
			
			if(@resultado1>0)
				break;

		myL=(@resultado1+"").length

		#console.log(myL)

		#if myL!=@cMulti*2
		#	@resultado1 = "0"+@resultado1

		#console.log(myL)
		console.log(@resultado1)

		imprimir += "<tr>"

		for x in [0..@cMulti*2-1]
			imprimir += """<td class="columna#{i}"><input type="number" value="" id="campo#{x}" style="width: 38px;  text-align: center;"></td>"""

		imprimir += "</tr>"

		
		imprimir += "</table>"

		$("#screen").html("""

					<center>
						#{imprimir}
						<br>
						<input type="button" value="enter" id="enterMulti">

					</center>
					

					""")
		

		@t_ini = Date.now()

		$(".columna#{@cMulti*2-1}").css("background-color","rgb(235,235,222)")
		$("#campo#{@cMulti*2-1}").css("background-color","rgb(235,235,222)")

		$("#campo#{@cMulti*2-1}").focus()

		$("#enterMulti").click =>
	
			myResult = ""

			for i in [0..@cMulti*2-1] 
				myResult += $("#campo#{i}").val()

			console.log(">" + myResult)

			#myL = (myResult+"").length

			#if myL!=@cMulti*2
			#	myResult = "0"+myResult

			@resultadosList = @_tR + " = " + myResult + "(su valor)" + " la respuesta es " + ( if parseInt(myResult) == parseInt(@resultado1) or -parseInt(myResult) == parseInt(@resultado1) then "correcta" else " en realidad <br> =" + @resultado1 ) + "<br>" + @resultadosList
			localStorage.setItem("reultadosListLocalStorage", @resultadosList);

			if parseInt(myResult) == parseInt(@resultado1) or -parseInt(myResult) == parseInt(@resultado1)

				@checkPosicion(true)
			else

				@checkPosicion(false)

		for x in [0..@cMulti*2-1]

			eval (""" 
				$("#campo#{x}").click(function() {
					
					for(j=0;j<#{@cMulti*2};j++){
						$(".columna"+j).css("background-color","white");
						$("#campo"+j).css("background-color","white");

					}
				 	$(".columna#{x}").css("background-color","rgb(235,235,222)");
				 	$("#campo#{x}").css("background-color","rgb(235,235,222)");
				});

			""")

			eval("""

				$("#campo#{x}").change(function() {

					/*

					 myStr = "#{@resultado1}";
					 //myStr.substring(#{x}, #{x+1});

					if( parseInt($('#campo#{x}').val()) != parseInt(myStr.substring(#{x}, #{x+1})) ){
						//alert($('#campo#{x}').val() + "|" + myStr.substring(#{x}, #{x+1}));
						//alert($("#campo#{x}").val());
						$("#campo#{x}").css("background-color","red");
						$('#campo#{x}').focus();
						$('#campo#{x}').val("");

					}else{

						

						if (#{x}!=0 ){
						

							for(j=0;j<#{@cMulti*2};j++){
								$(".columna"+j).css("background-color","white");
								$("#campo"+j).css("background-color","white");

							}

							$('#campo#{x-1}').focus();
							$(".columna#{x-1}").css("background-color","rgb(235,235,222)");
						 	$("#campo#{x-1}").css("background-color","rgb(235,235,222)");

						}else{

							myResult = "";

							for(j=0;j<#{@cMulti*2};j++){
								myResult += $("#campo"+j).val();

							}

							if(parseInt(myResult) == #{@resultado1}){
								window.juegoReaction.checkPosicion(true);


							}else{
								window.juegoReaction.checkPosicion(false);
		

							}


						}

						
					}*/
				  
				});

				$("#campo#{x}").keypress(function(event) {
					if ( event.which == 13 ) {
						myResult = "";

						for(j=0;j<#{@cMulti*2};j++){
							myResult += $("#campo"+j).val();

						}

						window.juegoReaction.resultadosList = window.juegoReaction._tR + " = " + myResult + "(su valor)" + " la respuesta es " + ( (parseInt(myResult) == parseInt("#{@resultado1}") || -parseInt(myResult) == parseInt("#{@resultado1}")) ? "correcta" : " en realidad <br> =" + window.juegoReaction.resultado1 ) + "<br>" + window.juegoReaction.resultadosList;
						localStorage.setItem("reultadosListLocalStorage", window.juegoReaction.resultadosList);

						if(parseInt(myResult) == parseInt("#{@resultado1}") || -parseInt(myResult) == parseInt("#{@resultado1}")){
							window.juegoReaction.checkPosicion(true);


						}else{
							window.juegoReaction.checkPosicion(false);
	

						}
					    
					 }
					  //alert(event.wich || event.keyCode);

					  

					  		/*

					 myStr = "#{@resultado1}";
					 //myStr.substring(#{x}, #{x+1});

					if( parseInt($('#campo#{x}').val()) != parseInt(myStr.substring(#{x}, #{x+1})) ){
						//alert($('#campo#{x}').val() + "|" + myStr.substring(#{x}, #{x+1}));
						alert($("#campo#{x}").val());

					}

						*/

					if (#{x}!=0 ){
						

						for(j=0;j<#{@cMulti*2};j++){
							$(".columna"+j).css("background-color","white");
							$("#campo"+j).css("background-color","white");

						}

						$('#campo#{x-1}').focus();
						$(".columna#{x-1}").css("background-color","rgb(235,235,222)");
					 	$("#campo#{x-1}").css("background-color","rgb(235,235,222)");

					}
				  
				});
			""")

		@resultado = true

		#oculto la pregunta
		@killTimeout = setTimeout ( =>
					
					$("#screen").html("<h4>&nbsp;</h4>")

					@killTimeout1 = setTimeout ( =>
					
								@checkPosicion(3)

								), @tiempoEjercicios[18][1]

					), @tiempoEjercicios[18][0]


	suma100 : () ->
		@pausa = 0
		imprimir = """<table border="1" width="400" style="border: 1px solid black; width: 400px;" id="operation-table">"""
		@tSuma = []
		@tSumaFila = []
		@resultado1 = 0
		totalSuma = 0

		for x in [0..9]
			imprimir += "<tr>" 
			@tSuma[x] = []
			@tSumaFila[x] = ""

			for i in [0..9] 

				rnd = _.random(1,9)
				totalSuma += rnd
				
				@tSuma[x][i] = rnd

				@tSumaFila[x] += rnd.toString()

				imprimir += """<td class="columna#{i}"><center>#{@tSuma[x][i]}</center></td> """
				

			imprimir += "</tr>"

			#console.log(@tSumaFila[x])
		
		@resultado1 = totalSuma

		console.log(@resultado1)

		imprimir += "<tr>"

		imprimir += """<td class="columna#{i}" colspan="10"><center><input type="number" value="" id="resultadoSuma" style="width: 38px;  text-align: center;"></center></td>"""
	
		imprimir += "</tr>"

		
		imprimir += "</table>"

		$("#screen").html("""

					<center>
						#{imprimir}
						<br>
						<input type="button" value="enter" id="enterSuma">

					</center>
					

					""")

		if @esMobil
			$('#operation-table').css("zoom","80%")
			console.log("zoom table changed")
		

		@t_ini = Date.now()

		$(".columna10").css("background-color","rgb(235,235,222)")
		$("#campo10").css("background-color","rgb(235,235,222)")

		$('#campo10').focus()

		$("#enterSuma").click =>
	
			myResult = ""
			myResult = $("#resultadoSuma").val()

			console.log(">" + myResult)


			if parseInt(myResult) == @resultado1

				@checkPosicion(true)
			else

				@checkPosicion(false)

		

			

		eval("""

			$("#resultadoSuma").keypress(function(event) {
				if ( event.which == 13 ) {
					myResult = "";
	
					myResult += $("#resultadoSuma").val();

					if(parseInt(myResult) == #{@resultado1}){
						window.juegoReaction.checkPosicion(true);
					}else{
						window.juegoReaction.checkPosicion(false);
					}
				    
				 }
				  //alert(event.wich || event.keyCode);
			  
			});

			$('#resultadoSuma').focus();
		""")

		@resultado = true

		#oculto la pregunta
		@killTimeout = setTimeout ( =>
					
					$("#screen").html("<h4>&nbsp;</h4>")

					@killTimeout1 = setTimeout ( =>
					
								@checkPosicion(3)

								), @tiempoEjercicios[17][1]

					), @tiempoEjercicios[17][0]



	suma : () ->

		@pausa = 0
		imprimir = """<table border="1" width="400" style="border: 1px solid black; width: 400px;" id="operation-table">"""
		@tSuma = []
		@tSumaFila = []
		@resultado1 = 0

		@_tR = "<br>"

		for x in [0..9]
			imprimir += "<tr>" 
			@tSuma[x] = []
			@tSumaFila[x] = ""

			for i in [0..10] 

				if i != 0
					rnd = _.random(1,9)
					
					@tSuma[x][i] = rnd

					@tSumaFila[x] += rnd.toString()

					imprimir += """<td class="columna#{i}"><center>#{@tSuma[x][i]}</center></td> """
				else 
					signoImprimir = ""
					if x == 9
						signoImprimir = "+"

					imprimir += """<td class="columna#{i}"><center>#{signoImprimir}</center></td> """

			imprimir += "</tr>"

			#console.log(@tSumaFila[x])

			@_tR += "+" + parseInt(@tSumaFila[x]) + "<br>"

			@resultado1 += parseInt(@tSumaFila[x])

		console.log(@resultado1)
		@_tR1 = @resultado1

		imprimir += "<tr>"

		for x in [0..10]
			imprimir += """<td class="columna#{i}"><input type="number" value="" id="campo#{x}" style="width: 38px;  text-align: center;"></td>"""
	

		imprimir += "</tr>"

		
		imprimir += "</table>"

		$("#screen").html("""

					<center>
						#{imprimir}
						<br>
						<input type="button" value="enter" id="enterSuma">

					</center>
					

					""")

		if @esMobil
			$('#operation-table').css("zoom","80%")
			console.log("zoom table changed")
		

		@t_ini = Date.now()

		$(".columna10").css("background-color","rgb(235,235,222)")
		$("#campo10").css("background-color","rgb(235,235,222)")

		$('#campo10').focus()

		$("#enterSuma").click =>
	
			myResult = ""

			for i in [0..10] 
				myResult += $("#campo#{i}").val()

			console.log(">" + myResult)

			@resultadosList = @_tR + " = " + myResult + "(su valor)" + " la respuesta es " + ( if parseInt(myResult) == @resultado1 then "correcta" else " en realidad <br> =" + @resultado1 ) + "<br>" + @resultadosList
			localStorage.setItem("reultadosListLocalStorage", @resultadosList);

			if parseInt(myResult) == @resultado1

				@checkPosicion(true)
			else

				@checkPosicion(false)

		for x in [0..10]

			eval (""" 
				$("#campo#{x}").click(function() {
					
					for(j=0;j<11;j++){
						$(".columna"+j).css("background-color","white");
						$("#campo"+j).css("background-color","white");

					}
				 	$(".columna#{x}").css("background-color","rgb(235,235,222)");
				 	$("#campo#{x}").css("background-color","rgb(235,235,222)");
				});

			""")

			eval("""

				$("#campo#{x}").keypress(function(event) {
					if ( event.which == 13 ) {
						myResult = "";

						for(j=0;j<11;j++){
							myResult += $("#campo"+j).val();

						}


						window.juegoReaction.resultadosList = window.juegoReaction._tR + " = " + myResult + "(su valor)" + " la respuesta es " + ( parseInt(myResult) == window.juegoReaction.resultado1 ? "correcta" : " en realidad <br> =" + window.juegoReaction.resultado1 ) + "<br>" + window.juegoReaction.resultadosList;
						localStorage.setItem("reultadosListLocalStorage", window.juegoReaction.resultadosList);

						if(parseInt(myResult) == #{@resultado1}){
							window.juegoReaction.checkPosicion(true);


						}else{
							window.juegoReaction.checkPosicion(false);
	

						}
					    
					 }
					  //alert(event.wich || event.keyCode);

					if (#{x}!=0 ){
						

						for(j=0;j<11;j++){
							$(".columna"+j).css("background-color","white");
							$("#campo"+j).css("background-color","white");

						}
						setTimeout(function(){
							$('#campo#{x-1}').focus();
							$(".columna#{x-1}").css("background-color","rgb(235,235,222)");
					 		$("#campo#{x-1}").css("background-color","rgb(235,235,222)");


						},10); 
						

					}
				  
				});

			""")

		@resultado = true

		#oculto la pregunta
		@killTimeout = setTimeout ( =>
					
					$("#screen").html("<h4>&nbsp;</h4>")

					@killTimeout1 = setTimeout ( =>
					
								@checkPosicion(3)

								), @tiempoEjercicios[17][1]

					), @tiempoEjercicios[17][0]

	memoria : () ->

		@pausa = 0
		
		$("#pasadas").html(@totalPasadas - @jugadas)

		if @jugadas == 0
			@memoriaAnterior = _.random(0,@memoriaM.length-1)
			#console.log(@memoriaM.length)
			@tipo = 2
			@resultado = true

		@tipo = 0

		cambiar = _.random(0,1);

		if cambiar 
			rand =  _.random(0,@memoriaM.length-1)

			if rand == @memoriaAnterior

				@resultado = true
			else
				@memoriaAnterior = rand
				@resultado = false

		else

			@resultado = true


		width1 = 70
		height1 = 70

		if @esMovil
			width1 = 200
			height1 = 200
		
		mostrar = "<center><img src=\"#{@memoriaM[@memoriaAnterior]}\" width=\"#{width1}\" height=\"#{height1}\" class=\"myImage\"></center>"

		$("#screen").html(mostrar)
		@t_ini = Date.now()

	
		@killTimeout = setTimeout ( =>
				
				$("#screen").html("<h4>&nbsp;</h4>")

				@killTimeout1 = setTimeout ( =>
				
							if @ojosPasadas == 1
								@checkPosicion(@resultado)
							else
								@checkPosicion(3)

							), if @jugadas == 0 then 0 else @tiempoEjercicios[5][1]

				), @tiempoEjercicios[5][0]

	sinestesia : () ->
		$("#pasadas").html(@totalPasadas - @jugadas)

		@pausa = 0

		#si es el color o no

		modif = []
		for xx in [0..25]
			
			modif[xx] = []

			modif[xx][0] = "gif"
			modif[xx][1] = ""
			
			if xx == 0 then modif[xx][1] = _.random(1,4) 
			if xx == 4 then modif[xx][1] = _.random(1,4) 
			if xx == 9 then modif[xx][0] = "png" 
			if xx == 10 then modif[xx][0] = "png" 
			if xx == 13 then modif[xx][1] = _.random(1,4)
			if xx == 14 then modif[xx][1] = _.random(1,4)
			if xx == 17 then modif[xx][1] = _.random(1,4)
			if xx == 18 then modif[xx][1] = _.random(1,4)
			if xx == 22 then modif[xx][0] = "png" 
			if xx == 23 then modif[xx][0] = "png"
			if xx == 25 then modif[xx][0] = "png"


		tieneVerdadero = _.random(0,1); esVerdadero = _.random(0,1)

		$("#liveHelp").html(window.ayudaSinestesia)

		sinestesiaOpcion1 = parseInt($("#sinestesiaOpcion1").val())
		randomPonerFace = _.random(0,1)

		if parseInt($("#sinestesiaOpcion").val()) == 0
			tieneVerdadero = 1

		if parseInt($("#sinestesiaOpcion").val()) == 1
			tieneVerdadero = 0

		if esVerdadero

			colorLetra = "white"

			seleccion = _.random(0,25)


			if seleccion == 9 or seleccion == 16 or seleccion == 21 or seleccion == 6
				colorLetra = "black"

			ponerLetra = """ <p style="color:#{colorLetra};">#{@alfabeto[seleccion][0]}<p>"""

			if sinestesiaOpcion1 == 0 or sinestesiaOpcion1 == 2


				ponerCara = """<p style="color:#{colorLetra};"><img src="/emo/#{@alfabeto[seleccion][0].toLowerCase()}#{modif[seleccion][1]}.#{modif[seleccion][0]}" width="64px" height="64px" style="z-index: 9999;"" class="img-sin"><p>""" 

				if sinestesiaOpcion1 == 2 then ponerLetra = ponerCara
				if sinestesiaOpcion1 == 0 and _.random(0,1) then ponerLetra = ponerCara

			$("#screen").html("<center><div id=\"myUp2\" class=\"circle\">#{ponerLetra}</div></center>")
			$("#myUp2").css( "border-color", "transparent transparent #{@alfabeto[seleccion][1]} transparent" )
			$("#myUp2").css( "background", "#{@alfabeto[seleccion][1]}" );
			$(".img-sin").css( "margin-top", "90" );
			
			if tieneVerdadero
				$("#screen").html("<center><div id=\"myUp2\" class=\"circle\">#{ponerLetra}</div></center>")
				$("#myUp2").css( "border-color", "transparent transparent #{@alfabeto[seleccion][1]} transparent" )
				$("#myUp2").css( "background", "#{@alfabeto[seleccion][1]}" );
				$(".img-sin").css( "margin-top", "90" );
			
				@resultado = true

			else
				$("#screen").html("<center><div id=\"myUp\" class=\"up\">#{ponerLetra}</div></center>")
				$("#myUp").css( "border-color", "transparent transparent #{@alfabeto[seleccion][1]} transparent" );

				@resultado = false


		else
			colorLetra = "white"

			seleccion = _.random(0,25)
			loop
				seleccion2 = _.random(0,25) 
				if seleccion2 != seleccion
					break	



			ponerLetra = """ <p style="color:#{colorLetra};">#{@alfabeto[seleccion][0]}<p>"""

			if sinestesiaOpcion1 == 0 or sinestesiaOpcion1 == 2

				ponerCara = """<p style="color:#{colorLetra};"><img src="/emo/#{@alfabeto[seleccion][0].toLowerCase()}#{modif[seleccion][1]}.#{modif[seleccion][0]}" width="64px" height="64px" style="z-index: 9999;" class="img-sin"><p>""" 

				if sinestesiaOpcion1 == 2 then ponerLetra = ponerCara
				if sinestesiaOpcion1 == 0 and _.random(0,1) then ponerLetra = ponerCara


			if seleccion2 == 8 or seleccion2 == 9 or seleccion == 16 or seleccion == 21 or seleccion == 6
				colorLetra = "black"		
			
			if tieneVerdadero
				@resultado = false

				$("#screen").html("<center><div id=\"myUp2\" class=\"circle\">#{ponerLetra}</div></center>")
				$("#myUp2").css( "border-color", "transparent transparent #{@alfabeto[seleccion][1]} transparent" )
				$("#myUp2").css( "background", "#{@alfabeto[seleccion2][1]}" );
				$(".img-sin").css( "margin-top", "90" );
			

			else
				@resultado = true

				$("#screen").html("<center><div id=\"myUp\" class=\"up\">#{ponerLetra}</div></center>")
				$("#myUp").css( "border-color", "transparent transparent #{@alfabeto[seleccion2][1]} transparent" );

		#empiezo a calcular el tiempo de respuesta
		@t_ini = Date.now()

		#oculto la pregunta
		@killTimeout = setTimeout ( =>
					
					$("#screen").html("<h4>&nbsp;</h4>")

					@killTimeout1 = setTimeout ( =>
					
								@checkPosicion(3)

								), @tiempoEjercicios[4][1]

					), @tiempoEjercicios[4][0]


	binarios : () ->


		$("#pasadas").html(@totalPasadas - @jugadas)

		@tipo = 2
		@pausa = 0

		tam_x = $("#binX").val() 
		tam_y = $("#binY").val() 
		mBinarios = []
		@salida = ""

		for xx in [0..tam_x - 1]
			
			mBinarios[xx] = []

			for yy in [0..tam_y - 1]

				mBinarios[xx][yy] = _.random(0,1) 
				@salida += mBinarios[xx][yy]

			@salida += "<br>"

		$("#screen").html("<h1>" + @salida + "</h1>")

		@resultado = true

		#empiezo a calcular el tiempo de respuesta
		@t_ini = Date.now()

		
		#oculto la pregunta
		@killTimeout = setTimeout ( =>
					
					$("#screen").html("<h4>&nbsp;</h4>")

					@killTimeout1 = setTimeout ( =>

								#console.log(@jugadas)

								@checkPosicion(@resultado)

								), @tiempoEjercicios[3][1]

					), @tiempoEjercicios[3][0]


	periferica : () ->

		$("#pasadas").html(@totalPasadas - @jugadas)

		
		@pausa = 0

		#n1 = _.random(0,99) 
		#n2 = _.random(0,99)
		#n3 = _.random(0,99)
		#n4 = _.random(0,99)		    
		loop

			n1 = _.random(0,9) 
			n2 = _.random(0,9)
			n3 = _.random(0,9)
			n4 = _.random(0,9)	

			if n1 + n2 != n3 + n4
				break


		if n1 + n2 > n3 + n4
			@resultado = true
		else
			@resultado = false	


		#if n1 < 10 then n1 = "0" + n1
		#if n2 < 10 then n2 = "0" + n2
		#if n3 < 10 then n3 = "0" + n3
		#if n4 < 10 then n4 = "0" + n4

		periX = $("#periX").val() 
		periY = $("#periY").val()
		mostrarPeriY = ""

		for yy in [0..periY-1]
			mostrarPeriY += "<br>"


		espacios2 = "<span style=\"display: inline-block; width: #{periX}px;\">&nbsp;</span>"
		
		@salida = n1 + espacios2 + n2 + mostrarPeriY + n3 + espacios2 + n4

		$("#screen").html("<h1>" + @salida + "</h1>")

		#empiezo a calcular el tiempo de respuesta
		@t_ini = Date.now()

		#oculto la pregunta
		@killTimeout = setTimeout ( =>
					
					$("#screen").html("<h4>&nbsp;</h4>")

					@killTimeout1 = setTimeout ( =>

								#console.log(@jugadas)

								@checkPosicion(3)

								), @tiempoEjercicios[2][1]

					), @tiempoEjercicios[2][0]

	randomDate : (start, end) ->
		new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))

	leapYear : (year) ->
 		year % 4 == 0 and year % 100 != 0 or year % 400 == 0
			
	calendario : () ->	
		
		myDate = @randomDate( new Date(1900, 0, 1), new Date(2099, 0, 1))
		
		month = myDate.getMonth()
		fullYear = myDate.getFullYear()
		day = myDate.getDay()
		date = myDate.getDate()
		year = myDate.getYear()

		@resultado = true
		@pausa = 0

		bis = "no"
		if @leapYear(fullYear)
			bis = "si"

		for xx in [0..6]
    			@teclaCalendario[xx] = false

    		@teclaCalendario[day] = true

		queDia = ""

		switch parseInt(day)
			when 0 then queDia="domingo"
			when 1 then queDia="lunes"
			when 2 then queDia="martes"
			when 3 then queDia="miércoles"
			when 4 then queDia="jueves"
			when 5 then queDia="viernes"
			when 6 then queDia="sabado"

		@_tR2 = parseInt(day)

		@_tR = "#{date} - #{window.MONTH[month][1]} - #{fullYear}"
		@_tR1 = queDia 

		$("#screen").html("<h3>#{date} - #{window.MONTH[month][1]} - #{fullYear}</h3>")

		control = ""

		if @esMovil
			control = """
				<input type="button" name="bb1" value="Domingo" id="btn-dom">
				<input type="button" name="bb2" value="Lunes" id="btn-lun">
				<input type="button" name="bb3" value="Martes" id="btn-mar">
				<input type="button" name="bb4" value="Miercoles" id="btn-mie">
				<input type="button" name="bb5" value="Jueves" id="btn-jue">
				<input type="button" name="bb6" value="Viernes" id="btn-vie">
				<input type="button" name="bb7" value="Sabado" id="btn-sab">

			"""


		if $("#helpMode").is(':checked') and $("#calendarHelp").is(':checked')

			$("#liveHelp1").html("""
				<br>
				Codigo a&ntilde;o : #{window.YEAR[year][1]}  <br>
				Bisiesto : #{bis} <br>
				Codigo mes : #{window.MONTH[month][0]} <br>
				#{control}

			""")

		if @esMovil
			$("#btn-dom").click =>
				@resultadosList = @_tR + " = " + @_tR1 + " su respuesta es " + ( if @_tR2==0 then "correcta" else "domingo") + "<br>" + @resultadosList
				localStorage.setItem("reultadosListLocalStorage", @resultadosList);

				@checkPosicion(@teclaCalendario[0])
			$("#btn-lun").click =>
				@resultadosList = @_tR + " = " + @_tR1 + " su respuesta es " + ( if @_tR2==1 then "correcta" else "lunes") + "<br>" + @resultadosList
				localStorage.setItem("reultadosListLocalStorage", @resultadosList);

				@checkPosicion(@teclaCalendario[1])
			$("#btn-mar").click =>
				@resultadosList = @_tR + " = " + @_tR1 + " su respuesta es " + ( if @_tR2==2 then "correcta" else "martes") + "<br>" + @resultadosList
				localStorage.setItem("reultadosListLocalStorage", @resultadosList);

				@checkPosicion(@teclaCalendario[2])
			$("#btn-mie").click =>
				@resultadosList = @_tR + " = " + @_tR1 + " su respuesta es " + ( if @_tR2==3 then "correcta" else "miércoles") + "<br>" + @resultadosList
				localStorage.setItem("reultadosListLocalStorage", @resultadosList);

				@checkPosicion(@teclaCalendario[3])
			$("#btn-jue").click =>
				@resultadosList = @_tR + " = " + @_tR1 + " su respuesta es " + ( if @_tR2==4 then "correcta" else "jueves") + "<br>" + @resultadosList
				localStorage.setItem("reultadosListLocalStorage", @resultadosList);

				@checkPosicion(@teclaCalendario[4])
			$("#btn-vie").click =>
				@resultadosList = @_tR + " = " + @_tR1 + " su respuesta es " + ( if @_tR2==5 then "correcta" else "viernes") + "<br>" + @resultadosList
				localStorage.setItem("reultadosListLocalStorage", @resultadosList);

				@checkPosicion(@teclaCalendario[5])
			$("#btn-sab").click =>
				@resultadosList = @_tR + " = " + @_tR1 + " su respuesta es " + ( if @_tR2==6 then "correcta" else "sábado") + "<br>" + @resultadosList
				localStorage.setItem("reultadosListLocalStorage", @resultadosList);

				@checkPosicion(@teclaCalendario[6])


		#empiezo a calcular el tiempo de respuesta
		@t_ini = Date.now()
		@tiempo()

		@killTimeout = setTimeout ( =>
					
					$("#screen").html("<h4>&nbsp;</h4>")

					@killTimeout1 = setTimeout ( =>
					
								@checkPosicion(3)

								), @tiempoEjercicios[10][1]

					), @tiempoEjercicios[10][0]




	aritmetica : () ->	
		vA = ""
		vB = ""
		oA = ""
		maxA = 0
		maxB = 0
		respuesta = 0
		respuestaValor = ""
		respuestaMostrar = ""

		#suma resta multiplicacion
		ejercicio = _.random(0,2)
		respuesta = _.random(0,1)
		@resultado = respuesta

		#ejercicio = 3


		switch ejercicio
		    when 0 then operadorAritmetico = "+"; maxA = $("#sumaMax").val(); maxB = $("#sumaMax").val(); minA = $("#sumaMin").val(); minB = $("#sumaMin").val();
		    when 1 then operadorAritmetico = "-"; maxA = $("#restaMax").val(); maxB = $("#restaMax").val(); minA = $("#restaMin").val(); minB = $("#restaMin").val(); 
		    
		    else operadorAritmetico = "*"; maxA = $("#multiMax").val(); maxB = $("#multiMax").val(); minA = $("#multiMin").val(); minB = $("#multiMin").val(); 

		@pausa = 0

		@salida = ""

		$("#pasadas").html(@totalPasadas - @jugadas)


		@variables[0] = _.random(parseInt(minA),parseInt(maxA))
		@variables[1] = _.random(parseInt(minB),parseInt(maxB))
		
		if respuesta 
			respuestaValor = eval(@variables[0]+operadorAritmetico+@variables[1])
		else
			respuestaValor = eval(@variables[0]+operadorAritmetico+@variables[1]) + _.random(-5,5)

		@salida = @variables[0]+ @espacios5 + operadorAritmetico + @espacios5 + @variables[1] + @espacios5 + "=" + @espacios5 + respuestaValor

		$("#screen").html("<h4>" + @salida + "</h4>")


		#empiezo a calcular el tiempo de respuesta
		@t_ini = Date.now()

		#oculto la pregunta
		@killTimeout = setTimeout ( =>
					
					$("#screen").html("<h4>&nbsp;</h4>")

					@killTimeout1 = setTimeout ( =>
					
								@checkPosicion(3)

								), @tiempoEjercicios[1][1]

					), @tiempoEjercicios[1][0]

	logica : (programa) ->

		myLevelLogic = parseInt( $("#myLevelLogic").val() );

		#hago los ejerccios

		mValor = []
		mSalida = []

		#programa = 2

		testMemory=1
		escondertm=0

		if myLevelLogic == 3 or myLevelLogic == 4 or myLevelLogic == 5
			testMemory = 0

			myLevelLogic -= 3


		if programa == 0

			@espacios = '<span style="display: inline-block; width: 280px;">&nbsp;</span>' 

			mValor[0] = _.random(0,1)
			mValor[1] = _.random(0,1)
			mValor[2] = _.random(0,1)
			mValor[3] = _.random(0,1)
			mValor[4] = _.random(0,1)
			mValor[5] = _.random(0,1)


			salidaTestMemory=[]
			salidaTestMemoryFalse=[]
			salidasTestMemoryArray=[]
			salidasTestMemoryArrayFalse = []
			salidaTestMemoryTotal=""
			colores=["red","green","blue","gray","orange","black"]

			if testMemory

				misPalabras = _.shuffle(window.palabras)

				z=0

				loop

					salidasTestMemoryArray[z]=[]
					salidasTestMemoryArrayFalse[z]=[]

					salidasTestMemoryArray[z][0] = misPalabras[_.random(0,misPalabras.length-1)]
					salidasTestMemoryArray[z][1] = misPalabras[_.random(0,misPalabras.length-1)]

					if salidasTestMemoryArray[z][0] == salidasTestMemoryArray[z][1]
						continue

					zz=0
					repetir = 0

					loop
						if z == 0 then break
						if zz == 10 then break

						if zz == z-1
							break

						if salidasTestMemoryArray[z][0] == salidasTestMemoryArray[zz][0]
							repetir = 1
							break

						zz += 1

						#console.log(repetir + " " + zz )

						

					if repetir
						continue

					loop
						salidasTestMemoryArrayFalse[z][0] = salidasTestMemoryArray[z][0]
						salidasTestMemoryArrayFalse[z][1] = misPalabras[_.random(0,misPalabras.length-1)]

						if salidasTestMemoryArrayFalse[z][1] != salidasTestMemoryArray[z][1] and salidasTestMemoryArrayFalse[z][0] != salidasTestMemoryArrayFalse[z][1]

							break

					salidaTestMemory[z] = """<span style="color: #{colores[z]}" class="-tm-#{z}"> """ + salidasTestMemoryArray[z][0] + " es " + salidasTestMemoryArray[z][1] + """</span>"""

					salidaTestMemoryFalse[z] = """<span style="color: #{colores[z]}" class="-tm-#{z}"> """ + salidasTestMemoryArrayFalse[z][0] + " es " + salidasTestMemoryArrayFalse[z][1] + """</span>"""

					z += 1

					if myLevelLogic == 0 and z==2 then break
					if myLevelLogic == 1 and z==3 then break

					if z==6
						break

				salidaTestMemoryMostrarTxt = _.shuffle(salidaTestMemory);

				z=0

				salidaTestMemoryTotal+="<br>"

				loop

					salidaTestMemoryTotal += salidaTestMemoryMostrarTxt[z] + "<br>"

					z++

					if myLevelLogic == 0 and z==2 then break
					if myLevelLogic == 1 and z==3 then break

					if z==6 then break

				#if not @esMobil
				salidaTestMemoryTotal+="<br><br><br><br><br><br><br><br><br><br><br><br><br>"

				if mValor[0]
					mSalida[0] = salidaTestMemory[0]
				else
					mSalida[0] = salidaTestMemoryFalse[0]

				if mValor[1]
					mSalida[1] = salidaTestMemory[1]
				else
					mSalida[1] = salidaTestMemoryFalse[1]

				if mValor[2]
					mSalida[2] = salidaTestMemory[2]
				else
					mSalida[2] = salidaTestMemoryFalse[2]

				if mValor[3]
					mSalida[3] = salidaTestMemory[3]
				else
					mSalida[3] = salidaTestMemoryFalse[3]

				if mValor[4]
					mSalida[4] = salidaTestMemory[4]
				else
					mSalida[4] = salidaTestMemoryFalse[4]

				if mValor[5]
					mSalida[5] = salidaTestMemory[5]
				else
					mSalida[5] = salidaTestMemoryFalse[5]

			else

				if mValor[0]
					mSalida[0] = "V"
				else
					mSalida[0] = "F"

				if mValor[1]
					mSalida[1] = "V"
				else
					mSalida[1] = "F"

				if mValor[2]
					mSalida[2] = "V"
				else
					mSalida[2] = "F"

				if mValor[3]
					mSalida[3] = "V"
				else
					mSalida[3] = "F"

				if mValor[4]
					mSalida[4] = "V"
				else
					mSalida[4] = "F"

				if mValor[5]
					mSalida[5] = "V"
				else
					mSalida[5] = "F"

		#sumas
		if programa == 1

			@espacios = '' 

			opMath = ["+","-","*"]
			opLog = [">",">=","<","<=","==","!="]
			minMath = []
			maxMath = []

			opRand = 0
			mOp = []
			mLog = []

			for xx in [0..5]
				opRand = _.random(0,2)
				mOp[xx] = opMath[opRand]

				if opRand == 0
					minMath[xx] = parseInt($("#sumaMinL").val())
					maxMath[xx] = parseInt($("#sumaMaxL").val())
				if opRand == 1
					minMath[xx] = parseInt($("#restaMinL").val())
					maxMath[xx] = parseInt($("#restaMaxL").val())
				if opRand == 2
					minMath[xx] = parseInt($("#multiMinL").val())
					maxMath[xx] = parseInt($("#multiMaxL").val())

			for xx in [0..2]
				mLog[xx] = opLog[_.random(0,5)]

			mSalida[0] = "#{_.random(minMath[0],maxMath[0])} #{mOp[0]} #{_.random(minMath[0],maxMath[0])} #{mLog[0]} #{_.random(minMath[1],maxMath[1])} #{mOp[1]} #{_.random(minMath[1],maxMath[1])}"
			
			mSalida[1] = "#{_.random(minMath[2],maxMath[2])} #{mOp[2]} #{_.random(minMath[2],maxMath[2])} #{mLog[1]} #{_.random(minMath[3],maxMath[3])} #{mOp[3]} #{_.random(minMath[3],maxMath[3])}"
			
			mSalida[2] = "#{_.random(minMath[4],maxMath[4])} #{mOp[4]} #{_.random(minMath[4],maxMath[4])} #{mLog[2]} #{_.random(minMath[5],maxMath[5])} #{mOp[5]} #{_.random(minMath[5],maxMath[5])}"


			mValor[0] = eval(mSalida[0])
			mValor[1] = eval(mSalida[1])
			mValor[2] = eval(mSalida[2])


		#emo
		if programa == 2

			console.clear()
			
		
			@cantidadIncluido = 0
			@espacios = '' 
			@contadorIncluido = 0

			for xx in [0..2]

				switch _.random(0,3)
					when 0 
						estilo = _.random(0,2)

						if estilo == 1
								
							myClass = """ class="emo-img" """

							#incluido
							@emocionesIncluidas[@cantidadIncluido] = []
							
							emocionSeleccionada = _.random(0,38)
							mEmocion = []
							mEmocion = (num for num in [0..38])

							mEmocion = _.without(mEmocion, emocionSeleccionada)
							mEmocion = _.shuffle(mEmocion)

							if _.random(0,1)
								mEmocion = _.first(mEmocion,10)
								mEmocion[mEmocion.length] = emocionSeleccionada
								mEmocion = _.shuffle(mEmocion)
								@emocionesIncluidas[@cantidadIncluido]= _.map mEmocion , (num) => window.emociones[num][0]
								#console.log(@emocionesIncluidas)

								incluido = _.random(0,1) 
								
								incluidoImagen = "/em/img/noIncluido.png"
								if incluido
									incluidoImagen = "/em/img/incluido.gif"

								mSalida[xx] = """ 
											<img src="#{window.emociones[emocionSeleccionada][0]}" title="#{window.emociones[emocionSeleccionada][0]}" onclick="$('#textoAyudaEmocion').html('#{window.emociones[emocionSeleccionada][0]}');" #{myClass}> <img src="#{incluidoImagen}"> <span id="incluido#{@cantidadIncluido}"></span>
								"""

								if incluido
									mValor[xx] = 1
								else
									mValor[xx] = 0

							else
								mEmocion = _.first(mEmocion,10)
								@emocionesIncluidas[@cantidadIncluido] = _.map mEmocion , (num) => window.emociones[num][0]
								#console.log(@emocionesIncluidas)

								incluido = _.random(0,1) 
								
								incluidoImagen = "/em/img/noIncluido.png"
								if incluido
									incluidoImagen = "/em/img/incluido.gif"

								mSalida[xx] = """ 
											<img src="#{window.emociones[emocionSeleccionada][0]}"  title="#{window.emociones[emocionSeleccionada][0]}" onclick="$('#textoAyudaEmocion').html('#{window.emociones[emocionSeleccionada][0]}');" #{myClass}> <img src="#{incluidoImagen}"> <span id="incluido#{@cantidadIncluido}"></span>
								"""

								if incluido
									mValor[xx] = 0
								else
									mValor[xx] = 1

							@cantidadIncluido += 1

						if estilo == 0


							myClass = """ class="emoji-img" """

							#incluido
							@emocionesIncluidas[@cantidadIncluido] = []
							
							emocionSeleccionada = _.random(0,50)
							mEmocion = []
							mEmocion = (num for num in [0..50])

							mEmocion = _.without(mEmocion, emocionSeleccionada)
							mEmocion = _.shuffle(mEmocion)

							if _.random(0,1)
								mEmocion = _.first(mEmocion,10)
								mEmocion[mEmocion.length] = emocionSeleccionada
								mEmocion = _.shuffle(mEmocion)
								@emocionesIncluidas[@cantidadIncluido]= _.map mEmocion , (num) => window.memoriaM1[num]
								#console.log(@emocionesIncluidas)

								incluido = _.random(0,1) 
								
								incluidoImagen = "/em/img/noIncluido.png"
								if incluido
									incluidoImagen = "/em/img/incluido.gif"

								mSalida[xx] = """ 
											<img src="#{window.memoriaM1[emocionSeleccionada]}" title="#{window.memoriaM1[emocionSeleccionada]}"  onclick="$('#textoAyudaEmocion').html('#{window.memoriaM1[emocionSeleccionada]}');"  #{myClass}> <img src="#{incluidoImagen}"> <span id="incluido#{@cantidadIncluido}"></span>
								"""

								if incluido
									mValor[xx] = 1
								else
									mValor[xx] = 0

							else
								mEmocion = _.first(mEmocion,10)
								@emocionesIncluidas[@cantidadIncluido] = _.map mEmocion , (num) => window.memoriaM1[num]
								#console.log(@emocionesIncluidas)

								incluido = _.random(0,1) 
								
								incluidoImagen = "/em/img/noIncluido.png"
								if incluido
									incluidoImagen = "/em/img/incluido.gif"

								mSalida[xx] = """ 
											<img src="#{window.memoriaM1[emocionSeleccionada]}" title="#{window.memoriaM1[emocionSeleccionada]}"  onclick="$('#textoAyudaEmocion').html('#{window.memoriaM1[emocionSeleccionada]}');"  #{myClass}> <img src="#{incluidoImagen}"> <span id="incluido#{@cantidadIncluido}"></span>
								"""

								if incluido
									mValor[xx] = 0
								else
									mValor[xx] = 1

							@cantidadIncluido += 1


						if estilo == 2


							myClass = """ class="meme-img" """

							#incluido
							@emocionesIncluidas[@cantidadIncluido] = []
							
							emocionSeleccionada = _.random(0,56)
							mEmocion = []
							mEmocion = (num for num in [0..56])

							mEmocion = _.without(mEmocion, emocionSeleccionada)
							mEmocion = _.shuffle(mEmocion)

							if _.random(0,1)
								mEmocion = _.first(mEmocion,10)
								mEmocion[mEmocion.length] = emocionSeleccionada
								mEmocion = _.shuffle(mEmocion)
								@emocionesIncluidas[@cantidadIncluido]= _.map mEmocion , (num) => window.memoriaM2[num]
								#console.log(@emocionesIncluidas)

								incluido = _.random(0,1) 
								
								incluidoImagen = "/em/img/noIncluido.png"
								if incluido
									incluidoImagen = "/em/img/incluido.gif"

								mSalida[xx] = """ 
											<img src="#{window.memoriaM2[emocionSeleccionada]}" title="#{window.memoriaM2[emocionSeleccionada]}"  onclick="$('#textoAyudaEmocion').html('#{window.memoriaM2[emocionSeleccionada]}');"  #{myClass}> <img src="#{incluidoImagen}"> <span id="incluido#{@cantidadIncluido}"></span>
								"""

								if incluido
									mValor[xx] = 1
								else
									mValor[xx] = 0

							else
								mEmocion = _.first(mEmocion,10)
								@emocionesIncluidas[@cantidadIncluido] = _.map mEmocion , (num) => window.memoriaM2[num]
								#console.log(@emocionesIncluidas)

								incluido = _.random(0,1) 
								
								incluidoImagen = "/em/img/noIncluido.png"
								if incluido
									incluidoImagen = "/em/img/incluido.gif"

								mSalida[xx] = """ 
											<img src="#{window.memoriaM2[emocionSeleccionada]}" title="#{window.memoriaM2[emocionSeleccionada]}"  onclick="$('#textoAyudaEmocion').html('#{window.memoriaM2[emocionSeleccionada]}');"  #{myClass}> <img src="#{incluidoImagen}"> <span id="incluido#{@cantidadIncluido}"></span>
								"""

								if incluido
									mValor[xx] = 0
								else
									mValor[xx] = 1

							@cantidadIncluido += 1

					when 1
						myClass = """ class="emo-img" """

						#mayor y menor del gruopo
						grupo = []
						myGrupo = _.random(0,5)
						yy = 0

						for zz in [0..window.emociones.length-1]
							if window.emociones[zz][2] == myGrupo
								grupo[yy] = []
								grupo[yy] = window.emociones[zz]
								yy += 1

						#console.log(grupo)

						select1 = 0
						select2 = 0
						
						loop
							select1 = _.random(0,grupo.length-1)
							select2 = _.random(0,grupo.length-1)

							if select1 != select2
								break

						operador1 = "<"
						if _.random(0,1)
							operador1 = ">"

						mSalida[xx] = """<img src="#{grupo[select1][0]}" onclick="$('#textoAyudaEmocion').html('#{grupo[select1][0]}');"  #{myClass}> #{operador1} <img src="#{grupo[select2][0]}" onclick="$('#textoAyudaEmocion').html('#{grupo[select2][0]}');"  #{myClass}>"""

						mValor[xx] = eval ("#{grupo[select1][3]} #{operador1} #{grupo[select2][3]}")


						console.log("#{grupo[select1][3]} #{operador1} #{grupo[select2][3]}|"+mValor[xx])

					when 2


						#igual

						myClass = """ class="emo-img" """

						elegida = _.random(0,window.emociones.length-1)

						if _.random(0,1)

							mSalida[xx] = """<img src="#{window.emociones[elegida][0]}"  onclick="$('#textoAyudaEmocion').html('#{window.emociones[elegida][0]}');"  #{myClass}> = #{window.emociones[elegida][1]}"""
							mValor[xx] = 1

						else

							loop
								elegida2 = _.random(0,window.emociones.length-1)
								if elegida != elegida2
									break

							mSalida[xx] = """<img src="#{window.emociones[elegida][0]}"  onclick="$('#textoAyudaEmocion').html('#{window.emociones[elegida][0]}');"  #{myClass}> = #{window.emociones[elegida2][1]}"""
							mValor[xx] = 0

					when 3
						#suma

						myClass = """ class="emo-img" """

						todos1 = []
						todos1 =  (num for num in [0..38])
						todos1 = _.shuffle(todos1)

						mSeleccionados = []
						contador1 = 0

						for zz in [0..38]
							if window.emociones[todos1[zz]][2] == 6

								mSeleccionados[contador1] = []
								mSeleccionados[contador1] = window.emociones[todos1[zz]]

								contador1 +=1

							if contador1 == 2
								break

							if zz == 38 and contador1 == 1
								zz = 0
								todos1 = _.shuffle(todos1)

						console.log mSeleccionados

						if _.random(0,1)

							mSalida[xx] = """<img src="#{window.emociones[mSeleccionados[0][4]][0]}" #{myClass}> + <img src="#{window.emociones[mSeleccionados[0][5]][0]}" #{myClass}> = <img src="#{mSeleccionados[0][0]}" onclick="$('#textoAyudaEmocion').html('#{mSeleccionados[0][0]}');"  #{myClass}>"""
							mValor[xx] = 1

						else

							loop
								elegida2 = _.random(0,window.emociones.length-1)
								if elegida != elegida2
									break

							mSalida[xx] = """<img src="#{window.emociones[mSeleccionados[1][4]][0]}" #{myClass}> + <img src="#{window.emociones[mSeleccionados[1][5]][0]}" #{myClass}> = <img src="#{mSeleccionados[0][0]}" onclick="$('#textoAyudaEmocion').html('#{mSeleccionados[0][0]}');"  #{myClass}>"""
							mValor[xx] = 0

						console.log(mValor[xx])


		vA = ""
		vB = ""
		oA = ""

		@pausa = 0

		@salida = ""

		$("#pasadas").html(@totalPasadas - @jugadas)
		
		#if not $("#dificilLogica").is(':checked') 

		rnd_11= _.random(0,1)

		if myLevelLogic == 0
			rnd_11 = 1

		if rnd_11 #true
			@cantidadProposiciones = 2

			escondertm=1

			@variables[0] = mValor[0]
			@variables[1] = mValor[1]

			#not
			# loop
				# @operadores[0] = _.random(0,1)
				# @operadores[2] = _.random(0,1)

				# if @operadores[0] == 1 or @operadores[2] == 1
				# 	break		

			@operadores[0] = _.random(0,1)
			@operadores[2] = _.random(0,1)	


			# and or condicional bicondicional XOR NAND NOR
			@operadores[1] = _.random(0,6)
			

			#defino la logica de los operadores
			if @operadores[0] 
				@salida += "~"
				vA = "!" + "this.variables[0]"
			else
				vA = "this.variables[0]"

			if @operadores[2] 
				vB = "!" + "this.variables[1]"
			else
				vB = "this.variables[1]"

			###
			if @variables[0]
				@salida += "V"
			else
				@salida += "F"

			###

			@salida += mSalida[0]

			#Defino los axuliares
			auxA = eval(vA)
			auxB = eval(vB)

			if auxA == true
				auxA = 1
			if auxA == false
				auxA = 0

			if auxB == true
				auxB = 1
			if auxB == false
				auxB = 0

			#@operadores[1] = 2

			@espacios = "&nbsp;"
		

			#Resolucion and or condicional bicondicional XOR NAND 
			if @operadores[1] == 0
				@salida += @espacios + " <img src='/em/img/smash.gif'> " + @espacios
				oA += " && "
				@chequear = vA + oA + vB
				@resultado = eval(@chequear)	
			
			if @operadores[1] == 1
				@salida += @espacios + " <img src='/em/img/wedge.gif'> " + @espacios 
				oA += " || "
				@chequear = vA + oA + vB
				@resultado = eval(@chequear)

			#=>
			if @operadores[1] == 2
				@salida += @espacios +  " -&#62; " + @espacios 

				if auxA  && auxB
					@resultado = 1
				if auxA == 1  && auxB == 0
					@resultado = 0
				if auxA == 0  && auxB == 1
					@resultado = 1
				if auxA == 0  && auxB == 0
					@resultado = 1

			#<=>
			
			if @operadores[1] == 3
				@salida += @espacios + " &#60-&#62; " + @espacios  

				if auxA  && auxB
					@resultado = 1
				if auxA == 1  && auxB == 0
					@resultado = 0
				if auxA == 0  && auxB == 1
					@resultado = 0
				if auxA == 0  && auxB == 0
					@resultado = 1
				
			#@@ XOR
			if @operadores[1] == 4
				@salida += @espacios + " <img src='/em/img/xor.png'> " + @espacios  
				@chequear = "( auxA && !auxB ) || ( !auxA && auxB )"
				@resultado = eval(@chequear)
			
			#!& NAND
			if @operadores[1] == 5
				@salida += @espacios + " <img src='/em/img/nand.png'> " + @espacios 
				oA = " && "
				@chequear = "!(" + vA + oA + vB + ")"
				@resultado = eval(@chequear)

			#!| NOR
			if @operadores[1] == 6
				@salida += @espacios + " <img src='/em/img/nor.png'> " + @espacios 
				oA = " || "
				@chequear = "!(" + vA + oA + vB + ")"
				@resultado = eval(@chequear)
				
			#salida del operador de negacion 2
			if @operadores[2] 
				@salida += "~"

			#Salida de la variable 2
			###
			if @variables[1]
				@salida += "V"
			else
				@salida += "F"
			
			###
			@salida += mSalida[1]

			salidaA = " ( " + @salida  + " ) "
			resultadoA = @resultado
		else
			@cantidadProposiciones = 3
			if $("#facilLogica").is(':checked')
				@logica()
				return 

			opArray = ["<img src='/em/img/smash.gif'>","<img src='/em/img/wedge.gif'>"," -&#62; "," &#60-&#62; ","<img src='/em/img/xor.png'>","<img src='/em/img/nand.png'>","<img src='/em/img/nor.png'>"]

			auxA = ""
			auxB = ""
			auxC = ""
			conjA = ""
			conjB = ""
			parentesis = 0

			#Saco donde va a estar el parentesis 0 izq. 1 der.
			parentesis = _.random(0,1)

			#3 variables y 2 operadores (and or)

			@variables[0] = mValor[0]
			@variables[1] = mValor[1]
			@variables[2] = mValor[2]

			#@variables[0] = 0
			#@variables[1] = 0
			#@variables[2] = 1

			# and or condicional bicondicional XOR NAND NOR
			@operadores[0] = _.random(0,6)
			@operadores[1] = _.random(0,6)
			@operadores[2] = -1

			#@operadores[0] = 2
			#@operadores[1] = 4
			#parentesis = 1

			#@operadores[1] = 3

			auxA = @variables[0]
			auxB = @variables[1]
			auxC = @variables[2]

			#Salida de proposicion

			if @variables[0]
				if parentesis == 0
					@salida += "(#{mSalida[0]}"
				else
					@salida += "#{mSalida[0]}"
			else
				if parentesis == 0
					@salida += "(#{mSalida[0]}"
				else			
					@salida += "#{mSalida[0]}"
 
			@salida += " " + opArray[@operadores[0]] + " "

			if @variables[1]
				if parentesis == 0
					@salida += "#{mSalida[1]})"	
				else
					@salida += "(#{mSalida[1]}"	

			else
				if parentesis == 0
					@salida += "#{mSalida[1]})"
				else
					@salida += "(#{mSalida[1]}"


			@salida += " " + opArray[@operadores[1]] + " "	

			if @variables[2]
				if parentesis == 0
					@salida += "#{mSalida[2]}"
				else
					@salida += "#{mSalida[2]})"
			else
				if parentesis == 0
					@salida += "#{mSalida[2]}"
				else
					@salida += "#{mSalida[2]})"

			#Resolucion and or condicional bicondicional XOR NAND parte 1
			#parentesis a la izq
			if parentesis == 0

				#&&
				if @operadores[0] == 0
					@chequear = "auxA  && auxB"
					conjA = eval(@chequear)	

				#||
				if @operadores[0] == 1
					@chequear = "auxA || auxB"
					conjA = eval(@chequear)

				#=>
				if @operadores[0] == 2

					if auxA  && auxB
						conjA = 1
					if auxA == 1  && auxB == 0
						conjA = 0
					if auxA == 0  && auxB == 1
						conjA = 1
					if auxA == 0  && auxB == 0
						conjA = 1
		
				#<=>
				if @operadores[0] == 3

					if auxA  && auxB
						conjA = 1
					if auxA == 1  && auxB == 0
						conjA = 0
					if auxA == 0  && auxB == 1
						conjA = 0
					if auxA == 0  && auxB == 0
						conjA = 1
					
				#@@ XOR
				if @operadores[0] == 4
					@chequear = "( auxA && !auxB ) || ( !auxA && auxB )"
					conjA = eval(@chequear)
				
				#!& NAND
				if @operadores[0] == 5
					@chequear = "!( auxA  &&  auxB )"
					conjA = eval(@chequear)

				#!| NOR
				if @operadores[0] == 6
					@chequear = "!( auxA  ||  auxB )"
					conjA = eval(@chequear)

				#Resolucion and or condicional bicondicional XOR NAND parte 2
				#&&
				if @operadores[1] == 0
					@chequear = "conjA && auxC"
					@resultado = eval(@chequear)	

				#||
				if @operadores[1] == 1
					@chequear = "conjA || auxC"
					@resultado = eval(@chequear)

				#=>
				if @operadores[1] == 2
					if conjA == true
						conjA = 1
					if conjA == false
						conjA = 0	

					if conjA == 1  && auxC == 1
						@resultado = 1
					if conjA == 1  && auxC == 0
						@resultado = 0
					if conjA == 0  && auxC == 1
						@resultado = 1
					if conjA == 0  && auxC == 0
						@resultado = 1
		
				#conjA = 1
				#<=> 
				if @operadores[1] == 3

					if conjA == true
						conjA = 1
					if conjA == false
						conjA = 0	

					if conjA == 1  && auxC == 1
						@resultado = 1
					if conjA == 1  && auxC == 0
						@resultado = 0
					if conjA == 0  && auxC == 1
						@resultado = 0
					if conjA == 0  && auxC == 0
						@resultado = 1
					
				#@@ XOR
				if @operadores[1] == 4
					@chequear = "( conjA && !auxC ) || ( !conjA && auxC )"
					@resultado = eval(@chequear)
				
				#!& NAND
				if @operadores[1] == 5
					@chequear = "!( conjA && auxC )"
					@resultado = eval(@chequear)

				#!| Nor
				if @operadores[1] == 6
					@chequear = "!( conjA || auxC )"
					@resultado = eval(@chequear)

				#console.log("conjA:" + conjA + "   S:" + @salida)

			#si el parentesis esta a la derecha
			###################################
			else

				if @operadores[1] == 0
					@chequear = "auxB  && auxC"
					conjB = eval(@chequear)	

				#||
				if @operadores[1] == 1
					@chequear = "auxB || auxC"
					conjB = eval(@chequear)

				#=>
				if @operadores[1] == 2

					if auxB  && auxC
						conjB = 1
					if auxB == 1  && auxC == 0
						conjB = 0
					if auxB == 0  && auxC == 1
						conjB = 1
					if auxB == 0  && auxC == 0
						conjB = 1
		
				#<=>
				if @operadores[1] == 3

					if auxB  && auxC
						conjB = 1
					if auxB == 1  && auxC == 0
						conjB = 0
					if auxB == 0  && auxC == 1
						conjB = 0
					if auxB == 0  && auxC == 0
						conjB = 1
					
				#@@ XOR
				if @operadores[1] == 4
					@chequear = "( auxB && !auxC ) || ( !auxB && auxC )"
					conjB = eval(@chequear)
				
				#!& NAND
				if @operadores[1] == 5
					@chequear = "!( auxB  &&  auxC )"
					conjB = eval(@chequear)

				#!| NOR
				if @operadores[1] == 6
					@chequear = "!( auxB  ||  auxC )"
					conjB = eval(@chequear)

				#Resolucion and or condicional bicondicional XOR NAND parte 2
				#&&
				if @operadores[0] == 0
					@chequear = "auxA && conjB"
					@resultado = eval(@chequear)	

				#||
				if @operadores[0] == 1
					@chequear = "auxA || conjB"
					@resultado = eval(@chequear)

				#=>
				if @operadores[0] == 2
					if conjB == true
						conjB = 1
					if conjB == false
						conjB = 0	

					if auxA == 1 && conjB == 1 
						@resultado = 1
					if auxA == 1 && conjB == 0 
						@resultado = 0
					if auxA == 0 && conjB == 1 
						@resultado = 1
					if auxA == 0 && conjB == 0
						@resultado = 1
		
				#conjA = 1
				#<=> 
				if @operadores[0] == 3

					if conjB == true
						conjB = 1
					if conjB == false
						conjB = 0	

					if auxA == 1 && conjB == 1
						@resultado = 1
					if auxA == 0 && conjB == 1
						@resultado = 0
					if auxA == 1 && conjB == 0
						@resultado = 0
					if auxA == 0 && conjB == 0
						@resultado = 1
					
				#@@ XOR
				if @operadores[0] == 4
					@chequear = "( auxA && !conjB ) || ( !auxA && conjB )"
					@resultado = eval(@chequear)
				
				#!& NAND
				if @operadores[0] == 5
					@chequear = "!( auxA && conjB )"
					@resultado = eval(@chequear)

				#!| Nor
				if @operadores[0] == 6
					@chequear = "!( auxA || conjB )"
					@resultado = eval(@chequear)
			
				#console.log("conjB:" + conjB + "   S:" + @salida)

			resultadoA = @resultado 
			salidaA = " ( " +  @salida + " ) "

		#############################

		experiment = myLevelLogic
		if experiment == 2 and programa != 2 and programa != 1


			vA = ""
			vB = ""
			oA = ""

			@salida = ""

			#if not $("#dificilLogica").is(':checked') 
			if _.random(0,1) #true
				@cantidadProposiciones = 2

				escondertm=1

				@variables[0] = mValor[2]
				@variables[1] = mValor[3]

				#not
				# loop
					# @operadores[0] = _.random(0,1)
					# @operadores[2] = _.random(0,1)

					# if @operadores[0] == 1 or @operadores[2] == 1
					# 	break		

				@operadores[0] = _.random(0,1)
				@operadores[2] = _.random(0,1)	


				# and or condicional bicondicional XOR NAND NOR
				@operadores[1] = _.random(0,6)
				

				#defino la logica de los operadores
				if @operadores[0] 
					@salida += "~"
					vA = "!" + "this.variables[0]"
				else
					vA = "this.variables[0]"

				if @operadores[2] 
					vB = "!" + "this.variables[1]"
				else
					vB = "this.variables[1]"

				###
				if @variables[0]
					@salida += "V"
				else
					@salida += "F"

				###

				@salida += mSalida[2]


				#Defino los axuliares
				auxA = eval(vA)
				auxB = eval(vB)

				if auxA == true
					auxA = 1
				if auxA == false
					auxA = 0

				if auxB == true
					auxB = 1
				if auxB == false
					auxB = 0

				#@operadores[1] = 2

				@espacios = "&nbsp;"
			

				#Resolucion and or condicional bicondicional XOR NAND 
				if @operadores[1] == 0
					@salida += @espacios + " <img src='/em/img/smash.gif'> " + @espacios
					oA += " && "
					@chequear = vA + oA + vB
					@resultado = eval(@chequear)	
				
				if @operadores[1] == 1
					@salida += @espacios + " <img src='/em/img/wedge.gif'> " + @espacios 
					oA += " || "
					@chequear = vA + oA + vB
					@resultado = eval(@chequear)

				#=>
				if @operadores[1] == 2
					@salida += @espacios +  " -&#62; " + @espacios 

					if auxA  && auxB
						@resultado = 1
					if auxA == 1  && auxB == 0
						@resultado = 0
					if auxA == 0  && auxB == 1
						@resultado = 1
					if auxA == 0  && auxB == 0
						@resultado = 1

				#<=>
				
				if @operadores[1] == 3
					@salida += @espacios + " &#60-&#62; " + @espacios  

					if auxA  && auxB
						@resultado = 1
					if auxA == 1  && auxB == 0
						@resultado = 0
					if auxA == 0  && auxB == 1
						@resultado = 0
					if auxA == 0  && auxB == 0
						@resultado = 1
					
				#@@ XOR
				if @operadores[1] == 4
					@salida += @espacios + " <img src='/em/img/xor.png'> " + @espacios  
					@chequear = "( auxA && !auxB ) || ( !auxA && auxB )"
					@resultado = eval(@chequear)
				
				#!& NAND
				if @operadores[1] == 5
					@salida += @espacios + " <img src='/em/img/nand.png'> " + @espacios 
					oA = " && "
					@chequear = "!(" + vA + oA + vB + ")"
					@resultado = eval(@chequear)

				#!| NOR
				if @operadores[1] == 6
					@salida += @espacios + " <img src='/em/img/nor.png'> " + @espacios 
					oA = " || "
					@chequear = "!(" + vA + oA + vB + ")"
					@resultado = eval(@chequear)
					
				#salida del operador de negacion 2
				if @operadores[2] 
					@salida += "~"

				#Salida de la variable 2
				###
				if @variables[1]
					@salida += "V"
				else
					@salida += "F"
				
				###
				@salida += mSalida[3]

				salidaB = " ( " + @salida + " ) "
				resultadoB = @resultado
			else
				@cantidadProposiciones = 3
				if $("#facilLogica").is(':checked')
					@logica()
					return 

				opArray = ["<img src='/em/img/smash.gif'>","<img src='/em/img/wedge.gif'>"," -&#62; "," &#60-&#62; ","<img src='/em/img/xor.png'>","<img src='/em/img/nand.png'>","<img src='/em/img/nor.png'>"]

				auxA = ""
				auxB = ""
				auxC = ""
				conjA = ""
				conjB = ""
				parentesis = 0

				#Saco donde va a estar el parentesis 0 izq. 1 der.
				parentesis = _.random(0,1)

				#3 variables y 2 operadores (and or)

				@variables[0] = mValor[3]
				@variables[1] = mValor[4]
				@variables[2] = mValor[5]

				#@variables[0] = 0
				#@variables[1] = 0
				#@variables[2] = 1

				# and or condicional bicondicional XOR NAND NOR
				@operadores[0] = _.random(0,6)
				@operadores[1] = _.random(0,6)
				@operadores[2] = -1

				#@operadores[0] = 2
				#@operadores[1] = 4
				#parentesis = 1

				#@operadores[1] = 3

				auxA = @variables[0]
				auxB = @variables[1]
				auxC = @variables[2]

				#Salida de proposicion

				if @variables[0]
					if parentesis == 0
						@salida += "(#{mSalida[3]}"
					else
						@salida += "#{mSalida[3]}"
				else
					if parentesis == 0
						@salida += "(#{mSalida[3]}"
					else			
						@salida += "#{mSalida[3]}"
	 
				@salida += " " + opArray[@operadores[0]] + " "

				if @variables[1]
					if parentesis == 0
						@salida += "#{mSalida[4]})"	
					else
						@salida += "(#{mSalida[4]}"	

				else
					if parentesis == 0
						@salida += "#{mSalida[4]})"
					else
						@salida += "(#{mSalida[4]}"


				@salida += " " + opArray[@operadores[1]] + " "	

				if @variables[2]
					if parentesis == 0
						@salida += "#{mSalida[5]}"
					else
						@salida += "#{mSalida[5]})"
				else
					if parentesis == 0
						@salida += "#{mSalida[5]}"
					else
						@salida += "#{mSalida[5]})"

				#Resolucion and or condicional bicondicional XOR NAND parte 1
				#parentesis a la izq
				if parentesis == 0

					#&&
					if @operadores[0] == 0
						@chequear = "auxA  && auxB"
						conjA = eval(@chequear)	

					#||
					if @operadores[0] == 1
						@chequear = "auxA || auxB"
						conjA = eval(@chequear)

					#=>
					if @operadores[0] == 2

						if auxA  && auxB
							conjA = 1
						if auxA == 1  && auxB == 0
							conjA = 0
						if auxA == 0  && auxB == 1
							conjA = 1
						if auxA == 0  && auxB == 0
							conjA = 1
			
					#<=>
					if @operadores[0] == 3

						if auxA  && auxB
							conjA = 1
						if auxA == 1  && auxB == 0
							conjA = 0
						if auxA == 0  && auxB == 1
							conjA = 0
						if auxA == 0  && auxB == 0
							conjA = 1
						
					#@@ XOR
					if @operadores[0] == 4
						@chequear = "( auxA && !auxB ) || ( !auxA && auxB )"
						conjA = eval(@chequear)
					
					#!& NAND
					if @operadores[0] == 5
						@chequear = "!( auxA  &&  auxB )"
						conjA = eval(@chequear)

					#!| NOR
					if @operadores[0] == 6
						@chequear = "!( auxA  ||  auxB )"
						conjA = eval(@chequear)

					#Resolucion and or condicional bicondicional XOR NAND parte 2
					#&&
					if @operadores[1] == 0
						@chequear = "conjA && auxC"
						@resultado = eval(@chequear)	

					#||
					if @operadores[1] == 1
						@chequear = "conjA || auxC"
						@resultado = eval(@chequear)

					#=>
					if @operadores[1] == 2
						if conjA == true
							conjA = 1
						if conjA == false
							conjA = 0	

						if conjA == 1  && auxC == 1
							@resultado = 1
						if conjA == 1  && auxC == 0
							@resultado = 0
						if conjA == 0  && auxC == 1
							@resultado = 1
						if conjA == 0  && auxC == 0
							@resultado = 1
			
					#conjA = 1
					#<=> 
					if @operadores[1] == 3

						if conjA == true
							conjA = 1
						if conjA == false
							conjA = 0	

						if conjA == 1  && auxC == 1
							@resultado = 1
						if conjA == 1  && auxC == 0
							@resultado = 0
						if conjA == 0  && auxC == 1
							@resultado = 0
						if conjA == 0  && auxC == 0
							@resultado = 1
						
					#@@ XOR
					if @operadores[1] == 4
						@chequear = "( conjA && !auxC ) || ( !conjA && auxC )"
						@resultado = eval(@chequear)
					
					#!& NAND
					if @operadores[1] == 5
						@chequear = "!( conjA && auxC )"
						@resultado = eval(@chequear)

					#!| Nor
					if @operadores[1] == 6
						@chequear = "!( conjA || auxC )"
						@resultado = eval(@chequear)

					#console.log("conjA:" + conjA + "   S:" + @salida)

				#si el parentesis esta a la derecha
				###################################
				else

					if @operadores[1] == 0
						@chequear = "auxB  && auxC"
						conjB = eval(@chequear)	

					#||
					if @operadores[1] == 1
						@chequear = "auxB || auxC"
						conjB = eval(@chequear)

					#=>
					if @operadores[1] == 2

						if auxB  && auxC
							conjB = 1
						if auxB == 1  && auxC == 0
							conjB = 0
						if auxB == 0  && auxC == 1
							conjB = 1
						if auxB == 0  && auxC == 0
							conjB = 1
			
					#<=>
					if @operadores[1] == 3

						if auxB  && auxC
							conjB = 1
						if auxB == 1  && auxC == 0
							conjB = 0
						if auxB == 0  && auxC == 1
							conjB = 0
						if auxB == 0  && auxC == 0
							conjB = 1
						
					#@@ XOR
					if @operadores[1] == 4
						@chequear = "( auxB && !auxC ) || ( !auxB && auxC )"
						conjB = eval(@chequear)
					
					#!& NAND
					if @operadores[1] == 5
						@chequear = "!( auxB  &&  auxC )"
						conjB = eval(@chequear)

					#!| NOR
					if @operadores[1] == 6
						@chequear = "!( auxB  ||  auxC )"
						conjB = eval(@chequear)

					#Resolucion and or condicional bicondicional XOR NAND parte 2
					#&&
					if @operadores[0] == 0
						@chequear = "auxA && conjB"
						@resultado = eval(@chequear)	

					#||
					if @operadores[0] == 1
						@chequear = "auxA || conjB"
						@resultado = eval(@chequear)

					#=>
					if @operadores[0] == 2
						if conjB == true
							conjB = 1
						if conjB == false
							conjB = 0	

						if auxA == 1 && conjB == 1 
							@resultado = 1
						if auxA == 1 && conjB == 0 
							@resultado = 0
						if auxA == 0 && conjB == 1 
							@resultado = 1
						if auxA == 0 && conjB == 0
							@resultado = 1
			
					#conjA = 1
					#<=> 
					if @operadores[0] == 3

						if conjB == true
							conjB = 1
						if conjB == false
							conjB = 0	

						if auxA == 1 && conjB == 1
							@resultado = 1
						if auxA == 0 && conjB == 1
							@resultado = 0
						if auxA == 1 && conjB == 0
							@resultado = 0
						if auxA == 0 && conjB == 0
							@resultado = 1
						
					#@@ XOR
					if @operadores[0] == 4
						@chequear = "( auxA && !conjB ) || ( !auxA && conjB )"
						@resultado = eval(@chequear)
					
					#!& NAND
					if @operadores[0] == 5
						@chequear = "!( auxA && conjB )"
						@resultado = eval(@chequear)

					#!| Nor
					if @operadores[0] == 6
						@chequear = "!( auxA || conjB )"
						@resultado = eval(@chequear)
				
					#console.log("conjB:" + conjB + "   S:" + @salida)

				resultadoB = @resultado
				salidaB = " ( " + @salida + " ) "

			
			#resolucion ultima parte
			#######################

			@salida = ""
			
			vA = ""
			vB = ""
			oA = ""

			@cantidadProposiciones = 2

			escondertm=1

			@variables[0] = resultadoA
			@variables[1] = resultadoB

			#not
			# loop
				# @operadores[0] = _.random(0,1)
				# @operadores[2] = _.random(0,1)

				# if @operadores[0] == 1 or @operadores[2] == 1
				# 	break		

			@operadores[0] = _.random(0,1)
			@operadores[2] = _.random(0,1)	


			# and or condicional bicondicional XOR NAND NOR
			@operadores[1] = _.random(0,6)
			

			#defino la logica de los operadores
			if @operadores[0] 
				@salida += "~"
				vA = "!" + "this.variables[0]"
			else
				vA = "this.variables[0]"

			if @operadores[2] 
				vB = "!" + "this.variables[1]"
			else
				vB = "this.variables[1]"

			###
			if @variables[0]
				@salida += "V"
			else
				@salida += "F"

			###

			@salida += salidaA


			#Defino los axuliares
			auxA = eval(vA)
			auxB = eval(vB)

			if auxA == true
				auxA = 1
			if auxA == false
				auxA = 0

			if auxB == true
				auxB = 1
			if auxB == false
				auxB = 0

			#@operadores[1] = 2

			@espacios = "&nbsp;"
		
			#Resolucion and or condicional bicondicional XOR NAND 
			if @operadores[1] == 0
				@salida += @espacios + " <img src='/em/img/smash.gif'> " + @espacios
				oA += " && "
				@chequear = vA + oA + vB
				@resultado = eval(@chequear)	
			
			if @operadores[1] == 1
				@salida += @espacios + " <img src='/em/img/wedge.gif'> " + @espacios 
				oA += " || "
				@chequear = vA + oA + vB
				@resultado = eval(@chequear)

			#=>
			if @operadores[1] == 2
				@salida += @espacios +  " -&#62; " + @espacios 

				if auxA  && auxB
					@resultado = 1
				if auxA == 1  && auxB == 0
					@resultado = 0
				if auxA == 0  && auxB == 1
					@resultado = 1
				if auxA == 0  && auxB == 0
					@resultado = 1

			#<=>
			
			if @operadores[1] == 3
				@salida += @espacios + " &#60-&#62; " + @espacios  

				if auxA  && auxB
					@resultado = 1
				if auxA == 1  && auxB == 0
					@resultado = 0
				if auxA == 0  && auxB == 1
					@resultado = 0
				if auxA == 0  && auxB == 0
					@resultado = 1
				
			#@@ XOR
			if @operadores[1] == 4
				@salida += @espacios + " <img src='/em/img/xor.png'> " + @espacios  
				@chequear = "( auxA && !auxB ) || ( !auxA && auxB )"
				@resultado = eval(@chequear)
			
			#!& NAND
			if @operadores[1] == 5
				@salida += @espacios + " <img src='/em/img/nand.png'> " + @espacios 
				oA = " && "
				@chequear = "!(" + vA + oA + vB + ")"
				@resultado = eval(@chequear)

			#!| NOR
			if @operadores[1] == 6
				@salida += @espacios + " <img src='/em/img/nor.png'> " + @espacios 
				oA = " || "
				@chequear = "!(" + vA + oA + vB + ")"
				@resultado = eval(@chequear)
				
			#salida del operador de negacion 2
			if @operadores[2] 
				@salida += "~"

			#Salida de la variable 2
			###
			if @variables[1]
				@salida += "V"
			else
				@salida += "F"
			
			###
			@salida += salidaB

			#salidaB = " ( " + @salida + " ) "
			#resultadoB = @resultado	


		#console.log("auxA:" + auxA + "  auxB:" + auxB + "    S:" + @salida)

		if programa == 0
			$("#screen").html("""<h4> <center id="show-logic"> <div id="question-1"> #{salidaTestMemoryTotal} </div> <br><br> <div id="texto-ayuda-1">Click or press "C" to show question</div> </center>  <br> <span class="salida-logic"> #{@salida} </span> </h4> <br> <div id="textoAyudaEmocion"></div> """)
		else
			$("#screen").html("""<h4>  <span class="salida-logic"> #{@salida} </span> </h4> <br> <div id="textoAyudaEmocion"></div> """)

		textLogic = @salida
		valueLogic = @resultado

		if testMemory and programa == 0
			@tiempoEjercicios[@ejercicioSeleccionado][1] = 90000
			@tiempoEjercicios[@ejercicioSeleccionado][0] = 90001

			$(".salida-logic").hide()
			$("#texto-ayuda-1").hide()
		
			#setTimeout ( => $(".salida-logic").show() ), 1000

		$("#show-logic").click =>
			$(".salida-logic").show()
			$("#texto-ayuda-1").hide()
			$("#question-1").hide()


		if testMemory == 0
			$("#texto-ayuda-1").hide()	
			console.log("texto ayuda hide")

		# if escondertm
		# 	$(".-tm-2").hide();
		# 	$(".-tm-2").hide();

		#empiezo a calcular el tiempo de respuesta
		@t_ini = Date.now()

		if $("#helpMode").is(':checked') 
			console.log("")
			$("#texto-ayuda-1").show()
			$("#liveHelp1").html("<br><br><img src=\"/em/img/logic.png\">")

		#oculto la pregunta
		@killTimeout = setTimeout ( =>
					
					$("#screen").html("<h4>&nbsp;</h4>")

					@killTimeout1 = setTimeout ( =>
								
								@checkPosicion(3)


								), @tiempoEjercicios[@ejercicioSeleccionado][1]

					), @tiempoEjercicios[@ejercicioSeleccionado][0]


		if @cantidadIncluido > 0
			@killTimeout7 = setInterval ( =>

			
								if @cantidadProposiciones == 2
									restar = 2
								else
									restar = 1

								if @contadorIncluido == 9
										@contadorIncluido = 0

								for yy in [0..@cantidadIncluido-1]

									str = @emocionesIncluidas[yy][@contadorIncluido];
									n = str.search("emociones");
									s = str.search("meme");

									if s == -1

										if n == -1
											myClass =  """ class="emoji-img" """
										else 
											myClass = """ class="emo-img" """
									else
										myClass = """ class="meme-img" """

									$("#incluido#{yy}").html("""<img src="#{@emocionesIncluidas[yy][@contadorIncluido]}"  #{myClass}>""")
									console.log("""#incluido#{yy}|#{@contadorIncluido}|<img src="#{@emocionesIncluidas[yy][@contadorIncluido]}"> """)

								@contadorIncluido += 1


						), 150

	guardarResultado : () ->

		for xx in [0..@totalEjercicios]
			@resultados[xx][@jugadas] = null

		if @tieneMemoria and @jugadas == 0
			return

		if @ejercicioSeleccionado == 3
			return
		
		@resultados[@ejercicioSeleccionado][@jugadas] = @t_dif # String(@t_dif).slice(0,4)

	dibujarGrafico : () ->

		labels = ""
		lineChartData = ""

		for xx in [0..@totalPasadas-1]

			labels += "\"#{xx+1}\""

			if xx < @totalPasadas-1

				labels += ","

		
		myDataset = ""

		for xx in [0..@totalEjercicios]
			

			label = @leyendaResultados[xx]
			color = @coloresResultados[xx]

			data = ""

			continuar = 1

			for yy in [0..@totalPasadas-1]
				if @resultados[xx][yy] != null
					continuar = 0

				#console.log( @resultados[xx][yy] )
					

			if continuar
				continue

			for zz in [0..@totalPasadas-1]

				data += @resultados[xx][zz]	

				if zz < @totalPasadas-1

					data += ","

			myDataset += """
				{
					label: "#{label}",
					fillColor : "#{color},0.2)",
					strokeColor : "#{color},1)",
					pointColor : "#{color},1)",
					pointStrokeColor : "#fff",
					pointHighlightFill : "#fff",
					pointHighlightStroke : "#{color},1)",
					data : [#{data}]
				},""" 

			

		myDataset = myDataset.substring(0, myDataset.length-1)



		window.lineChartData = eval("""
			({
				labels : [#{labels}],
				datasets : [#{myDataset}]
			})

		""")
		

		
		#console.log(window.lineChartData);

		
		graficar()
			
		
	checkPosicion : (x) ->

		$("#liveHelp").html("")
		$("#liveHelp1").html("")
		$("#timer").hide()
	

		if not @estado
			return

		if not @pausa
			@memoriaJugadas = 0

			@t_fin = Date.now()	

			if @ejercicioSeleccionado != 7
				clearTimeout(@killTimeout)

			clearTimeout(@killTimeout1)
			clearTimeout(@killTimeout3)
			clearInterval(@killTimeout5)
			clearInterval(@killTimeout7)

			@pausa = 1

			@t_dif = @t_fin - @t_ini 

			if @resultado == 1
				@resultado = true
			if @resultado == 0
				@resultado = false

			#console.log("R:" + x + "V:" + @resultado)
			#???
			if x == 3
				x = not @resultado

			aux = 0
			penalizacion = 0

			if @resultado == x
				@aciertos++
				@contador++ 

				if @ejercicioSeleccionado != 3 and @ejercicioSeleccionado !=7

					if @tiempoEjercicios[@ejercicioSeleccionado][0] > 100 

						aux = parseInt(@tiempoEjercicios[@ejercicioSeleccionado][0]) - parseInt(25)

					else
						aux = parseInt(@tiempoEjercicios[@ejercicioSeleccionado][0]) - parseInt(5)

					if @tiempoEjercicios[@ejercicioSeleccionado][0] > 70
					
						@tiempoEjercicios[@ejercicioSeleccionado][0] = aux

					if @tiempoEjercicios[@ejercicioSeleccionado][1] <= 100

						aux = parseInt(@tiempoEjercicios[@ejercicioSeleccionado][1]) - parseInt(25)
						
					else
						aux = parseInt(@tiempoEjercicios[@ejercicioSeleccionado][1]) - parseInt(5)

					if @tiempoEjercicios[@ejercicioSeleccionado][1] > 70
					
						@tiempoEjercicios[@ejercicioSeleccionado][1] = aux
								
			else
				
				@errores++
				@contador = 0
				penalizacion = 2000

				@erroresEjercicios[@ejercicioSeleccionado] +=1

				if @ejercicioSeleccionado != 3 and @ejercicioSeleccionado !=7

					if @erroresEjercicios[@ejercicioSeleccionado] == 2

						@erroresEjercicios[@ejercicioSeleccionado] = 0
						#console.log("error")

						if @tiempoEjercicios[@ejercicioSeleccionado][0] > 100

							aux = parseInt(@tiempoEjercicios[@ejercicioSeleccionado][0]) + parseInt(50)
							
						else
							aux = parseInt(@tiempoEjercicios[@ejercicioSeleccionado][0]) + parseInt(10)

						@tiempoEjercicios[@ejercicioSeleccionado][0] = aux

						if @tiempoEjercicios[@ejercicioSeleccionado][1] < 100

							aux = parseInt(@tiempoEjercicios[@ejercicioSeleccionado][1]) + parseInt(50)
					
						else
							aux = parseInt(@tiempoEjercicios[@ejercicioSeleccionado][1]) + parseInt(10)

						@tiempoEjercicios[@ejercicioSeleccionado][1] = aux

					if @jugadas == 0 and @tieneMemoria 

						if @tiempoEjercicios[@ejercicioSeleccionado][0] > 100 

							aux = parseInt(@tiempoEjercicios[@ejercicioSeleccionado][0]) - parseInt(25)

						else
							aux = parseInt(@tiempoEjercicios[@ejercicioSeleccionado][0]) - parseInt(5)
						
						@tiempoEjercicios[@ejercicioSeleccionado][0] = aux

						if @tiempoEjercicios[@ejercicioSeleccionado][1] > 100

							aux = parseInt(@tiempoEjercicios[@ejercicioSeleccionado][1]) - parseInt(25)
							
						else
							aux = parseInt(@tiempoEjercicios[@ejercicioSeleccionado][1]) - parseInt(5)
						
						@tiempoEjercicios[@ejercicioSeleccionado][1] = aux

			#console.log("t0:" + @tiempoEjercicios[@ejercicioSeleccionado][0] + "|t1:" + @tiempoEjercicios[@ejercicioSeleccionado][1])

			###if @ejercicioSeleccionado != 7

				$("#t#{@ejercicioSeleccionado}").val(@tiempoEjercicios[@ejercicioSeleccionado][0])
				$("#tt#{@ejercicioSeleccionado}").val(@tiempoEjercicios[@ejercicioSeleccionado][1])
			###

			$("#ok").html(@aciertos)
			$("#no").html(@errores)		

			@t_dif += penalizacion
			@t_total += @t_dif

			@guardarResultado()		
			
			if @jugadas < @totalPasadas-1

				@jugadas++

				setTimeout ( =>

					@iniciar()

					), @nextQuestionDelay
				
					
			else
				#$("#pasadas").html("")



				@t_promedio = @t_total / @totalPasadas

				if @pasadas == 0
					div_prom = 1
				else
					div_prom = 2

				@promedio_total = (@promedio_total + @t_promedio) / div_prom

				mejora_txt = ""

				if @pasadas > 0 
					@mejora = @promedio_total - @t_promedio 
					mejora_txt = "Rendimiento: " + Math.round(@mejora) + " ms"

				@pasadas++
				pasadas_txt = @pasadas + 1

				t_txt = ""
				puntaje = Math.round(@aciertos * 100 / @totalPasadas)
				puntaje_txt = puntaje + "%<br>" +  @aciertos + "-" + @errores

				rec_txt = ""

				console.log("t_total:" +  @t_total + "-" + @t_total/1000 + "| t_promedio:" + @t_promedio + "-" + @t_promedio/1000)

				if @senglarMindMode
					console.log("Results")

					@timeEndSenglarMindMode = Date.now()

					@timeDiffSenglarMindMode = @timeEndSenglarMindMode - @timeInitSenglarMindMode 

					timePrint = getDuration(@timeDiffSenglarMindMode)

					fechaPrint = moment().format('D MMM, YYYY')


					setTimeout ( =>

						$("#screen").html("""
									<h3>30 Potencias de dos cifras - Senglar Mind - #{fechaPrint} </h3><br>

									Tiempo total respuestas: #{timePrint}
													
								""")
					), 500


				else
					setTimeout ( =>
							@cls()
							@t_dif
							sl = 5

							$("#controlesMR").show()
							$("#controles2").show()

							if @totalPasadas > 60
								sl = 6

							#Tiempo total respuestas: #{String(@t_total).slice(0,sl)}ms | Promedio de tiempo #{String(@t_promedio).slice(0,4)}ms <br>

							$("#screen").html("""
								<h3>Resultados</h3><br>

								Tiempo total respuestas: #{getDuration(@t_total)} | Promedio de tiempo #{getDuration(@t_promedio)} | Penalizacion iconrrectas 2 seg. <br>
																
								<div style="width: 1000px;">
				                    <div>
				                        <canvas id="canvas" height="200" width="400"></canvas>
				                    </div>
				                </div> 	
							""")
							
							if @totalPasadas < 60

								@dibujarGrafico()

							@estado = 0
							@parar = 1	

							$("#boton-comenzar").attr('value', '▶');

							), 500


	cls : ->
		$("#screen").html("<h4>&nbsp;</h4>")
		
	tiempo : ->
		
		$("#timer").show()
		$("#timerAdentro").css("width", "100%")

		@killTimeout5 = setInterval ( =>

				t_fin = Date.now()	
				t_dif = t_fin - @t_ini 

				t_total = parseInt(@tiempoEjercicios[@ejercicioSeleccionado][0]) + parseInt(@tiempoEjercicios[@ejercicioSeleccionado][1])

				marcar = 100 - t_dif * 100 / t_total

				#console.log( "t_dif:" + t_dif + "t_total" + t_total + "marcar" + marcar)
				
				$("#timerAdentro").css("width", marcar + "%")

				), 1000

	tiempo2 : ->
		@killTimeout6 = setInterval ( =>

				@segundos -= 1
				
				if @segundos == 0
					$("#screen").html("")
				else
					$("#screen").html("<center><h4>#{@segundos}</h4></center>")

				), 1000

$(window).ready ->
	window.juegoReaction = new motorReaction()
