(function() {
  var motorReaction;

  motorReaction = (function() {
    motorReaction.prototype.totalEjercicios = 25;

    motorReaction.prototype.cantidadElegir = 3;

    motorReaction.prototype.cartasSinElegir = [];

    motorReaction.prototype.nivel = 3;

    motorReaction.prototype.pausa = 0;

    motorReaction.prototype.operadores = [];

    motorReaction.prototype.variables = [];

    motorReaction.prototype.nots = [];

    motorReaction.prototype.salida = "";

    motorReaction.prototype.chequear = "";

    motorReaction.prototype.resultado = 0;

    motorReaction.prototype.contador = 0;

    motorReaction.prototype.t_ini = 0;

    motorReaction.prototype.t_fin = 0;

    motorReaction.prototype.t_dif = 0;

    motorReaction.prototype.t_total = 0;

    motorReaction.prototype.t_promedio = 0;

    motorReaction.prototype.jugadas = 0;

    motorReaction.prototype.promedio_total = 0;

    motorReaction.prototype.pasadas = 0;

    motorReaction.prototype.mejora = 0;

    motorReaction.prototype.estado = 0;

    motorReaction.prototype.parar = 0;

    motorReaction.prototype.killTimeout = 0;

    motorReaction.prototype.killTimeout3 = 0;

    motorReaction.prototype.killTimeout5 = 0;

    motorReaction.prototype.killTimeout6 = 0;

    motorReaction.prototype.totalPasadas = 8;

    motorReaction.prototype.aciertos = 0;

    motorReaction.prototype.errores = 0;

    motorReaction.prototype.penaTiempo = 0;

    motorReaction.prototype.espacios = "";

    motorReaction.prototype.hola = 0;

    motorReaction.prototype.tipo = 0;

    motorReaction.prototype.alfabeto = [];

    motorReaction.prototype.memoriaM = [];

    motorReaction.prototype.memoriaM2 = [];

    motorReaction.prototype.memoriaM2Elegidas = [];

    motorReaction.prototype.memoriaJugadas = 0;

    motorReaction.prototype.cantidadElegirM2 = 0;

    motorReaction.prototype.memoriaAnterior = 0;

    motorReaction.prototype.ejercicioGlobal = 0;

    motorReaction.prototype.ejerciciosActivos = [];

    motorReaction.prototype.tiempoEjercicios = [];

    motorReaction.prototype.tieneMemoria = 0;

    motorReaction.prototype.tieneMemoria2 = 0;

    motorReaction.prototype.ejercicioSeleccionado = 0;

    motorReaction.prototype.tiempoEjercicioInicial = 0;

    motorReaction.prototype.noEsta1 = "";

    motorReaction.prototype.articulos = [];

    motorReaction.prototype.sustantivos = [];

    motorReaction.prototype.adjetivos = [];

    motorReaction.prototype.resultados = [];

    motorReaction.prototype.coloresResultados = [];

    motorReaction.prototype.leyendaResultados = [];

    motorReaction.prototype.ojosImagenes = [];

    motorReaction.prototype.ojosLeyendas = [];

    motorReaction.prototype.ojosAnterior = 0;

    motorReaction.prototype.ojosPasadas = 0;

    motorReaction.prototype.leyendaAnterior = 0;

    motorReaction.prototype.esInverso = 0;

    motorReaction.prototype.ejerciciosAnteriores = [];

    motorReaction.prototype.erroresEjercicios = [];

    motorReaction.prototype.totalEjerciciosMemoria = 13;

    motorReaction.prototype.ejerciciosActivosMemoria = [];

    motorReaction.prototype.cantidadEjerciciosMemoria = 13;

    motorReaction.prototype.ejercicioSeleccionadoMemoria = 0;

    motorReaction.prototype.PAO = [];

    motorReaction.prototype.bPAO = 0;

    motorReaction.prototype.mixTiempos = [];

    motorReaction.prototype.esMovil = 0;

    motorReaction.prototype.numeroSumFlash = 0;

    motorReaction.prototype.acumuladorSumFlash = 0;

    motorReaction.prototype.jugadasSumFlash = 0;

    motorReaction.prototype.teclaCalendario = [];

    motorReaction.prototype.tiempoEstado = 0;

    motorReaction.prototype.teclaNotas = [];

    motorReaction.prototype.cantidadMemoria2 = 0;

    motorReaction.prototype.segundos = 3;

    motorReaction.prototype.entrarMemoria = 0;

    motorReaction.prototype.cantidad1 = 0;

    motorReaction.prototype.myZoom = "100%";

    motorReaction.prototype.nombreRandom = "";

    motorReaction.prototype.constantTime = 0;

    motorReaction.prototype.emocionesIncluidas = [];

    motorReaction.prototype.tieneEmocionesIncluidas = 0;

    motorReaction.prototype.cantidadIncluido = 0;

    motorReaction.prototype.killTimeout7 = 0;

    motorReaction.prototype.contadorIncluido = 0;

    motorReaction.prototype.cantidadProposiciones = 0;

    motorReaction.prototype.tSuma = [];

    motorReaction.prototype.tSumaFila = [];

    motorReaction.prototype.resultado1 = 0;

    motorReaction.prototype.tMulti = [];

    motorReaction.prototype.tMultFila = [];

    motorReaction.prototype.cMulti = 0;

    motorReaction.prototype.mMR = [];

    motorReaction.prototype.mCurrentMR = [];

    motorReaction.prototype.ejerciciosMR = [];

    motorReaction.prototype.seleccionMR = "";

    motorReaction.prototype.matrizSeleccionMR = [];

    motorReaction.prototype.matrizMRConfiguracion = [];

    motorReaction.prototype.todasConfiguracionesMR = [];

    motorReaction.prototype.digitosMR = 0;

    motorReaction.prototype.tipoMR = 0;

    motorReaction.prototype.espacioMR = 0;

    motorReaction.prototype.ejerciciosMR = [];

    motorReaction.prototype.primeraMR = 0;

    motorReaction.prototype.selectedMRAccion = 0;

    motorReaction.prototype.tipoMRGo = 0;

    motorReaction.prototype.tiempoMRGo = 0;

    motorReaction.prototype.digitosMRGo = 0;

    motorReaction.prototype.matrizMRConfiguracionGo = [];

    motorReaction.prototype.resultadosMRGo = [];

    motorReaction.prototype.contadorMR = 0;

    motorReaction.prototype.arrayMRBin = [];

    motorReaction.prototype.bMRGo = 1;

    motorReaction.prototype.restaYMR = 0;

    motorReaction.prototype.preventHelp = 0;

    motorReaction.prototype.bCantidadPasadasCalendar = 0;

    motorReaction.prototype.cantidadPasadasCalendar = 1;

    motorReaction.prototype.contadorCantidadPasadasCalendar = 0;

    motorReaction.prototype.preventCalendar = 0;

    motorReaction.prototype.countMemoria2 = 1;

    motorReaction.prototype.sumFlashElegido = 0;

    motorReaction.prototype.nextQuestionDelay = 0;

    motorReaction.prototype.__salida = "";

    motorReaction.prototype.configApp = "";

    motorReaction.prototype.resultadosList = "";

    motorReaction.prototype.nuevoResultado = "";

    motorReaction.prototype._tR = "";

    motorReaction.prototype._tR1 = "";

    motorReaction.prototype._tR2 = "";

    motorReaction.prototype._tR3 = "";

    motorReaction.prototype.killTimeoutSumFlash = 0;

    motorReaction.prototype.senglarMindMode = 0;

    motorReaction.prototype.timeInitSenglarMindMode = 0;

    motorReaction.prototype.timeEndSenglarMindMode = 0;

    motorReaction.prototype.timeDiffSenglarMindMode = 0;

    motorReaction.prototype.bMemoria2 = 0;

    motorReaction.prototype.wToN = [];

    function motorReaction() {
      var i, isAndroid, isiPad, isiPhone, l, m, myUrl, o, ref, ref1, seccion, ua, xx;
      window.arrCol = [$("#txt0").val(), $("#txt1").val(), $("#txt2").val(), $("#txt3").val(), $("#txt4").val(), $("#txt5").val(), $("#txt6").val(), $("#txt7").val(), $("#txt8").val(), $("#txt9").val()];
      $("#resultados-div").hide();
      $(".clear-result-btn-class").hide();
      $("#senglarMindMode").click((function(_this) {
        return function() {
          _this.senglarMindMode = !_this.senglarMindMode;
          if (_this.senglarMindMode) {
            $("#cantPasadas").prop('disabled', true);
            $("#cantPasadas").val("30");
            _this.checkboxAction("quitar", "ch", 21, 30);
            $("#ch21").prop('checked', true);
            $("#ch22").prop('checked', false);
            $("#ch23").prop('checked', false);
            $("#ch24").prop('checked', false);
            return $("#ch25").prop('checked', false);
          } else {
            return $("#cantPasadas").prop('disabled', false);
          }
        };
      })(this));
      $("#result-link").click((function(_this) {
        return function() {
          $("#resultados-div").show();
          $(".clear-result-btn-class").show();
          return $("#resultados-div").html(_this.resultadosList);
        };
      })(this));
      $(".clear-result-btn-class").click((function(_this) {
        return function() {
          $(".clear-result-btn-class").hide();
          _this.resultadosList = "";
          $("#resultados-div").html(_this.resultadosList);
          return localStorage.setItem("reultadosListLocalStorage", _this.resultadosList);
        };
      })(this));
      this.configApp = localStorage.getItem("configAppLocalStorage");
      this.resultadosList = localStorage.getItem("reultadosListLocalStorage");
      if (this.resultadosList === null) {
        this.resultadosList = "";
        localStorage.setItem("reultadosListLocalStorage", this.resultadosList);
      }
      if (this.configApp === null) {
        this.configApp = window.configDefault;
        localStorage.setItem("configAppLocalStorage", this.configApp);
      } else {
        this.cargarConfiguracionTotal();
      }
      $("#reset-config-btn").add("#reset-config-btn1").click((function(_this) {
        return function() {
          if (confirm('Estás seguro que quieres resetear las configuraciones?')) {
            _this.configApp = window.configDefault;
            localStorage.setItem("configAppLocalStorage", _this.configApp);
            _this.cargarConfiguracionTotal();
            $("#div-configurar").hide();
            return location.hash = "#top";
          }
        };
      })(this));
      $("#close-config-btn").add("#close-config-btn1").click((function(_this) {
        return function() {
          $("#div-configurar").hide();
          return location.hash = "#top";
        };
      })(this));
      $("#boton-guardar").add("#boton-guardar1").click((function(_this) {
        return function() {
          var _inputs, values;
          location.hash = "#top";
          $("#div-configurar").hide();
          _inputs = $('#myForm200 :input');
          values = {};
          _this.__salida = "";
          _inputs.each(function(element, index) {
            var __id, __type, __val;
            __val = $(index).val();
            __id = $(index).attr('id');
            __type = $(index).attr('type');
            if ((__type === "text" || __type === "checkbox" || __type === "color") && __type !== "undefined" && __val !== "") {
              if (__type === "checkbox") {
                __val = false;
                if ($("#" + __id).is(':checked')) {
                  __val = true;
                }
              }
              return _this.__salida += __type + "|" + __id + "|" + __val + "\n";
            }
          });
          _this.configApp = _this.__salida.slice(0, -1);
          localStorage.setItem("configAppLocalStorage", _this.configApp);
          console.log(_this.configApp);
          if ($("#multiSinestesia").is(':checked')) {
            return eval("\nconsole.log(\"repaint\");\n\nfor(i=0;i<=9;i++){\n\n					    arrCol[i]= $(\"#txt\"+i).val();\n					    //console.log(arrCol[i]);\n					    //$(\"#txt\"+i).val(arrCol[i]);\n\n					  }\n\n$(\".num0-1\").css(\"color\",arrCol[0]);\n\n$(\".num1\").css(\"background-color\",arrCol[1]);\n$(\".num1\").css(\"color\",arrCol[1]);\n$(\".num1-1\").css(\"color\",arrCol[1]);\n\n$(\".num2\").css(\"background-color\",arrCol[2]);\n$(\".num2\").css(\"color\",arrCol[2]);\n$(\".num2-1\").css(\"color\",arrCol[2]);\n\n$(\".num3\").css(\"background-color\",arrCol[3]);\n$(\".num3\").css(\"color\",arrCol[3]);\n$(\".num3-1\").css(\"color\",arrCol[3]);\n\n$(\".num4\").css(\"background-color\",arrCol[4]);\n$(\".num4\").css(\"color\",arrCol[4]);\n$(\".num4-1\").css(\"color\",arrCol[4]);\n\n$(\".num5\").css(\"background-color\",arrCol[5]);\n$(\".num5\").css(\"color\",arrCol[5]);\n$(\".num5-1\").css(\"color\",arrCol[5]);\n\n$(\".num6\").css(\"background-color\",arrCol[6]);\n$(\".num6\").css(\"color\",arrCol[6]);\n$(\".num6-1\").css(\"color\",arrCol[6]);\n\n$(\".num7\").css(\"background-color\",arrCol[7]);\n$(\".num7\").css(\"color\",arrCol[7]);\n$(\".num7-1\").css(\"color\",arrCol[7]);\n\n$(\".num8\").css(\"background-color\",arrCol[8]);\n$(\".num8\").css(\"color\",arrCol[8]);\n$(\".num8-1\").css(\"color\",arrCol[8]);\n\n$(\".num9\").css(\"background-color\",arrCol[9]);\n$(\".num9\").css(\"color\",arrCol[9]);\n$(\".num9-1\").css(\"color\",arrCol[9]);\n				 		\n				 		/*		\n				 		$(\".num1\").css(\"background-color\",\"rgb(175,13,102)\");\n				 		$(\".num1\").css(\"color\",\"rgb(175,13,102)\");\n\n				 		$(\".num2\").css(\"background-color\",\"rgb(146,248,70)\");\n				 		$(\".num2\").css(\"color\",\"rgb(146,248,70)\");\n\n				 		$(\".num3\").css(\"background-color\",\"rgb(255,200,47)\");\n				 		$(\".num3\").css(\"color\",\"rgb(255,200,47)\");\n\n				 		$(\".num4\").css(\"background-color\",\"rgb(255,118,0)\");\n				 		$(\".num4\").css(\"color\",\"rgb(255,118,0)\");\n\n				 		$(\".num5\").css(\"background-color\",\"rgb(255,152,213)\");\n				 		$(\".num5\").css(\"color\",\"rgb(255,152,213)\");\n\n				 		$(\".num6\").css(\"background-color\",\"rgb(235,235,222)\");\n				 		$(\".num6\").css(\"color\",\"rgb(235,235,222)\");\n\n				 		$(\".num7\").css(\"background-color\",\"rgb(100,100,100)\");\n				 		$(\".num7\").css(\"color\",\"rgb(100,100,100)\");\n\n				 		$(\".num8\").css(\"background-color\",\"rgb(255,255,0)\");\n				 		$(\".num8\").css(\"color\",\"rgb(255,255,0)\");\n\n				 		$(\".num9\").css(\"background-color\",\"rgb(255,255,150)\");\n				 		$(\".num9\").css(\"color\",\"rgb(255,255,150)\");\n				 		*/\n");
          }
        };
      })(this));

      /*
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
       */
      myUrl = window.location.href;
      seccion = myUrl.split("#");
      $("#mySp23").hide();
      document.title = 'Mental Math';
      $("#div-help").hide();
      this.preventHelp = 1;
      this.checkboxAction("quitar", "ch", 25, 13);
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
      $("#ch25").prop('checked', true);
      for (i = l = 0; l <= 23; i = ++l) {
        $("#mySp" + i).hide();
      }
      $("#mySp10").show();
      $("#mySp13").show();
      $("#mySp17").show();
      $("#mySp18").show();
      $("#mySp19").show();
      $("#mySp21").show();
      $("#mySp9").show();
      $("#mySp22").show();
      $("#mySp23").show();
      $("#mySp25").show();
      $("#contadorMR").html(this.contadorMR);
      $('#basic-modal-content').hide();
      this.selectedMRAccion = 0;
      $("#footer").hide();
      $("#timer").hide();
      ua = navigator.userAgent.toLowerCase();
      isAndroid = 0;
      isiPad = 0;
      isiPhone = 0;
      isAndroid = ua.indexOf('android') > -1;
      isiPad = navigator.userAgent.match(/iPad/i) !== null;
      if (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i)) {
        isiPhone = 1;
      }
      if (window.screen.availWidth === 320) {
        $("#controles1").css("zoom", "400%");
        $("#controles2").css("zoom", "400%");
        $("#controles3").css("zoom", "400%");
        $("#screen").css("zoom", "400%");
        $("#fastMode1").prop('checked', true);
        $("#fastMode1").attr("disabled", true);
      }
      document.body.style.zoom = this.myZoom;
      if (window.screen.availWidth < 1000 || isAndroid || isiPad || isiPhone) {
        this.esMobil = 1;
        $("#guia").hide();
        $("#footer").show();
        $("#margen-help").hide();
        $("#periY").val("5");
        this.restaYMR = 200;
        $('#myForm200 :input').css("zoom", "200%");

        /*
        			$("#navegar").css("font-size","200%")
        			$("#boton-comenzar").css("font-size","200%")
        			$("#boton-conf").css("font-size","200%")
        
        			#$("#screen").css("font-size","250%")
        
        			if window.screen.availWidth > 1000 or window.screen.availWidth > 1000
        				$("#screen").css("zoom","250%")
        				$("#screen").css("zoom","250%")
         */
        this.esMovil = 1;
      }
      if (window.screen.availWidth === 2560) {
        this.restaYMR = 0;
        this.myZoom = "400%";
      }
      for (xx = m = 0, ref = this.totalEjercicios; 0 <= ref ? m <= ref : m >= ref; xx = 0 <= ref ? ++m : --m) {
        eval("$(\"#a" + xx + "\").click(function(){window.juegoReaction.checkboxAction(\"quitar\", \"ch\", window.juegoReaction.totalEjercicios, " + xx + "); }) ");
      }
      for (xx = o = 0, ref1 = this.totalEjerciciosMemoria - 1; 0 <= ref1 ? o <= ref1 : o >= ref1; xx = 0 <= ref1 ? ++o : --o) {
        eval("$(\"#aa" + xx + "\").click(function(){window.juegoReaction.checkboxAction(\"quitar\", \"mm\", window.juegoReaction.totalEjercicios, " + xx + "); }) ");
      }
      $("#aab7").click((function(_this) {
        return function() {
          return _this.checkboxAction("quitar", "ch", window.juegoReaction.totalEjercicios, 7);
        };
      })(this));
      $("#all").click((function(_this) {
        return function() {
          return _this.checkboxAction("all", "ch", _this.totalEjercicios, 0);
        };
      })(this));
      $("#all3").click((function(_this) {
        return function() {
          return _this.checkboxAction("all", "ch", _this.totalEjercicios, 0);
        };
      })(this));
      $("#random").click((function(_this) {
        return function() {
          return _this.checkboxAction("random", "ch", _this.totalEjercicios, 0);
        };
      })(this));
      $("#random3").click((function(_this) {
        return function() {
          return _this.checkboxAction("random", "ch", _this.totalEjercicios, 10000);
        };
      })(this));
      $("#all1").click((function(_this) {
        return function() {
          return _this.checkboxAction("all", "mm", _this.totalEjercicios, 0);
        };
      })(this));
      $("#random1").click((function(_this) {
        return function() {
          return _this.checkboxAction("random", "mm", _this.totalEjercicios, 0);
        };
      })(this));
      $("#help").click((function(_this) {
        return function() {
          return $("#div-help").show();
        };
      })(this));
      this.totalPasadas = $("#cantPasadas").val();
      $("#div-configurar").hide();
      $("#hola").html("hola");
      $("#boton-conf").click((function(_this) {
        return function() {
          $("#screen").html("");
          $("#controlesMR1").hide();
          if ($("#div-configurar").is(':visible')) {
            location.hash = "#top";
            return $("#div-configurar").hide();
          } else {
            location.hash = "#configurar-anchor";
            return $("#div-configurar").show();
          }
        };
      })(this));
      $("#boton-conf-sumFlash").click((function(_this) {
        return function() {
          $("#screen").html("");
          $("#controlesMR1").hide();
          if ($("#div-configurar").is(':visible')) {
            $("#div-configurar").hide();
          } else {
            $("#div-configurar").show();
          }
          return location.hash = '#sum-flash-config';
        };
      })(this));
      $("#ok").html(this.aciertos);
      $("#no").html(this.errores);
      $("#pasadas").html(this.totalPasadas);
      $("#boton-comenzar").click((function(_this) {
        return function() {
          clearTimeout(_this.killTimeout);
          clearTimeout(_this.killTimeout1);
          $("#resultados-div").hide();
          $(".clear-result-btn-class").hide();
          if (!_this.estado) {
            $("#controlesMR").hide();
            $("#boton-comenzar").attr('value', '■');
            _this.jugadas = 0;
            _this.configurarEjercicios();
            $("#div-help").hide();
            $("#controles2").hide();
            $("#liveHelp1").html("");
            _this.bMRGo = 0;
            if (_this.senglarMindMode) {
              _this.timeInitSenglarMindMode = Date.now();
            }
            return _this.iniciar();
          } else {
            _this.bMRGo = 1;
            $("#controlesMR").show();
            if (!_this.preventHelp) {
              $("#div-help").show();
            }
            $("#pasadas").html($("#cantPasadas").val());
            $("#ok").html("0");
            $("#no").html("0");
            clearTimeout(_this.killTimeout);
            clearTimeout(_this.killTimeout1);
            clearInterval(_this.killTimeout5);
            $("#controles2").show();
            $("#timer").hide();
            $("#liveHelp").html("");
            $("#liveHelp1").html("");
            $("#boton-comenzar").attr('value', '▶');
            _this.estado = 0;
            return _this.cls();
          }
        };
      })(this));
      $("#btn-z-id").click((function(_this) {
        return function() {
          return _this.checkPosicion(true);
        };
      })(this));
      $("#btn-x-id").click((function(_this) {
        return function() {
          return _this.checkPosicion(false);
        };
      })(this));

      /*
      		$(document).keypress (e) =>
      			alert(e.which)
       */
      $(document).keypress((function(_this) {
        return function(e) {
          if (_this.ejercicioSeleccionado !== 10) {
            console.log(e.which);
            if (e.which === 122) {
              _this.checkPosicion(true);
            }
            if (e.which === 120) {
              _this.checkPosicion(false);
            }
            if (e.which === 99) {
              if (!$("#question-1").is(":visible")) {
                $("#question-1").show();
                console.log("mostrar");
                return;
              }
              $(".salida-logic").show();
              $("#texto-ayuda-1").hide();
              $("#question-1").hide();
            }
            if (e.which === 97 && _this.ejercicioSeleccionado === 12) {
              _seeQ();
            }
          }
          if (_this.ejercicioSeleccionado === 10) {
            if (e.which === 100 || e.which === 49) {
              _this.resultadosList = _this._tR + " = " + _this._tR1 + " your answer is " + (_this._tR2 === 0 ? "correct" : "Sunday") + "<br>" + _this.resultadosList;
              _this.checkPosicion(_this.teclaCalendario[0]);
            }
            if (e.which === 108 || e.which === 50) {
              _this.resultadosList = _this._tR + " = " + _this._tR1 + " your answer is " + (_this._tR2 === 1 ? "correct" : "Monday") + "<br>" + _this.resultadosList;
              _this.checkPosicion(_this.teclaCalendario[1]);
            }
            if (e.which === 109 || e.which === 51) {
              _this.resultadosList = _this._tR + " = " + _this._tR1 + " your answer is " + (_this._tR2 === 2 ? "correct" : "Tuesday") + "<br>" + _this.resultadosList;
              _this.checkPosicion(_this.teclaCalendario[2]);
            }
            if (e.which === 105 || e.which === 52) {
              _this.resultadosList = _this._tR + " = " + _this._tR1 + " your answer is " + (_this._tR2 === 3 ? "correct" : "Wednesday") + "<br>" + _this.resultadosList;
              _this.checkPosicion(_this.teclaCalendario[3]);
            }
            if (e.which === 106 || e.which === 53) {
              _this.resultadosList = _this._tR + " = " + _this._tR1 + " your answer is " + (_this._tR2 === 4 ? "correct" : "Thursday") + "<br>" + _this.resultadosList;
              _this.checkPosicion(_this.teclaCalendario[4]);
            }
            if (e.which === 118 || e.which === 54) {
              _this.resultadosList = _this._tR + " = " + _this._tR1 + " your answer is " + (_this._tR2 === 5 ? "correct" : "Friday") + "<br>" + _this.resultadosList;
              _this.checkPosicion(_this.teclaCalendario[5]);
            }
            if (e.which === 115 || e.which === 55) {
              _this.resultadosList = _this._tR + " = " + _this._tR1 + " your answer is " + (_this._tR2 === 6 ? "correct" : "Saturday") + "<br>" + _this.resultadosList;
              _this.checkPosicion(_this.teclaCalendario[6]);
            }
            localStorage.setItem("reultadosListLocalStorage", _this.resultadosList);
          }
          if (_this.ejercicioSeleccionado === 11) {
            if (e.which === 99) {
              _this.checkPosicion(_this.teclaNotas[0]);
            }
            if (e.which === 100) {
              _this.checkPosicion(_this.teclaNotas[1]);
            }
            if (e.which === 101) {
              _this.checkPosicion(_this.teclaNotas[2]);
            }
            if (e.which === 102) {
              _this.checkPosicion(_this.teclaNotas[3]);
            }
            if (e.which === 103) {
              _this.checkPosicion(_this.teclaNotas[4]);
            }
            if (e.which === 97) {
              _this.checkPosicion(_this.teclaNotas[5]);
            }
            if (e.which === 98) {
              _this.checkPosicion(_this.teclaNotas[6]);
            }
            return e.preventDefault();
          }
        };
      })(this));
    }

    motorReaction.prototype.iniciar = function() {
      var cantidadEjercicios, ejercicio, ejercicioAnterior, ir, l, ref, ref1, salir, zz;
      clearInterval(this.killTimeout7);
      this.nextQuestionDelay = 0;
      this.segundos = parseInt($("#tiempoPreparacion").val());
      document.body.style.zoom = this.myZoom;
      this.tipo = 0;
      $("#timer").hide();
      cantidadEjercicios = this.ejerciciosActivos.length;
      $("#pasadas").html(this.totalPasadas - this.jugadas);
      ejercicioAnterior = this.ejercicioSeleccionado;
      while (true) {
        while (true) {
          ejercicio = this.ejerciciosActivos[_.random(0, cantidadEjercicios - 1)];
          this.ejercicioSeleccionado = ejercicio;
          if (cantidadEjercicios >= 3 && ejercicioAnterior === ejercicio) {
            continue;
          }
          if (!(this.preventCalendar && ejercicio === 10)) {
            break;
          }
        }
        if (ejercicio === 7 && cantidadEjercicios !== 1) {
          ir = this.jugadas - parseInt($("#unoDeCada").val());
          salir = 1;
          for (zz = l = ref = this.jugadas, ref1 = ir > 0 ? ir : 0; ref <= ref1 ? l <= ref1 : l >= ref1; zz = ref <= ref1 ? ++l : --l) {
            if (this.ejerciciosAnteriores[zz] === 7) {
              salir = 0;
              continue;
            }
          }
          if (salir) {
            break;
          }
        } else {
          break;
        }
      }
      if (this.jugadas === 0 && this.tieneMemoria === 1) {
        this.memoria();
        this.ejercicioSeleccionado = 5;
        this.ejerciciosAnteriores[this.jugadas] = ejercicio;
        return;
      }
      this.ejerciciosAnteriores[this.jugadas] = ejercicio;
      if (this.bCantidadPasadasCalendar) {
        ejercicio = 10;
        this.ejercicioSeleccionado = ejercicio;
        this.calendario();
        this.contadorCantidadPasadasCalendar++;
        if (this.contadorCantidadPasadasCalendar === this.cantidadPasadasCalendar) {
          this.bCantidadPasadasCalendar = 0;
          this.preventCalendar = 1;
        }
        return;
      }
      this.bMemoria2 = 0;
      switch (ejercicio) {
        case 9:
          this.nextQuestionDelay = 2000;
          this.sumFlash();
          break;
        case 10:
          this.cantidadPasadasCalendar = parseInt($("#cantidadPasadasCalendar").val());
          this.contadorCantidadPasadasCalendar = 1;
          if (this.cantidadPasadasCalendar > 1) {
            this.bCantidadPasadasCalendar = 1;
          } else {
            this.bCantidadPasadasCalendar = 0;
          }
          this.calendario();
          break;
        case 13:
          setTimeout(((function(_this) {
            return function() {
              return _this.hectoc();
            };
          })(this)), 10);
          break;
        case 17:
          setTimeout(((function(_this) {
            return function() {
              return _this.suma();
            };
          })(this)), 10);
          break;
        case 18:
          setTimeout(((function(_this) {
            return function() {
              return _this.multiplicacion();
            };
          })(this)), 10);
          break;
        case 19:
          setTimeout(((function(_this) {
            return function() {
              return _this.suma100();
            };
          })(this)), 10);
          break;
        case 20:
          setTimeout(((function(_this) {
            return function() {
              return _this.resta();
            };
          })(this)), 10);
          break;
        case 21:
          setTimeout(((function(_this) {
            return function() {
              return _this.potencia(2);
            };
          })(this)), 10);
          break;
        case 22:
          setTimeout(((function(_this) {
            return function() {
              return _this.potencia(3);
            };
          })(this)), 10);
          break;
        case 23:
          setTimeout(((function(_this) {
            return function() {
              return _this.potencia(4);
            };
          })(this)), 10);
          break;
        case 24:
          setTimeout(((function(_this) {
            return function() {
              return _this.potencia(5);
            };
          })(this)), 10);
          break;
        case 25:
          setTimeout(((function(_this) {
            return function() {
              return _this.raiz();
            };
          })(this)), 10);
          break;
        default:
          alert();
      }
      return this.preventCalendar = 0;
    };

    motorReaction.prototype.cargarConfiguracionTotal = function() {
      var aTxt, aTxt1, dom, err, i, l, ref, txt, val;
      aTxt = this.configApp.split("\n");
      for (i = l = 0, ref = aTxt.length - 1; 0 <= ref ? l <= ref : l >= ref; i = 0 <= ref ? ++l : --l) {
        txt = aTxt[i];
        aTxt1 = txt.split("|");
        if (aTxt1[0] === "checkbox") {
          val = false;
          if (aTxt1[2] === "true") {
            val = true;
          }
          try {
            dom = "#" + aTxt1[1];
            $().prop('checked', val);
          } catch (_error) {
            err = _error;
            console.log("E");
          }
        } else {
          try {
            dom = "#" + aTxt1[1];
            $(dom).val(aTxt1[2]);
          } catch (_error) {
            err = _error;
            console.log("E");
          }
        }
      }
      window.arrCol = [$("#txt0").val(), $("#txt1").val(), $("#txt2").val(), $("#txt3").val(), $("#txt4").val(), $("#txt5").val(), $("#txt6").val(), $("#txt7").val(), $("#txt8").val(), $("#txt9").val()];
      return console.log("cargarconf");
    };

    motorReaction.prototype.abrirMR = function() {
      var arrayAux, i, j, k, l, m, o, p, ref, ref1, ref2, ref3, results, select;
      this.matrizMRConfiguracion = [];
      this.selectedMRAccion = parseInt($('#abrirMR').val());
      k = 0;
      for (i = l = 0, ref = this.todasConfiguracionesMR.length - 1; 0 <= ref ? l <= ref : l >= ref; i = 0 <= ref ? ++l : --l) {
        if (i === parseInt($('#abrirMR').val())) {
          $('#tipoMR').val(this.todasConfiguracionesMR[i][1]);
          $('#tiempoMR').val(this.todasConfiguracionesMR[i][2]);
          $('#digitosMR').val(this.todasConfiguracionesMR[i][3]);
          for (j = m = 0, ref1 = this.todasConfiguracionesMR[i][4].length - 1; 0 <= ref1 ? m <= ref1 : m >= ref1; j = 0 <= ref1 ? ++m : --m) {
            this.matrizMRConfiguracion[k] = [];
            arrayAux = [];
            arrayAux = this.todasConfiguracionesMR[i][4][j];
            this.matrizMRConfiguracion[k][0] = parseInt(arrayAux[0]);
            this.matrizMRConfiguracion[k][1] = parseInt(arrayAux[1]);
            this.matrizMRConfiguracion[k][2] = parseInt(arrayAux[2]);
            this.matrizMRConfiguracion[k][3] = 1;
            this.matrizMRConfiguracion[k][4] = 1;
            k++;
          }
          break;
        }
      }
      this.matrizSeleccionMR = [];
      $("#seleccionMR").val("");
      $("#siguienteMR").val("");
      $('#abrirMR').html('');
      for (i = o = 0, ref2 = this.todasConfiguracionesMR.length - 1; 0 <= ref2 ? o <= ref2 : o >= ref2; i = 0 <= ref2 ? ++o : --o) {
        select = "";
        if (i === this.selectedMRAccion) {
          select = "  selected";
        }
        $('#abrirMR').append("<option value=\"" + i + "\" " + select + ">" + this.todasConfiguracionesMR[i][0] + "</option>");
      }
      $('#abrirMR1').html('');
      results = [];
      for (i = p = 0, ref3 = this.todasConfiguracionesMR.length - 1; 0 <= ref3 ? p <= ref3 : p >= ref3; i = 0 <= ref3 ? ++p : --p) {
        select = "";
        if (i === 0) {
          select = "  selected";
        }
        results.push($('#abrirMR1').append("<option value=\"" + i + "\" " + select + ">" + this.todasConfiguracionesMR[i][0] + "</option>"));
      }
      return results;
    };

    motorReaction.prototype.checkboxAction = function(accion, name, cantidad, yy) {
      var _aR, l, m, o, ref, ref1, ref2, xx;
      if (accion === "all") {
        if (yy === 10000) {
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
        } else {
          for (xx = l = 0, ref = cantidad; 0 <= ref ? l <= ref : l >= ref; xx = 0 <= ref ? ++l : --l) {
            $("#" + name + xx).prop('checked', true);
          }
        }
      }
      if (accion === "random") {
        if (yy === 10000) {
          _aR = [true, false];
          $("#ch17").prop('checked', _aR[_.random(0, 1)]);
          $("#ch18").prop('checked', _aR[_.random(0, 1)]);
          $("#ch19").prop('checked', _aR[_.random(0, 1)]);
          $("#ch10").prop('checked', _aR[_.random(0, 1)]);
          $("#ch20").prop('checked', _aR[_.random(0, 1)]);
          $("#ch9").prop('checked', _aR[_.random(0, 1)]);
          $("#ch21").prop('checked', _aR[_.random(0, 1)]);
          $("#ch22").prop('checked', _aR[_.random(0, 1)]);
          $("#ch23").prop('checked', _aR[_.random(0, 1)]);
          $("#ch24").prop('checked', _aR[_.random(0, 1)]);
        } else {
          for (xx = m = 0, ref1 = cantidad; 0 <= ref1 ? m <= ref1 : m >= ref1; xx = 0 <= ref1 ? ++m : --m) {
            if (_.random(0, 1)) {
              $("#" + name + xx).prop('checked', true);
            } else {
              $("#" + name + xx).prop('checked', false);
            }
          }
        }
      }
      if (accion === "quitar") {
        for (xx = o = 0, ref2 = cantidad; 0 <= ref2 ? o <= ref2 : o >= ref2; xx = 0 <= ref2 ? ++o : --o) {
          if ($("#" + name + xx).is(':checked')) {
            $("#" + name + xx).prop('checked', false);
          }
        }
        if (yy === 21) {
          $("#" + name + "21").prop('checked', true);
          $("#" + name + "22").prop('checked', true);
          $("#" + name + "23").prop('checked', true);
          return $("#" + name + "24").prop('checked', true);
        } else {
          return $("#" + name + yy).prop('checked', true);
        }
      }
    };

    motorReaction.prototype.configurarEjercicios = function() {
      var auxEspacios4, l, m, o, p, ref, ref1, ref2, ref3, xx, yy;
      this.ojosPasadas = 0;
      this.memoriaJugadas = 0;
      this.articulos = window.articulos;
      this.sustantivos = window.sustantivos;
      this.adjetivos = window.adjetivos;
      if ($("#allReaction").is(':checked')) {
        switch (_.random(0, 3)) {
          case 0:
            this.memoriaM = window.memoriaM1;
            break;
          case 1:
            this.memoriaM = window.memoriaM2;
            break;
          case 2:
            this.memoriaM = window.memoriaM3;
            break;
          case 3:
            this.memoriaM = window.memoriaM4;
        }
      } else {
        this.memoriaM = window.memoriaM4;
      }
      this.alfabeto = window.alfabeto;
      this.ojosImagenes = window.ojosImagenes;
      this.ojosLeyendas = window.ojosLeyendas;
      auxEspacios4 = $("#espacios4").val();
      this.espacios = '<span style="display: inline-block; width: 280px;">&nbsp;</span>';
      this.espacios1 = '<span style="display: inline-block; width: 100px;">&nbsp;</span>';
      this.espacios5 = '<span style="display: inline-block; width: 20px;">&nbsp;</span>';
      this.espacios4 = "<span style=\"display: inline-block; width: " + auxEspacios4 + "px;\">&nbsp;</span>";
      this.estado = 1;
      this.totalPasadas = parseInt($("#cantPasadas").val());
      this.errores = 0;
      this.aciertos = 0;
      this.tieneMemoria = 0;
      this.tieneMemoria2 = 0;
      yy = 0;
      this.ejerciciosActivos = [];
      for (xx = l = 0, ref = this.totalEjercicios; 0 <= ref ? l <= ref : l >= ref; xx = 0 <= ref ? ++l : --l) {
        this.tiempoEjercicios[xx] = [];
        this.tiempoEjercicios[xx][0] = $("#t" + xx).val();
        this.tiempoEjercicios[xx][1] = $("#tt" + xx).val();
        if ($("#ch" + xx).is(':checked')) {
          this.ejerciciosActivos[yy] = xx;
          yy++;
          if (xx === 5) {
            this.tieneMemoria = 1;
          }
          if (xx === 7) {
            this.tieneMemoria2 = 1;
          }
        }
      }
      yy = 0;
      this.ejerciciosActivosMemoria = [];
      for (xx = m = 0, ref1 = this.totalEjerciciosMemoria - 1; 0 <= ref1 ? m <= ref1 : m >= ref1; xx = 0 <= ref1 ? ++m : --m) {
        if ($("#mm" + xx).is(':checked')) {
          this.ejerciciosActivosMemoria[yy] = xx;
          yy++;
        }
      }
      for (xx = o = 0, ref2 = this.totalEjercicios; 0 <= ref2 ? o <= ref2 : o >= ref2; xx = 0 <= ref2 ? ++o : --o) {
        this.erroresEjercicios[xx] = 0;
      }
      for (xx = p = 0, ref3 = this.totalEjercicios; 0 <= ref3 ? p <= ref3 : p >= ref3; xx = 0 <= ref3 ? ++p : --p) {
        this.resultados[xx] = [];
      }
      this.coloresResultados[0] = "rgba(0,0,180";
      this.leyendaResultados[0] = "logic";
      this.coloresResultados[1] = "rgba(255,118,0";
      this.leyendaResultados[1] = "math";
      this.coloresResultados[2] = "rgba(255,255,0";
      this.leyendaResultados[2] = "periferica";
      this.coloresResultados[3] = "rgba(255,0,0";
      this.leyendaResultados[3] = "bin";
      this.coloresResultados[4] = "rgba(0,154,37";
      this.leyendaResultados[4] = "sinestesia";
      this.coloresResultados[5] = "rgba(169,34,0";
      this.leyendaResultados[5] = "reaccion";
      this.coloresResultados[6] = "rgba(100,100,100";
      this.leyendaResultados[6] = "speed reading";
      this.coloresResultados[7] = "rgba(0,154,37";
      this.leyendaResultados[7] = "Memoria";
      this.coloresResultados[8] = "rgba(121,33,135";
      this.leyendaResultados[8] = "Ojos";
      this.coloresResultados[9] = "rgba(175,200,74";
      this.leyendaResultados[9] = "SumFlash";
      this.coloresResultados[10] = "rgba(255,152,213";
      this.leyendaResultados[10] = "Calendario";
      this.coloresResultados[11] = "rgba(12,75,100";
      this.leyendaResultados[11] = "ClaveMusica";
      this.coloresResultados[12] = "rgba(55,19,112";
      this.leyendaResultados[12] = "Silogismos";
      this.coloresResultados[13] = "rgba(175,155,50";
      this.leyendaResultados[13] = "Hectoc";
      this.coloresResultados[14] = "rgba(175,155,50";
      this.leyendaResultados[14] = "Laberinto";
      this.coloresResultados[15] = "rgba(175,155,50";
      this.leyendaResultados[15] = "MathLogic";
      this.coloresResultados[16] = "rgba(175,155,50";
      this.leyendaResultados[16] = "EmoLogic";
      this.coloresResultados[17] = "rgba(175,155,50";
      this.leyendaResultados[17] = "Suma10";
      this.coloresResultados[18] = "rgba(175,155,50";
      this.leyendaResultados[18] = "Multiplicación";
      this.coloresResultados[19] = "rgba(175,155,50";
      this.leyendaResultados[19] = "Suma100";
      this.coloresResultados[20] = "rgba(175,155,50";
      this.leyendaResultados[20] = "Resta";
      this.coloresResultados[20] = "rgba(175,155,50";
      this.leyendaResultados[21] = "Cuadrado 2 cifras";
      this.coloresResultados[20] = "rgba(175,155,50";
      this.leyendaResultados[22] = "Cuadrado 3 cifras";
      this.coloresResultados[20] = "rgba(175,155,50";
      this.leyendaResultados[23] = "Cuadrado 4 cifras";
      this.coloresResultados[20] = "rgba(175,155,50";
      this.leyendaResultados[24] = "Cuadrado 5 cifras";
      this.coloresResultados[20] = "rgba(175,155,50";
      return this.leyendaResultados[25] = "Raiz cuadrada";
    };

    motorReaction.prototype.hectoc = function() {
      var possible, txt;
      possible = "123456789";
      txt = possible.charAt(_.random(0, possible.length - 1)) + possible.charAt(_.random(0, possible.length - 1)) + possible.charAt(_.random(0, possible.length - 1)) + possible.charAt(_.random(0, possible.length - 1)) + possible.charAt(_.random(0, possible.length - 1)) + possible.charAt(_.random(0, possible.length - 1));
      this._tR = txt;
      this.resultado = true;
      this.t_ini = Date.now();
      this.tiempo();
      this.pausa = 0;
      $("#screen").html("<center>\n	There are 6 digits. Your task is to use them in the order they come and insert some mathematical symbols so that the result of the expression you manage to build is 100.\n	(with 123456 made 1+(2+3+4)*(5+6)=100)\n		 <br><br>\n\n	<b>" + txt + "</b>&nbsp;<input type=\"text\" style=\"width: 200px\" value=\"\" id=\"hectoc-text\"><input type=\"button\" name=\"ent-hec\" value=\"entrar\"  id=\"hectoc-btn\">\n</center>");
      $('#hectoc-text').focus();
      $('#hectoc-text').keypress((function(_this) {
        return function(event) {
          var ev;
          if (event.which === 13) {
            ev = $("#hectoc-text").val();
            if (parseInt(eval(ev)) === parseInt(100)) {
              return _this.checkPosicion(true);
            } else {
              return _this.checkPosicion(false);
            }
          }
        };
      })(this));
      $('#hectoc-btn').click((function(_this) {
        return function() {
          var ev;
          ev = $("#hectoc-text").val();
          _this.resultadosList = _this._tR + " se resolvio con " + ev + " su da " + (parseInt(eval(ev)) === 100 ? "correcta" : parseInt(eval(ev))) + "<br>" + _this.resultadosList;
          localStorage.setItem("reultadosListLocalStorage", _this.resultadosList);
          if (parseInt(eval(ev)) === parseInt(100)) {
            return _this.checkPosicion(true);
          } else {
            return _this.checkPosicion(false);
          }
        };
      })(this));
      return this.killTimeout = setTimeout(((function(_this) {
        return function() {
          $("#screen").html("<h4>&nbsp;</h4>");
          return _this.killTimeout1 = setTimeout((function() {
            return _this.checkPosicion(3);
          }), _this.tiempoEjercicios[13][1]);
        };
      })(this)), this.tiempoEjercicios[13][0]);
    };

    motorReaction.prototype.raiz = function(digitosPotencia) {
      var numeroRaiz, resultadoRaiz;
      numeroRaiz = _.random(100000, 999999);
      this._tR = numeroRaiz;
      resultadoRaiz = Math.pow(numeroRaiz, 0.5);
      console.log(resultadoRaiz);
      resultadoRaiz = roundToFive(resultadoRaiz);
      this._tR1 = resultadoRaiz;
      console.log(resultadoRaiz);
      this.resultado = true;
      this.pausa = 0;
      this.t_ini = Date.now();
      $("#screen").html("<center>\n	<h3>√" + numeroRaiz + "</h3>\n	<input type=\"text\" id=\"mySumFlashResult\" style=\"width: 45px\">,<input type=\"text\" id=\"mySumFlashResult1\" style=\"width: 45px\"><input type=\"button\" value=\"ok\" id=\"okSumFlash\">\n</center>");
      eval("\n$(\"#okSumFlash\").click(function(){\n	window.juegoReaction.resultadosList = \"√\" + window.juegoReaction._tR + \" = \" + $(\"#mySumFlashResult\").val()+\".\"+$(\"#mySumFlashResult1\").val() + \" the answer is \" + (($(\"#mySumFlashResult\").val()+\".\"+$(\"#mySumFlashResult1\").val()+\"\"==\"" + resultadoRaiz + "\")?\"correct\":\"as a matter of fact \" + window.juegoReaction._tR1) + \"<br>\" + window.juegoReaction.resultadosList ; \n	localStorage.setItem(\"reultadosListLocalStorage\", window.juegoReaction.resultadosList);\n\n	if($(\"#mySumFlashResult\").val()+\".\"+$(\"#mySumFlashResult1\").val()+\"\"==\"" + resultadoRaiz + "\"){\n		window.juegoReaction.checkPosicion(true);\n	}else{\n		window.juegoReaction.checkPosicion(false);\n	}\n	$(\"#screen\").html(\"\");\n\n});\n\n$(\"#mySumFlashResult1\").keypress(function(event) {\n	if ( event.which == 13 ) {\n		window.juegoReaction.resultadosList = \"√\" + window.juegoReaction._tR + \" = \" + $(\"#mySumFlashResult\").val()+\".\"+$(\"#mySumFlashResult1\").val() + \" the answer is \" + (($(\"#mySumFlashResult\").val()+\".\"+$(\"#mySumFlashResult1\").val()+\"\"==\"" + resultadoRaiz + "\")?\"correct\":\"as a matter of fact \" + window.juegoReaction._tR1) + \"<br>\" + window.juegoReaction.resultadosList ; \n		localStorage.setItem(\"reultadosListLocalStorage\", window.juegoReaction.resultadosList);\n\n		if($(\"#mySumFlashResult\").val()+\".\"+$(\"#mySumFlashResult1\").val()+\"\"==\"" + resultadoRaiz + "\"){\n		window.juegoReaction.checkPosicion(true);\n		}else{\n			window.juegoReaction.checkPosicion(false);\n		}\n	    \n	    $(\"#screen\").html(\"\");\n	 }\n\n	 setTimeout(function(){\n	 	if($(\"#mySumFlashResult\").val()+\".\"+$(\"#mySumFlashResult1\").val()+\"\"==\"" + resultadoRaiz + "\"){\n	 		window.juegoReaction.resultadosList = \"√\" + window.juegoReaction._tR + \" = \" + $(\"#mySumFlashResult\").val()+\".\"+$(\"#mySumFlashResult1\").val() + \" the answer is \" + (($(\"#mySumFlashResult\").val()+\".\"+$(\"#mySumFlashResult1\").val()+\"\"==\"" + resultadoRaiz + "\")?\"correct\":\"as a matter of fact \" + window.juegoReaction._tR1) + \"<br>\" + window.juegoReaction.resultadosList ; \n			localStorage.setItem(\"reultadosListLocalStorage\", window.juegoReaction.resultadosList);\n\n			window.juegoReaction.checkPosicion(true);\n			$(\"#screen\").html(\"\");\n\n		}\n\n	 },5);\n	 \n	console.log(\"1\");\n\n});\n\n$(\"#mySumFlashResult\").keypress(function(event) {\n\n	if($(\"#mySumFlashResult\").val().length==2){\n		setTimeout(function(){$(\"#mySumFlashResult1\").focus(); },5);\n	}\n\n});\n\n$(\"#mySumFlashResult\").focus();\n");
      return this.killTimeout1 = setTimeout(((function(_this) {
        return function() {
          return _this.checkPosicion(3);
        };
      })(this)), 300000);
    };

    motorReaction.prototype.potencia = function(digitosPotencia) {
      var numeroPotenciar, resultadoPotencia;
      if (digitosPotencia === 2) {
        numeroPotenciar = _.random(10, 99);
      }
      if (digitosPotencia === 3) {
        numeroPotenciar = _.random(100, 999);
      }
      if (digitosPotencia === 4) {
        numeroPotenciar = _.random(1000, 9999);
      }
      if (digitosPotencia === 5) {
        numeroPotenciar = _.random(10000, 99999);
      }
      resultadoPotencia = numeroPotenciar * numeroPotenciar;
      this._tR = numeroPotenciar;
      this._tR1 = resultadoPotencia;
      console.log(resultadoPotencia);
      this.resultado = true;
      this.pausa = 0;
      this.t_ini = Date.now();
      $("#screen").html("<center>\n	<h3>" + numeroPotenciar + "²</h3>\n	<input type=\"text\" id=\"mySumFlashResult\" style=\"width: 45px\"><input type=\"button\" value=\"ok\" id=\"okSumFlash\">\n</center>");
      eval("\n$(\"#okSumFlash\").click(function(){\n\n	if(window.juegoReaction.senglarMindMode)\n		return;\n\n	window.juegoReaction.resultadosList = window.juegoReaction._tR + \"² = \" + $(\"#mySumFlashResult\").val() + \" the answer is \" + ((parseInt($(\"#mySumFlashResult\").val())==window.juegoReaction._tR1 )?\"correct\":\"as a matter of fact \" + window.juegoReaction._tR1) + \"<br>\" + window.juegoReaction.resultadosList ; \n	localStorage.setItem(\"reultadosListLocalStorage\", window.juegoReaction.resultadosList);\n\n	if(parseInt($(\"#mySumFlashResult\").val())==" + resultadoPotencia + " ){\n		window.juegoReaction.checkPosicion(true);\n	}else{\n		window.juegoReaction.checkPosicion(false);\n	}\n	$(\"#screen\").html(\"\");\n\n	\n});\n\n$(\"#mySumFlashResult\").keypress(function(event) {\n	if ( event.which == 13 ) {\n\n		if(window.juegoReaction.senglarMindMode)\n			return;\n\n		window.juegoReaction.resultadosList = window.juegoReaction._tR + \"² = \" + $(\"#mySumFlashResult\").val() + \" the answer is \" + ((parseInt($(\"#mySumFlashResult\").val())==window.juegoReaction._tR1 )?\"correct\":\"as a matter of fact \" + window.juegoReaction._tR1) + \"<br>\" + window.juegoReaction.resultadosList ; \n		localStorage.setItem(\"reultadosListLocalStorage\", window.juegoReaction.resultadosList);\n\n		if(parseInt($(\"#mySumFlashResult\").val())==" + resultadoPotencia + "){\n		window.juegoReaction.checkPosicion(true);\n		}else{\n			window.juegoReaction.checkPosicion(false);\n		}\n	    \n	    $(\"#screen\").html(\"\");\n	 }\n\n	 setTimeout(function(){\n	 	if(parseInt($(\"#mySumFlashResult\").val())==" + resultadoPotencia + "){\n	 		window.juegoReaction.resultadosList = window.juegoReaction._tR + \"² = \" + $(\"#mySumFlashResult\").val() + \" the answer is \" + ((parseInt($(\"#mySumFlashResult\").val())==window.juegoReaction._tR1 )?\"correct\":\"as a matter of fact \" + window.juegoReaction._tR1) + \"<br>\" + window.juegoReaction.resultadosList ; \n			localStorage.setItem(\"reultadosListLocalStorage\", window.juegoReaction.resultadosList);\n\n			window.juegoReaction.checkPosicion(true);\n			$(\"#screen\").html(\"\");\n\n		}\n\n	 },5);\n	 \n	console.log(\"1\");\n\n});\n\n\n\n$(\"#mySumFlashResult\").focus();\n");
      return this.killTimeout1 = setTimeout(((function(_this) {
        return function() {
          return _this.checkPosicion(3);
        };
      })(this)), 3000000);
    };

    motorReaction.prototype.sumFlash = function() {
      var cantidad, elegido, maxSumFlash, minSumFlash, nuevo, sumFlashElegido;
      cantidad = $("#pasadasSumFlash").val();
      minSumFlash = parseInt($("#minSumFlash").val());
      maxSumFlash = parseInt($("#maxSumFlash").val());
      if (this.jugadasSumFlash === 0) {
        this.acumuladorSumFlash = 0;
        this.jugadasSumFlash = 0;
        elegido = -1;
        sumFlashElegido = elegido;
        this._tR = "";
      }
      if (this.jugadasSumFlash < cantidad) {
        while (true) {
          nuevo = _.random(minSumFlash, maxSumFlash);
          if (nuevo !== this.sumFlashElegido) {
            break;
          }
        }
        elegido = nuevo;
        this._tR += "+" + elegido;
        this.sumFlashElegido = elegido;
        this.acumuladorSumFlash += parseInt(elegido);
        this.jugadasSumFlash++;
        $("#screen").html("<br><center><h1 style=\"color: black; font-size: 300px;\">" + elegido + "</h1></center>");
        console.log(this.tiempoEjercicios[9][0]);
        return this.killTimeout = setTimeout(((function(_this) {
          return function() {
            return _this.sumFlash();
          };
        })(this)), this.tiempoEjercicios[9][0]);
      } else {

        /*
        			if _.random(0,1)
        				@resultado = true
        				mostrar = @acumuladorSumFlash
        			else
        				@resultado = false
        				mostrar = @acumuladorSumFlash + _.random(-10,10)
         */
        this.resultado = true;
        this.t_ini = Date.now();
        this.pausa = 0;
        this.jugadasSumFlash = 0;
        console.log(this.acumuladorSumFlash);
        $("#screen").html("<center>\n	<input type=\"text\" id=\"mySumFlashResult\" style=\"width: 45px\"><input type=\"button\" value=\"ok\" id=\"okSumFlash\">\n</center>");
        eval("\n$(\"#okSumFlash\").click(function(){\n\n	window.juegoReaction.resultadosList = window.juegoReaction._tR + \" = \" + window.juegoReaction.acumuladorSumFlash + \" your answer is \" + (parseInt($(\"#mySumFlashResult\").val())==parseInt(window.juegoReaction.acumuladorSumFlash)?\"correct\":$(\"#mySumFlashResult\").val()) + \"<br>\" + window.juegoReaction.resultadosList ; \n	localStorage.setItem(\"reultadosListLocalStorage\", window.juegoReaction.resultadosList);\n\n	if(parseInt($(\"#mySumFlashResult\").val())==parseInt(window.juegoReaction.acumuladorSumFlash)){\n		window.juegoReaction.checkPosicion(true);\n	}else{\n		window.juegoReaction.checkPosicion(false);\n	}\n	$(\"#screen\").html(\"\");\n\n			\n});\n\n$(\"#mySumFlashResult\").keypress(function(event) {\n	if ( event.which == 13 ) {\n		window.juegoReaction.resultadosList = window.juegoReaction._tR + \" = \" + window.juegoReaction.acumuladorSumFlash + \" your answer is \" + (parseInt($(\"#mySumFlashResult\").val())==parseInt(window.juegoReaction.acumuladorSumFlash)?\"correct\":$(\"#mySumFlashResult\").val()) + \"<br>\" + window.juegoReaction.resultadosList; \n		localStorage.setItem(\"reultadosListLocalStorage\", window.juegoReaction.resultadosList);\n\n		if(parseInt($(\"#mySumFlashResult\").val())==parseInt(window.juegoReaction.acumuladorSumFlash)){\n		window.juegoReaction.checkPosicion(true);\n		}else{\n			window.juegoReaction.checkPosicion(false);\n		}\n		    \n	    $(\"#screen\").html(\"\");\n	 }\n\n	 setTimeout(function(){\n	 	if(parseInt($(\"#mySumFlashResult\").val())==parseInt(window.juegoReaction.acumuladorSumFlash)){\n	 		window.juegoReaction.resultadosList = window.juegoReaction._tR + \" = \" + window.juegoReaction.acumuladorSumFlash + \" your answer is \" + (parseInt($(\"#mySumFlashResult\").val())==parseInt(window.juegoReaction.acumuladorSumFlash)?\"correct\":$(\"#mySumFlashResult\").val()) + \"<br>\" + window.juegoReaction.resultadosList; \n			localStorage.setItem(\"reultadosListLocalStorage\", window.juegoReaction.resultadosList);\n\n			window.juegoReaction.checkPosicion(true);\n			$(\"#screen\").html(\"\");		\n		}\n\n	 },5);\n	 \n	console.log(\"1\");\n\n});\n\n\n\n$(\"#mySumFlashResult\").focus();\n");
        return this.killTimeout1 = setTimeout(((function(_this) {
          return function() {
            return _this.checkPosicion(3);
          };
        })(this)), this.tiempoEjercicios[9][1]);
      }
    };

    motorReaction.prototype.wordToNumber = function(x) {
      if (window.bWtoN) {
        return this.wToN[x];
      } else {
        return x;
      }
    };

    motorReaction.prototype.multiplicacion = function() {
      var _r1, _r2, goFocusCheckbox, i, imprimir, l, m, o, p, ponerWToN, q, r, ref, ref1, ref2, ref3, rnd, signoImprimir, sinestesiaHtml, x;
      this.pausa = 0;
      imprimir = "<table border=\"1\" width=\"400\" style=\"border: 1px solid black; width: 400px;\">";
      this.tMulti = [];
      this.tMultiFila = [];
      this.resultado1 = 0;
      this.cMulti = n("cifrasMultiplicacion");
      goFocusCheckbox = 0;
      this.wToN = _.shuffle(window.palabras);
      ponerWToN = "<div id=\"listWords\" > ";
      for (i = l = 0; l <= 9; i = ++l) {
        ponerWToN += "<br> " + i + " " + this.wToN[i];
      }
      ponerWToN += "\"</div> <br> <a href=\"#\" onclick=\"element='#listWords'; if($(element).is(':visible')){  $(element).hide();  }else{ $(element).show(); } \">hide/show</a> <br> ";
      if (this.cMulti > 10 && !$("#multiSinestesia").is(':checked')) {
        imprimir += "<tr>";
        for (i = m = 0, ref = this.cMulti * 2 - 1; 0 <= ref ? m <= ref : m >= ref; i = 0 <= ref ? ++m : --m) {
          imprimir += "<td><center>" + (this.cMulti * 2 - i) + "</center></td>";
        }
        imprimir += "</tr>";
      }
      for (x = o = 0; o <= 2; x = ++o) {
        imprimir += "<tr>";
        this.tMulti[x] = [];
        this.tMultiFila[x] = "";
        for (i = p = 0, ref1 = this.cMulti * 2 - 1; 0 <= ref1 ? p <= ref1 : p >= ref1; i = 0 <= ref1 ? ++p : --p) {
          if (i > this.cMulti - 1 && x > 0) {
            rnd = _.random(1, 9);
            this.tMulti[x][i] = rnd;
            this.tMultiFila[x] += rnd.toString();
            imprimir += "<td class=\"columna" + i + " num" + this.tMulti[x][i] + " myColumna\"><center>" + (this.wordToNumber(this.tMulti[x][i])) + "</center></td> ";
          } else {
            signoImprimir = "";
            if (x === 2 && i === 0) {
              signoImprimir = "x";
            }
            if (x === 0 && i > this.cMulti - 1) {
              signoImprimir = "<input type=\"checkbox\" onclick=\"$('#campo" + goFocusCheckbox + "').focus();\"> ";
              goFocusCheckbox++;
            }
            imprimir += "<td class=\"columna" + i + "\"><center>" + signoImprimir + "</center></td> ";
          }
        }
        imprimir += "</tr>";
      }
      _r1 = BigInteger(this.tMultiFila[1]);
      _r2 = BigInteger(this.tMultiFila[2]);
      console.log("tMultiFila");
      console.log(this.tMultiFila[1]);
      console.log(this.tMultiFila[2]);
      this.resultado1 = BigInteger(_r1).multiply(_r2);
      console.log(this.resultado1.toString());
      this._tR = this.tMultiFila[1] + "*" + this.tMultiFila[2];
      if (this.resultado1.toString().length !== this.cMulti * 2) {
        this.multiplicacion();
        console.log("incorrect length");
        return;
      }
      imprimir += "<tr>";
      for (x = q = 0, ref2 = this.cMulti * 2 - 1; 0 <= ref2 ? q <= ref2 : q >= ref2; x = 0 <= ref2 ? ++q : --q) {
        imprimir += "<td class=\"columna" + i + "\"><input type=\"number\" value=\"\" id=\"campo" + x + "\" style=\"width: 38px;  text-align: center;\"></td>";
      }
      imprimir += "</tr>";
      imprimir += "</table>";
      sinestesiaHtml = "";
      if ($("#multiSinestesia").is(':checked')) {
        sinestesiaHtml = "<center><div id=\"output1\">\n<span class=\"num0-1\" style=\"color: rgb(0,0,180)\"><b>0</b></span>\n<span class=\"num1-1\" style=\"color: rgb(175,13,102)\"><b>1</b></span>\n<span class=\"num2-1\" style=\"color: rgb(146,248,70)\"><b>2</b></span>\n<span class=\"num3-1\" style=\"color: rgb(255,200,47)\"><b>3</b></span>\n<span class=\"num4-1\" style=\"color: rgb(255,118,0)\"><b>4</b></span>\n<span class=\"num5-1\" style=\"color: rgb(255,152,213)\"><b>5</b></span>\n<span class=\"num6-1\" style=\"color: rgb(235,235,222)\"><b>6</b></span>\n<span class=\"num7-1\" style=\"color: rgb(100,100,100)\"><b>7</b></span>\n<span class=\"num8-1\" style=\"color: rgb(255,255,0)\"><b>8</b></span>\n<span class=\"num9-1\" style=\"color: rgb(255,255,150)\"><b>9</b></span>			\n</div></center>\n<a href=\"#cm2\" onclick=\"$('#div-configurar').show();\">[customColors]</a>\n<br>\n";
      }
      if (!window.bWtoN) {
        ponerWToN = "";
      }
      $("#screen").html(sinestesiaHtml + "\n\n<center>\n	" + ponerWToN + "\n	<div id=\"multiplicacionScreen\">" + imprimir + "</div>\n	<br>\n	<input type=\"button\" value=\"enter\" id=\"enterMulti\">\n\n</center>\n\n");
      this.t_ini = Date.now();
      if (this.cMulti > 10) {
        $("#multiplicacionScreen").css("zoom", "0.8");
      }
      $(".columna" + (this.cMulti * 2 - 1)).css("background-color", "rgb(235,235,222)");
      $("#campo" + (this.cMulti * 2 - 1)).css("background-color", "rgb(235,235,222)");
      $("#campo" + (this.cMulti * 2 - 1)).focus();
      $("#enterMulti").click((function(_this) {
        return function() {
          var myL, myResult, r, ref3;
          myResult = "";
          for (i = r = 0, ref3 = _this.cMulti * 2 - 1; 0 <= ref3 ? r <= ref3 : r >= ref3; i = 0 <= ref3 ? ++r : --r) {
            myResult += $("#campo" + i).val();
          }
          console.log(">" + myResult);
          myL = (myResult + "").length;
          if (myL !== _this.cMulti * 2) {
            myResult = "0" + myResult;
          }
          _this.resultadosList = _this._tR + " = " + myResult + "(su valor)" + " the answer is " + (_this.resultado1.compare(myResult) === 0 ? "correct" : " as a matter of fact <br> =" + _this.resultado1.toString()) + "<br>" + _this.resultadosList;
          localStorage.setItem("reultadosListLocalStorage", _this.resultadosList);
          if (_this.resultado1.compare(myResult) === 0) {
            return _this.checkPosicion(true);
          } else {
            return _this.checkPosicion(false);
          }
        };
      })(this));
      for (x = r = 0, ref3 = this.cMulti * 2 - 1; 0 <= ref3 ? r <= ref3 : r >= ref3; x = 0 <= ref3 ? ++r : --r) {
        eval("$(\"#campo" + x + "\").click(function() {\n	\n	for(j=0;j<" + (this.cMulti * 2) + ";j++){\n\n		if( ! $(\"#multiSinestesia\").is(':checked') ){\n			$(\".columna\"+j).css(\"background-color\",\"white\");\n			$(\"#campo\"+j).css(\"background-color\",\"white\");\n		}\n		\n\n	}\n	if( ! $(\"#multiSinestesia\").is(':checked') ){\n		if( n(\"memoTime\") > 0)\n			return;\n 		$(\".columna" + x + "\").css(\"background-color\",\"rgb(235,235,222)\");\n 		$(\"#campo" + x + "\").css(\"background-color\",\"rgb(235,235,222)\");\n 	}\n 	\n\n});\n");
        eval("\n$(\"#campo" + x + "\").change(function() {\n\n	 myStr = \"" + (this.resultado1.toString()) + "\";\n	 //myStr.substring(" + x + ", " + (x + 1) + ");\n	 console.log(myStr);\n\n	if( parseInt($('#campo" + x + "').val()) != parseInt(myStr.substring(" + x + ", " + (x + 1) + ")) ){\n		//alert($('#campo" + x + "').val() + \"|\" + myStr.substring(" + x + ", " + (x + 1) + "));\n		//alert($(\"#campo" + x + "\").val());\n		$(\"#campo" + x + "\").css(\"background-color\",\"red\");\n		$('#campo" + x + "').focus();\n		$('#campo" + x + "').val(\"\");\n\n		setTimeout(function(){\n				if(" + x + ">0){\n					\n					$(\"#campo" + (x - 1) + "\").css(\"background-color\",\"white\");\n				\n					if( ! $(\"#multiSinestesia\").is(':checked') ){\n						$(\".columna" + (x - 1) + "\").css(\"background-color\",\"white\");\n						\n						if( n(\"memoTime\") > 0)\n							return;\n						$(\".columna" + x + "\").css(\"background-color\",\"rgb(235,235,222)\");\n						\n\n					}\n				\n\n				}\n				\n			},1);\n	\n\n	}else{\n\n\n		if (" + x + "!=0 ){\n		\n\n			for(j=0;j<" + (this.cMulti * 2) + ";j++){\n\n				if( ! $(\"#multiSinestesia\").is(':checked') ){\n					$(\".columna\"+j).css(\"background-color\",\"white\");\n					$(\"#campo\"+j).css(\"background-color\",\"white\");\n				}\n\n			}\n\n			$('#campo" + (x - 1) + "').focus();\n\n			if( ! $(\"#multiSinestesia\").is(':checked') ){\n				if( n(\"memoTime\") > 0)\n					return;\n				$(\".columna" + (x - 1) + "\").css(\"background-color\",\"rgb(235,235,222)\");\n			 	$(\"#campo" + (x - 1) + "\").css(\"background-color\",\"rgb(235,235,222)\");\n			}\n\n		}else{\n\n			myResult = \"\";\n\n			for(j=0;j<" + (this.cMulti * 2) + ";j++){\n				myResult += $(\"#campo\"+j).val();\n\n			}\n\n			if(parseInt(myResult) == parseInt(" + (this.resultado1.toString()) + ")){\n				window.juegoReaction.checkPosicion(true);\n			}else{\n				window.juegoReaction.checkPosicion(false);\n			}\n\n		}\n		if( $(\"#multiSinestesia\").is(':checked') ){\n			myCampoVal=parseInt($('#campo" + x + "').val());\n			\n			//arrCol=[\"rgb(0,0,180)\",\"rgb(175,13,102)\",\"rgb(146,248,70)\",\"rgb(255,200,47)\",\"rgb(255,118,0)\",\"rgb(255,152,213)\",\"rgb(235,235,222)\",\"rgb(100,100,100)\",\"rgb(255,255,0)\",\"rgb(255,255,150)\"];\n\n			$(\"#campo" + x + "\").css(\"background-color\",arrCol[myCampoVal]);\n			$(\"#campo" + x + "\").css(\"color\",arrCol[myCampoVal]);\n\n\n		}\n\n		\n	}\n\n\n  \n});\n\n$(\"#campo" + x + "\").keypress(function(event) {\n	if ( event.which == 13 ) {\n		myResult = \"\";\n\n		for(j=0;j<" + (this.cMulti * 2) + ";j++){\n			myResult += $(\"#campo\"+j).val();\n\n		}\n\n		window.juegoReaction.resultadosList = window.juegoReaction._tR + \" = \" + myResult + \"(su valor)\" + \" answer is \" + (  ( BigInteger(\"" + (this.resultado1.toString()) + "\").compare(myResult) == 0 ) ? \"correct\" : \" as a matter of fact <br> =\" + window.juegoReaction.resultado1.toString() ) + \"<br>\" + window.juegoReaction.resultadosList;\n		localStorage.setItem(\"reultadosListLocalStorage\", window.juegoReaction.resultadosList);\n\n		if( BigInteger(\"" + (this.resultado1.toString()) + "\").compare(myResult) == 0 ){\n			window.juegoReaction.checkPosicion(true);\n\n\n		}else{\n			window.juegoReaction.checkPosicion(false);\n	\n\n		}\n	    \n	 }\n	  //alert(event.wich || event.keyCode);\n\n	  \n\n	  		/*\n\n	 myStr = \"" + (this.resultado1.toString()) + "\";\n	 //myStr.substring(" + x + ", " + (x + 1) + ");\n\n	if( parseInt($('#campo" + x + "').val()) != parseInt(myStr.substring(" + x + ", " + (x + 1) + ")) ){\n		//alert($('#campo" + x + "').val() + \"|\" + myStr.substring(" + x + ", " + (x + 1) + "));\n		alert($(\"#campo" + x + "\").val());\n\n	}\n\n		*/\n\n	if (" + x + "!=0 ){\n		\n\n		for(j=0;j<" + (this.cMulti * 2) + ";j++){\n			if( ! $(\"#multiSinestesia\").is(':checked') ){\n				$(\".columna\"+j).css(\"background-color\",\"white\");\n				$(\"#campo\"+j).css(\"background-color\",\"white\");\n			}\n			\n\n		}\n\n		$('#campo" + (x - 1) + "').focus();\n		if( ! $(\"#multiSinestesia\").is(':checked') ){\n			if( n(\"memoTime\") > 0)\n				return;\n			$(\".columna" + (x - 1) + "\").css(\"background-color\",\"rgb(235,235,222)\");\n			$(\"#campo" + (x - 1) + "\").css(\"background-color\",\"rgb(235,235,222)\");\n		}\n	 \n\n	}\n  \n});");
      }
      if ($("#multiSinestesia").is(':checked')) {
        eval("\n$(\".num0-1\").css(\"color\",arrCol[0]);\n\n$(\".num1\").css(\"background-color\",arrCol[1]);\n			 		$(\".num1\").css(\"color\",arrCol[1]);\n			 		$(\".num1-1\").css(\"color\",arrCol[1]);\n\n			 		$(\".num2\").css(\"background-color\",arrCol[2]);\n			 		$(\".num2\").css(\"color\",arrCol[2]);\n			 		$(\".num2-1\").css(\"color\",arrCol[2]);\n\n			 		$(\".num3\").css(\"background-color\",arrCol[3]);\n			 		$(\".num3\").css(\"color\",arrCol[3]);\n			 		$(\".num3-1\").css(\"color\",arrCol[3]);\n\n			 		$(\".num4\").css(\"background-color\",arrCol[4]);\n			 		$(\".num4\").css(\"color\",arrCol[4]);\n			 		$(\".num4-1\").css(\"color\",arrCol[4]);\n\n			 		$(\".num5\").css(\"background-color\",arrCol[5]);\n			 		$(\".num5\").css(\"color\",arrCol[5]);\n			 		$(\".num5-1\").css(\"color\",arrCol[5]);\n\n			 		$(\".num6\").css(\"background-color\",arrCol[6]);\n			 		$(\".num6\").css(\"color\",arrCol[6]);\n			 		$(\".num6-1\").css(\"color\",arrCol[6]);\n\n			 		$(\".num7\").css(\"background-color\",arrCol[7]);\n			 		$(\".num7\").css(\"color\",arrCol[7]);\n			 		$(\".num7-1\").css(\"color\",arrCol[7]);\n\n			 		$(\".num8\").css(\"background-color\",arrCol[8]);\n			 		$(\".num8\").css(\"color\",arrCol[8]);\n			 		$(\".num8-1\").css(\"color\",arrCol[8]);\n\n			 		$(\".num9\").css(\"background-color\",arrCol[9]);\n			 		$(\".num9\").css(\"color\",arrCol[9]);\n			 		$(\".num9-1\").css(\"color\",arrCol[9]);\n			 		\n			 		/*		\n			 		$(\".num1\").css(\"background-color\",\"rgb(175,13,102)\");\n			 		$(\".num1\").css(\"color\",\"rgb(175,13,102)\");\n\n			 		$(\".num2\").css(\"background-color\",\"rgb(146,248,70)\");\n			 		$(\".num2\").css(\"color\",\"rgb(146,248,70)\");\n\n			 		$(\".num3\").css(\"background-color\",\"rgb(255,200,47)\");\n			 		$(\".num3\").css(\"color\",\"rgb(255,200,47)\");\n\n			 		$(\".num4\").css(\"background-color\",\"rgb(255,118,0)\");\n			 		$(\".num4\").css(\"color\",\"rgb(255,118,0)\");\n\n			 		$(\".num5\").css(\"background-color\",\"rgb(255,152,213)\");\n			 		$(\".num5\").css(\"color\",\"rgb(255,152,213)\");\n\n			 		$(\".num6\").css(\"background-color\",\"rgb(235,235,222)\");\n			 		$(\".num6\").css(\"color\",\"rgb(235,235,222)\");\n\n			 		$(\".num7\").css(\"background-color\",\"rgb(100,100,100)\");\n			 		$(\".num7\").css(\"color\",\"rgb(100,100,100)\");\n\n			 		$(\".num8\").css(\"background-color\",\"rgb(255,255,0)\");\n			 		$(\".num8\").css(\"color\",\"rgb(255,255,0)\");\n\n			 		$(\".num9\").css(\"background-color\",\"rgb(255,255,150)\");\n			 		$(\".num9\").css(\"color\",\"rgb(255,255,150)\");\n			 		*/\n");
      }
      if (n("memoTime") > 0) {
        this.killTimeout = setTimeout(((function(_this) {
          return function() {
            return eval("\n$(\".myColumna\").css(\"background-color\",\"white\");\n					 	$(\".myColumna\").css(\"color\",\"white\");\n");
          };
        })(this)), n("memoTime"));
      }
      this.resultado = true;
      return this.killTimeout = setTimeout(((function(_this) {
        return function() {
          $("#screen").html("<h4>&nbsp;</h4>");
          return _this.killTimeout1 = setTimeout((function() {
            return _this.checkPosicion(3);
          }), _this.tiempoEjercicios[18][1]);
        };
      })(this)), this.tiempoEjercicios[18][0]);
    };

    motorReaction.prototype.resta = function() {
      var goFocusCheckbox, i, imprimir, l, m, myL, o, p, ref, ref1, ref2, rnd, signoImprimir, x;
      while (true) {
        this.pausa = 0;
        this.tMulti = [];
        this.tMultiFila = [];
        this.resultado1 = 0;
        this.cMulti = 8;
        goFocusCheckbox = 0;
        imprimir = "<table border=\"1\" width=\"400\" style=\"border: 1px solid black; width: 400px;\">";
        for (x = l = 0; l <= 2; x = ++l) {
          imprimir += "<tr>";
          this.tMulti[x] = [];
          this.tMultiFila[x] = "";
          for (i = m = 0, ref = this.cMulti * 2 - 1; 0 <= ref ? m <= ref : m >= ref; i = 0 <= ref ? ++m : --m) {
            if (i > this.cMulti - 1 && x > 0) {
              rnd = _.random(1, 9);
              this.tMulti[x][i] = rnd;
              this.tMultiFila[x] += rnd.toString();
              imprimir += "<td class=\"columna" + i + "\"><center>" + this.tMulti[x][i] + "</center></td> ";
            } else {
              signoImprimir = "";
              if (x === 2 && i === 0) {
                signoImprimir = "-";
              }
              if (x === 0 && i > this.cMulti - 1) {
                signoImprimir = "<input type=\"checkbox\" onclick=\"$('#campo" + goFocusCheckbox + "').focus();\"> ";
                goFocusCheckbox++;
              }
              imprimir += "<td class=\"columna" + i + "\"><center>" + signoImprimir + "</center></td> ";
            }
          }
          imprimir += "</tr>";
        }
        console.log(this.tMultiFila[1] + "-" + this.tMultiFila[2]);
        this.resultado1 = parseInt(this.tMultiFila[1]) - parseInt(this.tMultiFila[2]);
        this._tR = "<br><br>" + this.tMultiFila[1] + "-" + this.tMultiFila[2] + "<br>";
        if (this.resultado1 > 0) {
          break;
        }
      }
      myL = (this.resultado1 + "").length;
      console.log(this.resultado1);
      imprimir += "<tr>";
      for (x = o = 0, ref1 = this.cMulti * 2 - 1; 0 <= ref1 ? o <= ref1 : o >= ref1; x = 0 <= ref1 ? ++o : --o) {
        imprimir += "<td class=\"columna" + i + "\"><input type=\"number\" value=\"\" id=\"campo" + x + "\" style=\"width: 38px;  text-align: center;\"></td>";
      }
      imprimir += "</tr>";
      imprimir += "</table>";
      $("#screen").html("\n<center>\n	" + imprimir + "\n	<br>\n	<input type=\"button\" value=\"enter\" id=\"enterMulti\">\n\n</center>\n\n");
      this.t_ini = Date.now();
      $(".columna" + (this.cMulti * 2 - 1)).css("background-color", "rgb(235,235,222)");
      $("#campo" + (this.cMulti * 2 - 1)).css("background-color", "rgb(235,235,222)");
      $("#campo" + (this.cMulti * 2 - 1)).focus();
      $("#enterMulti").click((function(_this) {
        return function() {
          var myResult, p, ref2;
          myResult = "";
          for (i = p = 0, ref2 = _this.cMulti * 2 - 1; 0 <= ref2 ? p <= ref2 : p >= ref2; i = 0 <= ref2 ? ++p : --p) {
            myResult += $("#campo" + i).val();
          }
          console.log(">" + myResult);
          _this.resultadosList = _this._tR + " = " + myResult + "(your value)" + " the answer is " + (parseInt(myResult) === parseInt(_this.resultado1) || -parseInt(myResult) === parseInt(_this.resultado1) ? "correct" : " as a matter of fact <br> =" + _this.resultado1) + "<br>" + _this.resultadosList;
          localStorage.setItem("reultadosListLocalStorage", _this.resultadosList);
          if (parseInt(myResult) === parseInt(_this.resultado1) || -parseInt(myResult) === parseInt(_this.resultado1)) {
            return _this.checkPosicion(true);
          } else {
            return _this.checkPosicion(false);
          }
        };
      })(this));
      for (x = p = 0, ref2 = this.cMulti * 2 - 1; 0 <= ref2 ? p <= ref2 : p >= ref2; x = 0 <= ref2 ? ++p : --p) {
        eval("$(\"#campo" + x + "\").click(function() {\n	\n	for(j=0;j<" + (this.cMulti * 2) + ";j++){\n		$(\".columna\"+j).css(\"background-color\",\"white\");\n		$(\"#campo\"+j).css(\"background-color\",\"white\");\n\n	}\n 	$(\".columna" + x + "\").css(\"background-color\",\"rgb(235,235,222)\");\n 	$(\"#campo" + x + "\").css(\"background-color\",\"rgb(235,235,222)\");\n});\n");
        eval("\n$(\"#campo" + x + "\").change(function() {\n\n	/*\n\n	 myStr = \"" + this.resultado1 + "\";\n	 //myStr.substring(" + x + ", " + (x + 1) + ");\n\n	if( parseInt($('#campo" + x + "').val()) != parseInt(myStr.substring(" + x + ", " + (x + 1) + ")) ){\n		//alert($('#campo" + x + "').val() + \"|\" + myStr.substring(" + x + ", " + (x + 1) + "));\n		//alert($(\"#campo" + x + "\").val());\n		$(\"#campo" + x + "\").css(\"background-color\",\"red\");\n		$('#campo" + x + "').focus();\n		$('#campo" + x + "').val(\"\");\n\n	}else{\n\n		\n\n		if (" + x + "!=0 ){\n		\n\n			for(j=0;j<" + (this.cMulti * 2) + ";j++){\n				$(\".columna\"+j).css(\"background-color\",\"white\");\n				$(\"#campo\"+j).css(\"background-color\",\"white\");\n\n			}\n\n			$('#campo" + (x - 1) + "').focus();\n			$(\".columna" + (x - 1) + "\").css(\"background-color\",\"rgb(235,235,222)\");\n		 	$(\"#campo" + (x - 1) + "\").css(\"background-color\",\"rgb(235,235,222)\");\n\n		}else{\n\n			myResult = \"\";\n\n			for(j=0;j<" + (this.cMulti * 2) + ";j++){\n				myResult += $(\"#campo\"+j).val();\n\n			}\n\n			if(parseInt(myResult) == " + this.resultado1 + "){\n				window.juegoReaction.checkPosicion(true);\n\n\n			}else{\n				window.juegoReaction.checkPosicion(false);\n		\n\n			}\n\n\n		}\n\n		\n	}*/\n  \n});\n\n$(\"#campo" + x + "\").keypress(function(event) {\n	if ( event.which == 13 ) {\n		myResult = \"\";\n\n		for(j=0;j<" + (this.cMulti * 2) + ";j++){\n			myResult += $(\"#campo\"+j).val();\n\n		}\n\n		window.juegoReaction.resultadosList = window.juegoReaction._tR + \" = \" + myResult + \"(your value)\" + \" the answer is \" + ( (parseInt(myResult) == parseInt(\"" + this.resultado1 + "\") || -parseInt(myResult) == parseInt(\"" + this.resultado1 + "\")) ? \"correct\" : \" as a matter of fact <br> =\" + window.juegoReaction.resultado1 ) + \"<br>\" + window.juegoReaction.resultadosList;\n		localStorage.setItem(\"reultadosListLocalStorage\", window.juegoReaction.resultadosList);\n\n		if(parseInt(myResult) == parseInt(\"" + this.resultado1 + "\") || -parseInt(myResult) == parseInt(\"" + this.resultado1 + "\")){\n			window.juegoReaction.checkPosicion(true);\n\n\n		}else{\n			window.juegoReaction.checkPosicion(false);\n	\n\n		}\n	    \n	 }\n	  //alert(event.wich || event.keyCode);\n\n	  \n\n	  		/*\n\n	 myStr = \"" + this.resultado1 + "\";\n	 //myStr.substring(" + x + ", " + (x + 1) + ");\n\n	if( parseInt($('#campo" + x + "').val()) != parseInt(myStr.substring(" + x + ", " + (x + 1) + ")) ){\n		//alert($('#campo" + x + "').val() + \"|\" + myStr.substring(" + x + ", " + (x + 1) + "));\n		alert($(\"#campo" + x + "\").val());\n\n	}\n\n		*/\n\n	if (" + x + "!=0 ){\n		\n\n		for(j=0;j<" + (this.cMulti * 2) + ";j++){\n			$(\".columna\"+j).css(\"background-color\",\"white\");\n			$(\"#campo\"+j).css(\"background-color\",\"white\");\n\n		}\n\n		$('#campo" + (x - 1) + "').focus();\n		$(\".columna" + (x - 1) + "\").css(\"background-color\",\"rgb(235,235,222)\");\n	 	$(\"#campo" + (x - 1) + "\").css(\"background-color\",\"rgb(235,235,222)\");\n\n	}\n  \n});");
      }
      this.resultado = true;
      return this.killTimeout = setTimeout(((function(_this) {
        return function() {
          $("#screen").html("<h4>&nbsp;</h4>");
          return _this.killTimeout1 = setTimeout((function() {
            return _this.checkPosicion(3);
          }), _this.tiempoEjercicios[18][1]);
        };
      })(this)), this.tiempoEjercicios[18][0]);
    };

    motorReaction.prototype.suma100 = function() {
      var i, imprimir, l, m, rnd, totalSuma, x;
      this.pausa = 0;
      imprimir = "<table border=\"1\" width=\"400\" style=\"border: 1px solid black; width: 400px;\" id=\"operation-table\">";
      this.tSuma = [];
      this.tSumaFila = [];
      this.resultado1 = 0;
      totalSuma = 0;
      for (x = l = 0; l <= 9; x = ++l) {
        imprimir += "<tr>";
        this.tSuma[x] = [];
        this.tSumaFila[x] = "";
        for (i = m = 0; m <= 9; i = ++m) {
          rnd = _.random(1, 9);
          totalSuma += rnd;
          this.tSuma[x][i] = rnd;
          this.tSumaFila[x] += rnd.toString();
          imprimir += "<td class=\"columna" + i + "\"><center>" + this.tSuma[x][i] + "</center></td> ";
        }
        imprimir += "</tr>";
      }
      this.resultado1 = totalSuma;
      console.log(this.resultado1);
      imprimir += "<tr>";
      imprimir += "<td class=\"columna" + i + "\" colspan=\"10\"><center><input type=\"number\" value=\"\" id=\"resultadoSuma\" style=\"width: 38px;  text-align: center;\"></center></td>";
      imprimir += "</tr>";
      imprimir += "</table>";
      $("#screen").html("\n<center>\n	" + imprimir + "\n	<br>\n	<input type=\"button\" value=\"enter\" id=\"enterSuma\">\n\n</center>\n\n");
      if (this.esMobil) {
        $('#operation-table').css("zoom", "80%");
        console.log("zoom table changed");
      }
      this.t_ini = Date.now();
      $(".columna10").css("background-color", "rgb(235,235,222)");
      $("#campo10").css("background-color", "rgb(235,235,222)");
      $('#campo10').focus();
      $("#enterSuma").click((function(_this) {
        return function() {
          var myResult;
          myResult = "";
          myResult = $("#resultadoSuma").val();
          console.log(">" + myResult);
          if (parseInt(myResult) === _this.resultado1) {
            return _this.checkPosicion(true);
          } else {
            return _this.checkPosicion(false);
          }
        };
      })(this));
      eval("\n$(\"#resultadoSuma\").keypress(function(event) {\n	if ( event.which == 13 ) {\n		myResult = \"\";\n	\n		myResult += $(\"#resultadoSuma\").val();\n\n		if(parseInt(myResult) == " + this.resultado1 + "){\n			window.juegoReaction.checkPosicion(true);\n		}else{\n			window.juegoReaction.checkPosicion(false);\n		}\n	    \n	 }\n	  //alert(event.wich || event.keyCode);\n  \n});\n\n$('#resultadoSuma').focus();");
      this.resultado = true;
      return this.killTimeout = setTimeout(((function(_this) {
        return function() {
          $("#screen").html("<h4>&nbsp;</h4>");
          return _this.killTimeout1 = setTimeout((function() {
            return _this.checkPosicion(3);
          }), _this.tiempoEjercicios[17][1]);
        };
      })(this)), this.tiempoEjercicios[17][0]);
    };

    motorReaction.prototype.suma = function() {
      var i, imprimir, l, m, o, p, rnd, signoImprimir, x;
      this.pausa = 0;
      imprimir = "<table border=\"1\" width=\"400\" style=\"border: 1px solid black; width: 400px;\" id=\"operation-table\">";
      this.tSuma = [];
      this.tSumaFila = [];
      this.resultado1 = 0;
      this._tR = "<br>";
      for (x = l = 0; l <= 9; x = ++l) {
        imprimir += "<tr>";
        this.tSuma[x] = [];
        this.tSumaFila[x] = "";
        for (i = m = 0; m <= 10; i = ++m) {
          if (i !== 0) {
            rnd = _.random(1, 9);
            this.tSuma[x][i] = rnd;
            this.tSumaFila[x] += rnd.toString();
            imprimir += "<td class=\"columna" + i + "\"><center>" + this.tSuma[x][i] + "</center></td> ";
          } else {
            signoImprimir = "";
            if (x === 9) {
              signoImprimir = "+";
            }
            imprimir += "<td class=\"columna" + i + "\"><center>" + signoImprimir + "</center></td> ";
          }
        }
        imprimir += "</tr>";
        this._tR += "+" + parseInt(this.tSumaFila[x]) + "<br>";
        this.resultado1 += parseInt(this.tSumaFila[x]);
      }
      console.log(this.resultado1);
      this._tR1 = this.resultado1;
      imprimir += "<tr>";
      for (x = o = 0; o <= 10; x = ++o) {
        imprimir += "<td class=\"columna" + i + "\"><input type=\"number\" value=\"\" id=\"campo" + x + "\" style=\"width: 38px;  text-align: center;\"></td>";
      }
      imprimir += "</tr>";
      imprimir += "</table>";
      $("#screen").html("\n<center>\n	" + imprimir + "\n	<br>\n	<input type=\"button\" value=\"enter\" id=\"enterSuma\">\n\n</center>\n\n");
      if (this.esMobil) {
        $('#operation-table').css("zoom", "80%");
        console.log("zoom table changed");
      }
      this.t_ini = Date.now();
      $(".columna10").css("background-color", "rgb(235,235,222)");
      $("#campo10").css("background-color", "rgb(235,235,222)");
      $('#campo10').focus();
      $("#enterSuma").click((function(_this) {
        return function() {
          var myResult, p;
          myResult = "";
          for (i = p = 0; p <= 10; i = ++p) {
            myResult += $("#campo" + i).val();
          }
          console.log(">" + myResult);
          _this.resultadosList = _this._tR + " = " + myResult + "(your value)" + " the answer is " + (parseInt(myResult) === _this.resultado1 ? "correct" : " as a matter of fact <br> =" + _this.resultado1) + "<br>" + _this.resultadosList;
          localStorage.setItem("reultadosListLocalStorage", _this.resultadosList);
          if (parseInt(myResult) === _this.resultado1) {
            return _this.checkPosicion(true);
          } else {
            return _this.checkPosicion(false);
          }
        };
      })(this));
      for (x = p = 0; p <= 10; x = ++p) {
        eval("$(\"#campo" + x + "\").click(function() {\n	\n	for(j=0;j<11;j++){\n		$(\".columna\"+j).css(\"background-color\",\"white\");\n		$(\"#campo\"+j).css(\"background-color\",\"white\");\n\n	}\n 	$(\".columna" + x + "\").css(\"background-color\",\"rgb(235,235,222)\");\n 	$(\"#campo" + x + "\").css(\"background-color\",\"rgb(235,235,222)\");\n});\n");
        eval("\n$(\"#campo" + x + "\").keypress(function(event) {\n	if ( event.which == 13 ) {\n		myResult = \"\";\n\n		for(j=0;j<11;j++){\n			myResult += $(\"#campo\"+j).val();\n\n		}\n\n\n		window.juegoReaction.resultadosList = window.juegoReaction._tR + \" = \" + myResult + \"(your value)\" + \" the answer is \" + ( parseInt(myResult) == window.juegoReaction.resultado1 ? \"correct\" : \" as a matter of fact <br> =\" + window.juegoReaction.resultado1 ) + \"<br>\" + window.juegoReaction.resultadosList;\n		localStorage.setItem(\"reultadosListLocalStorage\", window.juegoReaction.resultadosList);\n\n		if(parseInt(myResult) == " + this.resultado1 + "){\n			window.juegoReaction.checkPosicion(true);\n\n\n		}else{\n			window.juegoReaction.checkPosicion(false);\n	\n\n		}\n	    \n	 }\n	  //alert(event.wich || event.keyCode);\n\n	if (" + x + "!=0 ){\n		\n\n		for(j=0;j<11;j++){\n			$(\".columna\"+j).css(\"background-color\",\"white\");\n			$(\"#campo\"+j).css(\"background-color\",\"white\");\n\n		}\n		setTimeout(function(){\n			$('#campo" + (x - 1) + "').focus();\n			$(\".columna" + (x - 1) + "\").css(\"background-color\",\"rgb(235,235,222)\");\n	 		$(\"#campo" + (x - 1) + "\").css(\"background-color\",\"rgb(235,235,222)\");\n\n\n		},10); \n		\n\n	}\n  \n});\n");
      }
      this.resultado = true;
      return this.killTimeout = setTimeout(((function(_this) {
        return function() {
          $("#screen").html("<h4>&nbsp;</h4>");
          return _this.killTimeout1 = setTimeout((function() {
            return _this.checkPosicion(3);
          }), _this.tiempoEjercicios[17][1]);
        };
      })(this)), this.tiempoEjercicios[17][0]);
    };

    motorReaction.prototype.randomDate = function(start, end) {
      return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    };

    motorReaction.prototype.leapYear = function(year) {
      return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
    };

    motorReaction.prototype.calendario = function() {
      var bis, control, date, day, fullYear, l, month, myDate, queDia, xx, year;
      myDate = this.randomDate(new Date(1900, 0, 1), new Date(2099, 0, 1));
      month = myDate.getMonth();
      fullYear = myDate.getFullYear();
      day = myDate.getDay();
      date = myDate.getDate();
      year = myDate.getYear();
      this.resultado = true;
      this.pausa = 0;
      bis = "no";
      if (this.leapYear(fullYear)) {
        bis = "si";
      }
      for (xx = l = 0; l <= 6; xx = ++l) {
        this.teclaCalendario[xx] = false;
      }
      this.teclaCalendario[day] = true;
      queDia = "";
      switch (parseInt(day)) {
        case 0:
          queDia = "domingo";
          break;
        case 1:
          queDia = "lunes";
          break;
        case 2:
          queDia = "martes";
          break;
        case 3:
          queDia = "miércoles";
          break;
        case 4:
          queDia = "jueves";
          break;
        case 5:
          queDia = "viernes";
          break;
        case 6:
          queDia = "sabado";
      }
      this._tR2 = parseInt(day);
      this._tR = date + " - " + window.MONTH[month][1] + " - " + fullYear;
      this._tR1 = queDia;
      $("#screen").html("<h3>" + date + " - " + window.MONTH[month][1] + " - " + fullYear + "</h3>");
      control = "";
      if (this.esMovil) {
        control = "<input type=\"button\" name=\"bb1\" value=\"Domingo\" id=\"btn-dom\">\n<input type=\"button\" name=\"bb2\" value=\"Lunes\" id=\"btn-lun\">\n<input type=\"button\" name=\"bb3\" value=\"Martes\" id=\"btn-mar\">\n<input type=\"button\" name=\"bb4\" value=\"Miercoles\" id=\"btn-mie\">\n<input type=\"button\" name=\"bb5\" value=\"Jueves\" id=\"btn-jue\">\n<input type=\"button\" name=\"bb6\" value=\"Viernes\" id=\"btn-vie\">\n<input type=\"button\" name=\"bb7\" value=\"Sabado\" id=\"btn-sab\">\n";
      }
      if ($("#helpMode").is(':checked') && $("#calendarHelp").is(':checked')) {
        $("#liveHelp1").html("<br>\nCodigo a&ntilde;o : " + window.YEAR[year][1] + "  <br>\nBisiesto : " + bis + " <br>\nCodigo mes : " + window.MONTH[month][0] + " <br>\n" + control + "\n");
      }
      if (this.esMovil) {
        $("#btn-dom").click((function(_this) {
          return function() {
            _this.resultadosList = _this._tR + " = " + _this._tR1 + " your answer is " + (_this._tR2 === 0 ? "correct" : "Sunday") + "<br>" + _this.resultadosList;
            localStorage.setItem("reultadosListLocalStorage", _this.resultadosList);
            return _this.checkPosicion(_this.teclaCalendario[0]);
          };
        })(this));
        $("#btn-lun").click((function(_this) {
          return function() {
            _this.resultadosList = _this._tR + " = " + _this._tR1 + " your answer is " + (_this._tR2 === 1 ? "correct" : "Monday") + "<br>" + _this.resultadosList;
            localStorage.setItem("reultadosListLocalStorage", _this.resultadosList);
            return _this.checkPosicion(_this.teclaCalendario[1]);
          };
        })(this));
        $("#btn-mar").click((function(_this) {
          return function() {
            _this.resultadosList = _this._tR + " = " + _this._tR1 + " your answer is " + (_this._tR2 === 2 ? "correct" : "Tuesday") + "<br>" + _this.resultadosList;
            localStorage.setItem("reultadosListLocalStorage", _this.resultadosList);
            return _this.checkPosicion(_this.teclaCalendario[2]);
          };
        })(this));
        $("#btn-mie").click((function(_this) {
          return function() {
            _this.resultadosList = _this._tR + " = " + _this._tR1 + " your answer is " + (_this._tR2 === 3 ? "correct" : "Wednesday") + "<br>" + _this.resultadosList;
            localStorage.setItem("reultadosListLocalStorage", _this.resultadosList);
            return _this.checkPosicion(_this.teclaCalendario[3]);
          };
        })(this));
        $("#btn-jue").click((function(_this) {
          return function() {
            _this.resultadosList = _this._tR + " = " + _this._tR1 + " your answer is " + (_this._tR2 === 4 ? "correct" : "Thursday") + "<br>" + _this.resultadosList;
            localStorage.setItem("reultadosListLocalStorage", _this.resultadosList);
            return _this.checkPosicion(_this.teclaCalendario[4]);
          };
        })(this));
        $("#btn-vie").click((function(_this) {
          return function() {
            _this.resultadosList = _this._tR + " = " + _this._tR1 + " your answer is " + (_this._tR2 === 5 ? "correct" : "Friday") + "<br>" + _this.resultadosList;
            localStorage.setItem("reultadosListLocalStorage", _this.resultadosList);
            return _this.checkPosicion(_this.teclaCalendario[5]);
          };
        })(this));
        $("#btn-sab").click((function(_this) {
          return function() {
            _this.resultadosList = _this._tR + " = " + _this._tR1 + " your answer is " + (_this._tR2 === 6 ? "correct" : "Saturday") + "<br>" + _this.resultadosList;
            localStorage.setItem("reultadosListLocalStorage", _this.resultadosList);
            return _this.checkPosicion(_this.teclaCalendario[6]);
          };
        })(this));
      }
      this.t_ini = Date.now();
      this.tiempo();
      return this.killTimeout = setTimeout(((function(_this) {
        return function() {
          $("#screen").html("<h4>&nbsp;</h4>");
          return _this.killTimeout1 = setTimeout((function() {
            return _this.checkPosicion(3);
          }), _this.tiempoEjercicios[10][1]);
        };
      })(this)), this.tiempoEjercicios[10][0]);
    };

    motorReaction.prototype.guardarResultado = function() {
      var l, ref, xx;
      for (xx = l = 0, ref = this.totalEjercicios; 0 <= ref ? l <= ref : l >= ref; xx = 0 <= ref ? ++l : --l) {
        this.resultados[xx][this.jugadas] = null;
      }
      if (this.tieneMemoria && this.jugadas === 0) {
        return;
      }
      if (this.ejercicioSeleccionado === 3) {
        return;
      }
      return this.resultados[this.ejercicioSeleccionado][this.jugadas] = this.t_dif;
    };

    motorReaction.prototype.dibujarGrafico = function() {
      var color, continuar, data, l, label, labels, lineChartData, m, myDataset, o, p, ref, ref1, ref2, ref3, xx, yy, zz;
      labels = "";
      lineChartData = "";
      for (xx = l = 0, ref = this.totalPasadas - 1; 0 <= ref ? l <= ref : l >= ref; xx = 0 <= ref ? ++l : --l) {
        labels += "\"" + (xx + 1) + "\"";
        if (xx < this.totalPasadas - 1) {
          labels += ",";
        }
      }
      myDataset = "";
      for (xx = m = 0, ref1 = this.totalEjercicios; 0 <= ref1 ? m <= ref1 : m >= ref1; xx = 0 <= ref1 ? ++m : --m) {
        label = this.leyendaResultados[xx];
        color = this.coloresResultados[xx];
        data = "";
        continuar = 1;
        for (yy = o = 0, ref2 = this.totalPasadas - 1; 0 <= ref2 ? o <= ref2 : o >= ref2; yy = 0 <= ref2 ? ++o : --o) {
          if (this.resultados[xx][yy] !== null) {
            continuar = 0;
          }
        }
        if (continuar) {
          continue;
        }
        for (zz = p = 0, ref3 = this.totalPasadas - 1; 0 <= ref3 ? p <= ref3 : p >= ref3; zz = 0 <= ref3 ? ++p : --p) {
          data += this.resultados[xx][zz];
          if (zz < this.totalPasadas - 1) {
            data += ",";
          }
        }
        myDataset += "{\n	label: \"" + label + "\",\n	fillColor : \"" + color + ",0.2)\",\n	strokeColor : \"" + color + ",1)\",\n	pointColor : \"" + color + ",1)\",\n	pointStrokeColor : \"#fff\",\n	pointHighlightFill : \"#fff\",\n	pointHighlightStroke : \"" + color + ",1)\",\n	data : [" + data + "]\n},";
      }
      myDataset = myDataset.substring(0, myDataset.length - 1);
      window.lineChartData = eval("({\n	labels : [" + labels + "],\n	datasets : [" + myDataset + "]\n})\n");
      return graficar();
    };

    motorReaction.prototype.checkPosicion = function(x) {
      var aux, div_prom, fechaPrint, mejora_txt, pasadas_txt, penalizacion, puntaje, puntaje_txt, rec_txt, t_txt, timePrint;
      $("#liveHelp").html("");
      $("#liveHelp1").html("");
      $("#timer").hide();
      if (!this.estado) {
        return;
      }
      if (!this.pausa) {
        this.memoriaJugadas = 0;
        this.t_fin = Date.now();
        if (this.ejercicioSeleccionado !== 7) {
          clearTimeout(this.killTimeout);
        }
        clearTimeout(this.killTimeout1);
        clearTimeout(this.killTimeout3);
        clearInterval(this.killTimeout5);
        clearInterval(this.killTimeout7);
        this.pausa = 1;
        this.t_dif = this.t_fin - this.t_ini;
        if (this.resultado === 1) {
          this.resultado = true;
        }
        if (this.resultado === 0) {
          this.resultado = false;
        }
        if (x === 3) {
          x = !this.resultado;
        }
        aux = 0;
        penalizacion = 0;
        if (this.resultado === x) {
          this.aciertos++;
          this.contador++;
          if (this.ejercicioSeleccionado !== 3 && this.ejercicioSeleccionado !== 7) {
            if (this.tiempoEjercicios[this.ejercicioSeleccionado][0] > 100) {
              aux = parseInt(this.tiempoEjercicios[this.ejercicioSeleccionado][0]) - parseInt(25);
            } else {
              aux = parseInt(this.tiempoEjercicios[this.ejercicioSeleccionado][0]) - parseInt(5);
            }
            if (this.tiempoEjercicios[this.ejercicioSeleccionado][0] > 70) {
              this.tiempoEjercicios[this.ejercicioSeleccionado][0] = aux;
            }
            if (this.tiempoEjercicios[this.ejercicioSeleccionado][1] <= 100) {
              aux = parseInt(this.tiempoEjercicios[this.ejercicioSeleccionado][1]) - parseInt(25);
            } else {
              aux = parseInt(this.tiempoEjercicios[this.ejercicioSeleccionado][1]) - parseInt(5);
            }
            if (this.tiempoEjercicios[this.ejercicioSeleccionado][1] > 70) {
              this.tiempoEjercicios[this.ejercicioSeleccionado][1] = aux;
            }
          }
        } else {
          this.errores++;
          this.contador = 0;
          penalizacion = 2000;
          this.erroresEjercicios[this.ejercicioSeleccionado] += 1;
          if (this.ejercicioSeleccionado !== 3 && this.ejercicioSeleccionado !== 7) {
            if (this.erroresEjercicios[this.ejercicioSeleccionado] === 2) {
              this.erroresEjercicios[this.ejercicioSeleccionado] = 0;
              if (this.tiempoEjercicios[this.ejercicioSeleccionado][0] > 100) {
                aux = parseInt(this.tiempoEjercicios[this.ejercicioSeleccionado][0]) + parseInt(50);
              } else {
                aux = parseInt(this.tiempoEjercicios[this.ejercicioSeleccionado][0]) + parseInt(10);
              }
              this.tiempoEjercicios[this.ejercicioSeleccionado][0] = aux;
              if (this.tiempoEjercicios[this.ejercicioSeleccionado][1] < 100) {
                aux = parseInt(this.tiempoEjercicios[this.ejercicioSeleccionado][1]) + parseInt(50);
              } else {
                aux = parseInt(this.tiempoEjercicios[this.ejercicioSeleccionado][1]) + parseInt(10);
              }
              this.tiempoEjercicios[this.ejercicioSeleccionado][1] = aux;
            }
            if (this.jugadas === 0 && this.tieneMemoria) {
              if (this.tiempoEjercicios[this.ejercicioSeleccionado][0] > 100) {
                aux = parseInt(this.tiempoEjercicios[this.ejercicioSeleccionado][0]) - parseInt(25);
              } else {
                aux = parseInt(this.tiempoEjercicios[this.ejercicioSeleccionado][0]) - parseInt(5);
              }
              this.tiempoEjercicios[this.ejercicioSeleccionado][0] = aux;
              if (this.tiempoEjercicios[this.ejercicioSeleccionado][1] > 100) {
                aux = parseInt(this.tiempoEjercicios[this.ejercicioSeleccionado][1]) - parseInt(25);
              } else {
                aux = parseInt(this.tiempoEjercicios[this.ejercicioSeleccionado][1]) - parseInt(5);
              }
              this.tiempoEjercicios[this.ejercicioSeleccionado][1] = aux;
            }
          }
        }

        /*if @ejercicioSeleccionado != 7
        
        				$("#t#{@ejercicioSeleccionado}").val(@tiempoEjercicios[@ejercicioSeleccionado][0])
        				$("#tt#{@ejercicioSeleccionado}").val(@tiempoEjercicios[@ejercicioSeleccionado][1])
         */
        $("#ok").html(this.aciertos);
        $("#no").html(this.errores);
        this.t_dif += penalizacion;
        this.t_total += this.t_dif;
        this.guardarResultado();
        if (this.jugadas < this.totalPasadas - 1) {
          this.jugadas++;
          return setTimeout(((function(_this) {
            return function() {
              return _this.iniciar();
            };
          })(this)), this.nextQuestionDelay);
        } else {
          this.t_promedio = this.t_total / this.totalPasadas;
          if (this.pasadas === 0) {
            div_prom = 1;
          } else {
            div_prom = 2;
          }
          this.promedio_total = (this.promedio_total + this.t_promedio) / div_prom;
          mejora_txt = "";
          if (this.pasadas > 0) {
            this.mejora = this.promedio_total - this.t_promedio;
            mejora_txt = "Rendimiento: " + Math.round(this.mejora) + " ms";
          }
          this.pasadas++;
          pasadas_txt = this.pasadas + 1;
          t_txt = "";
          puntaje = Math.round(this.aciertos * 100 / this.totalPasadas);
          puntaje_txt = puntaje + "%<br>" + this.aciertos + "-" + this.errores;
          rec_txt = "";
          console.log("t_total:" + this.t_total + "-" + this.t_total / 1000 + "| t_promedio:" + this.t_promedio + "-" + this.t_promedio / 1000);
          if (this.senglarMindMode) {
            console.log("Results");
            this.timeEndSenglarMindMode = Date.now();
            this.timeDiffSenglarMindMode = this.timeEndSenglarMindMode - this.timeInitSenglarMindMode;
            timePrint = getDuration(this.timeDiffSenglarMindMode);
            fechaPrint = moment().format('D MMM, YYYY');
            return setTimeout(((function(_this) {
              return function() {
                return $("#screen").html("<h3>30 Potencias de dos cifras - Senglar Mind - " + fechaPrint + " </h3><br>\n\nTiempo total respuestas: " + timePrint + "\n				");
              };
            })(this)), 500);
          } else {
            return setTimeout(((function(_this) {
              return function() {
                var sl;
                _this.cls();
                _this.t_dif;
                sl = 5;
                $("#controlesMR").show();
                $("#controles2").show();
                if (_this.totalPasadas > 60) {
                  sl = 6;
                }
                $("#screen").html("<h3>Resultados</h3><br>\n\nTiempo total respuestas: " + (getDuration(_this.t_total)) + " | Promedio de tiempo " + (getDuration(_this.t_promedio)) + " | Penalizacion iconrrectas 2 seg. <br>\n								\n<div style=\"width: 1000px;\">\n				                    <div>\n				                        <canvas id=\"canvas\" height=\"200\" width=\"400\"></canvas>\n				                    </div>\n				                </div> 	");
                if (_this.totalPasadas < 60) {
                  _this.dibujarGrafico();
                }
                _this.estado = 0;
                _this.parar = 1;
                return $("#boton-comenzar").attr('value', '▶');
              };
            })(this)), 500);
          }
        }
      }
    };

    motorReaction.prototype.cls = function() {
      return $("#screen").html("<h4>&nbsp;</h4>");
    };

    motorReaction.prototype.tiempo = function() {
      $("#timer").show();
      $("#timerAdentro").css("width", "100%");
      return this.killTimeout5 = setInterval(((function(_this) {
        return function() {
          var marcar, t_dif, t_fin, t_total;
          t_fin = Date.now();
          t_dif = t_fin - _this.t_ini;
          t_total = parseInt(_this.tiempoEjercicios[_this.ejercicioSeleccionado][0]) + parseInt(_this.tiempoEjercicios[_this.ejercicioSeleccionado][1]);
          marcar = 100 - t_dif * 100 / t_total;
          return $("#timerAdentro").css("width", marcar + "%");
        };
      })(this)), 1000);
    };

    motorReaction.prototype.tiempo2 = function() {
      return this.killTimeout6 = setInterval(((function(_this) {
        return function() {
          _this.segundos -= 1;
          if (_this.segundos === 0) {
            return $("#screen").html("");
          } else {
            return $("#screen").html("<center><h4>" + _this.segundos + "</h4></center>");
          }
        };
      })(this)), 1000);
    };

    return motorReaction;

  })();

  $(window).ready(function() {
    return window.juegoReaction = new motorReaction();
  });

}).call(this);

