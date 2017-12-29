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

		#Activado matematica
		document.title = 'Mental Math';

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

		#@iniciarBin()
		@selectedMRAccion = 0
		#@iniciarMR()

		#$("#frase").html("<br>" + window.frases[_.random(0,2)])

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
			

			@checkPosicion(true)

		$( "#btn-x-id" ).click  =>
			
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
					@resultadosList = @_tR + " = " + @_tR1 + " your answer is " + ( if @_tR2==0 then "correct" else "Sunday") + "<br>" + @resultadosList 
					@checkPosicion(@teclaCalendario[0])
					
				if e.which == 108 or e.which == 50
					@resultadosList = @_tR + " = " + @_tR1 + " your answer is " + ( if @_tR2==1 then "correct" else "Monday") + "<br>" + @resultadosList
					@checkPosicion(@teclaCalendario[1])
				if e.which == 109 or e.which == 51
					@resultadosList = @_tR + " = " + @_tR1 + " your answer is " + ( if @_tR2==2 then "correct" else "Tuesday") + "<br>" + @resultadosList
					@checkPosicion(@teclaCalendario[2])
				if e.which == 105 or e.which == 52
					@resultadosList = @_tR + " = " + @_tR1 + " your answer is " + ( if @_tR2==3 then "correct" else "Wednesday") + "<br>" + @resultadosList
					@checkPosicion(@teclaCalendario[3])
				if e.which == 106 or e.which == 53
					@resultadosList = @_tR + " = " + @_tR1 + " your answer is " + ( if @_tR2==4 then "correct" else "Thursday") + "<br>" + @resultadosList
					@checkPosicion(@teclaCalendario[4])
				if e.which == 118 or e.which == 54
					@resultadosList = @_tR + " = " + @_tR1 + " your answer is " + ( if @_tR2==5 then "correct" else "Friday") + "<br>" + @resultadosList
					@checkPosicion(@teclaCalendario[5])
				if e.which == 115 or e.which == 55
					@resultadosList = @_tR + " = " + @_tR1 + " your answer is " + ( if @_tR2==6 then "correct" else "Saturday") + "<br>" + @resultadosList
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
			
			when 13 then setTimeout ( => @hectoc() ) , 10 
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
				There are 6 digits. Your task is to use them in the order they come and insert some mathematical symbols so that the result of the expression you manage to build is 100.
				(with 123456 made 1+(2+3+4)*(5+6)=100)
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
					window.juegoReaction.resultadosList = "√" + window.juegoReaction._tR + " = " + $("#mySumFlashResult").val()+"."+$("#mySumFlashResult1").val() + " the answer is " + (($("#mySumFlashResult").val()+"."+$("#mySumFlashResult1").val()+""=="#{resultadoRaiz}")?"correct":"as a matter of fact " + window.juegoReaction._tR1) + "<br>" + window.juegoReaction.resultadosList ; 
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
						window.juegoReaction.resultadosList = "√" + window.juegoReaction._tR + " = " + $("#mySumFlashResult").val()+"."+$("#mySumFlashResult1").val() + " the answer is " + (($("#mySumFlashResult").val()+"."+$("#mySumFlashResult1").val()+""=="#{resultadoRaiz}")?"correct":"as a matter of fact " + window.juegoReaction._tR1) + "<br>" + window.juegoReaction.resultadosList ; 
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
					 		window.juegoReaction.resultadosList = "√" + window.juegoReaction._tR + " = " + $("#mySumFlashResult").val()+"."+$("#mySumFlashResult1").val() + " the answer is " + (($("#mySumFlashResult").val()+"."+$("#mySumFlashResult1").val()+""=="#{resultadoRaiz}")?"correct":"as a matter of fact " + window.juegoReaction._tR1) + "<br>" + window.juegoReaction.resultadosList ; 
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

					window.juegoReaction.resultadosList = window.juegoReaction._tR + "² = " + $("#mySumFlashResult").val() + " the answer is " + ((parseInt($("#mySumFlashResult").val())==window.juegoReaction._tR1 )?"correct":"as a matter of fact " + window.juegoReaction._tR1) + "<br>" + window.juegoReaction.resultadosList ; 
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

						window.juegoReaction.resultadosList = window.juegoReaction._tR + "² = " + $("#mySumFlashResult").val() + " the answer is " + ((parseInt($("#mySumFlashResult").val())==window.juegoReaction._tR1 )?"correct":"as a matter of fact " + window.juegoReaction._tR1) + "<br>" + window.juegoReaction.resultadosList ; 
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
					 		window.juegoReaction.resultadosList = window.juegoReaction._tR + "² = " + $("#mySumFlashResult").val() + " the answer is " + ((parseInt($("#mySumFlashResult").val())==window.juegoReaction._tR1 )?"correct":"as a matter of fact " + window.juegoReaction._tR1) + "<br>" + window.juegoReaction.resultadosList ; 
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

			$("#screen").html("<br><center><h1 style=\"color: black; font-size: 300px;\">#{elegido}</h1></center>")

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

					window.juegoReaction.resultadosList = window.juegoReaction._tR + " = " + window.juegoReaction.acumuladorSumFlash + " your answer is " + (parseInt($("#mySumFlashResult").val())==parseInt(window.juegoReaction.acumuladorSumFlash)?"correct":$("#mySumFlashResult").val()) + "<br>" + window.juegoReaction.resultadosList ; 
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
						window.juegoReaction.resultadosList = window.juegoReaction._tR + " = " + window.juegoReaction.acumuladorSumFlash + " your answer is " + (parseInt($("#mySumFlashResult").val())==parseInt(window.juegoReaction.acumuladorSumFlash)?"correct":$("#mySumFlashResult").val()) + "<br>" + window.juegoReaction.resultadosList; 
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
					 		window.juegoReaction.resultadosList = window.juegoReaction._tR + " = " + window.juegoReaction.acumuladorSumFlash + " your answer is " + (parseInt($("#mySumFlashResult").val())==parseInt(window.juegoReaction.acumuladorSumFlash)?"correct":$("#mySumFlashResult").val()) + "<br>" + window.juegoReaction.resultadosList; 
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


			@resultadosList = @_tR + " = " + myResult + "(su valor)" + " the answer is " + ( if @resultado1.compare(myResult) == 0 then "correct" else " as a matter of fact <br> =" + @resultado1.toString() ) + "<br>" + @resultadosList
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

						window.juegoReaction.resultadosList = window.juegoReaction._tR + " = " + myResult + "(su valor)" + " answer is " + (  ( BigInteger("#{@resultado1.toString()}").compare(myResult) == 0 ) ? "correct" : " as a matter of fact <br> =" + window.juegoReaction.resultado1.toString() ) + "<br>" + window.juegoReaction.resultadosList;
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

			@resultadosList = @_tR + " = " + myResult + "(your value)" + " the answer is " + ( if parseInt(myResult) == parseInt(@resultado1) or -parseInt(myResult) == parseInt(@resultado1) then "correct" else " as a matter of fact <br> =" + @resultado1 ) + "<br>" + @resultadosList
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

						window.juegoReaction.resultadosList = window.juegoReaction._tR + " = " + myResult + "(your value)" + " the answer is " + ( (parseInt(myResult) == parseInt("#{@resultado1}") || -parseInt(myResult) == parseInt("#{@resultado1}")) ? "correct" : " as a matter of fact <br> =" + window.juegoReaction.resultado1 ) + "<br>" + window.juegoReaction.resultadosList;
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

			@resultadosList = @_tR + " = " + myResult + "(your value)" + " the answer is " + ( if parseInt(myResult) == @resultado1 then "correct" else " as a matter of fact <br> =" + @resultado1 ) + "<br>" + @resultadosList
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


						window.juegoReaction.resultadosList = window.juegoReaction._tR + " = " + myResult + "(your value)" + " the answer is " + ( parseInt(myResult) == window.juegoReaction.resultado1 ? "correct" : " as a matter of fact <br> =" + window.juegoReaction.resultado1 ) + "<br>" + window.juegoReaction.resultadosList;
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
				@resultadosList = @_tR + " = " + @_tR1 + " your answer is " + ( if @_tR2==0 then "correct" else "Sunday") + "<br>" + @resultadosList
				localStorage.setItem("reultadosListLocalStorage", @resultadosList);

				@checkPosicion(@teclaCalendario[0])
			$("#btn-lun").click =>
				@resultadosList = @_tR + " = " + @_tR1 + " your answer is " + ( if @_tR2==1 then "correct" else "Monday") + "<br>" + @resultadosList
				localStorage.setItem("reultadosListLocalStorage", @resultadosList);

				@checkPosicion(@teclaCalendario[1])
			$("#btn-mar").click =>
				@resultadosList = @_tR + " = " + @_tR1 + " your answer is " + ( if @_tR2==2 then "correct" else "Tuesday") + "<br>" + @resultadosList
				localStorage.setItem("reultadosListLocalStorage", @resultadosList);

				@checkPosicion(@teclaCalendario[2])
			$("#btn-mie").click =>
				@resultadosList = @_tR + " = " + @_tR1 + " your answer is " + ( if @_tR2==3 then "correct" else "Wednesday") + "<br>" + @resultadosList
				localStorage.setItem("reultadosListLocalStorage", @resultadosList);

				@checkPosicion(@teclaCalendario[3])
			$("#btn-jue").click =>
				@resultadosList = @_tR + " = " + @_tR1 + " your answer is " + ( if @_tR2==4 then "correct" else "Thursday") + "<br>" + @resultadosList
				localStorage.setItem("reultadosListLocalStorage", @resultadosList);

				@checkPosicion(@teclaCalendario[4])
			$("#btn-vie").click =>
				@resultadosList = @_tR + " = " + @_tR1 + " your answer is " + ( if @_tR2==5 then "correct" else "Friday") + "<br>" + @resultadosList
				localStorage.setItem("reultadosListLocalStorage", @resultadosList);

				@checkPosicion(@teclaCalendario[5])
			$("#btn-sab").click =>
				@resultadosList = @_tR + " = " + @_tR1 + " your answer is " + ( if @_tR2==6 then "correct" else "Saturday") + "<br>" + @resultadosList
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
